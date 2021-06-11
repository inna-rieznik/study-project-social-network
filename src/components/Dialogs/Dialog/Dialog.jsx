
import { NavLink } from 'react-router-dom';
import classes from './Dialog.module.css';



const Dialog = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={classes.dialog}>
      {/* <div>
        <img className={classes.dialogImg} src="https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"></img>
      </div> */}
      <NavLink to={path}>
        {props.name}
      </NavLink>

    </div>
  );
}

export default Dialog;