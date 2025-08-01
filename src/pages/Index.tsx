import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const salaryData = [
    { position: 'Бармен', salary: '2,500,000 - 3,200,000', candidates: 180 },
    { position: 'Бариста', salary: '2,200,000 - 2,800,000', candidates: 95 },
    { position: 'Официант', salary: '2,000,000 - 2,700,000', candidates: 220 },
    { position: 'Су-шеф', salary: '4,500,000 - 6,000,000', candidates: 45 },
    { position: 'Повар', salary: '3,000,000 - 4,200,000', candidates: 125 },
    { position: 'Кассир', salary: '1,800,000 - 2,300,000', candidates: 87 },
    { position: 'Администратор', salary: '3,500,000 - 4,800,000', candidates: 62 },
    { position: 'Хостес', salary: '2,100,000 - 2,600,000', candidates: 75 }
  ];

  const advantages = [
    {
      icon: 'Users',
      title: 'Проверенные кандидаты',
      description: 'Все соискатели проходят предварительное собеседование и проверку документов'
    },
    {
      icon: 'Clock',
      title: 'Быстрый подбор',
      description: 'Находим подходящих кандидатов в течение 24-48 часов'
    },
    {
      icon: 'Award',
      title: 'Опыт в ресторанах',
      description: 'Специализируемся исключительно на персонале для ресторанного бизнеса'
    },
    {
      icon: 'Shield',
      title: 'Гарантия замены',
      description: 'Бесплатная замена сотрудника в течение 3 месяцев при увольнении'
    }
  ];

  const pricingPlans = [
    {
      name: 'Базовый',
      price: '500,000',
      period: 'за кандидата',
      features: [
        'Подбор рядового персонала',
        'Базовая проверка',
        '1 замена в течение месяца',
        'Поддержка в чате'
      ],
      popular: false
    },
    {
      name: 'Премиум',
      price: '800,000',
      period: 'за кандидата',
      features: [
        'Подбор любого персонала',
        'Углубленная проверка',
        '3 замены в течение 3 месяцев',
        'Приоритетная поддержка',
        'Тестовое задание для кандидата'
      ],
      popular: true
    },
    {
      name: 'Корпоративный',
      price: 'От 15,000,000',
      period: 'в месяц',
      features: [
        'Безлимитный подбор',
        'Персональный менеджер',
        'Безлимитные замены',
        'Консультации по HR',
        'Обучение персонала'
      ],
      popular: false
    }
  ];

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
                <p className="text-sm text-muted-foreground">Персонал для ресторанов</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#advantages" className="text-sm hover:text-primary transition-colors">Преимущества</a>
              <a href="#candidates" className="text-sm hover:text-primary transition-colors">Кандидаты</a>
              <a href="#pricing" className="text-sm hover:text-primary transition-colors">Тарифы</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button>Оставить заявку</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
              <Icon name="MapPin" size={16} className="mr-2" />
              Ташкент • Август 2025
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Найдем персонал для вашего ресторана за{' '}
              <span className="text-accent">24 часа</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Профессиональный подбор проверенных кандидатов для ресторанного бизнеса. 
              Гарантируем качество и быструю замену при необходимости.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1,027</div>
                <div className="text-muted-foreground">Активных кандидатов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24</div>
                <div className="text-muted-foreground">Часа на подбор</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Успешных трудоустройств</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Icon name="Phone" size={20} className="mr-2" />
                Найти персонал
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Icon name="Play" size={20} className="mr-2" />
                Как это работает
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section id="advantages" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы специализируемся на ресторанном бизнесе и знаем все его особенности
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={advantage.icon} size={32} className="text-accent" />
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {advantage.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Candidates & Salary Data */}
      <section id="candidates" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши кандидаты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Актуальная статистика по зарплатам и количеству доступных специалистов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {salaryData.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{item.position}</CardTitle>
                    <Badge variant="secondary">{item.candidates}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Зарплата (сум/мес)</p>
                      <p className="font-semibold text-primary">{item.salary}</p>
                    </div>
                    <div className="pt-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Доступность</span>
                        <span className="text-green-600">{Math.round((item.candidates / 1027) * 100)}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className="bg-accent h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(item.candidates / 220) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Данные обновляются еженедельно • Последнее обновление: 1 августа 2025
            </p>
            <Button variant="outline" size="lg">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать полную статистику
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Тарифные планы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите подходящий план для вашего ресторана
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.popular ? 'border-accent shadow-lg scale-105' : ''} hover:shadow-lg transition-all`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-accent text-accent-foreground">Популярный</Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Icon name="Check" size={16} className="text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full mt-8 ${plan.popular ? 'bg-accent hover:bg-accent/90' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Оставьте заявку</h2>
              <p className="text-xl text-muted-foreground">
                Расскажите о ваших потребностях, и мы найдем идеальных кандидатов
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Форма заявки</CardTitle>
                  <CardDescription>
                    Заполните форму, и мы свяжемся с вами в течение часа
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Название ресторана</label>
                      <Input placeholder="Введите название" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Контактное лицо</label>
                      <Input placeholder="Ваше имя" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Телефон</label>
                      <Input placeholder="+998 90 123 45 67" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Количество сотрудников</label>
                      <Input placeholder="Например: 3" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Требуемые позиции</label>
                    <Textarea placeholder="Опишите, какой персонал вам нужен и основные требования" />
                  </div>

                  <Button className="w-full" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Phone" size={24} className="mr-3 text-accent" />
                      Телефон
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-semibold">+998 78 150 50 50</p>
                    <p className="text-muted-foreground">Звонки принимаем с 9:00 до 21:00</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="MapPin" size={24} className="mr-3 text-accent" />
                      Адрес
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold">г. Ташкент</p>
                    <p className="text-muted-foreground">ул. Амира Темура, 15</p>
                    <p className="text-muted-foreground">БЦ "Central Tower", 12 этаж</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Clock" size={24} className="mr-3 text-accent" />
                      Время работы
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Пн - Пт:</span>
                        <span className="font-semibold">9:00 - 21:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Сб - Вс:</span>
                        <span className="font-semibold">10:00 - 18:00</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="ChefHat" size={20} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-primary">RESTO_JOB</h3>
                <p className="text-sm text-muted-foreground">© 2025 Все права защищены</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="MessageCircle" size={24} />
              </a>
              <a href="tel:+998781505050" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Phone" size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;