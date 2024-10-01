import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Instalação de Gás Predial',
    description: 'Projeto de instalação de gás em um condomínio residencial, garantindo segurança e eficiência.',
    imageUrl: '/images/projects/gas-installation.jpg',
  },
  {
    id: 2,
    title: 'Manutenção de Fogões Industriais',
    description: 'Manutenção completa de fogões industriais em uma cozinha profissional.',
    imageUrl: '/images/projects/stove-maintenance.jpg',
  },
  {
    id: 3,
    title: 'Conversão de Fogões para Gás Natural',
    description: 'Conversão de fogões para uso de gás natural em uma residência.',
    imageUrl: '/images/projects/stove-conversion.jpg',
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="bg-off-white min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">Projetos Realizados</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-secondary mb-2">{project.title}</h2>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

