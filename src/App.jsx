import React from 'react'
import Slot from './Slot'
import './index.css'
const App = () => {
  return <>

    <h1 className=" heading_style"> 🎰 <span>Slot  Machine  Game</span> 🎰</h1>
    <div className="machine">
      <Slot x="😄 " y="😄 " z="😄 " />
      <hr />
      <Slot x="🇸🇧 " y="😄 " z="😄 " />
      <hr />
      <Slot x="🇸🇧 " y="🇸🇧 " z="🇸🇧 " />
      <hr />
    </div>




  </>
}
export default App;
