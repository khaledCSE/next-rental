import { FC, useContext } from 'react';
import { iRental, rentalContext } from '../contexts/rental.context';
import classes from './Table.module.scss';
import data from '../seeds/Data.json';

interface iTable {
    columns: string[];
}

const Table: FC<iTable> = (props) => {
    const { columns } = props;
    const { rentals, setRentals } = useContext(rentalContext);
    const search = (txt: string) => {
        if (txt.length === 0) {
            setRentals(data);
        } else {
            const res = rentals.filter((r: iRental) =>
                r.name.toLowerCase().includes(txt.toLowerCase())
            );
            setRentals(res);
        }
    };
    return (
        <div className={classes['table-container']}>
            <input
                type="text"
                placeholder="Search for rental items"
                className={classes.search}
                onChange={(e) => search(e.target.value)}
            />
            <table className={classes['content-table']}>
                <thead>
                    <tr>
                        <th>#</th>
                        {columns.map((col, i) => (
                            <th key={i}>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rentals.map((el: iRental, i: number) => (
                        <tr key={el.code}>
                            <td>{i + 1}</td>
                            <td>{el.name}</td>
                            <td>{el.type}</td>
                            <td>{el.availability ? 'Yes' : 'No'}</td>
                            <td>{el.needing_repair ? 'Yes' : 'No'}</td>
                            <td>{el.durability}</td>
                            <td>{el.max_durability}</td>
                            <td>{el.mileage ? el.mileage : 'N/A'}</td>
                            <td>{el.price}</td>
                            <td>{el.minimum_rent_period}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
