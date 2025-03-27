import './AboutUsPage.css';
import about from '../images/about.png';
import ourstory from '../images/about_ourstory.png';
import singlediamond from '../images/singleDiamond.png';
import tradingExperience from '../images/about_parter.png';

import f1 from '../images/aboutFeature1.png';
import f2 from '../images/aboutFeature2.png';
import f3 from '../images/aboutFeature3.png';
import weAre from '../images/about_weare.png';




import { useEffect } from 'react';

export const AboutUsPage = () => {
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
    
      const features = [
        {
          icon: f1,
          title: (
            <>
              Fast & Free <div style={{ display: "block" }}>Shipping</div>
            </>
          ),
          description:
            "Enjoy hassle-free and express delivery at no extra cost! We take pride in offering swift and secure shipping, ensuring your diamonds reach you safely and on time.",
        },
        {
          icon: f2,
          title: "Secure & Transparent Payments",
          description:
            "Our intuitive platform guarantees safe and seamless transactions. Choose from multiple suppliers and make worry-free payments with complete transparency.",
        },
        {
          icon: f3,
          title: "24/7 Online Support & Live Inventory",
          description:
            "Browse our real-time diamond inventory anytime, anywhere. Our support team is always ready to assist you in selecting the perfect piece with confidence.",
        },
      ];
    return(
        <>
        <div id='AboutPageContainer' className="AboutPageContainer">
<div className="aboutHero-section" data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
    <p data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">About Us</p>
    <span data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">A Worldwide Network Connecting Diamond Buyers & Sellers</span>
<img src={about} alt="Diamond" className='aboutheroimg' data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom" />
</div>
<div className="aboutOurStory">
   <div className="OurstoryBox" data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
   <h3 className='ourstory-head' data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">Our Story</h3>
    <p className='ourstory-content' data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">Our dedicated team of experienced professionals works tirelessly to deliver top-tier services to our clients. With years of industry expertise, they provide trustworthy guidance and support to buyers, suppliers, and more. The Diamond Port oversees every aspect, from purchasing to shipping, including comprehensive door-to-door insurance for a seamless experience.</p>

   </div>
   <div className="OurstoryBox" data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
    <img src={ourstory} alt='outstory' data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom" />
    <img src={singlediamond} alt='diamond' data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom" className='outstory-singlediamond' />
</div>
</div>
<div className="TradingExperience" data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
    <div className="TradingExperienceDiv">
        <h3 data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">Partner with Us for a Seamless Diamond
        Trading Experience!</h3>
        <p data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">At The Diamond Port, we prioritize trust, quality, and efficiency. Whether you're a buyer or a supplier, our expert team ensures smooth transactions, secure shipping, and comprehensive insurance. Join our global network and experience a hassle-free way to trade diamonds!"</p>
    </div>
    <div className="TradingExperienceimg">
        <img src={tradingExperience} data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom" />
    </div>
</div>
<div className="PremiumFeature">
  <h3 className="PremiumFeature-head" data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
  Our Premium Features
  </h3>
  <div className="PremiumFeatureContainer">
      {features.map((feature, index) => (
        <div className="feature-card" data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-anchor-placement="top-bottom" key={index}>
          <div className="icon-container">
            <div className="icon">
              <img src={feature.icon} alt={feature.title} data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom" />
            </div>
          </div>
          <h3 data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">{feature.title}</h3>
          <p data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">{feature.description}</p>
        </div>
      ))}
    </div>
</div>

<div className="whoWeAreContainer">
  <div className="whoWeAreImg">
    <img src={weAre} data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom" />
  </div>
  <div className="whoWeAreDiv">
    <h3 data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">Who are we?</h3>
    <p data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">A pioneering force in the diamond industry, we connect buyers and sellers through a seamless, transparent, and innovative ecosystem. Committed to excellence, we revolutionize diamond sourcing with technology-driven solutions, ensuring trust, efficiency, and unmatched quality in every transaction. 💎✨</p>
  </div>
</div>
        </div>
        </>
    )
}