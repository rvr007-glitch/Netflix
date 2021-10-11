import { AcUnit } from '@material-ui/icons'
import React from 'react'
import { Featured } from '../../components/Featured/Featured'
import { List } from '../../components/List/List'
import Navbar from '../../components/navbar/Navbar'
import './home.css'

const Home = () => {
    return (
        <div className={"home"}>
        
          <Navbar/>
          
          
      <Featured />
      <List />
      <List />
      <List />
      <List />
        </div>
        
    )

};

export default Home;
