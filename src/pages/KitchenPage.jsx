
import React from 'react';
import PlaceholderPage from '@/components/PlaceholderPage';
import { Layers } from 'lucide-react';

const KitchenPage = () => {
  return (
    <PlaceholderPage
      title="Painel da Cozinha"
      description="Acompanhe o preparo dos pedidos em tempo real e atualize o status dos pratos."
      icon={Layers}
    />
  );
};

export default KitchenPage;
  