import classes from './styles/Button.module.css';

interface buttonProps{
    title:string,
    customStyles:Object
    disableProp?:boolean,
}

const Button = ({title, customStyles, disableProp}:buttonProps) =>{

    return(
        <button className={classes.button} style={customStyles} disabled={disableProp} >
           {title}
        </button>
    )
}


export default Button;