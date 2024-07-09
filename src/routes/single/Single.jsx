import { useParams } from "react-router-dom";
import { base } from "../../db/dataBase";
import Nav from "../../components/nav/Nav";
import i18next from "i18next";
import "./Single.css"

const Single = () => {
  const id = useParams();

  const post = base.find((blog) => blog.id === parseInt(id.item));

  return (
    <>
      <Nav />
      <div className="container">
        <div className="cards">
        <div className="contentCard" key={post.id}>
        <div className="cardImage">
          <img src={post.img} alt={post.title} />
        </div>
        <div className="cardContent">
          <p className="cardWatch">{post.watch_en}</p>
          <h2 className="cardTitle">
            {post[`title_${i18next.language}`]
              ? post[`title_${i18next.language}`]
              : post[`title_en`]}
          </h2>
          <p className="cardText">{post.text}</p>
        </div>
      </div>
        </div>
      </div>
    </>
  );
};

export default Single;
