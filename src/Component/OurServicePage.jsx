import { useEffect } from 'react';
import './OurServicePage.css';
import home from '../images/service/elegant-diamond-pendant-necklace-sparkling-jewel 1.png';
import ring from '../images/service/Object 1.png';
import diamonds from '../images/service/Object 2.png';

import i1 from '../images/service/serviceIcon1.png';
import i2 from '../images/service/serviceIcon2.png';
import i3 from '../images/service/serviceIcon3.png';
import i4 from '../images/service/serviceIcon4.png';
import i5 from '../images/service/serviceIcon5.png';
import i6 from '../images/service/serviceIcon6.png';
import i7 from '../images/service/serviceIcon7.png';


import bg1 from '../images/service/Vector1.png';
import bg2 from '../images/service/Vector2.png';
import bg3 from '../images/service/Vector3.png';
import bg4 from '../images/service/Vector4.png';
import bg5 from '../images/service/Vector5.png';
import bg6 from '../images/service/Vector6.png';
import bg7 from '../images/service/Vector7.png';


import help1 from '../images/service/help1.png';
import help2 from '../images/service/help2.png';
import help3 from '../images/service/help3.png';
import help4 from '../images/service/help4.png';



export const OurServicePage = () => {
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

          const helpboxes = [
            { icon: help1, title: "Diamond Valuation & Certification", content: "Accurate assessment and authentication of diamonds to ensure quality, authenticity, and fair market value." },
            { icon: help2, title: "Secure Selling Support", content:'Get the best value for your diamonds with our reliable selling process.' },
            { icon: help3, title: "Investment Guidance", content:'Expert insights on diamond investments for long-term value.' },
            { icon: help4, title: "Trusted Buying Assistance", content:'Helping you find the perfect diamond with expert guidance and transparency.' },
          ];
          const services = [
            { icon: i1, bgImage: bg1, title: "Uncompromising Quality Assurance" },
            { icon: i2, bgImage: bg2, title: "Exclusive Commerce Hub App" },
            { icon: i3, bgImage: bg3, title: "Rapid & Reliable Shipping Solutions" },
            { icon: i4, bgImage: bg4, title: "Effortless Stone Matching" },
            { icon: i5, bgImage: bg5, title: "Branded Customer App Solution" },
            { icon: i6, bgImage: bg6, title: "Immersive AR Experience" },
            { icon: i7, bgImage: bg7, title: "Effortless API Connectivity" },
          ];
             
    return(
        <>
        <div id="OurServicePageContainer" className="OurServicePageContainer">
<div className="OurServiceHeroSection"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
<p  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">Our Services</p>
<span  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">Revolutionizing the diamond industry with precision, innovation,
and trust—delivering excellence from mine to market</span>
<img  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom" src={home} alt="Diamond" className='oursreviceheroimg' />
<img  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom" src={ring} className='frostedRing' alt='' />

</div>
<div className="frostedContainer">
    <div className="frostedFirstDiv"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
<div className="frostedCard"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
    <div className="frostedForm"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
    <h3  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">Get frosted</h3>
    <p  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">Jewelry as unique as you</p>
    <div  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom" className="frostedLine"></div>
    <button  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom" className='explorebutton'>EXPLORE DIAMONDS</button>
    </div>

</div>
    </div>
    <div className="frostedSecondDiv">
<div className="frostedSecondbox"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
<div className="frostedSecondInnerbox"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
Natural 
<span  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">Diamonds
</span>
</div>

</div>
<div className="frostedSecondbox2"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
<div className="frostedSecondInnerbox"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
Lab grown 
<span  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">Diamonds
</span></div>
</div>

    </div>


</div>
<div className="our-service-container">
      <h3 className="service-title"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">Our Services</h3>
      <div className="service-boxes"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
  {services.map((service, index) => (
    <div
      className="service-box"  data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-anchor-placement="top-bottom"
      key={index}
      style={{ backgroundImage: `url(${service.bgImage})` }} // Dynamically set BG Image
    >
      <div className="icon"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
        <img  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom" src={service.icon} alt={service.title} />
      </div>
      <p  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">{service.title}</p>
    </div>
  ))}

        <img src={diamonds} className='serviceBoxesdiamonds'  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom" alt=''/>
      </div>
    </div>

    <div className="help-container">
  <h3  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">How Can We Help You?</h3>
  <p  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
    We offer reliable and expert diamond services, guiding our clients seamlessly through every step of buying and selling.
  </p>
  <div className="help-container-boxes"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
    {helpboxes.map((helpbox, index) => (
      <div className="help-box"  data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-anchor-placement="top-bottom" key={index}>
        <div className="help-icon"  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">
          <img src={helpbox.icon} alt={helpbox.title} />
        </div>
        <div className='help-content'>
        <h2  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">{helpbox.title}</h2>
        <p  data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-anchor-placement="top-bottom">{helpbox.content}</p>
        </div>
        
      </div>
    ))}
  </div>
</div>

    {/* <div class="info-box">
        <div class="side-banner"></div>
        <div class="icon-box">
            <img src={help1} alt="Handshake Icon" />
        </div>
        <div class="text-container">
            <h2>Trusted Buying Assistance</h2>
            <p>Helping you find the perfect diamond with expert guidance and transparency.</p>
        </div>
    </div> */}


        </div>
        </>
    )
}