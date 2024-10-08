// src/app/page.tsx
import React from "react";
import { Header } from "@/components/Header";
import { Capa } from "@/components/Capa/index";
import { ProjetosGithub } from "@/components/Github";
import Image from "next/image";
import elleganza from "@/assets/imagens/elleganza.jpeg";
import mercury from "@/assets/imagens/mercury.jpg" // Ajuste se necessário

import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: '500'
})



const projects = [
  {
    name: "E-comece Eleganza",
    description: "Uma aplicação de e-commerce com carrinho de compras, checkout e cálculo de frete.",
    image: elleganza, // Use uma imagem representativa para o projeto
    url: "https://eleganza-nu.vercel.app/"
  },
  {
    name: "Mercury Gold",
    description: "Uma página criativa para exibição de projetos.",
    image: mercury, // Use uma imagem representativa para o projeto
    url: "https://mercurygold-react.vercel.app/"
  }
];

export default function Home() {
  return (
    <>
      <div className={quicksand.className}>
        <title>Sobre mim / Felipe</title>
        <meta name="description" content="Sou um desenvolvedor Front-end Jr, Busco uma oportunidade de estágio ou como desenvolvedor júnior em uma empresa que
valorize o crescimento e o desenvolvimento profissional."/>
      </div>
      <Header />
      <div className={`${quicksand.className} py-12 px-6 md:px-32 space-y-10`}>
        <Capa />
        <section className="py-12">
          <h2 className={`${quicksand.className} text-3xl  text-center mb-8`}>Meus Projetos</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-1/2 lg:w-1/3 flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={500}
                  height={300}
                  className="object-cover w-full h-64"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                    Ver Projeto
                  </button>
                </div>
              </a>
            ))}
          </div>
        </section>
        <ProjetosGithub/>
      </div>
    </>
  );
}