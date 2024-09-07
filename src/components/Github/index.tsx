import React from "react";
import Image from "next/image";
import { Quicksand } from 'next/font/google'
import vouch from "@/assets/imagens/vouch.jpeg"
import laika from "@/assets/imagens/laika.jpeg"

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: '500'
})

const projetosGithub = [
  {
    name: "Vouch3",
    description: "Projeto Web3 com foco no desenvolvimento do front-end, configurando o bot, integração com Discord e mais.",
    image: vouch, // Substitua com o caminho para a imagem do projeto
    url: "https://github.com/megadaolabs/vouch3-app/tree/main/vouch3-app"
  },
  {
    name: "Banda Laika",
    description: "Website desenvolvido para a banda Laika, com foco na criação do front-end da aplicação.",
    image: laika, // Substitua com o caminho para a imagem do projeto
    url: "https://github.com/victorcabral182/LAIKA_REACT"
  }
];

export const ProjetosGithub = () => {
  return (
    <section className="py-12">
      <h2 className={`${quicksand.className} text-3xl  text-center mb-8`}>Colaborações GitHub</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {projetosGithub.map((projeto) => (
          <a
            key={projeto.name}
            href={projeto.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-1/2 lg:w-1/3 flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <Image
              src={projeto.image}
              alt={projeto.name}
              width={500}
              height={300}
              className="object-cover w-full h-64"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">{projeto.name}</h3>
              <p className="text-gray-600 mb-4">{projeto.description}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                Ver Projeto
              </button>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}