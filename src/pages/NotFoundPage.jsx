
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className="flex flex-col items-center"
      >
        <AlertTriangle className="h-24 w-24 text-yellow-400 mb-8 animate-pulse" />
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mb-4">
          404
        </h1>
        <h2 className="text-3xl font-semibold text-slate-200 mb-3">Página Não Encontrada</h2>
        <p className="text-lg text-slate-400 mb-10 max-w-md">
          Oops! Parece que a página que você está procurando não existe ou foi movida.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold py-3 px-8 text-base transition-all duration-300 ease-in-out">
            <Link to="/dashboard">Voltar para o Painel</Link>
          </Button>
        </motion.div>
      </motion.div>
      <p className="absolute bottom-6 text-sm text-slate-500">
        Se você acredita que isso é um erro, por favor, contate o suporte.
      </p>
    </div>
  );
};

export default NotFoundPage;
  