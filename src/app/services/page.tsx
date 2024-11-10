import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faPencilRuler,faComments } from "@fortawesome/free-solid-svg-icons";
import '../styles/services.css';


export default function Services() {
    return (
        <section className="services-section">
            <div className="services-container">
                <div className="text-container">
                    <h2>Services</h2>
                    <p>From understanding your requirements, designing a blueprint, and delivering the final product, I do everything that falls in between these lines</p>
                </div>

                {/* Services Card  */}

                <div className="cards-container">
                    <div className="service-card">
                        <FontAwesomeIcon icon={faLaptopCode} className="icon text-blue-500" />
                        <h3>Web Development</h3>
                        <p>Building responsive and scaleable websites using modern technologies.</p>
                    </div>
                    <div className="service-card">
                        <FontAwesomeIcon icon={faPencilRuler} className="icon text-purple-500" />
                        <h3>UI/UX Design</h3>
                        <p> Creating user-friendly designs that prioritize a smooth experience.</p>
                    </div>
                    <div className="service-card">
                        <FontAwesomeIcon icon={faComments} className="icon text-green-500" />
                        <h3>Consulting</h3>
                        <p>Offering technical consultations to help you navigate your web projects.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}