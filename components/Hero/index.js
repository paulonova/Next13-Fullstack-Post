import Image from "next/image";
import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src={"/images/profile/paulo_perfil2.jpg"}
          alt="image showing paulo"
          width={200}
          height={200}
          style={{ objectFit: "cover" }}
        />
      </div>
      <h1>Hi, I am Paulo</h1>
      <p>
        I blog about web development - especially frontend frameworks like React
        and Next.js
      </p>
    </section>
  );
}

export default Hero;
