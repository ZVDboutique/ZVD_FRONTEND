import React from "react";
import "./HomePage.css";
// import logo from '../images/logo.png';
import home1 from '../images/home1.png';
import { useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";


import img1 from '../images/Collection1.png';
import img2 from '../images/Collection2.png';
import img3 from '../images/Collection3.png';
import img4 from '../images/Collection4.png';
import img5 from '../images/Collection5.png';
import img6 from '../images/Collection6.png';
import img7 from '../images/Collection7.png';
import img8 from '../images/Collection8.png';
import img9 from '../images/Collection9.png';
import img10 from '../images/Collection10.png';
import img11 from '../images/Collection11.png';
import img12 from '../images/Collection12.png';
import about from '../images/home2.png';
import showcase from '../images/home3.png';



import qualityImg from "../images/labGrown1.png";
import valueImg from "../images/labGrown2.png";
import certifiedImg from "../images/labGrown3.png";
import ethicalImg from "../images/labGrown4.png";
import environmentalImg from "../images/labGrown5.png";
import innovativeImg from "../images/labGrown6.png";


const features = [
  { img: qualityImg, title: "Quality and Purity", text: "Lab-grown diamonds possess the same physical, chemical, and optical properties as mined diamonds. They are graded by the same standards, ensuring you get a diamond of exceptional quality and clarity." },
  { img: valueImg, title: "Value for Money", text: "Enjoy the luxury of diamonds at a fraction of the cost. Lab-grown diamonds offer significant savings, allowing you to invest in a higher quality diamond or a larger carat size for the same price as a mined diamond." },
  { img: certifiedImg, title: "Certified", text: "Lab-grown diamonds are certified by reputable institutions such as GIA, IGI, and GCAL. This ensures that you can trust their authenticity and always receive a genuine product without any risk of fraud." },
  { img: ethicalImg, title: "Ethical Assurance", text: "Say goodbye to conflict diamonds. Our lab-grown diamonds are 100% conflict-free, ensuring that your purchase does not contribute to unethical labor practices or financing of conflicts." },
  { img: environmentalImg, title: "Environmental Impact", text: "Our diamonds are created with minimal environmental disruption compared to traditional mining. This means no destructive mining practices, reduced carbon footprint, and a commitment to preserving natural habitats." },
  { img: innovativeImg, title: "Innovative and Modern", text: "Lab-grown diamonds are at the forefront of technological innovation. Embrace the future with a diamond that symbolizes progress, sustainability, and modern elegance." }
];

const HomePage = () => {

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
};
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ once: true });
    }
    scrollToTop();
  }, []);
  
  const navigate = useNavigate();

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   navigate("/");
  // };
  return (
    <div id="HomePageContainer" className="homepage">
      <div className="top-container">
       

        {/* Slider Section */}
        <div className="hero-section">
          <div className="hero-content">
            <h3  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
              Discover the Future of <br />
              <span className="highlight">DIAMONDS</span>
            </h3>
            <p  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">Sustainable, Ethical, and Stunning Lab-Grown Diamonds</p>
            <button  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom" className="cta-button">Get Started</button>
          </div>
          <div className="hero-image"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
            <img src={home1} alt="Diamond" />
          </div>
        </div>

        {/* Collection Section */}
        <div className="collection-section">
  <div className="collection-content">
    <h2>Our Collection</h2>
    <div className="collection-icons">
      <span><img src={img1} alt="Collection" /></span>
      <span><img src={img2} alt="Collection" /></span>
      <span><img src={img3} alt="Collection" /></span>
      <span><img src={img4} alt="Collection" /></span>
      <span><img src={img5} alt="Collection" /></span>
      <span><img src={img6} alt="Collection" /></span>
      <span><img src={img7} alt="Collection" /></span>
      <span><img src={img8} alt="Collection" /></span>
      <span><img src={img9} alt="Collection" /></span>
      <span><img src={img10} alt="Collection" /></span>
      <span><img src={img11} alt="Collection" /></span>
      <span><img src={img12} alt="Collection" /></span>
    </div>
  </div>
</div>

      </div>

      {/* About Section */}
      <div className="about-section" >
        <div className="about-content-img"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
          <img src={about} alt="Diamond" />
        </div>
        <div className="about-section-content" data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
          <h2>About Buy LGD</h2>
          <p>
            At Buy LGD, we revolutionize the diamond industry by providing stunning,
            ethically sourced lab-grown diamonds. Our commitment to quality and sustainability
            ensures that every diamond is not only beautiful but also environmentally friendly
            and conflict-free.
          </p>
          <p>From carbon seed to stunning gemstone, our diamonds are crafted with precision and care. Learn more about the science and artistry behind each diamond.</p>
        </div>
      </div>

      {/* Lab-Grown Diamonds Sections */}
      <section className="diamond-container" >
        <h2 className="diamond-title"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">Why Choose Lab-Grown Diamonds?</h2>
        <p className="diamond-subtitle"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">These are chemically identical to mined diamonds, providing a more ethical and sustainable alternative.</p>
        <div className="diamond-grid"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
          {features.map((feature, index) => (
            <div key={index} className="diamond-card"  data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-anchor-placement="top-bottom">
              <div className="diamond-card-head">
                <div className="diamond-img-box" >    <img src={feature.img} alt={feature.title} className="diamond-icon" />
                </div>
                <h3 className="diamond-card-title">{feature.title}</h3>

              </div>
              <p className="diamond-card-text">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Showcase Section */}
      <div className="virtualShowcase-section">

        <div className="virtualShowcase-section-content"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
          <h2>Virtual Diamond Showcase</h2>
          <p>
            Enhance your website with our lab-grown diamond collection, giving you full customization over size, quality, shapes, and more through our state-of-the-art, low-latency APIs.
          </p>
          <ul>
            <li>Quickly scale your online diamond business</li>
            <li>Offer the perfect diamond to suit every visitor's needs on your website.</li>
            <li>Quickly scale your online diamond business</li>
          </ul>

        </div>
        <div className="virtualShowcase-content-img"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
          <img src={showcase} alt="Diamond" />
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="contact-container">
        <div className="contact-header"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
          <h3>Have Questions?</h3>
          <p>
            We're here to help. Reach out to us via email, phone, or the contact form,
            and we'll get back to you as soon as possible.
          </p>
        </div>

        <div class="contact-content"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
          <div class="contact-info">
            <div className="contact-info-box">
              <h3>Contact Us</h3>
              <p><i className="fa-solid fa-phone"></i> +91 94844 56677</p>
              <p><i className="fa-solid fa-inbox"></i> info@zvd.com</p>
              <p><i className="fa-solid fa-location-dot"></i> Surat, Gujarat, India.</p>

            </div>
            <div className="contact-info-box contact-info-box2"> <h3>Working Hours</h3>
              <p>Monday to Friday: <span>09 AM - 06 PM</span></p>
              <p>Saturday: <span>09 AM - 02 PM</span></p>
              <p>Sunday: <span>Closed</span></p></div>
          </div>

          <form class="contact-form">
            <div class="input-group">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="email" placeholder="Email Id" />
            <div class="input-group">
              <input type="text" placeholder="Contact No." />
              <select>
                <option>Country</option>
                <option>India</option>
                <option>USA</option>
              </select>
            </div>
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </section>


    </div>
  );


};

export default HomePage;
