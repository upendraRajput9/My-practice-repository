import { Component } from 'react'
import data from './data.json'
import {Link} from "react-router-dom"

export default class Aside extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <ul>
        {data.map((article,index) => (
          <li key={index}>
<Link to={`/article/${article.slug}`}>
<h3>{article.title}</h3>
</Link>
          </li>
        ))}
      </ul>
    )
  }
}
