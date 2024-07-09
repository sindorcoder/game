import "./Post.css"
import { useTranslation } from "react-i18next"
import { base } from "../../db/dataBase"
import { NavLink } from "react-router-dom"
import i18next from "i18next"
const Post = () => {
const {t} = useTranslation()

return (
    <section className="poster">
          <div className="container">
               <div className="posterWrapper">
                    <ul className="postList">


                         <li className="postItem">
                              <a href="#" className="postLink">{t("all")}</a>
                         </li>
                         <li className="postItem">
                              <a href="#" className="postLink">{t("design")}</a>
                         </li>
                         
                         <li className="postItem">
                              <a href="#" className="postLink">{t("designTwo")}</a>
                         </li>
                         
                         <li className="postItem">
                              <a href="#" className="postLink">{t("product")}</a>
                         </li>
                         
                         <li className="postItem">
                              <a href="#" className="postLink">{t("articles")}</a>
                         </li>
                         
                         <li className="postItem">
                              <a href="#" className="postLink">{t("tutorials")}</a>
                         </li>
                         
                         <li className="postItem">
                              <a href="#" className="postLink">{t("news")}</a>
                         </li>
                    </ul>

                    <div className="wrapperCards">
                     {
                         base.map((item) => {
                              return (
                              <>
                                   
                                   <div className="contentCard" key={item.id}>
                              
                                   <div className="cardImage">
                                        <img src={item.img} alt={item.title} />
                                   </div>
                                   <div className="cardContent">
                                        <p className="cardWatch">{item.watch_en}</p>
                                        <h2 className="cardTitle">
                                         {item[`title_${i18next.language}`]
                                         ? item[`title_${i18next.language}`]
                                         : item[`title_en`]}
                                        </h2>
                                        <p className="cardText">{item.text}</p>
                                        <NavLink className="cardLink" to={`/singlePage/${item.id}`}>{item[`link_${i18next.language}`]
                                         ? item[`link_${i18next.language}`]
                                         : item[`link_en`]}</NavLink>
                                   </div>
                                   </div>
                              </>
                              )
                         })
                     }
                    </div>
               </div>
          </div>
    </section>
  )
}

export default Post