
import React from 'react';
import PlaceholderPage from '@/components/PlaceholderPage';
import { ShoppingBag } from 'lucide-react';

const ProductsPage = () => {
  return (
    <PlaceholderPage
      title="Gerenciamento de Produtos"
      description="Organize seus produtos por categorias, adicione descrições, controle estoque e defina preços."
      icon={ShoppingBag}
    />
  );
};

export default ProductsPage;
  