import React, { useEffect, useState } from "react";
import memeData from "../../memeData/memeData";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText:"",
    bottomText:"",
    randomImage:"http://i.imgflip.com/1bij.jpg"
  })

  const [allImages, setAllImages] = useState(memeData)

  useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllImages(data.data.memes))

    
  },[])


  function handleOnclick() {
    //Get random meme image
    console.log("handleOnCLick Funct")
    const memesData = allImages;
    
    const randomIndex = Math.floor(Math.random() * memesData.length);
    //setMemeImg(memes[randomIndex].url);
    


    setMeme(prevMeme => {
      return{
        ...prevMeme,
        randomImage: memesData[randomIndex].url
      }
    })
  }

  function handleChange(event){
    
    const {name,value} = event.target
    setMeme(prevText =>{
      return{
        ...prevText,
        [name]:value

      }
    })
    console.log(meme)
    
  }



  return (
    <main>
      <form class="form-inline" action="#">
        <input
          type="text"
          id="finput"
          placeholder="Enter first line"
          onChange={handleChange}
          name="topText"

        />
        <input
          type="text"
          id="sinput"
          placeholder="Enter second line"
          name="bottomText"
          onChange={handleChange}
        />
        <button onClick={() => handleOnclick()}>Generate a new meme</button>
      </form>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>


    </main>
  );
}
