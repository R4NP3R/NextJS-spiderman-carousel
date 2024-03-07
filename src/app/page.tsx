import HeroesList from "@/components/HeroList";
import { getHeroesData } from "@/services/api";
import styles from "./pages.module.scss";

// async function getStaticProps(): Promise<{ data: IHeroData[] }> {
//   const res = await fetch(
//     "https://65e75d6b53d564627a8ea521.mockapi.io/api/heroes"
//   );

//   if (!res.ok) {
//     throw new Error("Failed to request Heroes list");
//   }

//   return res.json();
// }

export default async function Home() {
  const heroes = await getHeroesData();
  return (
    <main className={styles.main}>
      <HeroesList heroes={heroes} />
    </main>
  );
}
