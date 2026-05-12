function TransactionList({ transacoes, onRemover }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Últimas Transações</h2>
      <div className="flex flex-col gap-3">
        {transacoes.map((t, index) => (
          <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
            <div>
              <p className="font-medium text-gray-800">{t.descricao}</p>
              <p className="text-sm text-gray-500">{t.categoria}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className={t.tipo === 'receita' ? 'text-green-500 font-bold' : 'text-red-500 font-bold'}>
                {t.tipo === 'receita' ? '+' : '-'} {t.valor}
              </span>
              <button
                onClick={() => onRemover(index)}
                className="text-gray-400 hover:text-red-500 text-sm"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TransactionList