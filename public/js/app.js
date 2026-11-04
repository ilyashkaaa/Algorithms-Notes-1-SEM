// ==============================================================================
// АиСД Коллоквиум — Frontend Application Logic & Modern Mobile Experience
// ==============================================================================

// 29 Tickets Full Catalog & Metadata
const TICKETS_DATA = [
    { id: 1,  num: "01", module: 1, title: "Сложность алгоритма, O, Θ, Ω", moduleName: "Модуль 1: Анализ, Поиск и Теория чисел" },
    { id: 2,  num: "02", module: 1, title: "Бинарный поиск и вещественный бинпоиск", moduleName: "Модуль 1: Анализ, Поиск и Теория чисел" },
    { id: 3,  num: "03", module: 1, title: "Префиксные суммы и обобщения", moduleName: "Модуль 1: Анализ, Поиск и Теория чисел" },
    { id: 4,  num: "04", module: 1, title: "Факторизация, функция Эйлера, Zm", moduleName: "Модуль 1: Анализ, Поиск и Теория чисел" },
    { id: 5,  num: "05", module: 1, title: "Классическое и линейное решето Эратосфена", moduleName: "Модуль 1: Анализ, Поиск и Теория чисел" },
    { id: 6,  num: "06", module: 2, title: "Нижняя граница сортировок, стабильность", moduleName: "Модуль 2: Сортировки и Пирамиды" },
    { id: 7,  num: "07", module: 2, title: "Сортировка слиянием, число инверсий", moduleName: "Модуль 2: Сортировки и Пирамиды" },
    { id: 8,  num: "08", module: 2, title: "Бинарная пирамида: базовые операции", moduleName: "Модуль 2: Сортировки и Пирамиды" },
    { id: 9,  num: "09", module: 2, title: "Heapify и пирамидальная сортировка", moduleName: "Модуль 2: Сортировки и Пирамиды" },
    { id: 10, num: "10", module: 2, title: "Быстрая сортировка, Partition O(1)", moduleName: "Модуль 2: Сортировки и Пирамиды" },
    { id: 11, num: "11", module: 2, title: "Порядковая статистика со случайным пивотом", moduleName: "Модуль 2: Сортировки и Пирамиды" },
    { id: 12, num: "12", module: 2, title: "Алгоритм медианы медиан", moduleName: "Модуль 2: Сортировки и Пирамиды" },
    { id: 13, num: "13", module: 2, title: "QuickSort с медианой медиан", moduleName: "Модуль 2: Сортировки и Пирамиды" },
    { id: 14, num: "14", module: 2, title: "Порядковая статистика с медианой медиан", moduleName: "Модуль 2: Сортировки и Пирамиды" },
    { id: 15, num: "15", module: 2, title: "Сортировка подсчетом, алгоритм LSD", moduleName: "Модуль 2: Сортировки и Пирамиды" },
    { id: 16, num: "16", module: 3, title: "Амортизация: метод монеток, push_back", moduleName: "Модуль 3: Амортизация и Базовые контейнеры" },
    { id: 17, num: "17", module: 3, title: "Амортизация: метод потенциалов", moduleName: "Модуль 3: Амортизация и Базовые контейнеры" },
    { id: 18, num: "18", module: 3, title: "Линейные контейнеры, очередь со стеками", moduleName: "Модуль 3: Амортизация и Базовые контейнеры" },
    { id: 19, num: "19", module: 4, title: "Бинарное дерево поиска (BST): Find, Insert, Erase", moduleName: "Модуль 4: Деревья поиска" },
    { id: 20, num: "20", module: 4, title: "BST: Порядковая статистика, LowerBound", moduleName: "Модуль 4: Деревья поиска" },
    { id: 21, num: "21", module: 4, title: "AVL-дерево: Повороты, балансировка", moduleName: "Модуль 4: Деревья поиска" },
    { id: 22, num: "22", module: 4, title: "Декартово дерево (Treap)", moduleName: "Модуль 4: Деревья поиска" },
    { id: 23, num: "23", module: 4, title: "Splay-дерево: zig, zig-zig, zig-zag", moduleName: "Модуль 4: Деревья поиска" },
    { id: 24, num: "24", module: 4, title: "Splay-дерево: Split и Merge через Splay", moduleName: "Модуль 4: Деревья поиска" },
    { id: 25, num: "25", module: 5, title: "RMQ, RSQ: online/offline, static/dynamic", moduleName: "Модуль 5: Запросы на отрезках и Неявные ключи" },
    { id: 26, num: "26", module: 5, title: "Разреженная таблица (Sparse Table)", moduleName: "Модуль 5: Запросы на отрезках и Неявные ключи" },
    { id: 27, num: "27", module: 5, title: "Дерево отрезков без групповых операций", moduleName: "Модуль 5: Запросы на отрезках и Неявные ключи" },
    { id: 28, num: "28", module: 5, title: "Дерево отрезков с групповым обновлением", moduleName: "Модуль 5: Запросы на отрезках и Неявные ключи" },
    { id: 29, num: "29", module: 5, title: "Treap по неявному ключу: разворот подотрезка", moduleName: "Модуль 5: Запросы на отрезках и Неявные ключи" }
];

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

