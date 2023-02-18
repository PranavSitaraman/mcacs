import styles from '../styles/Home.module.sass'
import Button from "../sections/Button";
export default function Home() {
    return (
        <div className={styles["site"]}>
            <Button href={"hackmca"} displayText={"HackMCA"} light={true}/>
            <Button href={"mcaic"} displayText={"MCAIC"} light={true}/>
        </div>
    )
}