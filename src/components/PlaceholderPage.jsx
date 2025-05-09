
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Construction } from 'lucide-react';

const PlaceholderPage = ({ title, description, icon: Icon }) => {
  const PageIcon = Icon || Construction;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center h-full p-6 text-center"
    >
      <Card className="w-full max-w-lg glassmorphism-card shadow-xl">
        <CardHeader className="items-center">
          <div className="p-4 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full mb-4 shadow-lg">
            <PageIcon className="h-12 w-12 text-white" />
          </div>
          <CardTitle className="text-3xl font-bold gradient-text">{title}</CardTitle>
          {description && (
            <CardDescription className="text-slate-300 mt-2 text-lg">
              {description}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <p className="text-slate-400">
            Esta seção está atualmente em desenvolvimento. Volte em breve para conferir as novidades!
          </p>
          <img  alt="Under construction illustration" className="mx-auto mt-8 max-w-xs" src="https://images.unsplash.com/photo-1538688554366-621d446302aa" />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PlaceholderPage;
  