let currentTicketId = 22;
const loadedTicketsCache = {};

// Application Bootstrap
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initFontScaleManager();
    initReadingProgress();
    initMobileTicketStrip();
    initMobileBottomBar();
    initBottomSheets();
    initGridSheetContent();
    initScrollTopButton();
    initSearch();
    initTicketSelection();
    initSidebarToggle();
    initSidebarResizer();
});

// ==============================================================================
// 0. Fluid Font Sizing & Pinch-To-Zoom Reflow Manager
// ==============================================================================
let currentFontScale = parseFloat(localStorage.getItem('algo_ticket_font_scale')) || 1.0;
let initialFontScale = 1.0;
let initialPinchDist = 0;

function initFontScaleManager() {
    applyFontScale(currentFontScale, false);

    const ticketContainer = document.getElementById('ticketContainer');
    if (!ticketContainer) return;

    // 1. iOS Safari native gesturestart & gesturechange (prevents optical viewport zoom)
    ticketContainer.addEventListener('gesturestart', (e) => {
        e.preventDefault();
        initialFontScale = currentFontScale;
    }, { passive: false });

    ticketContainer.addEventListener('gesturechange', (e) => {
        e.preventDefault();
        const newScale = initialFontScale * e.scale;
        applyFontScale(newScale, false);
    }, { passive: false });

    ticketContainer.addEventListener('gestureend', (e) => {
        e.preventDefault();
        showToast(`Текст: ${Math.round(currentFontScale * 100)}%`);
    }, { passive: false });

    // 2. Android Chrome & Touch pinch distance calculation
    ticketContainer.addEventListener('touchstart', (e) => {
        if (e.touches.length === 2) {
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            initialPinchDist = Math.hypot(dx, dy);
            initialFontScale = currentFontScale;
        }
    }, { passive: true });

    ticketContainer.addEventListener('touchmove', (e) => {
        if (e.touches.length === 2 && initialPinchDist > 0) {
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            const currentDist = Math.hypot(dx, dy);
            const factor = currentDist / initialPinchDist;
            const newScale = initialFontScale * factor;
            applyFontScale(newScale, false);
        }
    }, { passive: true });

    ticketContainer.addEventListener('touchend', (e) => {
        if (e.touches.length < 2 && initialPinchDist > 0) {
            initialPinchDist = 0;
            showToast(`Текст: ${Math.round(currentFontScale * 100)}%`);
        }
    }, { passive: true });

    // 3. UI Buttons in Materials Sheet
    const btnIncr = document.getElementById('btnFontIncr');
    const btnDecr = document.getElementById('btnFontDecr');
    const btnReset = document.getElementById('btnFontReset');

    if (btnIncr) {
        btnIncr.addEventListener('click', () => applyFontScale(currentFontScale + 0.1, true));
    }
    if (btnDecr) {
        btnDecr.addEventListener('click', () => applyFontScale(currentFontScale - 0.1, true));
    }
    if (btnReset) {
        btnReset.addEventListener('click', () => applyFontScale(1.0, true));
    }
}

