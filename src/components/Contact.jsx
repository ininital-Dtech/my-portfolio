import person from '../assets/icons/person.svg';
import message from '../assets/icons/message.svg';
import chatting from '../assets/icons/chatting.svg';
import telegram from '../assets/icons/telegram.svg';
import shield from '../assets/icons/shield.svg';
import getintouch from '../assets/icons/getintouch.svg';
import phone from '../assets/icons/phone.svg';
import location from '../assets/icons/location.svg';
import coding from '../assets/icons/coding.svg';
import contactcase from '../assets/icons/case.svg';
import paste from '../assets/icons/paste.svg';
import github from '../assets/icons/github.svg';
import facebook from '../assets/icons/facebook.svg';
import linked from '../assets/icons/linked.svg';
import tiktok from '../assets/icons/tiktok.svg';

function Contact(){
    return(
        <div className="contact-container">
            <div className="contact-top">
                <h1>Let's Connect</h1>
                <p>I'm always interested in learning, building and working <br/>
                on new ideas. Whether you have a project, opportunity, <br/>
                or just want to stay hello, feel free to reach out.</p>
            </div>
            <div className="contact-bot">
                    <div className="contact-getintouch">
                        <div className="contact-getintouch-container">
                            <img src={getintouch} className="contact-main-logo"  alt="logo"/>
                            <div className="contact-getintouch-content">
                            <span>Get In Touch</span>
                            <p>Here are the best way to reach me</p>
                        </div> </div>
                        <br/>
                        <div className="contact-details">
                            <div className="contact-information">
                                <img src={message} className='contact-sub-logo' alt="logo"/>
                                <div className="contact-infromation-1">
                                    <div className="contact-information-details">
                                        <span>Email</span>
                                        <p>jobert.andrino@gmail.com</p>
                                    </div>
                                    <img src={paste} className='contact-paste' alt="logo"/>
                                </div>
                            </div>
                            <div className="contact-information">
                                <img src={phone} className='contact-sub-logo' alt="logo"/>
                                <div className="contact-infromation-1">
                                    <div className="contact-information-details">
                                        <span>Phone</span>
                                        <p>+63 977-3372-339</p>
                                    </div>
                                    <img src={paste} className='contact-paste' alt="logo"/>
                                </div>
                            </div>
                            <div className="contact-information">
                                <img src={location} className='contact-sub-logo' alt="logo"/>
                                <div className="contact-infromation-1">
                                    <div className="contact-information-details">
                                        <span>Location</span>
                                        <p>Tarlac City, Philippies</p>
                                    </div>
                                    <img src={paste} className='contact-paste' alt="logo"/>
                                </div>
                            </div>
                            <div className="contact-information">
                                <img src={contactcase} className='contact-sub-logo' alt="logo"/>
                                <div className="contact-infromation-1">
                                    <div className="contact-information-details">
                                        <span>Available For</span>
                                        <p>OJT - Junior Developer</p>
                                    </div>
                                    <img src={paste} className='contact-paste' alt="logo"/>
                                </div>
                            </div>
                            <div className="contact-information">
                                <img src={coding} className='contact-sub-logo' alt="logo"/>
                                <div className="contact-infromation-1">
                                    <div className="contact-information-details">
                                        <span>Interested In</span>
                                        <p>Web Development - Mobile Development <br/>
                                        Software Engineering - DevOps</p>
                                    </div>
                                    <img src={paste} className='contact-paste' alt="logo"/>
                                </div>
                                
                            </div>
                                <div className="contact-line"></div>
                                <span className='contact-followme'>Follow Me</span>
                                <p className='contact-p'>Let's be friends and stay connected!</p>
                                <div className="contact-social">
                                    <div className="contact-social-logo"> <img src={github} alt="logo"/></div>
                                    <div className="contact-social-logo"> <img src={facebook} alt="logo"/></div>
                                    <div className="contact-social-logo"> <img src={linked} alt="logo"/></div>
                                    <div className="contact-social-logo"> <img src={tiktok} alt="logo"/></div>
                                </div>
                        </div>
                    </div>
                
                <div className="contact-sendmessage">
                    <div className="contact-getintouch-container">
                            <img src={message} className="contact-main-logo" alt="logo"/>
                            <div className="contact-getintouch-content">
                            <span>Send Me a Message</span>
                            <p>Fill out the form below and  I'll get back to you as soon as possible.</p>
                        </div> 
                    </div>
                    <form>
                        <br/>
                        <label>Name *</label>
                        <div className="contact-message-logo">
                        <img src={person} alt="logo" className='contact-logo-message'/>
                        <input type="text" placeholder="Your Name" className="contact-input"></input>
                        </div>
                        <br/>
                        <label>Email *</label>
                        <div className="contact-message-logo">
                        <img src={message} alt="logo" className='contact-logo-message-1'/>
                        <input type="email" placeholder="your@email.com" className="contact-input"></input>
                        </div>
                        <br/>
                        <label>Message *</label>
                        <div className="contact-message-logo-textarea">
                        <img src={chatting} alt="logo" className='contact-logo-message'/>
                        <textarea placeholder="Your Message" required className="contact-textarea"></textarea>
                        </div>
                        <br/>
                        <button className='contact-submit-btn'><img src={telegram}/><span>Send Message</span></button>
                        <br/>
                        <div className='contact-shield'>
                            <img src={shield} alt='logo'/><p>Your information will only be used to respond to your inquiry</p> 
                        </div>


                        
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;