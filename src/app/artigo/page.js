'use client'

import { useState } from "react";
import Link from 'next/link'
import Image from "next/image";


export default function ArticlePage() {

    const [rating, setRating] = useState(0); // Armazena a avaliação do usuário
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleRating = (value) => {
        if (!isSubmitted) setRating(value);
    };

    const submitRating = () => {
        if (rating > 0) {
        setIsSubmitted(true);
        console.log("Avaliação enviada:", rating); // Aqui você pode enviar para o backend
        alert(`Obrigado! Sua avaliação foi: ${rating} estrelas.`);
        } else {
        alert("Por favor, selecione uma avaliação antes de enviar.");
        }
    };

    return (
      <main className="bg-gray-100 min-h-screen">
        {/* Cabeçalho */}
        <header className="flex flex-row gap-2 bg-indigo-950 text-white py-6 px-8 text-base">
        <Image
              src={'/headericon.svg'}
              alt={'seta'}
              width={10}
              height={10}
              className=""
            /> 
          <span className="text-sm">
            <a href="#" className="hover:underline">
              Recomendações
            </a>{" "}
            / Artigo
          </span>
        </header>
  
        {/* Conteúdo Principal */}
        <section className="max-w-6xl mx-auto py-8 px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coluna Esquerda */}
          <div className="md:col-span-2">
            <button className="text-blue-900 flex items-center mb-4">
              <i className="fas fa-arrow-left mr-2"></i> Voltar
            </button>
  
            {/* Título e Detalhes */}
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Desenvolvimento sustentável: um discurso sobre a relação entre
              desenvolvimento e natureza
            </h1>
            <p className="text-sm text-gray-600">
              2008; Associação Brasileira de Psicologia Social; Volume: 20; Issue:
              1; Linguagem: Português
            </p>
            <p className="text-sm text-blue-600 mt-2">
              10.1590/s0102-71822008000100015
            </p>
  
            {/* Informações */}
            <div className="mt-6">
              <p className="text-sm text-gray-800">
                <strong>ISSN:</strong> 1807-0310
              </p>
              <p className="text-sm text-gray-800 mt-2">
                <strong>Autores:</strong> Hugo Juliano Duarte Matias, José Q.
                Pinheiro
              </p>
              <p className="text-sm text-gray-800 mt-2">
                <strong>Tópico(s):</strong> Environmental Education and
                Sustainability
              </p>
            </div>
  
            {/* Resumo */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-800">Resumo</h2>
              <p className="text-sm text-gray-700 mt-2">
                Trata-se do estudo de definições de desenvolvimento sustentável,
                elemento fundamental de repertórios interpretativos para a relação
                entre desenvolvimento e natureza. As definições respondiam a um
                questionário aplicado a 355 estudantes de vários cursos de uma
                universidade federal. Realizou-se uma análise de conteúdo que
                buscou a concepção de natureza e sua relação com desenvolvimento
                nessas definições. Foram encontradas três matrizes discursivas:{" "}
                <em>econômica</em>, <em>bem intencionada</em> e{" "}
                <em>esvaziada</em>. Conclui-se sobre a importância do estudo da
                atribuição de significado à natureza para explicar como as
                pessoas pensam a relação entre desenvolvimento e natureza.
              </p>
            </div>
          </div>
  
          {/* Coluna Direita */}
          <aside className="bg-white rounded-lg shadow p-4 border border-gray-300">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Métricas</h2>
            <div className="space-y-4">
              <Link href='https://www.scielo.br/j/psoc/a/q6Wq37WVV886mYtDzFDZ8mj/?lang=pt'> 
              <button href='https://www.scielo.br/j/psoc/a/q6Wq37WVV886mYtDzFDZ8mj/?lang=pt' className="w-full border border-blue-600 text-blue-600 py-2 rounded hover:bg-blue-50">
                <i className="fas fa-sign-in-alt mr-2"></i>Acessar
              </button>
              </Link> 
              <button className="w-full border border-blue-600 text-blue-600 py-2 rounded hover:bg-blue-50">
                <i className="fas fa-link mr-2"></i>Disponibilidade
              </button>
              <button className="w-full border border-blue-600 text-blue-600 py-2 rounded hover:bg-blue-50">
                <i className="fas fa-share-alt mr-2"></i>Compartilhar
              </button>
              <button className="w-full border border-blue-600 text-blue-600 py-2 rounded hover:bg-blue-50">
                <i className="fas fa-download mr-2"></i>Exportar
              </button>
            </div>
            <div className="mt-6">
              <h3 className="text-md font-semibold text-gray-800">PlumX</h3>
              <div className="mt-2">
                <div className="text-sm text-gray-600">Citations</div>
                <div className="text-sm text-gray-600 font-semibold">
                  Citation Indexes: 4
                </div>
              </div>
            </div>
          </aside>
        </section>
        <section className="max-w-6xl mx-auto py-8 px-4">
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          Avalie este artigo
        </h2>
        <div className="flex items-center space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleRating(star)}
              className={`text-3xl ${
                star <= rating ? "text-yellow-400" : "text-gray-400"
              }`}
            >
              ★
            </button>
          ))}
        </div>
        <button
          onClick={submitRating}
          className={`mt-4 px-4 py-2 rounded-lg ${
            isSubmitted
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
          disabled={isSubmitted}
        >
          {isSubmitted ? "Avaliação enviada" : "Enviar avaliação"}
        </button>
      </section>
      </main>
    );
  }
  