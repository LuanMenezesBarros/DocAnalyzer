
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Brain, Truck, Book } from 'lucide-react';

const ServiceCard = ({ title, description, icon: Icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.8 }}
  >
    <Card className="h-full card-hover">
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const BehindTheScenes = () => {
  const services = [
    {
      icon: Heart,
      title: "Saúde",
      description: "Equipe multidisciplinar dedicada ao bem-estar físico e mental dos trabalhadores."
    },
    {
      icon: Brain,
      title: "Educação",
      description: "Programas de qualificação profissional com metodologias inovadoras."
    },
    {
      icon: Truck,
      title: "Suporte Técnico",
      description: "Assistência especializada para profissionais do transporte."
    },
    {
      icon: Book,
      title: "Desenvolvimento",
      description: "Cursos e treinamentos para crescimento profissional contínuo."
    }
  ];

  return (
    <section className="section-padding bg-white" id="bastidores">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Bastidores do Cuidado
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça o trabalho diário das nossas equipes comprometidas com a excelência
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                className="rounded-lg shadow-xl"
                alt="Equipe SEST SENAT em ação"
               src="https://images.unsplash.com/photo-1467105965775-f749f2ca0411" />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-900">
                Compromisso com a Excelência
              </h3>
              <p className="text-gray-600">
                Nossa equipe trabalha incansavelmente para oferecer o melhor atendimento 
                e suporte aos trabalhadores do transporte e suas famílias. Cada profissional 
                é parte fundamental dessa missão de transformar vidas.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  Atendimento humanizado e personalizado
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  Equipe altamente qualificada
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  Infraestrutura moderna e acolhedora
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BehindTheScenes;
  