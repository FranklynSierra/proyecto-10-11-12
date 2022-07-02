import React,{useState} from 'react';



const Color = () => {
    const [color, setColor] = useState('#000000')  

    const random0to255 = () => Math.floor(Math.random() * 256)

    // crea un color rgb aleatorio 
    const generateRandomRGB = () => ({
        r: random0to255(), 
        g: random0to255(),
        b: random0to255(),
    })
    
    // pasa rgb a hex para
    const rgbToHex = (r, g, b) =>
        "#" +
        [r, g, b]
          .map((x) => {
            const hex = x.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
          })
          .join("");

          const [randomInterval, setRandomInterval] = useState(0)  

          const changeColor = () => {
              setRandomInterval(setInterval(() => {
                  const rgb = generateRandomRGB()
                  setColor(rgbToHex(rgb.r, rgb.g, rgb.b))
              }, 350))
          }
          
          const stopChange = () => {
              clearInterval(randomInterval)
          }
    return (
        <div  onDoubleClick={stopChange} onMouseLeave={stopChange}onMouseOver={changeColor} className='color-principal'style={{width: '300px', height: '300px', backgroundColor: color}}>
            
        </div>
    );
}

export default Color;