function applyFontScale(scale, notify) {
    scale = Math.min(1.7, Math.max(0.8, scale));
    scale = Math.round(scale * 100) / 100;
    currentFontScale = scale;

    document.documentElement.style.setProperty('--ticket-font-scale', scale);
    localStorage.setItem('algo_ticket_font_scale', scale);

    const display = document.getElementById('fontScaleDisplay');
    if (display) {
        display.textContent = `${Math.round(scale * 100)}%`;
    }

    if (notify) {
        showToast(`Текст: ${Math.round(scale * 100)}%`);
    }
}

// ==============================================================================
// 1. Reading Progress Bar (Fixed Top)
// ==============================================================================
function initReadingProgress() {
    const progressBar = document.getElementById('readingProgress');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
        progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }, { passive: true });
}

// ==============================================================================
// 2. Mobile Horizontal Ticket Strip (01..29 Quick Chips)
// ==============================================================================
function initMobileTicketStrip() {
    const strip = document.getElementById('mobileTicketStrip');
    if (!strip) return;

    strip.innerHTML = '';
    TICKETS_DATA.forEach(ticket => {
        const chip = document.createElement('button');
        chip.className = `strip-chip mod-${ticket.module}`;
        chip.setAttribute('data-ticket', ticket.id);
        chip.textContent = ticket.num;
        chip.title = `${ticket.num}. ${ticket.title}`;
        chip.addEventListener('click', () => {
            loadTicket(ticket.id);
        });
        strip.appendChild(chip);
    });
}

function updateMobileTicketStrip(ticketId) {
    const strip = document.getElementById('mobileTicketStrip');
    if (!strip) return;

    const chips = strip.querySelectorAll('.strip-chip');
    chips.forEach(chip => {
        const isActive = chip.getAttribute('data-ticket') === String(ticketId);
        chip.classList.toggle('active', isActive);
        if (isActive) {
            chip.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
    });
}

// ==============================================================================
// 3. Mobile Bottom Navigation Bar
// ==============================================================================
function initMobileBottomBar() {
    const prevBtn = document.getElementById('mobilePrevBtn');
    const nextBtn = document.getElementById('mobileNextBtn');
    const tocBtn = document.getElementById('mobileTocBtn');
    const gridBtn = document.getElementById('mobileGridBtn');
    const matBtnBottom = document.getElementById('mobileMaterialsBtnBottom');
    const matBtnTop = document.getElementById('mobileMaterialsBtn');
    const searchBtnTop = document.getElementById('mobileSearchBtn');
    const navTitleBtn = document.getElementById('mobileNavTitle');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => goToAdjacentTicket(-1));
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', () => goToAdjacentTicket(1));
    }
    if (tocBtn) {
        tocBtn.addEventListener('click', () => openSheet('mobileTocSheet'));
    }
    if (gridBtn) {
        gridBtn.addEventListener('click', () => openSheet('mobileGridSheet'));
    }
    if (matBtnBottom) {
        matBtnBottom.addEventListener('click', () => openSheet('mobileMaterialsSheet'));
    }
    if (matBtnTop) {
        matBtnTop.addEventListener('click', () => openSheet('mobileMaterialsSheet'));
    }
    if (navTitleBtn) {
        navTitleBtn.addEventListener('click', () => openSheet('mobileGridSheet'));
    }
    if (searchBtnTop) {
        searchBtnTop.addEventListener('click', () => {
            openSheet('mobileGridSheet');
            setTimeout(() => {
                const searchInput = document.getElementById('mobileSheetSearchInput');
                if (searchInput) searchInput.focus();
            }, 300);
        });
    }
}

