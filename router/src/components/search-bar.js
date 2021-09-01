import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router,
  Route,
  Switch,Link,
  useRouteMatch,
  useParams
 } from 'react-router-dom';

import axios from '../services/api';
import { Details } from './details';

window.React = React;
//'relevancy','popularity', 'publishedAt'

export const API_KEY = '8bfe103c43b54bbd99756e68af3a7cb3'

export const SearchBar = () => {



  const [searchValue, setSearchValue] = useState('');//useState<string>('') и тд
  const [isLoading, setIsLoading] = useState(false);
  const [arts, setArts] = useState([]);
  const [sortBy, setSortBy] = useState('unsorted');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [page, setPage] = useState(1);
  const [tit, setTit] = useState('');

  const addArtic = (title)=>{
    //topArticle(title);
    setTit(title)
  }

  const handleSubmit = async(e) =>{

    e.preventDefault();

    setIsLoading(true);
    try{ //1)ПРОВЕРИТЬ  начиная с эого блока 52.19
     const response = await axios.get(
       `v2/everything?q=${searchValue}&apiKey=${API_KEY}&sortBy=${sortBy}&from=${from}&to=${to}&pageSize=10&page=${page}`) //:AxiosResponse<any>
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

  const setFromDate = (e) =>{
  const {value} = e.target;
  setFrom(value)
}
const setToDate = (e) =>{
  const {value} = e.target;
  setTo(value)
}

  return(
  <div>
    <form action="/"
    method="get"
    className="form-group"
     onSubmit={handleSubmit}
    >
      <label htmlFor="header-search">
        <span className="form-head">Search blog posts</span>
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
        <label className='radio-label'>
          relevancy
          <input
          type='radio'
          value={'relevancy'}
          checked={sortBy==='relevancy'}
          onChange={()=>{setSortBy('relevancy')}} />
        </label>
        <label className='radio-label'>
        popularity
          <input
          type='radio'
          value='popularity'
          checked={sortBy==='popularity'}
          onChange={()=>{setSortBy('popularity')}} />
        </label>
        <label className='radio-label'>
        published At
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
         <input type='date'
          onChange={setFromDate} />
         <p>to</p>
         <input type='date'
         onChange={setToDate}/>
       </div>
    </form>


    <Table1 addArtic={addArtic} articles={arts} page={page} onChangePage={(pageFromInput)=> setPage(pageFromInput)}/>
    {/* {<Table />} */}
    {/* <Articles  /> */}
    {/* здесь ошибка. Почему-то импорты с других файлов багуют и не работают  */}
    </div>
    )
  };
  export const Table1 = ({articles, page, onChangePage,addArtic}) =>{

    const [artPage, setArtPage] = useState('');
    const [title, setTitle] = useState('');



   useEffect(()=>{
     setArtPage(page)
   }, [page])

   const handleChange = (e)=>{
      const { value } = e.target;
       onChangePage(value)
   }

    return(

    <div>
      <table className='table'>
        <thead className='thead'>
          <tr>
          <td className='td'>Title</td>
          <td className='td'>Author</td>
          <td className='td'>Published at</td>
          <td className='td'>image</td>
        </tr>
        </thead>
        <tbody className='tbody'>
       { articles.map(({author, title, discription, publishedAt,urlToImage},index)=> {

const clickHandler = ()=>{
  addArtic(title)
 }

         const onClick= ()=>{
          setTitle(title)
         }


         //to={`/details/${index}`}
  return(
  <tr key={index} onClick={clickHandler}>
    <td className='td'  onClick={onClick}>
      <Link to={`/details/${title}`} exact  > {title} </Link>
    </td>
    <td className='td'>{author}</td>
    <td className='td'>{publishedAt}</td>
    <td className='td'>
    <img width={150} height={150} src={urlToImage} alt={title}/>
    </td>
  </tr> )
        })}
        </tbody>
      </table>
      <lable>
        <input  type="number" value={artPage} onChange={handleChange} />
      </lable>
      {/* <Switch>

          <Route
    path={`/details/:id`}
    render={(props) => <Details sendTitle={sendTitle} title={title} {...props} /> } />

        </Switch> */}
    </div>

    )
  }
//  <Route path={`/details/${index}`} exact>
