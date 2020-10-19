import React from 'react';
import Sidebar from './../Sidebar/Sidebar';
import Chat from './../Chat/Chat';

import "./Imessage.css";

function Imessage() {
  return (
    <div className="imessage">
      <Sidebar />
      <Chat/>
    </div>
  )
}

export default Imessage
