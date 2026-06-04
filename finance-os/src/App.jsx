import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  ArrowDownCircle,
  ArrowUpCircle,
  BarChart3,
  CalendarDays,
  CreditCard,
  DollarSign,
  Gauge,
  Home,
  Landmark,
  LayoutDashboard,
  LineChart as LineChartIcon,
  PiggyBank,
  PieChart as PieChartIcon,
  ReceiptText,
  Settings,
  ShieldCheck,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { NavLink, Navigate, Route, Routes } from "react-router-dom";

const currency = "IDR";

const incomeData = [
  {
    id: 1,
    source: "Main Salary",
    category: "Salary",
    amount: 2500000,
    date: "2026-06-01",
  },
  {
    id: 2,
    source: "Freelance Design",
    category: "Side Job",
    amount: 850000,
    date: "2026-06-04",
  },
  {
    id: 3,
    source: "Trading Profit",
    category: "Trading",
    amount: 650000,
    date: "2026-06-07",
  },
];

const expenseData = [
  {
    id: 1,
    name: "Food & Drink",
    category: "Food",
    amount: 350000,
    date: "2026-06-02",
  },
  {
    id: 2,
    name: "Transportation",
    category: "Transport",
    amount: 175000,
    date: "2026-06-03",
  },
  {
    id: 3,
    name: "Internet",
    category: "Bills",
    amount: 150000,
    date: "2026-06-05",
  },
  {
    id: 4,
    name: "Entertainment",
    category: "Lifestyle",
    amount: 225000,
    date: "2026-06-06",
  },
];

const savingsData = [
  {
    id: 1,
    name: "Emergency Fund",
    target: 5000000,
    current: 2350000,
    deadline: "2026-12-31",
  },
  {
    id: 2,
    name: "Trading Capital Backup",
    target: 3000000,
    current: 1200000,
    deadline: "2026-09-30",
  },
  {
    id: 3,
    name: "Music Project",
    target: 2000000,
    current: 750000,
    deadline: "2026-10-15",
  },
];

const investmentData = [
  {
    id: 1,
    asset: "Bitcoin",
    type: "Crypto",
    invested: 700000,
    currentValue: 780000,
  },
  {
    id: 2,
    asset: "Ethereum",
    type: "Crypto",
    invested: 300000,
    currentValue: 335000,
  },
  {
    id: 3,
    asset: "BBCA",
    type: "Stock",
    invested: 1000000,
    currentValue: 1045000,
  },
  {
    id: 4,
    asset: "Money Market Fund",
    type: "Mutual Fund",
    invested: 750000,
    currentValue: 768000,
  },
];

const budgetData = [
  {
    id: 1,
    category: "Food",
    limit: 800000,
    used: 350000,
  },
  {
    id: 2,
    category: "Transport",
    limit: 300000,
    used: 175000,
  },
  {
    id: 3,
    category: "Lifestyle",
    limit: 400000,
    used: 225000,
  },
  {
    id: 4,
    category: "Bills",
    limit: 500000,
    used: 150000,
  },
];

const tradingPoolData = {
  weeklyProfit: 1000000,
  allocation: [
    {
      name: "Trading Capital",
      percent: 40,
    },
    {
      name: "Investment",
      percent: 35,
    },
    {
      name: "Saving",
      percent: 20,
    },
    {
      name: "Self Reward",
      percent: 5,
    },
  ],
};

const monthlyChartData = [
  {
    month: "Jan",
    income: 3200000,
    expense: 1750000,
    netWorth: 5200000,
  },
  {
    month: "Feb",
    income: 3400000,
    expense: 1900000,
    netWorth: 5700000,
  },
  {
    month: "Mar",
    income: 3800000,
    expense: 2100000,
    netWorth: 6300000,
  },
  {
    month: "Apr",
    income: 3600000,
    expense: 1800000,
    netWorth: 7100000,
  },
  {
    month: "May",
    income: 4100000,
    expense: 2200000,
    netWorth: 8000000,
  },
  {
    month: "Jun",
    income: 4000000,
    expense: 900000,
    netWorth: 8900000,
  },
];

