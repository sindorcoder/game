import "./Hero.css"
import { useTranslation } from "react-i18next"
import heroImages from "../../images/hero.png"
import twitter from "../../images/twitter.svg"
import linkedin from "../../images/linkedin.svg"
import medium from "../../images/medium.svg"
const Hero = () => {
const {t} = useTranslation()

return (
    <section className="hero">
      <div className="container">
        <div className="heroWrapper">
          <div className="wrapperContent">
            <h1>{t("title")}</h1>
            <h2>{t("titleTwo")}</h2>
            <p>{t("text")}</p>

            <div className="wrapperSocial">
              <a href="#">
                <img src={twitter} alt="twitter" /> 
                Twitter 
              </a>  
              <a href="#">
                <img src={linkedin} alt="twitter" /> 
                Linkedin 
              </a>  
              <a href="#">
                <img src={medium} alt="twitter" /> 
                Medium
              </a>  
            </div>            
          </div>
          <div className="wrapperImages">
            <img src={heroImages} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero