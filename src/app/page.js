import styles from './page.module.css';
import Header from '@/components/Header/Header';
import Banner from '@/components/Banner/Banner';
import Trust from '@/components/Trust/Trust';
import Branches from '@/components/Branches/Branches';
import Price from '@/components/Price/Price';
import Doctors from '@/components/Doctors/Doctors';
import Form from '@/components/Form/Form';
import Contacts from '@/components/Contacts/Contacts';
import Footer from '@/components/Footer/Footer';
import Modal from '@/components/Modal/Modal';
import StoreProvider from '@/components/StoreProvider';
import ModalSuccess from '@/components/ModalSuccess/ModalSuccess';

export default function Home() {
    return (
        <main className={styles.main}>
            <StoreProvider>
                    <Header />
                    <Banner />
                    <Trust />
                    <Branches />
                    <Price />
                    <Doctors />
                    <Form />
                    <Contacts />
                    <Footer />
                    <Modal />
                    <ModalSuccess />
            </StoreProvider>
        </main>
    );
}
