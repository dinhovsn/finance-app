function Login({ onLogin }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        
        <div className="flex items-center gap-2 mb-8">
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

        <h1 className="text-2xl font-bold text-gray-900 mb-1">Bem-vindo de volta!</h1>
        <p className="text-gray-500 text-sm mb-6">Entre na sua conta para continuar</p>

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Email</label>
            <input className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="seu@email.com" type="email" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Senha</label>
            <input className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="••••••••" type="password" />
          </div>
          <button
            onClick={onLogin}
            className="bg-indigo-500 text-white py-3 rounded-lg font-semibold hover:bg-indigo-600 transition-colors mt-2">
            Entrar
          </button>
        </div>

        <p className="text-center text-sm text-gray-400 mt-6">
          Não tem conta? <span className="text-indigo-500 cursor-pointer hover:underline">Cadastre-se</span>
        </p>

      </div>
    </div>
  )
}

export default Login