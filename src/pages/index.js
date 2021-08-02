import Head from "next/head";
import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="description" content="Portfolio of Nguyen Huy Toan" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* FACEBOOK */}
        <meta property="og:title" content="Portfolio of Nguyen Huy Toan" />
        <meta property="og:description" content="Tell more about me, projects, techs, contact" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://portfolio3.toannguyen3105.com/"
        />
        <meta
          property="og:image"
          content="https://drive.google.com/uc?id=1zJfC7d04N9FMtJYVNvJv5ppTviycVTys"
        />
        <title>Portfolio | Nguyen Huy Toan</title>
      </Head>
      <Layout>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Projects />
        <Technologies />
        <Timeline />
        <Acomplishments />
      </Layout>
    </>
  );
};

export default Home;
