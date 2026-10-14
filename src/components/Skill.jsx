import codelogo from '../assets/icons/coding.svg';
import flutter from '../assets/icons/flutter.svg';
import laravel from '../assets/icons/laravel.svg';
import react from '../assets/icons/react.svg';
import js from '../assets/icons/javascript.svg';
import php from '../assets/icons/php.svg';
import mysql from '../assets/icons/mysql.svg';
import tailwind from '../assets/icons/tailwind.svg';
import bar from '../assets/icons/bar.svg';
import goal from '../assets/icons/goal.svg';
import photoshop from '../assets/icons/photoshop.svg';
import check from '../assets/icons/check.svg';
import capcut from '../assets/icons/capcut.svg';
import canva from '../assets/icons/canva.svg';
import blender from '../assets/icons/blender.svg';
import spine from '../assets/spine.png';
import git from '../assets/icons/git.svg';
import github from '../assets/icons/github.svg';
import vscode from '../assets/icons/vscode.svg';
import paint from '../assets/icons/paint.svg';
import game from '../assets/icons/game.svg';
import settings from '../assets/icons/settings.svg';
import person from '../assets/icons/person.svg';



function Skill(){
    return(
        <div className="skills-container">
            <div className="skills-container-1">
                <h1 className='text-orange'>Skills and Technology</h1>
                <p>Here are the tools, technology, and skills I use to build applications,<br/>
                create digital content, and bring ideas to life.</p>
                <span>Always learning, Always improving.</span>
            </div>
            <div className="skills-container-2">
                <div className="skills-programming-container">
                    <div className="skills-tools">
                        <div className="skills-tools-container">
                            <img src={codelogo} alt="code logo" className='skills-code-logo' />
                            <div className="skills-programming-content">
                                <h2>Programming & Development</h2>
                                <p>Builing mobile and web application with clean code,<br/>
                                scalable architecture, and modern frameworks</p>
                               </div>
                            </div>
                            
                            <div className="skills-programming-tools">
                                <div className="skills-programming-logo">
                                    <img src={flutter} alt="flutter"/>
                                    <h3>Flutter</h3>
                                    <span>MobileApp</span>
                                </div>
                                <div className="skills-programming-logo">
                                    <img src={laravel} alt="laravel"/>
                                    <h3>Laravel</h3>
                                    <span>Backend</span>
                                </div>
                                <div className="skills-programming-logo">         
                                    <img src={react} alt="react"/>
                                    <h3>React</h3>
                                    <span>Frontend</span>
                                </div>
                                <div className="skills-programming-logo">
                                    <img src={js} alt="javascript"/>
                                    <h3>Javascript</h3>
                                    <span>WebLogic</span>
                                </div>
                                <div className="skills-programming-logo">
                                    <img src={php} alt="php"/>
                                    <h3>PHP</h3>
                                    <span>Backend</span>
                                </div>
                                <div className="skills-programming-logo">
                                    <img src={mysql} alt="mysql"/>
                                    <h3>MySQL</h3>
                                    <span>Database</span>
                                </div>
                                <div className="skills-programming-logo">
                                    <img src={tailwind} alt="tailwind"/>
                                    <h3>Tailwind</h3>
                                    <span>Frontend</span>
                                </div>
                                
                                
                               
                               
                        </div>
                      </div>
                    <div className="skills-level">
                    <div className="skills-level-1">  <img src={bar} alt='logo'/><span>Skill Level</span></div>
                        <div className='skill-bar'>
                            <div className='skill-bar-1'>
                        <span className='skill-span-size'>Flutter</span>
                        <div className='skill-level-bar'>
                            <div className='flutter-level' style={{ width: "85%"}}></div>
                            <span className='skill-span-size'>85%</span>
                        </div>
                        </div>
                            <div className='skill-bar-1'>
                        <span className='skill-span-size'>Laravel</span>
                        <div className='skill-level-bar'>
                            <div className='flutter-level' style={{ width: "80%"}}></div>
                            <span className='skill-span-size'>80%</span>
                        </div>
                        </div>
                            <div className='skill-bar-1'>
                        <span className='skill-span-size'>React</span>
                        <div className='skill-level-bar'>
                            <div className='flutter-level' style={{ width: "85%"}}></div>
                            <span className='skill-span-size'>85%</span>
                        </div>
                        </div>
                            <div className='skill-bar-1'>
                        <span className='skill-span-size'>Javascript</span>
                        <div className='skill-level-bar'>
                            <div className='flutter-level' style={{ width: "80%"}}></div>
                            <span className='skill-span-size'>80%</span>
                        </div>
                        </div>
                            <div className='skill-bar-1'>
                        <span className='skill-span-size'>PHP</span>
                        <div className='skill-level-bar'>
                            <div className='flutter-level' style={{ width: "75%"}}></div>
                            <span className='skill-span-size'>75%</span>
                        </div>
                        </div>
                            <div className='skill-bar-1'>
                        <span className='skill-span-size'>MYSQL</span>
                        <div className='skill-level-bar'>
                            <div className='flutter-level' style={{ width: "75%"}}></div>
                            <span className='skill-span-size'>75%</span>
                        </div>
                        </div>
                            <div className='skill-bar-1'>
                        <span className='skill-span-size'>Tailwind</span>
                        <div className='skill-level-bar'>
                            <div className='flutter-level' style={{ width: "80%"}}></div>
                            <span className='skill-span-size'>80%</span>
                        </div>
                        </div>
                        </div>
                        <div className='skill-bar-bottom'>
                            <img src={goal} alt='goal'/>
                        <p>Continiously learning and leveling up.</p>
                        </div>
                    </div>
                </div>
                <div className="skills-creative">
                    <div className="skills-creative-tools">
                        <div className="skills-creative-tools-1">
                             <div className="skills-tools-content-1">
                                <div className='skills-tools-2'>
                                    <img src={paint} alt='logo'/>
                                    <div className='skills-tools-content-2'>
                                        <span>Creative & Media Tools</span>
                                        <p>Creating and editing visual content, videos and digital assets
                                        for projects and creative production.</p>
                                    </div>
                                </div>
                               <div className='skills-creative-container'>
                                <div className='skills-creative-container-1'>
                                    <img src={photoshop}/>
                                    <span>Photoshop</span>
                                    <p>Photo Editing</p>
                                </div>
                                
                                <div className='skills-creative-container-1'>
                                    <img src={capcut} className='skills-logo-svg'/>
                                    <span>Capcut</span>
                                    <p>Video Editing</p>
                                </div>
                                
                                <div className='skills-creative-container-1'>
                                    <img src={canva} className='skills-logo-svg'/>
                                    <span>Canva</span>
                                    <p>Graphic Design</p>
                                </div>
                               
                                
                                </div>
                            </div>
                            <div className="skills-tools-content-1">
                                 
                                <div className='skills-tools-2'>
                                    <img src={game} alt='logo'/>
                                    <div className='skills-tools-content-2'>
                                        <span>Game & Animation</span>
                                        <p>Creating and editing visual content, videos and digital assets
                                        for projects and creative production.</p>
                                    </div>
                                </div>
                               <div className='skills-creative-container'>
                                <div className='skills-creative-container-1 '>
                                    <img src={spine} className='skills-spine'/>
                                    <span>Spine2d</span>
                                    <p>2D Animation</p>
                                </div>
                                
                                <div className='skills-creative-container-1'>
                                    <img src={blender}/>
                                    <span>Blender</span>
                                    <p>3D Modeling</p>
                                </div>
                                
                                
                                
                                
                                </div>
                            </div>
                            
                        </div>
                        <div className="skills-creative-tools-1">
                            
                                 <div className="skills-tools-content-1">
                                <div className='skills-tools-2'>
                                    <img src={settings} alt='logo'/>
                                    <div className='skills-tools-content-2'>
                                        <span>Other Tools & Platform</span>
                                        <p>Creating and editing visual content, videos and digital assets
                                        for projects and creative production.</p>
                                    </div>
                                </div>
                               <div className='skills-creative-container'>
                                <div className='skills-creative-container-1'>
                                    <img src={git} className='skills-logo-svg'/>
                                    <span>Git</span>
                                    <p>Version Control</p>
                                </div>
                                
                                <div className='skills-creative-container-1'>
                                    <img src={github} className='skills-logo-svg'/>
                                    <span>Github</span>
                                    <p>Collaboration</p>
                                </div>
                                
                                <div className='skills-creative-container-1'>
                                    <img src={vscode}/>
                                    <span>VS Code</span>
                                    <p>Code Editor</p>
                                </div>
                              
                                
                                
                            </div>
                            </div>
                            <div className="skills-tools-content-1">
                               <div className='skills-user'> <img src={person}/><span>Soft Skills</span></div>
                               <div className='skills-soft-skills'> <img src={check} alt='check'/><p>Problem Solving</p></div>
                               <div className='skills-soft-skills'> <img src={check}/><p>Team Collaboration</p></div>
                               <div className='skills-soft-skills'> <img src={check}/><p>Adaptability</p></div>
                               <div className='skills-soft-skills'> <img src={check}/><p>Detail Oriented</p></div>
                               <div className='skills-soft-skills'> <img src={check}/><p>Time Mangement</p></div>
                               <div className='skills-soft-skills'> <img src={check}/><p>Open to Feedback</p></div>
                            </div>

                        </div>

                    </div>
                    <div className="skills-project">
                        <div className='skills-project-1'>
                        <p>
                            Skills are not just about tools,<br/>
                            but about how you can use them
                            to create something meaningful.
                        </p>
                        <button className='skills-btn'><span className='text-orange'>View My Project</span></button>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Skill;