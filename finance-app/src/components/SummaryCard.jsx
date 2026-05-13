import { TrendingUp, TrendingDown, Wallet } from 'lucide-react'

const icones = {
  blue: <Wallet size={20} className="text-blue-500" />,
  green: <TrendingUp size={20} className="text-green-500" />,
  red: <TrendingDown size={20} className="text-red-500" />,
}

function SummaryCard({ titulo, valor, cor }) {
  const cores = {
    blue: 'text-blue-500 bg-blue-50',
    green: 'text-green-500 bg-green-50',
    red: 'text-red-500 bg-red-50',
  }

  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{titulo}</span>
        <span className={`p-2 rounded-lg ${cores[cor]}`}>
          {icones[cor]}
        </span>
      </div>
      <span className={`text-2xl font-bold ${cores[cor]?.split(' ')[0]}`}>
        {valor}
      </span>
    </div>
  )
}

export default SummaryCard