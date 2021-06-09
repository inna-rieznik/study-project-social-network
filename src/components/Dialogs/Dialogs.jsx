
import { NavLink } from 'react-router-dom';
import Dialog from './Dialog/Dialog';
import classes from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {

  let dialogs = [
    {id:1, name:'Dima'},
    {id:2, name:'Misha'},
    {id:3, name:'Tania'}
  ]

  let messages = [
    {id:1, message:"Hi"},
    {id:2, message:"How you doing"},
    {id:3, message:"yo"},
    {id:4, message:"yoyoyo"}
  ] 

  let dialogsData = dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)

  let messagesData = messages.map(message => <Message  message={message.message}/>)

    return (
      <div className={classes.dialogs}>
        <div className={classes.dialogsItem}>
          {dialogsData}

          {/* <Dialog name={DialogData[0].name} id={DialogData[0].id}/>
          <Dialog name={DialogData[1].name} id={DialogData[1].id}/>
          <Dialog name={DialogData[2].name} id={DialogData[2].id}/> */}
        </div>

        <div className={classes.messages}>
          {messagesData}

          {/* <Message  message={MessageData[0].message}/>
          <Message  message={MessageData[1].message}/>
          <Message  message={MessageData[2].message}/> */}
        </div>
      </div>
    );
}

export default Dialogs;