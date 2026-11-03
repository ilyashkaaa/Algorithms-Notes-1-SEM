// ==============================================================================
// АиСД Коллоквиум — Frontend Application Logic
// ==============================================================================

// Keyword & content index for all 29 tickets (for comprehensive search)
const TICKET_CONTENT_INDEX = {
    1: "сложность асимптотика временная пространственная память о большое омега тета o big-o omega theta константа сравнения примеры",
    2: "бинарный поиск бинпоиск по ответу вещественный monothonicity непрерывный монотонность точность eps",
    3: "префиксные суммы ассоциативная операция обратимая операция группа полугруппа rsq префиксы",
    4: "факторизация чисел функция эйлера zm вычеты кольцо малая теорема ферма теорема эйлера обратный по модулю алгоритм евклида расширенный диофантово",
    5: "решето эратосфена простое число простые числа n log log n линейное решето минделитель минимальный простой делитель факторизация за линейное",
    6: "сортировки нижняя граница времени сравнения n log n информационная энтропия дерево решений стабильная сортировка устойчивая инвариант",
    7: "сортировка слиянием merge sort инверсии подсчет инверсий разделяй и властвуй рекурсия",
    8: "бинарная пирамида двоичная куча heap свойство пирамиды siftup siftdown просеивание вверх вниз extract min max insert",
    9: "бинарная пирамида heapify построение кучи за линейное время пирамидальная сортировка heapsort o(n)",
    10: "быстрая сортировка quicksort partition lomuto hoare разделение на месте o(1) доппамять случайный пивот рандомизация",
    11: "поиск порядковой статистики quickselect k-я статистика случайный пивот математическое ожидание o(n)",
    12: "алгоритм медианы медиан bfprt деление на пятерки поиск медианы детерминированный выбор пивота время работы",
    13: "быстрая сортировка медиана медиан quicksort худший случай гарантированное o(n log n)",
    14: "поиск порядковой статистики медиана медиан детерминированный алгоритм o(n)",
    15: "сортировка подсчетом counting sort стабильный вариант lsd поразрядная цифровая radix sort разряды",
    16: "амортизированный анализ метод монеток бухгалтерский учет динамический массив push_back capacity учетная стоимость кредиты",
    17: "амортизированный анализ метод потенциалов фи потенциал phi push_back dynamic array телескопическая сумма",
    18: "линейные контейнеры односвязный двусвязный список стек очередь дек кольцевой буфер ring buffer очередь на двух стеках ассоциативная операция rmq",
    19: "бинарное дерево поиска bst find insert erase удаление слияние детей поиск вставка дерево поиска",
    20: "бинарное дерево поиска bst lowerbound порядковая статистика size размер поддерева ранг поиск элемента по номеру",
    21: "avl дерево авл повороты балансировка теорема о высоте фибоначчи малый правый левый поворот большой поворот баланс фактора",
    22: "декартово дерево treap дерамида кучедерево split merge bst куча heap существование единственность индукция теорема о высоте индикаторы индикаторные случайные величины случайные приоритеты java++ erasefast find lowerbound дубликаты вихрь мерсенна стековый переполнение персистентность неявный ключ rmq rsq ловушки экзаменатора инвариант max-heap",
    23: "splay дерево сплей zig zig-zig zig-zag вращения лемма о доступе теорема о времени операции splay амортизация",
    24: "splay дерево операции через splay split merge разрезание слияние выразимость",
    25: "rmq rsq range minimum sum query static dynamic online offline постановки задач запросы на отрезках",
    26: "разреженная таблица sparse table st idempotency идемпотентность o(1) на запрос степень двойки o(n log n) предподсчет",
    27: "дерево отрезков segment tree область применимости построение изменение в точке точечный запрос сумма минимум без группового",
    28: "дерево отрезков segment tree lazy propagation отложенная модификация групповое обновление массовые операции пуш push проталкивание",
    29: "декартово дерево по неявному ключу implicit treap разворот подотрезка reverse перевернуть подотрезок массив супермассив size"
};

