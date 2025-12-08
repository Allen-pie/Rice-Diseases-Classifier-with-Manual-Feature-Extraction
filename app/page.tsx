"use client";
import { BentoGrid6 } from "@/components/custom/bento-grid-6";
import { FaqSection2 } from "@/components/custom/faq-section-2";
import { FeatureSection9 } from "@/components/custom/feature-section-9";
import { Footer1 } from "@/components/custom/footer-1";
import { HeroSection2 } from "@/components/custom/hero-section-2";
import { CardHeader, CardTitle, CardContent, Card } from "@/components/ui/card";
import {
  ImageUploaderAi,
  ImageUploaderAiHandle,
} from "@/components/custom/image-uploader.ai";
import { LogoSection10 } from "@/components/custom/logo-section-7";
import { LpNavbar1 } from "@/components/custom/lp-navbar-1";
import { PricingSection3 } from "@/components/custom/pricing-section-3";
import { StatsSection4 } from "@/components/custom/stats-section-4";
import TestimonialsSection1 from "@/components/custom/testimonials-section-1";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { FocusCard } from "@/components/ui/focus-cards";
import { CheckCircle2 } from "lucide-react";

export default function Page() {
  const uploaderRef = useRef<ImageUploaderAiHandle>(null);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);


  const cards = [
    {
      title: "Healthy",
      src: "/healthy imgw.jpg",
    },
    {
      title: "Bacterial Leaf Blight",
      src: "/blight img.jpeg",
    },
    {
      title: "Leaf Blast",
      src: "/blast img.png",
    },
    {
      title: "Brownspot",
      src: "/brown img.jpeg",
    },
    {
      title: "Healthy",
      src: "/healthy imgw.jpg",
    },
    {
      title: "Bacterial Leaf Blight",
      src: "/blight img.jpeg",
    },
    {
      title: "Leaf Blast",
      src: "/blast img.png",
    },
    {
      title: "Brownspot",
      src: "/brown img.jpeg",
    },
  ];

  const [classify, setClassify] = useState<null | true>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <main>
      <LpNavbar1 />

      <section className="pt-14 pb-28 px-80 space-y-10">
        <div className="text-center space-y-8">
          <h1 className="text-4xl font-bold">Rice Plant Diseases Classifier</h1>
          <h3 className="w-3xl text-center">
            A classification system for common rice plant diseases, covering
            four categories:
            <p className="font-bold">
              Healthy, Bacterial Leaf Blight, Leaf Blast, and Brownspot.
            </p>
          </h3>
    
          <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent_0%,black_12.5%,black_87.5%,transparent_100%)]">
            <div className="animate-infinite-scroll flex w-max items-center gap-x-10">
              {cards.map((item, index) => {
                const uniqueKey = `item-${item.title}-${index}`;
                return (
                  <div key={uniqueKey} className="w-48 ">
                    <FocusCard
                      key={item.title}
                      card={item}
                      index={index}
                      hovered={hovered}
                      setHovered={setHovered}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="">
          <ImageUploaderAi
            isAnalyzing={isAnalyzing}
            onProcess={() => {
              setClassify(true);
            }}
            onUpload={() => {
              // setIsAnalyzing(true);
            }}
            ref={uploaderRef}
          />

          {classify && (
            <div className="space-y-4 animate-in fade-in duration-500">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <Card className="border-0 backdrop-blur">
                  <CardHeader className="pb-3">
                    <CardTitle className=" text-md">
                      Identified Disease
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="">
                    <div className="space-y-4">
                      <h1 className="font-bold text-4xl">
                        Rice Blast (Magnaporthe oryzae)
                      </h1>

                      <h2 className="text-2xl">Symptoms:</h2>

                      <p>
                        Spindle-shaped lesions with gray centers and brown
                        margins on leaves; neck rot at panicle stage causes
                        empty grains.
                      </p>

                      <h2 className="text-2xl">Favorable Conditions:</h2>

                      <p>Warm, humid weather; excess nitrogen.</p>

                      <h2 className="text-2xl">Management:</h2>
                      <ul className="">
                        <li>Use resistant varieties like Super Basmati.</li>
                        <li>Avoid excessive urea application.</li>
                        <li>
                          Spray Tricyclazole 75% WP (6 g/10 L water) at early
                          signs.
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Button
                onClick={() => {
                  setClassify(null);
                  uploaderRef.current?.reset();
                }}
                variant={"outline"}
                className="w-full"
              >
                Analyze Another Image
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* <HeroSection2 />
      <LogoSection10 />
      <TestimonialsSection1
        quote="MindSpace is like having a photographic memory for every meeting. We reduced the follow-up emails by 80%."
        authorName="David Park"
        authorRole="Engineering Manager at TechCorp"
        avatarSrc="/DavidPark.png"
      /> */}
      {/* <BentoGrid6 /> */}

      <FeatureSection9 />

      {/* <StatsSection4 /> */}
      {/* <TestimonialsSection1
        quote="At TechStar, 43% of meeting content was forgotten within 24 hours. Now, the AI summaries are better than my own notes!"
        authorName="Monica Kurt"
        authorRole="Project Manager at TechStar"
        avatarSrc="/MonicaKurt.png"
      /> */}
      {/* <PricingSection3 /> */}

      {/* accordion section */}
      <FaqSection2 />

      <Footer1 />
    </main>
  );
}
