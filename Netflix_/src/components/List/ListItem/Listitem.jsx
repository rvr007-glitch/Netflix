import { Add, PlayArrow, ThumbDown, ThumbDownAltOutlined, ThumbUp, ThumbUpAltOutlined } from '@material-ui/icons'
import React,{useState} from 'react'
import "./listitem.css"
import ReactPlayer from 'react-player'
export const Listitem = ({index}) => {
    const [isHover,setisHoverd]=useState(false);
    const trailer="https://youtu.be/EXeTwQWrcwY";
    return (
        
        <div className="listItem"style={{left: isHover&& index*180-50+index*0.5}}    onMouseEnter={()=>setisHoverd(true)} onMouseLeave={()=>setisHoverd(false)}>
        <img src="https://mypostercollection.com/wp-content/uploads/2018/08/The-Dark-Knight-Poster-2018-MyPosterCollection.com-1-683x1024.jpg"></img>
          {isHover &&(
          <>
        <ReactPlayer className="video"  url="https://www.youtube.com/watch?v=EXeTwQWrcwY" controls={true} playing={true} mute="muted" width=" 325px" height="120px"
             object-fit= "cover" position="absolute"
             top="0"
    left="0"
        />
           <div className="iteminfo">
           
           <div className="icons">
           <PlayArrow className="icon"></PlayArrow>
           <Add className="icon"/>
           <ThumbUpAltOutlined className="icon"/>
           <ThumbDownAltOutlined className="icon"/>

           </div>
           <div className="listiteminfo">
               <span>1 hr 14 min</span>
               <span className="limit">18+</span>
               <span>2008</span>
               </div>
               <div className="desc">
               The Dark Knight Rises is a 2012 superhero film directed by 
               Christopher Nolan,
    
                 
               </div>
               <div className="genre">Action/Thriller</div>

           </div>
           
           </>
          )}
          
        </div>
    )
}
