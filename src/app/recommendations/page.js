import Image from "next/image";

export default function RecommendationsPage() {
  const recommendations = [
    {
      title: "Nature Communications publica artigo de ex-bolsistas da CAPES",
      description:
        "Um artigo publicado na Nature Communications foi um destaque recente dos ex-bolsistas da CAPES, demonstrando avanços significativos na ciência.",
      image: "/image1.jpg",
      stars: 5,
      date: "12/11/2023",
      tag: "Ciência",
    },
    {
      title: "Aparência de Plutão fascina cientistas",
      description:
        "Pesquisas recentes revelaram novas informações sobre a aparência de Plutão, fascinando cientistas e astrônomos ao redor do mundo.",
      image: "/image2.jpg",
      stars: 5,
      date: "10/11/2023",
      tag: "Astrofísica",
    },
    {
      title: "Bolsista do CsF na Escócia tem artigo publicado no Nature Climate Change",
      description:
        "Pesquisas sobre mudanças climáticas lideradas por brasileiros são destaque em publicação de alto impacto.",
      image: "/image3.jpg",
      stars: 5,
      date: "08/11/2023",
      tag: "Clima",
    },
    {
      title: "CAPES publica regras para pagamento de artigos científicos",
      description:
        "A CAPES anuncia novas políticas de pagamento para promover acesso e democratização de artigos científicos.",
      image: "/image4.jpg",
      stars: 4,
      date: "05/11/2023",
      tag: "Educação",
    },
  ];

  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Cabeçalho */}
      <header className="bg-#FAFAFA-900 text-white py-4 px-8 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image
            src="/capeslogo.svg"
            alt="CAPES logo"
            width={400}
            height={26}
            className="object-contain"
          />
        </div>
        <nav className="flex space-x-6">
          <a href="#" className="text-black hover:font-semibold">
            Sobre
          </a>
          <a href="#" className="text-black hover:font-semibold">
            Acervo
          </a>
          <a href="#" className="text-black hover:font-semibold">
            Treinamentos
          </a>
          <a href="#" className="text-black hover:font-semibold">
            Informativos
          </a>
          <a href="#" className="text-black font-semibold hover:font-semibold">
            Recomendações
          </a>
          <a href="#" className="text-black hover:font-semibold">
            Ajuda
          </a>
        </nav>
        <button className="bg-#FAFAFA border-2 border-black  text-blue-900 px-4 py-2 rounded-md">
          Meu espaço
        </button>
      </header>
    <div className="flex items-center ml-10">
        <h2 className="text-black text-sm">Você tem acesso ao conteúdo gratuito do Portal de Periódicos da CAPES</h2>
    </div>
    <div className="flex items-center ml-10 mb-4">
        <h1 className="text-black">Acesso CAFe</h1>
    </div>

      {/* Breadcrumb */}
      <div className="bg-indigo-950 text-white py-6 px-8 text-base">
        {'>'} Recomendações
      </div>

      {/* Conteúdo Principal */}
      <section className="max-w-7xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Recomendações
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recommendations.map((rec, index) => (
            <article
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
            >
              <Image
                src={rec.image}
                alt={rec.title}
                width={400}
                height={200}
                className="w-full h-auto"
              />
              <div className="p-4">
                <span className="text-blue-600 text-sm font-semibold">
                  {rec.tag}
                </span>
                <h3 className="text-lg font-semibold mt-2">{rec.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{rec.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-gray-500 text-xs">{rec.date}</span>
                  <div className="text-yellow-500">
                    {"★".repeat(rec.stars)}
                    {"☆".repeat(5 - rec.stars)}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
