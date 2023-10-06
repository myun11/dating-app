import React, { useState, useEffect } from 'react'
import axios from "axios";
import Carousel from './Carousel';
import {Button, ButtonGroup} from "@nextui-org/react";

const Panel = () => {
  
  const [data, setData] = useState([])

  const url = "https://waifu.it/api/waifu";
  const callAPI = async () => {
    try {
      const apiData = await axios.get(url, { headers: {
        Authorization: process.env.REACT_APP_WAIFUIT_API_KEY,
      } })
      .then(res => {
        console.log("API call was successful")
        setData(res.data)
      })
    } catch (err) {
      throw new Error(err.message);
    }
  };
    
  useEffect(() => {
    callAPI()
  }, [])

  return (
    <div>

      { data.length == 0 ? "Loading..." : 
        <div><Carousel input = {data}/>
<br/><br/><br/><br/>
        Names: {data.names.en}, {data.names.jp}, {data.names.alt}
        <br/>
        From: {data.from.name}
        Type: {data.from.type} 
        <br/>

        <ButtonGroup>
          <Button>Like: {data.statistics.fav}</Button>
          <Button>Love: {data.statistics.love}</Button>
          <Button>Hate: {data.statistics.hate}</Button>
        </ButtonGroup>



        Pass
      </div>
      }
      <button onClick = {() => console.log(data)}>data</button> 
    </div>
  )
}

export default Panel