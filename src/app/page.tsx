import Link from "next/link";
import "../app/styles/home.css";

export default function Home() {
    return ( 
        <div>
            <section className="hero">
                   {/* Hero Content */}
                 <div className="hero-content">
                    <h1 className="hero-title">Welcome to my Portfolio</h1>
                    <p className="hero-subtitle">Explore my work,services, and projects</p>
                    <Link href="#about"
                     className="hero-button">Learn More About Me
                    </Link>
                    </div>  
            </section>

            <section id="about" className="about">
            <div className="about-container">
                <h2 className="about-title">About Me</h2>
                <p className="about-description">Hello! My name is Qurratulain Soomro but you can call me Annie also. I am a dedicated and enthusiastic web developer,with a strong focus on building intiative, functional, and visually appealing digital experiences. My journey in development has been fueled by a love for creativty and a passion for problem-solving. I specialize in front-end and full stack development, with skills in technologies like Next.js, TailwindCSS, HTML, Css and javascript.</p>
                <p className="about-description"><b> For more creativity and work about me please vist my Portfolio and see my work.</b></p>
            </div>
            </section>
        </div>
    );
}


            
         
       