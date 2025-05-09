
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Target, Users, Star } from 'lucide-react';

const ValueCard = ({ title, description, icon: Icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.8 }}
  >
    <Card className="h-full card-hover">
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-purple-600" />
        </div>
        <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const Mission = () => {
  const values = [
    {
      icon: Heart,
      title: "Empatia",
      description: "Compreendemos e nos importamos genuinamente com as necessidades de cada pessoa."
    },
    {
      icon: Target,
      title: "Excelência",
      description: "Buscamos constantemente a qualidade superior em todos os nossos serviços."
    },
    {
      icon: Users,
      title: "Cidadania",
      description: "Promovemos o desenvolvimento social e o bem-estar da comunidade."
    },
    {
      icon: Star,
      title: "Valorização Humana",
      description: "Reconhecemos e desenvolvemos o potencial de cada indivíduo."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-blue-50 to-white" id="missao">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Nossa Missão em Movimento
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Valores que nos guiam no compromisso de transformar vidas
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <ValueCard
              key={value.title}
              {...value}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Nosso Compromisso
            </h3>
            <p className="text-gray-600 mb-8">
              Trabalhamos incansavelmente para proporcionar desenvolvimento, 
              saúde e bem-estar aos trabalhadores do transporte, seus familiares 
              e à comunidade. Nossa missão é transformar vidas através da educação, 
              do cuidado e da valorização humana.
            </p>
            <img 
              className="rounded-lg shadow-xl mx-auto"
              alt="Equipe SEST SENAT celebrando conquistas"
             src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
  