"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Tagline } from "@/components/custom/tagline";

export function FaqSection2() {
  return (
    <section
      className="bg-background p-15 border-b"
      aria-labelledby="faq-heading"
      id="faq"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Left Column */}
          <div className="section-title-gap-lg flex flex-1 flex-col">
            {/* Category Tag */}
            <Tagline>FAQ</Tagline>
            {/* Main Title */}
            <h1 id="faq-heading" className="heading-lg text-foreground">
              Find answers to our frequently asked questions
            </h1>
            {/* Section Description */}
            <p className="text-muted-foreground">
              Learn more about our rice leaf disease classification system and how it can help you identify and manage rice plant diseases. Can&apos;t find what you&apos;re
              looking for?{" "}
              <Link href="#" className="text-primary underline">
                Contact us.
              </Link>
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-1 flex-col gap-8">
            {/* General FAQ Section */}
            <div className="flex flex-col gap-2">
              {/* Section Title */}
              <h2 className="text-foreground text-lg font-semibold md:text-xl">
                General
              </h2>
              {/* FAQ Accordion */}
              <Accordion
                type="single"
                collapsible
                aria-label="General FAQ items"
              >
                {/* FAQ Item 1 */}
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    What is this website about?
                  </AccordionTrigger>
                  <AccordionContent>
                    This is an AI-powered rice leaf disease classification system that helps farmers and agricultural professionals identify common rice plant diseases. By uploading an image of a rice leaf, our AI model analyzes it and classifies the disease into one of four categories: Healthy, Bacterial Leaf Blight, Leaf Blast, or Brownspot. The system also provides tailored recommendations for treatment and disease management.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 2 */}
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    How accurate is the AI classification?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our AI model has been trained on thousands of rice leaf images and achieves high accuracy in disease detection. However, accuracy can vary depending on image quality, lighting conditions, and the stage of disease progression. For best results, we recommend uploading clear, well-lit images focused on the affected leaf area. The predictions should be used as a diagnostic aid, and we recommend consulting with agricultural experts for critical decisions.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 3 */}
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    What types of rice diseases can the system detect?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our system currently detects four categories: (1) Healthy leaves with no disease symptoms, (2) Bacterial Leaf Blight - a bacterial infection causing yellowing and wilting, (3) Leaf Blast - a fungal disease causing lesions and spots, and (4) Brownspot - another fungal disease creating brown spots on leaves. We are continuously working to expand our detection capabilities to include more rice diseases.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 4 */}
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    How do I get the best results when uploading images?
                  </AccordionTrigger>
                  <AccordionContent>
                    For optimal results: (1) Take clear, focused photos of the affected leaf, (2) Ensure good lighting - natural daylight works best, (3) Capture the diseased area up close, (4) Avoid blurry or dark images, (5) Make sure the leaf fills most of the frame. The better the image quality, the more accurate the AI classification will be.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Additional FAQ Section */}
            <div className="flex flex-col gap-2">
              {/* Section Title */}
              <h2 className="text-foreground text-lg font-semibold md:text-xl">
                Using the System
              </h2>
              {/* FAQ Accordion */}
              <Accordion
                type="single"
                collapsible
                aria-label="Usage FAQ items"
              >
                {/* FAQ Item 1 */}
                <AccordionItem value="usage-1">
                  <AccordionTrigger className="text-left">
                    Is this service free to use?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, our basic rice leaf disease classification service is completely free to use. Simply upload your image and receive instant AI-powered disease detection and recommendations. We believe in making agricultural technology accessible to all farmers and agricultural professionals.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 2 */}
                <AccordionItem value="usage-2">
                  <AccordionTrigger className="text-left">
                    What recommendations will I receive?
                  </AccordionTrigger>
                  <AccordionContent>
                    After analyzing your image, the system provides specific treatment recommendations based on the detected disease. This includes information about the disease, suggested fungicides or bactericides, cultural practices to prevent spread, and general management strategies. Each recommendation is tailored to the specific disease identified.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 3 */}
                <AccordionItem value="usage-3">
                  <AccordionTrigger className="text-left">
                    Can I upload multiple images at once?
                  </AccordionTrigger>
                  <AccordionContent>
                    Currently, the system processes one image at a time to ensure accurate analysis for each leaf sample. After receiving results for one image, you can immediately upload another image for classification. This allows you to systematically check different plants or leaves in your field.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 4 */}
                <AccordionItem value="usage-4">
                  <AccordionTrigger className="text-left">
                    Is my uploaded data secure and private?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, we take data privacy seriously. Your uploaded images are processed securely and are only used for disease classification. We do not share your images or results with third parties. Images are temporarily stored for analysis and can be deleted upon request. Your agricultural data remains confidential.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
