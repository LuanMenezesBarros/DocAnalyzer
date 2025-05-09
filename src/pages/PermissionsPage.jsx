
import React from 'react';
import PlaceholderPage from '@/components/PlaceholderPage';
import { ShieldCheck } from 'lucide-react';

const PermissionsPage = () => {
  return (
    <PlaceholderPage
      title="Gerenciamento de Permissões"
      description="Controle o acesso às funcionalidades do sistema por cargo ou usuário."
      icon={ShieldCheck}
    />
  );
};

export default PermissionsPage;
  