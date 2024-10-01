import React from 'react';

// Define the Layout component
const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-yellow-500 text-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">GP Gomes Fogões</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">Sobre</a></li>
              <li><a href="/products" className="hover:underline">Produtos</a></li>
              <li><a href="/services" className="hover:underline">Serviços</a></li>
              <li><a href="/contact" className="hover:underline">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 GP Gomes Fogões. Todos os direitos reservados.</p>
          <p>Desenvolvido por Patrícia Rufino Dias</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

