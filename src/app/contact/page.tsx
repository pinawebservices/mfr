import ContactUsHeroSection from "@/app/contact/contact-hero-section";
import ContactContentSection from "@/app/contact/contact-content-section";

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <ContactUsHeroSection />

            {/* Contact Content */}
            <ContactContentSection />

        </div>
    )
}
