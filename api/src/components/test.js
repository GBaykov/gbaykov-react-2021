import { useEffect, useState } from "react";
import React from "react";
import ReactDOM, { render } from 'react-dom';
import { AUDIO_URL, IMG_URL } from '../constants';
import { DATA_OF_CARDS } from '../data';

window.React = React;

export const Table = () =>{

    //const [artPage, setArtPage] = useState('');
    // const {articles, page, onChangePage} = props;

  //  useEffect(()=>{
  //    setArtPage(page)
  //  }, [page])

  //  const handleChange = (e)=>{
  //    const { value } = e.target
  //    const regExp = /d+/;
  //    const matchedValue = value.match(regExp)
  //    if(matchedValue) {
  //      onChangePage(+matchedValue[0])
  //    } else {
  //      setArtPage('')
  //    }
  //  }

    return(
    <div> homeHOME
      {/* <table>
        <tr>
          <td>Title</td>
          <td>Author</td>
          <td>Published at</td>
          <td>image</td>
        </tr>
       { articles.map(({author, title, discription, publishedArt,urlToImage},index)=> {
  return(
  <tr key={index}>
    <td>{title}</td>
    <td>{author}</td>
    <td>{publishedArt}</td>
    <td>
    <img width={240} height={360} src={urlToImage} alt={title}/>
    </td>
  </tr> )
        })}
      </table>
      <lable >
        <input type='text' value={artPage} onChange={handleChange}/>
      </lable> */}

    </div>)
  }

