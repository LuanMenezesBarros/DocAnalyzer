
import React from 'react';
import { motion } from 'framer-motion';
import WeeklyStory from '@/components/sections/WeeklyStory';
import Timeline from '@/components/sections/Timeline';
import Testimonials from '@/components/sections/Testimonials';
import BehindTheScenes from '@/components/sections/BehindTheScenes';
import Mission from '@/components/sections/Mission';
import ThankForm from '@/components/sections/ThankForm';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="hero-pattern min-h-[90vh] flex items-center justify-center section-padding"
      >
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6 gradient-text"
            >
              Transformando Vidas através do Cuidado e Dedicação
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-600 mb-8"
            >
              Conheça as histórias inspiradoras dos profissionais que fazem 
              do SEST SENAT uma instituição de excelência no cuidado com as pessoas.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <main>
        <WeeklyStory />
        <Timeline />
        <Testimonials />
        <BehindTheScenes />
        <Mission />
        <ThankForm />
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
  