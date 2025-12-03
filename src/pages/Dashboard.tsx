import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  const navigate = useNavigate();
  const [storageUsed] = useState(42);

  const files = [
    { name: "Презентация.pptx", size: "2.4 MB", modified: "2 часа назад", type: "file" },
    { name: "Документы", size: "12 файлов", modified: "Вчера", type: "folder" },
    { name: "Фотографии", size: "342 файла", modified: "3 дня назад", type: "folder" },
    { name: "Отчет_2025.pdf", size: "1.8 MB", modified: "1 неделю назад", type: "file" },
  ];

  const recentActivity = [
    { action: "Загрузил файл", file: "Презентация.pptx", time: "2 часа назад", icon: "Upload", color: "text-green-500" },
    { action: "Поделился файлом", file: "Отчет_2025.pdf", time: "5 часов назад", icon: "Share2", color: "text-blue-500" },
    { action: "Создал папку", file: "Новый проект", time: "1 день назад", icon: "FolderPlus", color: "text-purple-500" },
    { action: "Удалил файл", file: "Старый документ.doc", time: "2 дня назад", icon: "Trash2", color: "text-red-500" },
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
            <Button variant="ghost" onClick={() => navigate('/security')}>
              <Icon name="Shield" size={20} className="mr-2" />
              Безопасность
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
        <div className="container mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-2">Личный кабинет</h1>
            <p className="text-muted-foreground">Управляйте своими файлами и данными</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <Card className="glass-effect p-6 lg:col-span-2 animate-slide-up">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Хранилище</h3>
                <Badge variant="outline" className="gradient-primary text-white border-0">
                  {storageUsed}% использовано
                </Badge>
              </div>
              <Progress value={storageUsed} className="mb-4" />
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>4.2 GB из 10 GB</span>
                <Button variant="link" className="text-primary">
                  Увеличить хранилище
                </Button>
              </div>
            </Card>

            <Card className="glass-effect p-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Быстрые действия</h3>
              </div>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Upload" size={20} className="mr-2" />
                  Загрузить файл
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="FolderPlus" size={20} className="mr-2" />
                  Создать папку
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Share2" size={20} className="mr-2" />
                  Поделиться
                </Button>
              </div>
            </Card>
          </div>

          <Tabs defaultValue="files" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="files">
                <Icon name="Files" size={18} className="mr-2" />
                Мои файлы
              </TabsTrigger>
              <TabsTrigger value="recent">
                <Icon name="Clock" size={18} className="mr-2" />
                Недавние
              </TabsTrigger>
              <TabsTrigger value="shared">
                <Icon name="Users" size={18} className="mr-2" />
                Общие
              </TabsTrigger>
            </TabsList>

            <TabsContent value="files">
              <Card className="glass-effect p-6">
                <div className="space-y-4">
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg hover:bg-primary/5 cursor-pointer transition-colors animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-lg ${file.type === 'folder' ? 'gradient-accent' : 'gradient-primary'} flex items-center justify-center`}>
                          <Icon name={file.type === 'folder' ? 'Folder' : 'FileText'} size={24} className="text-white" />
                        </div>
                        <div>
                          <p className="font-semibold">{file.name}</p>
                          <p className="text-sm text-muted-foreground">{file.size} • {file.modified}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Icon name="MoreVertical" size={20} />
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="recent">
              <Card className="glass-effect p-6">
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 cursor-pointer transition-colors animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={`w-10 h-10 rounded-lg bg-background flex items-center justify-center ${activity.color}`}>
                        <Icon name={activity.icon} size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{activity.action}</p>
                        <p className="text-sm text-muted-foreground">{activity.file}</p>
                        <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="shared">
              <Card className="glass-effect p-6">
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                    <Icon name="Users" size={32} className="text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Нет общих файлов</h3>
                  <p className="text-muted-foreground mb-4">Поделитесь файлами с коллегами</p>
                  <Button className="gradient-primary">
                    <Icon name="Share2" size={18} className="mr-2" />
                    Поделиться файлом
                  </Button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
