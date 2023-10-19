import React, { useState, useEffect } from 'react'
import axios from "axios";
import ImageCarousel from './ImageCarousel';
import Button from '@mui/material/Button';

const Panel = () => {
  
  const [data, setData] = useState([])
  const [images, setImages] = useState([])
  const [like, setLike] = useState(0)
  const [love, setLove] = useState(0)
  const [hate, setHate] = useState(0)

  const url = "https://waifu.it/api/waifu";
  const callAPI = async () => {
    try {
      const apiData = await axios.get(url, { headers: {
        Authorization: process.env.REACT_APP_WAIFUIT_API_KEY,
      } })
      .then(res => {
        console.log("API call was successful")
        setData(res.data)

        // const filteredImages = res.data.images.filter(entry => entry.status !== )
        // setImages(filteredImages)
        setLike(res.data.statistics.fav)
        setLove(res.data.statistics.love)
        setHate(res.data.statistics.hate)
      })
    } catch (err) {
      throw new Error(err.message);
    }
  };
    
  useEffect(() => {
    callAPI()
  }, [])

  return (
    // <div className='Testing'>
    <div>

      { data.length == 0 ? "Loading..." : 
        <div>
          <ImageCarousel input = {data}/>
<br/><br/><br/><br/>
        Names: {data.names.en}, {data.names.jp}, {data.names.alt}
        <br/>
        From: {data.from.name}
        <br/>
        Type: {data.from.type} 
        <br/>

          <Button onClick = {() => {
            setLike(like+1)
            callAPI()
          }}>Like: {like}</Button>
          <Button onClick = {() => {
            setLove(love+1)
            callAPI()
          }}>Love: {love}</Button>
          <Button onClick = {() => {
            setHate(hate+1)
            callAPI()
          }}>Hate: {hate}</Button>
          <Button onClick = {() => {
            callAPI()
          }}>Pass</Button>
      </div>
      }


<br/><br/><br/><br/><br/><br/><br/>debug stuff
      <button onClick = {() => console.log(data)}>data</button> 
      <button onClick = {() => console.log(images)}>filtered images</button> 
    </div>
  )
}

export default Panel