import Carousel from "@/components/Carousel";
import { getHeroesData } from "@/services/api";

interface IProps {
  params: {
    id: string;
  };
}

export default async function Hero({ params: { id } }: IProps) {
  const heroes = await getHeroesData();
  return <Carousel heroes={heroes} activeId={id} />;
}