function goToAdjacentTicket(delta) {
    const nextId = currentTicketId + delta;
    if (nextId >= 1 && nextId <= 29) {
        const dirText = delta > 0 ? `Билет ${String(nextId).padStart(2, '0')} →` : `← Билет ${String(nextId).padStart(2, '0')}`;
        showToast(dirText);
        loadTicket(nextId);
    } else if (nextId < 1) {
        showToast('Это первый билет (01)');
    } else {
        showToast('Это последний билет (29)');
    }
}

function updateBottomBarState(ticketId) {
    const prevBtn = document.getElementById('mobilePrevBtn');
    const nextBtn = document.getElementById('mobileNextBtn');
    const navNum = document.getElementById('mobileNavNum');
    const padded = String(ticketId).padStart(2, '0');

    if (navNum) navNum.textContent = padded;

    if (prevBtn) {
        const isFirst = ticketId <= 1;
        prevBtn.disabled = isFirst;
        prevBtn.classList.toggle('disabled', isFirst);
    }
    if (nextBtn) {
        const isLast = ticketId >= 29;
        nextBtn.disabled = isLast;
        nextBtn.classList.toggle('disabled', isLast);
    }
}

// ==============================================================================
// 4. Bottom Sheets Architecture (Modal Drawers with Drag-to-Dismiss)
// ==============================================================================
function initBottomSheets() {
    const backdrop = document.getElementById('sheetBackdrop');
    const closeToc = document.getElementById('closeTocSheet');
    const closeGrid = document.getElementById('closeGridSheet');
    const closeMat = document.getElementById('closeMaterialsSheet');

    if (backdrop) {
        backdrop.addEventListener('click', closeAllSheets);
    }
    if (closeToc) closeToc.addEventListener('click', closeAllSheets);
    if (closeGrid) closeGrid.addEventListener('click', closeAllSheets);
    if (closeMat) closeMat.addEventListener('click', closeAllSheets);

    // Escape key closes sheets
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAllSheets();
    });

    // Touch swipe down on handle bar to dismiss
    document.querySelectorAll('.mobile-sheet').forEach(sheet => {
        const handle = sheet.querySelector('.sheet-handle-bar');
        if (!handle) return;

        let startY = 0;
        let isDragging = false;

        handle.addEventListener('touchstart', (e) => {
            startY = e.touches[0].clientY;
            isDragging = true;
        }, { passive: true });

        handle.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const currentY = e.touches[0].clientY;
            const deltaY = currentY - startY;
            if (deltaY > 0) {
                sheet.style.transform = `translateY(${deltaY}px)`;
            }
        }, { passive: true });

        handle.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            isDragging = false;
            const endY = e.changedTouches[0].clientY;
            const deltaY = endY - startY;
            sheet.style.transform = '';
            if (deltaY > 60) {
                closeAllSheets();
            }
        }, { passive: true });
    });
}

function openSheet(sheetId) {
    closeAllSheets();
    const sheet = document.getElementById(sheetId);
    const backdrop = document.getElementById('sheetBackdrop');
    if (!sheet || !backdrop) return;

    backdrop.classList.add('active');
    sheet.classList.add('active');
    document.body.classList.add('sheet-open');
}

function closeAllSheets() {
    const backdrop = document.getElementById('sheetBackdrop');
    if (backdrop) backdrop.classList.remove('active');

    document.querySelectorAll('.mobile-sheet').forEach(sheet => {
        sheet.classList.remove('active');
        sheet.style.transform = '';
    });
    document.body.classList.remove('sheet-open');
}

