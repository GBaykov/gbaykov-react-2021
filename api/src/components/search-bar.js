import React, { FC, useState,useEffect, Component } from 'react';
import ReactDOM from 'react-dom';
//NEWS Api
//TO Do axios
//import axiosInstance from '../services/api';
import axios from '../services/api'; //111111   npm i axios
import { Articles } from './articles';
import { MakeCardField } from './card';
import { Home, Table } from './test';


window.React = React;
'relevancy','popularity', 'publishedAt'

const API_KEY = '8bfe103c43b54bbd99756e68af3a7cb3'
export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');//useState<string>('') и тд
  const [isLoading, setIsLoading] = useState(false);
  const [arts, setArts] = useState([]);
  const [sortBy, setSortBy] = useState('unsorted');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [page, setPage] = useState(1);

  const handleSubmit = async(e) =>{

    e.preventDefault();

    setIsLoading(true);
    try{ //1)ПРОВЕРИТЬ  начиная с эого блока 52.19
     const response = await axios.get(
       `v2/everything?q=${searchValue}&apiKey=${API_KEY}&sortBy=${sortBy}&from=${from}&pageSize=10&page=${page}`) //:AxiosResponse<any>
    setArts(response.data.articles);

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
      <div>
        <label>
          relevancy
          <input
          type='radio'
          value={'relevancy'}
          checked={sortBy==='relevancy'}
          onChange={()=>{setSortBy('relevancy')}} />
        </label>
        <label>
        popularity
          <input
          type='radio'
          value='popularity'
          checked={sortBy==='popularity'}
          onChange={()=>{setSortBy('popularity')}} />
        </label>
        <label>
        publishedAt
          <input
          type='radio'
          value='publishedAt'
          checked={sortBy==='publishedAt'}
          onChange={()=>{setSortBy('publishedAt')}} />
        </label>
      </div>
{/* 1:51  конец сортировки. Предложение расширить сортировку */}
       <div>
         <p>from</p>
         <input type='date'/>
         <p>to</p>
         <input type='date'/>
       </div>
    </form>
    <Table1 articles={arts} page={page} onChangePage={(pageFromInput)=> setPage(pageFromInput)}/>
    {/* <MakeCardField/> */}
    {/* {<Table />} */}
    {/* <Articles  /> */}
    {/* здесь ошибка  */}
    </div>
    )
  };
  // articles={arts} page={page} onChangePage={(pageFromInput)=> setPage(pageFromInput)}
  export const Table1 = ({articles, page, onChangePage}) =>{

    const [artPage, setArtPage] = useState('');
    // const {articles, page, onChangePage} = props;

   useEffect(()=>{
     setArtPage(page)
   }, [page])

   const handleChange = (e)=>{
      const { value } = e.target;
       onChangePage(value)
   }

    return(
    <div>
      <table>
        <tr>
          <td>Title</td>
          <td>Author</td>
          <td>Published at</td>
          <td>image</td>
        </tr>
       { articles.map(({author, title, discription, publishedAt,urlToImage},index)=> {
  return(
  <tr key={index}>
    <td>{title}</td>
    <td>{author}</td>
    <td>{publishedAt}</td>
    <td>
    <img width={150} height={150} src={urlToImage} alt={title}/>
    </td>
  </tr> )
        })}
      </table>
      <lable >
        <input  type="number" value={artPage} onChange={handleChange} />
      </lable>

    </div>)
  }
