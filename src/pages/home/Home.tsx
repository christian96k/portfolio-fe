
import ContentDetail from "../../components/content-detail/ContentDetail";
import ContentHeading from "../../components/content-heading/ContentHeading";
import ContentList from "../../components/content-list/ContentList";
import Header from "../../components/header/Header";
import { IMAGES_PATH } from "../../core/constants/images.path";

import "./Home.scss";
function Home() {
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
          description='This is a simple portfolio website created using React, Typescript, and Bootstrap. It showcases my skills and projects.'
          rotatingText={['Frontend', 'Backend', 'Devops']}
        />
        <ContentDetail
          id="home-content"
          order="left"
          img_src={IMAGES_PATH.PROFILE_PICTURE}
          description="I am a Senior Software Engineer with over 10 years of experience in the industry. I have worked on various projects, ranging from web applications to mobile apps. My expertise lies in full-stack development, and I am proficient in languages such as JavaScript, TypeScript, Python, and Java. I am a Senior Software Engineer with over 10 years of experience in the industry. I have worked on various projects, ranging from web applications to mobile apps. My expertise lies in full-stack development, and I am proficient in languages such as JavaScript, TypeScript, Python, and Java."
        />
      </section>  


      {/* // PROJECTS */}
      <section id='projects' className="home__projects d-flex flex-column justify-content-center align-items-center">
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
      </section>

    </main>
  )
}

export default Home