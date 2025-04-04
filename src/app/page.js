import styles from './page.module.css';
import Header from '@/components/Header/Header';
import Banner from '@/components/Banner/Banner';
import Trust from '@/components/Trust/Trust';
import Specials from '@/components/Specials/Specials';
import Branches from '@/components/Branches/Branches';
import Price from '@/components/Price/Price';
import Doctors from '@/components/Doctors/Doctors';
import Form from '@/components/Form/Form';
import Reviews from '@/components/Reviews/Reviews';
import Contacts from '@/components/Contacts/Contacts';
import Footer from '@/components/Footer/Footer';

export default function Home() {
    return (
        <main className={styles.main}>
            <Header />
            <Banner />
            <Trust />
            <Specials />
            <Branches />
            <Price />
            <Doctors />
            <Form />
            <Reviews />
            <Contacts />
            <Footer />
        </main>
    );
}
