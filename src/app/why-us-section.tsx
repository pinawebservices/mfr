'use client'

import {Calendar, Heart, MapPin, Star} from "lucide-react";
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
                                <div className="Icon-bg-tiel p-3 rounded-full flex-shrink-0 w-12 h-12 flex items-center justify-center self-start">
                                    <Star className="h-6 w-6 Icon-text-tiel" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Licensed & Insured Professional</h3>
                                    <p className="text-gray-600">
                                        Licensed massage therapist with years of
                                        experience in personal training, occupational therapy, and massage therapy.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="Icon-bg-tiel p-3 rounded-full flex-shrink-0 w-12 h-12 flex items-center justify-center self-start">
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
                                <div className="Icon-bg-tiel p-3 rounded-full flex-shrink-0 w-12 h-12 flex items-center justify-center self-start">
                                    <Heart className="h-6 w-6 Icon-text-tiel" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Personalized Care</h3>
                                    <p className="text-gray-600">
                                        Every treatment is customized to your specific needs, goals, and preferences.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <Image
                            src="/deep_tissue.jpg"
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