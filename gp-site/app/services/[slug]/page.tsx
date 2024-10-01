import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Define a type for the service data
type Service = {
  title: string;
  description: string;
  details: string[];
};

// Example service data
const servicesData: Record<string, Service> = {
  'instalacao-gas': {
    title: 'Instalação de Gás',
    description: 'Serviço de instalação de gás predial e doméstico.',
    details: [
      'Instalação segura e eficiente.',
      'Profissionais qualificados.',
      'Atendimento rápido e confiável.',
    ],
  },
  'manutencao-fogoes': {
    title: 'Manutenção de Fogões',
    description: 'Serviço de manutenção para fogões e sistemas de gás.',
    details: [
      'Reparo de fogões de todas as marcas.',
      'Peças originais e garantia.',
      'Serviço no local ou em nossa oficina.',
    ],
  },
  // Add more services as needed
};

const ServicePage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [service, setService] = useState<Service | null>(null);

  useEffect(() => {
    if (slug && typeof slug === 'string') {
      const serviceData = servicesData[slug];
      if (serviceData) {
        setService(serviceData);
      } else {
        // Handle case where service is not found
        setService(null);
      }
    }
  }, [slug]);

  if (!service) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold text-primary">Serviço não encontrado</h1>
        <p className="mt-4 text-neutral-dark">Desculpe, o serviço que você está procurando não está disponível.</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-primary">{service.title}</h1>
      <p className="mt-4 text-lg text-neutral-dark">{service.description}</p>
      <ul className="mt-6 list-disc list-inside">
        {service.details.map((detail, index) => (
          <li key={index} className="text-neutral-dark">
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicePage;

