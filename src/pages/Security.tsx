import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Security = () => {
  const navigate = useNavigate();

  const accessLogs = [
    { 
      action: "Успешный вход", 
      device: "Chrome на Windows", 
      location: "Москва, Россия", 
      ip: "192.168.1.100",
      time: "Сегодня в 14:30",
      status: "success"
    },
    { 
      action: "Успешный вход", 
      device: "Safari на iPhone", 
      location: "Москва, Россия", 
      ip: "192.168.1.101",
      time: "Вчера в 22:15",
      status: "success"
    },
    { 
      action: "Неудачная попытка входа", 
      device: "Chrome на Android", 
      location: "Санкт-Петербург, Россия", 
      ip: "45.67.89.123",
      time: "2 дня назад в 03:20",
      status: "failed"
    },
    { 
      action: "Успешный вход", 
      device: "Firefox на Mac", 
      location: "Москва, Россия", 
      ip: "192.168.1.102",
      time: "3 дня назад в 10:45",
      status: "success"
    },
    { 
      action: "Неудачная попытка входа", 
      device: "Chrome на Windows", 
      location: "Казань, Россия", 
      ip: "78.90.12.234",
      time: "1 неделю назад в 18:30",
      status: "failed"
    },
  ];

  const securityAlerts = [
    { 
      type: "warning", 
      title: "Новое устройство", 
      message: "Обнаружен вход с нового устройства из Санкт-Петербурга",
      time: "2 дня назад"
    },
    { 
      type: "info", 
      title: "Смена пароля", 
      message: "Пароль был успешно изменен",
      time: "1 неделю назад"
    },
  ];

  const securitySettings = [
    { id: "2fa", label: "Двухфакторная аутентификация", description: "Добавьте дополнительный уровень защиты", enabled: true },
    { id: "email", label: "Email-уведомления", description: "Получайте уведомления о входах", enabled: true },
    { id: "devices", label: "Запоминать устройства", description: "Не запрашивать код на доверенных устройствах", enabled: false },
    { id: "biometric", label: "Биометрия", description: "Вход по отпечатку пальца или Face ID", enabled: false },
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
            <Button variant="ghost" onClick={() => navigate('/contacts')}>
              <Icon name="Mail" size={20} className="mr-2" />
              Контакты
            </Button>
            <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center cursor-pointer hover-scale">
              <Icon name="User" size={20} className="text-white" />
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                <Icon name="Shield" size={24} className="text-white" />
              </div>
              <h1 className="text-4xl font-bold">Безопасность</h1>
            </div>
            <p className="text-muted-foreground">Защитите свой аккаунт и данные</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <Card className="glass-effect p-6 animate-slide-up">
              <div className="flex items-center gap-3 mb-2">
                <Icon name="CheckCircle" size={24} className="text-green-500" />
                <h3 className="text-2xl font-bold">98%</h3>
              </div>
              <p className="text-muted-foreground">Уровень безопасности</p>
            </Card>

            <Card className="glass-effect p-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-3 mb-2">
                <Icon name="Activity" size={24} className="text-blue-500" />
                <h3 className="text-2xl font-bold">147</h3>
              </div>
              <p className="text-muted-foreground">Попыток входа</p>
            </Card>

            <Card className="glass-effect p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3 mb-2">
                <Icon name="AlertTriangle" size={24} className="text-orange-500" />
                <h3 className="text-2xl font-bold">2</h3>
              </div>
              <p className="text-muted-foreground">Подозрительных активностей</p>
            </Card>
          </div>

          <Tabs defaultValue="logs" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="logs">
                <Icon name="FileText" size={18} className="mr-2" />
                Логи доступа
              </TabsTrigger>
              <TabsTrigger value="alerts">
                <Icon name="Bell" size={18} className="mr-2" />
                Уведомления
              </TabsTrigger>
              <TabsTrigger value="settings">
                <Icon name="Settings" size={18} className="mr-2" />
                Настройки
              </TabsTrigger>
            </TabsList>

            <TabsContent value="logs">
              <Card className="glass-effect p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">История доступа</h3>
                  <Button variant="outline" size="sm">
                    <Icon name="Download" size={16} className="mr-2" />
                    Экспорт
                  </Button>
                </div>
                <div className="space-y-4">
                  {accessLogs.map((log, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg border border-border hover:bg-primary/5 transition-colors animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        log.status === 'success' ? 'bg-green-500/20' : 'bg-red-500/20'
                      }`}>
                        <Icon 
                          name={log.status === 'success' ? 'CheckCircle' : 'XCircle'} 
                          size={20} 
                          className={log.status === 'success' ? 'text-green-500' : 'text-red-500'}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-semibold">{log.action}</p>
                          <Badge variant={log.status === 'success' ? 'default' : 'destructive'}>
                            {log.status === 'success' ? 'Успешно' : 'Отклонено'}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{log.device}</p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Icon name="MapPin" size={14} />
                            {log.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Globe" size={14} />
                            {log.ip}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Clock" size={14} />
                            {log.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="alerts">
              <Card className="glass-effect p-6">
                <h3 className="text-xl font-semibold mb-6">Уведомления безопасности</h3>
                <div className="space-y-4">
                  {securityAlerts.map((alert, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg border border-border animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        alert.type === 'warning' ? 'bg-orange-500/20' : 'bg-blue-500/20'
                      }`}>
                        <Icon 
                          name={alert.type === 'warning' ? 'AlertTriangle' : 'Info'} 
                          size={20} 
                          className={alert.type === 'warning' ? 'text-orange-500' : 'text-blue-500'}
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold mb-1">{alert.title}</p>
                        <p className="text-sm text-muted-foreground mb-2">{alert.message}</p>
                        <p className="text-xs text-muted-foreground">{alert.time}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        Подробнее
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card className="glass-effect p-6">
                <h3 className="text-xl font-semibold mb-6">Настройки безопасности</h3>
                <div className="space-y-6">
                  {securitySettings.map((setting, index) => (
                    <div
                      key={setting.id}
                      className="flex items-center justify-between p-4 rounded-lg border border-border animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex-1">
                        <Label htmlFor={setting.id} className="text-base font-semibold cursor-pointer">
                          {setting.label}
                        </Label>
                        <p className="text-sm text-muted-foreground mt-1">{setting.description}</p>
                      </div>
                      <Switch id={setting.id} defaultChecked={setting.enabled} />
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 rounded-lg border border-destructive/50 bg-destructive/10">
                  <div className="flex items-start gap-3">
                    <Icon name="AlertTriangle" size={20} className="text-destructive mt-1" />
                    <div>
                      <p className="font-semibold text-destructive mb-1">Опасная зона</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Эти действия необратимы. Будьте осторожны.
                      </p>
                      <div className="space-y-2">
                        <Button variant="outline" className="w-full justify-start text-destructive border-destructive/50">
                          <Icon name="Key" size={16} className="mr-2" />
                          Сбросить пароль
                        </Button>
                        <Button variant="outline" className="w-full justify-start text-destructive border-destructive/50">
                          <Icon name="LogOut" size={16} className="mr-2" />
                          Выйти на всех устройствах
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Security;
