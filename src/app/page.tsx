import HeroesList from "@/components/HeroList";
import { IHeroData } from "@/interfaces/heroes";
import styles from "./pages.module.scss";

async function getHeroesData(): Promise<{ data: IHeroData[] }> {
  const res = await fetch(`${process.env.DOMAIN_ORIGIN}/api/heroes`);

  if (!res.ok) {
    throw new Error("Failed to request Heroes list");
  }

  return res.json();
}

export default async function Home() {
  const heroes = await getHeroesData();
  return (
    <main className={styles.main}>
      <HeroesList heroes={heroes.data} />
    </main>
  );
}
