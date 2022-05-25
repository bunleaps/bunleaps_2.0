import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Projects from "../components/sections/projects";
import Contact from "../components/sections/contact";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bunleap Sorn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Layout>
    </div>
  );
}
