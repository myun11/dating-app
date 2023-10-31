import React, { useState, useEffect } from 'react'
import axios from "axios";
import ImageCarousel from './ImageCarousel';
import Button from '@mui/material/Button';
import Heart from "react-animated-heart";
// import StarButton from './StarButton';

import StarIcon from './StarIcon'
import './StarButton.css'

import AboutMe from './AboutMe';
import Prompts from './prompts.json'


const Panel = () => {
  
  const [data, setData] = useState([])
  const [images, setImages] = useState([])
  const [like, setLike] = useState(0)
  const [love, setLove] = useState(0)
  const [hate, setHate] = useState(0)

  const [starred, setStarred] = useState(false)
  const [heart, setHeart] = useState(false);

  const [index, setIndex] = useState(0)
  

  const url = "https://waifu.it/api/waifu";
  const callAPI = async () => {
    try {
      const apiData = await axios.get(url, { headers: {
        Authorization: process.env.REACT_APP_WAIFUIT_API_KEY,
      } })
      .then(res => {
        setIndex(Math.floor(Math.random()*Prompts.prompts.length))

        console.log("API call was successful")
        setData(res.data)

        // const filteredImages = res.data.images.filter(entry => entry.status !== )
        // setImages(filteredImages)
        setLike(res.data.statistics.fav)
        setLove(res.data.statistics.love)
        setHate(res.data.statistics.hate)
        setStarred(false)
        setHeart(false)

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
          
          {/* <Button className={`StarButton ${starred ? 'StarButton--starred' : ''}`} variant='contained'
            size='large'
            onClick = {() => {
            setStarred((starred) => !starred)
            setLike(like+1)
            callAPI()}} endIcon={<StarIcon/>}>
            Like
          </Button> */}

          <Button className={`StarButton ${starred ? 'StarButton--starred' : ''}`}
            variant='contained'
            onClick = {() => {
            setStarred((starred) => !starred)
            setLike(like+1)
            callAPI()}}
            endIcon={<StarIcon/>}>
            {like}
          </Button>


          {/* <Button className={`StarButton ${starred ? 'StarButton--starred' : ''}`}
            variant='contained'
            size='large'
            onClick = {() => {
            setStarred((starred) => !starred)
            setLike(like+1)
            callAPI()
          }}><StarIcon /></Button> */}
          
          <Button className={`StarButton ${heart ? 'StarButton--starred' : ''}`}
            variant='contained'
            size='large'
            onClick = {() => {
            setHeart((heart) => !heart)
            setLove(love+1)
            callAPI()
          }}> {love} <Heart isClick={heart}  /></Button>
          <Button
            variant='raised'
            size='large'
            onClick = {() => {
            setHate(hate+1)
            callAPI()
          }}>Hate: {hate}</Button>
          <Button
            variant='raised'
            size='large'
            onClick = {() => {
            callAPI()
          }}>Pass</Button>
          <br/><br/>
          <br/>
          (turn these into bigger containers)
        Like: {like}
        <br/>
        Love: {love}
        <br/>
        Hate: {hate}
        <br/>
          <br/><br/>
        Names: {data.names.en}, {data.names.jp}, {data.names.alt}
        <br/>
        From: {data.from.name}
        <br/>
        Type: {data.from.type}
        
      


      </div>
      }


<br/><br/><br/><br/><br/><br/><br/>debug stuff
      <button onClick = {() => console.log(data)}>data</button> 
      <button onClick = {() => console.log(images)}>filtered images</button>

      
      <AboutMe prompt = {Prompts.prompts[index]} answer = {Prompts.answers[index]} />
    </div>
  )
}

export default Panel