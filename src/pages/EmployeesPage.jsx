
import React from 'react';
import PlaceholderPage from '@/components/PlaceholderPage';
import { UserCog } from 'lucide-react';

const EmployeesPage = () => {
  return (
    <PlaceholderPage
      title="Gerenciamento de Funcionários"
      description="Cadastre funcionários, defina turnos, cargos e permissões de acesso."
      icon={UserCog}
    />
  );
};

export default EmployeesPage;
  