
import { useState } from "react";
import InfiniteMenu, { MenuItem } from "../../components/a-framer-motion/infinite-menu/InfiniteMenu";
import ContentDetail from "../../components/content-detail/ContentDetail";
import ContentHeading from "../../components/content-heading/ContentHeading";
import Header from "../../components/header/Header";
import { IMAGES_PATH } from "../../core/constants/images.path";

import "./Home.scss";

export const images:MenuItem[] = [
  {
      active:false,
      image: IMAGES_PATH.PHP,
      link: 'https://google.com/',
      title: 'PHP',
      description: 'Developed several web applications using PHP, including a content management system and a customer relationship management tool.'
  },
  {
      active:false,
      image: IMAGES_PATH.LARAVEL,
      link: 'https://google.com/',
      title: 'Laravel',
      description: 'Created multiple applications using Laravel, including a task management system and an online booking platform.'
  },
  {  
      active:false,
      image: IMAGES_PATH.ANGULAR,
      link: 'https://google.com/',
      title: 'Angular',
      description: 'Built numerous applications using Angular, including a large-scale e-commerce platform and a real-time chat application.'
  },
  {
      active:false,
      image: IMAGES_PATH.VUE,
      link: 'https://google.com/',
      title: 'Vue',
      description: 'Created multiple applications using Vue, including a blogging platform and an online store.'
  },
  {
      active:false,
      image: IMAGES_PATH.PYTHON,
      link: 'https://google.com/',
      title: 'Python',
      description: 'Developed several applications using Python, including a data analysis tool and a web scraping script.'
  },
  {
      active:false,
      image: IMAGES_PATH.MY_SQL,
      link: 'https://google.com/',
      title: 'MySQL',
      description: 'Designed and implemented databases using MySQL for various applications.'
  },
  {
      active:false,
      image: IMAGES_PATH.PG,
      link: 'https://google.com/',
      title: 'PostgreSQL',
      description: 'Utilized PostgreSQL for database management in several projects.'
  },
  {
      active:false,
      image: IMAGES_PATH.REACT,
      link: 'https://google.com/',
      title: 'React',
      description: 'Developed several web applications using React, including a social media platform and a project management tool.'
  },
  {
      active:false,
      image: IMAGES_PATH.JENKINS,
      link: 'https://google.com/',
      title: 'Jenkins',
      description: 'Implemented continuous integration and continuous deployment pipelines using Jenkins for various projects.'
  },
  {
      active:false,
      image: IMAGES_PATH.DOCKER,
      link: 'https://google.com/',
      title: 'Docker',
      description: 'Utilized Docker for containerization of applications, enabling easy deployment and scaling.'
  },
    
]

function Home() {
  const [inifiniteMenu, setInfiniteMenu] = useState<MenuItem[]>(images);


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


      <section id='about' className="home__about row justify-content-center align-items-center">
        <ContentHeading 
          title='Tecnhical Skills'
          description='I have a strong foundation in various programming languages and frameworks, including JavaScript, TypeScript, Python, and Java. I am also proficient in using tools such as Docker, Jenkins, and Git for version control and continuous integration.'
          rotatingText={['REACT', 'ANGULAR', 'VUE', 'PHP', 'LARAVEL', 'PYTHON', 'MYSQL', 'POSTGRESQL', 'DOCKER', 'JENKINS']}
        />

        <div className='col-12 col-md-9 border-gradient backdrop-blur-5 rounded-3' style={{ height: '300px', position: 'relative' }}>
          <InfiniteMenu items={inifiniteMenu}/>
        </div>

        <div className="col-12 col-md-3 overflow-y-auto" style={{ height: '300px', position: 'relative' }}>
          <ul className="home__about__list list-unstyled ">
            {images.map((item, index) => (
              <li key={index} className={`d-flex flex-column justify-content-center align-items-center border-gradient backdrop-blur-10 rounded-3  mb-2 p-2 ${item.active ? 'active' : ''}`}>
                <img width={30} height={30} src={item.image} alt={item.title} className="img-fluid" />
                <h6 className="font-size-14">{item.title}</h6>
                <p className="font-size-12">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

      </section>  


      {/* // PROJECTS */}
      {/* <section id='projects' className="home__projects d-flex flex-column justify-content-center align-items-center">
        <ContentHeading
          title='Side Projects'
          description='I have worked on several side projects that showcase my skills and interests. These projects range from web applications to mobile apps, and I am always looking for new challenges to tackle.'
          rotatingText={[]}
        />
        <ContentDetail
          id="home-content"
          order="right"
          img_src={IMAGES_PATH.PROFILE_PICTURE}
          description="I have worked on several side projects that showcase my skills and interests. These projects range from web applications to mobile apps, and I am always looking for new challenges to tackle. Some of my notable projects include a personal portfolio website, a task management app, and a weather forecasting app."
        />
        <ContentList
          images={[
            { src: IMAGES_PATH.ANGULAR, title: 'Angular' },
            { src: IMAGES_PATH.REACT, title: 'React' },
            { src: IMAGES_PATH.VUE, title: 'Vue' },
            { src: IMAGES_PATH.ANGULAR, title: 'Angular' },
            { src: IMAGES_PATH.REACT, title: 'React' },
            { src: IMAGES_PATH.VUE, title: 'Vue' }
          ]}
        />
      </section> */}

    </main>
  )
}

export default Home