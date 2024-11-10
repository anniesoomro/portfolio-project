import "../styles/contact.css";

export default function Contact() {
    return (
        <div>
            <section className="contact">
                <div className="container">
                    
                    
                    <div className="text-container">
                        <h2>Contact Me</h2>
                        <form>
                            <div>
                                <label>Name</label>
                                <input type="text" placeholder="Your Name" />
                            </div>
                            <div>
                                <label>Email</label>
                                <input type="email" placeholder="Your Email" />
                            </div> 
                            <div>
                                <label>Message</label>
                                <textarea placeholder="Your Message"></textarea>
                            </div> 
                            <button type="submit">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </section>
        </div>
    );
}