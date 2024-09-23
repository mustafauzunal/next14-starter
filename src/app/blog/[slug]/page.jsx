import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/19553534/pexels-photo-19553534/free-photo-of-still-life-with-teapot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/19553534/pexels-photo-19553534/free-photo-of-still-life-with-teapot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          facilis vitae accusamus ea nihil dolor laborum ullam ipsa inventore
          molestias enim neque voluptates, veniam quam impedit consectetur.
          Nesciunt, incidunt cum?
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
