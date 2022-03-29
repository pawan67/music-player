import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Data from "../data.json";
import Card from "../components/Card";
import AOS from "aos";

import "aos/dist/aos.css"; // You can also use <link> for styles
import Container from "../components/Container";
import BottomPlayer from "../components/BottomPlayer";
import { useUserContext } from "../context/userContext";
import COMPONENT from "../components/COMPONENT";
// ..
export default function Home() {
  const { page, isMenu } = useUserContext();

  useEffect(() => {
    AOS.init();
  });
  console.log("%c JUKEGA NAIII ", "background: #252; color: #bada55");

  return (
    <div>
      <Head>
        <title>GroovyMusic - Search and play songs online</title>
        <meta
          name="title"
          content="GroovyMusic - Search and play songs online"
        />

        <meta
          name="description"
          content="Music player made with React, Next js, Tailwind Css and daisyUi"
        ></meta>

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://music-player-pawan67.vercel.app/"
        />
        <meta
          property="og:title"
          content="GroovyMusic - Search and play songs online"
        />
        <meta
          property="og:description"
          content="Music player made with React, Next js, Tailwind Css and daisyUi"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dewctbby3/image/upload/v1648554804/groovyMusic_yvy1wx.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://music-player-pawan67.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="GroovyMusic - Search and play songs online"
        />
        <meta
          property="twitter:description"
          content="Music player made with React, Next js, Tailwind Css and daisyUi"
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dewctbby3/image/upload/v1648554804/groovyMusic_yvy1wx.jpg"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <COMPONENT />
      {page !== "playingnow" && <BottomPlayer />}
    </div>
  );
}
