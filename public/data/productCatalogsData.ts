import { IProductCatalogData } from "@/types/product";
import woman from '@/public/icons/CategoryIcons/female.svg'
import man from '@/public/icons/CategoryIcons/man-in-suit-and-tie.png'
import shoe from '@/public/icons/CategoryIcons/sport-shoe.png'
import kid from '@/public/icons/CategoryIcons/girl.png'
import home from '@/public/icons/CategoryIcons/home.png'
import beauty from '@/public/icons/CategoryIcons/make-up.png'
import accessory from '@/public/icons/CategoryIcons/accessory.png'
import smartphone from '@/public/icons/CategoryIcons/smartphone.png'
import electronic from '@/public/icons/CategoryIcons/circuit-board.png'
import toys from '@/public/icons/CategoryIcons/toys.png'
import armchair from '@/public/icons/CategoryIcons/armchair.png'
import adult from '@/public/icons/CategoryIcons/-18.png'
import pita from '@/public/icons/CategoryIcons/pita-bread.png'
import microwave from '@/public/icons/CategoryIcons/microwave.png'
import animal from '@/public/icons/CategoryIcons/animal-track.png'
import sport from '@/public/icons/CategoryIcons/sports.png'
import ring from '@/public/icons/CategoryIcons/ring.png'
import tools from '@/public/icons/CategoryIcons/tools.png'
import garden from '@/public/icons/CategoryIcons/gardening.png'
import health from '@/public/icons/CategoryIcons/healthcare.png'
import products from '@/public/icons/CategoryIcons/products.png'
import books from '@/public/icons/CategoryIcons/books-stack-of-three.png'
import car from '@/public/icons/CategoryIcons/electric-car.png'
import sale from '@/public/icons/CategoryIcons/discount.png'


