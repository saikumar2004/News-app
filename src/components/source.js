import News from './News';
import { useEffect, useState } from 'react';
import Header from "./Header"
function Source(){
    const [articles, setArticles] = useState([]);
    const [category, setCategory] = useState('techcrunch');
    
  
    useEffect(() => {
    
         fetch(`https://newsapi.org/v2/everything?q=${category}&apiKey=001e57f283cc4faaa2a41961f5a434d2`)
              .then((response) => response.json())
              .then((news) => {
                  console.log('API Response:', news);
                  
                  setArticles(news.articles);
              })
              .catch((err) => {
                  console.log('API Error:', err);
  
              });
    
  }, [category]);
  
    console.log('Articles State:', articles);
  
    return (
      <div className="App">
        <div className='header-con'>
        <Header/>

         <input 
               type="text"
              onChange={(event) => {
                if (event.target.value !== "") {
                  setCategory(event.target.value);
                } else {
                  setCategory("techcrunch");
                }
              }}
              placeholder="Search here"
            />
            
       </div>
       <div className='second-sec'>
        <h1>Let's Search the News Which you want</h1>

       </div>
       
        <section className="news-articles">
        
          {articles && articles.length !== 0 ? (
            articles.map((article) => <News article={article} key={article.id} {...article} />)
          ) : (
            <h3>No results were found for your search.</h3>
          )}
        </section>
      </div>
    );
    
}
export default Source;