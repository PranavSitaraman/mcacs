import styles from '../styles/Home.module.sass'
import Button from "../sections/Button";
import {Flyer} from '../data/variables'
export default function RegistrationSection({id}) {
    return (
        <div className={styles["content-section"]} id={id}>
            <div className={[styles["content-section-light"], styles["content-section"]].join(" ")}>
                <div className={styles["content-section-inner"]}>
                    <p><b>Signups are open now! You can sign up below through EventBrite.</b></p>
                    <p>Registration costs $10 and is due October 10th!</p>
                    <p>Breakfast, lunch, and dinner can be purchased for $20 total. ($15 for cash payments for EAMS students)</p>
                    <Button href={"hackmca-signup"} displayText={"Sign Up Now!"}/>
                    <p></p>
                    <a href={Flyer}><p>Be sure to share our flyer!</p></a>
                </div>
            </div>
        </div>
    )
}