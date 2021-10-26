import type { NextPage } from 'next';
import BasicLayout from '../layouts/BasicLayout';
import Table from '../components/Table';
import Modal from '../components/Modal';
import { rentalTableCols } from '../contexts/rental.context';
import Button from '../components/Button';
import { useState } from 'react';
import BookForm from '../components/forms/BookForm';
import classes from '../styles/Home.module.scss';
import ReturnForm from '../components/forms/ReturnForm';
import Image from 'next/image';

const Home: NextPage = () => {
    const [bookmodal, setBookModal] = useState(false);
    const [returnModal, setReturnModal] = useState(false);
    const [bookingPrice, setBookingPrice] = useState(0);
    const [returnPrice, setReturnPrice] = useState(0);
    const [done, setDone] = useState(false);

    const closeBookModal = () => setBookModal(false);
    const closeReturnModal = () => setReturnModal(false);
    const handleBooking = (price: number) => setBookingPrice(price);

    const handleReturn = (price: number) => setReturnPrice(price);

    const finishJob = () => setDone(true);
    const resetModals = () => {
        setDone(false);
        setBookingPrice(0);
        setReturnPrice(0);
    };

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
            {bookmodal && (
                <Modal closeHandler={closeBookModal}>
                    <BookForm
                        closeModalHandler={closeBookModal}
                        priceHandler={handleBooking}
                    />
                </Modal>
            )}

            {bookingPrice > 0 && (
                <Modal closeHandler={closeBookModal}>
                    <div className={classes.center}>
                        <h4>Book a Product</h4>
                        <p>
                            Estimated Price is <b>${bookingPrice}</b>
                        </p>
                        <Button title="Proceed" onClick={finishJob} />
                    </div>
                </Modal>
            )}

            {returnModal && (
                <Modal closeHandler={closeReturnModal}>
                    <ReturnForm
                        closeModalHandler={closeReturnModal}
                        priceHandler={handleReturn}
                    />
                </Modal>
            )}

            {returnPrice > 0 && (
                <Modal closeHandler={closeReturnModal}>
                    <div className={classes.center}>
                        <h4>Return a Product</h4>
                        <p>
                            Estimated Price is <b>${returnPrice}</b>
                        </p>
                        <Button title="Proceed" onClick={finishJob} />
                    </div>
                </Modal>
            )}

            {done && (
                <Modal closeHandler={resetModals}>
                    <div className={classes.center}>
                        <h1>Thank You!</h1>
                        <Image src="/Green-tick.png" height="150" width="150" />
                    </div>
                </Modal>
            )}
        </BasicLayout>
    );
};

export default Home;
