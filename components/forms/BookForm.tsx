import { Dispatch, FC, FormEvent, SetStateAction, useState } from 'react';
import Button from '../Button';
import data from '../../seeds/Data.json';
import classes from './BookForm.module.scss';
import { getDifferenceInDays, isFromTodayOrLater } from '../../helpers/date';

interface iBookForm {
    closeModalHandler(): any;
    priceHandler(price: number): any;
}

const BookForm: FC<iBookForm> = (props) => {
    const { closeModalHandler, priceHandler } = props;
    const [bookProduct, setBookProduct] = useState('');
    const [bookFrom, setBookFrom] = useState('');
    const [bookTo, setBookTo] = useState('');

    const product_names = data.map((el) => ({ code: el.code, name: el.name }));

    const calculatePrice = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const days_in_rental = getDifferenceInDays(bookFrom, bookTo);

        const valid_from = isFromTodayOrLater(bookFrom);

        const product = data.find((el) => el.name === bookProduct);

        if (product && product.availability) {
            // if (!valid_from) {
            //     alert("Can't book in previous dates");
            //     return closeModalHandler();
            // }

            if (days_in_rental < product.minimum_rent_period) {
                alert("Can't book in previous dates");
                return closeModalHandler();
            }

            const totalPrice = Math.round(
                product.price * days_in_rental
            ).toFixed(2);
            priceHandler(+totalPrice);
            return closeModalHandler();
        } else {
            closeModalHandler();
        }
    };

    return (
        <form onSubmit={calculatePrice}>
            <h4>Book a Product</h4>
            <select
                className={classes.select}
                onChange={(e) => setBookProduct(e.target.value)}
                required
            >
                <option defaultValue="">-- Select Product --</option>
                {product_names.map((el) => (
                    <option key={el.code} value={el.name}>
                        {el.name}
                    </option>
                ))}
            </select>

            <div className={classes.dates}>
                <div className={classes.datePicker}>
                    <label htmlFor="book-from">From: </label>
                    <input
                        type="date"
                        id="book-from"
                        onChange={(e) => setBookFrom(e.target.value)}
                        required
                    ></input>
                </div>
                <div className={classes.datePicker}>
                    <label htmlFor="book-to">To: </label>
                    <input
                        type="date"
                        id="book-to"
                        onChange={(e) => setBookTo(e.target.value)}
                        required
                    ></input>
                </div>
            </div>
            <Button title="Book Now" onClick={() => {}} />
        </form>
    );
};

export default BookForm;