// ==============================================================================
// 5. Dynamic TOC Generator for Current Ticket
// ==============================================================================
function generateTocContent(container, ticketId) {
    const tocBody = document.getElementById('sheetTocContent');
    const tocNum = document.getElementById('sheetTocNum');
    const tocTitle = document.getElementById('sheetTocTitle');
    const ticketInfo = TICKETS_DATA.find(t => t.id === Number(ticketId));

    if (tocNum) tocNum.textContent = ticketInfo ? ticketInfo.num : String(ticketId).padStart(2, '0');
    if (tocTitle && ticketInfo) tocTitle.textContent = ticketInfo.title;
    if (!tocBody) return;

    tocBody.innerHTML = '';

    // Collect all sections & headers
    const sections = container.querySelectorAll('section[id], div.vcard[id], [id^="sec-"]');
    if (sections.length === 0) {
        tocBody.innerHTML = '<div style="text-align: center; color: var(--text-muted); padding: 20px;">Разделы не найдены</div>';
        return;
    }

    sections.forEach((sec, idx) => {
        const secId = sec.getAttribute('id');
        if (!secId) return;

        // Determine title text and type
        const pill = sec.querySelector('.vcard-title-pill');
        let titleText = pill ? pill.textContent.trim() : (sec.querySelector('h1, h2, h3, h4')?.textContent.trim() || `Раздел ${idx + 1}`);

        // Classify category
        let itemClass = 'item-def';
        let tagText = 'Раздел';
        const lower = titleText.toLowerCase();

        if (lower.includes('определение') || lower.includes('[определение]')) {
            itemClass = 'item-def';
            tagText = 'Определение';
            titleText = titleText.replace(/\[определение\]/gi, '').trim();
        } else if (lower.includes('теорема') || lower.includes('лемма') || lower.includes('свойство')) {
            itemClass = 'item-thm';
            tagText = 'Теорема';
            titleText = titleText.replace(/\[теорема.*?\]/gi, '').trim();
        } else if (lower.includes('алгоритм') || lower.includes('метод')) {
            itemClass = 'item-alg';
            tagText = 'Алгоритм';
        } else if (lower.includes('код') || lower.includes('java')) {
            itemClass = 'item-code';
            tagText = 'Код';
        } else if (lower.includes('summary') || lower.includes('блиц') || lower.includes('резюме')) {
            itemClass = 'item-blitz';
            tagText = 'Summary';
        } else if (lower.includes('идея') || lower.includes('геометрия')) {
            itemClass = 'item-geo';
            tagText = 'Идея';
        }

        const btn = document.createElement('a');
        btn.className = `sheet-toc-item ${itemClass}`;
        btn.href = `#${secId}`;
        btn.innerHTML = `
            <span>${titleText}</span>
            <span class="sheet-toc-tag">${tagText}</span>
        `;

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            closeAllSheets();
            const targetEl = document.getElementById(secId);
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                targetEl.classList.remove('highlight-pulse');
                void targetEl.offsetWidth; // Trigger reflow
                targetEl.classList.add('highlight-pulse');
            }
        });

        tocBody.appendChild(btn);
    });
}

// ==============================================================================
// 6. Grid & Search Bottom Sheet Content
// ==============================================================================
function initGridSheetContent() {
    const listBody = document.getElementById('mobileSheetListBody');
    const searchInput = document.getElementById('mobileSheetSearchInput');
    const clearBtn = document.getElementById('clearSheetSearch');
    if (!listBody) return;

    renderGridSheet();

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            if (clearBtn) clearBtn.style.display = query ? 'block' : 'none';
            filterGridSheet(query);
        });
    }

    if (clearBtn && searchInput) {
        clearBtn.addEventListener('click', () => {
            searchInput.value = '';
            clearBtn.style.display = 'none';
            filterGridSheet('');
            searchInput.focus();
        });
    }
}

