
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, FileText, AlertTriangle, CheckCircle } from 'lucide-react';

const ContractCard = ({ contract }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-2">
          <FileText className="h-5 w-5 text-blue-500" />
          <CardTitle className="text-lg font-medium">{contract.title}</CardTitle>
        </div>
        {contract.status === 'active' ? (
          <span className="flex items-center text-green-500">
            <CheckCircle className="h-4 w-4 mr-1" />
            Ativo
          </span>
        ) : (
          <span className="flex items-center text-yellow-500">
            <AlertTriangle className="h-4 w-4 mr-1" />
            Expirando
          </span>
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm text-gray-600">
            <strong>Responsável:</strong> {contract.responsible}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Valor:</strong> {contract.value}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Vencimento:</strong> {contract.expiryDate}
          </p>
          <div className="flex justify-between items-center mt-4">
            <Button variant="outline" size="sm">
              Ver Detalhes
            </Button>
            <span className={`text-xs ${
              contract.daysToExpiry < 30 ? 'text-red-500' : 'text-gray-500'
            }`}>
              {contract.daysToExpiry} dias para vencer
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const ContractsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const contracts = [
    {
      id: 1,
      title: "Contrato de Fornecimento #2023-001",
      responsible: "João Silva",
      value: "R$ 50.000,00",
      expiryDate: "15/12/2023",
      status: "active",
      daysToExpiry: 45
    },
    {
      id: 2,
      title: "Contrato de Serviços #2023-002",
      responsible: "Maria Santos",
      value: "R$ 25.000,00",
      expiryDate: "30/11/2023",
      status: "expiring",
      daysToExpiry: 15
    },
    // Adicione mais contratos conforme necessário
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold gradient-text">Contratos</h1>
        <Button>Novo Contrato</Button>
      </div>

      <Card className="bg-white/5 backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Buscar contratos..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {contracts.map((contract) => (
          <ContractCard key={contract.id} contract={contract} />
        ))}
      </div>
    </div>
  );
};

export default ContractsPage;
  