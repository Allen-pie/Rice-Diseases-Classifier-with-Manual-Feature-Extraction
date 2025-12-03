import { BentoGrid6 } from "@/components/custom/bento-grid-6";
import { FaqSection2 } from "@/components/custom/faq-section-2";
import { FeatureSection9 } from "@/components/custom/feature-section-9";
import { Footer1 } from "@/components/custom/footer-1";
import { HeroSection2 } from "@/components/custom/hero-section-2";
import { LogoSection10 } from "@/components/custom/logo-section-7";
import { LpNavbar1 } from "@/components/custom/lp-navbar-1";
import { PricingSection3 } from "@/components/custom/pricing-section-3";
import { StatsSection4 } from "@/components/custom/stats-section-4";
import TestimonialsSection1 from "@/components/custom/testimonials-section-1";

export default function Page() {
  return (
    <main>
      <LpNavbar1 />
      <HeroSection2 />
      <LogoSection10 />
      <TestimonialsSection1
        quote="MindSpace is like having a photographic memory for every meeting. We reduced the follow-up emails by 80%."
        authorName="David Park"
        authorRole="Engineering Manager at TechCorp"
        avatarSrc="/DavidPark.png"
      />
      <BentoGrid6 />
      <FeatureSection9 />
      <StatsSection4 />
      <TestimonialsSection1
        quote="At TechStar, 43% of meeting content was forgotten within 24 hours. Now, the AI summaries are better than my own notes!"
        authorName="Monica Kurt"
        authorRole="Project Manager at TechStar"
        avatarSrc="/MonicaKurt.png"
      />
      <PricingSection3 />
      <FaqSection2 />
      <Footer1 />
    </main>
  );
}
