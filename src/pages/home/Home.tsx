
import { useCallback, useRef, useState } from "react";
import InfiniteMenu, { MenuItem } from "../../components/a-framer-motion/infinite-menu/InfiniteMenu";
import ContentDetail from "../../components/content-detail/ContentDetail";
import ContentHeading from "../../components/content-heading/ContentHeading";
import Header from "../../components/header/Header";
import { IMAGES_PATH } from "../../core/constants/images.path";

import "./Home.scss";

const images: MenuItem[] = [
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
];

function Home() {
  const [inifiniteMenu, setInfiniteMenu] = useState<MenuItem[]>(images);
  const listRef = useRef<HTMLUListElement | null>(null);
  const listItemRefs = useRef<(HTMLLIElement | null)[]>([]);



  const handleActiveItemChange = useCallback((index: number) => {
    setInfiniteMenu(prevMenu => prevMenu.map((item, i) => ({
      ...item,
      active: i === index
    })));
    const element = listItemRefs.current[index];
    if (listRef.current && element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center', 
      });
    }
  }, [listItemRefs, listRef]);
  
  return (
    <main className="home">
      {/* // HEADER */}

      <div className="home__header col-12">
        <Header/>
      </div>

      {/* // HOME */}
      <section id='home' className="home__introduction d-flex flex-column justify-content-center align-items-center">

        <ContentHeading 
          title='Senior Software Engineer'
          description='I have worked on various projects, ranging from web applications to mobile apps. My expertise lies in full-stack development, and I am proficient in languages such as JavaScript, TypeScript, Python, and Java.'
          rotatingText={['Frontend', 'Backend', 'Devops']}
        />

        <ContentDetail
          id="home-content"
          order="left"
          img_src={IMAGES_PATH.PROFILE_PICTURE}
          description="I am a Senior Software Engineer with over 10 years of experience in the industry. I have worked on various projects, ranging from web applications to mobile apps. My expertise lies in full-stack development, and I am proficient in languages such as JavaScript, TypeScript, Python, and Java. I am a Senior Software Engineer with over 10 years of experience in the industry. I have worked on various projects, ranging from web applications to mobile apps. My expertise lies in full-stack development, and I am proficient in languages such as JavaScript, TypeScript, Python, and Java."
        />

      </section>  


      <section id='about' className="home__about col-12 row justify-content-center align-items-center">
        <ContentHeading 
          title='Technical Skills'
          description='I have a strong foundation in various programming languages and frameworks, including JavaScript, TypeScript, Python, and Java. I am also proficient in using tools such as Docker, Jenkins, and Git for version control and continuous integration.'
          rotatingText={images.map((item) => item.title.toUpperCase())}
        />

        <div className='home__about__infinite border-gradient right py-4 col-12 col-md-9 backdrop-blur-5 rounded-3 order-2 order-md-1' style={{ position: 'relative' }}>
          <InfiniteMenu items={images} activeItemChange={(index:number)=> handleActiveItemChange(index)}/>
        </div>

        <div className="home__about__list  col-12  col-md-3 mb-5 mb-md-0 order-1 order-md-2" >
          <ul ref={listRef} className="home__about__list pe-0 pe-md-2 list-unstyled overflow-y-auto  py-2" >
            {inifiniteMenu.map((item, index) => (
              <li ref={(el) => { listItemRefs.current[index] = el; }} key={index} className={`d-flex flex-column justify-content-center align-items-center border-gradient backdrop-blur-10 rounded-3  mb-2 p-2 ${item.active ? 'active' : ''}`}>
                <img width={30} height={30} src={item.image} alt={item.title} className="img-fluid" />
                <h6 className="font-size-14">{item.title}</h6>
                {/* <p className="font-size-12">{item.description}</p> */}
              </li>
            ))}
          </ul>
        </div>

      </section>  


      <section>
        <h3 className="text-center"> {'WORK IN PROGRESS'}</h3>
      </section>


     
    </main>
  )
}

export default Home