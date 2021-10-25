import type { NextPage } from 'next';
import BasicLayout from '../layouts/BasicLayout';
import Table from '../components/Table';
import Button from '../components/Button';
import { rentalTableCols } from '../contexts/rental.context';

const Home: NextPage = () => {
    return (
        <BasicLayout>
            <Button title="Book" onClick={() => {}} />
            <Table columns={rentalTableCols} />
        </BasicLayout>
    );
};

export default Home;
