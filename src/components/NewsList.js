import React from 'react';
import News from './News';
import PropTypes from 'prop-types';

const NewsList = ({ news }) => (
  <div className="card-columns">
      {news.map(notice => (
          <News 
            key={notice.url}
            notice={notice}
          />
      ))}
  </div>  
);

NewsList.propTypes = {
  news: PropTypes.array.isRequired
}
 
export default NewsList;