import "../styles/footer.css";

export default function Footer(){
    return (
        <footer className="footer">
            <div className="container">

                {/* Company Info */}

                <div className="section">
                    <h3 className="heading">My Portfolio</h3>
                    <p className="text"> Creating high-quality websites and applications. Lets build something amazing together!</p>
                </div>

                {/* Quick Links */}

                <div className="section">
                    <h3 className="heading">Quick Links</h3>
                    <ul className="link-list">
                        <li className="link-item">
                            <a href="/" className="link">Home</a>
                        </li>
                        <li className="link-item">
                            <a href="/about" className="link">About</a>
                        </li>
                        <li className="link-item">
                            <a href="/services" className="link">Services</a>
                        </li>
                        <li className="link-item">
                            <a href="/portfolio" className="link">Portfolio</a>
                        </li>
                        <li className="link-item">
                            <a href="/contact" className="link">Contact</a>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}

                <div className="section">
                    <h3 className="heading">Get in Touch</h3>
                    <p className="text">Email:info@myportfolio.com</p>
                    <p className="text">Phone: +123 456 7890</p>
                    <p className="text">Location: Karachi, Pakistan</p>
                </div>
            </div>

            <div className="footer-bottom">&copy; {new Date().getFullYear()}
                My Portfolio. All rights reserved. 
            </div>
        </footer>
    );
}