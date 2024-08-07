import News from './News';
import { useEffect, useState } from 'react';
import Header from "./Header"
function Everything(){
    const [articles, setArticles] = useState([]);
    const [category, setCategory] = useState('india');
    
  
    useEffect(() => {
    
         fetch(`https://newsapi.org/v2/everything?q=${category}&apiKey=001e57f283cc4faaa2a41961f5a434d2`)
              .then((response) => response.json())
              .then((news) => {
                  console.log('API Response:', news);
                  
                  setArticles(news.articles || []);
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
                  setCategory("india");
                }
              }}
              placeholder="Search here"
            />
            </div>
            <div className='second-sec'>
        <h1>you can see here EveryNews updates </h1>

       </div>
       
        <section className="news-articles">
          {articles.length > 0 ? (
            articles.map((article,index) => <News article={article} key={article.url || index } {...article} />)
          ) : (
            <h3>No results were found for your search.</h3>
          )}
        </section>
      </div>
    );
    
}
export default Everything;