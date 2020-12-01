import Head from "next/head";
import {getPostsData} from "../components/api"
import Gallery from "../components/Gallery"
import "react-photoswipe/lib/photoswipe.css";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title> NextJs Image Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>NextJS Image Gallery</h1>
      <Gallery pic = {props.item} />
      
    </div>
  );
}


export async function getServerSideProps() {
  const item = await getPostsData();
  return {
    props: {
      item
    }
  }
}
