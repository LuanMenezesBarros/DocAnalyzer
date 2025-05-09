
import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('restaurantUser');
    if (user) {
      setIsAuthenticated(true);
      if (location.pathname === '/' || location.pathname === '/login') {
        navigate('/dashboard');
      }
    } else {
      setIsAuthenticated(false);
      if (location.pathname !== '/' && location.pathname !== '/login') {
        toast({
          title: "Acesso Negado",
          description: "Por favor, faça login para continuar.",
          variant: "destructive",
        });
        navigate('/');
      }
    }
  }, [location.pathname, navigate, toast]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('restaurantUser');
    setIsAuthenticated(false);
    toast({
      title: "Logout Realizado",
      description: "Você foi desconectado com sucesso.",
    });
    navigate('/');
  };
  
  if (!isAuthenticated && (location.pathname !== '/' && location.pathname !== '/login')) {
    return null; 
  }
  
  if (!isAuthenticated && (location.pathname === '/' || location.pathname === '/login')) {
     return (
        <>
          <Outlet context={{ setIsAuthenticated }} />
          <Toaster />
        </>
     );
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-50">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} sidebarOpen={isSidebarOpen} onLogout={handleLogout} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-800/50 p-6 backdrop-blur-sm">
          <Outlet context={{ setIsAuthenticated }} />
        </main>
      </div>
      <Toaster />
    </div>
  );
};

export default Layout;
  