const expenseCategoryData = [
  {
    name: "Food",
    value: 350000,
  },
  {
    name: "Transport",
    value: 175000,
  },
  {
    name: "Bills",
    value: 150000,
  },
  {
    name: "Lifestyle",
    value: 225000,
  },
];

const chartColors = ["#fafafa", "#a3a3a3", "#737373", "#525252", "#404040"];

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Income",
    path: "/income",
    icon: ArrowUpCircle,
  },
  {
    name: "Expense",
    path: "/expense",
    icon: ArrowDownCircle,
  },
  {
    name: "Budget",
    path: "/budget",
    icon: CreditCard,
  },
  {
    name: "Savings",
    path: "/savings",
    icon: PiggyBank,
  },
  {
    name: "Trading Pool",
    path: "/trading-pool",
    icon: TrendingUp,
  },
  {
    name: "Investments",
    path: "/investments",
    icon: Landmark,
  },
  {
    name: "Net Worth",
    path: "/net-worth",
    icon: LineChartIcon,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: ReceiptText,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

function formatCurrency(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

function sumByAmount(data) {
  return data.reduce((total, item) => total + item.amount, 0);
}

function calculateInvestmentValue() {
  return investmentData.reduce((total, item) => total + item.currentValue, 0);
}

function calculateInvestmentProfit() {
  return investmentData.reduce(
    (total, item) => total + (item.currentValue - item.invested),
    0
  );
}

function getSavingTotal() {
  return savingsData.reduce((total, item) => total + item.current, 0);
}

function getNetWorth() {
  const cashBalance = 3200000;
  return cashBalance + getSavingTotal() + calculateInvestmentValue();
}

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="flex">
        <Sidebar />

        <main className="min-h-screen flex-1 lg:ml-72">
          <Topbar />

          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/income" element={<IncomePage />} />
              <Route path="/expense" element={<ExpensePage />} />
              <Route path="/budget" element={<BudgetPage />} />
              <Route path="/savings" element={<SavingsPage />} />
              <Route path="/trading-pool" element={<TradingPoolPage />} />
              <Route path="/investments" element={<InvestmentsPage />} />
              <Route path="/net-worth" element={<NetWorthPage />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-72 border-r border-neutral-800 bg-neutral-950/95 px-4 py-5 backdrop-blur lg:block">
      <div className="flex h-full flex-col">
        <div className="mb-8 flex items-center gap-3 px-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-950">
            <Wallet size={22} />
          </div>
          <div>
            <p className="text-sm text-neutral-400">Personal</p>
            <h1 className="text-lg font-semibold tracking-tight">Finance OS</h1>
          </div>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto pr-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  [
                    "flex items-center gap-3 rounded-2xl px-3 py-3 text-sm transition",
                    isActive
                      ? "bg-neutral-100 text-neutral-950"
                      : "text-neutral-400 hover:bg-neutral-900 hover:text-neutral-100",
                  ].join(" ")
                }
              >
                <Icon size={18} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="mt-5 rounded-3xl border border-neutral-800 bg-neutral-900/60 p-4">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium">
            <ShieldCheck size={17} />
            Private Dashboard
          </div>
          <p className="text-xs leading-5 text-neutral-400">
            Phase 1 uses dummy data. Phase 2 will connect this dashboard to
            Supabase login and database.
          </p>
        </div>
      </div>
    </aside>
  );
}

function Topbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Finance Management
          </p>
          <h2 className="text-xl font-semibold">Personal Finance Dashboard</h2>
        </div>

        <div className="hidden items-center gap-3 rounded-2xl border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm text-neutral-300 sm:flex">
          <CalendarDays size={17} />
          <span>June 2026</span>
        </div>
      </div>
    </header>
  );
}

function PageHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-6">
      <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
        {eyebrow}
      </p>
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-400">
        {description}
      </p>
    </div>
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl border border-neutral-800 bg-neutral-900/60 p-5 shadow-2xl shadow-black/20 ${className}`}
    >
      {children}
    </div>
  );
}

function SummaryCard({ icon: Icon, label, value, subtext }) {
  return (
    <Card>
      <div className="mb-5 flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-950">
          <Icon size={20} />
        </div>
        <span className="rounded-full border border-neutral-800 px-3 py-1 text-xs text-neutral-400">
          Live
        </span>
      </div>
      <p className="text-sm text-neutral-400">{label}</p>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight">{value}</h3>
      <p className="mt-2 text-xs text-neutral-500">{subtext}</p>
    </Card>
  );
}

function Dashboard() {
  const totalIncome = sumByAmount(incomeData);
  const totalExpense = sumByAmount(expenseData);
  const netCashflow = totalIncome - totalExpense;
  const investmentValue = calculateInvestmentValue();

  return (
    <>
      <PageHeader
        eyebrow="Overview"
        title="Dashboard"
        description="Ringkasan keuangan pribadi dari income, expense, saving, investment, trading profit pool, dan net worth."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <SummaryCard
          icon={DollarSign}
          label="Monthly Income"
          value={formatCurrency(totalIncome)}
          subtext="Gaji utama + side job + trading profit"
        />
        <SummaryCard
          icon={ReceiptText}
          label="Monthly Expense"
          value={formatCurrency(totalExpense)}
          subtext="Total pengeluaran bulan berjalan"
        />
        <SummaryCard
          icon={Gauge}
          label="Net Cashflow"
          value={formatCurrency(netCashflow)}
          subtext="Income dikurangi expense"
        />
        <SummaryCard
          icon={Wallet}
          label="Net Worth"
          value={formatCurrency(getNetWorth())}
          subtext="Cash + savings + investment"
        />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Income vs Expense</h3>
              <p className="text-sm text-neutral-400">
                Monthly cashflow comparison.
              </p>
            </div>
            <BarChart3 className="text-neutral-500" size={22} />
          </div>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyChartData}>
                <defs>
                  <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#fafafa" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#fafafa" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#737373" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#737373" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#262626" strokeDasharray="3 3" />
                <XAxis dataKey="month" stroke="#737373" />
                <YAxis stroke="#737373" tickFormatter={(value) => `${value / 1000000}M`} />
                <Tooltip
                  contentStyle={{
                    background: "#0a0a0a",
                    border: "1px solid #262626",
                    borderRadius: "16px",
                    color: "#fafafa",
                  }}
                  formatter={(value) => formatCurrency(value)}
                />
                <Area
                  type="monotone"
                  dataKey="income"
                  stroke="#fafafa"
                  fill="url(#incomeGradient)"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="expense"
                  stroke="#737373"
                  fill="url(#expenseGradient)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <div className="mb-5">
            <h3 className="text-lg font-semibold">Expense Category</h3>
            <p className="text-sm text-neutral-400">
              Spending distribution this month.
            </p>
          </div>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expenseCategoryData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={65}
                  outerRadius={100}
                  paddingAngle={4}
                >
                  {expenseCategoryData.map((entry, index) => (
                    <Cell
                      key={entry.name}
                      fill={chartColors[index % chartColors.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "#0a0a0a",
                    border: "1px solid #262626",
                    borderRadius: "16px",
                    color: "#fafafa",
                  }}
                  formatter={(value) => formatCurrency(value)}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-3">
            {expenseCategoryData.map((item, index) => (
              <div key={item.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{
                      backgroundColor: chartColors[index % chartColors.length],
                    }}
                  />
                  <span className="text-neutral-400">{item.name}</span>
                </div>
                <span>{formatCurrency(item.value)}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <TradingPoolPreview />
        <BudgetPreview />
        <InvestmentPreview />
      </div>
    </>
  );
}

function TradingPoolPreview() {
  return (
    <Card>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="font-semibold">Trading Profit Pool</h3>
          <p className="text-sm text-neutral-400">Weekly allocation</p>
        </div>
        <TrendingUp size={20} className="text-neutral-500" />
      </div>

      <p className="mb-4 text-2xl font-semibold">
        {formatCurrency(tradingPoolData.weeklyProfit)}
      </p>

      <div className="space-y-3">
        {tradingPoolData.allocation.map((item) => {
          const amount = tradingPoolData.weeklyProfit * (item.percent / 100);

          return (
            <div key={item.name}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="text-neutral-400">{item.name}</span>
                <span>{item.percent}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-neutral-800">
                <div
                  className="h-full rounded-full bg-neutral-100"
                  style={{
                    width: `${item.percent}%`,
                  }}
                />
              </div>
              <p className="mt-1 text-xs text-neutral-500">
                {formatCurrency(amount)}
              </p>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

function BudgetPreview() {
  const totalLimit = budgetData.reduce((total, item) => total + item.limit, 0);
  const totalUsed = budgetData.reduce((total, item) => total + item.used, 0);
  const percentage = Math.round((totalUsed / totalLimit) * 100);

  return (
    <Card>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="font-semibold">Budget Usage</h3>
          <p className="text-sm text-neutral-400">Monthly spending limit</p>
        </div>
        <CreditCard size={20} className="text-neutral-500" />
      </div>

      <p className="text-2xl font-semibold">{percentage}%</p>
      <p className="mt-1 text-sm text-neutral-400">
        {formatCurrency(totalUsed)} used from {formatCurrency(totalLimit)}
      </p>

      <div className="mt-5 h-3 overflow-hidden rounded-full bg-neutral-800">
        <div
          className="h-full rounded-full bg-neutral-100"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      <p className="mt-4 text-xs text-neutral-500">
        Current status: still under control.
      </p>
    </Card>
  );
}

function InvestmentPreview() {
  return (
    <Card>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="font-semibold">Investment Value</h3>
          <p className="text-sm text-neutral-400">Portfolio summary</p>
        </div>
        <Landmark size={20} className="text-neutral-500" />
      </div>

      <p className="text-2xl font-semibold">
        {formatCurrency(calculateInvestmentValue())}
      </p>
      <p className="mt-1 text-sm text-neutral-400">
        Profit: {formatCurrency(calculateInvestmentProfit())}
      </p>

      <div className="mt-5 space-y-3">
        {investmentData.slice(0, 3).map((item) => (
          <div key={item.id} className="flex items-center justify-between text-sm">
            <span className="text-neutral-400">{item.asset}</span>
            <span>{formatCurrency(item.currentValue)}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

function IncomePage() {
  return (
    <>
      <PageHeader
        eyebrow="Cashflow"
        title="Income Tracking"
        description="Catat semua pemasukan dari gaji pokok, side job, trading profit, bonus, dan sumber lain."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <SectionTitle title="Income List" subtitle="Dummy data for Phase 1." />
          <DataTable
            columns={["Source", "Category", "Date", "Amount"]}
            rows={incomeData.map((item) => [
              item.source,
              item.category,
              item.date,
              formatCurrency(item.amount),
            ])}
          />
        </Card>

        <Card>
          <SectionTitle title="Income Summary" subtitle="Current month." />
          <p className="text-3xl font-semibold">{formatCurrency(sumByAmount(incomeData))}</p>
          <p className="mt-2 text-sm text-neutral-400">
            Total income from all active sources.
          </p>
        </Card>
      </div>
    </>
  );
}

function ExpensePage() {
  return (
    <>
      <PageHeader
        eyebrow="Cashflow"
        title="Expense Tracking"
        description="Pantau pengeluaran harian dan lihat kategori mana yang paling banyak memakan cashflow."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <SectionTitle title="Expense List" subtitle="Dummy data for Phase 1." />
          <DataTable
            columns={["Name", "Category", "Date", "Amount"]}
            rows={expenseData.map((item) => [
              item.name,
              item.category,
              item.date,
              formatCurrency(item.amount),
            ])}
          />
        </Card>

        <Card>
          <SectionTitle title="Expense Summary" subtitle="Current month." />
          <p className="text-3xl font-semibold">{formatCurrency(sumByAmount(expenseData))}</p>
          <p className="mt-2 text-sm text-neutral-400">
            Total expense from all categories.
          </p>
        </Card>
      </div>
    </>
  );
}

function BudgetPage() {
  return (
    <>
      <PageHeader
        eyebrow="Control"
        title="Budget Limit"
        description="Atur batas pengeluaran per kategori agar cashflow bulanan tetap sehat."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {budgetData.map((item) => {
          const percentage = Math.round((item.used / item.limit) * 100);

          return (
            <Card key={item.id}>
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-semibold">{item.category}</h3>
                <span className="text-sm text-neutral-400">{percentage}% used</span>
              </div>

              <p className="text-sm text-neutral-400">
                {formatCurrency(item.used)} from {formatCurrency(item.limit)}
              </p>

              <div className="mt-4 h-3 overflow-hidden rounded-full bg-neutral-800">
                <div
                  className="h-full rounded-full bg-neutral-100"
                  style={{
                    width: `${percentage}%`,
                  }}
                />
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
}

function SavingsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Goals"
        title="Saving Goals"
        description="Pantau target tabungan seperti emergency fund, modal trading, project musik, dan kebutuhan pribadi."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {savingsData.map((item) => {
          const percentage = Math.round((item.current / item.target) * 100);

          return (
            <Card key={item.id}>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="mt-2 text-sm text-neutral-400">
                Deadline: {item.deadline}
              </p>

              <p className="mt-5 text-2xl font-semibold">
                {formatCurrency(item.current)}
              </p>
              <p className="mt-1 text-sm text-neutral-400">
                Target: {formatCurrency(item.target)}
              </p>

              <div className="mt-5 h-3 overflow-hidden rounded-full bg-neutral-800">
                <div
                  className="h-full rounded-full bg-neutral-100"
                  style={{
                    width: `${percentage}%`,
                  }}
                />
              </div>

              <p className="mt-3 text-sm text-neutral-400">{percentage}% completed</p>
            </Card>
          );
        })}
      </div>
    </>
  );
}

function TradingPoolPage() {
  return (
    <>
      <PageHeader
        eyebrow="Trading"
        title="Trading Profit Pool"
        description="Bagi profit trading mingguan secara otomatis ke trading capital, investment, saving, dan self reward."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <Card>
          <SectionTitle title="Weekly Profit" subtitle="Current week." />
          <p className="text-3xl font-semibold">
            {formatCurrency(tradingPoolData.weeklyProfit)}
          </p>
          <p className="mt-2 text-sm text-neutral-400">
            Dummy profit untuk simulasi pembagian mingguan.
          </p>
        </Card>

        <Card className="lg:col-span-2">
          <SectionTitle title="Allocation Result" subtitle="Auto calculated." />
          <div className="grid gap-4 md:grid-cols-2">
            {tradingPoolData.allocation.map((item) => {
              const amount = tradingPoolData.weeklyProfit * (item.percent / 100);

              return (
                <div
                  key={item.name}
                  className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4"
                >
                  <p className="text-sm text-neutral-400">{item.name}</p>
                  <p className="mt-2 text-xl font-semibold">{formatCurrency(amount)}</p>
                  <p className="mt-1 text-sm text-neutral-500">{item.percent}% allocation</p>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </>
  );
}

function InvestmentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Investment Tracking"
        description="Pantau aset investasi seperti crypto, saham, reksadana, emas, dan cash allocation."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <SectionTitle title="Portfolio List" subtitle="Manual value tracking." />
          <DataTable
            columns={["Asset", "Type", "Invested", "Current Value", "P/L"]}
            rows={investmentData.map((item) => [
              item.asset,
              item.type,
              formatCurrency(item.invested),
              formatCurrency(item.currentValue),
              formatCurrency(item.currentValue - item.invested),
            ])}
          />
        </Card>

        <Card>
          <SectionTitle title="Portfolio Summary" subtitle="Current value." />
          <p className="text-3xl font-semibold">
            {formatCurrency(calculateInvestmentValue())}
          </p>
          <p className="mt-2 text-sm text-neutral-400">
            Total P/L: {formatCurrency(calculateInvestmentProfit())}
          </p>
        </Card>
      </div>
    </>
  );
}

function NetWorthPage() {
  return (
    <>
      <PageHeader
        eyebrow="Growth"
        title="Net Worth Tracker"
        description="Lihat perkembangan kekayaan bersih dari cash, saving, investment, dan aset lain."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <Card>
          <SectionTitle title="Current Net Worth" subtitle="Dummy calculation." />
          <p className="text-3xl font-semibold">{formatCurrency(getNetWorth())}</p>
          <p className="mt-2 text-sm text-neutral-400">
            Cash + savings + investments.
          </p>
        </Card>

        <Card className="lg:col-span-2">
          <SectionTitle title="Net Worth Trend" subtitle="Monthly growth." />
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyChartData}>
                <CartesianGrid stroke="#262626" strokeDasharray="3 3" />
                <XAxis dataKey="month" stroke="#737373" />
                <YAxis stroke="#737373" tickFormatter={(value) => `${value / 1000000}M`} />
                <Tooltip
                  contentStyle={{
                    background: "#0a0a0a",
                    border: "1px solid #262626",
                    borderRadius: "16px",
                    color: "#fafafa",
                  }}
                  formatter={(value) => formatCurrency(value)}
                />
                <Line
                  type="monotone"
                  dataKey="netWorth"
                  stroke="#fafafa"
                  strokeWidth={3}
                  dot={{
                    fill: "#fafafa",
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </>
  );
}

function ReportsPage() {
  const totalIncome = sumByAmount(incomeData);
  const totalExpense = sumByAmount(expenseData);
  const netCashflow = totalIncome - totalExpense;

  return (
    <>
      <PageHeader
        eyebrow="Reports"
        title="Daily, Monthly, and Yearly Reports"
        description="Phase 1 menampilkan dummy report. Phase 2 nanti report akan dihitung dari database Supabase."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <ReportCard
          title="Daily Report"
          items={[
            ["Income Today", formatCurrency(850000)],
            ["Expense Today", formatCurrency(125000)],
            ["Net Today", formatCurrency(725000)],
          ]}
        />
        <ReportCard
          title="Monthly Report"
          items={[
            ["Income", formatCurrency(totalIncome)],
            ["Expense", formatCurrency(totalExpense)],
            ["Net Cashflow", formatCurrency(netCashflow)],
          ]}
        />
        <ReportCard
          title="Yearly Report"
          items={[
            ["Yearly Income", formatCurrency(24100000)],
            ["Yearly Expense", formatCurrency(11750000)],
            ["Net Growth", formatCurrency(12350000)],
          ]}
        />
      </div>
    </>
  );
}

function SettingsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Preferences"
        title="Settings"
        description="Nanti halaman ini dipakai untuk currency, profile, account, backup, dan Supabase user settings."
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <SectionTitle title="Default Currency" subtitle="Current setting." />
          <p className="text-2xl font-semibold">IDR</p>
          <p className="mt-2 text-sm text-neutral-400">
            Phase 2 bisa dibuat agar user bisa memilih IDR, USD, atau EUR.
          </p>
        </Card>

        <Card>
          <SectionTitle title="Data Storage" subtitle="Next phase." />
          <p className="text-2xl font-semibold">Supabase</p>
          <p className="mt-2 text-sm text-neutral-400">
            Login dan database akan ditambahkan pada Phase 2.
          </p>
        </Card>
      </div>
    </>
  );
}

function ReportCard({ title, items }) {
  return (
    <Card>
      <h3 className="mb-4 font-semibold">{title}</h3>
      <div className="space-y-3">
        {items.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between text-sm">
            <span className="text-neutral-400">{label}</span>
            <span className="font-medium">{value}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-5">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-neutral-400">{subtitle}</p>
    </div>
  );
}

function DataTable({ columns, rows }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-800">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-neutral-950 text-neutral-400">
            <tr>
              {columns.map((column) => (
                <th key={column} className="px-4 py-3 font-medium">
                  {column}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-neutral-800">
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="bg-neutral-900/40">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-4 py-4 text-neutral-200">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;