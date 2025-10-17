// Widget toggle ve hide
document.querySelectorAll(".widget .widget-toggle").forEach(btn => {
  btn.addEventListener("click", () => {
    const widgetBody = btn.closest(".widget").querySelector(".widget-body");
    if (widgetBody.style.display === "none") {
      widgetBody.style.display = "block";
      btn.textContent = "−";
    } else {
      widgetBody.style.display = "none";
      btn.textContent = "+";
    }
  });
});

document.querySelectorAll(".widget .widget-hide").forEach(btn => {
  btn.addEventListener("click", () => {
    const widget = btn.closest(".widget");
    widget.style.display = "none";
    // opsiyonel: localStorage'da kaydet
  });
});

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

const store = {
  get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  set(k, v) { localStorage.setItem(k, JSON.stringify(v)); }
};

const i18n = {
  en: {
    "app.title":"Budget Tracker Pro",
    "dashboard.totalIncome":"Total Income",
    "dashboard.totalExpenses":"Total Expenses",
    "dashboard.netBalance":"Net Balance",
    "alerts.budgetExceeded":"Budget exceeded!",
    "actions.addIncome":"Add Income",
    "actions.addExpense":"Add Expense",
    "actions.setBudget":"Set Budget",
    "actions.manageCategories":"Categories",
    "actions.export":"Export",
    "actions.import":"Import",
    "actions.cancel":"Cancel",
    "actions.save":"Save",
    "actions.close":"Close",
    "actions.add":"Add",
    "actions.exportCSV":"Export as CSV",
    "actions.exportJSON":"Export as JSON",
    "filters.allAccounts":"All Accounts",
    "filters.allCategories":"All Categories",
    "widgets.transactions":"Transactions",
    "widgets.charts":"Charts",
    "widgets.analytics":"Analytics",
    "widgets.budget":"Budget",
    "charts.byCategory":"By Category",
    "charts.monthly":"Monthly",
    "charts.trend":"Trend",
    "messages.noTransactions":"No transactions yet. Add your first transaction!",
    "messages.noBudget":"No budget set. Click 'Set Budget' to get started.",
    "modal.addTransaction":"Add Transaction",
    "modal.setBudget":"Set Monthly Budget",
    "modal.manageCategories":"Manage Categories",
    "modal.exportData":"Export Data",
    "form.type":"Type",
    "form.income":"Income",
    "form.expense":"Expense",
    "form.amount":"Amount",
    "form.category":"Category",
    "form.account":"Account/Card",
    "form.date":"Date",
    "form.notes":"Notes (Optional)",
    "form.budgetAmount":"Monthly Budget Amount",
    "form.budgetMonth":"Month",
    "categories.income":"Income Categories",
    "categories.expense":"Expense Categories"
  },
  tr: {
    "app.title":"Bütçe Takip",
    "dashboard.totalIncome":"Toplam Gelir",
    "dashboard.totalExpenses":"Toplam Gider",
    "dashboard.netBalance":"Net Bakiye",
    "alerts.budgetExceeded":"Bütçe aşıldı!",
    "actions.addIncome":"Gelir Ekle",
    "actions.addExpense":"Gider Ekle",
    "actions.setBudget":"Bütçe Belirle",
    "actions.manageCategories":"Kategoriler",
    "actions.export":"Dışa Aktar",
    "actions.import":"İçe Aktar",
    "actions.cancel":"İptal",
    "actions.save":"Kaydet",
    "actions.close":"Kapat",
    "actions.add":"Ekle",
    "actions.exportCSV":"CSV Olarak Dışa Aktar",
    "actions.exportJSON":"JSON Olarak Dışa Aktar",
    "filters.allAccounts":"Tüm Hesaplar",
    "filters.allCategories":"Tüm Kategoriler",
    "widgets.transactions":"Hareketler",
    "widgets.charts":"Grafikler",
    "widgets.analytics":"Analiz",
    "widgets.budget":"Bütçe",
    "charts.byCategory":"Kategoriye Göre",
    "charts.monthly":"Aylık",
    "charts.trend":"Trend",
    "messages.noTransactions":"Henüz hareket yok. İlk işlemi ekleyin!",
    "messages.noBudget":"Bütçe yok. Başlamak için 'Bütçe Belirle'ye tıklayın.",
    "modal.addTransaction":"İşlem Ekle",
    "modal.setBudget":"Aylık Bütçe Belirle",
    "modal.manageCategories":"Kategorileri Yönet",
    "modal.exportData":"Veri Dışa Aktar",
    "form.type":"Tür",
    "form.income":"Gelir",
    "form.expense":"Gider",
    "form.amount":"Tutar",
    "form.category":"Kategori",
    "form.account":"Hesap/Kart",
    "form.date":"Tarih",
    "form.notes":"Notlar (Opsiyonel)",
    "form.budgetAmount":"Aylık Bütçe Tutarı",
    "form.budgetMonth":"Ay",
    "categories.income":"Gelir Kategorileri",
    "categories.expense":"Gider Kategorileri"
  },
  de: {
    "app.title":"Budget-Tracker",
    "dashboard.totalIncome":"Gesamteinnahmen",
    "dashboard.totalExpenses":"Gesamtausgaben",
    "dashboard.netBalance":"Nettosaldo",
    "alerts.budgetExceeded":"Budget überschritten!",
    "actions.addIncome":"Einnahme hinzufügen",
    "actions.addExpense":"Ausgabe hinzufügen",
    "actions.setBudget":"Budget festlegen",
    "actions.manageCategories":"Kategorien",
    "actions.export":"Exportieren",
    "actions.import":"Importieren",
    "actions.cancel":"Abbrechen",
    "actions.save":"Speichern",
    "actions.close":"Schließen",
    "actions.add":"Hinzufügen",
    "actions.exportCSV":"Als CSV exportieren",
    "actions.exportJSON":"Als JSON exportieren",
    "filters.allAccounts":"Alle Konten",
    "filters.allCategories":"Alle Kategorien",
    "widgets.transactions":"Transaktionen",
    "widgets.charts":"Diagramme",
    "widgets.analytics":"Analyse",
    "widgets.budget":"Budget",
    "charts.byCategory":"Nach Kategorie",
    "charts.monthly":"Monatlich",
    "charts.trend":"Trend",
    "messages.noTransactions":"Noch keine Transaktionen. Füge die erste hinzu!",
    "messages.noBudget":"Kein Budget festgelegt. Klicke auf 'Budget festlegen'.",
    "modal.addTransaction":"Transaktion hinzufügen",
    "modal.setBudget":"Monatsbudget festlegen",
    "modal.manageCategories":"Kategorien verwalten",
    "modal.exportData":"Daten exportieren",
    "form.type":"Typ",
    "form.income":"Einnahme",
    "form.expense":"Ausgabe",
    "form.amount":"Betrag",
    "form.category":"Kategorie",
    "form.account":"Konto/Karte",
    "form.date":"Datum",
    "form.notes":"Notizen (Optional)",
    "form.budgetAmount":"Monatliches Budget",
    "form.budgetMonth":"Monat",
    "categories.income":"Einnahmekategorien",
    "categories.expense":"Ausgabenkategorien"
  },
  mk: {
    "app.title":"Буџет Тракер",
    "dashboard.totalIncome":"Вкупни Приходи",
    "dashboard.totalExpenses":"Вкупни Трошоци",
    "dashboard.netBalance":"Нето Салдо",
    "alerts.budgetExceeded":"Надминат буџет!",
    "actions.addIncome":"Додади Приход",
    "actions.addExpense":"Додади Трошок",
    "actions.setBudget":"Постави Буџет",
    "actions.manageCategories":"Категории",
    "actions.export":"Извези",
    "actions.import":"Внеси",
    "actions.cancel":"Откажи",
    "actions.save":"Зачувај",
    "actions.close":"Затвори",
    "actions.add":"Додади",
    "actions.exportCSV":"Извези како CSV",
    "actions.exportJSON":"Извези како JSON",
    "filters.allAccounts":"Сите Сметки",
    "filters.allCategories":"Сите Категории",
    "widgets.transactions":"Трансакции",
    "widgets.charts":"Графици",
    "widgets.analytics":"Аналитика",
    "widgets.budget":"Буџет",
    "charts.byCategory":"По Категорија",
    "charts.monthly":"Месечно",
    "charts.trend":"Тренд",
    "messages.noTransactions":"Нема трансакции. Додадете прва!",
    "messages.noBudget":"Нема буџет. Кликнете „Постави Буџет“.",
    "modal.addTransaction":"Додади Трансакција",
    "modal.setBudget":"Постави Месечен Буџет",
    "modal.manageCategories":"Управувај Категории",
    "modal.exportData":"Извези Податоци",
    "form.type":"Тип",
    "form.income":"Приход",
    "form.expense":"Трошок",
    "form.amount":"Износ",
    "form.category":"Категорија",
    "form.account":"Сметка/Картичка",
    "form.date":"Датум",
    "form.notes":"Белешки (Опц.)",
    "form.budgetAmount":"Месечен Буџет",
    "form.budgetMonth":"Месец",
    "categories.income":"Категории на Приход",
    "categories.expense":"Категории на Трошок"
  }
};

