
import education from '../assets/icons/education.svg';
import message from '../assets/icons/message.svg';
import phone from '../assets/icons/phone.svg';
import location from '../assets/icons/location.svg';
import quote from '../assets/icons/quote.svg';
import goal from '../assets/icons/goal.svg';
import check from '../assets/icons/check.svg';
import brain from '../assets/icons/brain.svg';
import coding from '../assets/icons/coding.svg';
import motorcycle from '../assets/icons/motorcycle.svg';
import heart from '../assets/icons/heart.svg';
import model from '../assets/icons/model.svg';
import paint from '../assets/icons/paint.svg';
import spaarkles from '../assets/icons/sparkles.svg';
import photo from '../assets/icons/photo.svg';
import video from '../assets/icons/video.svg';
import game from '../assets/icons/game.svg';
import working from '../assets/icons/working.svg';
import hyperbondlogo from '../assets/icons/hyperbond-studio-logo.png';


function About(){
    return(
        <div className="about-main-container">
            <div className="about-top-container">
                <div className="about-top-container-1">
                    <h1>Get to Know Me</h1>
                    <p>I'm a Computer Science student and aspiring full-stack developer<br/> with a passion for building digital solutions and creative experiences.<br/> I enjoy developing applications, solving problems, and learning new technologies.<br/>
                    <br></br>

Beyond coding, I also work with video editing and photo editing, <br/>allowing me to combine my technical and creative skills to bring ideas to life.</p>
                </div>
                <div className="about-top-container-2">
                    <img src={quote} className='about-icon'/>
                    <h3>"Small steps,<br/>Build big dreams."<br/>-Jobert Adrino</h3>
                </div>
            </div>
            <div className="about-bot-container">
                <div className="about-bot-container-2">
                    <div className="about-bot-container-1">
                    <div className="about-bot-container-image"></div>
                    <div className="about-bot-container-profile">
                        <h1>Jobert Adrino</h1>
                        <h3>fullstack developer</h3>
                        <div className="about-profile-details">
                            <div className="about-profile-content"><img src={education} className='about-icon'/><h5 className='about-educ'>AMA Computer College<br/>Tarlac City, Philippines</h5></div>
                            <div className="about-profile-content"><img src={message} className='about-icon'/><h5 className='about-educ'>jobert.andrino@gmail.com</h5></div>
                            <div className="about-profile-content"><img src={phone} className='about-icon'/><h5 className='about-educ'>+63 950-1898-599</h5></div>
                            <div className="about-profile-content"><img src={location} className='about-icon'/><h5 className='about-educ'>Tarlac City, Philippines</h5></div>
                            
                        </div>
                       
                    </div>
                    </div>
                           <div className="about-container-work">
                <div className="about-experience">
                   <div className='about-experience-content'><img src={working} className='about-icon'/><h3>Working Experience</h3></div> 
                    <div className='hyperbond-studio'><img src={hyperbondlogo} className='hyperbond-logo'/><span>Hyperbond Studio<br/>Game and Content Specialist<br/>2026</span></div>
                    <p>Working on game and digital content production<br/>while exploring creative and technical workflows</p>
                    <div className='hyperbond-tech-stack'>
                        <div className='hyperbond-tech'><img src={game} className='about-icon-working'/><span>Game Content</span></div>
                        <div className='hyperbond-tech'><img src={video} className='about-icon-working'/><span>Video Editing</span></div>
                        <div className='hyperbond-tech'><img src={photo} className='about-icon-working'/><span>Photo Editing</span></div>
                    </div>
                     <div className='hyperbond-tech-stack'>
                        <div className='hyperbond-tech'><img src={spaarkles} className='about-icon-working'/><span>Animation</span></div>

                    </div>
                </div>
              
            </div>
                </div>
                <div className="about-bot-container-2">
                    <div className="about-bot-container-education">
                        <div className='about-container-education-details'> <img src={education} className='about-icon-educ'/><h4>EDUCATION</h4></div>
                        <h5>AMA Computer College<br/>Bachelor of Science in Computer Science<br/>Tertiary Education<br/>(2022-Present)</h5>
                        <h5>Asian Institute of Computer Studies<br/>Computer Technology<br/>Tertiary Education<br/>(2016-2018)</h5>
                        <h5>Tibag High School<br/>Secondary Education<br/>(2012-2016)</h5>
                        <h5>Tibagan Elementary School<br/>Primary Education<br/>(2007-2012)</h5>
                        
                    </div>
                    <div className="about-bot-container-goal"><div className='about-goal-1'><img src={goal} className='about-icon' /><h4>My GOAL</h4></div>
                    <div className='about-bot-container-goal-content'>
                    <div className='about-goal'><img src={check} className='about-icon'/><h5>Graduate and Become a Professional Developers</h5></div>
                    <div className='about-goal'><img src={check} className='about-icon'/><h5>Build Real-World Application</h5></div>
                    <div className='about-goal'><img src={check} className='about-icon'/><h5>Create Helpful tools for the Community</h5></div>
                    <div className='about-goal'><img src={check} className='about-icon'/><h5>Grow my skills and network</h5></div>
                    <div className='about-goal'><img src={check} className='about-icon'/><h5>Be a better veersion of my self</h5></div>
                    </div>
                    </div>

                </div>

            </div>
      
        </div>
    )
}
export default About;