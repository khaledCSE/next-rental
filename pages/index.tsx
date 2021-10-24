import type { NextPage } from 'next';
import BasicLayout from '../layouts/BasicLayout';
import Table from '../components/Table';
import { useContext } from 'react';
import { rentalContext, rentalTableCols } from '../contexts/rental.context';

const Home: NextPage = () => {
    const { rentals } = useContext(rentalContext);
    return (
        <BasicLayout>
            <Table columns={rentalTableCols} data={rentals} />
        </BasicLayout>
    );
};

export default Home;
