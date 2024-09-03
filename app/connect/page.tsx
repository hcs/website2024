import SmallCard from "@/components/SmallCard";
import { Zilla_Slab } from "next/font/google";
import Image from "next/image";

const zilla = Zilla_Slab({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

export default function Connect() {
  return (
    <div className="px-10 py-5">
      <div className={zilla.className}>
        <h1 className="text-3xl lg:text-8xl">
          Thank you for your interest in the Harvard Computer Society!
        </h1>
      </div>
      <p className="text-lg lg:text-4xl py-5 lg:py-10">
        Here are some of the best ways to get involved with us:
      </p>
      <div className="flex flex-row flex-wrap gap-5">
        <SmallCard
          title="Mailing List"
          description="Get the latest CS opportunities in your inbox"
          link="https://forms.gle/bwJwb2qCXDodpi9RA"
          image="/gmail.webp"
        />
        <SmallCard
          title="Slack"
          description="Chat with other students about all things CS @ Harvard"
          link="https://join.slack.com/t/harvard-cs-society/shared_invite/zt-2cgtl5bpc-QCxXWwjaf1FulZhAfJSzkQ"
          image="/slack.png"
        />
        <SmallCard
          title="Instagram"
          description="Stay updated on our latest events and announcements"
          link="https://www.instagram.com/harvard.computer.society/"
          image="/instagram.webp"
        />
      </div>
      <Image
        src="/remy.png"
        alt="Remy Cat"
        width={300}
        height={300}
        className="mx-auto pt-5 animate-bounce-slow"
      />
    </div>
  );
}
