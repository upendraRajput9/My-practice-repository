import { useParams } from "react-router-dom"
import data from "./data.json"
function Main(props){
        let params = useParams();
       let slug =params.slug
      
     let article=  data.filter(article=>slug===article.slug)
     let {title,author}=article[0]
     return(
        <div>
        <h1>{title}</h1>
        <h2>{author}</h2>
        </div>
     )
    }
    export default Main
