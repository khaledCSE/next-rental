import { FC } from 'react';
import classes from './Button.module.scss';

interface iButton {
    title: string;
    onClick(event: any): any;
}

const Button: FC<iButton> = (props) => {
    const { title, onClick } = props;
    return (
        <button className={classes.btn} onClick={(e) => props.onClick(e)}>
            {title}
        </button>
    );
};
export default Button;
