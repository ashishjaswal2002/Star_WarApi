import classes from './Button.module.css';

const Button = (props)=>{
    return (
      <div className={classes.container}>
        <button onClick={props.onClick} className={classes.button}>Get Movies</button>
      </div>

    )
}
export default Button;