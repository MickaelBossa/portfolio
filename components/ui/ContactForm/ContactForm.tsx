// Style
import styles from './ContactForm.module.css';

export default function ContactForm() {
  return (
    <form action="/send-data-here" method='post'>
      <div className={styles.firstLineInputs}>
        <input id={styles.nameInput} type="text" placeholder='Name' />
        <input type="text" placeholder='Email' />
        </div>
        <input className={styles.subjectInput} type="text" placeholder='Subject' />
        <textarea className={styles.messageInput} placeholder='Message' />
        <div className={styles.submitBtnContainer}>
        <button className={styles.submitBtn} type='submit'>Send message !</button>
        </div>
    </form>
  )
}
