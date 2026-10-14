import arrow from '../assets/icons/right-arrow.svg';
import video from '../assets/icons/video.svg';
import photo from '../assets/icons/photo.svg';
import sparkles from '../assets/icons/sparkles.svg';
import paint from '../assets/icons/paint.svg';
function Project(){
    return(
        <div className="project-container-main">
            <div className="project-container-top"><h1>Pro<span className="text-orange">jects</span></h1>
            <p>Here are some of the projects I've build,worked on, and collaborated with.<br/>
            Each projects represents a step in my journey to become a better developer<br/>
            and creator.</p>
            </div>
           
            <div className="project-container">
                <div className="project-feature">
                    <div className="project-feature-1">
                        <div className="project-feature-image"></div>
                        <div className="project-feature-details">
                            <h2>RidersConnect</h2>
                            <p>A motorcycle rider community application focused 
                            on group location sharing,communication and tourism.</p>
                            <div className="project-tech">
                                <span className="project-tech-stack">Flutter</span>
                                <span className="project-tech-stack">Laravel</span>
                                <span className="project-tech-stack">Google Maps API</span>
                                <span className="project-tech-stack">Reverb</span>
                            </div>
                            <button className="project-view-btn"><span>View Project</span><img src={arrow} className='arrow-icon'/></button>
                        </div>
                    </div>
                    <div className="project-feature-2">
                        <h2>Game & Content Specialist</h2>
                        <span>Work Experience</span>
                        <p>Working on game and digital content production while exploring creative and technical workflow</p>
                        <div className='project-tech-icon'>
                            <div className='project-tech-icon-1'><img src={video} className='project-icon'/><span>Video Editing</span></div>
                            <div className='project-tech-icon-1'><img src={photo} className='project-icon'/><span>Photo Editing</span></div>
                            <div className='project-tech-icon-1'><img src={sparkles} className='project-icon'/><span>Animation</span></div>
                            <div className='project-tech-icon-1'><img src={paint} className='project-icon'/><span>Creative Production</span></div>
                        </div>
                        <button className="project-view-btn"><span>View Project</span><img src={arrow} className='arrow-icon'/></button>
                        
                    </div>
                </div>
                <div className="project-side">
                    <div className="project-side-1">
                        <div className='project-image'></div>
                             <h2>Portfolio Website</h2>
                            <p>A responsive personal portfolio website developed with React to showcase my skills, projects, and creative work through a modern and user-friendly design..</p>
                            <div className="project-tech">
                                <span className="project-tech-stack">React</span>
                                <span className="project-tech-stack">HTML</span>
                                <span className="project-tech-stack">Javasript</span>
                                
                                <span className="project-tech-stack">CSS</span>
                            </div>
                            <button className="project-view-btn"><span>View Project</span><img src={arrow} className='arrow-icon'/></button>
                    </div>
                    <div className="project-side-1">
                        <div className='project-image-1'></div>
                             <h2>CoffeeShop Website</h2>
                            <p>A PHP and MySQL coffee shop website featuring CRUD operations, order management, automatic price calculation, and receipt generation.</p>
                            <div className="project-tech">
                                <span className="project-tech-stack">PHP</span>
                                <span className="project-tech-stack">MySQL</span>
                                <span className="project-tech-stack">CSS</span>
                                <span className="project-tech-stack">Javascript</span>
                                <span className="project-tech-stack">HTML</span>
                            </div>
                            <button className="project-view-btn"><span>View Project</span><img src={arrow} className='arrow-icon'/></button>
                    </div>
                    <div className="project-side-1">
                        <div className='project-image-2'></div>
                             <h2>Video Editing</h2>
                            <p>Creative video editing with smooth transitions, visual effects, and engaging storytelling.</p>
                            <div className="project-tech">
                                <span className="project-tech-stack">Capcut</span>
                                <span className="project-tech-stack">Photoshop</span>
                            
                                <span className="project-tech-stack">ChatGPT</span>
                            </div>
                            <button className="project-view-btn"><span>View Project</span><img src={arrow} className='arrow-icon'/></button>
                    </div>
                    <div className="project-side-1">
                        <div className='project-image-3'></div>
                            <h2>Animation 2D/3D</h2>
                            <p>Experimenting with 2D animation using spine 2D for game assets and mini-games.</p>
                            <div className="project-tech">
                                <span className="project-tech-stack-2">Spine2D</span>
                                <span className="project-tech-stack-2">Photoshop</span>
                                
                            </div>
                            <button className="project-view-btn"><span>View Project</span><img src={arrow} className='arrow-icon'/></button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Project;