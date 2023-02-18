import styles from '../styles/Home.module.sass'
import {Email, Insta} from '../data/variables'
export default function ContactsSection({id}) {
    return (
        <div className={[styles["content-section-dark"], styles["content-section"]].join(" ")} id={id}>
            <h1>Contact Us!</h1>
            <span>
            <p>{Email}&nbsp;&nbsp;&nbsp;{Insta}</p>
            </span>
        </div>
    )
}