import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface Testimonial {
  name: string;
  message: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'João Silva',
    message: 'Excelente serviço e produtos de alta qualidade!',
    image: '/images/testimonials/joao.jpg',
  },
  {
    name: 'Maria Oliveira',
    message: 'Atendimento rápido e eficiente. Recomendo!',
    image: '/images/testimonials/maria.jpg',
  },
  {
    name: 'Carlos Pereira',
    message: 'Produtos incríveis e ótimo suporte ao cliente.',
    image: '/images/testimonials/carlos.jpg',
  },
];

const TestimonialsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8">Depoimentos de Clientes</h1>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={5000}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={testimonial.image}
              alt={`Foto de ${testimonial.name}`}
              className="w-24 h-24 rounded-full mb-4"
            />
            <p className="text-lg italic text-center mb-2">"{testimonial.message}"</p>
            <p className="text-sm font-semibold text-center">- {testimonial.name}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialsPage;

