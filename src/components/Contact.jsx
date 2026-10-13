import person from '../assets/icons/person.svg';


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
                            <img src="" alt="logo"/>
                            <div className="contact-getintouch-content">
                            <span>Get In Touch</span>
                            <p>Here are the best way to reach me</p>
                        </div> </div>
                        <br/>
                        <div className="contact-details">
                            <div className="contact-information">
                                <img src="" alt="logo"/>
                                <div className="contact-infromation-1">
                                    <div className="contact-information-details">
                                        <span>Email</span>
                                        <p>jobert.andrino@gmail.com</p>
                                    </div>
                                    <img src="" alt="logo"/>
                                </div>
                            </div>
                            <div className="contact-information">
                                <img src="" alt="logo"/>
                                <div className="contact-infromation-1">
                                    <div className="contact-information-details">
                                        <span>Phone</span>
                                        <p>+63 977-3372-339</p>
                                    </div>
                                    <img src="" alt="logo"/>
                                </div>
                            </div>
                            <div className="contact-information">
                                <img src="" alt="logo"/>
                                <div className="contact-infromation-1">
                                    <div className="contact-information-details">
                                        <span>Location</span>
                                        <p>Tarlac City, Philippies</p>
                                    </div>
                                    <img src="" alt="logo"/>
                                </div>
                            </div>
                            <div className="contact-information">
                                <img src="" alt="logo"/>
                                <div className="contact-infromation-1">
                                    <div className="contact-information-details">
                                        <span>Available For</span>
                                        <p>Fullstack Developer - Junior Developer</p>
                                    </div>
                                    <img src="" alt="logo"/>
                                </div>
                            </div>
                            <div className="contact-information">
                                <img src="" alt="logo"/>
                                <div className="contact-infromation-1">
                                    <div className="contact-information-details">
                                        <span>Interested In</span>
                                        <p>Web Development - Mobile Development</p>
                                    </div>
                                    <img src="" alt="logo"/>
                                </div>
                                
                            </div>
                                <div className="contact-line"></div>
                                <span>Follow Me</span>
                                <p>Let's be friends and stay connected!</p>
                                <div className="contact-social">
                                    <div className="contact-social-logo"> <img src="" alt="logo"/></div>
                                    <div className="contact-social-logo"> <img src="" alt="logo"/></div>
                                    <div className="contact-social-logo"> <img src="" alt="logo"/></div>
                                    <div className="contact-social-logo"> <img src="" alt="logo"/></div>
                                </div>
                        </div>
                    </div>
                
                <div className="contact-sendmessage">
                    <div className="contact-getintouch-container">
                            <img src="" alt="logo"/>
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
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;