import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactMethods = [
    {
      icon: "Mail",
      title: "Email",
      description: "support@cloudvault.com",
      action: "Написать письмо"
    },
    {
      icon: "MessageCircle",
      title: "Онлайн-чат",
      description: "Ответим в течение 5 минут",
      action: "Начать чат"
    },
    {
      icon: "Phone",
      title: "Телефон",
      description: "+7 (495) 123-45-67",
      action: "Позвонить"
    },
    {
      icon: "MapPin",
      title: "Офис",
      description: "Москва, ул. Тверская, 1",
      action: "Посмотреть на карте"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Icon name="Cloud" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold">CloudVault</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate('/dashboard')}>
              <Icon name="LayoutDashboard" size={20} className="mr-2" />
              Дашборд
            </Button>
            <Button variant="ghost" onClick={() => navigate('/security')}>
              <Icon name="Shield" size={20} className="mr-2" />
              Безопасность
            </Button>
            <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center cursor-pointer hover-scale">
              <Icon name="User" size={20} className="text-white" />
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">Свяжитесь с нами</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы здесь, чтобы помочь вам. Выберите удобный способ связи
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="glass-effect p-6 hover-scale cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                  <Icon name={method.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{method.description}</p>
                <Button variant="link" className="p-0 h-auto text-primary">
                  {method.action}
                  <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="glass-effect p-8 animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Отправить сообщение</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Тема</Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="О чём вы хотите рассказать?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите подробнее..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-background/50 min-h-[150px]"
                  />
                </div>

                <Button type="submit" className="w-full gradient-primary hover-scale">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="glass-effect p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-2xl font-bold mb-4">Часто задаваемые вопросы</h2>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Как восстановить пароль?</h4>
                    <p className="text-sm text-muted-foreground">
                      Нажмите "Забыли пароль?" на странице входа и следуйте инструкциям.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Сколько стоит хранилище?</h4>
                    <p className="text-sm text-muted-foreground">
                      Первые 10 GB бесплатно. Дополнительное место от 99₽/месяц.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Безопасны ли мои данные?</h4>
                    <p className="text-sm text-muted-foreground">
                      Да, мы используем 256-битное шифрование и полный аудит доступа.
                    </p>
                  </div>
                </div>
                <Button variant="link" className="mt-4 p-0">
                  Смотреть все вопросы
                  <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </Card>

              <Card className="glass-effect p-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <h2 className="text-2xl font-bold mb-4">Время работы</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Понедельник - Пятница</span>
                    <span className="font-semibold">9:00 - 21:00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Суббота</span>
                    <span className="font-semibold">10:00 - 18:00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Воскресенье</span>
                    <span className="font-semibold">Выходной</span>
                  </div>
                </div>
                <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="text-sm">
                    <Icon name="Clock" size={16} className="inline mr-2 text-primary" />
                    Техническая поддержка доступна 24/7
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
