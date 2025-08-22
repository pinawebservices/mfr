'use client'

import Image from "next/image";
import {Check, Clock, Star} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {
    ButtonClickSource,
    gAnalyticsTrackActionClick,
    TrackingAction,
    TrackingCategory
} from "@/components/google-analytics";

const services = [
    {
        id: "physical-therapy",
        name: "Physical Therapy",
        description:
            "Comprehensive rehabilitation and injury recovery programs designed to restore function and reduce pain.",
        duration: "45-60 minutes",
        price: "From $120",
        image: "/physical_therapy.jpg",
        features: [
            "Injury assessment and diagnosis",
            "Personalized treatment plans",
            "Manual therapy techniques",
            "Exercise prescription",
            "Pain management strategies",
            "Progress tracking and monitoring",
        ],
        conditions: [
            "Back and neck pain",
            "Sports injuries",
            "Post-surgical rehabilitation",
            "Arthritis management",
            "Balance and mobility issues",
        ],
    },
    {
        id: "deep-tissue",
        name: "Deep Tissue Massage",
        description:
            "Therapeutic massage targeting deeper layers of muscle and connective tissue to release chronic tension.",
        duration: "60-90 minutes",
        price: "From $90",
        image: "/scraping.jpg",
        features: [
            "Targets chronic muscle tension",
            "Improves blood circulation",
            "Reduces inflammation",
            "Breaks down scar tissue",
            "Increases range of motion",
            "Stress and pain relief",
        ],
        conditions: [
            "Chronic muscle pain",
            "Tension headaches",
            "Upper and lower back pain",
            "Neck and shoulder stiffness",
            "Repetitive strain injuries",
        ],
    },
    {
        id: "sports-massage",
        name: "Sports Massage",
        description:
            "Specialized massage therapy designed for athletes and active individuals to enhance performance and prevent injuries.",
        duration: "60 minutes",
        price: "From $100",
        image: "/deep_tissue.jpg",
        features: [
            "Pre-event preparation",
            "Post-event recovery",
            "Injury prevention",
            "Performance enhancement",
            "Flexibility improvement",
            "Faster muscle recovery",
        ],
        conditions: [
            "Athletic performance optimization",
            "Sports injury recovery",
            "Muscle fatigue",
            "Training preparation",
            "Competition recovery",
        ],
    },
    {
        id: "relaxation",
        name: "Relaxation Massage",
        description:
            "Gentle, soothing massage focused on stress relief and overall relaxation for mind and body wellness.",
        duration: "60-90 minutes",
        price: "From $80",
        image: "/relaxation_massage.jpg",
        features: [
            "Gentle, flowing strokes",
            "Stress reduction",
            "Improved sleep quality",
            "Enhanced mood",
            "Lowered blood pressure",
            "Overall wellness boost",
        ],
        conditions: [
            "Stress and anxiety",
            "Sleep disorders",
            "General tension",
            "Mental fatigue",
            "Wellness maintenance",
        ],
    },
]

export default function ServicesContentSection() {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="space-y-16">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                        >
                            <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                                <Image
                                    src={service.image || "/placeholder.svg"}
                                    width={400}
                                    height={300}
                                    alt={service.name}
                                    className="w-full h-96 object-cover rounded-2xl shadow-xl"
                                />
                            </div>

                            <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                                <div className="flex items-center gap-4 mb-4">
                                    <h2 className="text-3xl font-bold Mfr-text-tiel">{service.name}</h2>
                                    <span className="bg-primary-100 Mfr-text-pink px-3 py-1 rounded-full text-sm font-semibold">
                      {service.price}
                    </span>
                                </div>

                                <p className="text-dark-600 text-lg mb-6 leading-relaxed">{service.description}</p>

                                <div className="flex items-center gap-4 mb-6 text-dark-500">
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-5 w-5 Mfr-text-pink" />
                                        <span>{service.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 text-accent fill-current" />
                                        ))}
                                        <span className="ml-1">5.0 rating</span>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <h3 className="font-semibold text-dark mb-3">What&#39;s Included:</h3>
                                        <ul className="space-y-2">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                                    <span className="text-dark-600 text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-dark mb-3">Helps With:</h3>
                                        <ul className="space-y-2">
                                            {service.conditions.map((condition, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                                    <span className="text-dark-600 text-sm">{condition}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <Button size="lg" className="Mfr-btn-bg-pink text-white" asChild>
                                    <Link href="/book" onClick={() => gAnalyticsTrackActionClick(ButtonClickSource.ServicesGallery, TrackingAction.GoToBooking, TrackingCategory.Booking)}>Book This Service</Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}