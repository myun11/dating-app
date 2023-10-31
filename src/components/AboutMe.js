import React, { useState, useEffect } from 'react'

const AboutMe = ({prompt, answer}) => {
  
  return (
    <div>

      about me component

      <div>
        {/* container */}
        <h2>{prompt}</h2>
        {answer}
      </div>

      {/* <button onClick={() => console.log(Prompts)}>prompts test</button> */}


    </div>
  )
}

export default AboutMe