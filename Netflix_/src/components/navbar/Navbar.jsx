import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React,{useState} from 'react'
import './navbar.css'

const Navbar = () => {
    const[isScrolled,setIsScrolled]=useState(false);
    window.onscroll= () =>{
        setIsScrolled(window.pageYOffset==0?false:true);  
return()=>(window.onscroll="null");
    };
    console.log(isScrolled);
    return (
        <div className={isScrolled?"navbarscrolled":"navbar"}>
            <div className="container">
                <div className="left">
                    <img className={"logo"} src="https://fontmeme.com/images/netflix-new-logo.png"></img>
                    <span className="title">Homepage</span>
                    <span className="title">Series</span>
                    <span className="title">Movies</span>
                    <span className="title">New and Popular</span>
                    <span className="title">My List</span>
                </div>
                <div className="right">
                    <Search className="search"/>
                    <span className="icon1" > Kid</span>
                    <Notifications className="notify" />
                    <img className={"user"} src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" ></img>
                   <div  className="profile">


                    <ArrowDropDown className="drop"/>
                    <div  className="options">
                    <span className="menu">Setting</span>
                    <span  className="log" >LogOut</span>
                    
</div>

     </div>               
                   

                </div>
            </div>

        </div>
    )
}

export default Navbar
