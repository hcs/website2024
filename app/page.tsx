"use client";
import CodeText from "@/components/CodeText";
import Link from "next/link";
import Image from "next/image";
import FadeInSection from "@/components/FadeInSection";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const pages = [
    {
      title: "About Us",
      href: "/about",
      description:
        "Learn about the history and mission of the Harvard Computer Society.",
    },
    {
      title: "Initiatives",
      href: "/initiatives",
      description:
        "Learn more about the initiatives we're working on in each of our sub-organizations.",
    },
    {
      title: "Contact Us",
      href: "/contact",
      description: "Learn how to get involved with Harvard Computer Society!",
    },
  ];
  return (
    <>
      <div className="relative h-screen bg-black">
        <Image
          src="/background.jpg"
          alt="SEAS Background"
          fill
          priority
          className="object-cover opacity-50"
        />
      </div>
      <CodeText text="Harvard Computer Society" showButton />
      <div className="p-24">
        <FadeInSection>
          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
            Harvard&apos;s Largest Computer Science Organization
          </h1>
          <p className="text-xl font-extralight text-center">
            Dedicated to promoting interest in computing and information
            technologies among members of the Harvard community
          </p>
        </FadeInSection>
        <FadeInSection>
          <div className="flex flex-row flex-wrap gap-5 my-10 justify-center">
            {pages.map((page) => (
              <Card className="w-full max-w-sm" key={page.title}>
                <Image
                  alt={page.title}
                  className="aspect-[5/3] object-cover w-full rounded-t-lg overflow-hidden"
                  height={300}
                  src={page.href + ".jpg"}
                  width={500}
                />
                <CardHeader>
                  <CardTitle>{page.title}</CardTitle>
                  <CardDescription>{page.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href={page.href}>
                    <Button>Learn More</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </FadeInSection>
      </div>
    </>
  );
}
