function News(props)
{
   
    return(
        <div className="news">
            <div className="news-img">
                  <img src={props.article.urlToImage} alt=""/>
            </div>
            <h2>{props.article.title}</h2>
            <p>{props.article.description?.substring(0,100).concat("...")}   <a href={props.article.url} target="blank">Read more</a> </p>
          
            <div className="source">
                <p className="bottom">Author : {props.article.author}</p>
                <p className="bottom">source : {props.article.source.name}</p>

            </div>
        </div>

    )

}
export default News;