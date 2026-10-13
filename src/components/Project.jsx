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
            <div className="project-keyword">
                <div className="project-keyword-1">
                    <div className="project-keywoard-content"><span>All</span></div>
                    <div className="project-keywoard-content"><span>Web & Mobile</span></div>
                    <div className="project-keywoard-content"><span>Creative</span></div>
                    <div className="project-keywoard-content"><span>Game & Content</span></div>
                    <div className="project-keywoard-content"><span>Personal</span></div>
                </div>
                <div className="project-search"><input type="text" placeholder="Search Project..."></input></div>
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
                             <h2>RidersConnect</h2>
                            <p>A motorcycle rider community application focused 
                            on group location sharing,communication and tourism.</p>
                            <div className="project-tech">
                                <span className="project-tech-stack">Flutter</span>
                                <span className="project-tech-stack">Laravel</span>
                                
                                <span className="project-tech-stack">Reverb</span>
                            </div>
                            <button className="project-view-btn"><span>View Project</span><img src={arrow} className='arrow-icon'/></button>
                    </div>
                    <div className="project-side-1">
                        <div className='project-image'></div>
                             <h2>RidersConnect</h2>
                            <p>A motorcycle rider community application focused 
                            on group location sharing,communication and tourism.</p>
                            <div className="project-tech">
                                <span className="project-tech-stack">Flutter</span>
                                <span className="project-tech-stack">Laravel</span>
                              
                                <span className="project-tech-stack">Reverb</span>
                            </div>
                            <button className="project-view-btn"><span>View Project</span><img src={arrow} className='arrow-icon'/></button>
                    </div>
                    <div className="project-side-1">
                        <div className='project-image'></div>
                             <h2>RidersConnect</h2>
                            <p>A motorcycle rider community application focused 
                            on group location sharing,communication and tourism.</p>
                            <div className="project-tech">
                                <span className="project-tech-stack">Flutter</span>
                                <span className="project-tech-stack">Laravel</span>
                            
                                <span className="project-tech-stack">Reverb</span>
                            </div>
                            <button className="project-view-btn"><span>View Project</span><img src={arrow} className='arrow-icon'/></button>
                    </div>
                    <div className="project-side-1">
                        <div className='project-image'></div>
                            <h2>RidersConnect</h2>
                            <p>A motorcycle rider community application focused 
                            on group location sharing,communication and tourism.</p>
                            <div className="project-tech">
                                <span className="project-tech-stack-2">Flutter</span>
                                <span className="project-tech-stack-2">Laravel</span>
                                <span className="project-tech-stack-2">Reverb</span>
                            </div>
                            <button className="project-view-btn"><span>View Project</span><img src={arrow} className='arrow-icon'/></button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Project;