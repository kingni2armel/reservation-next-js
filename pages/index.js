import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Navbar from '../component/header'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>APP RESERVATION</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

 
      <header className={styles.header}>
          <Navbar />
          <div id={styles.conteiner_firstbloc}>
            <div className={styles.contener_head_test}>
                    <h1 className={styles.titleSite}>
                      Trouver facilement un enseignant pour  vous encadrer 
                    </h1>
            </div>
            <div className={styles.contener_head_test}>

            </div>
          </div>
      </header>

      <div className={styles.contauner}>

        <div className={styles.contaunerItem}>
            <Image
                src='/assets/images/1.jpg'
                alt="Picture of the author"
                width={400}
                height={250}
              />
        </div>
        <div className={styles.contaunerItem}>
           <Image
              src='/assets/images/2.png'
              alt="Picture of the author"
              width={400}
              height={250}
            />
        </div>  
        <div className={styles.contaunerItem}>
          <Image
                src='/assets/images/n.jpg '
                alt="Picture of the author"
                width={400}
                height={250}
            />   
        </div>

      </div>

      <div  className={styles.conteinerBackground}>

      </div>
 
 



    </div>
  )
}
