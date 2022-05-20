import React, { useState,useEffect } from 'react'

export default function Card() {
    const [memeData,setMemeData] = useState({})
    const [meme,setMeme] = useState({
        upperLine:'',
        lowerLine:'',
        url:"http://i.imgflip.com/1bij.jpg"
    })

    useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setMemeData(data))
    },[])

    const handleChange = (e) => {
        const {name,value} = e.target
        setMeme(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const getMemeImage = () => {
        const rndNum = Math.floor(Math.random()*memeData.data.memes.length)
        setMeme(prev => ({
            ...prev,
            url:memeData.data.memes[rndNum].url
        }))
    }

    return (
        <main className="card">
            <div className="input-form">
                <div className="input-container">
                    <input type="text" className="input-text" placeholder='upper line' value={meme.upperLine} onChange={handleChange} name="upperLine"/>
                    <input type="text" className="input-text" placeholder='lower line' value={meme.lowerLine} onChange={handleChange} name="lowerLine"/>
                </div>
                <button className='rand-btn' onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <div className="meme">
                <img className="meme-img" src={meme.url}/>
                <h2 className="meme-text top">{meme.upperLine}</h2>
                <h2 className="meme-text bottom">{meme.lowerLine}</h2>
            </div>
        </main>
    )
}

