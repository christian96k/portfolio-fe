import { MenuItem } from "../../components/a-framer-motion/infinite-menu/InfiniteMenu";
import { ContetItemProps } from "../../components/content-item/ContentItem";
import { IMAGES_PATH } from "../constants/images.path";

export const INFINITE_MENU_IMAGES: MenuItem[] = [
  {
    active: false,
    image: IMAGES_PATH.PHP,
    link: 'https://www.php.net/',
    title: 'PHP',
    description: 'Developed several web applications using PHP, including a content management system and a customer relationship management tool.'
  },
  {
    active: false,
    image: IMAGES_PATH.LARAVEL,
    link: 'https://laravel.com/',
    title: 'Laravel',
    description: 'Created multiple applications using Laravel, including a task management system and an online booking platform.'
  },
  {
    active: false,
    image: IMAGES_PATH.DIGITAL_OCEAN,
    link: 'https://www.digitalocean.com/',
    title: 'Digital Ocean',
    description: 'Deployed and managed applications on Digital Ocean, utilizing their cloud infrastructure for scalability and reliability.'
  },
  {
    active: false,
    image: IMAGES_PATH.VUE,
    link: 'https://vuejs.org/',
    title: 'Vue',
    description: 'Created multiple applications using Vue, including a blogging platform and an online store.'
  },
  {
    active: false,
    image: IMAGES_PATH.REACT,
    link: 'https://reactjs.org/',
    title: 'React',
    description: 'Developed several web applications using React, including a social media platform and a project management tool.'
  },
  {
    active: false,
    image: IMAGES_PATH.ANGULAR,
    link: 'https://angular.io/',
    title: 'Angular',
    description: 'Built numerous applications using Angular, including a large-scale e-commerce platform and a real-time chat application.'
  },
  {
    active: false,
    image: IMAGES_PATH.PYTHON,
    link: 'https://www.python.org/',
    title: 'Python',
    description: 'Developed several applications using Python, including a data analysis tool and a web scraping script.'
  },
  {
    active: false,
    image: IMAGES_PATH.MY_SQL,
    link: 'https://www.mysql.com/',
    title: 'MySQL',
    description: 'Designed and implemented databases using MySQL for various applications.'
  },
  {
    active: false,
    image: IMAGES_PATH.PG,
    link: 'https://www.postgresql.org/',
    title: 'PostgreSQL',
    description: 'Utilized PostgreSQL for database management in several projects.'
  },
  {
    active: false,
    image: IMAGES_PATH.JENKINS,
    link: 'https://www.jenkins.io/',
    title: 'Jenkins',
    description: 'Implemented continuous integration and continuous deployment pipelines using Jenkins for various projects.'
  },
  {
    active: false,
    image: IMAGES_PATH.DOCKER,
    link: 'https://www.docker.com/',
    title: 'Docker',
    description: 'Utilized Docker for containerization of applications, enabling easy deployment and scaling.'
  },
  {
    active: false,
    image: IMAGES_PATH.THREE_JS,
    link: 'https://threejs.org/',
    title: 'Three.js',
    description: 'Developed interactive 3D visualizations and animations for the web using Three.js, including product showcases and creative portfolio elements.'
  },
];

export const COMPANY_PROJECTS: {
    link: string;
    text: string;
    image: string;
    children: {
      link: string;
      text: string;
      image: string;
      children: never[];
    }[];
}[] = [
  { link: '', text: 'Taal', image: IMAGES_PATH.TAAL, children: 
    [
      { link: '', text: 'Whirlpool', image: IMAGES_PATH.WHIRLPOOL, children: [] },
      { link: '', text: 'Indesit', image: IMAGES_PATH.INDESIT, children: [] },
      { link: '', text: 'Reservare', image: IMAGES_PATH.RESERVARE, children: [] }

    ]
  },
  { link: '', text: 'Accenture', image: IMAGES_PATH.ACCENTURE, children: 
    [
      { link: '', text: 'NewHolland', image: IMAGES_PATH.NHHOLLAND, children: [] },
      { link: '', text: 'Caseih', image: IMAGES_PATH.CASEIH, children: [] },
      { link: '', text: 'NH Construction', image: IMAGES_PATH.NHOLLAND_CON, children: [] },
      { link: '', text: 'Caseih Construction', image: IMAGES_PATH.CASEIH_CON, children: [] }
    ] 
  },
  { link: '', text: 'Kpi6', image: IMAGES_PATH.KPI6, children: 
    [
      { link: '', text: 'Odience', image: IMAGES_PATH.ODIENCE, children: [] },
      { link: '', text: 'MarketEar', image: IMAGES_PATH.MARKETEAR, children: [] },
    ] 
  },
  { link: '', text: 'Deas', image: IMAGES_PATH.DEAS, children: 
    [
      { link: '', text: 'Orion', image: IMAGES_PATH.ORION, children: [] },
      { link: '', text: 'Archimede', image: IMAGES_PATH.ARCHIMEDE, children: [] },
      { link: '', text: 'Mepawatch', image: IMAGES_PATH.MWATCH, children: [] },
      { link: '', text: 'Efesto', image: IMAGES_PATH.EFESTO, children: [] },
      { link: '', text: 'Efesto', image: IMAGES_PATH.CWATCH, children: [] },

    ] 
  },
 
];

export const PERSONAL_PROJECTS: {
  color: string;
  size: number;
  items: ContetItemProps[];
  title: string;
  className: string;
}[] = [
  {
    color: '#017c60',
    size: 1.3,
    items: [
      {
        href: '#projects',
        src: IMAGES_PATH.COMING_SOON,
        alt: '',
        imgWidth: 55,
      },
      {
        href: '#projects',
        src: IMAGES_PATH.PROTO_3D,
        alt: '',
        imgWidth: 65,
      },
      {
        href: '#projects',
        src: IMAGES_PATH.MOTO_3D,
        alt: '',
        imgWidth: 65,
      }
    ],
    title: '3D',
    className: 'custom-folder'
  },
  {
    color: '#017c60',
    size: 1.3,
    items:[
      {
        href: 'https://www.figma.com/design/UxtItKtgcIStcWorYC73yy/PORTFOLIO-GRAPHIC-DESIGNER?node-id=0-1&t=rbzJm5L8nA42aPwL-1',
        src: IMAGES_PATH.UX_UI,
        alt: '',
        imgWidth: 60,
      },
      {
        href: '#projects',
        src: IMAGES_PATH.MITRE,
        alt: '',
        imgWidth: 65,
      },
      {
        href: 'http://64.227.68.251:5173/',
        src: IMAGES_PATH.METRO_GRAPH,
        alt: '',
        imgWidth: 65,
      }
    ],
    title: 'Web',
    className: 'custom-folder'
  },
  {
    color: '#017c60',
    size: 1.3,
    items: [
        {
          href: 'https://gitlab.com/ChristianCastro96',
          src: IMAGES_PATH.GIT_LAB,
          alt: '',
          imgWidth: 65,
        },
        {
          href: '#projects',
          src: IMAGES_PATH.COMING_SOON,
          alt: '',
          imgWidth: 65,
        },
        {
          href: 'https://github.com/christian96k',
          src: IMAGES_PATH.GIT_HUB,
          alt: '',
          imgWidth: 65,
        },
        {
          href: 'https://github.com/christian96k',
          src: IMAGES_PATH.GIT_HUB,
          alt: '',
          imgWidth: 65,
        }
    ],
    title: 'Git',
    className: 'custom-folder'
  }
];