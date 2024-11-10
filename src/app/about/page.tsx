import "../styles/about.css";

export default function About() {
    return (
        <div>
            <section className="about">
               <div className="container">

                {/* About Me Text */}
                  
                  <div className="about-text-container">
                    <h2 className="about-title">About Me</h2>
                    <p className="about-description">I  am a full-stack developer with experties in modern web technologies such as React, Next.js and Node.js. I strieve to build web applications that solve real-world problems and provide seamless user experiences.</p>
                    <p className="about-description">I take pride in creating responsive and user-centered designs that prioritize both aesthetics and  usability. From developing portfolios and e-commerce websites to building dynamic and interactive applications, I aim to bring the ideas to life in a way that makes a meaningful impact. With each project, I am driven to learn new skills and keep improving to stay at the forefront of technology trends. Outside of coding, I enjoy exploring new design inspirations, learning about the latest tech innovations, and finding creative ways to enhance user experience. My goal is to continue evolving as a developer, taking on challenging projects that push my limits and contribute positively to the digital world</p>
                  </div> 

                  {/* Skills Section */}

                  <div className="skills-container">
                    <h3 className="skills-title">My Skills</h3>
                    <p className="skills-description">I beileve in the fact that learning never stops, and I am intersted in learning new technologies and programming languages that will help me design and develop better applications in less time.</p>
                    <div className="skills-list">
                        {[
                            { skill: "Javascript", level: "90%"},
                            { skill: "Next.js", level: "80%" },
                            { skill: "Node.js", level: "90%" },
                            { skill: "HTML", level: "85%" },
                            { skill: "CSS", level: "75%" },
                        ] .map(({skill,level}) => (<div key={skill} className="skills">
                            <label className="skill-label">{skill}</label>
                            <div className="skillBar-container">
                                <div className="skill-bar"style={{width:level}}></div>
                                </div>
                                </div>
                            ))}
                    </div>
                  </div>
               </div>
            </section>
        </div>
    );
}