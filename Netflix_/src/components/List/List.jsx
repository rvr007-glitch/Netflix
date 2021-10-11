import { ArrowBackIosOutlined, ArrowForward, ArrowForwardIosOutlined } from '@material-ui/icons'
import React,{useRef, useState} from 'react'
import "./list.css"
import { Listitem } from './ListItem/Listitem'
export const List = () => {
    const listRef= useRef();
    const[slideNumber,setslideNumber]=useState(0);
    const[isMoved,setisMoved]=useState(false);
    const handleClick=(direction)=>{
        setisMoved(true);
        const distance=listRef.current.getBoundingClientRect().x-50;
        if(direction=="left"&& slideNumber>0){
            setslideNumber(slideNumber-1);
           

            listRef.current.style.transform=`translateX(${300+distance}px)`
        }
        if(direction=="right" &&slideNumber<7){
            setslideNumber(slideNumber+1);
            

            listRef.current.style.transform=`translateX(${-300+distance}px)`
        }
    }
    return (
        <div className="list">
        <span className="listtitle">Continue To Watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className="ArrowSliderLeft"onClick={()=>handleClick("left")}style={{display:!isMoved && "none"}}/>
            <div className="container" ref={listRef}>
                <Listitem index={0}/>
                <Listitem index={1}/>
                <Listitem index={2}/>
                <Listitem index={3}/>
                <Listitem index={4}/>
                <Listitem index={5}/>
                <Listitem index={6}/>
                <Listitem index={7}/>
                <Listitem index={8}/>
                <Listitem index={9}/>
                <Listitem index={10}/>
                <Listitem index={11}/>
                <Listitem index={12}/>
                <Listitem index={13}/>

            </div>
            <ArrowForwardIosOutlined className="ArrowSliderRight" onClick={()=>handleClick("right")}/>
        </div>
        </div>
    )
}
