import React from 'react'
import view from '../view.png';
import PropTypes from 'prop-types';

const News = ({ notice }) => {

    // Extract data
    const { urlToImage, url, title, description } = notice;

    const image = (urlToImage) ? 

    <img src={urlToImage} className="img-fluid" alt={title} />

    : null;

    return ( 
            <div className="card my-3">
                {image}
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{description}</p>
                    <a 
                        href={url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="button btn-block text-center"
                    ><img src={view} className="view" alt="Vista" /> Ver Noticia</a>
                </div>
            </div>
    );
}
 
News.propTypes = {
    notice: PropTypes.object.isRequired
}

export default News;