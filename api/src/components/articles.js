import React from ("react");

export const Articles = ({articles}) =>{
  return(<div>
    <ul>
     { articles.map(({author, title, discription, publishedArt,urlToImage},index)=> {
return(
<li key={index}>
  <p>{title}</p>
  <p>{author}</p>
  <p>{publishedArt}</p>
  <img width={240} height={360} src={urlToImage} alt={title}/>
</li>
)
      })}
    </ul>
  </div>)
}
