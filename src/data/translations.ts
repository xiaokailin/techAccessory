export type Language = 'zh-CN' | 'zh-TW' | 'es' | 'fr' | 'ru' | 'ar';

export const languageNames: Record<Language, string> = {
  'zh-CN': '中文简体',
  'zh-TW': '中文繁體',
  'es': 'Español',
  'fr': 'Français',
  'ru': 'Русский',
  'ar': 'العربية'
};

export const translations: Record<Language, any> = {
  'zh-CN': {
    header: {
      home: '首页',
      products: '产品中心',
      about: '关于我们',
      contact: '联系我们'
    },
    hero: {
      title: '优质数码配件',
      subtitle: '让生活更便捷',
      description: '专业研发生产充电宝、手机支架、蓝牙耳机等数码配件产品，为您的数字生活提供可靠的配套解决方案。',
      browseProducts: '浏览产品',
      contactPurchase: '联系采购',
      qualityGuarantee: '品质保证',
      oneYearWarranty: '一年质保',
      fastShipping: '快速发货',
      capacity: 'mAh大容量',
      productModels: '产品型号',
      satisfiedCustomers: '满意客户',
      industryExperience: '行业经验',
      positiveRate: '好评率'
    },
    products: {
      title: '产品中心',
      description: '精选优质数码配件产品，每一款都经过严格品质把控，为您的数字生活提供可靠保障。',
      viewMore: '查看更多产品',
      viewDetails: '查看详情',
      hot: '热销',
      categories: {
        charging: '充电产品',
        phoneAccessories: '手机配件',
        audio: '音频产品',
        protection: '保护配件',
        carAccessories: '车载配件'
      },
      items: {
        powerBank: {
          name: '大容量充电宝',
          description: '10000mAh大容量，支持快充，双USB输出，轻薄便携设计',
          features: ['10000mAh', '快充支持', '双输出', '轻薄设计']
        },
        phoneStand: {
          name: '桌面手机支架',
          description: '铝合金材质，角度可调，适配各种手机尺寸，稳固不摇晃',
          features: ['铝合金', '角度可调', '通用适配', '防滑设计']
        },
        bluetoothEarbuds: {
          name: '无线蓝牙耳机',
          description: '5.0蓝牙芯片，降噪通话，长续航，触控操作简便',
          features: ['蓝牙5.0', '降噪通话', '长续航', '触控操作']
        },
        phoneCase: {
          name: '防摔手机壳',
          description: '军工级防护，四角气囊设计，透明背板展现原机美感',
          features: ['军工防护', '气囊设计', '透明背板', '精准开孔']
        },
        chargingCable: {
          name: '快充数据线',
          description: '尼龙编织线身，支持快���，1.2米长度，多种接口可选',
          features: ['尼龙编织', '快充支持', '1.2米长', '多种接口']
        },
        carMount: {
          name: '车载手机支架',
          description: '强磁吸附，一手操作，360度旋转，牢固稳定不掉落',
          features: ['强磁吸附', '一手操作', '360度旋转', '牢固稳定']
        }
      }
    },
    about: {
      title: '关于我们',
      description: 'TechAccessory是一家专业的数码配件制造商，致力于为全球用户提供高品质、创新的数码配件产品。',
      mission: '我们的使命',
      missionText: '通过不断创新和优质服务，让每个人都能享受到便捷、安全、高效的数字生活体验。',
      values: '核心价值',
      valuesText: '品质第一、客户至上、持续创新、诚信经营',
      team: '专业团队',
      teamText: '拥有资深的研发、生产和服务团队，确保每一款产品都达到国际先进水平。'
    },
    contact: {
      title: '联系我们',
      subtitle: '获取报价与合作咨询',
      description: '我们期待与您建立长期合作关系，为您提供优质的产品和服务。',
      companyName: '公司名称',
      contactPerson: '联系人',
      email: '邮箱地址',
      phone: '联系电话',
      message: '留言内容',
      submit: '提交咨询',
      address: '公司地址',
      businessHours: '营业时间',
      addressText: '深圳市南山区科技园南区R2-B栋8楼',
      hoursText: '周一至周五：9:00-18:00',
      emailText: 'info@techaccessory.com',
      phoneText: '+86 400-8888-8888'
    },
    footer: {
      company: '深圳市科技配件有限公司',
      rights: '版权所有',
      about: '关于我们',
      products: '产品中心',
      contact: '联系我们',
      privacy: '隐私政策'
    }
  },
  'zh-TW': {
    header: {
      home: '首頁',
      products: '產品中心',
      about: '關於我們',
      contact: '聯絡我們'
    },
    hero: {
      title: '優質數碼配件',
      subtitle: '讓生活更便捷',
      description: '專業研發生產充電寶、手機支架、藍牙耳機等數碼配件產品，為您的數字生活提供可靠的配套解決方案。',
      browseProducts: '瀏覽產品',
      contactPurchase: '聯絡採購',
      qualityGuarantee: '品質保證',
      oneYearWarranty: '一年質保',
      fastShipping: '快速發貨',
      capacity: 'mAh大容量',
      productModels: '產品型號',
      satisfiedCustomers: '滿意客戶',
      industryExperience: '行業經驗',
      positiveRate: '好評率'
    },
    products: {
      title: '產品中心',
      description: '精選優質數碼配件產品，每一款都��過嚴格品質把控，為您的數字生活提供可靠保障。',
      viewMore: '查看更多產品',
      viewDetails: '查看詳情',
      hot: '熱銷',
      categories: {
        charging: '充電產品',
        phoneAccessories: '手機配件',
        audio: '音頻產品',
        protection: '保護配件',
        carAccessories: '車載配件'
      },
      items: {
        powerBank: {
          name: '大容量充電寶',
          description: '10000mAh大容量，支持快充，雙USB輸出，輕薄便攜設計',
          features: ['10000mAh', '快充支持', '雙輸出', '輕薄設計']
        },
        phoneStand: {
          name: '桌面手機支架',
          description: '鋁合金材質，角度可調，適配各種手機尺寸，穩固不搖晃',
          features: ['鋁合金', '角度可調', '通用適配', '防滑設計']
        },
        bluetoothEarbuds: {
          name: '無線藍牙耳機',
          description: '5.0藍牙芯片，降噪通話，長續航，觸控操作簡便',
          features: ['藍牙5.0', '降噪通話', '長續航', '觸控操作']
        },
        phoneCase: {
          name: '防摔手機殼',
          description: '軍工級防護，四角氣囊設計，透明背板展現原機美感',
          features: ['軍工防護', '氣囊設計', '透明背板', '精準開孔']
        },
        chargingCable: {
          name: '快充數據線',
          description: '尼龍編織線身，支持快充，1.2米長度，多種接口可選',
          features: ['尼龍編織', '快充支持', '1.2米長', '多種接口']
        },
        carMount: {
          name: '車載手機支架',
          description: '強磁吸附，一手操作，360度旋轉，牢固穩定不掉落',
          features: ['強磁吸附', '一手操作', '360度旋轉', '牢固穩定']
        }
      }
    },
    about: {
      title: '關於我們',
      description: 'TechAccessory是一家專業的數碼配件製造商，致力於為全球用戶提供高品質、創新的數碼配件產品。',
      mission: '我們的使命',
      missionText: '通過不斷創新和優質服務，讓每個人都能享受到便捷、安全、高效的數字生活體驗。',
      values: '核心價值',
      valuesText: '品質第一、客戶至上、持續創新、誠信經營',
      team: '專業團隊',
      teamText: '擁有資深的研發、生產和服務團隊，確保每一款產品都達到國際先進水平。'
    },
    contact: {
      title: '聯絡我們',
      subtitle: '獲取報價與合作諮詢',
      description: '我們期待與您建立長期合作關係，為您提供優質的產品和服務。',
      companyName: '公司名稱',
      contactPerson: '聯絡人',
      email: '郵箱地址',
      phone: '聯絡電話',
      message: '留言內容',
      submit: '提交諮詢',
      address: '公司地址',
      businessHours: '營業時間',
      addressText: '深圳市南山區科技園南區R2-B棟8樓',
      hoursText: '週一至週五：9:00-18:00',
      emailText: 'info@techaccessory.com',
      phoneText: '+86 400-8888-8888'
    },
    footer: {
      company: '深圳市科技配件有限公司',
      rights: '版權所有',
      about: '關於我們',
      products: '產品中心',
      contact: '聯絡我們',
      privacy: '隱私政策'
    }
  },
  'es': {
    header: {
      home: 'Inicio',
      products: 'Productos',
      about: 'Nosotros',
      contact: 'Contacto'
    },
    hero: {
      title: 'Accesorios Digitales de Calidad',
      subtitle: 'Haciendo la vida más conveniente',
      description: 'Investigación y producción profesional de power banks, soportes para móviles, auriculares Bluetooth y otros accesorios digitales, proporcionando soluciones confiables para su vida digital.',
      browseProducts: 'Ver Productos',
      contactPurchase: 'Contacto de Compras',
      qualityGuarantee: 'Garantía de Calidad',
      oneYearWarranty: 'Garantía de 1 Año',
      fastShipping: 'Envío Rápido',
      capacity: 'mAh Gran Capacidad',
      productModels: 'Modelos de Productos',
      satisfiedCustomers: 'Clientes Satisfechos',
      industryExperience: 'Años de Experiencia',
      positiveRate: 'Calificación Positiva'
    },
    products: {
      title: 'Centro de Productos',
      description: 'Productos de accesorios digitales cuidadosamente seleccionados, cada uno sometido a un estricto control de calidad para proporcionar protección confiable para su vida digital.',
      viewMore: 'Ver Más Productos',
      viewDetails: 'Ver Detalles',
      hot: 'Más Vendido',
      categories: {
        charging: 'Productos de Carga',
        phoneAccessories: 'Accesorios de Móvil',
        audio: 'Productos de Audio',
        protection: 'Accesorios de Protección',
        carAccessories: 'Accesorios de Coche'
      },
      items: {
        powerBank: {
          name: 'Power Bank de Gran Capacidad',
          description: '10000mAh gran capacidad, soporte de carga rápida, doble salida USB, diseño delgado y portátil',
          features: ['10000mAh', 'Carga Rápida', 'Doble Salida', 'Diseño Delgado']
        },
        phoneStand: {
          name: 'Soporte de Escritorio para Móvil',
          description: 'Material de aleación de aluminio, ángulo ajustable, compatible con varios tamaños de móvil, estable sin tambalearse',
          features: ['Aleación de Aluminio', 'Ángulo Ajustable', 'Compatibilidad Universal', 'Diseño Antideslizante']
        },
        bluetoothEarbuds: {
          name: 'Auriculares Bluetooth Inalámbricos',
          description: 'Chip Bluetooth 5.0, llamadas con cancelación de ruido, larga duración, operación táctil simple',
          features: ['Bluetooth 5.0', 'Llamadas con Cancelación de Ruido', 'Larga Duración', 'Operación Táctil']
        },
        phoneCase: {
          name: 'Funda Protectora Anti-caídas',
          description: 'Protección de grado militar, diseño de airbag en cuatro esquinas, panel trasero transparente que muestra la belleza original',
          features: ['Protección Militar', 'Diseño de Airbag', 'Panel Trasero Transparente', 'Cortes Precisos']
        },
        chargingCable: {
          name: 'Cable de Carga Rápida',
          description: 'Cuerpo de cable trenzado de nylon, soporte de carga rápida, longitud de 1.2 metros, múltiples interfaces disponibles',
          features: ['Trenzado de Nylon', 'Soporte de Carga Rápida', '1.2m de Largo', 'Múltiples Interfaces']
        },
        carMount: {
          name: 'Soporte Magnético para Coche',
          description: 'Adsorción magnética fuerte, operación con una mano, rotación 360 grados, firme y estable sin caerse',
          features: ['Adsorción Magnética Fuerte', 'Operación con Una Mano', 'Rotación 360°', 'Firme y Estable']
        }
      }
    },
    about: {
      title: 'Acerca de Nosotros',
      description: 'TechAccessory es un fabricante profesional de accesorios digitales, dedicado a proporcionar productos de accesorios digitales de alta calidad e innovadores para usuarios globales.',
      mission: 'Nuestra Misión',
      missionText: 'A través de la innovación continua y el servicio de calidad, permitir que todos disfruten de una experiencia de vida digital conveniente, segura y eficiente.',
      values: 'Valores Fundamentales',
      valuesText: 'Calidad primero, cliente primero, innovación continua, operación honesta',
      team: 'Equipo Profesional',
      teamText: 'Con equipos senior de I+D, producción y servicio, asegurando que cada producto alcance el nivel internacional avanzado.'
    },
    contact: {
      title: 'Contáctanos',
      subtitle: 'Obtener Cotización y Consulta de Cooperación',
      description: 'Esperamos establecer una relación de cooperación a largo plazo con usted, proporcionándole productos y servicios de calidad.',
      companyName: 'Nombre de la Empresa',
      contactPerson: 'Persona de Contacto',
      email: 'Dirección de Email',
      phone: 'Teléfono de Contacto',
      message: 'Contenido del Mensaje',
      submit: 'Enviar Consulta',
      address: 'Dirección de la Empresa',
      businessHours: 'Horario Comercial',
      addressText: 'Piso 8, Edificio R2-B, Área Sur del Parque Tecnológico, Distrito Nanshan, Shenzhen',
      hoursText: 'Lunes a Viernes: 9:00-18:00',
      emailText: 'info@techaccessory.com',
      phoneText: '+86 400-8888-8888'
    },
    footer: {
      company: 'Shenzhen Tech Accessories Co., Ltd.',
      rights: 'Todos los derechos reservados',
      about: 'Acerca de Nosotros',
      products: 'Productos',
      contact: 'Contacto',
      privacy: 'Política de Privacidad'
    }
  },
  'fr': {
    header: {
      home: 'Accueil',
      products: 'Produits',
      about: 'À propos',
      contact: 'Contact'
    },
    hero: {
      title: 'Accessoires Numériques de Qualité',
      subtitle: 'Rendre la vie plus pratique',
      description: 'Recherche et production professionnelles de power banks, supports de téléphone, écouteurs Bluetooth et autres accessoires numériques, fournissant des solutions fiables pour votre vie numérique.',
      browseProducts: 'Parcourir les Produits',
      contactPurchase: 'Contact Achat',
      qualityGuarantee: 'Garantie Qualité',
      oneYearWarranty: 'Garantie 1 An',
      fastShipping: 'Expédition Rapide',
      capacity: 'mAh Grande Capacité',
      productModels: 'Modèles de Produits',
      satisfiedCustomers: 'Clients Satisfaits',
      industryExperience: "Années d'Expérience",
      positiveRate: 'Taux Positif'
    },
    products: {
      title: 'Centre de Produits',
      description: 'Produits d\'accessoires numériques soigneusement sélectionnés, chacun soumis à un contrôle qualité strict pour fournir une protection fiable pour votre vie numérique.',
      viewMore: 'Voir Plus de Produits',
      viewDetails: 'Voir les Détails',
      hot: 'Best-seller',
      categories: {
        charging: 'Produits de Charge',
        phoneAccessories: 'Accessoires de Téléphone',
        audio: 'Produits Audio',
        protection: 'Accessoires de Protection',
        carAccessories: 'Accessoires de Voiture'
      },
      items: {
        powerBank: {
          name: 'Power Bank Grande Capacité',
          description: '10000mAh grande capacité, support de charge rapide, double sortie USB, design mince et portable',
          features: ['10000mAh', 'Charge Rapide', 'Double Sortie', 'Design Mince']
        },
        phoneStand: {
          name: 'Support de Bureau pour Téléphone',
          description: 'Matériau en alliage d\'aluminium, angle réglable, compatible avec diverses tailles de téléphone, stable sans oscillation',
          features: ['Alliage d\'Aluminium', 'Angle Réglable', 'Compatibilité Universelle', 'Design Antidérapant']
        },
        bluetoothEarbuds: {
          name: 'Écouteurs Bluetooth Sans Fil',
          description: 'Puce Bluetooth 5.0, appels avec réduction de bruit, longue autonomie, opération tactile simple',
          features: ['Bluetooth 5.0', 'Appels avec Réduction de Bruit', 'Longue Autonomie', 'Opération Tactile']
        },
        phoneCase: {
          name: 'Coque de Protection Anti-chute',
          description: 'Protection de niveau militaire, design airbag à quatre coins, panneau arrière transparent montrant la beauté originale',
          features: ['Protection Militaire', 'Design Airbag', 'Panneau Arrière Transparent', 'Découpes Précises']
        },
        chargingCable: {
          name: 'Câble de Charge Rapide',
          description: 'Corps de câble tressé en nylon, support de charge rapide, longueur de 1,2 mètre, multiples interfaces disponibles',
          features: ['Tressé en Nylon', 'Support de Charge Rapide', '1,2m de Long', 'Multiples Interfaces']
        },
        carMount: {
          name: 'Support Magnétique de Voiture',
          description: 'Adsorption magnétique forte, opération à une main, rotation 360 degrés, ferme et stable sans tomber',
          features: ['Adsorption Magnétique Forte', 'Opération à Une Main', 'Rotation 360°', 'Ferme et Stable']
        }
      }
    },
    about: {
      title: 'À Propos de Nous',
      description: 'TechAccessory est un fabricant professionnel d\'accessoires numériques, dédié à fournir des produits d\'accessoires numériques de haute qualité et innovants pour les utilisateurs mondiaux.',
      mission: 'Notre Mission',
      missionText: 'Grâce à l\'innovation continue et au service de qualité, permettre à chacun de profiter d\'une expérience de vie numérique pratique, sûre et efficace.',
      values: 'Valeurs Fondamentales',
      valuesText: 'Qualité d\'abord, client d\'abord, innovation continue, opération honnête',
      team: 'Équipe Professionnelle',
      teamText: 'Avec des équipes senior de R&D, production et service, assurant que chaque produit atteint le niveau international avancé.'
    },
    contact: {
      title: 'Contactez-nous',
      subtitle: 'Obtenir un Devis et une Consultation de Coopération',
      description: 'Nous espérons établir une relation de coopération à long terme avec vous, en vous fournissant des produits et services de qualité.',
      companyName: 'Nom de l\'Entreprise',
      contactPerson: 'Personne de Contact',
      email: 'Adresse Email',
      phone: 'Téléphone de Contact',
      message: 'Contenu du Message',
      submit: 'Soumettre la Demande',
      address: 'Adresse de l\'Entreprise',
      businessHours: 'Heures d\'Ouverture',
      addressText: '8ème étage, Bâtiment R2-B, Zone Sud du Parc Technologique, District Nanshan, Shenzhen',
      hoursText: 'Lundi à Vendredi: 9:00-18:00',
      emailText: 'info@techaccessory.com',
      phoneText: '+86 400-8888-8888'
    },
    footer: {
      company: 'Shenzhen Tech Accessories Co., Ltd.',
      rights: 'Tous droits réservés',
      about: 'À Propos',
      products: 'Produits',
      contact: 'Contact',
      privacy: 'Politique de Confidentialité'
    }
  },
  'ru': {
    header: {
      home: 'Главная',
      products: 'Продукты',
      about: 'О нас',
      contact: 'Контакты'
    },
    hero: {
      title: 'Качественные Цифровые Аксессуары',
      subtitle: 'Делая жизнь удобнее',
      description: 'Профессиональные исследования и производство power bank, подставок для телефонов, Bluetooth наушников и других цифровых аксессуаров, обеспечивающих надежные решения для вашей цифровой жизни.',
      browseProducts: 'Просмотр Продуктов',
      contactPurchase: 'Контакт для Покупки',
      qualityGuarantee: 'Гарантия Качества',
      oneYearWarranty: 'Гарантия 1 Год',
      fastShipping: 'Быстрая Доставка',
      capacity: 'mAh Большая Емкость',
      productModels: 'Модели Продуктов',
      satisfiedCustomers: 'Довольные Клиенты',
      industryExperience: 'Лет Опыта',
      positiveRate: 'Положительная Оценка'
    },
    products: {
      title: 'Центр Продуктов',
      description: 'Тщательно отобранные продукты цифровых аксессуаров, каждый из которых проходит строгий контроль качества для обеспечения надежной защиты вашей цифровой жизни.',
      viewMore: 'Посмотреть Больше Продуктов',
      viewDetails: 'Посмотреть Детали',
      hot: 'Хит Продаж',
      categories: {
        charging: 'Зарядные Продукты',
        phoneAccessories: 'Аксессуары для Телефонов',
        audio: 'Аудио Продукты',
        protection: 'Защитные Аксессуары',
        carAccessories: 'Автомобильные Аксессуары'
      },
      items: {
        powerBank: {
          name: 'Power Bank Большой Емкости',
          description: '10000mAh большая емкость, поддержка быстрой зарядки, двойной USB выход, тонкий и портативный дизайн',
          features: ['10000mAh', 'Быстрая Зарядка', 'Двойной Выход', 'Тонкий Дизайн']
        },
        phoneStand: {
          name: 'Настольная Подставка для Телефона',
          description: 'Материал из алюминиевого сплава, регулируемый угол, совместим с различными размерами телефонов, стабильный без качания',
          features: ['Алюминиевый Сплав', 'Регулируемый Угол', 'Универсальная Совместимость', 'Нескользящий Дизайн']
        },
        bluetoothEarbuds: {
          name: 'Беспроводные Bluetooth Наушники',
          description: 'Чип Bluetooth 5.0, звонки с шумоподавлением, долгое время работы, простое сенсорное управление',
          features: ['Bluetooth 5.0', 'Звонки с Шумоподавлением', 'Долгое Время Работы', 'Сенсорное Управление']
        },
        phoneCase: {
          name: 'Защитный Чехол от Падений',
          description: 'Защита военного уровня, дизайн подушки безопасности в четырех углах, прозрачная задняя панель показывает оригинальную красоту',
          features: ['Военная Защита', 'Дизайн Подушки Безопасности', 'Прозрачная Задняя Панель', 'Точные Вырезы']
        },
        chargingCable: {
          name: 'Кабель Быстрой Зарядки',
          description: 'Нейлоновое плетеное тело кабеля, поддержка быстрой зарядки, длина 1,2 метра, доступны различные интерфейсы',
          features: ['Нейлоновое Плетение', 'Поддержка Быстрой Зарядки', '1,2м Длина', 'Различные Интерфейсы']
        },
        carMount: {
          name: 'Магнитная Автомобильная Подставка',
          description: 'Сильная магнитная адсорбция, управление одной рукой, поворот на 360 градусов, прочная и стабильная, не падает',
          features: ['Сильная Магнитная Адсорбция', 'Управление Одной Рукой', 'Поворот на 360°', 'Прочная и Стабильная']
        }
      }
    },
    about: {
      title: 'О Нас',
      description: 'TechAccessory - профессиональный производитель цифровых аксессуаров, стремящийся предоставлять высококачественные и инновационные продукты цифровых аксессуаров для пользователей по всему миру.',
      mission: 'Наша Миссия',
      missionText: 'Через постоянные инновации и качественное обслуживание, позволить каждому наслаждаться удобным, безопасным и эффективным опытом цифровой жизни.',
      values: 'Основные Ценности',
      valuesText: 'Качество прежде всего, клиент прежде всего, постоянные инновации, честная работа',
      team: 'Профессиональная Команда',
      teamText: 'С опытными командами R&D, производства и обслуживания, обеспечивающими, что каждый продукт достигает международного передового уровня.'
    },
    contact: {
      title: 'Свяжитесь с Нами',
      subtitle: 'Получить Предложение и Консультацию по Сотрудничеству',
      description: 'Мы надеемся установить долгосрочные отношения сотрудничества с вами, предоставляя качественные продукты и услуги.',
      companyName: 'Название Компании',
      contactPerson: 'Контактное Лицо',
      email: 'Email Адрес',
      phone: 'Контактный Телефон',
      message: 'Содержание Сообщения',
      submit: 'Отправить Запрос',
      address: 'Адрес Компании',
      businessHours: 'Часы Работы',
      addressText: '8-й этаж, здание R2-B, южная зона технопарка, район Наньшань, Шэньчжэнь',
      hoursText: 'Понедельник - Пятница: 9:00-18:00',
      emailText: 'info@techaccessory.com',
      phoneText: '+86 400-8888-8888'
    },
    footer: {
      company: 'Shenzhen Tech Accessories Co., Ltd.',
      rights: 'Все права защищены',
      about: 'О Нас',
      products: 'Продукты',
      contact: 'Контакты',
      privacy: 'Политика Конфиденциальности'
    }
  },
  'ar': {
    header: {
      home: 'الرئيسية',
      products: 'المنتجات',
      about: 'عن الشركة',
      contact: 'اتصل بنا'
    },
    hero: {
      title: 'إكسسوارات رقمية عالية الجودة',
      subtitle: 'جعل الحياة أكثر سهولة',
      description: 'البحث والإنتاج المهني لبطاريات الطاقة المحمولة وحوامل الهواتف وسماعات البلوتوث وغيرها من الإكسسوارات الرقمية، مما يوفر حلولاً موثوقة لحياتك الرقمية.',
      browseProducts: 'تصفح المنتجات',
      contactPurchase: 'اتصال الشراء',
      qualityGuarantee: 'ضمان الجودة',
      oneYearWarranty: 'ضمان سنة واحدة',
      fastShipping: 'شحن سريع',
      capacity: 'mAh سعة كبيرة',
      productModels: 'موديلات المنتجات',
      satisfiedCustomers: 'عملاء راضون',
      industryExperience: 'سنوات من الخبرة',
      positiveRate: 'معدل إيجابي'
    },
    products: {
      title: 'مركز المنتجات',
      description: 'منتجات إكسسوارات رقمية مختارة بعناية، كل منها يخضع لرقابة جودة صارمة لتوفير حماية موثوقة لحياتك الرقمية.',
      viewMore: 'عرض المزيد من المنتجات',
      viewDetails: 'عرض التفاصيل',
      hot: 'الأكثر مبيعاً',
      categories: {
        charging: 'منتجات الشحن',
        phoneAccessories: 'إكسسوارات الهاتف',
        audio: 'منتجات الصوت',
        protection: 'إكسسوارات الحماية',
        carAccessories: 'إكسسوارات السيارة'
      },
      items: {
        powerBank: {
          name: 'بطارية محمولة كبيرة السعة',
          description: '10000mAh سعة كبيرة، دعم الشحن السريع، مخرج USB مزدوج، تصميم نحيف ومحمول',
          features: ['10000mAh', 'شحن سريع', 'مخرج مزدوج', 'تصميم نحيف']
        },
        phoneStand: {
          name: 'حامل هاتف مكتبي',
          description: 'مادة سبائك الألومنيوم، زاوية قابلة للتعديل، متوافق مع أحجام هواتف مختلفة، مستقر بدون اهتزاز',
          features: ['سبائك الألومنيوم', 'زاوية قابلة للتعديل', 'توافق عالمي', 'تصميم مضاد للانزلاق']
        },
        bluetoothEarbuds: {
          name: 'سماعات بلوتوث لاسلكية',
          description: 'شريحة بلوتوث 5.0، مكالمات بإلغاء الضوضاء، عمر بطارية طويل، تشغيل باللمس بسيط',
          features: ['بلوتوث 5.0', 'مكالمات بإلغاء الضوضاء', 'عمر بطارية طويل', 'تشغيل باللمس']
        },
        phoneCase: {
          name: 'غطاء هاتف مقاوم للسقوط',
          description: 'حماية من الدرجة العسكرية، تصميم وسادة هوائية في الزوايا الأربع، لوحة خلفية شفافة تُظهر الجمال الأصلي',
          features: ['حماية عسكرية', 'تصميم وسادة هوائية', 'لوحة خلفية شفافة', 'فتحات دقيقة']
        },
        chargingCable: {
          name: 'كابل شحن سريع',
          description: 'جسم كابل مضفور بالنايلون، دعم الشحن السريع، طول 1.2 متر، واجهات متعددة متاحة',
          features: ['مضفور بالنايلون', 'دعم الشحن السريع', '1.2م طول', 'واجهات متعددة']
        },
        carMount: {
          name: 'حامل هاتف مغناطيسي للسيارة',
          description: 'امتصاص مغناطيسي قوي، تشغيل بيد واحدة، دوران 360 درجة، ثابت ومستقر بدون سقوط',
          features: ['امتصاص مغناطيسي قوي', 'تشغيل بيد واحدة', 'دوران 360°', 'ثابت ومستقر']
        }
      }
    },
    about: {
      title: 'عن الشركة',
      description: 'TechAccessory هي شركة تصنيع مهنية للإكسسوارات الرقمية، مكرسة لتوفير منتجات إكسسوارات رقمية عالية الجودة ومبتكرة للمستخدمين في جميع أنحاء العالم.',
      mission: 'مهمتنا',
      missionText: 'من خلال الابتكار المستمر والخدمة عالية الجودة، تمكين كل شخص من الاستمتاع بتجربة حياة رقمية مريحة وآمنة وفعالة.',
      values: 'القيم الأساسية',
      valuesText: 'الجودة أولاً، العميل أولاً، الابتكار المستمر، العمليات الصادقة',
      team: 'فريق مهني',
      teamText: 'مع فرق كبيرة من البحث والتطوير والإنتاج والخدمة، مما يضمن أن كل منتج يصل إلى المستوى الدولي المتقدم.'
    },
    contact: {
      title: 'اتصل بنا',
      subtitle: 'احصل على عرض أسعار واستشارة التعاون',
      description: 'نتطلع إلى إقامة علاقة تعاون طويلة الأمد معك، وتقديم منتجات وخدمات عالية الجودة لك.',
      companyName: 'اسم الشركة',
      contactPerson: 'شخص الاتصال',
      email: 'عنوان البريد الإلكتروني',
      phone: 'هاتف الاتصال',
      message: 'محتوى الرسالة',
      submit: 'إرسال الاستفسار',
      address: 'عنوان الشركة',
      businessHours: 'ساعات العمل',
      addressText: 'الطابق الثامن، المبنى R2-B، المنطقة الجنوبية للحديقة التقنية، منطقة نانشان، شنتشن',
      hoursText: 'الاثنين إلى الجمعة: 9:00-18:00',
      emailText: 'info@techaccessory.com',
      phoneText: '+86 400-8888-8888'
    },
    footer: {
      company: 'شركة شنتشن لإكسسوارات التكنولوجيا المحدودة',
      rights: 'جميع الحقوق محفوظة',
      about: 'عن الشركة',
      products: 'المنتجات',
      contact: 'اتصل بنا',
      privacy: 'سياسة الخصوصية'
    }
  }
};