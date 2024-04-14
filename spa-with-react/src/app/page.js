import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <>
    
      <div className={styles.description}>
        {/*<p>
          Alma Sherifi
          </p>*/}
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/*By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
             />*/}
          </a>
        </div>
      </div>
             
       <h1>EcoShare</h1>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/recycle.png"
          alt="Next.js Logo"
          width={256}
          height={256}
          priority
        />
      </div>
     
    </>
  );
}
