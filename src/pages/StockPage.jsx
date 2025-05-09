
import React from 'react';
import PlaceholderPage from '@/components/PlaceholderPage';
import { Package } from 'lucide-react';

const StockPage = () => {
  return (
    <PlaceholderPage
      title="Controle de Estoque"
      description="Gerencie o estoque por insumo, receba alertas de baixo estoque e utilize fichas técnicas."
      icon={Package}
    />
  );
};

export default StockPage;
  