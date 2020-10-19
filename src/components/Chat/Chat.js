import React, {useState, useEffect} from 'react';
import Message from './../Message/Message';
import { IconButton } from '@material-ui/core';
import MicNoneIcon from '@material-ui/icons/MicNone';

import './Chat.scss';
import { selectChatName, selectChatId } from '../../features/chatSlice';
import { selectUser } from './../../features/userSlice';
import { useSelector } from 'react-redux';
import db from '../../firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

function Chat() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const  chatName = useSelector(selectChatName);
  const  chatId = useSelector(selectChatId);

  useEffect(() => {
    if(chatId) {
      db.collection('chats').doc(chatId).collection('messages')
        .orderBy('timestamp').onSnapshot(snapshot => {
          setMessages(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
          })))
      })
    }
  }, [chatId]);

  const sendMessage = e => {
    e.preventDefault();

    db.collection('chats').doc(chatId).collection('messages').add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(), // время на сервере firebase взято за основу
      message: input,
      uid: user.uid,
      photo: user.photo,
      email: user.email,
      displayName: user.displayName,
    });
    setInput('');
  }

  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">{chatName}</span>
        </h4>
        <strong>Detail</strong>
      </div>

      <div className="chat__messages">
        <FlipMove >
          {messages.map(({ id, data }) => (
              <Message key={id} contents={data}/>
          ))}
        </FlipMove>
      </div>

      <div className="chat__input">
        <form >
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="iMessage"
            type="text"
          />
          <button onClick={sendMessage}>Send Message</button>
        </form>
        <IconButton>
          <MicNoneIcon className="chat__mic" />
        </IconButton>
      </div>
    </div>
  )
}

export default Chat
