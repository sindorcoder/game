import "./Nav.css"
import { Select } from "antd"
import NavLogo from "../../images/Logo.svg"
import logo from "../../images/Vector.svg"
import { useTranslation } from "react-i18next"
import i18n from "../../locales";
const Nav = () => {
     const {t} = useTranslation()
     const sendInfo = (e) => {
          i18n.changeLanguage(e)
     }

  return (
    <nav>
      <div className="container">
          <div className="navWrapper">
               <div className="navImages">
               <img src={NavLogo} alt="logo cite" />
               <div className="hireMe">
               <img src={logo} alt="" />
               Hire ME
               </div>
               </div>
               <ul className="navList">
                    <li className="listItem">
                         <a href="#" className="itemLink">{t("portfolio")}</a>
                    </li>
                    <li className="listItem">
                         <a href="#" className="itemLink">{t("Blog")}</a>
                    </li>
                    <li className="listItem">
                         <a href="#" className="itemLink">{t("cv")}</a>
                    </li>
                    <li className="listItem">
                         <a href="#" className="itemLink">{t("store")}</a>
                    </li>
                    <li className="listItem">
                         <a href="#" className="itemLink">{t("freelance")}</a>
                    </li>
                    
                    <li className="listItem">
                         <a href="#" className="itemLink">{t("About")}</a>
                    </li>
                    
                    <li className="listItem">
                         <a href="#" className="itemLink">{t("Contact")}</a>
                    </li>

           
                    <li className="listItem">
                    <Select  defaultValue={localStorage.getItem("lang")} style={{width: 80}} onChange={sendInfo} >
                    <option  value="uz"> Uz</option>
                    <option value="ru">Ru</option>
                    <option value="en">Eng</option>
                    </Select>
                    </li>
               </ul>
          </div>
      </div>
    </nav>
  )
}

export default Nav