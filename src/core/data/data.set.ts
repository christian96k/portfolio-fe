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
    title: 'D.Ocean',
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
    title: 'PGSQL',
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
  active: boolean;
  size: number;
  items: ContetItemProps[];
  title: string;
  className: string;
}[] = [
  {
    color: '#017c60',
    active: false,
    size: 1.3,
    items: [
      {
        href: '#projects',
        src: IMAGES_PATH.COMING_SOON,
        name: 'COMING_SOON',
        description: 'Currently in development',
        alt: '',
        imgWidth: 55,
        imageCases:[
          IMAGES_PATH.COMING_SOON,
        ]
      },
      {
        href: '#projects',
        src: IMAGES_PATH.PROTO_3D,
        description: 'Currently in development',
        name: 'PROTO_3D',
        alt: '',
        imgWidth: 65,
        imageCases:[
          IMAGES_PATH.PROTO_3D
        ]
      },
      {
        href: '#projects',
        src: IMAGES_PATH.MOTO_3D,
        name: 'MOTO_3D',
        description: 'Currently in development',
        alt: '',
        imgWidth: 65,
        imageCases:[
          IMAGES_PATH.MOTO_3D
        ]
      }
    ],
    title: '3D',
    className: 'custom-folder'
  },
  {
    color: '#017c60',
    active: true,
    size: 1.3,
    items:[
      {
        href: 'https://www.figma.com/design/UxtItKtgcIStcWorYC73yy/PORTFOLIO-GRAPHIC-DESIGNER?node-id=0-1&t=rbzJm5L8nA42aPwL-1',
        src: IMAGES_PATH.UX_UI,
        name: 'UX_UI',
        description: 'This project was created for a 3D graphic designer who needed a professional online presence to showcase their work and sell video-based courses through a subscription model. The main goal was to build a modern, user-friendly portfolio website with integrated e-learning features. The designer specializes in 3D modeling and prototype creation, and wanted to offer high-quality training content on their own platform — without relying on third-party services — allowing users to subscribe and access video lessons on demand. The key objectives were to present the designer’s portfolio in an engaging and professional way, provide a video-based e-learning platform with subscription access, allow the designer to manage content and users independently, and deliver a fast, responsive, and mobile-friendly user experience. I handled the entire development process, from initial UI/UX design in Figma to full-stack implementation and deployment. I used Angular for the frontend, Node.js with Express for the backend, MongoDB for the database, and DigitalOcean for hosting and video streaming. Key features include a dynamic and filterable 3D project portfolio, subscription-based access to online video courses, user authentication and profile management, an admin dashboard for managing content and courses, and a fully responsive design optimized for performance.',
        alt: '',
        imgWidth: 60,
        imageCases:[
          IMAGES_PATH.UX_UI
        ]
      },
      {
        href: '#projects',
        src: IMAGES_PATH.MITRE,
        name: 'MITRE',
        description: 'I developed a personal project to demonstrate my skills for a cybersecurity company. The project visualizes the MITRE ATT&CK dataset by fetching data from the official GitHub APIs, which I simulated using OpenAPI Mocker. The main goal was to organize a large amount of MITRE data covering various phases and techniques and to showcase my abilities in frontend architecture and organization. Built with React, I implemented Redux for state management, applied the Facade design pattern for modularity, created a custom SCSS setup tailored to the project’s needs, and integrated an authentication system using SSO with Auth0. This project highlights my proficiency in building scalable and maintainable frontend applications with clean architecture principles.',
        alt: '',
        imgWidth: 65,
        imageCases:[
          IMAGES_PATH.MITRE
        ]
      },
      {
        href: 'http://64.227.68.251:5173/',
        src: IMAGES_PATH.METRO_GRAPH,
        name: 'METRO_GRAPH',
        description: 'I created a personal project in React using Cytoscape.js with the main goal of representing the Rome metro map. The objective was to accurately position metro stations and stops based on precise geocodes and to calculate distances and routes from point A to point B, considering that Rome’s metro has three intersecting lines: A, B (with B1 branch), and C. The official data was sourced from the public ATAC Roma website. Using this graph-based representation, it became possible to extract various information without relying on external providers like Google Maps. Based on the geocode dataset, the graph enables direct calculations of routes, estimated travel times, distances, and optimal paths, providing a comprehensive metro navigation tool. Users can also navigate through the various stops to view key information such as descriptions and available services, save and reset routes, and visualize nodes differentiated by line intersections or other criteria. This interactive and data-rich map enhances user engagement and offers practical functionalities beyond simple map visualization.',
        alt: '',
        imgWidth: 65,
        imageCases:[
          IMAGES_PATH.METRO_GRAPH,
        ]
      }
    ],
    title: 'Web',
    className: 'custom-folder'
  },
  {
    color: '#017c60',
    active: false,
    size: 1.3,
    items: [
        {
          href: 'https://gitlab.com/ChristianCastro96',
          src: IMAGES_PATH.GIT_LAB,
          description: 'My GitLab profile, where I started my journey in the world of programming. I have worked on various projects since i started my career, including some old projects made on PHP and Laravel made during my studies with Aulab which is a bootcamp in Italy. I have also worked on some personal projects, including a web application for managing tasks and a simple e-commerce platform. I am always looking for new challenges and opportunities to learn and grow as a developer.',
          name: 'GIT_LAB',
          alt: 'My',
          imgWidth: 65,
          imageCases:[
            IMAGES_PATH.GIT_LAB
          ]
        },
        {
          href: '#projects',
          src: IMAGES_PATH.COMING_SOON,
          name: 'COMING_SOON',
          description: 'Currently in development',
          alt: '',
          imgWidth: 55,
          imageCases:[
            IMAGES_PATH.COMING_SOON
          ]
        },
        {
          href: 'https://github.com/christian96k',
          src: IMAGES_PATH.GIT_HUB,
          name: 'GIT_HUB',
          description: 'My GitHub profile, where I showcase my projects you can find a variety of repositories, including personal projects, some collaborative activities. Feel free to explore my work and reach out if you have any questions or would like to collaborate on a project. I am always open to new opportunities and challenges.',
          alt: '',
          imgWidth: 65,
          imageCases:[
            IMAGES_PATH.GIT_HUB
          ]
        },
        {
          href: 'https://github.com/christian96k',
          src: IMAGES_PATH.GIT_HUB,
          name: 'GIT_HUB',
          description: 'GitHub',
          alt: '',
          imgWidth: 65,
          imageCases:[
            IMAGES_PATH.GIT_HUB
          ]
        }
    ],
    title: 'Git',
    className: 'custom-folder'
  }
];