import Image from "next/image";

export default function RecommendationsPage() {
  const recommendations = [
    {
      title: "Desenvolvimento sustentável: um discurso sobre a relação entre desenvolvimento e natureza",
      description:
        "Trata-se do estudo de definições de desenvolvimento sustentável, elemento fundamental de repertórios interpretativos para a relação entre desenvolvimento e natureza.",
      date: '24/06/2008',
      image: "/card1.png",
      stars: 5,
      tag: "Artigo",
    },
    {
      title: "Aparência de Plutão fascina cientistas",
      description:
        "Pesquisas recentes revelaram novas informações sobre a aparência de Plutão, fascinando cientistas e astrônomos ao redor do mundo.",
      date: '05/08/2015',
      image: "/card2.png",
      stars: 5,
      tag: "Artigo",
    },
    {
      title: "Bolsista do CsF na Escócia tem artigo publicado no Nature Climate Change",
      description:
        "Pesquisas sobre mudanças climáticas lideradas por brasileiros são destaque em publicação de alto impacto.",
      date: '21/01/2016',  
      image: "/card3.png",
      stars: 5,
      tag: "Artigo",
    },
    {
      title: "CAPES publica regras para pagamento de artigos científicos",
      description:
        "A CAPES anuncia novas políticas de pagamento para promover acesso e democratização de artigos científicos.",
      date: '06/05/2024',
      image: "/card4.png",
      stars: 4,
      tag: "Artigo",
    },
  ];

  return (
    <main className="bg-gray-100 min-h-screen">

      {/* Breadcrumb */}
      <div className="flex flex-row gap-2 bg-indigo-950 text-white py-6 px-8 text-base">
      <Image
              src={'/headericon.svg'}
              alt={'seta'}
              width={10}
              height={10}
              className=""
            />  Recomendações
      </div>

      {/* Conteúdo Principal */}
      <section className="max-w-7xl mx-auto py-8 px-4">
      {/* Título */}
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Recomendações
      </h2>
      <div className="h-px w-full bg-orange-600 mb-6"></div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recommendations.map((rec, index) => (
          <div
            key={index}
            className="flex bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
          >
            {/* Imagem */}
            <Image
              src={rec.image}
              alt={rec.title}
              width={150}
              height={150}
              className="w-1/2 m-15"
            />
            {/* Conteúdo */}
            <a href="/artigo" className="p-4 flex flex-col justify-between w-1/2">
              <div>
                <h3 className="text-md text-black font-semibold">{rec.title}</h3>
                <div className="flex gap-2">
                <p className="text-xs text-gray-600 mt-2">{rec.date}</p>
                <span className=" p-1 mt-0.5 text-xs bg-yellow-300 rounded-2xl text-black font-semibold">
                  {rec.tag}
                </span>
                </div>
                <p className="text-xs text-gray-600 mt-2">{rec.description}</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="text-black">
                  {"★".repeat(rec.stars)}
                  {"☆".repeat(5 - rec.stars)}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
    </main>
  );
}