function renderGridSheet() {
    const listBody = document.getElementById('mobileSheetListBody');
    if (!listBody) return;

    listBody.innerHTML = '';

    // 1. Fast Number Grid (1..29)
    const gridWrap = document.createElement('div');
    gridWrap.className = 'sheet-grid-strip';
    gridWrap.id = 'sheetGridNumbers';

    TICKETS_DATA.forEach(ticket => {
        const chip = document.createElement('button');
        chip.className = `sheet-grid-chip mod-${ticket.module}`;
        chip.setAttribute('data-ticket', ticket.id);
        chip.textContent = ticket.num;
        chip.title = `${ticket.num}. ${ticket.title}`;
        chip.addEventListener('click', () => {
            closeAllSheets();
            loadTicket(ticket.id);
        });
        gridWrap.appendChild(chip);
    });
    listBody.appendChild(gridWrap);

    // 2. Grouped Module List
    let currentModule = 0;
    TICKETS_DATA.forEach(ticket => {
        if (ticket.module !== currentModule) {
            currentModule = ticket.module;
            const modHeader = document.createElement('div');
            modHeader.className = 'sheet-module-title';
            modHeader.textContent = ticket.moduleName;
            listBody.appendChild(modHeader);
        }

        const row = document.createElement('div');
        row.className = 'sheet-ticket-row';
        row.setAttribute('data-ticket', ticket.id);
        row.innerHTML = `
            <span class="sheet-ticket-num">${ticket.num}</span>
            <span class="sheet-ticket-name">${ticket.title}</span>
        `;
        row.addEventListener('click', () => {
            closeAllSheets();
            loadTicket(ticket.id);
        });
        listBody.appendChild(row);
    });
}

function filterGridSheet(query) {
    const rows = document.querySelectorAll('.sheet-ticket-row');
    const modHeaders = document.querySelectorAll('.sheet-module-title');
    const gridChips = document.querySelectorAll('.sheet-grid-chip');

    rows.forEach(row => {
        const id = row.getAttribute('data-ticket');
        const num = row.querySelector('.sheet-ticket-num')?.textContent.toLowerCase() || '';
        const name = row.querySelector('.sheet-ticket-name')?.textContent.toLowerCase() || '';
        const content = TICKET_CONTENT_INDEX[id] || '';

        const matches = !query || num.includes(query) || name.includes(query) || content.includes(query);
        row.style.display = matches ? 'flex' : 'none';
    });

    // Filter grid chips too
    gridChips.forEach(chip => {
        const id = chip.getAttribute('data-ticket');
        const num = chip.textContent.toLowerCase();
        const content = TICKET_CONTENT_INDEX[id] || '';
        const ticket = TICKETS_DATA.find(t => t.id === Number(id));
        const name = ticket ? ticket.title.toLowerCase() : '';

        const matches = !query || num.includes(query) || name.includes(query) || content.includes(query);
        chip.style.opacity = matches ? '1' : '0.25';
    });

    // Hide module headers if no visible rows
    modHeaders.forEach(header => {
        let sibling = header.nextElementSibling;
        let hasVisible = false;
        while (sibling && !sibling.classList.contains('sheet-module-title')) {
            if (sibling.classList.contains('sheet-ticket-row') && sibling.style.display !== 'none') {
                hasVisible = true;
                break;
            }
            sibling = sibling.nextElementSibling;
        }
        header.style.display = (!query || hasVisible) ? 'block' : 'none';
    });
}

function updateGridSheetActiveState(ticketId) {
    document.querySelectorAll('.sheet-grid-chip').forEach(chip => {
        chip.classList.toggle('active', chip.getAttribute('data-ticket') === String(ticketId));
    });
    document.querySelectorAll('.sheet-ticket-row').forEach(row => {
        row.classList.toggle('active', row.getAttribute('data-ticket') === String(ticketId));
    });
}

// ==============================================================================
// 7. Notification Toast System
// ==============================================================================
function showToast(message) {
    const toast = document.getElementById('swipeToast');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
        toast.classList.remove('show');
    }, 1200);
}

