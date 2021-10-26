import { FC, FormEvent, useState } from 'react';
import Button from '../Button';
import data from '../../seeds/Data.json';
import classes from './ReturnForm.module.scss';

// Self-Imposed Rule --> Not mentioned in the task briefing
// To Use a given input (used_mileage) only
const cost_per_mile = 5;

interface iBookForm {
    closeModalHandler(): any;
    priceHandler(price: number): any;
}

const ReturnForm: FC<iBookForm> = (props) => {
    const { closeModalHandler, priceHandler } = props;
    const [returnProduct, setReturnProduct] = useState('');
    const [usedMileage, setUsedMileage] = useState(0);

    const product_names = data.map((el) => ({ code: el.code, name: el.name }));

    const calculatePrice = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const product = data.find((el) => el.name === returnProduct);

        if (product) {
            if (product.mileage) {
                const totalPrice = Math.round(
                    (product.price += usedMileage * cost_per_mile)
                ).toFixed(2);
                priceHandler(+totalPrice);
            } else {
                priceHandler(product.price);
            }
            return closeModalHandler();
        } else {
            closeModalHandler();
        }
    };

    return (
        <form onSubmit={calculatePrice} className={classes.form}>
            <h4>Book a Product</h4>
            <select
                className={classes.select}
                onChange={(e) => setReturnProduct(e.target.value)}
                required
            >
                <option defaultValue="">-- Select Product --</option>
                {product_names.map((el) => (
                    <option key={el.code} value={el.name}>
                        {el.name}
                    </option>
                ))}
            </select>

            <input
                type="number"
                className={classes.input}
                id=""
                min="1"
                onChange={(e) => setUsedMileage(+e.target.value)}
            />

            <Button title="Return Now" onClick={() => {}} />
        </form>
    );
};

export default ReturnForm;