const fmt = (n, currency) => new Intl.NumberFormat(undefined, { style: 'currency', currency }).format(n);

const App = (() => {
  let state = {
    currency: store.get('currency', 'USD'),
    locale: store.get('locale', 'en'),
    rates: store.get('rates', { base: 'USD', date: null, map: { USD: 1 } }),
    categories: store.get('categories', {
      income: [{ name: 'Salary', color: '#10b981' }, { name: 'Bonus', color: '#22c55e' }],
      expense: [{ name: 'Food', color: '#ef4444' }, { name: 'Rent', color: '#f97316' }, { name: 'Transport', color: '#3b82f6' }]
    }),
    transactions: store.get('transactions', []),
    budgets: store.get('budgets', {}), // { 'YYYY-MM': amount in base currency }
    hiddenWidgets: store.get('hiddenWidgets', []),
    widgetOrder: store.get('widgetOrder', ['transactions','charts','analytics','budget']),
    chartType: store.get('chartType', 'pie')
  };

  let chart;

  function convertToCurrency(amount, from, to) {
    if (from === to) return amount;
    const baseUSD = amount / (state.rates.map[from] || 1);
    return baseUSD * (state.rates.map[to] || 1);
  }

  async function fetchRates(base = 'USD') {
    try {
      const res = await fetch(`https://api.frankfurter.app/latest?from=${base}`);
      const data = await res.json();
      const map = { [base]: 1, ...data.rates };
      state.rates = { base, date: data.date, map };
      store.set('rates', state.rates);
    } catch {
      /* ignore network errors; keep last */
    }
  }

  function saveState() {
    store.set('currency', state.currency);
    store.set('locale', state.locale);
    store.set('categories', state.categories);
    store.set('transactions', state.transactions);
    store.set('budgets', state.budgets);
    store.set('hiddenWidgets', state.hiddenWidgets);
    store.set('widgetOrder', state.widgetOrder);
    store.set('chartType', state.chartType);
  }

  function applyI18n() {
    const dict = i18n[state.locale] || i18n.en;
    $$('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n');
      if (dict[k]) el.textContent = dict[k];
    });
    document.title = dict['app.title'] || 'Budget';
    updateCharts(true);
  }

  function setThemeToggle() {
    $('#themeToggle').addEventListener('click', () => {
      const html = document.documentElement;
      html.setAttribute('data-theme', html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  }

  function openModal(id) { $(id).classList.add('show'); }
  function closeModal(el) {
    const modal = el.closest('.modal');
    if (modal) modal.classList.remove('show');
  }

  function initModals() {
    $$('#transactionModal [data-close], #budgetModal [data-close], #categoriesModal [data-close], #exportModal [data-close], .modal .modal-close').forEach(b => {
      b.addEventListener('click', e => closeModal(e.currentTarget));
    });
    $$('.modal').forEach(m => m.addEventListener('click', e => { if (e.target === m) m.classList.remove('show'); }));
    $('#addIncomeBtn').addEventListener('click', () => showTransactionModal('income'));
    $('#addExpenseBtn').addEventListener('click', () => showTransactionModal('expense'));
    $('#setBudgetBtn').addEventListener('click', () => openModal('#budgetModal'));
    $('#manageCategoriesBtn').addEventListener('click', initCategoriesModal);
    $('#exportBtn').addEventListener('click', () => openModal('#exportModal'));
    $('#importBtn').addEventListener('click', () => $('#importFileInput').click());
    $('#closeBudgetAlert').addEventListener('click', () => $('#budgetAlert').classList.add('hidden'));
  }

  function monthKeyFromDateStr(s) { const d = new Date(s); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`; }
  function getActiveMonthRange() {
    const from = $('#dateFrom').value ? new Date($('#dateFrom').value) : null;
    const to = $('#dateTo').value ? new Date($('#dateTo').value) : null;
    return { from, to };
  }

  function renderFilters() {
    const accs = Array.from(new Set(state.transactions.map(t => t.account))).filter(Boolean).sort();
    const accountFilter = $('#accountFilter');
    accountFilter.innerHTML = `<option value="all" data-i18n="filters.allAccounts">All Accounts</option>` + accs.map(a => `<option value="${a}">${a}</option>`).join('');
    const allCats = [...state.categories.income.map(c=>c.name), ...state.categories.expense.map(c=>c.name)];
    const categoryFilter = $('#categoryFilter');
    categoryFilter.innerHTML = `<option value="all" data-i18n="filters.allCategories">All Categories</option>` + allCats.map(c => `<option value="${c}">${c}</option>`).join('');
    applyI18n();
  }

  function renderCategoriesSelect() {
    const sel = $('#transactionCategory');
    const type = $('#transactionType').value;
    const list = type === 'income' ? state.categories.income : state.categories.expense;
    sel.innerHTML = list.map(c => `<option value="${c.name}">${c.name}</option>`).join('');
  }

  function showTransactionModal(preType) {
    $('#transactionForm').reset();
    $('#transactionType').value = preType;
    renderCategoriesSelect();
    $('#modalTitle').setAttribute('data-i18n', 'modal.addTransaction');
    $('#modalTitle').textContent = i18n[state.locale]['modal.addTransaction'] || 'Add Transaction';
    $('#transactionDate').valueAsDate = new Date();
    openModal('#transactionModal');
  }

  function animatedNumber(el, from, to, duration=400) {
    const start = performance.now();
    function step(now) {
      const p = Math.min(1, (now - start)/duration);
      const val = from + (to - from)*p;
      el.textContent = fmt(val, state.currency);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function computeAggregates(filtered) {
    const inc = filtered.filter(t => t.type==='income').reduce((a,b)=>a+b.amountCcy,0);
    const exp = filtered.filter(t => t.type==='expense').reduce((a,b)=>a+b.amountCcy,0);
    return { inc, exp, net: inc - exp };
  }

  function applyFilters() {
    const acc = $('#accountFilter').value;
    const cat = $('#categoryFilter').value;
    const { from, to } = getActiveMonthRange();
    return state.transactions.filter(t => {
      if (acc !== 'all' && t.account !== acc) return false;
      if (cat !== 'all' && t.category !== cat) return false;
      const d = new Date(t.date);
      if (from && d < from) return false;
      if (to && d > to) return false;
      return true;
    });
  }

  function renderTransactions() {
    const list = $('#transactionsList');
    const filtered = applyFilters().sort((a,b)=> new Date(b.date) - new Date(a.date));
    if (!filtered.length) { list.innerHTML = `<li class="empty" data-i18n="messages.noTransactions">No transactions yet. Add your first transaction!</li>`; applyI18n(); updateStats(); updateCharts(); renderAnalytics(); return; }
    list.innerHTML = '';
    filtered.forEach(t => {
      const li = document.createElement('li');
      li.className = 'item swipe-delete';
      li.setAttribute('data-id', t.id);
      const catColor = (t.type==='income' ? state.categories.income : state.categories.expense).find(c=>c.name===t.category)?.color || '#64748b';
      li.innerHTML = `
        <span class="badge" style="background:${catColor}">${t.category}</span>
        <div>${t.account}</div>
        <div class="meta"><span>${new Date(t.date).toLocaleDateString()}</span>${t.notes?`<span>• ${t.notes}</span>`:''}</div>
        <div class="amount ${t.type}">${fmt(t.amountCcy, state.currency)}</div>
      `;
      addSwipeToDelete(li, () => deleteTransaction(t.id));
      list.appendChild(li);
    });
    updateStats();
    updateCharts();
    renderAnalytics();
  }

  function updateStats() {
    const filtered = applyFilters();
    const agg = computeAggregates(filtered);
    animatedNumber($('#totalIncome'), parseNumber($('#totalIncome').textContent), agg.inc);
    animatedNumber($('#totalExpenses'), parseNumber($('#totalExpenses').textContent), agg.exp);
    animatedNumber($('#netBalance'), parseNumber($('#netBalance').textContent), agg.net);
    const mKey = monthKeyFromDateStr((filtered[0]?.date) || new Date());
    const totalExpThisMonth = state.transactions
      .filter(t => t.type==='expense' && monthKeyFromDateStr(t.date)===mKey)
      .reduce((a,b)=>a+b.amountCcy,0);
    const budget = state.budgets[mKey];
    if (budget && totalExpThisMonth > budget) $('#budgetAlert').classList.remove('hidden');
    else $('#budgetAlert').classList.add('hidden');
    renderBudgetWidget();
  }

  function parseNumber(s) {
    const n = Number(String(s).replace(/[^\d.-]/g,''));
    return isNaN(n) ? 0 : n;
  }

  function addTransaction(t) {
    const id = crypto.randomUUID();
    const baseCurrency = state.rates.base || 'USD';
    const amountBase = convertToCurrency(t.amount, state.currency, baseCurrency); // normalize at current display currency back to base
    const amountCcy = t.amount; // amount in current selected currency for display convenience
    state.transactions.push({ id, type: t.type, amountBase, amountCcy, currency: state.currency, category: t.category, account: t.account, date: t.date, notes: t.notes || '' });
    saveState();
    renderFilters();
    renderTransactions();
  }

  function deleteTransaction(id) {
    state.transactions = state.transactions.filter(t => t.id !== id);
    saveState();
    renderFilters();
    renderTransactions();
  }

  function handleTransactionForm() {
    $('#transactionType').addEventListener('change', renderCategoriesSelect);
    $('#transactionForm').addEventListener('submit', e => {
      e.preventDefault();
      const t = {
        type: $('#transactionType').value,
        amount: Number($('#transactionAmount').value || 0),
        category: $('#transactionCategory').value,
        account: $('#transactionAccount').value.trim(),
        date: $('#transactionDate').value,
        notes: $('#transactionNotes').value.trim()
      };
      if (!t.amount || !t.account || !t.date) return;
      addTransaction(t);
      closeModal(e.target);
    });
  }

  function addSwipeToDelete(el, onDelete) {
    let startX = 0, currentX = 0, active = false;
    el.addEventListener('touchstart', e => { startX = e.touches[0].clientX; active = true; });
    el.addEventListener('touchmove', e => {
      if (!active) return;
      currentX = e.touches[0].clientX - startX;
      if (currentX < 0) {
        el.style.transform = `translateX(${currentX}px)`;
        el.style.opacity = String(1 - Math.min(1, Math.abs(currentX)/120));
      }
    });
    el.addEventListener('touchend', () => {
      if (Math.abs(currentX) > 100) {
        el.style.transform = `translateX(-120%)`; el.style.opacity = '0';
        setTimeout(onDelete, 150);
      } else {
        el.style.transform = ''; el.style.opacity = '';
      }
      active = false; startX = 0; currentX = 0;
    });
  }

  function handleBudgetForm() {
    $('#budgetForm').addEventListener('submit', e => {
      e.preventDefault();
      const amount = Number($('#budgetAmount').value || 0);
      const month = $('#budgetMonth').value;
      if (!amount || !month) return;
      state.budgets[month] = amount;
      saveState();
      renderBudgetWidget();
      closeModal(e.target);
    });
  }

  function renderBudgetWidget() {
    const el = $('#budgetContent');
    const now = $('#dateFrom').value ? new Date($('#dateFrom').value) : new Date();
    const mKey = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}`;
    const budget = state.budgets[mKey];
    if (!budget) { el.innerHTML = `<div class="empty" data-i18n="messages.noBudget">No budget set. Click 'Set Budget' to get started.</div>`; applyI18n(); return; }
    const spent = state.transactions.filter(t => t.type==='expense' && monthKeyFromDateStr(t.date)===mKey).reduce((a,b)=>a+b.amountCcy,0);
    const pct = Math.min(100, Math.round(spent / budget * 100));
    el.innerHTML = `
      <div class="row" style="justify-content:space-between">
        <div>${fmt(spent, state.currency)} / ${fmt(budget, state.currency)}</div>
        <div>${pct}%</div>
      </div>
      <div style="height:10px; border-radius:999px; background:rgba(255,255,255,.08); overflow:hidden; margin-top:8px">
        <div style="height:100%; width:${pct}%; background:${pct<80?'#22c55e':pct<100?'#f59e0b':'#ef4444'}"></div>
      </div>
    `;
  }

  function initCategoriesModal() {
    const incWrap = $('#incomeCategoriesList');
    const expWrap = $('#expenseCategoriesList');
    function render() {
      incWrap.innerHTML = state.categories.income.map(c => `<span class="chip" style="border-color:${c.color}"><span style="width:10px;height:10px;border-radius:999px;background:${c.color};display:inline-block"></span>${c.name}<button data-type="income" data-name="${c.name}">×</button></span>`).join('');
      expWrap.innerHTML = state.categories.expense.map(c => `<span class="chip" style="border-color:${c.color}"><span style="width:10px;height:10px;border-radius:999px;background:${c.color};display:inline-block"></span>${c.name}<button data-type="expense" data-name="${c.name}">×</button></span>`).join('');
      incWrap.querySelectorAll('button').forEach(b => b.addEventListener('click', e => {
        const name = e.currentTarget.getAttribute('data-name');
        state.categories.income = state.categories.income.filter(c => c.name !== name);
        saveState(); render(); renderFilters(); renderCategoriesSelect(); renderTransactions();
      }));
      expWrap.querySelectorAll('button').forEach(b => b.addEventListener('click', e => {
        const name = e.currentTarget.getAttribute('data-name');
        state.categories.expense = state.categories.expense.filter(c => c.name !== name);
        saveState(); render(); renderFilters(); renderCategoriesSelect(); renderTransactions();
      }));
    }
    $('#addIncomeCategoryBtn').onclick = () => {
      const name = $('#newIncomeCategory').value.trim(); const color = $('#newIncomeCategoryColor').value;
      if (!name) return;
      state.categories.income.push({ name, color }); saveState(); render(); renderFilters(); renderCategoriesSelect();
    };
    $('#addExpenseCategoryBtn').onclick = () => {
      const name = $('#newExpenseCategory').value.trim(); const color = $('#newExpenseCategoryColor').value;
      if (!name) return;
      state.categories.expense.push({ name, color }); saveState(); render(); renderFilters(); renderCategoriesSelect();
    };
    render();
    openModal('#categoriesModal');
  }

  function initImportExport() {
    $('#exportCSVBtn').addEventListener('click', () => {
      const rows = [['id','type','amount','currency','category','account','date','notes']];
      state.transactions.forEach(t => rows.push([t.id,t.type,String(t.amountCcy),state.currency,t.category,t.account,t.date,(t.notes||'').replace(/\n/g,' ')]));
      const csv = rows.map(r => r.map(v => `"${String(v).replace(/"/g,'""')}"`).join(',')).join('\n');
      downloadFile('budget.csv', 'text/csv', csv);
    });
    $('#exportJSONBtn').addEventListener('click', () => {
      const data = {
        currency: state.currency,
        categories: state.categories,
        transactions: state.transactions,
        budgets: state.budgets
      };
      downloadFile('budget.json','application/json', JSON.stringify(data, null, 2));
    });
    $('#importFileInput').addEventListener('change', async (e) => {
      const file = e.target.files[0]; if (!file) return;
      const text = await file.text();
      if (file.name.endsWith('.json')) {
        try {
          const data = JSON.parse(text);
          if (data.transactions) state.transactions = data.transactions;
          if (data.categories) state.categories = data.categories;
          if (data.budgets) state.budgets = data.budgets;
          saveState(); renderFilters(); renderTransactions();
        } catch {}
      } else if (file.name.endsWith('.csv')) {
        const lines = text.split(/\r?\n/).filter(Boolean);
        const [header, ...rows] = lines;
        const cols = header.split(',').map(s => s.replace(/^"|"$/g,''));
        rows.forEach(line => {
          const vals = splitCSV(line);
          const row = Object.fromEntries(cols.map((c,i)=>[c, vals[i]?.replace(/^"|"$/g,'')]));
          if (!row.id) return;
          const amount = Number(row.amount || row.amountCcy || 0);
          state.transactions.push({
            id: row.id,
            type: row.type,
            amountBase: convertToCurrency(amount, state.currency, state.rates.base || 'USD'),
            amountCcy: amount,
            currency: state.currency,
            category: row.category,
            account: row.account,
            date: row.date,
            notes: row.notes || ''
          });
        });
        saveState(); renderFilters(); renderTransactions();
      }
      e.target.value = '';
      closeModal($('#exportModal'));
    });
  }

  function splitCSV(line) {
    const out = []; let cur = ''; let q = false;
    for (let i=0;i<line.length;i++){
      const ch = line[i];
      if (ch === '"' && (i === 0 || line[i-1] !== '\\')) q = !q;
      else if (ch === ',' && !q) { out.push(cur); cur=''; }
      else cur += ch;
    }
    out.push(cur);
    return out;
  }

  function downloadFile(name, type, content) {
    const blob = new Blob([content], { type });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = name; a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 500);
  }

  function initCurrencyAndLanguage() {
    $('#currencySelector').value = state.currency;
    $('#languageSelector').value = state.locale;
    $('#currencySelector').addEventListener('change', async e => {
      const newC = e.target.value;
      state.currency = newC;
      saveState();
      await fetchRates(newC);
      state.transactions = state.transactions.map(t => {
        const base = convertToCurrency(t.amountCcy, t.currency, state.rates.base || 'USD');
        const amountCcy = convertToCurrency(base, state.rates.base || 'USD', newC);
        return { ...t, amountBase: base, amountCcy, currency: newC };
      });
      saveState();
      renderFilters(); renderTransactions();
    });
    $('#languageSelector').addEventListener('change', e => {
      state.locale = e.target.value; saveState(); applyI18n();
    });
  }

  function initWidgets() {
    const container = $('#widgets');
    const map = Object.fromEntries([...container.children].map(c => [c.dataset.widget, c]));
    state.widgetOrder.forEach(w => map[w] && container.appendChild(map[w]));
    $$('.widget-hide').forEach(btn => btn.addEventListener('click', e => {
      const w = e.currentTarget.closest('.widget').dataset.widget;
      const node = e.currentTarget.closest('.widget');
      const hidden = node.hasAttribute('hidden');
      if (hidden) {
        node.removeAttribute('hidden');
        state.hiddenWidgets = state.hiddenWidgets.filter(x => x !== w);
      } else {
        node.setAttribute('hidden','');
        if (!state.hiddenWidgets.includes(w)) state.hiddenWidgets.push(w);
      }
      saveState();
    }));
    $$('.widget-toggle').forEach(btn => btn.addEventListener('click', e => {
      const body = e.currentTarget.closest('.widget').querySelector('.widget-body');
      body.style.display = body.style.display === 'none' ? '' : 'none';
    }));
    let dragEl = null;
    $$('.widget').forEach(w => {
      w.addEventListener('dragstart', () => { dragEl = w; w.style.opacity = '.6'; });
      w.addEventListener('dragend', () => { if (dragEl){ dragEl.style.opacity = ''; dragEl = null; } });
      w.addEventListener('dragover', e => { e.preventDefault(); const rect = w.getBoundingClientRect(); const after = (e.clientY - rect.top) > rect.height/2; const parent = w.parentElement; if (dragEl && dragEl!==w){ parent.insertBefore(dragEl, after ? w.nextSibling : w); }});
      w.addEventListener('drop', () => {
        state.widgetOrder = $$('.widget').map(x => x.dataset.widget);
        saveState();
      });
    });
    state.hiddenWidgets.forEach(w => { const el = $(`.widget[data-widget="${w}"]`); if (el) el.setAttribute('hidden',''); });
  }

  function updateCharts(reinit=false) {
    const active = state.chartType;
    const ctx = $('#mainChart').getContext('2d');
    if (reinit && chart) { chart.destroy(); chart = null; }
    const filtered = applyFilters();
    if (!chart) {
      chart = new Chart(ctx, getChartConfig(active, filtered));
    } else {
      const cfg = getChartConfig(active, filtered);
      chart.config.type = cfg.type;
      chart.config.data = cfg.data;
      chart.config.options = cfg.options;
      chart.update();
    }
  }

  function getChartConfig(type, dataList) {
    const dict = i18n[state.locale] || i18n.en;
    if (type === 'pie') {
      const map = {};
      dataList.filter(t => t.type==='expense').forEach(t => { map[t.category] = (map[t.category] || 0) + t.amountCcy; });
      const labels = Object.keys(map);
      const data = Object.values(map);
      const colors = labels.map(l => (state.categories.expense.find(c=>c.name===l)?.color || '#888'));
      return {
        type: 'pie',
        data: { labels, datasets: [{ data, backgroundColor: colors }] },
        options: { plugins: { tooltip: { callbacks: { label: ctx => `${ctx.label}: ${fmt(ctx.parsed, state.currency)}` } }, legend: { labels: { color: getComputedStyle(document.documentElement).getPropertyValue('--fg') } } } }
      };
    }
    if (type === 'bar') {
      const map = {};
      dataList.forEach(t => { const m = monthKeyFromDateStr(t.date); map[m] = map[m] || { inc:0, exp:0 }; map[m][t.type==='income'?'inc':'exp'] += t.amountCcy; });
      const labels = Object.keys(map).sort();
      const inc = labels.map(k => map[k].inc);
      const exp = labels.map(k => map[k].exp);
      return {
        type: 'bar',
        data: { labels, datasets: [{ label: dict['dashboard.totalIncome'], data: inc, backgroundColor: '#22c55e' }, { label: dict['dashboard.totalExpenses'], data: exp, backgroundColor: '#ef4444' }] },
        options: { responsive:true, scales:{ x:{ ticks:{ color:getComputedStyle(document.documentElement).getPropertyValue('--fg') }}, y:{ ticks:{ color:getComputedStyle(document.documentElement).getPropertyValue('--fg') } } }, plugins:{ tooltip:{ callbacks:{ label: ctx => `${ctx.dataset.label}: ${fmt(ctx.parsed.y, state.currency)}` }}, legend:{ labels:{ color:getComputedStyle(document.documentElement).getPropertyValue('--fg') } } } }
      };
    }
    const sorted = [...dataList].sort((a,b)=> new Date(a.date)-new Date(b.date));
    let bal = 0; const points = sorted.map(t => { bal += t.type==='income'? t.amountCcy : -t.amountCcy; return { x: t.date, y: bal }; });
    return {
      type: 'line',
      data: { datasets: [{ label: dict['dashboard.netBalance'], data: points, borderColor: '#4f46e5', fill:false, tension:.25 }] },
      options: { parsing:false, scales:{ x:{ type:'time', time:{ unit:'day' }, ticks:{ color:getComputedStyle(document.documentElement).getPropertyValue('--fg') }}, y:{ ticks:{ color:getComputedStyle(document.documentElement).getPropertyValue('--fg') } } }, plugins:{ tooltip:{ callbacks:{ label: ctx => `${fmt(ctx.parsed.y, state.currency)}` }}, legend:{ labels:{ color:getComputedStyle(document.documentElement).getPropertyValue('--fg') } } } }
    };
  }

  function renderAnalytics() {
    const filtered = applyFilters();
    const byCat = {};
    filtered.filter(t=>t.type==='expense').forEach(t => byCat[t.category]=(byCat[t.category]||0)+t.amountCcy);
    const top = Object.entries(byCat).sort((a,b)=>b[1]-a[1])[0];
    $('#topCategory').textContent = top ? `${top[0]} (${fmt(top[1], state.currency)})` : '-';
    const avg = filtered.length ? (filtered.reduce((a,b)=>a+b.amountCcy,0)/filtered.length) : 0;
    $('#avgTransaction').textContent = fmt(avg, state.currency);
    const ul = $('#suggestionsList'); ul.innerHTML = '';
    if (top && top[1] > avg * 3) {
      const li = document.createElement('li'); li.textContent = `Consider reducing ${top[0]} spending by 10-15% next month.`; ul.appendChild(li);
    }
    if (state.transactions.filter(t=>t.type==='expense').length===0) {
      const li = document.createElement('li'); li.textContent = `Add some expenses to see insights.`; ul.appendChild(li);
    }
    if (state.transactions.filter(t=>t.type==='income').length===0) {
      const li = document.createElement('li'); li.textContent = `Track income for accurate balance and trends.`; ul.appendChild(li);
    }
  }

  function initChartTabs() {
    $$('.tab').forEach(tab => tab.addEventListener('click', e => {
      $$('.tab').forEach(t => t.classList.remove('active'));
      e.currentTarget.classList.add('active');
      state.chartType = e.currentTarget.getAttribute('data-chart');
      saveState(); updateCharts(true);
    }));
  }

  async function init() {
    setThemeToggle();
    initModals();
    handleTransactionForm();
    handleBudgetForm();
    initImportExport();
    initCurrencyAndLanguage();
    initChartTabs();
    initWidgets();
    renderFilters();
    renderCategoriesSelect();
    await fetchRates(state.currency);
    renderTransactions();

    $('#exportBtn').addEventListener('click', () => openModal('#exportModal'));
    $('#importBtn').addEventListener('click', () => $('#importFileInput').click());
  }

  return { init };
})();


