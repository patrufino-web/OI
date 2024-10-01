// gp-site/app/about/page.tsx

import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-off-white min-h-screen py-10 px-5">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">Sobre Nós</h1>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-secondary mb-4">História</h2>
          <p className="text-lg text-neutral-dark leading-relaxed">
            A GP Gomes Fogões foi fundada em 1990 com a missão de fornecer produtos de alta qualidade para cozinhas residenciais e comerciais. Ao longo dos anos, expandimos nossa linha de produtos e serviços, sempre mantendo o compromisso com a excelência e a satisfação do cliente.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Missão</h2>
          <p className="text-lg text-neutral-dark leading-relaxed">
            Nossa missão é oferecer soluções inovadoras e sustentáveis para o mercado de utensílios de cozinha, garantindo a segurança e a eficiência em cada produto que entregamos.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Visão</h2>
          <p className="text-lg text-neutral-dark leading-relaxed">
            Ser reconhecida como a principal fornecedora de produtos e serviços para cozinhas, destacando-se pela qualidade, inovação e compromisso com o meio ambiente.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Valores</h2>
          <ul className="list-disc list-inside text-lg text-neutral-dark leading-relaxed">
            <li>Qualidade e Excelência</li>
            <li>Inovação Contínua</li>
            <li>Compromisso com o Cliente</li>
            <li>Sustentabilidade</li>
            <li>Ética e Transparência</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;

