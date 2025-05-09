
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.8 }}
  >
    <Card className="h-full card-hover">
      <CardContent className="p-6 relative">
        <Quote className="text-blue-100 w-8 h-8 absolute top-4 left-4" />
        <div className="relative z-10">
          <p className="text-gray-600 mb-4 pt-6">
            {testimonial.content}
          </p>
          <div className="flex items-center gap-4">
            <img 
              className="w-12 h-12 rounded-full object-cover"
              alt={`Foto de ${testimonial.name}`}
             src="https://images.unsplash.com/photo-1598911642263-b81130ed8ce8" />
            <div>
              <p className="font-semibold text-blue-900">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const Testimonials = () => {
  const testimonials = [
    {
      content: "O programa de saúde do SEST SENAT mudou minha vida. Graças aos profissionais dedicados, consegui melhorar minha qualidade de vida.",
      name: "Pedro Oliveira",
      role: "Motorista de Caminhão"
    },
    {
      content: "O cuidado e atenção que recebi durante meu tratamento foram excepcionais. Os profissionais são verdadeiros anjos.",
      name: "Maria Costa",
      role: "Familiar de Motorista"
    },
    {
      content: "As aulas de qualificação profissional me ajudaram a crescer na carreira. Os instrutores são muito preparados.",
      name: "José Silva",
      role: "Motorista de Ônibus"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 section-padding" id="depoimentos">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Conexão Humana
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Histórias reais de como nossos profissionais impactam vidas
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.name} 
              testimonial={testimonial} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
  