"use client";

import CodeText from "@/components/CodeText";
import Image from "next/image";
import FadeInSection from "@/components/FadeInSection";
import ImageCard from "@/components/ImageCard";

export default function Initiatives() {
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
      <CodeText text="Our Initiatives" />
      <div className="p-5 md:p-20">
        <FadeInSection>
          <h1 className="text-3xl md:text-5xl font-bold mb-20 text-center">
            Learn about the mission and work of each of HCS&apos;
            <span className={"bold text-rose-700"}>
              {" "}
              affiliate organizations!
            </span>
          </h1>
        </FadeInSection>
        <ImageCard
          image="/t4sg_logo.png"
          title="Tech for Social Good"
          subtitle="HCS Affiliate"
          description="We leverage Harvard talent to partner with nonprofits, government agencies, and social impact organizations to amplify their impact through technology."
          link="https://socialgood.hcs.harvard.edu/"
          color="bg-[#e6fcf4]"
        />
        <ImageCard
          image="/product-lab.png"
          title="Product Lab"
          subtitle="HCS Affiliate"
          description="Through semester-long product management projects, we aim to help companies and organizations produce long-term, sustainable growth by understanding customer needs and developing research-driven strategy."
          link="https://www.hcsproductlab.org/"
          color="bg-[#fff7cf]"
          reverse
        />
        <ImageCard
          image="/tghi.png"
          title="Tech and Global Health Initiative"
          subtitle="HCS Affiliate"
          description="We strive to advance global health equity through innovation, education, and partnerships. We build cutting-edge, compassionate solutions to address pressing health challenges and aim to equip students of all backgrounds with the skills to do so. We hope to inspire the next generations of young leaders to envision a future in the field of global health technology."
          link="https://techglobalhealth.org/"
          color="bg-[#d4e4ff]"
        />
        <ImageCard
          image="/startups.png"
          dimensions={{ height: 100, width: 300 }}
          title="startups @ harvard"
          subtitle="HCS Affiliate"
          description="We are a community of students at Harvard who are passionate about startups and tech products that will shape the future. We host numerous events for students to learn about startups together, including Startup Series (bi-weekly discussion group) and Startup Trek (spring trip to visit startups in NYC)."
          link="https://www.startupsatharvard.com/"
          reverse
        />
        <ImageCard
          image="/recompute.png"
          dimensions={{ height: 100, width: 300 }}
          title="ReCompute"
          subtitle="HCS Affiliate"
          description="We aim to cultivate an interdisciplinary undergraduate community for critically examining and improving structures for responsible tech use in society."
          link="https://harvard-recompute.github.io/"
          color="bg-[#d4e4ff]"
        />
        <ImageCard
          image="/icpc.gif"
          dimensions={{ height: 100, width: 500 }}
          title="ICPC"
          subtitle="HCS Affiliate"
          description="The Harvard Computing Contest Club sends teams of undergraduates to compete in the ICPC Northeastern Regional Contest. In 2024, they received 14th place at the North American Championship and qualified for World Finals. In 2023, they were the 4th place team at the Northeast North America 2023 Regional Contest."
          link="https://hc3.seas.harvard.edu/hc3/icpc/index.html"
          reverse
        />
      </div>
    </>
  );
}
