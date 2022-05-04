import React, { useState } from 'react'
import './styles.css'

const Swatch = ({color = "#bbbbbb"}) => {
    const [currentColor, setCurrentColor] = useState(color)
  return (
    <div className='swatch-container'>
        <div className='color-swatch' style={{backgroundColor: currentColor}}></div>        
        <input style={{backgroundColor: currentColor}} className='color-input'  type="color" value={currentColor} onChange={(e) => {setCurrentColor(e.target.value)}}/>
    </div>
  )
}

export default Swatch;