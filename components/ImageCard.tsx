import Image from "next/image";
import FadeInSection from "./FadeInSection";
import { Button } from "./ui/button";

export default function ImageCard({
  image,
  title,
  subtitle,
  description,
  reverse,
  link,
  color,
  dimensions,
}: {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  reverse?: boolean;
  link?: string;
  color?: string;
  dimensions?: { width: number; height: number };
}) {
  return (
    <FadeInSection>
      <div
        className={
          "flex flex-col md:flex-row rounded-lg p-10 gap-10 items-center my-10" +
          (reverse ? " md:flex-row-reverse" : "") +
          (color ? ` ${color}` : " bg-red-50")
        }
      >
        <div className={dimensions ? "flex w-[50%] justify-center" : ""}>
          <Image
            alt={title}
            className={
              "object-cover rounded-lg overflow-hidden" +
              (!dimensions ? " w-full" : "")
            }
            height={dimensions && dimensions.height ? dimensions.height : 300}
            src={image}
            width={dimensions && dimensions.width ? dimensions.width : 300}
          />
        </div>
        <div className="md:max-w-[40%]">
          <h3 className="font-extralight uppercase text-md">{subtitle}</h3>
          <h2 className="font-bold text-3xl">{title}</h2>
          <p className="font-light my-5">{description}</p>
          {link && (
            <a href={link} target="_blank">
              <Button size="lg">Learn More</Button>
            </a>
          )}
        </div>
      </div>
    </FadeInSection>
  );
}
