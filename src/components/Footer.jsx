
import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SEST SENAT</h3>
            <p className="text-blue-200">
              Transformando vidas através da educação, saúde e bem-estar.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#historia-semana" className="text-blue-200 hover:text-white transition-colors">História da Semana</a></li>
              <li><a href="#linha-tempo" className="text-blue-200 hover:text-white transition-colors">Linha do Tempo</a></li>
              <li><a href="#depoimentos" className="text-blue-200 hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#bastidores" className="text-blue-200 hover:text-white transition-colors">Bastidores</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-blue-200">
              <li>0800 728 2891</li>
              <li>contato@sestsenat.org.br</li>
              <li>Atendimento: Seg-Sex, 8h-18h</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-800 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} SEST SENAT. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  