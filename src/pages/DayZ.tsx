import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DayZ = () => {
  const serverStats = [
    { icon: "Users", label: "Онлайн игроков", value: "247", color: "text-accent" },
    { icon: "Server", label: "Активных серверов", value: "12", color: "text-primary" },
    { icon: "Map", label: "Доступных карт", value: "5", color: "text-secondary" },
    { icon: "Zap", label: "Аптайм", value: "99.8%", color: "text-accent" },
  ];

  const servers = [
    { 
      name: "SURVIVAL | PVP | x3 LOOT", 
      map: "Chernarus", 
      players: "45/60", 
      ping: "25ms",
      status: "online",
      mods: ["Weapons", "Vehicles", "Base Building"]
    },
    { 
      name: "HARDCORE | VANILLA | x1", 
      map: "Livonia", 
      players: "28/50", 
      ping: "18ms",
      status: "online",
      mods: ["Vanilla"]
    },
    { 
      name: "RP SERVER | x2 LOOT", 
      map: "Deer Isle", 
      players: "52/60", 
      ping: "32ms",
      status: "online",
      mods: ["RP Mods", "Traders", "Custom Items"]
    },
  ];

  const maps = [
    { name: "Chernarus", size: "225 км²", players: "0-60", difficulty: "Средняя" },
    { name: "Livonia", size: "163 км²", players: "0-50", difficulty: "Высокая" },
    { name: "Deer Isle", size: "270 км²", players: "0-60", difficulty: "Средняя" },
    { name: "Namalsk", size: "98 км²", players: "0-40", difficulty: "Экстрим" },
  ];

  const rules = [
    { id: 1, title: "Запрет читов", description: "Использование любого стороннего ПО строго запрещено" },
    { id: 2, title: "Уважение к игрокам", description: "Токсичное поведение и оскорбления недопустимы" },
    { id: 3, title: "Гриферство", description: "Запрещено намеренное разрушение игрового опыта других" },
    { id: 4, title: "Баги и эксплойты", description: "Использование игровых багов для получения преимущества запрещено" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1544891808-8f5b32d4e0a5?q=80&w=2000')",
            filter: "grayscale(50%)"
          }}
        />
        
        <div className="relative z-20 text-center px-4 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Icon name="Skull" size={48} className="text-secondary" />
            <h1 className="text-7xl md:text-9xl font-bold text-shadow-brutal">
              DAYZ
            </h1>
          </div>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Выживай. Сражайся. Властвуй в постапокалиптическом мире
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-xl px-8 py-6 hover-scale">
              <Icon name="Play" size={24} className="mr-2" />
              Начать играть
            </Button>
            <Button size="lg" variant="outline" className="text-xl px-8 py-6 hover-scale border-primary/50">
              <Icon name="MessageCircle" size={24} className="mr-2" />
              Discord
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-2 mt-8 text-sm text-muted-foreground">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>247 игроков онлайн сейчас</span>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-20 relative z-30 mb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serverStats.map((stat, index) => (
            <Card
              key={index}
              className="glass-effect p-6 hover-scale animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg gradient-survival flex items-center justify-center">
                  <Icon name={stat.icon} size={28} className={stat.color} />
                </div>
                <div>
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20">
        <Tabs defaultValue="servers" className="w-full">
          <TabsList className="mb-8 w-full max-w-2xl mx-auto">
            <TabsTrigger value="servers" className="flex-1">
              <Icon name="Server" size={18} className="mr-2" />
              Серверы
            </TabsTrigger>
            <TabsTrigger value="maps" className="flex-1">
              <Icon name="Map" size={18} className="mr-2" />
              Карты
            </TabsTrigger>
            <TabsTrigger value="rules" className="flex-1">
              <Icon name="Shield" size={18} className="mr-2" />
              Правила
            </TabsTrigger>
          </TabsList>

          <TabsContent value="servers">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-3">Наши серверы</h2>
                <p className="text-muted-foreground">Выбери свой стиль игры и присоединяйся</p>
              </div>
              
              {servers.map((server, index) => (
                <Card
                  key={index}
                  className="glass-effect p-6 hover-scale animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="bg-accent/20 text-accent border-accent">
                          {server.status === 'online' ? 'ОНЛАЙН' : 'ОФЛАЙН'}
                        </Badge>
                        <h3 className="text-2xl font-bold">{server.name}</h3>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Icon name="Map" size={16} className="text-primary" />
                          {server.map}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Users" size={16} className="text-primary" />
                          {server.players}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Wifi" size={16} className="text-primary" />
                          {server.ping}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {server.mods.map((mod, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {mod}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="gradient-primary lg:ml-4">
                      <Icon name="Play" size={20} className="mr-2" />
                      Подключиться
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="maps">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-3">Доступные карты</h2>
                <p className="text-muted-foreground">Исследуй разнообразные локации</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {maps.map((map, index) => (
                  <Card
                    key={index}
                    className="glass-effect p-6 hover-scale animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{map.name}</h3>
                        <Badge 
                          variant="outline" 
                          className={
                            map.difficulty === 'Экстрим' 
                              ? 'bg-secondary/20 text-secondary border-secondary'
                              : map.difficulty === 'Высокая'
                              ? 'bg-primary/20 text-primary border-primary'
                              : 'bg-accent/20 text-accent border-accent'
                          }
                        >
                          {map.difficulty}
                        </Badge>
                      </div>
                      <Icon name="MapPin" size={32} className="text-primary" />
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Размер карты:</span>
                        <span className="font-semibold">{map.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Игроки:</span>
                        <span className="font-semibold">{map.players}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="rules">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-3">Правила сервера</h2>
                <p className="text-muted-foreground">Соблюдай правила для комфортной игры</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {rules.map((rule, index) => (
                  <Card
                    key={rule.id}
                    className="glass-effect p-6 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg gradient-danger flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold">{rule.id}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{rule.title}</h3>
                        <p className="text-muted-foreground text-sm">{rule.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="glass-effect p-8 mt-8">
                <div className="flex items-start gap-4">
                  <Icon name="AlertTriangle" size={32} className="text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Нарушение правил</h3>
                    <p className="text-muted-foreground mb-4">
                      За нарушение правил предусмотрены следующие наказания:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Icon name="ChevronRight" size={16} className="text-primary" />
                        Первое нарушение — предупреждение
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="ChevronRight" size={16} className="text-primary" />
                        Второе нарушение — временный бан (3-7 дней)
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="ChevronRight" size={16} className="text-primary" />
                        Третье нарушение — постоянный бан
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="ChevronRight" size={16} className="text-primary" />
                        Читы и эксплойты — мгновенный постоянный бан
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Contact Section */}
        <div className="mt-20 text-center">
          <Card className="glass-effect p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Присоединяйся к нам</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Стань частью нашего сообщества и начни своё выживание уже сегодня
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gradient-primary text-lg px-8 py-6">
                <Icon name="Download" size={24} className="mr-2" />
                Скачать лаунчер
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/50">
                <Icon name="MessageCircle" size={24} className="mr-2" />
                Discord сервер
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/50">
                <Icon name="BookOpen" size={24} className="mr-2" />
                Гайд для новичков
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DayZ;
