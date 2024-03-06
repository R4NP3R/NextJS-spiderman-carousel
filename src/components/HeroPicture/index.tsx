import { IHeroData } from "@/interfaces/heroes";
import imageSpider65 from "@public/spiders/mulher-aranha-65.png";
import imageSpider14512 from "@public/spiders/sp-dr-14512.png";
import imageSpider8311 from "@public/spiders/spider-ham-8311.png";
import imageSpider1610 from "@public/spiders/spider-man-1610.png";
import imageSpider616 from "@public/spiders/spider-man-616.png";
import imageSpider90214 from "@public/spiders/spider-man-90214.png";
import imageSpider928 from "@public/spiders/spider-man-928.png";
import Image, { StaticImageData } from "next/image";

const HeroesImage: Record<string, StaticImageData> = {
  "spider-man-616": imageSpider616,
  "mulher-aranha-65": imageSpider65,
  "spider-man-1610": imageSpider1610,
  "sp-dr-14512": imageSpider14512,
  "spider-ham-8311": imageSpider8311,
  "spider-man-90214": imageSpider90214,
  "spider-man-928": imageSpider928,
};

interface Iprops {
  hero: IHeroData;
}

export default function HeroPicture({ hero }: Iprops) {
  return (
    <Image
      src={HeroesImage[hero.id]}
      alt={`${hero.name} (Universo-${hero.universe})`}
      priority
    />
  );
}