// Transactions state
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

// Render fonksiyonu
function renderTransactions() {
  const list = document.getElementById("transactionsList");
  list.innerHTML = "";
  if(transactions.length === 0){
    const li = document.createElement("li");
    li.className = "empty";
    li.textContent = "No transactions yet. Add your first transaction!";
    list.appendChild(li);
    updateStats();
    return;
  }

  transactions.forEach((t, i) => {
    const li = document.createElement("li");
    li.textContent = `${t.type.toUpperCase()}: ${t.desc} - ${t.amount} (${t.account})`;
    
    const delBtn = document.createElement("button");
    delBtn.textContent = "🗑️";
    delBtn.style.marginLeft = "10px";
    delBtn.onclick = () => deleteTransaction(i);
    li.appendChild(delBtn);

    list.appendChild(li);
  });

  updateStats();
}

// Add Transaction
document.getElementById("transactionForm").addEventListener("submit", function(e){
  e.preventDefault();
  const type = document.getElementById("transactionType").value;
  const amount = parseFloat(document.getElementById("transactionAmount").value);
  const desc = document.getElementById("transactionNotes").value || "No description";
  const account = document.getElementById("transactionAccount").value;
  const category = document.getElementById("transactionCategory").value;
  const date = document.getElementById("transactionDate").value;

  const transaction = { type, amount, desc, account, category, date };
  transactions.push(transaction);
  localStorage.setItem("transactions", JSON.stringify(transactions));

  renderTransactions();
  this.reset();
});

// Delete Transaction
function deleteTransaction(index) {
  transactions.splice(index,1);
  localStorage.setItem("transactions", JSON.stringify(transactions));
  renderTransactions();
}

// Update stats
function updateStats(){
  const totalIncome = transactions.filter(t => t.type==="income").reduce((acc,t)=>acc+t.amount,0);
  const totalExpenses = transactions.filter(t => t.type==="expense").reduce((acc,t)=>acc+t.amount,0);
  const net = totalIncome - totalExpenses;

  document.getElementById("totalIncome").textContent = `$${totalIncome.toFixed(2)}`;
  document.getElementById("totalExpenses").textContent = `$${totalExpenses.toFixed(2)}`;
  document.getElementById("netBalance").textContent = `$${net.toFixed(2)}`;
}

// Sayfa yüklendiğinde
window.addEventListener("DOMContentLoaded", () => {
  renderTransactions();
});

document.addEventListener('DOMContentLoaded', () => App.init());
