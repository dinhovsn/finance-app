import { Trash2 } from 'lucide-react'

function TransactionList({ transacoes, onRemover }) {
  if (transacoes.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Últimas Transações</h2>
        <p className="text-gray-400 text-sm text-center py-8">Nenhuma transação registrada ainda.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Últimas Transações</h2>
      <div className="flex flex-col gap-3">
        {transacoes.map((t, index) => (
          <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
            <div>
              <p className="font-medium text-gray-800">{t.descricao}</p>
              <p className="text-xs text-gray-400">{t.categoria} • {t.data}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className={t.tipo === 'receita' ? 'text-green-500 font-bold' : 'text-red-500 font-bold'}>
                {t.tipo === 'receita' ? '+' : '-'} {t.valor}
              </span>
              <button onClick={() => onRemover(index)}
                className="text-gray-300 hover:text-red-500 transition-colors">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TransactionList