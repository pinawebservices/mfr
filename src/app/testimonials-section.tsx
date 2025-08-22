'use client'

import {Card, CardContent} from "@/components/ui/card";
import {Star} from "lucide-react";

const testimonials = [
    {
        name: "Sarah Johnson",
        rating: 5,
        text: "Amazing experience! The therapists are incredibly skilled and helped me recover from my injury faster than expected.",
    },
    {
        name: "Mike Chen",
        rating: 5,
        text: "Professional, clean facility with top-notch service. I've been coming here for months and always leave feeling great.",
    },
    {
        name: "Emily Rodriguez",
        rating: 5,
        text: "The massage therapy here is exceptional. Perfect for stress relief after long work weeks.",
    },
]

export default function TestimonialsSection() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold Mfr-text-tiel mb-4">What Our Clients Say</h2>
                    <p className="text-xl text-gray-600">Real experiences from real people</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="border-0 shadow-lg">
                            <CardContent className="p-8">
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-6 italic">&#34;{testimonial.text}&#34;</p>
                                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}