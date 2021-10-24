import { FC, Fragment } from 'react';
import { iRental } from '../contexts/rental.context';
import classes from './Table.module.scss';

interface iTable {
    columns: string[];
    data: any[];
}

const Table: FC<iTable> = (props) => {
    const { columns, data } = props;
    return (
        <div className={classes['table-container']}>
            <input
                type="text"
                placeholder="Search for rental items"
                className={classes.search}
            />
            <table className={classes['content-table']}>
                <thead>
                    <tr>
                        <th>#</th>
                        {columns.map((col, i) => (
                            <Fragment>
                                <th key={i}>{col}</th>
                            </Fragment>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((el: iRental, i) => (
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
