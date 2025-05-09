
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Upload, 
  Search, 
  Bell, 
  Settings,
  BarChart2,
  AlertTriangle
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/dashboard', icon: BarChart2, label: 'Dashboard' },
  { href: '/contracts', icon: FileText, label: 'Contratos' },
  { href: '/upload', icon: Upload, label: 'Upload' },
  { href: '/search', icon: Search, label: 'Buscar' },
  { href: '/alerts', icon: AlertTriangle, label: 'Alertas' },
  { href: '/settings', icon: Settings, label: 'Configurações' }
];

const Sidebar = ({ isOpen }) => {
  const location = useLocation();

  const variants = {
    open: { width: '250px', transition: { type: 'spring', stiffness: 300, damping: 30 } },
    closed: { width: '70px', transition: { type: 'spring', stiffness: 300, damping: 30 } },
  };

  return (
    <motion.aside
      variants={variants}
      animate={isOpen ? 'open' : 'closed'}
      className="bg-slate-900/90 backdrop-blur-lg shadow-2xl h-full flex flex-col border-r border-slate-700"
    >
      <div className={cn("p-4 flex items-center", isOpen ? "justify-start" : "justify-center")}>
        <FileText className="h-8 w-8 text-blue-400" />
        {isOpen && <h1 className="ml-3 text-2xl font-bold gradient-text">DocAnalyzer</h1>}
      </div>
      <nav className="flex-1 mt-6 px-2 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className={cn(
              'flex items-center py-2.5 rounded-lg transition-colors duration-200 ease-in-out',
              isOpen ? 'px-4' : 'justify-center px-2',
              location.pathname === item.href
                ? 'bg-gradient-to-r from-blue-600 to-purple-500 text-white shadow-md'
                : 'text-slate-400 hover:bg-slate-700/50 hover:text-slate-100'
            )}
            title={item.label}
          >
            <item.icon className={cn("h-5 w-5", isOpen ? "mr-3" : "mr-0")} />
            {isOpen && <span className="text-sm font-medium">{item.label}</span>}
          </Link>
        ))}
      </nav>
      {isOpen && (
        <div className="p-4 mt-auto border-t border-slate-700">
          <p className="text-xs text-slate-500 text-center">
            &copy; {new Date().getFullYear()} DocAnalyzer Pro
          </p>
        </div>
      )}
    </motion.aside>
  );
};

export default Sidebar;
  