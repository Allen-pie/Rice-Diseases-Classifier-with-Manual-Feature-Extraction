"use client";

import { Bot, Plug, BarChart3, TextSearch, Upload } from "lucide-react";
import { Tagline } from "@/components/custom/tagline";

export function FeatureSection9() {
  return (
   <section
  className="bg-secondary section-padding-y border-b"
  id="how-it-works"
>
  <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
    <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
      <Tagline>How it works</Tagline>
      <h2 className="heading-lg text-foreground">
        Diagnose rice leaf diseases in minutes
      </h2>
      <p className="text-muted-foreground text-base">
        Upload a leaf image, let our AI analyze it, and get instant disease
        classification to support smarter and faster crop decisions.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-4">

      {/* Step 1 */}
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
          <Upload className="text-primary h-5 w-5" />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-foreground font-semibold">1. Upload</h3>
          <p className="text-muted-foreground">
            Submit a clear photo of the rice leaf using your phone or computer.
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
          <Bot className="text-primary h-5 w-5" />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-foreground font-semibold">2. Analyze</h3>
          <p className="text-muted-foreground">
            Our AI model processes the image and detects potential diseases.
          </p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
          <BarChart3 className="text-primary h-5 w-5" />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-foreground font-semibold">3. Identify</h3>
          <p className="text-muted-foreground">
            Instantly receive the predicted class such as Leaf Blast, Brown Spot,
            Bacterial Blight, or Healthy.
          </p>
        </div>
      </div>

      {/* Step 4 */}
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
          <TextSearch className="text-primary h-5 w-5" />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-foreground font-semibold">4. Recommend</h3>
          <p className="text-muted-foreground">
            View disease descriptions and get actionable recommendations for treatment.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

  );
}
