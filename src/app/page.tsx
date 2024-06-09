import Image from "next/image";
import styles from "./page.module.css";
import Header from './components/Header';
import MainVisual from "./components/MainVisual";
import GlobalNav from "./components/GlobalNav";
import Concept from "./components/Concept";

export default function Home() {
  return (
    <div>
      <Header />
      <MainVisual />
      <GlobalNav/>
      <main className="content">
        <Concept />
      </main>
    </div>
  );
}
