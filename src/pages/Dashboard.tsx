import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useAuthStore } from '@/store/authStore';
import SalaryChart from '@/components/charts/SalaryChart';

interface Application {
  id: string;
  position: string;
  companyName: string;
  salary: string;
  status: 'pending' | 'approved' | 'rejected';
  date: string;
  candidates: number;
}

const Dashboard = () => {
  const { user, logout } = useAuthStore();
  const [activeTab, setActiveTab] = useState<'overview' | 'applications' | 'analytics' | 'new-request'>('overview');

  const [applications] = useState<Application[]>([
    {
      id: '1',
      position: 'Бармен',
      companyName: 'Ресторан "Узбекистан"',
      salary: '2,500,000 - 3,200,000',
      status: 'approved',
      date: '2025-07-25',
      candidates: 12
    },
    {
      id: '2', 
      position: 'Официант',
      companyName: 'Ресторан "Узбекистан"',
      salary: '2,000,000 - 2,700,000',
      status: 'pending',
      date: '2025-07-30',
      candidates: 8
    },
    {
      id: '3',
      position: 'Повар',
      companyName: 'Кафе "Звезда"',
      salary: '3,000,000 - 4,200,000',
      status: 'rejected',
      date: '2025-07-28',
      candidates: 0
    }
  ]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-green-500">Одобрено</Badge>;
      case 'pending':
        return <Badge variant="secondary">На рассмотрении</Badge>;
      case 'rejected':
        return <Badge variant="destructive">Отклонено</Badge>;
      default:
        return <Badge variant="outline">Неизвестно</Badge>;
    }
  };

  const stats = {
    totalApplications: applications.length,
    approvedApplications: applications.filter(app => app.status === 'approved').length,
    pendingApplications: applications.filter(app => app.status === 'pending').length,
    totalCandidates: applications.reduce((sum, app) => sum + app.candidates, 0)
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="ChefHat" size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">RESTO_JOB</h1>
                <p className="text-sm text-muted-foreground">Личный кабинет</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="font-semibold">{user?.name}</p>
                <p className="text-sm text-muted-foreground">{user?.companyName}</p>
              </div>
              <Button variant="outline" onClick={logout}>
                <Icon name="LogOut" size={20} className="mr-2" />
                Выйти
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Навигация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant={activeTab === 'overview' ? 'default' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => setActiveTab('overview')}
                >
                  <Icon name="LayoutDashboard" size={20} className="mr-2" />
                  Обзор
                </Button>
                <Button
                  variant={activeTab === 'applications' ? 'default' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => setActiveTab('applications')}
                >
                  <Icon name="FileText" size={20} className="mr-2" />
                  Заявки
                </Button>
                <Button
                  variant={activeTab === 'analytics' ? 'default' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => setActiveTab('analytics')}
                >
                  <Icon name="BarChart3" size={20} className="mr-2" />
                  Аналитика
                </Button>
                <Button
                  variant={activeTab === 'new-request' ? 'default' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => setActiveTab('new-request')}
                >
                  <Icon name="Plus" size={20} className="mr-2" />
                  Новая заявка
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Добро пожаловать, {user?.name}!</h2>
                  <p className="text-muted-foreground">
                    Управляйте заявками на персонал и отслеживайте статистику
                  </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center">
                        <Icon name="FileText" size={24} className="text-blue-600" />
                        <div className="ml-4">
                          <p className="text-2xl font-bold">{stats.totalApplications}</p>
                          <p className="text-sm text-muted-foreground">Всего заявок</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center">
                        <Icon name="CheckCircle" size={24} className="text-green-600" />
                        <div className="ml-4">
                          <p className="text-2xl font-bold">{stats.approvedApplications}</p>
                          <p className="text-sm text-muted-foreground">Одобрено</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center">
                        <Icon name="Clock" size={24} className="text-orange-600" />
                        <div className="ml-4">
                          <p className="text-2xl font-bold">{stats.pendingApplications}</p>
                          <p className="text-sm text-muted-foreground">В обработке</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center">
                        <Icon name="Users" size={24} className="text-purple-600" />
                        <div className="ml-4">
                          <p className="text-2xl font-bold">{stats.totalCandidates}</p>
                          <p className="text-sm text-muted-foreground">Кандидатов</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Applications */}
                <Card>
                  <CardHeader>
                    <CardTitle>Последние заявки</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {applications.slice(0, 3).map((app) => (
                        <div key={app.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                          <div>
                            <h4 className="font-semibold">{app.position}</h4>
                            <p className="text-sm text-muted-foreground">{app.salary}</p>
                            <p className="text-xs text-muted-foreground">{app.date}</p>
                          </div>
                          <div className="text-right">
                            {getStatusBadge(app.status)}
                            <p className="text-sm text-muted-foreground mt-1">
                              {app.candidates} кандидатов
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Applications Tab */}
            {activeTab === 'applications' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Все заявки</h2>
                  <p className="text-muted-foreground">
                    Полный список ваших заявок на подбор персонала
                  </p>
                </div>

                <Card>
                  <CardContent className="p-0">
                    <div className="space-y-0">
                      {applications.map((app, index) => (
                        <div 
                          key={app.id} 
                          className={`p-6 ${index !== applications.length - 1 ? 'border-b border-border' : ''}`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="space-y-2">
                              <h4 className="text-lg font-semibold">{app.position}</h4>
                              <p className="text-muted-foreground">{app.companyName}</p>
                              <p className="text-sm">Зарплата: {app.salary}</p>
                              <p className="text-xs text-muted-foreground">Дата подачи: {app.date}</p>
                            </div>
                            <div className="text-right space-y-2">
                              {getStatusBadge(app.status)}
                              <p className="text-sm">
                                <Icon name="Users" size={16} className="inline mr-1" />
                                {app.candidates} кандидатов
                              </p>
                              <div className="space-x-2">
                                <Button size="sm" variant="outline">
                                  <Icon name="Eye" size={16} className="mr-1" />
                                  Просмотр
                                </Button>
                                {app.status === 'approved' && (
                                  <Button size="sm">
                                    <Icon name="Download" size={16} className="mr-1" />
                                    Скачать
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Аналитика рынка</h2>
                  <p className="text-muted-foreground">
                    Интерактивные данные о зарплатах и доступности кандидатов
                  </p>
                </div>

                <SalaryChart />
              </div>
            )}

            {/* New Request Tab */}
            {activeTab === 'new-request' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Новая заявка</h2>
                  <p className="text-muted-foreground">
                    Заполните форму для подбора персонала
                  </p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Детали заявки</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Позиция</label>
                        <Input placeholder="Например: Бармен" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Количество</label>
                        <Input placeholder="Например: 2" type="number" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Зарплата от (сум)</label>
                        <Input placeholder="2,500,000" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Зарплата до (сум)</label>
                        <Input placeholder="3,200,000" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Требования</label>
                      <Textarea 
                        placeholder="Опишите требования к кандидату: опыт работы, навыки, график..."
                        rows={4}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Дополнительная информация</label>
                      <Textarea 
                        placeholder="Условия работы, льготы, особенности..."
                        rows={3}
                      />
                    </div>

                    <Button className="w-full" size="lg">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;