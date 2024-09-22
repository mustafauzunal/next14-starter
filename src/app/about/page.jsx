import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/5847663/pexels-photo-5847663.jpeg"
          alt="about"
          fill
        />
      </div>
    </div>
  );
};

export default AboutPage;
