import { useState } from "react";
import memesData from "../memesData"
export default function Meme() {
    const [allMemeImages, setAllMemeImages] = useState(memesData);
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    function getRandomMeme() {
        var arrayLength = allMemeImages.data.memes.length
        let randomVal = Math.floor(Math.random() * arrayLength);
        // console.log(memesData.data.memes[randomVal])
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                randomImage: allMemeImages.data.memes[randomVal].url
            }
        })
    }

    return (
        <div className="form_container">
            <form className="form">
                <div className="input_form_container">
                    <input type="text" placeholder="Top Phrase" className="top_phrase form_input" />
                    <input type="text" placeholder="Bottom Phrase" className="bottom_phrase form_input" />
                </div>
                <input type="button" className="generate_button" value="Get a new meme image 🖼" onClick={getRandomMeme} />
                <div className="memeContainer">
                    <img src={meme.randomImage} width="100%" />    
                </div> 
            </form>
        </div>
    )
}