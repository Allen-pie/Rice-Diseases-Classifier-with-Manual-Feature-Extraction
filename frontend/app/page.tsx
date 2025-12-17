"use client";
import { FaqSection2 } from "@/components/custom/faq-section-2";
import { FeatureSection9 } from "@/components/custom/feature-section-9";
import { Footer1 } from "@/components/custom/footer-1";
import { CardHeader, CardTitle, CardContent, Card } from "@/components/ui/card";
import {
  ImageUploaderAi,
  ImageUploaderAiHandle,
} from "@/components/custom/image-uploader.ai";
import { LpNavbar1 } from "@/components/custom/lp-navbar-1";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { FocusCard } from "@/components/ui/focus-cards";

export default function Page() {
  const LINK_BE = "http://127.0.0.1:5000/predict";
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

  const [result, setResult] = useState<any>(null);

  const sendToBackEnd = async (file: any) => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(LINK_BE, {
      method: "POST",
      body: formData,
      mode: "cors",
    });

    const data = await res.json();

    return data;
  };


  return (
    <main>
      <LpNavbar1 />

      <section className="pt-14 pb-14 px-80 flex items-center justify-center ">
        <div className="min-w-xl space-y-10">
          <div className="text-center space-y-8">
            <h1 className="text-4xl font-bold">
              Rice Plant Diseases Classifier
            </h1>
            <h3 className="text-center">
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
              onProcess={async (file) => {
                setIsAnalyzing(true);

                const resultBE = await sendToBackEnd(file.content);

                setResult(resultBE);
                setClassify(true);

                setIsAnalyzing(false);
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
                          {result.prediction}
                        </h1>

                        <h2 className="text-2xl">Symptoms:</h2>

                        <p>{result.ai_analysis.symptoms}</p>

                        <h2 className="text-2xl">Favorable Conditions:</h2>

                        <p>{result.ai_analysis.favorable_conditions}</p>

                        <h2 className="text-2xl">Management:</h2>
                        <ul className="">
                          <li>{result.ai_analysis.management}</li>
                          {/* <li>Avoid excessive urea application.</li>
                        <li>
                          Spray Tricyclazole 75% WP (6 g/10 L water) at early
                          signs.
                        </li> */}
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
        </div>
      </section>
      <FeatureSection9  />
      <FaqSection2 />
      <Footer1 />
    </main>
  );
}