document.addEventListener('DOMContentLoaded', () => {
    initSearch();
    initTheme();
    initTicketSelection();
    initSidebarToggle();
    initSidebarResizer();
});

// 1. Sidebar Toggle Logic
function initSidebarToggle() {
    const toggleBtn = document.getElementById('sidebarToggle');
    const sidebar = document.querySelector('.app-sidebar');
    if (!toggleBtn || !sidebar) return;

    toggleBtn.addEventListener('click', () => {
        const isCollapsed = sidebar.classList.toggle('collapsed');
        document.body.classList.toggle('sidebar-collapsed', isCollapsed);
        toggleBtn.innerHTML = isCollapsed ? '☰ Меню' : '✕ Меню';
    });
}

// 2. Sidebar Resizer (Drag right edge to change width, remembers in CSS variable & localStorage)
function initSidebarResizer() {
    const resizer = document.getElementById('sidebarResizer');
    const sidebar = document.querySelector('.app-sidebar');
    if (!resizer || !sidebar) return;

    const savedWidth = localStorage.getItem('algo_sidebar_width');
    if (savedWidth) {
        document.documentElement.style.setProperty('--sidebar-width', savedWidth + 'px');
    }

    let isResizing = false;

    resizer.addEventListener('mousedown', (e) => {
        isResizing = true;
        resizer.classList.add('is-resizing');
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';
        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (!isResizing) return;
        const newWidth = Math.max(260, Math.min(e.clientX, 650));
        document.documentElement.style.setProperty('--sidebar-width', newWidth + 'px');
    });

    document.addEventListener('mouseup', () => {
        if (isResizing) {
            isResizing = false;
            resizer.classList.remove('is-resizing');
            document.body.style.cursor = '';
            document.body.style.userSelect = '';
            const widthVal = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sidebar-width'), 10);
            if (widthVal) {
                localStorage.setItem('algo_sidebar_width', widthVal);
            }
        }
    });
}

// 3. Search Filter across tickets + content indexing + in-page highlighting
function initSearch() {
    const searchInput = document.getElementById('ticketSearch');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const items = document.querySelectorAll('.ticket-item');

        items.forEach(item => {
            const ticketId = item.getAttribute('data-ticket');
            const num = item.querySelector('.ticket-num')?.textContent.toLowerCase() || '';
            const name = item.querySelector('.ticket-name')?.textContent.toLowerCase() || '';
            const content = TICKET_CONTENT_INDEX[ticketId] || '';

            const matches = !query || num.includes(query) || name.includes(query) || content.includes(query);
            item.style.display = matches ? 'flex' : 'none';
        });

        highlightInPage(query);
    });
}

// Clean in-page text search highlighting
function highlightInPage(query) {
    const content = document.getElementById('ticket22-content');
    if (!content) return;

    const existingMarks = content.querySelectorAll('mark.search-highlight');
    existingMarks.forEach(mark => {
        const parent = mark.parentNode;
        parent.replaceChild(document.createTextNode(mark.textContent), mark);
        parent.normalize();
    });

    if (!query || query.length < 2) return;

    const walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT, {
        acceptNode: (node) => {
            const parent = node.parentElement;
            if (!parent) return NodeFilter.FILTER_REJECT;
            const tag = parent.tagName.toLowerCase();
            if (tag === 'script' || tag === 'style' || tag === 'pre' || tag === 'code' || parent.closest('.vcard-code') || parent.closest('mjx-container')) {
                return NodeFilter.FILTER_REJECT;
            }
            return NodeFilter.FILTER_ACCEPT;
        }
    });

    const nodesToHighlight = [];
    while (walker.nextNode()) {
        const node = walker.currentNode;
        if (node.nodeValue.toLowerCase().includes(query)) {
            nodesToHighlight.push(node);
        }
    }

    nodesToHighlight.forEach(node => {
        const text = node.nodeValue;
        const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
        const frag = document.createDocumentFragment();
        let lastIdx = 0;
        let match;

        while ((match = regex.exec(text)) !== null) {
            if (match.index > lastIdx) {
                frag.appendChild(document.createTextNode(text.substring(lastIdx, match.index)));
            }
            const mark = document.createElement('mark');
            mark.className = 'search-highlight';
            mark.textContent = match[0];
            frag.appendChild(mark);
            lastIdx = regex.lastIndex;
        }

        if (lastIdx < text.length) {
            frag.appendChild(document.createTextNode(text.substring(lastIdx)));
        }

        node.parentNode.replaceChild(frag, node);
    });
}

