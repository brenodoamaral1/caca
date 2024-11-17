import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-sm pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Image
              src="/capeslogo.svg"
              alt="CAPES Logo"
              width={400}
              height={24}
              className="object-contain"
            />
          </div>

          {/* Menu de Navegação */}
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-gray-600 hover:font-bold">
              Sobre
            </a>
            <a href="#" className="text-gray-600 hover:font-bold">
              Acervo
            </a>
            <a href="#" className="text-gray-600 hover:font-bold">
              Treinamentos
            </a>
            <a href="#" className="text-gray-600 hover:font-bold">
              Informativos
            </a>
            <a
              href="/recommendations"
              className="text-gray-600 font-bold hover:font-bold"
            >
              Recomendações
            </a>
            <a href="#" className="text-gray-600 hover:font-bold">
              Ajuda
            </a>
          </nav>

          {/* Botão */}
          <button className="hidden md:block border border-black text-black px-4 py-2 rounded-lg hover:bg-indigo-950 hover:text-white">
            Meu espaço
          </button>
        </div>
      </div>
      {/* Linha de Informação */}
      <div className="max-w-7xl mx-auto pb-8 py-2 px-4 text-sm text-gray-600">
        <div className="">
          Você tem acesso ao conteúdo gratuito do Portal de Periódicos da CAPES
        </div>
        <a href="#" className="text-blue-600">Acesso CAFe</a>
      </div>
    </header>
  );
}