// ==============================================================================
// 8. Floating Scroll-To-Top Button
// ==============================================================================
function initScrollTopButton() {
    const btn = document.getElementById('scrollTopBtn');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ==============================================================================
// 9. Code Snippets Copy Buttons
// ==============================================================================
function injectCodeCopyButtons(container) {
    const codeBlocks = container.querySelectorAll('pre');
    codeBlocks.forEach(pre => {
        if (pre.querySelector('.code-copy-btn')) return;

        const copyBtn = document.createElement('button');
        copyBtn.className = 'code-copy-btn';
        copyBtn.innerHTML = '📋 Копировать';
        copyBtn.setAttribute('aria-label', 'Скопировать код');

        copyBtn.addEventListener('click', async (e) => {
            e.stopPropagation();
            const code = pre.querySelector('code')?.innerText || pre.innerText;
            try {
                await navigator.clipboard.writeText(code);
                copyBtn.innerHTML = '✓ Скопировано!';
                copyBtn.classList.add('copied');
                setTimeout(() => {
                    copyBtn.innerHTML = '📋 Копировать';
                    copyBtn.classList.remove('copied');
                }, 2000);
            } catch (err) {
                copyBtn.innerHTML = '✓ Скопировано';
            }
        });

        pre.appendChild(copyBtn);
    });
}

// ==============================================================================
// 10. Sidebar Toggle Logic (Desktop collapse + Mobile off-canvas drawer)
// ==============================================================================
function initSidebarToggle() {
    const toggleBtn = document.getElementById('sidebarToggle');
    const sidebar = document.querySelector('.app-sidebar');
    const backdrop = document.getElementById('sidebarBackdrop');
    if (!toggleBtn || !sidebar) return;

    toggleBtn.addEventListener('click', () => {
        const icon = toggleBtn.querySelector('.btn-icon');
        if (window.innerWidth <= 860) {
            const isOpen = document.body.classList.toggle('sidebar-open');
            if (icon) icon.textContent = isOpen ? '✕' : '☰';
        } else {
            const isCollapsed = sidebar.classList.toggle('collapsed');
            document.body.classList.toggle('sidebar-collapsed', isCollapsed);
            if (icon) icon.textContent = isCollapsed ? '☰' : '✕';
        }
    });

    if (backdrop) {
        backdrop.addEventListener('click', () => {
            document.body.classList.remove('sidebar-open');
            const icon = toggleBtn.querySelector('.btn-icon');
            if (icon) icon.textContent = '☰';
        });
    }

    // Auto-close drawer on mobile when clicking a ticket item
    document.querySelectorAll('.ticket-item').forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 860) {
                document.body.classList.remove('sidebar-open');
                const icon = toggleBtn.querySelector('.btn-icon');
                if (icon) icon.textContent = '☰';
            }
        });
    });
}

// ==============================================================================
// 11. Sidebar Resizer (Desktop drag-to-resize)
// ==============================================================================
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

// ==============================================================================
// 12. Search System (Sidebar Search + Highlight in Page)
// ==============================================================================
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

function highlightInPage(query) {
    const content = document.getElementById('ticketContainer');
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

// ==============================================================================
// 13. Dark / Light Theme Toggle
// ==============================================================================
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
    const icon = document.getElementById('themeToggleIcon');
    const text = document.getElementById('themeToggleText');

    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('algo_theme', 'dark');
        if (icon) icon.textContent = '☀️';
        if (text) text.textContent = 'Светлая';
    } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('algo_theme', 'light');
        if (icon) icon.textContent = '🌙';
        if (text) text.textContent = 'Темная';
    }
}

