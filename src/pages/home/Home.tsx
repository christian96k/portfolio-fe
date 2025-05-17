
import "./Home.scss";
import { useCallback, useRef, useState } from "react";
import InfiniteMenu, { MenuItem } from "../../components/a-framer-motion/infinite-menu/InfiniteMenu";
import ContentDetail from "../../components/content-detail/ContentDetail";
import ContentHeading from "../../components/content-heading/ContentHeading";
import Header from "../../components/header/Header";
import { IMAGES_PATH } from "../../core/constants/images.path";
import FlowingMenu from "../../components/a-framer-motion/flowing-menu/FlowingMenu";
import Folder from "../../components/a-framer-motion/folder/Folder";
import ContentItem, { ContetItemProps } from "../../components/content-item/ContentItem";
import { INFINITE_MENU_IMAGES, COMPANY_PROJECTS, PERSONAL_PROJECTS } from "../../core/data/data.set";
import ImageZoomLens from "../../components/image-zoom-lens/ImageZoomLens";
import { isMobile } from "react-device-detect";

function Home() {
  const [inifiniteMenu, setInfiniteMenu] = useState<MenuItem[]>(INFINITE_MENU_IMAGES);
  const listRef = useRef<HTMLUListElement | null>(null);
  const listItemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [activeProject, setActiveProject ] = useState<ContetItemProps | null>(PERSONAL_PROJECTS.find(item => item.active)?.items[2] || null); 

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
      {/* HEADER */}
      <div className="home__header col-12">
        <Header/>
      </div>

      {/* HOME */}
      <section id='home' className="home__introduction d-flex flex-column justify-content-center align-items-center">

        <ContentHeading 
          title='Senior Software Engineer'
          description='I have worked on various projects, ranging from web applications to mobile apps. My expertise lies in full-stack development, and I am proficient in languages such as JavaScript, TypeScript, Python, Sql...'
          rotatingText={['Frontend', 'Backend', 'Devops']}
        />

        <ContentDetail
          id="home-content"
          order="left"
          img_src={IMAGES_PATH.PROFILE_PICTURE}
          description="I am a Senior Software Engineer with over 10 years of experience across a range of companies—from large consulting firms to product-driven organizations. I have worked on a variety of projects, including e-commerce platforms (B2B and B2C), product configurators, market research tools, and cybersecurity products. Starting my career as a frontend developer, I progressively expanded into full-stack development, mastering technologies such as JavaScript, TypeScript, Python, and Java. Over the years, I’ve played a key role in shaping software architecture, with a strong emphasis on frontend structure, scalability, and performance. I’ve led architectural decisions, introduced modular design patterns, and established development guidelines to ensure code quality and maintainability across teams. 
This blend of hands-on coding and architectural leadership has allowed me to deliver robust and user-centric applications, while driving forward the technical direction of the products I’ve worked on."
        />

      </section>  

      {/* CAREER */}
      <section className="home__career" id="career">
        <ContentHeading 
          title='Career'
          description='During my career, I have had the opportunity to work with various companies and clients, including Taal, Accenture, Kpi6, and Deas SPA. I have been involved in projects for well-known brands such as Whirlpool, Indesit, New Holland, Case IH, and many others.'
        />
        <div className="col-12 " style={{ height: '600px', position: 'relative' }}>
          <FlowingMenu items={COMPANY_PROJECTS} />
        </div>
      </section>

      {/* ABOUT */}
      <section id='about' className="home__about m-0 row justify-content-center align-items-center">
        <ContentHeading 
          title='Technical Skills'
          description='I have a strong foundation in various programming languages and frameworks, including JavaScript, Python, Sql. I am also proficient in using tools such as Docker, Jenkins, and Git for version control and continuous integration.'
          rotatingText={INFINITE_MENU_IMAGES.map((item) => item.title.toUpperCase())}
        />
        <div className="col-12 d-flex flex-column flex-md-row rounded-3  border-gradient right py-3 py-md-5 col-12 backdrop-blur-10 ">

          <div className='home__about__infinite p-4 p-md-1 mt-4 mt-md-0 col-12 col-md-8 rounded-3 order-2 order-md-1' style={{ position: 'relative' }}>
            <InfiniteMenu items={INFINITE_MENU_IMAGES} activeItemChange={(index:number)=> handleActiveItemChange(index)}/>
          </div>

          <div className="home__about__list  col-12  col-md-4 mb-5 mb-md-0 order-1 order-md-2" >
            {/* <ul ref={listRef} className="home__about__list pe-2 list-unstyled overflow-y-auto  py-1" >
              {inifiniteMenu.map((item, index) => (
                <li ref={(el) => { listItemRefs.current[index] = el; }} key={index} className={`d-flex flex-column justify-content-center align-items-center border-gradient backdrop-blur-10 rounded-3  mb-2 p-2 ${item.active ? 'active' : ''}`}>
                  <img width={20} height={20} src={item.image} alt={item.title} className="img-fluid" />
                  <h6 className="font-size-14">{item.title}</h6>
                </li>
              ))}
            </ul> */}

            {inifiniteMenu.map((item, index) => (
              <li ref={(el) => { listItemRefs.current[index] = el; }} style={{maxHeight: '70px'}} key={index} className={`d-flex flex-column justify-content-center align-items-center border-gradient backdrop-blur-10 rounded-3  p-2 ${item.active ? 'active' : ''}`}>
                <img key={index} width={30} height={30} src={item.image} alt={item.title} className="img-fluid " />
                <h6 className="font-size-14">{item.title}</h6>
              </li>

            ))}
           
            
          </div>
        </div>

      </section>  

      {/* PROJECTS */}        
      <section id='projects' className="home__projects d-flex flex-column justify-content-center align-items-center">

        <ContentHeading 
          title='My Projects'
          description='My personal projects include a variety of web applications, mobile apps, and tools that I have developed to enhance my skills and showcase my abilities. These projects demonstrate my proficiency in various programming languages and frameworks, as well as my ability to work with different technologies.'
          rotatingText={['Metro Graph', 'Scripting Utils', 'Libraries']}
        />

        
    
        <section className="home__projects__view d-flex flex-column flex-md-row  col-12 p-2 p-md-5 align-items-center border-gradient left backdrop-blur-100 rounded-3">
          <div className="home__projects__view__active col-12 col-md-10 order-2 order-md-1">
              {activeProject &&
                <div className="home__projects__view__active__content"  key={activeProject.name} >
                  <h4 className="home__projects__view__active__title text-center p-2">
                    {activeProject.name}
                  </h4>
                  <div className="d-flex mb-5 mb-md-0">
                    <div className="w-40 home__projects__view__active__image rounded-3 p-3 border-gradient right flex-column gap-3 d-flex justify-content-center align-items-center">
                      {activeProject.imageCases?.map((item, index) => (
                        <ImageZoomLens key={index} zoom={9.5} lensSize={150} src={item} />
                      ))}
                    </div>
                    <div className="description w-60">
                      <p className="p-2">{activeProject.description}</p>
                      <a
                        target="blank"
                        href={activeProject.href}
                        className="p-2 text-truncate tex text-info"
                      >
                        {'Visit Link'}
                      </a>
                    </div>
                  </div>
                </div>
              }

          </div> 
              
          <div className="order-1 order-md-2 col-12 col-md-2 d-flex flex-md-column justify-content-center align-items-center gap-2 gap-md-5" style={{ height: '100%', position: 'relative' }}>
            {PERSONAL_PROJECTS.map((project, index) => 
              <div key={`${index}-${project.title}`} className="py-5 d-flex justify-content-center align-items-center">
                <Folder title={project.title} size={isMobile ? 0.5 : 1} color={project.color} items={
                  project.items.map((item, index) => (
                    <ContentItem
                      key={`${index}-${item.src}`}
                      src={item.src}
                      alt={item.alt}
                      href={item.href}
                      imgWidth={item.imgWidth}
                      description={item.description}
                      name={item.name}
                      onSetActive={()=> setActiveProject(item)}
                    />
                  ))
                } />
              </div>
            )}
          </div>
          
        </section>    


      </section>  

    </main>
  )
}

export default Home