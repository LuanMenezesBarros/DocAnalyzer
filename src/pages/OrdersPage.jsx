
import React from 'react';
import PlaceholderPage from '@/components/PlaceholderPage';
import { ClipboardList } from 'lucide-react';

const OrdersPage = () => {
  return (
    <PlaceholderPage
      title="Gerenciamento de Pedidos"
      description="Crie comandas por cliente ou mesa, acesse o histórico e integre com a cozinha."
      icon={ClipboardList}
    />
  );
};

export default OrdersPage;
  