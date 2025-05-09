
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FileText, Download, Share2, AlertTriangle, Calendar, DollarSign, User, Clock, Send, MessageSquare } from 'lucide-react';

const ContractDetailsPage = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  // Simulação de dados do contrato
  const contract = {
    id,
    title: "Contrato de Fornecimento #2023-001",
    responsible: "João Silva",
    value: "R$ 50.000,00",
    startDate: "01/01/2023",
    expiryDate: "15/12/2023",
    status: "active",
    daysToExpiry: 45,
    description: "Contrato de fornecimento de materiais de escritório para todas as unidades da empresa.",
    content: `Este contrato estabelece os termos para fornecimento de materiais de escritório.
              O prazo de entrega é de 5 dias úteis após cada pedido.
              O pagamento será realizado em 30 dias após a entrega.
              O valor total do contrato é de R$ 50.000,00.
              As entregas devem ser realizadas nas seguintes unidades: São Paulo, Rio de Janeiro e Belo Horizonte.
              O contrato tem vigência de 12 meses, iniciando em 01/01/2023 e terminando em 15/12/2023.
              O responsável pelo contrato é João Silva.
              Em caso de atraso na entrega, será aplicada multa de 1% por dia de atraso.`,
    stakeholders: [
      { name: "Maria Santos", role: "Gestor do Contrato" },
      { name: "Carlos Lima", role: "Fiscal do Contrato" }
    ],
    milestones: [
      { date: "01/03/2023", description: "Primeira entrega" },
      { date: "01/06/2023", description: "Segunda entrega" },
      { date: "01/09/2023", description: "Terceira entrega" }
    ]
  };

  const tokenizer = new natural.WordTokenizer();
  const TfIdf = natural.TfIdf;
  const tfidf = new TfIdf();

  // Função para processar o texto do contrato
  const processContractText = () => {
    const sections = contract.content.split('.');
    sections.forEach(section => {
      if (section.trim()) {
        tfidf.addDocument(section.toLowerCase());
      }
    });
  };

  // Função para encontrar a resposta mais relevante
  const findAnswer = (question) => {
    const questionTokens = tokenizer.tokenize(question.toLowerCase());
    const sections = contract.content.split('.');
    let bestMatch = { score: 0, text: '' };

    sections.forEach((section, index) => {
      if (!section.trim()) return;

      let score = 0;
      questionTokens.forEach(token => {
        if (section.toLowerCase().includes(token)) {
          score += 1;
        }
      });

      if (score > bestMatch.score) {
        bestMatch = { score, text: section.trim() };
      }
    });

    return bestMatch.score > 0 ? bestMatch.text : "Desculpe, não encontrei uma resposta específica para essa pergunta no contrato.";
  };

  const handleQuestionSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    processContractText();

    // Simular processamento
    setTimeout(() => {
      const response = findAnswer(question);
      
      const newInteraction = {
        question,
        answer: response,
        timestamp: new Date().toISOString()
      };

      setChatHistory(prev => [...prev, newInteraction]);
      setQuestion('');
      setAnswer(response);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-start"
      >
        <div>
          <h1 className="text-3xl font-bold gradient-text">{contract.title}</h1>
          <p className="text-gray-500 mt-2">ID do Contrato: {contract.id}</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
          <Button variant="outline">
            <Share2 className="h-4 w-4 mr-2" />
            Compartilhar
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Informações Principais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <User className="h-5 w-5 text-blue-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Responsável</p>
                  <p className="font-medium">{contract.responsible}</p>
                </div>
              </div>
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 text-green-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Valor do Contrato</p>
                  <p className="font-medium">{contract.value}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-purple-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Período</p>
                  <p className="font-medium">{contract.startDate} - {contract.expiryDate}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-orange-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <div className="flex items-center">
                    <span className="font-medium">{contract.daysToExpiry} dias para vencer</span>
                    {contract.daysToExpiry < 30 && (
                      <AlertTriangle className="h-4 w-4 text-yellow-500 ml-2" />
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Descrição do Contrato</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{contract.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Perguntas sobre o Contrato</CardTitle>
            <CardDescription>
              Faça perguntas sobre o conteúdo deste contrato
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleQuestionSubmit} className="space-y-4">
              <div className="flex gap-2">
                <Input
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Ex: Qual o prazo de entrega?"
                  className="flex-1"
                />
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Perguntar
                    </>
                  )}
                </Button>
              </div>
            </form>

            <div className="mt-6 space-y-4">
              {chatHistory.map((interaction, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-start gap-2">
                    <User className="h-5 w-5 text-blue-500 mt-1" />
                    <div className="bg-blue-50 rounded-lg p-3 flex-1">
                      <p className="text-blue-900">{interaction.question}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MessageSquare className="h-5 w-5 text-green-500 mt-1" />
                    <div className="bg-green-50 rounded-lg p-3 flex-1">
                      <p className="text-green-900">{interaction.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Marcos do Contrato</CardTitle>
            <CardDescription>Principais entregas e eventos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {contract.milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <FileText className="h-4 w-4 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium">{milestone.description}</p>
                    <p className="text-sm text-gray-500">{milestone.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ContractDetailsPage;
