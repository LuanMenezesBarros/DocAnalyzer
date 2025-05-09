
import React, { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { UtensilsCrossed, Eye, EyeOff } from 'lucide-react';

const HomePage = () => {
  const [email, setEmail] = useState('admin@restobar.com');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const context = useOutletContext();
  const setIsAuthenticated = context?.setIsAuthenticated;


  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('restaurantUser', JSON.stringify({ name: 'Admin User', email }));
      if (setIsAuthenticated) {
        setIsAuthenticated(true);
      }
      toast({
        title: 'Login Bem-sucedido!',
        description: 'Bem-vindo de volta!',
      });
      navigate('/dashboard');
    } else {
      toast({
        title: 'Erro de Login',
        description: 'Por favor, insira email e senha.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-md glassmorphism-card shadow-2xl">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full w-fit shadow-lg">
              <UtensilsCrossed className="h-12 w-12 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold gradient-text">RestôBar Pro</CardTitle>
            <CardDescription className="text-slate-300">
              Gerencie seu restaurante com facilidade e eficiência.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-800/70 border-slate-600 text-slate-100 placeholder-slate-400 focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
              <div className="space-y-2 relative">
                <Label htmlFor="password" className="text-slate-300">Senha</Label>
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-slate-800/70 border-slate-600 text-slate-100 placeholder-slate-400 focus:ring-purple-500 focus:border-purple-500"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-8 h-7 w-7 text-slate-400 hover:text-slate-200"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold py-3 text-base transition-all duration-300 ease-in-out transform hover:scale-105">
                Entrar no Sistema
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-center space-y-2">
            <p className="text-xs text-slate-400">
              Não tem uma conta? <a href="#" className="font-medium text-purple-400 hover:underline">Contate o suporte</a>
            </p>
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} RestôBar Pro. Todos os direitos reservados.
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default HomePage;
  