"use client";

import Image from "next/image";
import SmallCard from "@/components/SmallCard";
import CodeText from "@/components/CodeText";
import FadeInSection from "@/components/FadeInSection";
import Events from "@/components/Events";

export default function Contact() {
  return (
    <>
      <div className="relative h-[50vh] bg-black">
        <Image
          src="/banner.png"
          alt="Background"
          fill
          priority
          className="object-cover opacity-80"
        />
      </div>
      <CodeText text="Get Involved" />
      <div className="p-12 md:p-24">
        <FadeInSection>
          <Events />
        </FadeInSection>
        <FadeInSection>
          <h1 className="text-3xl md:text-5xl font-bold my-20 text-center">
            Join the Community
          </h1>
          <div className="flex flex-row flex-wrap justify-center gap-5">
            <SmallCard
              title="Mailing List"
              description="Get the latest CS opportunities in your inbox"
              link="https://forms.gle/vGP3S3pNeU28GFMn6"
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
        </FadeInSection>
      </div>
    </>
  );
}
