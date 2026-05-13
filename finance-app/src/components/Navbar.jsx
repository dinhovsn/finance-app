function Navbar() {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-white border-b border-gray-100">
      <div className="flex items-center gap-2">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="10" fill="#6366f1"/>
        <rect x="9" y="15" width="14" height="2.5" rx="1.25" fill="white"/>
        <rect x="9" y="10" width="14" height="2.5" rx="1.25" fill="white"/>
        <rect x="9" y="20" width="9" height="2.5" rx="1.25" fill="#22d3ee"/>
    </svg>
        <span className="font-black text-xl tracking-tight text-gray-900">
          bolso<span className="text-indigo-500">+</span>
        </span>
      </div>
      <nav className="flex items-center gap-8">
        <span className="text-gray-900 font-semibold text-sm border-b-2 border-indigo-500 pb-1 cursor-pointer">Dashboard</span>
        <span className="text-gray-400 hover:text-gray-900 cursor-pointer transition-colors font-medium text-sm">Transações</span>
      </nav>
    </div>
  )
}

export default Navbar