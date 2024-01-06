import "@/styles/globals.css";
import "@/styles/home/homepage.css";
import "@/styles/home/welcome.css";
import "@/styles/home/whoAmI.css";
import "@/styles/home/skills.css";
import "@/styles/home/projects.css";
import "@/styles/home/hiremebutton.css";
import "@/styles/home/navigation.css";
import "@/styles/home/card.css";
import "@/styles/home/profSkills.css";
import "@/styles/home/motivation.css";
import "@/styles/home/form.css";
import type { AppProps } from "next/app";
import { Head } from "next/document";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <meta property="og:title" content="Dincher Selimov - Web Developer" />
        <meta property="og:description" content="Explore Dincher Selimov's expertise in web development, including front-end and back-end technologies, responsive design, and more." />
        <meta property="og:image" content="/me-removed-bg.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
