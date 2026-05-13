import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'

const CORES = ['#6366f1', '#22c55e', '#f59e0b', '#ef4444', '#3b82f6']

function ExpenseChart({ transacoes }) {
  const gastos = transacoes.filter(t => t.tipo === 'gasto')

  const dados = gastos.reduce((acc, t) => {
    const existente = acc.find(item => item.name === t.categoria)
    if (existente) {
      existente.value += t.valor
    } else {
      acc.push({ name: t.categoria, value: t.valor })
    }
    return acc
  }, [])

  if (dados.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Gastos por Categoria</h2>
        <p className="text-gray-500 text-sm">Nenhum gasto registrado.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Gastos por Categoria</h2>
      <PieChart width={300} height={250}>
        <Pie data={dados} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
          {dados.map((_, index) => (
            <Cell key={index} fill={CORES[index % CORES.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `R$ ${value.toLocaleString('pt-BR')}`} />
        <Legend />
      </PieChart>
    </div>
  )

  
}

export default ExpenseChart