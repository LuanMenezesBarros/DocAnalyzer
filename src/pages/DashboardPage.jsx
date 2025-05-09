
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { FileText, AlertTriangle, Clock, Users, Search } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, description, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Card className="glassmorphism-card hover:shadow-purple-500/30 transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-slate-300">{title}</CardTitle>
        <Icon className={`h-5 w-5 ${color || 'text-purple-400'}`} />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-slate-100">{value}</div>
        <p className="text-xs text-slate-400 mt-1">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const DashboardPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-2 md:p-6 space-y-6"
    >
      <motion.h1 
        className="text-3xl md:text-4xl font-bold gradient-text mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Análise de Contratos
      </motion.h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total de Contratos"
          value="156"
          icon={FileText}
          description="Documentos processados"
          color="text-blue-400"
        />
        <StatCard
          title="Contratos Vencendo"
          value="8"
          icon={AlertTriangle}
          description="Próximos 30 dias"
          color="text-yellow-400"
        />
        <StatCard
          title="Tempo Médio de Análise"
          value="2.5min"
          icon={Clock}
          description="Por documento"
          color="text-green-400"
        />
        <StatCard
          title="Responsáveis Ativos"
          value="12"
          icon={Users}
          description="Gerenciando contratos"
          color="text-purple-400"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Card className="glassmorphism-card h-full">
            <CardHeader>
              <CardTitle className="text-xl text-slate-200">Últimos Contratos Analisados</CardTitle>
              <CardDescription className="text-slate-400">Documentos processados recentemente</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  { id: 'CTR-001', title: 'Contrato de Prestação de Serviços', status: 'Processado', time: '2 min atrás' },
                  { id: 'CTR-002', title: 'Acordo de Confidencialidade', status: 'Em análise', time: '5 min atrás' },
                  { id: 'CTR-003', title: 'Contrato de Fornecimento', status: 'Processado', time: '10 min atrás' },
                  { id: 'CTR-004', title: 'Termo Aditivo', status: 'Processado', time: '15 min atrás' },
                ].map(doc => (
                  <li key={doc.id} className="flex justify-between items-center p-3 bg-slate-700/30 rounded-md hover:bg-slate-600/50 transition-colors">
                    <div>
                      <p className="font-semibold text-slate-100">{doc.title}</p>
                      <p className="text-sm text-slate-400">{doc.id} - {doc.time}</p>
                    </div>
                    <span className="text-sm font-medium text-purple-300">{doc.status}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Card className="glassmorphism-card h-full">
            <CardHeader>
              <CardTitle className="text-xl text-slate-200">Análise de Dados</CardTitle>
              <CardDescription className="text-slate-400">Informações extraídas dos contratos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-slate-700/30 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">Tipos de Contrato</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Prestação de Serviços</span>
                      <span className="text-purple-300">45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Fornecimento</span>
                      <span className="text-purple-300">30%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Termos Aditivos</span>
                      <span className="text-purple-300">15%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Outros</span>
                      <span className="text-purple-300">10%</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-700/30 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">Status de Processamento</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Processados</span>
                      <span className="text-green-400">85%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Em Análise</span>
                      <span className="text-yellow-400">10%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Com Erro</span>
                      <span className="text-red-400">5%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DashboardPage;
  