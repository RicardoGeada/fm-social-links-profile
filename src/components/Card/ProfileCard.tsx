import styles from "./ProfileCard.module.scss";
import avatar from "./../../assets/images/avatar-jessica.jpeg";

function ProfileCard() {
  return (
    <div className={styles["profile-card"]}>
        <img className={styles["profile-card__avatar"]} src={avatar} alt="profile pic" />
        <div className={styles["profile-card__personal-info"]}>
            <h2 className={styles["profile-card__name"]}>Jessica Randall</h2>
            <span className={styles["profile-card__location"]}>London, United Kingdom</span>
        </div>
        <p className={styles["profile-card__bio"]}>"Front-end developer and avid reader."</p>
        <ul className={styles["profile-card__links"]}>
            <li><a className={styles["profile-card__link"]} href="#">Github</a></li>
            <li><a className={styles["profile-card__link"]} href="#">Frontend Mentor</a></li>
            <li><a className={styles["profile-card__link"]} href="#">LinkedIn</a></li>
            <li><a className={styles["profile-card__link"]} href="#">Twitter</a></li>
            <li><a className={styles["profile-card__link"]} href="#">Instagram</a></li>
        </ul>
    </div>
  );
}

export default ProfileCard;
