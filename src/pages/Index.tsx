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
      id: 'geodesy',
      title: 'Геодезия',
      icon: 'MapPin',
      description: 'Высокоточные геодезические измерения с применением современного оборудования. Выполняем разбивочные работы, вынос границ участков, съемку местности.',
      features: ['Разбивочные работы', 'Вынос в натуру', 'Исполнительная съемка']
    },
    {
      id: 'monitoring',
      title: 'Мониторинг фундамента',
      icon: 'Activity',
      description: 'Комплексный мониторинг деформаций зданий и сооружений. Отслеживание осадок фундаментов, контроль крена и прогибов конструкций.',
      features: ['Контроль осадок', 'Измерение деформаций', 'Отчетная документация']
    },
    {
      id: 'scanning',
      title: 'Лазерное сканирование',
      icon: 'Scan',
      description: '3D-сканирование объектов любой сложности. Создание точных цифровых моделей зданий, инженерных сооружений и ландшафта.',
      features: ['3D-модели', 'Облако точек', 'BIM-моделирование']
    },
    {
      id: 'aerial',
      title: 'Аэрофотосъёмка',
      icon: 'Plane',
      description: 'Аэрофотосъемка с использованием БПЛА. Создание ортофотопланов, цифровых моделей рельефа, подсчет объемов земляных работ.',
      features: ['Ортофотопланы', 'ЦМР и ЦММ', 'Подсчет объемов']
    },
    {
      id: 'survey',
      title: 'Топосъёмка',
      icon: 'Map',
      description: 'Инженерно-геодезические изыскания для проектирования и строительства. Топографическая съемка участков масштабов 1:500 — 1:2000.',
      features: ['Топографические планы', 'Подземные коммуникации', 'Изыскания для строительства']
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
            <h1 className="text-2xl font-bold">ГеоТех</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="hover:text-primary transition-colors">О компании</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button variant="default" className="hidden md:block">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
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
              Профессиональные<br />геодезические услуги
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Высокоточные измерения и изыскания для вашего строительства
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Icon name="FileText" size={20} className="mr-2" />
                Заказать услугу
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
                <Icon name="Info" size={20} className="mr-2" />
                Узнать больше
              </Button>
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

          <Tabs defaultValue="geodesy" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-12 h-auto gap-2">
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
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors">
                          <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0" />
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="mt-8" size="lg" onClick={() => setFormData({...formData, service: service.title})}>
                      <Icon name="Mail" size={18} className="mr-2" />
                      Заказать {service.title.toLowerCase()}
                    </Button>
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
              <h2 className="text-4xl font-bold mb-6">О компании ГеоТех</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Мы предоставляем полный спектр геодезических услуг для строительства, проектирования и земельного кадастра. 
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Используем современное высокоточное оборудование ведущих мировых производителей. Наши специалисты имеют многолетний опыт работы и необходимые лицензии.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">качество</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <Icon name="Building2" size={200} className="text-primary/30" />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку, и мы свяжемся с вами в течение рабочего дня
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <a href="tel:+79999999999" className="text-primary hover:underline">+7 (999) 999-99-99</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:info@geotech.ru" className="text-primary hover:underline">info@geotech.ru</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <p className="text-muted-foreground">г. Москва, ул. Геодезическая, д. 1</p>
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
                    <Input
                      placeholder="Интересующая услуга"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Сообщение"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
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
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="MapPin" size={28} className="text-primary" />
                <h3 className="text-xl font-bold">ГеоТех</h3>
              </div>
              <p className="text-white/80">Профессиональные геодезические услуги</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/80">
                <li>Геодезия</li>
                <li>Мониторинг</li>
                <li>Лазерное сканирование</li>
                <li>Аэрофотосъёмка</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/80">
                <li>+7 (999) 999-99-99</li>
                <li>info@geotech.ru</li>
                <li>г. Москва</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <p className="text-white/80">Пн-Пт: 9:00 — 18:00<br />Сб-Вс: выходной</p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 text-center text-white/60">
            <p>© 2024 ГеоТех. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
