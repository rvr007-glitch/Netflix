import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'
import './watch.css'
import ReactPlayer from 'react-player'

export  default function Watch (){
    return (
        <div className="watch">
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div> 
        <ReactPlayer className="video"  url="https://www.youtube.com/watch?v=EXeTwQWrcwY" controls={true} playing={true} mute="muted" width=" 100vw" height="100vh"
          autoPlay={true}   object-fit= "cover" position="absolute"
             top="0"
    left="0"
        />
        </div>
    )
}
