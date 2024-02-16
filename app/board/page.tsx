"use client";

import Image from "next/image";
import CodeText from "@/components/CodeText";
import FadeInSection from "@/components/FadeInSection";
import ProfileCard from "@/components/ProfileCard";

export default function Board() {
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
      <CodeText text="HCS Board" />
      <div className="p-12 md:p-24">
        <FadeInSection>
          <h1 className="text-3xl md:text-5xl font-bold mb-20 text-center">
            Meet the Board
          </h1>
        </FadeInSection>
        <FadeInSection>
          <div className="flex flex-row flex-wrap gap-32 my-10 justify-center">
            <ProfileCard
              name="Emily Sun"
              position="President"
              image="/board/emily.jpeg"
            />
            <ProfileCard
              name="Eileen Ye"
              position="President"
              image="/board/eileen.jpg"
            />
          </div>
        </FadeInSection>
        <div className="flex flex-row flex-wrap gap-10 mt-20 justify-evenly md:mx-8">
          <ProfileCard
            name="Maya Dummett"
            position="Director of Community"
            image="/board/maya.jpg"
          />
          <ProfileCard
            name="Sabrina Zhu"
            position="Director of Community"
            image="/board/sabrina.jpg"
          />
          <ProfileCard
            name="Karina Chung"
            position="Director of Professional Development"
            image="/board/karina.JPG"
          />
          <ProfileCard
            name="Michael Shaari"
            position="Director of Professional Development"
            image="/board/michael.jpeg"
          />
          <ProfileCard
            name="Marvin Li"
            position="Director of Academics"
            image="/board/marvin.jpg"
          />
          <ProfileCard
            name="Mohammed Mohammed"
            position="Director of Academics"
            image="/board/mohamed.jpeg"
          />
          <ProfileCard
            name="Jackson Moody"
            position="Director of Outreach & Engagement"
            image="/board/jackson.jpeg"
          />
          <ProfileCard
            name="Wency Suo"
            position="Director of Finance"
            image="/board/wency.jpg"
          />
        </div>
      </div>
    </>
  );
}
