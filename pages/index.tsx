import type { NextPage } from 'next';
import BasicLayout from '../layouts/BasicLayout';
import Table from '../components/Table';
import Modal from '../components/Modal';
import { rentalTableCols } from '../contexts/rental.context';
import Button from '../components/Button';
import { useState } from 'react';

const Home: NextPage = () => {
    const [bookmodal, setBookModal] = useState(false);
    const [returnModal, setReturnModal] = useState(false);

    const closeBookModal = () => setBookModal(false);
    const closeReturnModal = () => setReturnModal(false);
    return (
        <BasicLayout>
            <Table columns={rentalTableCols}>
                <Button title="Book" onClick={() => setBookModal(true)} />
                <Button
                    variant="secondary"
                    title="Return"
                    onClick={() => setReturnModal(true)}
                />
            </Table>
            {bookmodal && <Modal closeHandler={closeBookModal}></Modal>}

            {returnModal && <Modal closeHandler={closeReturnModal}></Modal>}
        </BasicLayout>
    );
};

export default Home;
