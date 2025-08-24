'use client'

import {Card, CardContent} from "@/components/ui/card";
import Image from "next/image";
import {Clock} from "lucide-react";
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
        name: "Customized Body Work",
        description: "Fully customized session designed to meet your unique needs and wellness goals.",
        duration: "60-120 min",
        price: "From $90",
        image: "/scraping.jpg",
    },
    {
        name: "Body Contouring",
        description: "Advanced body contouring combos",
        duration: "30-60 min",
        price: "From $65",
        image: "/body_contouring.jpg",
    },
    {
        name: "Lymphatic Drainage Massage",
        description: "Detox, reduce swelling, boost immunity.",
        duration: "60 min",
        price: "From $120",
        image: "/lymphatic_drainage.jpg",
    },
    {
        name: "Teens and Kids Recovery",
        description: "Massage for Kids & Young Athletes",
        duration: "30 min",
        price: "From $45",
        image: "/kids_massage.jpg",
    },
]

export default function FeaturedServicesSection() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold Mfr-text-tiel mb-4">Our Services</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Comprehensive wellness solutions tailored to your individual needs
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                            <div className="relative overflow-hidden rounded-t-lg">
                                <Image
                                    src={service.image || "/placeholder.svg"}
                                    width={300}
                                    height={400}
                                    alt={service.name}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold Mfr-text-tiel">
                                    {service.price}
                                </div>
                            </div>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-4 w-4" />
                                        {service.duration}
                                    </div>
                                </div>
                                <Button className="w-full Mfr-btn-bg-pink" asChild>
                                    <Link href="/book" onClick={() => gAnalyticsTrackActionClick(ButtonClickSource.FeaturedServices, TrackingAction.GoToBooking, TrackingCategory.Booking)}>Book Now</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}