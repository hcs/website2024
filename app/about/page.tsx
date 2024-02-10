"use client";

import Image from "next/image";
import CodeText from "@/components/CodeText";
import FadeInSection from "@/components/FadeInSection";
import ImageCard from "@/components/ImageCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function About() {
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
      <CodeText text="About HCS" />
      <div className="p-12 md:p-24">
        <FadeInSection>
          <h1 className="text-3xl md:text-5xl font-bold mb-20 text-center">
            Dedicated to promoting{" "}
            <span className={"bold text-rose-700"}>CS knowledge</span>,
            fostering the{" "}
            <span className={"bold text-rose-700"}>CS community</span>, and
            offering{" "}
            <span className={"bold text-rose-700"}>free resources</span> to
            Harvard affiliates.
          </h1>
        </FadeInSection>
        <ImageCard
          image="/history.jpeg"
          title="History and Mission"
          subtitle="About"
          description="The Harvard Computer Society is a student-run organization at Harvard College that has been a driving force in the development and deployment of computers at Harvard since 1983. We often bring in speakers from industry and academia to talk about their work and experiences, and we frequently host study breaks and other events to built community. While we previously provided the infrastructure for Harvard student mailing lists, we have now transitioned to providing resources for all students at Harvard interested in computer science."
          color="bg-red-50"
        />

        <ImageCard
          image="/academics.jpeg"
          title="Academics"
          subtitle="About"
          description="The Academics Team is dedicated to providing resources and support for students interested in computer science. We host workshops, talks from CS professors, and other events to help students learn and grow in the field of computer science. We also provide resources for students interested in pursuing a computer science concentration, including guides to the concentration and lists of recommended courses."
          reverse
          color="bg-red-50"
        />

        <ImageCard
          image="/professional-development.jpg"
          title="Professional Development"
          subtitle="About"
          description="The Professional Development Team aims to create numerous opportunities for students to learn about the computer science industry and to develop the skills necessary to succeed in it. We host workshops, guest speakers, and other events to help students learn about the industry, and provide access to various resources to help students succeed in their future careers."
          color="bg-red-50"
        />

        <ImageCard
          image="/community.jpg"
          title="Community"
          subtitle="About"
          description="HCS is an incredibly tight-knit community that bonds through various community events. In the past, we have hosted weekly HCS study breaks (with free food!) Big/Little-O mentorships, outings to local tech offices, and more."
          reverse
          color="bg-red-50"
        />

        <FadeInSection>
          <div className="mt-20 text-center">
            <Link href="/board">
              <Button size="lg">Meet the Board</Button>
            </Link>
          </div>
        </FadeInSection>
      </div>
    </>
  );
}