// ==============================================================================
// 14. Dynamic Ticket Loader & Synchronizer
// ==============================================================================
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
    currentTicketId = Number(ticketId);
    const paddedId = String(ticketId).padStart(2, '0');

    // Update active states
    const items = document.querySelectorAll('.ticket-item');
    items.forEach(i => i.classList.toggle('active', i.getAttribute('data-ticket') === String(ticketId)));

    updateMobileTicketStrip(currentTicketId);
    updateBottomBarState(currentTicketId);
    updateGridSheetActiveState(currentTicketId);

    const container = document.getElementById('ticketContainer');
    const wip = document.getElementById('wip-placeholder');
    if (!container || !wip) return;

    if (!loadedTicketsCache[ticketId]) {
        try {
            let res = await fetch(`tickets/ticket_${ticketId}.html?v=2.5`);
            if (!res.ok) {
                res = await fetch(`tickets/ticket_${paddedId}.html?v=2.5`);
            }
            if (res.ok) {
                const html = await res.text();
                loadedTicketsCache[ticketId] = html;
            } else {
                throw new Error(`Ticket ${ticketId} not found`);
            }
        } catch (err) {
            container.style.display = 'none';
            wip.style.display = 'block';
            const item = document.querySelector(`.ticket-item[data-ticket="${ticketId}"]`);
            const ticketTitle = item?.querySelector('.ticket-name')?.textContent || '';
            const ticketNum = item?.querySelector('.ticket-num')?.textContent || paddedId;
            document.getElementById('wip-title').textContent = `${ticketNum} ${ticketTitle}`;
            window.history.replaceState(null, '', `#ticket-${ticketId}`);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
    }

    wip.style.display = 'none';
    container.style.display = 'grid';
    container.innerHTML = loadedTicketsCache[ticketId];

    // Prepare independently scrollable blocks (.vcard, tables, etc.)
    prepareScrollableBlocks(container);

    // Generate TOC content for mobile bottom sheet
    generateTocContent(container, currentTicketId);

    // Inject code copy buttons
    injectCodeCopyButtons(container);

    // Close mobile inline accordion on link click
    container.querySelectorAll('.mobile-toc-nav a').forEach(link => {
        link.addEventListener('click', () => {
            const acc = container.querySelector('.mobile-toc-accordion');
            if (acc) acc.removeAttribute('open');
        });
    });

    // Re-render MathJax equations
    if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise([container]).then(() => {
            enableMouseDragScroll(container);
        }).catch(() => {});
    }

    window.history.replaceState(null, '', `#ticket-${ticketId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 14. Independent Horizontal Scroll Manager for Blocks on Mobile & Desktop
function prepareScrollableBlocks(container) {
    if (!container) return;

    // Wrap each .vcard inner content into .vcard-scroll-wrap if not already wrapped
    const vcards = container.querySelectorAll('.vcard');
    vcards.forEach(card => {
        if (!card.querySelector(':scope > .vcard-scroll-wrap')) {
            const wrap = document.createElement('div');
            wrap.className = 'vcard-scroll-wrap';
            while (card.firstChild) {
                wrap.appendChild(card.firstChild);
            }
            card.appendChild(wrap);
        }
    });

    // Ensure any table is in a scroll wrapper
    const tables = container.querySelectorAll('table');
    tables.forEach(table => {
        const parent = table.parentElement;
        if (!parent || (!parent.classList.contains('table-scroll-wrap') && !parent.getAttribute('style')?.includes('overflow-x'))) {
            const wrap = document.createElement('div');
            wrap.className = 'table-scroll-wrap';
            table.parentNode.insertBefore(wrap, table);
            wrap.appendChild(table);
        }
    });

    // Enable drag-to-scroll for mouse / desktop users
    enableMouseDragScroll(container);
}

function enableMouseDragScroll(container) {
    const scrollables = container.querySelectorAll('.vcard, .table-scroll-wrap, pre, mjx-container[jax="CHTML"][display="true"], [style*="overflow-x: auto"]');
    scrollables.forEach(el => {
        if (el.__dragScrollAttached) return;
        el.__dragScrollAttached = true;

        let isDown = false;
        let startX = 0;
        let scrollLeft = 0;
        let hasMoved = false;

        el.addEventListener('mousedown', (e) => {
            if (e.button !== 0 || e.target.closest('a, button, input, summary, details')) return;
            isDown = true;
            hasMoved = false;
            startX = e.pageX - el.offsetLeft;
            scrollLeft = el.scrollLeft;
        });

        window.addEventListener('mouseup', () => {
            if (isDown) {
                isDown = false;
                el.classList.remove('is-dragging');
            }
        });

        el.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            const x = e.pageX - el.offsetLeft;
            const walk = (x - startX);
            if (Math.abs(walk) > 4) {
                hasMoved = true;
                el.classList.add('is-dragging');
                el.scrollLeft = scrollLeft - walk;
            }
        });

        el.addEventListener('click', (e) => {
            if (hasMoved) {
                e.preventDefault();
                e.stopPropagation();
            }
        }, true);
    });
}

// 15. Download PDF Handler via Browser Native Print Engine
function downloadPdf() {
    window.print();
}
