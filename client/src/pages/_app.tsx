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

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
