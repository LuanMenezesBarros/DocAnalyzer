
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Clock, Calendar, Bell, CheckCircle, X } from 'lucide-react';

const AlertCard = ({ alert }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Card className={`border-l-4 ${
      alert.priority === 'high' ? 'border-l-red-500' :
      alert.priority === 'medium' ? 'border-l-yellow-500' :
      'border-l-blue-500'
    }`}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <div className={`p-2 rounded-full ${
              alert.priority === 'high' ? 'bg-red-100 text-red-500' :
              alert.priority === 'medium' ? 'bg-yellow-100 text-yellow-500' :
              'bg-blue-100 text-blue-500'
            }`}>
              {alert.type === 'expiry' ? <Clock className="h-5 w-5" /> :
               alert.type === 'renewal' ? <Calendar className="h-5 w-5" /> :
               <AlertTriangle className="h-5 w-5" />}
            </div>
            <div>
              <h3 className="font-medium">{alert.title}</h3>
              <p className="text-sm text-gray-500">{alert.description}</p>
              <div className="flex items-center mt-2 text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                {alert.date}
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <CheckCircle className="h-4 w-4 mr-1" />
              Marcar como Lido
            </Button>
            <Button variant="ghost" size="icon">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const AlertsPage = () => {
  const alerts = [
    {
      id: 1,
      type: 'expiry',
      priority: 'high',
      title: 'Contrato Próximo ao Vencimento',
      description: 'O contrato #2023-001 vencerá em 15 dias.',
      date: 'Vence em 15/12/2023'
    },
    {
      id: 2,
      type: 'renewal',
      priority: 'medium',
      title: 'Renovação Pendente',
      description: 'O contrato #2023-002 precisa ser renovado.',
      date: 'Renovar até 30/11/2023'
    },
    {
      id: 3,
      type: 'alert',
      priority: 'low',
      title: 'Novo Documento Disponível',
      description: 'Um novo anexo foi adicionado ao contrato #2023-003.',
      date: 'Adicionado hoje'
    }
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
          <h1 className="text-3xl font-bold gradient-text">Alertas e Notificações</h1>
          <p className="text-gray-500 mt-2">
            Gerencie seus alertas de contratos e documentos
          </p>
        </div>
        <Button>
          <Bell className="h-4 w-4 mr-2" />
          Configurar Alertas
        </Button>
      </motion.div>

      <Card>
        <CardHeader>
          <CardTitle>Resumo</CardTitle>
          <CardDescription>Visão geral dos seus alertas ativos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="text-red-600 font-medium">Alta Prioridade</h3>
              <p className="text-2xl font-bold text-red-700">3</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="text-yellow-600 font-medium">Média Prioridade</h3>
              <p className="text-2xl font-bold text-yellow-700">5</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-blue-600 font-medium">Baixa Prioridade</h3>
              <p className="text-2xl font-bold text-blue-700">8</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <AlertCard key={alert.id} alert={alert} />
        ))}
      </div>
    </div>
  );
};

export default AlertsPage;
  