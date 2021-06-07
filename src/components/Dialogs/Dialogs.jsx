
import { NavLink } from 'react-router-dom';
import Dialog from './Dialog/Dialog';
import classes from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {
    return (
      <div className={classes.dialogs}>
        <div className={classes.dialogsItem}>
          <Dialog name="Dima" id="1"/>
          <Dialog name="Misha" id="2"/>
          <Dialog name="Tania" id="3"/>
        </div>

        <div className={classes.messages}>
          <Message  message="Hi"/>
          <Message  message="How you doing"/>
          <Message  message="yo"/>
        </div>
      </div>
    );
}

export default Dialogs;