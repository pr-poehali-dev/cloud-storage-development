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

  const donatePackages = [
    {
      id: 1,
      name: "STARTER",
      price: "299₽",
      duration: "30 дней",
      icon: "Package",
      popular: false,
      features: [
        "Приоритет в очереди",
        "Уникальный значок",
        "+50% к луту",
        "Стартовый набор оружия"
      ]
    },
    {
      id: 2,
      name: "SURVIVOR",
      price: "599₽",
      duration: "30 дней",
      icon: "Shield",
      popular: true,
      features: [
        "Всё из STARTER",
        "Персональный транспорт",
        "Защита базы от рейдов",
        "+100% к луту",
        "Доступ к VIP-зонам"
      ]
    },
    {
      id: 3,
      name: "LEGEND",
      price: "1299₽",
      duration: "30 дней",
      icon: "Crown",
      popular: false,
      features: [
        "Всё из SURVIVOR",
        "Вертолёт в личное пользование",
        "Неограниченный инвентарь",
        "Бессмертие базы 24ч",
        "+200% к луту",
        "Цветное имя в чате"
      ]
    }
  ];

  const serverLocations = [
    { name: "Москва #1", region: "RU-MSK", players: 58, maxPlayers: 60, coords: { x: 45, y: 30 } },
    { name: "Санкт-Петербург #1", region: "RU-SPB", players: 42, maxPlayers: 50, coords: { x: 42, y: 25 } },
    { name: "Казань #1", region: "RU-KZN", players: 35, maxPlayers: 50, coords: { x: 52, y: 32 } },
    { name: "Екатеринбург #1", region: "RU-EKB", players: 28, maxPlayers: 50, coords: { x: 68, y: 35 } },
    { name: "Новосибирск #1", region: "RU-NSK", players: 47, maxPlayers: 60, coords: { x: 78, y: 38 } },
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
          <TabsList className="mb-8 w-full max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="servers">
              <Icon name="Server" size={18} className="mr-2" />
              Серверы
            </TabsTrigger>
            <TabsTrigger value="maps">
              <Icon name="Map" size={18} className="mr-2" />
              Карты
            </TabsTrigger>
            <TabsTrigger value="donate">
              <Icon name="ShoppingCart" size={18} className="mr-2" />
              Донат
            </TabsTrigger>
            <TabsTrigger value="monitor">
              <Icon name="Activity" size={18} className="mr-2" />
              Мониторинг
            </TabsTrigger>
            <TabsTrigger value="rules">
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

          <TabsContent value="donate">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-3">Магазин донатов</h2>
                <p className="text-muted-foreground">Поддержи проект и получи эксклюзивные преимущества</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {donatePackages.map((pkg, index) => (
                  <Card
                    key={pkg.id}
                    className={`glass-effect p-8 hover-scale animate-fade-in relative ${
                      pkg.popular ? 'border-2 border-primary' : ''
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <Badge className="gradient-primary px-6 py-1">ПОПУЛЯРНЫЙ</Badge>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-xl gradient-primary flex items-center justify-center">
                        <Icon name={pkg.icon} size={32} />
                      </div>
                      <h3 className="text-3xl font-bold mb-2">{pkg.name}</h3>
                      <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                        {pkg.price}
                      </div>
                      <p className="text-sm text-muted-foreground">{pkg.duration}</p>
                    </div>

                    <div className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Icon name="Check" size={18} className="text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full gradient-primary">
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      Купить
                    </Button>
                  </Card>
                ))}
              </div>

              <Card className="glass-effect p-8 mt-12">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-20 h-20 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <Icon name="Gift" size={40} />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2">Промокоды</h3>
                    <p className="text-muted-foreground mb-4">
                      Есть промокод? Активируй его и получи бонусы!
                    </p>
                    <div className="flex gap-2 max-w-md mx-auto md:mx-0">
                      <input
                        type="text"
                        placeholder="Введи промокод"
                        className="flex-1 px-4 py-2 rounded-lg bg-background/50 border border-border"
                      />
                      <Button className="gradient-primary">Активировать</Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="monitor">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-3">Мониторинг серверов</h2>
                <p className="text-muted-foreground">Отслеживай статистику в реальном времени</p>
              </div>

              <div className="grid lg:grid-cols-3 gap-6 mb-8">
                <Card className="glass-effect p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Activity" size={24} className="text-accent" />
                    <h3 className="text-xl font-bold">Общая нагрузка</h3>
                  </div>
                  <p className="text-4xl font-bold mb-1">67%</p>
                  <p className="text-sm text-muted-foreground">Средняя загрузка серверов</p>
                </Card>

                <Card className="glass-effect p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="TrendingUp" size={24} className="text-primary" />
                    <h3 className="text-xl font-bold">Пик онлайна</h3>
                  </div>
                  <p className="text-4xl font-bold mb-1">312</p>
                  <p className="text-sm text-muted-foreground">Сегодня в 21:00</p>
                </Card>

                <Card className="glass-effect p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Clock" size={24} className="text-secondary" />
                    <h3 className="text-xl font-bold">Среднее время</h3>
                  </div>
                  <p className="text-4xl font-bold mb-1">4.2ч</p>
                  <p className="text-sm text-muted-foreground">Игровой сессии</p>
                </Card>
              </div>

              <Card className="glass-effect p-8">
                <h3 className="text-2xl font-bold mb-6">Карта серверов</h3>
                <div className="relative w-full h-[400px] bg-gradient-to-br from-background to-muted/20 rounded-lg overflow-hidden border border-border">
                  <div className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2000')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  
                  {serverLocations.map((location, index) => (
                    <div
                      key={index}
                      className="absolute group cursor-pointer animate-fade-in"
                      style={{
                        left: `${location.coords.x}%`,
                        top: `${location.coords.y}%`,
                        animationDelay: `${index * 0.15}s`
                      }}
                    >
                      <div className="relative">
                        <div className="w-4 h-4 rounded-full bg-accent animate-pulse shadow-lg shadow-accent/50" />
                        <div className="absolute w-8 h-8 rounded-full bg-accent/20 -top-2 -left-2 animate-ping" />
                      </div>
                      
                      <div className="absolute left-8 top-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                        <Card className="glass-effect p-4 w-48 border-accent/50">
                          <h4 className="font-bold mb-2">{location.name}</h4>
                          <div className="space-y-1 text-xs text-muted-foreground">
                            <p className="flex justify-between">
                              <span>Регион:</span>
                              <span className="text-foreground">{location.region}</span>
                            </p>
                            <p className="flex justify-between">
                              <span>Игроки:</span>
                              <span className="text-accent">{location.players}/{location.maxPlayers}</span>
                            </p>
                            <div className="mt-2 w-full bg-muted rounded-full h-2">
                              <div 
                                className="bg-accent h-2 rounded-full transition-all"
                                style={{ width: `${(location.players / location.maxPlayers) * 100}%` }}
                              />
                            </div>
                          </div>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
                  {serverLocations.map((location, index) => (
                    <Card
                      key={index}
                      className="glass-effect p-4 hover-scale animate-fade-in"
                      style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <h4 className="font-bold text-sm">{location.name}</h4>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{location.region}</p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Онлайн:</span>
                        <span className="font-semibold">{location.players}/{location.maxPlayers}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </Card>
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