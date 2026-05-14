import { useState } from 'react'
import Navbar from './components/Navbar'
import SummaryCard from './components/SummaryCard'
import TransactionList from './components/TransactionList'
import ExpenseChart from './components/ExpenseChart'
import Login from './pages/Login'

function App() {
  const [logado, setLogado] = useState(false)
  const [transacoes, setTransacoes] = useState([
    { descricao: 'Salário', categoria: 'Receita', valor: 5000, tipo: 'receita', data: '01/05/2025' },
    { descricao: 'Aluguel', categoria: 'Moradia', valor: 1500, tipo: 'gasto', data: '05/05/2025' },
  ])
  const [form, setForm] = useState({ descricao: '', categoria: '', valor: '', tipo: 'gasto' })

  if (!logado) {
    return <Login onLogin={() => setLogado(true)} />
  }

  function handleSubmit() {
    if (!form.descricao || !form.valor) return
    setTransacoes([...transacoes, {
      ...form, valor: Number(form.valor),
      data: new Date().toLocaleDateString('pt-BR')
    }])
    setForm({ descricao: '', categoria: '', valor: '', tipo: 'gasto' })
  }

  function handleRemover(index) {
    setTransacoes(transacoes.filter((_, i) => i !== index))
  }

  const totalReceitas = transacoes.filter(t => t.tipo === 'receita').reduce((acc, t) => acc + t.valor, 0)
  const totalGastos = transacoes.filter(t => t.tipo === 'gasto').reduce((acc, t) => acc + t.valor, 0)
  const saldo = totalReceitas - totalGastos

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto p-4 md:p-8">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 mt-1 text-sm">Bem-vindo ao seu controle financeiro</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <SummaryCard titulo="Saldo Total" valor={`R$ ${saldo.toLocaleString('pt-BR')}`} cor="blue" />
          <SummaryCard titulo="Receitas" valor={`R$ ${totalReceitas.toLocaleString('pt-BR')}`} cor="green" />
          <SummaryCard titulo="Gastos" valor={`R$ ${totalGastos.toLocaleString('pt-BR')}`} cor="red" />
        </div>
        <div className="bg-white rounded-xl shadow p-4 md:p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Nova Transação</h2>
          <div className="flex flex-col md:flex-row gap-3">
            <input className="border rounded-lg p-2 flex-1" placeholder="Descrição"
              value={form.descricao} onChange={e => setForm({ ...form, descricao: e.target.value })} />
            <input className="border rounded-lg p-2 flex-1" placeholder="Categoria"
              value={form.categoria} onChange={e => setForm({ ...form, categoria: e.target.value })} />
            <input className="border rounded-lg p-2 flex-1" placeholder="Valor" type="number"
              value={form.valor} onChange={e => setForm({ ...form, valor: e.target.value })} />
            <select className="border rounded-lg p-2" value={form.tipo}
              onChange={e => setForm({ ...form, tipo: e.target.value })}>
              <option value="gasto">Gasto</option>
              <option value="receita">Receita</option>
            </select>
            <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition-colors"
              onClick={handleSubmit}>Adicionar</button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <TransactionList
              transacoes={transacoes.map(t => ({ ...t, valor: `R$ ${t.valor.toLocaleString('pt-BR')}` }))}
              onRemover={handleRemover} />
          </div>
          <div className="w-full md:w-96">
            <ExpenseChart transacoes={transacoes} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App