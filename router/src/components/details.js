import React, { useState, useEffect } from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router,
  useParams
 } from 'react-router-dom';
import { Articles } from './articles';
import { API_KEY } from './search-bar';
import axios from '../services/api';


export const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const getDetails = async () => {
    try {
      const response= await axios.get(
        `v2/everything?apiKey=${API_KEY}&qInTitle=${id}`
      );
      setData(response.data.articles);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <div className="details">
      {data[0] !== undefined ? (
        <div>
          <p className="details-fild card-name"><b>Title: </b>{data[0].title}</p>
          <p className="details-fild card-translation"><b>Description: </b>{data[0].description}</p>
          <div className="details-fild content_details">{data[0].content}</div>
          <div  className="details-fild card-img-container">
            <img
              className="card-img"
              src={data[0].urlToImage}
              alt={data[0].title}
            />
          </div>
          <div className="details-fild author_details">Author: {data[0].author}</div>
          <div className="details-fild date_details">{data[0].publishedAt}</div>
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
};
