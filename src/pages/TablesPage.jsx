
import React from 'react';
import PlaceholderPage from '@/components/PlaceholderPage';
import { UtensilsCrossed } from 'lucide-react';

const TablesPage = () => {
  return (
    <PlaceholderPage
      title="Gerenciamento de Mesas"
      description="Controle a ocupação das mesas, visualize status e gerencie reservas."
      icon={UtensilsCrossed}
    />
  );
};

export default TablesPage;
  