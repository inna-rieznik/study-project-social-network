
import { NavLink } from 'react-router-dom';
import Dialog from './Dialog/Dialog';
import classes from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {
debugger;
  let dialogsData = props.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)

  let messagesData = props.messages.map(msg => <Message message={msg.message} id={msg.id}/>)




    return (
      <div className={classes.dialogs}>
        <div className={classes.dialogsItem}>
          {dialogsData}
        </div>

        <div className={classes.messages}>
          {messagesData}
        </div>
      </div>
    );
}

export default Dialogs;