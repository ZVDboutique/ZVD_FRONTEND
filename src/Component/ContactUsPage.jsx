
import "./ContactUsPage.css";
import contact2 from '../images/home2_removebg.png';
import contact1 from '../images/contact.png';
import { useEffect, useState } from "react";


export const ContactUsPage = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);
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
    const locations = [
        { name: "New York", address: "47 W 13th St, New York, NY 10011, USA", mapSrc: "https://www.google.com/maps/embed?..." },
        { name: "India", address: "Shivsena Office, 468-b, J S S Road, Mumbai", mapSrc: "https://www.google.com/maps/embed?..." },
        { name: "London", address: "Travessa Guilhermina 1558, Teófilo Otoni", mapSrc: "https://www.google.com/maps/embed?..." }
    ];

    return(
        <>      <div id="ContactPageContainer" className="top-container">
       
       <div className="contactHero-section"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
       <div className="contact-img1 first-diamond">
    <img src={contact1} alt="Diamond"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom" />
</div>
<div className="contact-content">
    <p  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">Contact Us</p>
    <span  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">We are Here to Answer Your Questions</span>
</div>
<div className="contact-img1 second-diamond">
    <img src={contact2} alt="Diamond"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom" />
</div>

</div>
<div id="ContactFormContainer">
    {/* Contact Info Section */}
    <div className="contact-info">
    <div className="contact-details"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
      <h2  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">Get In Touch</h2>
      <p  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">Feel free to use the form or drop us an email. Old-fashioned phone calls work too.</p>
      <div className="contact-list">
        <div className="contact-item"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
          <i className="fa-solid fa-phone"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom"></i>
          <span  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">+91 12345 67890</span>
        </div>
        <div className="contact-item"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
          <i className="fa-solid fa-envelope"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom"></i>
          <span  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">zvd-diamond@gmail.com</span>
        </div>
        <div className="contact-item"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
          <i className="fa-solid fa-map-marker-alt"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom"></i>
          <span  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">India Diamond Hub</span>
        </div>
        <div className="contact-item"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
          <i className="fa-brands fa-instagram"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom"></i>
          <span  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">Instagram ID</span>
        </div>
      </div>
    </div>

        {/* Contact Form */}
        <div className="contact-form"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
    <div className="form-group-row"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
        </div>
    </div>

    <div className="form-group"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" placeholder="+91 12345 67890" />
    </div>

    <div className="form-group"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Write your message"></textarea>
    </div>

    <button type="submit"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">Submit</button>
</div>

    </div>

    {/* Location Section */}
    <div className="location-section"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
            <div className="location-list"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
                {locations.map((location) => (
                    <div
                        key={location.name}
                        className={`location-item ${selectedLocation === location.name ? "active" : ""}`}
                        onClick={() => setSelectedLocation(location.name)}
                    >
                        <h3>{location.name}</h3>
                        <p>{location.address}</p>
                    </div>
                ))}
            </div>

            {/* Map */}
            <div className="map-container"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
                <iframe 
                title="ContactUs"
                    src={locations.find(loc => loc.name === selectedLocation)?.mapSrc || locations[0].mapSrc}
                    allowFullScreen={true}
                    loading="lazy">
                </iframe>
            </div>
        </div>

</div>


       

      </div>
        </>
    )
}