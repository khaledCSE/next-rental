import { FC } from 'react';
import classes from './Button.module.scss';

interface iButton {
    title: string;
    onClick(event: any): any;
    variant?: 'primary' | 'secondary';
}

const Button: FC<iButton> = (props) => {
    const { title, onClick, variant } = props;
    return (
        <button
            className={classes.btn}
            onClick={(e) => props.onClick(e)}
            data-variant={variant ? variant : 'default'}
        >
            {title}
        </button>
    );
};
export default Button;
