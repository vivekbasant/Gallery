import Head from "next/head";
import {getPostsData} from "../components/api"
import Gallery from "../components/Gallery"
import "react-photoswipe/lib/photoswipe.css";
import styles from "../styles/Home.module.css";

export default function Home({item}) {
  return (
    <div className={styles.container}>
      <Head>
        <title > NextJs Image Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>NextJS Image Gallery</h1>
      <Gallery pic = {item} />
      
    </div>
  );
}


Home.getInitialProps = async () => {
  const item = await getPostsData();
  return { item };
}
