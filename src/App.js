import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import NewsList from './components/NewsList';
import Footer from './components/Footer';

function App() {
  
  // Define category and news
  const [ category, saveCategory ] = useState('');
  const [ news, saveNews ] = useState([]);
  
  useEffect(() => {
    
    const consultAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=4f26cb874e524371b1504907235adb74`;
      
      const response = await fetch(url);
      const result = await response.json();

      saveNews(result.articles);
    
    }

    consultAPI();

  }, [category]);

  return (
    <Fragment>
      <Header 
        title='News'
      />
      <div className="container">
        <Form 
          saveCategory={saveCategory}
        />
        <NewsList
          news={news}
        />
      </div>
      <Footer 
        name='Franco Sparn'
      />
    </Fragment>
  );
}

export default App;