function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// 4. Dark / Light Theme Toggle
function initTheme() {
    const themeBtn = document.getElementById('themeToggle');
    if (!themeBtn) return;

    const savedTheme = localStorage.getItem('algo_theme') || 'light';
    applyTheme(savedTheme);

    themeBtn.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const newTheme = isDark ? 'light' : 'dark';
        applyTheme(newTheme);
    });
}

function applyTheme(theme) {
    const themeBtn = document.getElementById('themeToggle');
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('algo_theme', 'dark');
        if (themeBtn) themeBtn.innerHTML = '☀️ Светлая';
    } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('algo_theme', 'light');
        if (themeBtn) themeBtn.innerHTML = '🌙 Темная';
    }
}

// 5. Dynamic Ticket Loader & Selection (Variant A Architecture)
const loadedTicketsCache = {};

function initTicketSelection() {
    const items = document.querySelectorAll('.ticket-item');
    items.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const ticketId = item.getAttribute('data-ticket');
            loadTicket(ticketId);
        });
    });

    // Check URL hash on page load
    const hash = window.location.hash;
    const match = hash.match(/ticket-(\d+)/);
    const initialTicket = match ? match[1] : '22';
    loadTicket(initialTicket);

    window.addEventListener('hashchange', () => {
        const h = window.location.hash;
        const m = h.match(/ticket-(\d+)/);
        if (m) loadTicket(m[1]);
    });
}

async function loadTicket(ticketId) {
    const items = document.querySelectorAll('.ticket-item');
    items.forEach(i => i.classList.toggle('active', i.getAttribute('data-ticket') === String(ticketId)));

    const container = document.getElementById('ticketContainer');
    const wip = document.getElementById('wip-placeholder');
    if (!container || !wip) return;

    if (ticketId === '22') {
        wip.style.display = 'none';
        container.style.display = 'grid';

        if (!loadedTicketsCache[ticketId]) {
            try {
                const res = await fetch(`tickets/ticket_${ticketId}.html`);
                if (res.ok) {
                    const html = await res.text();
                    loadedTicketsCache[ticketId] = html;
                    container.innerHTML = html;
                } else {
                    throw new Error(`HTTP ${res.status}`);
                }
            } catch (err) {
                console.error(`Error loading ticket ${ticketId}:`, err);
            }
        } else {
            container.innerHTML = loadedTicketsCache[ticketId];
        }

        // Re-render MathJax equations
        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise([container]);
        }
        window.history.replaceState(null, '', `#ticket-${ticketId}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        container.style.display = 'none';
        wip.style.display = 'block';

        const item = document.querySelector(`.ticket-item[data-ticket="${ticketId}"]`);
        const ticketTitle = item?.querySelector('.ticket-name')?.textContent || '';
        const ticketNum = item?.querySelector('.ticket-num')?.textContent || '';
        document.getElementById('wip-title').textContent = `${ticketNum} ${ticketTitle}`;
        window.history.replaceState(null, '', `#ticket-${ticketId}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// 6. Download PDF Handler via Browser Native Print Engine
function downloadPdf() {
    window.print();
}
