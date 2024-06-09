import Image from "next/image";
import styles from "./page.module.css";
import Header from './components/Header';
import MainVisual from "./components/MainVisual";
import GlobalNav from "./components/GlobalNav";
import Concept from "./components/Concept";
import Blog from "./components/Blog";

export default function Home() {
  return (
    <div>
      <Header />
      <MainVisual />
      <GlobalNav/>
      <main className="content">
        <Concept />
        <Blog />
      </main>
    </div>
  );
}
