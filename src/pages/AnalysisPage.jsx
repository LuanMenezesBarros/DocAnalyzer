
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, PieChart, LineChart, Download, Filter } from 'lucide-react';

const AnalysisPage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedMetric, setSelectedMetric] = useState('contracts');

  const metrics = {
    totalContracts: 45,
    activeContracts: 32,
    expiringContracts: 8,
    averageValue: 'R$ 45.000,00',
    totalValue: 'R$ 1.440.000,00'
  };

  const contractTypes = [
    { type: 'Fornecimento', count: 15 },
    { type: 'Serviços', count: 12 },
    { type: 'Manutenção', count: 8 },
    { type: 'Consultoria', count: 5 },
    { type: 'Outros', count: 5 }
  ];

  const contractStatus = [
    { status: 'Ativos', count: 32 },
    { status: 'Expirando', count: 8 },
    { status: 'Vencidos', count: 5 }
  ];

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center"
      >
        <div>
          <h1 className="text-3xl font-bold gradient-text">Análise de Contratos</h1>
          <p className="text-gray-500 mt-2">
            Visualize métricas e tendências dos seus contratos
          </p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Exportar Relatório
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total de Contratos</CardTitle>
            <CardDescription>Todos os contratos cadastrados</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-blue-600">{metrics.totalContracts}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contratos Ativos</CardTitle>
            <CardDescription>Contratos em vigência</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-green-600">{metrics.activeContracts}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contratos Expirando</CardTitle>
            <CardDescription>Próximos 30 dias</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-yellow-600">{metrics.expiringContracts}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Tipos de Contrato</CardTitle>
            <CardDescription>Distribuição por categoria</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {contractTypes.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-600">{item.type}</span>
                  <div className="flex items-center space-x-4">
                    <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{
                          width: `${(item.count / metrics.totalContracts) * 100}%`
                        }}
                      />
                    </div>
                    <span className="text-gray-500 min-w-[2rem]">{item.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Status dos Contratos</CardTitle>
            <CardDescription>Visão geral da situação atual</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {contractStatus.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-600">{item.status}</span>
                  <div className="flex items-center space-x-4">
                    <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          item.status === 'Ativos'
                            ? 'bg-green-500'
                            : item.status === 'Expirando'
                            ? 'bg-yellow-500'
                            : 'bg-red-500'
                        }`}
                        style={{
                          width: `${(item.count / metrics.totalContracts) * 100}%`
                        }}
                      />
                    </div>
                    <span className="text-gray-500 min-w-[2rem]">{item.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Valor Total dos Contratos</CardTitle>
          <CardDescription>Soma de todos os contratos ativos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold text-green-600">{metrics.totalValue}</div>
          <p className="text-gray-500 mt-2">Média por contrato: {metrics.averageValue}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalysisPage;
  