export const productCatalogs: IProductCatalogData[] = [
    {
        id: '0',
        title: 'Женщинам',
        icon: woman,
        url: '',
        dropdown: [
            {
                id: '01',
                title: 'Блузки и рубашки',
                url: '',
            }, {
                id: '02',
                title: 'Брюки',
                url: '',
            }, {
                id: '03',
                title: 'Верхняя одежда',
                url: '',
            }, {
                id: '04',
                title: 'Джемперы, водолазки и кардиганы',
                url: '',
            }, {
                id: '05',
                title: 'Джинсы',
                url: '',
            }, {
                id: '06',
                title: 'Комбинезоны',
                url: '',
            }, {
                id: '07',
                title: 'Костюмы',
                url: '',
            }, {
                id: '08',
                title: 'Лонгсливы',
                url: '',
            }, {
                id: '09',
                title: 'Пиджаки, жилеты и жакеты',
                url: '',
            }, {
                id: '010',
                title: 'Платья и сарафаны',
                url: '',
            }, {
                id: '011',
                title: 'Толстовки, свитшоты и худи',
                url: '',
            }, {
                id: '012',
                title: 'Туники',
                url: '',
            }, {
                id: '013',
                title: 'Футболки и топы',
                url: '',
            }, {
                id: '014',
                title: 'Халаты',
                url: '',
            }, {
                id: '015',
                title: 'Шорты',
                url: '',
            }, {
                id: '016',
                title: 'Юбки',
                url: '',
            }, {
                id: '017',
                title: 'Белье',
                url: '',
            }, {
                id: '018',
                title: 'Большие размеры',
                url: '',
            }, {
                id: '019',
                title: 'Будущие мамы',
                url: '',
            }, {
                id: '020',
                title: 'Для высоких',
                url: '',
            }, {
                id: '021',
                title: 'Для невысоких',
                url: '',
            }, {
                id: '022',
                title: 'Одежда для дома',
                url: '',
            }, {
                id: '023',
                title: 'Офис',
                url: '',
            }, {
                id: '024',
                title: 'Пляжная мода',
                url: '',
            }, {
                id: '025',
                title: 'Религиозная',
                url: '',
            }, {
                id: '026',
                title: 'Свадьба',
                url: '',
            }, {
                id: '027',
                title: 'Спецодежда и СИЗы',
                url: '',
            }, {
                id: '028',
                title: 'Подарки женщинам',
                url: '',
            }
        ]
    },
    {
        id: '1',
        title: 'Обувь',
        icon: shoe,
        url: '',
        dropdown: [
            {
                id: '11',
                title: 'Детская',
                url: '',
            }, {
                id: '12',
                title: 'Для новорожденных',
                url: '',
            }, {
                id: '13',
                title: 'Женская',
                url: '',
            }, {
                id: '14',
                title: 'Мужская',
                url: '',
            }, {
                id: '15',
                title: 'Ортопедическая обувь',
                url: '',
            }, {
                id: '16',
                title: 'Аксессуары для обуви',
                url: '',
            }
        ]
    },
    {
        id: '2',
        title: 'Детям',
        icon: kid,
        url: '',
        dropdown: [
            {
                id: '21',
                title: 'Для девочек',
                url: '',
            }, {
                id: '22',
                title: 'Для мальчиков',
                url: '',
            }, {
                id: '23',
                title: 'Для новорожденных',
                url: '',
            }, {
                id: '24',
                title: 'Детская электроника',
                url: '',
            }, {
                id: '25',
                title: 'Конструкторы',
                url: '',
            }, {
                id: '26',
                title: 'Детский транспорт',
                url: '',
            }, {
                id: '27',
                title: 'Детское питание',
                url: '',
            }, {
                id: '28',
                title: 'Религиозная одежда',
                url: '',
            }, {
                id: '29',
                title: 'Товары для малыша',
                url: '',
            }, {
                id: '210',
                title: 'Подгузники',
                url: '',
            }, {
                id: '211',
                title: 'Подарки детям',
                url: '',
            },
        ]
    },
    {
        id: '3',
        title: 'Мужчинам',
        icon: man,
        url: '',
        dropdown: [
            {
                id: '31',
                title: 'Брюки',
                url: '',
            }, {
                id: '32',
                title: 'Верхняя одежда',
                url: '',
            }, {
                id: '33',
                title: 'Джемперы, водолазки и кардиганы',
                url: '',
            }, {
                id: '34',
                title: 'Джинсы',
                url: '',
            }, {
                id: '35',
                title: 'Комбинезоны и полукомбинезоны',
                url: '',
            }, {
                id: '36',
                title: 'Костюмы',
                url: '',
            }, {
                id: '37',
                title: 'Лонгсливы',
                url: '',
            }, {
                id: '38',
                title: 'Майки',
                url: '',
            }, {
                id: '39',
                title: 'Пиджаки, жилеты и жакеты',
                url: '',
            }, {
                id: '310',
                title: 'Пижамы',
                url: '',
            }, {
                id: '311',
                title: 'Рубашки',
                url: '',
            }, {
                id: '312',
                title: 'Толстовки, свитшоты и худи',
                url: '',
            }, {
                id: '313',
                title: 'Футболки',
                url: '',
            }, {
                id: '314',
                title: 'Футболки-поло',
                url: '',
            }, {
                id: '315',
                title: 'Халаты',
                url: '',
            }, {
                id: '316',
                title: 'Шорты',
                url: '',
            }, {
                id: '317',
                title: 'Белье',
                url: '',
            }, {
                id: '318',
                title: 'Большие размеры',
                url: '',
            }, {
                id: '319',
                title: 'Для высоких',
                url: '',
            }, {
                id: '320',
                title: 'Для невысоких',
                url: '',
            }, {
                id: '321',
                title: 'Одежда для дома',
                url: '',
            }, {
                id: '322',
                title: 'Офис',
                url: '',
            }, {
                id: '323',
                title: 'Пляжная одежда',
                url: '',
            }, {
                id: '324',
                title: 'Религиозная',
                url: '',
            }, {
                id: '325',
                title: 'Свадьба',
                url: '',
            }, {
                id: '326',
                title: 'Спецодежда и СИЗы',
                url: '',
            }, {
                id: '327',
                title: 'Подарки мужчинам',
                url: '',
            }
        ]
    },
    {
        id: '4',
        title: 'Дом',
        icon: home,
        url: '',
        dropdown: [
            {
                id: '41',
                title: 'Ванная',
                url: '',
            }, {
                id: '42',
                title: 'Кухня',
                url: '',
            }, {
                id: '43',
                title: 'Предметы интерьера',
                url: '',
            }, {
                id: '44',
                title: 'Шторы',
                url: '',
            }, {
                id: '45',
                title: 'Цветы, вазы и кашпо',
                url: '',
            }, {
                id: '46',
                title: 'Хранение вещей',
                url: '',
            }, {
                id: '47',
                title: 'Хозяйственные товары',
                url: '',
            }, {
                id: '48',
                title: 'Сувенирная продукция',
                url: '',
            }, {
                id: '49',
                title: 'Религия, эзотерика',
                url: '',
            }, {
                id: '410',
                title: 'Прихожая',
                url: '',
            }, {
                id: '411',
                title: 'Парфюмерия для дома',
                url: '',
            }, {
                id: '412',
                title: 'Отдых на природе',
                url: '',
            }, {
                id: '413',
                title: 'Для курения',
                url: '',
            }, {
                id: '414',
                title: 'Освещение',
                url: '',
            }, {
                id: '415',
                title: 'Кронштейны',
                url: '',
            }, {
                id: '416',
                title: 'Зеркала',
                url: '',
            }, {
                id: '417',
                title: 'Коврики',
                url: '',
            }, {
                id: '418',
                title: 'Все для праздника',
                url: '',
            }, {
                id: '419',
                title: 'Досуг и творчество',
                url: '',
            }, {
                id: '420',
                title: 'Детская',
                url: '',
            }, {
                id: '421',
                title: 'Гостиная',
                url: '',
            }, {
                id: '422',
                title: 'Спальня',
                url: '',
            },
        ]
    },
    {
        id: '5',
        title: 'Красота',
        icon: beauty,
        url: '',
        dropdown: [
            {
                id: '51',
                title: 'Аксессуары',
                url: '',
            }, {
                id: '52',
                title: 'Волосы',
                url: '',
            }, {
                id: '53',
                title: 'Аптечная косметика',
                url: '',
            }, {
                id: '54',
                title: 'Детская декоративная косметика',
                url: '',
            }, {
                id: '55',
                title: 'Для загара',
                url: '',
            }, {
                id: '56',
                title: 'Для мам и малышей',
                url: '',
            }, {
                id: '57',
                title: 'Израильская косметика',
                url: '',
            }, {
                id: '58',
                title: 'Инструменты для парикмахеров',
                url: '',
            }, {
                id: '59',
                title: 'Корейские бренды',
                url: '',
            }, {
                id: '510',
                title: 'Косметические аппараты и аксессуары',
                url: '',
            }, {
                id: '511',
                title: 'Макияж',
                url: '',
            }, {
                id: '512',
                title: 'Мужская линия',
                url: '',
            }, {
                id: '513',
                title: 'Наборы для ухода',
                url: '',
            }, {
                id: '514',
                title: 'Ногти',
                url: '',
            }, {
                id: '515',
                title: 'Органическая косметика',
                url: '',
            }, {
                id: '516',
                title: 'Парфюмерия',
                url: '',
            }, {
                id: '517',
                title: 'Подарочные наборы',
                url: '',
            }, {
                id: '518',
                title: 'Профессиональная косметика',
                url: '',
            }, {
                id: '519',
                title: 'Средства личной гигиены',
                url: '',
            }, {
                id: '520',
                title: 'Гигиена полости рта',
                url: '',
            }, {
                id: '521',
                title: 'Уход за кожей',
                url: '',
            },
        ]
    },
    {
        id: '6',
        title: 'Аксессуары',
        icon: accessory,
        url: '',
        dropdown: [
            {
                id: '61',
                title: 'Аксессуары для волос',
                url: '',
            }, {
                id: '62',
                title: 'Аксессуары для одежды',
                url: '',
            }, {
                id: '63',
                title: 'Бижутерия',
                url: '',
            }, {
                id: '64',
                title: 'Веера',
                url: '',
            }, {
                id: '65',
                title: 'Галстуки и бабочки',
                url: '',
            }, {
                id: '66',
                title: 'Головные уборы',
                url: '',
            }, {
                id: '67',
                title: 'Зеркальца',
                url: '',
            }, {
                id: '68',
                title: 'Зонты',
                url: '',
            }, {
                id: '69',
                title: 'Кошельки и кредитницы',
                url: '',
            }, {
                id: '610',
                title: 'Маски для сна',
                url: '',
            }, {
                id: '611',
                title: 'Носовые платки',
                url: '',
            }, {
                id: '612',
                title: 'Очки и футляры',
                url: '',
            }, {
                id: '613',
                title: 'Перчатки и варежки',
                url: '',
            }, {
                id: '614',
                title: 'Платки и шарфы',
                url: '',
            }, {
                id: '615',
                title: 'Религиозные',
                url: '',
            }, {
                id: '616',
                title: 'Ремни и пояса',
                url: '',
            }, {
                id: '617',
                title: 'Сумки и рюкзаки',
                url: '',
            }, {
                id: '618',
                title: 'Часы и ремешки',
                url: '',
            }, {
                id: '619',
                title: 'Чемоданы и защита багажа',
                url: '',
            },
        ]
    },
    {
        id: '7',
        title: 'Электроника',
        icon: electronic,
        url: '',
        dropdown: [
            {
                id: '71',
                title: 'Автоэлектроника и навигация',
                url: '',
            }, {
                id: '72',
                title: 'Гарнитуры и наушники',
                url: '',
            }, {
                id: '73',
                title: 'Детская электроника',
                url: '',
            }, {
                id: '74',
                title: 'Игровые консоли и игры',
                url: '',
            }, {
                id: '75',
                title: 'Кабели и зарядные устройства',
                url: '',
            }, {
                id: '76',
                title: 'Музыка и видео',
                url: '',
            }, {
                id: '77',
                title: 'Ноутбуки и компьютеры',
                url: '',
            }, {
                id: '78',
                title: 'Офисная техника',
                url: '',
            }, {
                id: '79',
                title: 'Развлечения и гаджеты',
                url: '',
            }, {
                id: '710',
                title: 'Сетевое оборудование',
                url: '',
            }, {
                id: '711',
                title: 'Системы безопасности',
                url: '',
            }, {
                id: '712',
                title: 'Смартфоны и телефоны',
                url: '',
            }, {
                id: '713',
                title: 'Смарт-часы и браслеты',
                url: '',
            }, {
                id: '714',
                title: 'Солнечные электростанции и комплектующие',
                url: '',
            }, {
                id: '715',
                title: 'ТВ, Аудио, Фото, Видео техника',
                url: '',
            }, {
                id: '716',
                title: 'Торговое оборудование',
                url: '',
            }, {
                id: '717',
                title: 'Умный дом',
                url: '',
            }, {
                id: '718',
                title: 'Электротранспорт и аксессуары',
                url: '',
            },
        ]
    },
    {
        id: '8',
        title: 'Игрушки',
        icon: toys,
        url: '',
        dropdown: [
            {
                id: '81',
                title: 'Антистресс',
                url: '',
            }, {
                id: '82',
                title: 'Для малышей',
                url: '',
            }, {
                id: '83',
                title: 'Для песочницы',
                url: '',
            }, {
                id: '84',
                title: 'Игровые комплексы',
                url: '',
            }, {
                id: '85',
                title: 'Игровые наборы',
                url: '',
            }, {
                id: '86',
                title: 'Игрушечное оружие и аксессуары',
                url: '',
            }, {
                id: '87',
                title: 'Игрушечный транспорт',
                url: '',
            }, {
                id: '88',
                title: 'Игрушки для ванной',
                url: '',
            }, {
                id: '89',
                title: 'Интерактивные',
                url: 'Кинетический песок',
            }, {
                id: '810',
                title: 'Конструкторы',
                url: '',
            }, {
                id: '811',
                title: 'Конструкторы LEGO',
                url: '',
            }, {
                id: '812',
                title: 'Куклы и аксессуары',
                url: '',
            }, {
                id: '813',
                title: 'Музыкальные',
                url: '',
            }, {
                id: '814',
                title: 'Мыльные пузыри',
                url: '',
            }, {
                id: '815',
                title: 'Мягкие игрушки',
                url: '',
            }, {
                id: '816',
                title: 'Наборы для опытов',
                url: '',
            }, {
                id: '817',
                title: 'Настольные игры',
                url: '',
            }, {
                id: '818',
                title: 'Радиоуправляемые',
                url: '',
            }, {
                id: '819',
                title: 'Развивающие игрушки',
                url: '',
            }, {
                id: '820',
                title: 'Сборные модели',
                url: '',
            }, {
                id: '821',
                title: 'Спортивные игры',
                url: '',
            }, {
                id: '822',
                title: 'Сюжетно-ролевые игры',
                url: '',
            }, {
                id: '823',
                title: 'Творчество и рукоделие',
                url: '',
            }, {
                id: '824',
                title: 'Фигурки и роботы',
                url: '',
            }
        ]
    },
    {
        id: '9',
        title: 'Мебель',
        icon: armchair,
        url: '',
        dropdown: [
            {
                id: '91',
                title: 'Бескаркасная мебель',
                url: '',
            }, {
                id: '92',
                title: 'Детская мебель',
                url: '',
            }, {
                id: '93',
                title: 'Диваны и кресла',
                url: '',
            }, {
                id: '94',
                title: 'Столы и стулья',
                url: '',
            }, {
                id: '95',
                title: 'Компьютерные кресла',
                url: '',
            }, {
                id: '96',
                title: 'Мебель для геймеров',
                url: '',
            }, {
                id: '97',
                title: 'Мебель для гостиной',
                url: '',
            }, {
                id: '98',
                title: 'Мебель для кухни',
                url: '',
            }, {
                id: '99',
                title: 'Мебель для прихожей',
                url: '',
            }, {
                id: '910',
                title: 'Мебель для спальни',
                url: '',
            }, {
                id: '911',
                title: 'Офисная мебель',
                url: '',
            }, {
                id: '912',
                title: 'Торговая мебель',
                url: '',
            }, {
                id: '913',
                title: 'Зеркала',
                url: '',
            }, {
                id: '914',
                title: 'Мебельная фурнитура',
                url: '',
            },
        ]
    },
    {
        id: '10',
        title: 'Товары для взрослых',
        icon: adult,
        url: '',
        dropdown: [
            {
                id: '101',
                title: 'Белье и аксессуары',
                url: '',
            }, {
                id: '102',
                title: 'Игры и сувениры',
                url: '',
            }, {
                id: '103',
                title: 'Интимная косметика',
                url: '',
            }, {
                id: '104',
                title: 'Интимная съедобная косметика',
                url: '',
            }, {
                id: '105',
                title: 'Презервативы и лубриканты',
                url: '',
            }, {
                id: '106',
                title: 'Секс игрушки',
                url: '',
            }, {
                id: '107',
                title: 'Фетиш и БДСМ',
                url: '',
            },
        ]
    },
    {
        id: '11',
        title: 'Продукты',
        icon: pita,
        url: '',
        dropdown: [
            {
                id: '111',
                title: 'Вкусные подарки',
                url: '',
            }, {
                id: '112',
                title: 'Чай и кофе',
                url: '',
            }, {
                id: '113',
                title: 'Сладости и хлебобулочные изделия',
                url: '',
            }, {
                id: '114',
                title: 'Бакалея',
                url: '',
            }, {
                id: '115',
                title: 'Детское питание',
                url: '',
            }, {
                id: '116',
                title: 'Добавки пищевые',
                url: '',
            }, {
                id: '117',
                title: 'Здоровое питание',
                url: '',
            }, {
                id: '118',
                title: 'Мясная продукция',
                url: '',
            }, {
                id: '119',
                title: 'Молочные продукты и яйца',
                url: '',
            }, {
                id: '1110',
                title: 'Напитки',
                url: '',
            }, {
                id: '1111',
                title: 'Снеки',
                url: '',
            }, {
                id: '1112',
                title: 'Замороженная продукция',
                url: '',
            }, {
                id: '1113',
                title: 'Фрукты и ягоды',
                url: '',
            }, {
                id: '1114',
                title: 'Овощи',
                url: '',
            }
        ]
    },
    {
        id: '12',
        title: 'Бытовая техника',
        icon: microwave,
        url: '',
        dropdown: [
            {
                id: '121',
                title: 'Климатическая техника',
                url: '',
            }, {
                id: '122',
                title: 'Красота и здоровье',
                url: '',
            }, {
                id: '123',
                title: 'Садовая техника',
                url: '',
            }, {
                id: '124',
                title: 'Техника для дома',
                url: '',
            }, {
                id: '125',
                title: 'Техника для кухни',
                url: '',
            }, {
                id: '126',
                title: 'Крупная бытовая техника',
                url: '',
            }
        ]
    },
    {
        id: '13',
        title: 'Зоотовары',
        icon: animal,
        url: '',
        dropdown: [
            {
                id: '131',
                title: 'Для кошек',
                url: '',
            }, {
                id: '132',
                title: 'Для собак',
                url: '',
            }, {
                id: '133',
                title: 'Для птиц',
                url: '',
            }, {
                id: '134',
                title: 'Для грызунов и хорьков',
                url: '',
            }, {
                id: '135',
                title: 'Для лошадей',
                url: '',
            }, {
                id: '136',
                title: 'Аквариумистика',
                url: '',
            }, {
                id: '137',
                title: 'Террариумистика',
                url: '',
            }, {
                id: '138',
                title: 'Фермерство',
                url: '',
            }, {
                id: '139',
                title: 'Корм и лакомства',
                url: '',
            }, {
                id: '1310',
                title: 'Аксессуары для кормления',
                url: '',
            }, {
                id: '1311',
                title: 'Лотки и наполнители',
                url: '',
            }, {
                id: '1312',
                title: 'Когтеточки и домики',
                url: '',
            }, {
                id: '1313',
                title: 'Транспортировка',
                url: '',
            }, {
                id: '1314',
                title: 'Амуниция и дрессировка',
                url: '',
            }, {
                id: '1315',
                title: 'Игрушки',
                url: '',
            }, {
                id: '1316',
                title: 'Груминг и уход',
                url: '',
            }, {
                id: '1317',
                title: 'Одежда',
                url: '',
            }, {
                id: '1318',
                title: 'Ветаптека',
                url: '',
            }
        ]
    },
    {
        id: '14',
        title: 'Спорт',
        icon: sport,
        url: '',
        dropdown: [
            {
                id: '141',
                title: 'Фитнес и тренажеры',
                url: '',
            }, {
                id: '142',
                title: 'Велоспорт',
                url: '',
            }, {
                id: '143',
                title: 'Йога/Пилатес',
                url: '',
            }, {
                id: '144',
                title: 'Охота и рыбалка',
                url: '',
            }, {
                id: '145',
                title: 'Самокаты/Ролики/Скейтборды',
                url: '',
            }, {
                id: '146',
                title: 'Туризм/Походы',
                url: '',
            }, {
                id: '147',
                title: 'Бег/Ходьба',
                url: '',
            }, {
                id: '148',
                title: 'Командные виды спорта',
                url: '',
            }, {
                id: '149',
                title: 'Водные виды спорта',
                url: '',
            }, {
                id: '1410',
                title: 'Зимние виды спорта',
                url: '',
            }, {
                id: '1411',
                title: 'Поддержка и восстановление',
                url: '',
            }, {
                id: '1412',
                title: 'Спортивное питание и косметика',
                url: '',
            }, {
                id: '1413',
                title: 'Бадминтон/Теннис',
                url: '',
            }, {
                id: '1414',
                title: 'Бильярд/Гольф/Дартс/Метание ножей',
                url: '',
            }, {
                id: '1415',
                title: 'Единоборства',
                url: '',
            }, {
                id: '1416',
                title: 'Конный спорт',
                url: '',
            }, {
                id: '1417',
                title: 'Мотоспорт',
                url: '',
            }, {
                id: '1418',
                title: 'Парусный спорт',
                url: '',
            }, {
                id: '1419',
                title: 'Скалолазание/Альпинизм',
                url: '',
            }, {
                id: '1420',
                title: 'Страйкбол и пейнтбол',
                url: '',
            }, {
                id: '1421',
                title: 'Танцы/Гимнастика',
                url: '',
            }, {
                id: '1422',
                title: 'Для детей',
                url: '',
            }, {
                id: '1423',
                title: 'Для женщин',
                url: '',
            }, {
                id: '1424',
                title: 'Для мужчин',
                url: '',
            }, {
                id: '1425',
                title: 'Спортивная обувь',
                url: '',
            }, {
                id: '1426',
                title: 'Товары для самообороны',
                url: '',
            }, {
                id: '1427',
                title: 'Электроника',
                url: '',
            }
        ]
    },
    {
        id: '15',
        title: 'Ювилерные изделия',
        icon: ring,
        url: '',
        dropdown: [
            {
                id: '151',
                title: 'Кольца',
                url: '',
            }, {
                id: '152',
                title: 'Серьги',
                url: '',
            }, {
                id: '153',
                title: 'Браслеты',
                url: '',
            }, {
                id: '154',
                title: 'Подвески и шармы',
                url: '',
            }, {
                id: '155',
                title: 'Комплекты',
                url: '',
            }, {
                id: '156',
                title: 'Колье, цепи, шнурки',
                url: '',
            }, {
                id: '157',
                title: 'Броши',
                url: '',
            }, {
                id: '158',
                title: 'Пирсинг',
                url: '',
            }, {
                id: '159',
                title: 'Часы',
                url: '',
            }, {
                id: '1510',
                title: 'Зажимы, запонки, ремни',
                url: '',
            }, {
                id: '1511',
                title: 'Четки',
                url: '',
            }, {
                id: '1512',
                title: 'Сувениры и столовое серебро',
                url: '',
            }, {
                id: '1513',
                title: 'Украшения из золота',
                url: '',
            }, {
                id: '1514',
                title: 'Украшения из серебра',
                url: '',
            }, {
                id: '1515',
                title: 'Украшения из керамики',
                url: '',
            }, {
                id: '1516',
                title: 'Аксессуары для украшений',
                url: '',
            }
        ]
    },
    {
        id: '16',
        title: 'Для ремонта',
        icon: tools,
        url: '',
        dropdown: [
            {
                id: '161',
                title: 'Двери, окна и фурнитура',
                url: '',
            }, {
                id: '162',
                title: 'Инструменты и оснастка',
                url: '',
            }, {
                id: '163',
                title: 'Отделочные материалы',
                url: '',
            }, {
                id: '164',
                title: 'Электрика',
                url: '',
            }, {
                id: '165',
                title: 'Лакокрасочные материалы',
                url: '',
            }, {
                id: '166',
                title: 'Сантехника, отопление и газоснабжение',
                url: '',
            }, {
                id: '167',
                title: 'Вентиляция',
                url: '',
            }, {
                id: '168',
                title: 'Крепеж',
                url: '',
            }, {
                id: '169',
                title: 'Стройматериалы',
                url: '',
            }, {
                id: '1610',
                title: 'Сборные конструкции',
                url: '',
            },
        ]
    },
    {
        id: '17',
        title: 'Сад и дача',
        icon: garden,
        url: '',
        dropdown: [
            {
                id: '171',
                title: 'Бассейны',
                url: '',
            }, {
                id: '172',
                title: 'Горшки, опоры и все для рассады',
                url: '',
            }, {
                id: '173',
                title: 'Грили, мангалы и барбекю',
                url: '',
            }, {
                id: '174',
                title: 'Дачные умывальники, души и туалеты',
                url: '',
            }, {
                id: '175',
                title: 'Мойки высокого давления и аксессуары',
                url: '',
            }, {
                id: '176',
                title: 'Полив и водоснабжение',
                url: '',
            }, {
                id: '177',
                title: 'Растения, семена и грунты',
                url: '',
            }, {
                id: '178',
                title: 'Садовая мебель',
                url: '',
            }, {
                id: '179',
                title: 'Садовая техника',
                url: '',
            }, {
                id: '1710',
                title: 'Садовый декор',
                url: '',
            }, {
                id: '1711',
                title: 'Садовый инструмент',
                url: '',
            }, {
                id: '1712',
                title: 'Теплицы, парники, укрывной материал',
                url: '',
            }, {
                id: '1713',
                title: 'Товары для бани и сауны',
                url: '',
            }, {
                id: '1714',
                title: 'Товары для кемпинга, пикника и отдыха',
                url: '',
            }, {
                id: '1715',
                title: 'Удобрения, химикаты и средства защиты',
                url: '',
            },
        ]
    },
    {
        id: '18',
        title: 'Здоровье',
        icon: health,
        url: '',
        dropdown: [
            {
                id: '181',
                title: 'БАДы',
                url: '',
            }, {
                id: '182',
                title: 'Грибы сушеные и капсулированные',
                url: '',
            }, {
                id: '183',
                title: 'Дезинфекция, стерилизация и утилизация',
                url: '',
            }, {
                id: '184',
                title: 'Ухо, горло, нос',
                url: '',
            }, {
                id: '185',
                title: 'Контрацептивы и лубриканты',
                url: '',
            }, {
                id: '186',
                title: 'Лечебное питание',
                url: '',
            }, {
                id: '187',
                title: 'Маски защитные',
                url: '',
            }, {
                id: '188',
                title: 'Медицинские изделия',
                url: '',
            }, {
                id: '189',
                title: 'Медицинские приборы',
                url: '',
            }, {
                id: '1810',
                title: 'Оздоровление',
                url: '',
            }, {
                id: '1811',
                title: 'Оптика',
                url: '',
            }, {
                id: '1812',
                title: 'Ортопедия',
                url: '',
            }, {
                id: '1813',
                title: 'Противопростудные препараты',
                url: '',
            }, {
                id: '1814',
                title: 'Реабилитация',
                url: '',
            }, {
                id: '1815',
                title: 'Сиропы и бальзамы',
                url: '',
            }, {
                id: '1816',
                title: 'Уход за полостью рта',
                url: '',
            },
        ]
    },
    {
        id: '19',
        title: 'Канцтовары',
        icon: products,
        url: '',
        dropdown: [
            {
                id: '191',
                title: 'Бумажная продукция',
                url: '',
            }, {
                id: '192',
                title: 'Карты и глобусы',
                url: '',
            }, {
                id: '193',
                title: 'Офисные принадлежности',
                url: '',
            }, {
                id: '194',
                title: 'Письменные принадлежности',
                url: '',
            }, {
                id: '195',
                title: 'Рисование и лепка',
                url: '',
            }, {
                id: '196',
                title: 'Счетный материал',
                url: '',
            }, {
                id: '197',
                title: 'Торговые принадлежности',
                url: '',
            }, {
                id: '198',
                title: 'Чертежные принадлежности',
                url: '',
            },
        ]
    },
    {
        id: '20',
        title: 'Цифровые товары',
        icon: smartphone,
        url: '',
        dropdown: [
            {
                id: '201',
                title: 'Видео',
                url: '',
            }, {
                id: '202',
                title: 'Аудио',
                url: '',
            }, {
                id: '203',
                title: 'Электронные Книги',
                url: '',
            }, {
                id: '204',
                title: 'Аудиокниги',
                url: '',
            }, {
                id: '205',
                title: 'Ключи и сертификаты',
                url: '',
            }, {
                id: '206',
                title: 'Контент',
                url: '',
            }, {
                id: '207',
                title: 'Услуги',
                url: '',
            },
        ]
    },
    {
        id: '21',
        title: 'Книги',
        icon: books,
        url: '',
        dropdown: [
            {
                id: '211',
                title: 'Художественная литература',
                url: '',
            }, {
                id: '212',
                title: 'Комиксы и манга',
                url: '',
            }, {
                id: '213',
                title: 'Книги для детей',
                url: '',
            }, {
                id: '214',
                title: 'Воспитание и развитие ребенка',
                url: '',
            }, {
                id: '215',
                title: 'Образование',
                url: '',
            }, {
                id: '216',
                title: 'Самообразование и развитие',
                url: '',
            }, {
                id: '217',
                title: 'Бизнес и менеджмент',
                url: '',
            }, {
                id: '218',
                title: 'Хобби и досуг',
                url: '',
            }, {
                id: '219',
                title: 'Астрология и эзотерика',
                url: '',
            }, {
                id: '2110',
                title: 'Дом, сад и огород',
                url: '',
            }, {
                id: '2111',
                title: 'Красота, здоровье и спорт',
                url: '',
            }, {
                id: '2112',
                title: 'Научно-популярная литература',
                url: '',
            }, {
                id: '2113',
                title: 'Интернет и технологии',
                url: '',
            }, {
                id: '2114',
                title: 'Литературоведение и публицистика',
                url: '',
            }, {
                id: '2115',
                title: 'Историческая и военная литература',
                url: '',
            }, {
                id: '2116',
                title: 'Философия',
                url: '',
            }, {
                id: '2117',
                title: 'Религия',
                url: '',
            }, {
                id: '2118',
                title: 'Политика и право',
                url: '',
            }, {
                id: '2119',
                title: 'Букинистика',
                url: '',
            }, {
                id: '2120',
                title: 'Книги на иностранных языках',
                url: '',
            }, {
                id: '2121',
                title: 'Плакаты',
                url: '',
            }, {
                id: '2122',
                title: 'Календари',
                url: '',
            }, {
                id: '2123',
                title: 'Коллекционные издания',
                url: '',
            }, {
                id: '2124',
                title: 'Репринтные издания',
                url: '',
            }, {
                id: '2125',
                title: 'Мультимедиа',
                url: '',
            }, {
                id: '2126',
                title: 'Аудиокниги',
                url: '',
            }, {
                id: '2127',
                title: 'Цифровые книги',
                url: '',
            }, {
                id: '2128',
                title: 'Цифровые аудиокниги',
                url: '',
            },
        ]
    },
    {
        id: '22',
        title: 'Автотовары',
        icon: car,
        url: '',
        dropdown: [
            {
                id: '221',
                title: 'Запчасти на легковые автомобили',
                url: '',
            },{
                id: '222',
                title: 'Масла и жидкости',
                url: '',
            },{
                id: '223',
                title: 'Автокосметика и автохимия',
                url: '',
            },{
                id: '224',
                title: 'Краски и грунтовки',
                url: '',
            },{
                id: '225',
                title: 'Автоэлектроника и навигация',
                url: '',
            },{
                id: '226',
                title: 'Аксессуары в салон и багажник',
                url: '',
            },{
                id: '227',
                title: 'Коврики',
                url: '',
            },{
                id: '228',
                title: 'Внешний тюнинг',
                url: '',
            },{
                id: '229',
                title: 'Другие аксессуары и доп. оборудование',
                url: '',
            },{
                id: '2210',
                title: 'Шины и диски колесные',
                url: '',
            },{
                id: '2211',
                title: 'Инструменты',
                url: '',
            },{
                id: '2212',
                title: 'Мойки высокого давления и аксессуары',
                url: '',
            },{
                id: '2213',
                title: 'Мототовары',
                url: '',
            },{
                id: '2214',
                title: 'Запчасти на силовую технику',
                url: '',
            },{
                id: '2215',
                title: 'Запчасти для лодок и катеров',
                url: '',
            },
        ]
    },
    {
        id: '23',
        title: 'Акции',
        icon: sale,
        url: '',
    },
]