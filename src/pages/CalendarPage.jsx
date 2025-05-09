
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, AlertTriangle, CheckCircle } from 'lucide-react';

const CalendarPage = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const events = [
    {
      id: 1,
      title: "Vencimento do Contrato #2023-001",
      date: "2023-12-15",
      type: "expiry",
      description: "Contrato de fornecimento de materiais"
    },
    {
      id: 2,
      title: "Renovação do Contrato #2023-002",
      date: "2023-11-30",
      type: "renewal",
      description: "Contrato de serviços de manutenção"
    },
    {
      id: 3,
      title: "Revisão Anual do Contrato #2023-003",
      date: "2023-12-01",
      type: "review",
      description: "Contrato de prestação de serviços"
    }
  ];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    // Adicionar dias vazios no início do mês
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 bg-gray-50 rounded-lg" />);
    }

    // Adicionar os dias do mês
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      const dateString = date.toISOString().split('T')[0];
      const dayEvents = events.filter(event => event.date === dateString);

      days.push(
        <div
          key={day}
          className="h-24 bg-white rounded-lg border p-2 hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-start">
            <span className="font-medium">{day}</span>
            {dayEvents.length > 0 && (
              <div className="flex -space-x-1">
                {dayEvents.map((event, index) => (
                  <div
                    key={event.id}
                    className={`w-2 h-2 rounded-full ${
                      event.type === 'expiry' ? 'bg-red-500' :
                      event.type === 'renewal' ? 'bg-yellow-500' :
                      'bg-blue-500'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="mt-1 space-y-1">
            {dayEvents.map(event => (
              <div
                key={event.id}
                className="text-xs truncate"
                title={event.title}
              >
                {event.title}
              </div>
            ))}
          </div>
        </div>
      );
    }

    return days;
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold gradient-text">Calendário de Contratos</h1>
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={prevMonth}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-lg font-medium">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </span>
            <Button variant="outline" onClick={nextMonth}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-4 mb-4">
          {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
            <div key={day} className="text-center font-medium text-gray-500">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-4">
          {renderCalendar()}
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Próximos Eventos</CardTitle>
            <CardDescription>Eventos dos próximos 30 dias</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {events.map(event => (
                <div
                  key={event.id}
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className={`p-2 rounded-full ${
                    event.type === 'expiry' ? 'bg-red-100 text-red-500' :
                    event.type === 'renewal' ? 'bg-yellow-100 text-yellow-500' :
                    'bg-blue-100 text-blue-500'
                  }`}>
                    {event.type === 'expiry' ? <AlertTriangle className="h-5 w-5" /> :
                     event.type === 'renewal' ? <CalendarIcon className="h-5 w-5" /> :
                     <CheckCircle className="h-5 w-5" />}
                  </div>
                  <div>
                    <h3 className="font-medium">{event.title}</h3>
                    <p className="text-sm text-gray-500">{event.description}</p>
                    <p className="text-sm text-gray-400 mt-1">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default CalendarPage;
  