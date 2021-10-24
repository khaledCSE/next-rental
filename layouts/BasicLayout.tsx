import { Fragment } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const BasicLayout = (props: any) => {
    return (
        <Fragment>
            <Navbar />
            <main>{props.children}</main>
            <Footer />
        </Fragment>
    );
};

export default BasicLayout;
