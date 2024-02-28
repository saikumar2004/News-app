import {useEffect,useState} from 'react';
import './App.css';
import News  from './News';


function App() {
  let[articles,setArticles]=useState([]);
  let[category,setCategory]=useState('india');
  useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=2024-02-1&apiKey=e0242cf49d88409eb5fb1bb3d9fb39f4`)
    .then((Response)=>Response.json())
    .then((news)=>{
      setArticles(news.articles);
      console.log(news);
    })
    .catch((err)=>{
      console.log(err);
    });
  },[category]);
  return (
    <div className="App">
      <header className="header">
        <h1>SparkNews</h1>
        <input type="text" onChange={(event)=>{
          if(event.target.value!==""){
            setCategory(event.target.value);
          }
          else{
            setCategory("india");
          }
          
        }} placeholder="Search here" />

      </header>
      <section className="news-articles">
        {
          
          articles.map((article)=>{
           return(<News article={article}  key={article.id} {...article} />)
          })
         
          

      }
      
      
      </section>
    
    </div>
    
  );
}

export default App;
