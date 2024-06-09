import Image from "next/image";
import styles from "./page.module.css";
import Header from './components/Header';
import MainVisual from "./components/MainVisual";
import GlobalNav from "./components/GlobalNav";

export default function Home() {
  return (
    <div>
      <Header />
      <MainVisual />
      <GlobalNav/>
    </div>
  );
}
