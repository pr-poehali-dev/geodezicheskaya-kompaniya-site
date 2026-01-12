import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const services = [
    {
      id: 'research',
      title: 'Изыскания',
      icon: 'Search',
      description: 'Комплексные инженерные изыскания для строительства и проектных работ. Полный цикл исследований территории для безопасного проектирования.',
      features: ['Инженерно-геодезические изыскания', 'Инженерно-геологические изыскания', 'Инженерно-экологические изыскания', 'Инженерно-гидрологические изыскания']
    },
    {
      id: 'aerial',
      title: 'Аэрофотосъёмка',
      icon: 'Plane',
      description: 'Аэрофотосъемка с использованием БПЛА. Создание точных цифровых моделей местности для проектирования и строительства.',
      features: ['Цифровая модель местности', 'Ортофотоплан', 'Составление облака точек']
    },
    {
      id: 'geodesy',
      title: 'Геодезия',
      icon: 'MapPin',
      description: 'Высокоточные геодезические работы на всех этапах строительства. Профессиональное сопровождение от проекта до сдачи объекта.',
      features: ['Геодезическое сопровождение строительства', 'Разбивка (Вынос в натуру)', 'Геодезическая съёмка', 'Подсчёт объёмов']
    },
    {
      id: 'cadastre',
      title: 'Кадастр',
      icon: 'FileText',
      description: 'Кадастровые работы для оформления и регистрации земельных участков. Профессиональная подготовка документации в соответствии с требованиями законодательства.',
      features: ['Межевание земельных участков', 'Вынос границ в натуру', 'Кадастровые паспорта']
    },
    {
      id: 'scanning',
      title: 'Сканирование',
      icon: 'Scan',
      description: '3D-лазерное сканирование объектов любой сложности. Создание точных цифровых моделей зданий, сооружений и территорий.',
      features: ['3D-модели объектов', 'Облако точек высокой точности', 'Обмерные работы']
    },
    {
      id: 'tracing',
      title: 'Трассопоиск',
      icon: 'Cable',
      description: 'Обнаружение и трассировка подземных коммуникаций. Определение глубины залегания и точного местоположения инженерных сетей.',
      features: ['Поиск кабельных линий', 'Обнаружение трубопроводов', 'Локация повреждений']
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <header className="bg-secondary text-white py-4 px-6 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="MapPin" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold">ГЕОИД</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="hover:text-primary transition-colors">О компании</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <a href="tel:+79870200702">
            <Button variant="default" className="hidden md:block">
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить
            </Button>
          </a>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-secondary via-secondary/95 to-primary text-white py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Инженерные изыскания<br />для строительства
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Профессиональные геодезические услуги и проектные работы в Республике Башкортостан
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Заказать услугу
                </Button>
              </a>
              <a href="#services">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
                  <Icon name="Info" size={20} className="mr-2" />
                  Наши услуги
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр геодезических работ для строительства и проектирования
            </p>
          </div>

          <Tabs defaultValue="research" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 mb-12 h-auto gap-2">
              {services.map((service) => (
                <TabsTrigger 
                  key={service.id} 
                  value={service.id}
                  className="flex flex-col items-center gap-2 py-4 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  <Icon name={service.icon as any} size={24} />
                  <span className="text-sm font-medium">{service.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id} className="animate-scale-in">
                <Card className="border-2">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Icon name={service.icon as any} size={32} className="text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-3xl mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-lg">{service.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors">
                          <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0" />
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <a href="#contact">
                      <Button className="mt-8" size="lg" onClick={() => setFormData({...formData, service: service.title})}>
                        <Icon name="Mail" size={18} className="mr-2" />
                        Заказать {service.title.toLowerCase()}
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">О компании ГЕОИД</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Компания ГЕОИД специализируется на инженерных изысканиях для строительства и проектных работ. Мы предоставляем полный спектр геодезических услуг в Республике Башкортостан.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Наша команда использует современное высокоточное оборудование и новейшие технологии для обеспечения максимальной точности результатов.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+79870200702">
                  <Button size="lg">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Связаться с нами
                  </Button>
                </a>
              </div>
            </div>
            <div className="animate-fade-in">
              <img 
                src="https://static.tildacdn.com/tild3263-3763-4330-a233-376365333562/photo.gif" 
                alt="Команда ГЕОИД за работой" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-16">Почему выбирают ГЕОИД</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center animate-fade-in hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <Icon name="Award" size={48} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Высокая точность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Современное оборудование и опытные специалисты гарантируют высочайшую точность измерений
                </p>
              </CardContent>
            </Card>
            <Card className="text-center animate-fade-in hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <Icon name="Clock" size={48} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Быстрые сроки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Оперативное выполнение работ без потери качества. Соблюдаем все согласованные сроки
                </p>
              </CardContent>
            </Card>
            <Card className="text-center animate-fade-in hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <Icon name="Shield" size={48} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Полная ответственность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Все работы выполняются в соответствии с требованиями законодательства и стандартами качества
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами удобным способом</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Наши контакты</CardTitle>
                <CardDescription>Мы всегда на связи</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <a href="tel:+79870200702" className="text-primary hover:underline text-lg">+7 (987) 020-07-02</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:geo102@bk.ru" className="text-primary hover:underline text-lg">geo102@bk.ru</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <p className="text-muted-foreground">г. Уфа, Республика Башкортостан</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Режим работы</div>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 — 18:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Форма заказа услуг</CardTitle>
                <CardDescription>Заполните форму, и мы перезвоним вам</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Опишите вашу задачу"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="MapPin" size={32} className="text-primary" />
                <h3 className="text-2xl font-bold">ГЕОИД</h3>
              </div>
              <p className="text-white/70">
                Инженерные изыскания для строительства и проектных работ
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#services" className="hover:text-primary transition-colors">Изыскания</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Аэрофотосъёмка</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Геодезия</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Кадастр</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="tel:+79870200702" className="hover:text-primary transition-colors">+7 (987) 020-07-02</a></li>
                <li><a href="mailto:geo102@bk.ru" className="hover:text-primary transition-colors">geo102@bk.ru</a></li>
                <li>г. Уфа, Республика Башкортостан</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
            <p>&copy; {new Date().getFullYear()} ГЕОИД. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
