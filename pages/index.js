import Head from "next/head";
import PizzaList from "../component/PizzaList";
import Slider from "../component/Slider";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LAMA PIZZO</title>
        <meta name="description" content="Best Pizza in Town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      <PizzaList />
    </div>
  );
}
