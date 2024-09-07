import React from 'react';
import { Header } from '@/components/Header';
import { Dosis } from 'next/font/google';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Importando ícones

// Importar a imagem
import avata from '@/assets/imagens/avata.jpeg'; // Ajuste o caminho e a extensão conforme necessário

const dosis = Dosis({
  subsets: ['latin'],
  weight: '500',
});

export default function Contact() {
  return (
    <>
      <div className={dosis.className}>
        <title>Contato | Felipe Dias</title>
        <meta name="description" content="Entre em contato com Felipe Dias, desenvolvedor Front-end." />
      </div>
      <Header />
      <div className="py-12 px-6 md:px-32 space-y-10 bg-gray-100 min-h-screen">
        <div className="text-center">
          <Image
            src={avata} // Usando a imagem importada
            alt="Felipe Dias"
            width={150}
            height={150}
            className="rounded-full mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold mb-6 text-gray-800">Entre em Contato</h1>
          <p className="text-lg mb-4 text-gray-700">Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para me contactar através dos seguintes meios:</p>
          <div className="flex flex-col items-center gap-4">
            <a href="mailto:felipedevcar@gmail.com" className="flex items-center text-xl text-blue-600 hover:underline">
              <FaEnvelope className="mr-2" /> E-mail: felipedevcar@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/felipe-dias-280950248/" className="flex items-center text-xl text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
            <a href="https://github.com/FillDias" className="flex items-center text-xl text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              <FaGithub className="mr-2" /> GitHub
            </a>
            <p className="text-xl text-gray-700">Telefone: 27 998182224</p>
          </div>
        </div>
      </div>
    </>
  );
}