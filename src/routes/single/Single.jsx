import { useParams } from "react-router-dom"
import { base } from "../../db/dataBase"
const Single = () => {
  const id = useParams()
  const post = base.forEach(item => item.id === id.item ? item : null)
  console.log(post)

  if(id.item === base.id) {
    console.log("salom")
  }

  return (
    <div>Single</div>
  )
}

export default Single