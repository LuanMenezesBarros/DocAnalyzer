
import React from 'react';
import PlaceholderPage from '@/components/PlaceholderPage';
import { Users } from 'lucide-react';

const CustomersPage = () => {
  return (
    <PlaceholderPage
      title="Gerenciamento de Clientes"
      description="Cadastre, consulte e gerencie informações dos seus clientes."
      icon={Users}
    />
  );
};

export default CustomersPage;
  