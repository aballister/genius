import styles from './form.module.css';

export default function Form() {
    return (
        <div className={styles.formContainer}>
            <div className={styles.container}>
                <form action="" className={styles.form}>
                    <div className={styles.title}>Запис онлайн</div>
                    <div className={styles.subtitle}>Заповніть Ваші контактні дані, в найближчий час з вами зв’яжеться
                        наш менеджер
                    </div>
                    <label htmlFor="name" className={styles.label}>Ваше Ім’я та Прізвище</label>
                    <input type="text" name='name' id='name' className={styles.input}
                           placeholder='Введіть Ваше Ім’я та Прізвище'/>
                    <label htmlFor="phone" className={styles.label}>Ваш номер телефону</label>
                    <input type="text" name='phone' id='phone' className={styles.input}
                           placeholder='+38 (_ _ _) _ _ _  _ _  _ _' inputMode='tel'/>
                    <label htmlFor="name" className={styles.label}>Ваш коментар</label>
                    <input type="text" name='comment' id='comment' className={styles.input}
                           placeholder='Вкажіть послугу, яка вас цікавить' />
                    <button className={styles.button}>ЗАПИСАТИСЬ</button>
                </form>
            </div>
        </div>
    )
}