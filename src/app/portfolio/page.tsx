import Link from "next/link";
import "../styles/portfolio.css";

export default function Portfolio () {
     const projects = [
      {
        title: "Project 1",
        description: "This is my first assignment made with Typescript and Node.js where i learn how to start coding.",
        github: "https://github.com/anniesoomro/45_Assignments.git",
      },
      {
        title: "Project 2",
        description: "This is my second project which is currency converter made with Typescript Node.js and Inquirer.",
        github: "https://github.com/anniesoomro/04.Currency_Converter.git",
      },
      {
        title: "Project 3",
        description: "This is my third project which is adventure game made with Typescript Node.js and Inquirer",
        github: "https://github.com/anniesoomro/07.Adventure_game.git",
      },
    ];

    return (
       <section id="portfolio" className="portfolio">
        <div className="container">
            <h2 className="title">My Portfolio</h2>
            <p className="subtitle">Here are some of my projects. Click on the links to view the code on Github</p>

            <div className="grid">
                {projects.map((project, index) => (
                    <div key ={index} className="project-card">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description"> {project.description} </p>
                        <div className="links-container">
                            <Link href={project.github}
                             target="blank"
                            className="github-Link">View on GitHub
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
       </section>
    )
}