import ContentDetail from "../../components/content-detail/ContentDetail";
import ContentHeading from "../../components/content-heading/ContentHeading";
import ContentList from "../../components/content-list/ContentList";
import Header from "../../components/header/Header";
import { IMAGES_PATH } from "../../core/constants/images.path";

import "./Home.scss";
function Home() {
  return (
    <main className="home text-center">
      {/* // HEADER */}

      <div className="home__header">
        <Header/>
      </div>

      {/* // HOME */}
      <section id='home' className="home__introduction d-flex flex-column justify-content-center align-items-center">
        <ContentHeading 
          title='Resume information as a Senior Software Engineer'
          description='This is a simple portfolio website created using React, Typescript, and Bootstrap. It showcases my skills and projects.'
        />
        <ContentDetail
          id="home-content"
          order="left"
          img_src={IMAGES_PATH.PROFILE_PICTURE}
          description="I am a Senior Software Engineer with over 10 years of experience in the industry. I have worked on various projects, ranging from web applications to mobile apps. My expertise lies in full-stack development, and I am proficient in languages such as JavaScript, TypeScript, Python, and Java."
        />
      </section>

      <section id='about' className="home__about d-flex flex-column justify-content-center align-items-center">
        <ContentHeading
          title='Information about me'
          description='I am a passionate software engineer with a strong background in web development and a keen interest in learning new technologies. I enjoy solving complex problems and building scalable applications.'
        />
        <ContentDetail
          id="home-content"
          order="right"
          img_src={IMAGES_PATH.PROFILE_PICTURE}
          description="Tech stack: I have experience with various technologies, including React, Angular, Vue.js, Node.js, Express.js, and MongoDB. I am also familiar with cloud platforms such as AWS and Azure. I am always eager to learn new technologies and improve my skills."
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