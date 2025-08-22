import ServicesHeroSection from "@/app/services/services-hero-section";
import ServicesContentSection from "@/app/services/services-content-section";
import ServicesCTASection from "@/app/services/services-cta-section";

export default function ServicesPage() {

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <ServicesHeroSection />

            {/* services Grid */}
            <ServicesContentSection />

            {/* CTA Section */}
            <ServicesCTASection />
        </div>
    )
}
