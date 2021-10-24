import type { NextPage } from 'next';
import BasicLayout from '../layouts/BasicLayout';
import Table from '../components/Table';
import { rentalTableCols } from '../contexts/rental.context';

const Home: NextPage = () => {
    return (
        <BasicLayout>
            <Table columns={rentalTableCols} />
        </BasicLayout>
    );
};

export default Home;
