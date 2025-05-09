
import React, { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { useDropzone } from 'react-dropzone';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, File, X, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import * as pdfjs from 'pdfjs-dist';

// Configurar worker do PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const UploadPage = () => {
  const [files, setFiles] = useState([]);
  const { toast } = useToast();

  // Função para extrair informações do PDF
  const extractPdfInfo = async (file) => {
    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
      let fullText = '';

      // Extrair texto de todas as páginas
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        fullText += textContent.items.map(item => item.str).join(' ');
      }

      // Funções auxiliares para extrair informações específicas
      const extractDate = (text, prefix) => {
        const dateRegex = /(\d{2}\/\d{2}\/\d{4}|\d{4}-\d{2}-\d{2})/;
        const startIndex = text.indexOf(prefix);
        if (startIndex === -1) return null;
        const searchText = text.substring(startIndex, startIndex + 100);
        const match = searchText.match(dateRegex);
        return match ? match[0] : null;
      };

      const extractValue = (text) => {
        const valueRegex = /R\$\s*(\d{1,3}(?:\.\d{3})*(?:,\d{2})?)/;
        const match = text.match(valueRegex);
        return match ? match[0] : null;
      };

      const extractResponsible = (text) => {
        const responsibleRegex = /responsável:?\s*([^,.\n]+)/i;
        const match = text.match(responsibleRegex);
        return match ? match[1].trim() : null;
      };

      // Extrair informações específicas
      const contractInfo = {
        startDate: extractDate(fullText, 'início') || extractDate(fullText, 'data'),
        endDate: extractDate(fullText, 'término') || extractDate(fullText, 'fim'),
        value: extractValue(fullText),
        responsible: extractResponsible(fullText),
        type: fullText.toLowerCase().includes('prestação de serviço') ? 'Prestação de Serviço' :
              fullText.toLowerCase().includes('compra') ? 'Contrato de Compra' :
              'Outros'
      };

      return contractInfo;
    } catch (error) {
      console.error('Erro ao extrair informações do PDF:', error);
      return null;
    }
  };

  const onDrop = useCallback(async (acceptedFiles) => {
    for (const file of acceptedFiles) {
      const contractInfo = await extractPdfInfo(file);
      setFiles(prev => [...prev, {
        file,
        id: Math.random().toString(36).substr(2, 9),
        progress: 0,
        status: 'pending',
        contractInfo
      }]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    },
    multiple: true
  });

  const removeFile = (id) => {
    setFiles(files.filter(file => file.id !== id));
  };

  const uploadFiles = () => {
    files.forEach(fileObj => {
      const interval = setInterval(() => {
        setFiles(prev => prev.map(f => {
          if (f.id === fileObj.id) {
            const newProgress = Math.min(f.progress + 20, 100);
            return {
              ...f,
              progress: newProgress,
              status: newProgress === 100 ? 'completed' : 'uploading'
            };
          }
          return f;
        }));
      }, 500);

      setTimeout(() => {
        clearInterval(interval);
        toast({
          title: "Upload Concluído",
          description: `${fileObj.file.name} foi processado com sucesso.`,
        });
      }, 2500);
    });
  };

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold gradient-text mb-4">Upload de Contratos</h1>
        <p className="text-gray-500 mb-6">
          Faça upload dos seus contratos em PDF para análise automática
        </p>

        <Card>
          <CardContent className="p-6">
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
              }`}
            >
              <input {...getInputProps()} />
              <Upload className="h-12 w-12 mx-auto mb-4 text-blue-500" />
              <p className="text-lg font-medium">
                {isDragActive
                  ? "Solte os arquivos aqui"
                  : "Arraste e solte arquivos PDF aqui, ou clique para selecionar"}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Apenas arquivos PDF são aceitos
              </p>
            </div>
          </CardContent>
        </Card>

        {files.length > 0 && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Contratos Analisados</CardTitle>
              <CardDescription>
                {files.length} contrato(s) processado(s)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {files.map((fileObj) => (
                  <div
                    key={fileObj.id}
                    className="p-4 bg-gray-50 rounded-lg space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <File className="h-6 w-6 text-blue-500" />
                        <div>
                          <p className="font-medium">{fileObj.file.name}</p>
                          <p className="text-sm text-gray-500">
                            {(fileObj.file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFile(fileObj.id)}
                        className="text-gray-500 hover:text-red-500 transition-colors"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>

                    {fileObj.contractInfo ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white p-4 rounded-md">
                        <div>
                          <p className="text-sm font-medium text-gray-500">Tipo de Contrato</p>
                          <p className="text-sm">{fileObj.contractInfo.type || 'Não identificado'}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Data de Início</p>
                          <p className="text-sm">{fileObj.contractInfo.startDate || 'Não identificada'}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Data de Término</p>
                          <p className="text-sm">{fileObj.contractInfo.endDate || 'Não identificada'}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Valor</p>
                          <p className="text-sm">{fileObj.contractInfo.value || 'Não identificado'}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Responsável</p>
                          <p className="text-sm">{fileObj.contractInfo.responsible || 'Não identificado'}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2 text-yellow-500">
                        <AlertCircle className="h-5 w-5" />
                        <p className="text-sm">Não foi possível extrair informações deste arquivo</p>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      {fileObj.status === 'completed' ? (
                        <div className="flex items-center space-x-2 text-green-500">
                          <CheckCircle className="h-5 w-5" />
                          <span className="text-sm">Processado</span>
                        </div>
                      ) : (
                        <div className="w-full">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className="bg-blue-500 h-2.5 rounded-full transition-all duration-300"
                              style={{ width: `${fileObj.progress}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-end">
                <Button onClick={uploadFiles} disabled={files.length === 0}>
                  Salvar Contratos
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </motion.div>
    </div>
  );
};

export default UploadPage;
  