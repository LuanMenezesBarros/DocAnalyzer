
import React from 'react';
import PlaceholderPage from '@/components/PlaceholderPage';
import { Settings } from 'lucide-react';

const SettingsPage = () => {
  return (
    <PlaceholderPage
      title="Configurações do Sistema"
      description="Personalize o tema, insira dados da empresa, logo e outras configurações gerais."
      icon={Settings}
    />
  );
};

export default SettingsPage;
  