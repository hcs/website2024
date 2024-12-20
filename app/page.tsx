"use client";
import CodeText from "@/components/CodeText";
import Link from "next/link";
import Image from "next/image";
import FadeInSection from "@/components/FadeInSection";
import CustomCarousel from "@/components/CustomCarousel";
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
  const events = [
    {
      title: "Event 3",
      image: "/events/1.jpg",
    },
    {
      title: "Event 3",
      image: "/events/2.jpg",
    },
    {
      title: "Event 3",
      image: "/events/3.jpg",
    },
    {
      title: "Event 3",
      image: "/events/4.jpg",
    },
    {
      title: "Event 3",
      image: "/events/5.jpeg",
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
      <div className="p-10 sm:p-24">
        <FadeInSection>
          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
            Harvard&apos;s Largest Computer Science Organization
          </h1>
          <p className="text-xl font-extralight text-center">
            HCS is dedicated to promoting interest in computing and information
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
        <FadeInSection>
          <h1 className="text-4xl md:text-5xl font-bold mt-20 mb-10 text-center">
            Recent Events
          </h1>
          <p className="text-xl font-extralight text-center">
            Check out the latest professional development and community-building
            events hosted by the Harvard Computer Society:
          </p>
          <CustomCarousel>
            {events.map((e) => (
              <div
                key={e.title}
                className="group relative flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-3 my-2 mx-2 min-w-100 h-80"
              >
                <Image
                  src={e.image}
                  alt="Event"
                  fill
                  className="rounded-lg object-cover"
                />
                <h2 className="text-2xl font-bold mt-5">{e.title}</h2>
              </div>
            ))}
          </CustomCarousel>
          <Link
            href="/contact"
            className="flex w-full items-center justify-center"
          >
            <Button size="xl">Get Involved</Button>
          </Link>
        </FadeInSection>
        <FadeInSection>
          <h1 className="text-4xl md:text-5xl font-bold mt-20 mb-10 text-center">
            Our Sponsors
          </h1>
          <p className="text-xl font-extralight text-center">
            The work that the Harvard Computer Society does would not be
            possible without the support of our generous sponsors. If you are
            interested in sponsoring HCS,{"  "}
            <span>
              <a
                className="group text-blue-600 transition-all duration-300 ease-in-out"
                href="mailto:presidents@hcs.harvard.edu"
              >
                <span className="bg-left-bottom bg-gradient-to-r from-blue-600 to-blue-600 bg-[length:0%_1.5px] bg-no-repeat group-hover:bg-[length:100%_1.5px] transition-all duration-300 ease-out">
                  please reach out
                </span>
              </a>
            </span>
            !
          </p>
          <CustomCarousel>
            <a
              href="https://www.janestreet.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/sponsors/janestreet.png"
                alt="Jane Street Logo"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </a>
            <a
              href="https://www.hudsonrivertrading.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/sponsors/hrt.png"
                alt="HRT Logo"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </a>
            <a href="https://www.citadel.com/" target="_blank" rel="noreferrer">
              <Image
                src="/sponsors/citadel.jpg"
                alt="Citadel Logo"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </a>
            <a href="https://www.deshaw.com/" target="_blank" rel="noreferrer">
              <Image
                src="/sponsors/deshaw.jpg"
                alt="D.E. Shaw Logo"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </a>
            <a href="https://www.axiom.xyz/" target="_blank" rel="noreferrer">
              <Image
                src="/sponsors/axiom.jpg"
                alt="Axiom Logo"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </a>
          </CustomCarousel>
        </FadeInSection>
      </div>
    </>
  );
}
