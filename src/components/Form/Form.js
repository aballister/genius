import styles from './form.module.css';
import FormBody from '@/components/Form/FormBody/FormBody';

export default function Form() {
    return (
        <div className={styles.formContainer}>
            <div className={styles.container}>
                <FormBody />
            </div>
        </div>
    )
}