'use client'

import {Calendar, MapPin, Star} from "lucide-react";
import Image from "next/image";

export default function WhyUsSection() {
    return (
        <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold Mfr-text-tiel mb-6">Why Choose Us?</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="Icon-bg-tiel p-3 rounded-full flex-shrink-0">
                                    <Star className="h-6 w-6 Icon-text-tiel" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Licensed Professionals</h3>
                                    <p className="text-gray-600">
                                        Our team consists of licensed physical therapists and certified massage therapists with years of
                                        experience.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="Icon-bg-tiel p-3 rounded-full flex-shrink-0">
                                    <Calendar className="h-6 w-6 Icon-text-tiel" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
                                    <p className="text-gray-600">
                                        Easy online booking with flexible appointment times to fit your busy schedule.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="Icon-bg-tiel p-3 rounded-full flex-shrink-0">
                                    <MapPin className="h-6 w-6 Icon-text-tiel" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Modern Facility</h3>
                                    <p className="text-gray-600">
                                        State-of-the-art equipment and a clean, comfortable environment for your treatment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <Image
                            src="/srt_professional.jpg"
                            width={500}
                            height={400}
                            alt="Professional therapist"
                            className="rounded-2xl shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}