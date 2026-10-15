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
import { useState, useRef } from 'react';

const EMPTY_STATUS = { type: '', title: '', text: '' };

function Contact() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyCsz6tA-69cGjdn26nUDCALg4zXD71faPOLfFW0Yo4tygwdJh_PfBIx3HPUzktYKY/exec';

    const [copied, setCopied] = useState(null);
    const [status, setStatus] = useState(EMPTY_STATUS);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const statusTimer = useRef(null);

    const showStatus = (next) => {
        clearTimeout(statusTimer.current);
        setStatus(next);
        statusTimer.current = setTimeout(() => setStatus(EMPTY_STATUS), 6000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) return;

        setIsSubmitting(true);
        clearTimeout(statusTimer.current);
        setStatus(EMPTY_STATUS);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            await fetch(scriptURL, {
                method: 'POST',
                body: formData,
                mode: 'no-cors',
            });

            showStatus({
                type: 'success',
                title: 'Message sent!',
                text: "Thanks for reaching out. I'll get back to you soon.",
            });
            form.reset();
        } catch (error) {
            console.error('Error!', error);
            showStatus({
                type: 'error',
                title: 'Something went wrong',
                text: 'Your message was not sent. Please try again.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCopy = async (text, id) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(id);
            setTimeout(() => setCopied(null), 1500);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <div className="contact-container">
            <div className="contact-top">
                <h1>
                    Let's <span className="text-orange">Connect</span>
                </h1>
                <p>
                    I'm always interested in learning, building and working <br />
                    on new ideas. Whether you have a project, opportunity, <br />
                    or just want to say hello, feel free to reach out.
                </p>
            </div>

            <div className="contact-bot">
                <div className="contact-getintouch">
                    <div className="contact-getintouch-container">
                        <img src={getintouch} className="contact-main-logo" alt="logo" />
                        <div className="contact-getintouch-content">
                            <span>Get In Touch</span>
                            <p>Here are the best ways to reach me</p>
                        </div>
                    </div>

                    <br />

                    <div className="contact-details">
                        <div className="contact-information">
                            <img src={message} className="contact-sub-logo" alt="logo" />
                            <div className="contact-infromation-1">
                                <div className="contact-information-details">
                                    <span>Email</span>
                                    <p>jobert.andrino@gmail.com</p>
                                </div>
                                <img
                                    src={paste}
                                    className="contact-paste"
                                    alt="Copy email"
                                    onClick={() => handleCopy('jobert.andrino@gmail.com', 'email')}
                                />
                            </div>
                        </div>

                        <div className="contact-information">
                            <img src={phone} className="contact-sub-logo" alt="logo" />
                            <div className="contact-infromation-1">
                                <div className="contact-information-details">
                                    <span>Phone</span>
                                    <p>+63 977-3372-339</p>
                                </div>
                                <img
                                    src={paste}
                                    className="contact-paste"
                                    alt="Copy phone"
                                    onClick={() => handleCopy('+63 977-3372-339', 'phone')}
                                />
                            </div>
                        </div>

                        <div className="contact-information">
                            <img src={location} className="contact-sub-logo" alt="logo" />
                            <div className="contact-infromation-1">
                                <div className="contact-information-details">
                                    <span>Location</span>
                                    <p>Tarlac City, Philippines</p>
                                </div>
                                <img
                                    src={paste}
                                    className="contact-paste"
                                    alt="Copy location"
                                    onClick={() => handleCopy('Tarlac City, Philippines', 'location')}
                                />
                            </div>
                        </div>

                        <div className="contact-information">
                            <img src={contactcase} className="contact-sub-logo" alt="logo" />
                            <div className="contact-infromation-1">
                                <div className="contact-information-details">
                                    <span>Available For</span>
                                    <p>OJT - Junior Developer</p>
                                </div>
                                <img
                                    src={paste}
                                    className="contact-paste"
                                    alt="Copy availability"
                                    onClick={() => handleCopy('OJT - Junior Developer', 'available')}
                                />
                            </div>
                        </div>

                        <div className="contact-information">
                            <img src={coding} className="contact-sub-logo" alt="logo" />
                            <div className="contact-infromation-1">
                                <div className="contact-information-details">
                                    <span>Interested In</span>
                                    <p>
                                        Web Development - Mobile Development <br />
                                        Software Engineering - DevOps
                                    </p>
                                </div>
                                <img
                                    src={paste}
                                    className="contact-paste"
                                    alt="Copy interests"
                                    onClick={() =>
                                        handleCopy(
                                            'Web Development - Mobile Development\nSoftware Engineering - DevOps',
                                            'interested'
                                        )
                                    }
                                />
                            </div>
                        </div>

                        <div className="contact-line"></div>
                        <span className="contact-followme">Follow Me</span>
                        <p className="contact-p">Let's be friends and stay connected!</p>

                        <div className="contact-social">
                            <a href="https://github.com/ininital-Dtech" target="_blank" rel="noopener noreferrer" className="contact-social-logo">
                                <img src={github} alt="GitHub" />
                            </a>
                            <a href="https://web.facebook.com/ANTiPRO17" target="_blank" rel="noopener noreferrer" className="contact-social-logo">
                                <img src={facebook} alt="Facebook" />
                            </a>
                            <a href="https://www.linkedin.com/in/jobert-adrino-5b2065408/?isSelfProfile=true" target="_blank" rel="noopener noreferrer" className="contact-social-logo">
                                <img src={linked} alt="LinkedIn" />
                            </a>
                            <a href="https://www.tiktok.com/@codewithbert" target="_blank" rel="noopener noreferrer" className="contact-social-logo">
                                <img src={tiktok} alt="TikTok" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact-sendmessage">
                    <div className="contact-getintouch-container">
                        <img src={message} className="contact-main-logo" alt="logo" />
                        <div className="contact-getintouch-content">
                            <span>Send Me a Message</span>
                            <p>Fill out the form below and I'll get back to you as soon as possible.</p>
                        </div>
                    </div>

                    <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
                        <br />

                        <label htmlFor="contact-name">Name *</label>
                        <div className="contact-message-logo">
                            <img src={person} alt="logo" className="contact-logo-message" />
                            <input
                                id="contact-name"
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="contact-input"
                                required
                            />
                        </div>

                        <br />

                        <label htmlFor="contact-email">Email *</label>
                        <div className="contact-message-logo">
                            <img src={message} alt="logo" className="contact-logo-message-1" />
                            <input
                                id="contact-email"
                                type="email"
                                name="email"
                                placeholder="your@email.com"
                                className="contact-input"
                                required
                            />
                        </div>

                        <br />

                        <label htmlFor="contact-message">Message *</label>
                        <div className="contact-message-logo-textarea">
                            <img src={chatting} alt="logo" className="contact-logo-message" />
                            <textarea
                                id="contact-message"
                                name="message"
                                placeholder="Your Message"
                                required
                                className="contact-textarea"
                            ></textarea>
                        </div>

                        <br />

                        <button
                            type="submit"
                            className="contact-submit-btn"
                            disabled={isSubmitting}
                        >
                            <img src={telegram} alt="" />
                            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                        </button>

                        <div className="contact-status-wrap" role="status" aria-live="polite">
                            {status.type && (
                                <div className={`contact-status ${status.type}`}>
                                    <div className="contact-status-icon">
                                        {status.type === 'success' ? (
                                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        ) : (
                                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <line x1="18" y1="6" x2="6" y2="18" />
                                                <line x1="6" y1="6" x2="18" y2="18" />
                                            </svg>
                                        )}
                                    </div>
                                    <div className="contact-status-body">
                                        <strong>{status.title}</strong>
                                        <span>{status.text}</span>
                                    </div>
                                    <button
                                        type="button"
                                        className="contact-status-close"
                                        aria-label="Dismiss message"
                                        onClick={() => {
                                            clearTimeout(statusTimer.current);
                                            setStatus(EMPTY_STATUS);
                                        }}
                                    >
                                        ×
                                    </button>
                                </div>
                            )}
                        </div>

                        <br />

                        <div className="contact-shield">
                            <img src={shield} alt="logo" />
                            <p>Your information will only be used to respond to your inquiry</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
