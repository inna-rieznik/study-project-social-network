
import React from 'react';
import { NavLink } from 'react-router-dom';
import Dialog from './Dialog/Dialog';
import classes from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {
  let dialogsData = props.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)

  let messagesData = props.messages.map(msg => <Message message={msg.message} id={msg.id}/>)

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let textMess = newMessageElement.current.value; 
    props.addMessageSt(textMess);
  }


    return (
      <div className={classes.dialogs}>
        <div className={classes.dialogsItem}>
          {dialogsData}
        </div>

        <div className={classes.messages}>
          {messagesData}
        </div>
        <div className={classes.newMessage}>
          <div >
            <textarea ref={newMessageElement} className={classes.textArea}></textarea>
          </div>
          
          <button onClick={addMessage} className={classes.sendMess}>Send Message</button>
        </div>
      </div>
    );
}

export default Dialogs;