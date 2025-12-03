import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <Card className="glass-effect max-w-md w-full p-8 relative z-10 animate-fade-in">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
            <Icon name="Cloud" size={32} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-2">С возвращением</h1>
          <p className="text-muted-foreground">Войдите в свой аккаунт CloudVault</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="ivan@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-background/50"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Пароль</Label>
              <button type="button" className="text-sm text-primary hover:underline">
                Забыли пароль?
              </button>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="Введите пароль"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              className="bg-background/50"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer">
              Запомнить меня
            </label>
          </div>

          <Button type="submit" className="w-full gradient-primary hover-scale">
            <Icon name="LogIn" size={20} className="mr-2" />
            Войти
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-muted-foreground">
            Нет аккаунта?{" "}
            <button
              onClick={() => navigate('/register')}
              className="text-primary hover:underline font-semibold"
            >
              Зарегистрироваться
            </button>
          </p>
        </div>

        <div className="mt-6 relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">Или</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <Button variant="outline" className="w-full">
            <Icon name="Chrome" size={20} className="mr-2" />
            Google
          </Button>
          <Button variant="outline" className="w-full">
            <Icon name="Github" size={20} className="mr-2" />
            GitHub
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Login;
