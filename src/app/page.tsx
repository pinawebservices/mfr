import HeroSection from "@/app/hero-section";
import FeaturedServicesSection from "@/app/featured-services-section";
import WhyUsSection from "@/app/why-us-section";
import TestimonialsSection from "@/app/testimonials-section";
import CtaSection from "@/app/cta-section";

export default function HomePage() {

  return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <HeroSection />

        {/* services Section */}
        <FeaturedServicesSection />

        {/* Why Choose Us Section */}
        <WhyUsSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* CTA Section */}
        <CtaSection />
      </div>
  )
}
