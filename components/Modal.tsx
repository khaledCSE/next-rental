// import { useState } from 'react';
import { FC } from 'react';
import classes from './Modal.module.scss';
import { Close as CloseIcon } from '@material-ui/icons';

interface iModal {
    closeHandler(): any;
}

const Modal: FC<iModal> = (props) => {
    // const [open, setOpen] = useState(true);
    return (
        <div className={classes.backdrop}>
            <div className={classes.modal}>
                <span className={classes.close} onClick={props.closeHandler}>
                    <CloseIcon />
                </span>
                {props.children}
            </div>
        </div>
    );
};

export default Modal;
