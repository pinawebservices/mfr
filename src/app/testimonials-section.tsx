'use client'

import {Card, CardContent} from "@/components/ui/card";
import {Star} from "lucide-react";

const testimonials = [
    {
        name: "Leidy Orozco",
        rating: 5,
        text: "Hello Natalia,\n" +
            "Just wanted to let you know that I felt great after the session yesterday, my shoulder feels amazing.\n" +
            "The cupping felt so relieving and what's more interesting is that yesrday was the first time my blood pressure was back in the 120 range, it's been a bit that's been running high.\n" +
            "The only different thing was the session yesterday, can't wait for next week, I'm feeling great. Thanks again and have a great rest of your week.",
    },
    {
        name: "Mike Chen",
        rating: 5,
        text: "I haven't worked out in a week and usually when I get back into the gym especially with the trainer it's really rough. However seeing you before my workout made a big difference. I felt strong fast loose and relaxed.\n" +
            "You are amazing.",
    },
    {
        name: "Tammy Barlow",
        rating: 5,
        text: "Hello Natalia,\n" +
            "Just wanted to let you know that I felt great after the session yesterday, my shoulder feels amazing.\n" +
            "The cupping felt so relieving and what's more interesting is that yesrday was the first time my blood pressure was back in the 120 range, it's been a bit that's been running high.\n" +
            "The only different thing was the session yesterday, can't wait for next week, I'm feeling great. Thanks again and have a great rest of your week.",
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