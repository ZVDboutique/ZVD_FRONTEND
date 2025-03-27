import footer1 from "../images/Certified1.png";
import footer2 from "../images/Certified2.png";
import "./Footer.css";


export const Footer = () => {
    return(
        <>
              {/* Footer Section */}
      <section id="FooterContainer"  data-aos="fade-up"
  data-aos-duration="3000"
  data-aos-anchor-placement="top-bottom" className="certification-footer">
        <div class="certification-section">
          <span class="certified-text">Certified By</span>
          <div class="certification-box">
            <div class="certification-logo">
              <img src={footer1} alt="IGI" />
            </div>
            <div class="certification-logo">
              <img src={footer2} alt="GIA" />
            </div>
          </div>
        </div>

      </section>
        </>
    )
}