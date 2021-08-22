import React, { FC, useState, Component } from 'react';
import ReactDOM from 'react-dom';
//NEWS Api
//TO Do axios
//import axiosInstance from '../services/api';
import axios from '../services/api'; //111111   npm i axios
import { Articles } from './articles';


window.React = React;

const API_KEY = '6acc09f802644746b9fafbaed30a3d6'
export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');//useState<string>('') и тд
  const [isLoading, setIsLoading] = useState(false);
  const [arts, setArts] = useState([])

  const handleSubmit = async(e) =>{
    e.preventDefault();
    setIsLoading(true);
    try{ //1)ПРОВЕРИТЬ  начиная с эого блока 52.19
     const response = await axios.get(`v2/everything?q=${searchValue}&apiKey=${API_KEY}`) //:AxiosResponse<any>
    setArts(response.data.articles)
} catch(e) { //e:AxiosError<any>
console.error(e)
    } finally {
      setIsLoading(false)
    }
  }  //e: ChangeEvent<HTMLFormElement>

  const handleChange = (e) =>{
    const { value } = e.target;
    setSearchValue(value)
  }
  return(
  <div>
    <form action="/"
    method="get"
    className="form-group"
     onSubmit={handleSubmit}
    >
      <label htmlFor="header-search">
        <span className="visually-hidden">Search blog posts</span>
      <input
        type="text"
        id="header-search"
        placeholder="Search blog posts"
        value={searchValue}
        name="s"
        className="form-control"
         onChange={handleChange}
      />
      </label>
      <button type="submit" className="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : ' Search'}
      </button>
    </form>
    <Articles articles={arts}/>
    {/* здесь ошибка  */}
    </div>
    )
  };
