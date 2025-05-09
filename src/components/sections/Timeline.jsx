
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TimelineStory = ({ story, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.8 }}
  >
    <Card className="card-hover">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <img 
            className="w-24 h-24 rounded-full object-cover"
            alt={`Foto de ${story.name}`}
           src="https://images.unsplash.com/photo-1695963082551-7baf2e0c2cab" />
          <div>
            <h3 className="font-bold text-lg text-blue-900">{story.name}</h3>
            <p className="text-purple-600 text-sm mb-2">{story.role}</p>
            <p className="text-gray-600">{story.excerpt}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const Timeline = () => {
  const stories = [
    {
      name: "João Santos",
      role: "Instrutor de Qualificação Profissional",
      excerpt: "Capacitando motoristas há 10 anos com técnicas inovadoras."
    },
    {
      name: "Ana Oliveira",
      role: "Nutricionista",
      excerpt: "Desenvolvendo programas de alimentação saudável para profissionais do transporte."
    },
    {
      name: "Carlos Lima",
      role: "Psicólogo",
      excerpt: "Auxiliando no bem-estar emocional dos trabalhadores e suas famílias."
    },
    // Adicione mais histórias conforme necessário
  ];

  return (
    <section className="section-padding" id="linha-tempo">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Linha do Tempo de Impacto
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore as histórias inspiradoras dos nossos colaboradores
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, index) => (
            <TimelineStory key={story.name} story={story} index={index} />
          ))}
        </div>

        <div className="flex justify-center mt-8 gap-4">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
  