
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const WeeklyStory = () => {
  return (
    <section className="bg-blue-50 section-padding" id="historia-semana">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            História da Semana
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça mais sobre os profissionais que fazem a diferença em nossa instituição
          </p>
        </motion.div>

        <Card className="overflow-hidden bg-white shadow-xl rounded-2xl">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img 
                  className="w-full h-full object-cover"
                  alt="Maria Silva em ação durante atendimento"
                 src="https://images.unsplash.com/photo-1652376252884-b883c5aed48a" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="p-8"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">
                    Maria Silva
                  </h3>
                  <p className="text-purple-600 font-medium">
                    Fisioterapeuta - Unidade São Paulo
                  </p>
                </div>

                <div className="space-y-4 text-gray-600">
                  <p>
                    Há 15 anos dedicando-se ao cuidado dos motoristas e suas famílias, 
                    Maria transformou sua vocação em uma missão de vida.
                  </p>
                  <p>
                    Especializada em tratamento de lesões ocupacionais, ela desenvolveu 
                    um programa inovador de prevenção que já beneficiou mais de 5.000 
                    profissionais do transporte.
                  </p>
                </div>

                <div className="mt-8 relative">
                  <Quote className="text-blue-200 w-12 h-12 absolute -top-4 -left-4" />
                  <blockquote className="relative z-10 italic text-lg text-blue-900 pl-8">
                    "Cada sorriso de alívio, cada motorista que retorna ao trabalho 
                    sem dor, é uma vitória que me motiva a continuar."
                  </blockquote>
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WeeklyStory;
  