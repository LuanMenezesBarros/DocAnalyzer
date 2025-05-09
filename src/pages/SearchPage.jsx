
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search as SearchIcon, Filter, FileText, Calendar, User, DollarSign } from 'lucide-react';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Simulação de resultados de busca
  const mockResults = [
    {
      id: 1,
      title: "Contrato de Fornecimento #2023-001",
      excerpt: "Este contrato estabelece os termos para fornecimento de materiais...",
      matches: ["fornecimento", "materiais"],
      date: "15/12/2023",
      responsible: "João Silva",
      value: "R$ 50.000,00"
    },
    {
      id: 2,
      title: "Contrato de Serviços #2023-002",
      excerpt: "Prestação de serviços de manutenção preventiva e corretiva...",
      matches: ["serviços", "manutenção"],
      date: "30/11/2023",
      responsible: "Maria Santos",
      value: "R$ 25.000,00"
    }
  ];

  const handleSearch = () => {
    setIsSearching(true);
    // Simular uma busca com delay
    setTimeout(() => {
      setSearchResults(mockResults);
      setIsSearching(false);
    }, 1000);
  };

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold gradient-text mb-4">Busca Avançada</h1>
        <p className="text-gray-500">
          Pesquise em todos os documentos por palavras-chave, datas ou valores
        </p>
      </motion.div>

      <Card>
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Digite sua busca..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
            <Button onClick={handleSearch}>
              <SearchIcon className="h-4 w-4 mr-2" />
              Buscar
            </Button>
          </div>
        </CardContent>
      </Card>

      {isSearching ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
        </div>
      ) : searchResults.length > 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {searchResults.map((result) => (
            <Card key={result.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <FileText className="h-5 w-5 text-blue-500" />
                      <h3 className="text-lg font-semibold">{result.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{result.excerpt}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {result.date}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {result.responsible}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {result.value}
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Ver Documento
                  </Button>
                </div>
                {result.matches.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500">
                      Encontrado em: {result.matches.join(", ")}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </motion.div>
      ) : searchTerm && (
        <div className="text-center py-12 text-gray-500">
          Nenhum resultado encontrado para "{searchTerm}"
        </div>
      )}
    </div>
  );
};

export default SearchPage;
  