import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: "Shield",
      title: "Максимальная безопасность",
      description: "Шифрование данных на уровне военных стандартов и полный аудит доступа"
    },
    {
      icon: "Zap",
      title: "Мгновенный доступ",
      description: "Загружайте и скачивайте файлы на максимальной скорости в любой точке мира"
    },
    {
      icon: "Users",
      title: "Командная работа",
      description: "Делитесь файлами с коллегами и контролируйте права доступа"
    },
    {
      icon: "Clock",
      title: "История версий",
      description: "Восстанавливайте любые версии файлов за последние 90 дней"
    }
  ];

  const stats = [
    { value: "99.9%", label: "Uptime" },
    { value: "256-bit", label: "Шифрование" },
    { value: "24/7", label: "Поддержка" },
    { value: "100TB", label: "Хранилище" }
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
            <Button variant="ghost" onClick={() => navigate('/login')}>
              Войти
            </Button>
            <Button className="gradient-primary hover-scale" onClick={() => navigate('/register')}>
              Начать бесплатно
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Ваши данные в облаке
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Храните, синхронизируйте и делитесь файлами с максимальной безопасностью и скоростью
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button size="lg" className="gradient-primary hover-scale text-lg px-8 py-6" onClick={() => navigate('/register')}>
                <Icon name="Rocket" size={20} className="mr-2" />
                Попробовать бесплатно
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть демо
              </Button>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-muted-foreground mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="glass-effect p-6 hover-scale cursor-pointer animate-fade-in border-primary/20"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-4">
                  <Icon name={feature.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Готовы начать?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Присоединяйтесь к тысячам пользователей, которые доверяют нам свои данные
            </p>
            <Button size="lg" className="gradient-primary hover-scale text-lg px-12 py-6" onClick={() => navigate('/register')}>
              Создать аккаунт
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                  <Icon name="Cloud" size={18} className="text-white" />
                </div>
                <span className="text-xl font-bold">CloudVault</span>
              </div>
              <p className="text-muted-foreground">Надежное облачное хранилище для ваших данных</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Продукт</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Возможности</li>
                <li>Тарифы</li>
                <li>Безопасность</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Компания</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>О нас</li>
                <li>Блог</li>
                <li>Карьера</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Поддержка</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Документация</li>
                <li>Контакты</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
            © 2025 CloudVault. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
