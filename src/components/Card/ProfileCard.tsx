import styles from "./ProfileCard.module.scss";
import React from "react";

interface ProfileCardProps {
  avatar: string;
  name: string;
  location: string;
  bio: string;
  links?: {
    link: string;
    name: string;
  }[];
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  avatar,
  name,
  location,
  bio,
  links,
}) => {
  const linkElements = links?.map((link) => {
    return (
      <li key={link.name}>
        <a className={styles["profile-card__link"]} href={link.link}>
          {link.name}
        </a>
      </li>
    );
  });

  return (
    <div className={styles["profile-card"]}>
      {/* avatar */}
      <img
        className={styles["profile-card__avatar"]}
        src={avatar}
        alt={`Profile picture of ${name}`}
      />

      {/* name and location */}
      <div className={styles["profile-card__personal-info"]}>
        <h2 className={styles["profile-card__name"]}>{name}</h2>
        <span className={styles["profile-card__location"]}>{location}</span>
      </div>

      {/* bio */}
      <p className={styles["profile-card__bio"]}>{bio}</p>

      {/* links */}
      {links && (
        <ul className={styles["profile-card__links"]}>{linkElements}</ul>
      )}
    </div>
  );
};

export default ProfileCard;
