import { createContext, Dispatch, SetStateAction, useState } from 'react';
import data from '../seeds/Data.json';

export interface iRental {
    code: string;
    name: string;
    type: string;
    availability: boolean;
    needing_repair: boolean;
    durability: number;
    max_durability: number;
    mileage: number | null;
    price: number;
    minimum_rent_period: number;
}

export const rentalTableCols = [
    'Name',
    'Type',
    'Availability',
    'Needs Repair',
    'Durability',
    'Max Durability',
    'Mileage',
    'Price',
    'Minimum Rent Period',
];

export const rentalContext = createContext<any>(data);

export const RentalProvider = (props: any) => {
    const [rentals, setRentals] = useState<iRental[]>(data);

    return (
        <rentalContext.Provider value={{ rentals, setRentals }}>
            {props.children}
        </rentalContext.Provider>
    );
};
