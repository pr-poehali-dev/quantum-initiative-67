import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';

const TG = 'https://t.me/krasnoglaziy';

const images = [
  'https://cdn.poehali.dev/projects/d4a16424-8dac-4601-811e-543e13bca61f/files/81f52d66-21a9-4ee3-8468-94a93c9192d9.jpg',
  'https://cdn.poehali.dev/projects/d4a16424-8dac-4601-811e-543e13bca61f/files/3233c176-1795-40ed-aa42-9b070bbdf2e7.jpg',
  'https://cdn.poehali.dev/projects/d4a16424-8dac-4601-811e-543e13bca61f/files/e727e3e8-6589-4def-9f67-f5d7bcb7bf9c.jpg',
  'https://cdn.poehali.dev/projects/d4a16424-8dac-4601-811e-543e13bca61f/files/82ccbd71-4764-4416-8b28-f47d6fe96f88.jpg',
];

const services = [
  { icon: 'Paintbrush', label: 'Покраска фасадов и металлоконструкций' },
  { icon: 'Flame', label: 'Огнезащитная обработка' },
  { icon: 'Wind', label: 'Пескоструйные работы' },
  { icon: 'Wrench', label: 'Монтаж и демонтаж металлоконструкций' },
  { icon: 'Layers', label: 'Герметизация межпанельных швов' },
  { icon: 'AlertTriangle', label: 'Аварийные высотные работы' },
  { icon: 'Zap', label: 'Работы на ЛЭП и опорах' },
  { icon: 'Building2', label: 'Ремонт и обслуживание фасадов' },
  { icon: 'ArrowUpDown', label: 'Высотный монтаж и демонтаж' },
  { icon: 'MapPin', label: 'Работы в труднодоступных местах' },
];

const advantages = [
  'Опытная бригада промальпов',
  'Соблюдение техники безопасности',
  'Оперативный выезд на объект',
  'Фото/видео отчёты',
  'Адекватные сроки и цены',
  'Индивидуальный подход к каждому объекту',
];

const objects = ['Осиновецкий маяк', 'Дом Галицкой'];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <div className="absolute inset-0">
          {images.map((src, index) => (
            <div
              key={src}
              className={cn(
                'absolute inset-0 transition-opacity duration-1000 ease-in-out',
                currentIndex === index ? 'opacity-100' : 'opacity-0'
              )}
            >
              <img src={src} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-8 md:px-16">
            <div className="flex max-w-2xl flex-col gap-8">

              <div
                className={cn(
                  'transform transition-all duration-1000 ease-out',
                  isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                )}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-12 bg-orange-500" />
                  <span className="text-orange-400 text-sm font-medium tracking-widest uppercase">
                    Промышленный альпинизм
                  </span>
                </div>

                <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl leading-tight">
                  Работаем<br />
                  <span className="text-orange-400">на любой высоте</span>
                </h1>

                <p className="mt-5 text-lg text-white/70 max-w-lg leading-relaxed">
                  Команда промышленных альпинистов. Выполняем высотные работы любой сложности на жилых, коммерческих и промышленных объектах — без лесов и тяжёлой техники.
                </p>
              </div>

              <div
                className={cn(
                  'transform transition-all duration-1000 delay-300 ease-out',
                  isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                )}
              >
                <div className="flex gap-4 flex-wrap">
                  <a
                    href={TG}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded transition-colors"
                  >
                    Получить консультацию
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white px-6 py-3 rounded transition-colors"
                  >
                    Наши услуги
                  </a>
                </div>

                <div className="flex gap-4 mt-8">
                  <a href={TG} target="_blank" rel="noopener noreferrer" className="text-white/60 transition-colors hover:text-white" aria-label="Telegram">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </a>
                  <a href="https://vk.com/" target="_blank" rel="noopener noreferrer" className="text-white/60 transition-colors hover:text-white" aria-label="VKontakte">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.745-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.12-5.339-3.202-2.17-3.043-2.763-5.32-2.763-5.788 0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.814-.542 1.27-1.422 2.18-3.625 2.18-3.625.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 z-20 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                'h-1 transition-all duration-300',
                currentIndex === index ? 'w-12 bg-orange-500' : 'w-8 bg-white/30 hover:bg-white/50'
              )}
              aria-label={`Перейти к слайду ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-zinc-950 py-20 px-8 md:px-16">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-orange-500" />
            <span className="text-orange-400 text-sm font-medium tracking-widest uppercase">Что мы делаем</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-12">Наши услуги</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-5 rounded border border-white/10 bg-white/5 hover:border-orange-500/40 transition-all"
              >
                <div className="mt-0.5 flex-shrink-0 text-orange-400">
                  <Icon name={icon} size={20} fallback="CheckCircle" />
                </div>
                <span className="text-white/80 text-sm leading-snug">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 rounded border border-orange-500/20 bg-orange-500/5">
            <p className="text-white/70 text-sm">
              💡 Работаем <strong className="text-white">без лесов и тяжёлой техники</strong> — это сокращает сроки и стоимость работ. Беремся как за небольшие объекты, так и за крупные объёмы.
            </p>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-zinc-900 py-20 px-8 md:px-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-orange-500" />
                <span className="text-orange-400 text-sm font-medium tracking-widest uppercase">Доверие</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-8">Почему выбирают нас</h2>

              <div className="space-y-4">
                {advantages.map((adv) => (
                  <div key={adv} className="flex items-center gap-3">
                    <Icon name="CheckCircle" size={18} className="text-orange-400 flex-shrink-0" />
                    <span className="text-white/80">{adv}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-orange-500" />
                <span className="text-orange-400 text-sm font-medium tracking-widest uppercase">Опыт</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-8">Значимые объекты</h2>

              <div className="space-y-4 mb-10">
                {objects.map((obj) => (
                  <div key={obj} className="flex items-center gap-3 p-4 rounded border border-white/10 bg-white/5">
                    <Icon name="Building" size={18} className="text-orange-400 flex-shrink-0" />
                    <span className="text-white font-medium">{obj}</span>
                  </div>
                ))}
              </div>

              <p className="text-white/60 text-sm leading-relaxed">
                Готовы выехать на осмотр объекта, оценить объём работ и предложить оптимальное решение.
              </p>

              <a
                href={TG}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded transition-colors"
              >
                Заказать выезд на объект
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
