import React, { forwardRef } from 'react';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from './../../features/userSlice';
import './Message.scss';

// react-flip-move использую для анимаций для этого обернем функцию компонента
const Message = forwardRef(({
  id,
  contents: {
    timestamp,
    message,
    uid,
    photo,
    email,
    displayName,
  }},
  ref
) => {
  const user = useSelector(selectUser)

  return (
    <div
      ref={ref}
      className={`message ${user.email === email && 'message__sender'}`}>
      <Avatar className="message__photo" src={photo}/>
      <p>{message}</p>
      <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
    </div>
  )
})

export default Message;
