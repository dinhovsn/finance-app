import { useState } from 'react'
import Navbar from './components/Navbar'
import SummaryCard from './components/SummaryCard'
import TransactionList from './components/TransactionList'
import ExpenseChart from './components/ExpenseChart'

function App() {
  const [transacoes, setTransacoes] = useState([
    { descricao: 'Salário', categoria: 'Receita', valor: 5000, tipo: 'receita' },
    { descricao: 'Aluguel', categoria: 'Moradia', valor: 1500, tipo: 'gasto' },
  ])

  const [form, setForm] = useState({
    descricao: '',
    categoria: '',
    valor: '',
    tipo: 'gasto'
  })

  function handleSubmit() {
    if (!form.descricao || !form.valor) return
    setTransacoes([...transacoes, { ...form, valor: Number(form.valor) }])
    setForm({ descricao: '', categoria: '', valor: '', tipo: 'gasto' })
  }

  const totalReceitas = transacoes
    .filter(t => t.tipo === 'receita')
    .reduce((acc, t) => acc + t.valor, 0)

  const totalGastos = transacoes
    .filter(t => t.tipo === 'gasto')
    .reduce((acc, t) => acc + t.valor, 0)

  const saldo = totalReceitas - totalGastos

  function handleRemover(index) {
  setTransacoes(transacoes.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-8">
        <div className="flex gap-4 mb-8">
          <SummaryCard titulo="Saldo" valor={`R$ ${saldo.toLocaleString('pt-BR')}`} />
          <SummaryCard titulo="Receitas" valor={`R$ ${totalReceitas.toLocaleString('pt-BR')}`} />
          <SummaryCard titulo="Gastos" valor={`R$ ${totalGastos.toLocaleString('pt-BR')}`} />
        </div>

        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Nova Transação</h2>
          <div className="flex gap-4 flex-wrap">
            <input
              className="border rounded-lg p-2 flex-1"
              placeholder="Descrição"
              value={form.descricao}
              onChange={e => setForm({ ...form, descricao: e.target.value })}
            />
            <input
              className="border rounded-lg p-2 flex-1"
              placeholder="Categoria"
              value={form.categoria}
              onChange={e => setForm({ ...form, categoria: e.target.value })}
            />
            <input
              className="border rounded-lg p-2 flex-1"
              placeholder="Valor"
              type="number"
              value={form.valor}
              onChange={e => setForm({ ...form, valor: e.target.value })}
            />
            <select
              className="border rounded-lg p-2"
              value={form.tipo}
              onChange={e => setForm({ ...form, tipo: e.target.value })}
            >
              <option value="gasto">Gasto</option>
              <option value="receita">Receita</option>
            </select>
            <button
              className="bg-blue-500 text-white px-6 rounded-lg hover:bg-blue-600"
              onClick={handleSubmit}
            >
              Adicionar
            </button>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
        <TransactionList
        transacoes={transacoes.map(t => ({
        ...t,
        valor: `R$ ${t.valor.toLocaleString('pt-BR')}`
          }))}
        onRemover={handleRemover}/>
          </div>
        <div className="w-96">
        <ExpenseChart transacoes={transacoes} />
      </div>
    </div>
      </main>
    </div>
  )
}

export default App