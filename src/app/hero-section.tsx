'use client'

import {Button} from "@/components/ui/button";
import Link from "next/link";
import {
    ButtonClickSource,
    gAnalyticsTrackActionClick,
    TrackingAction,
    TrackingCategory
} from "@/components/google-analytics";
import {ArrowRight} from "lucide-react";
import {CldImage} from "next-cloudinary";

export default function HeroSection() {
    return (
        <section className="relative bg-gradient-to-br from-cyan-200 to-cyan-900 py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            <span className="Mfr-text-gray">Heal.</span>
                            <br/>
                            <span className="Mfr-text-pink">Restore.</span>
                            <span className="text-neutral-50">Thrive.</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Skilled massage therapy and body work services designed to help you recover, relax, and reach your
                            wellness goals in a modern, caring environment.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="Mfr-btn-bg-pink" asChild>
                                <Link href="/book" onClick={() => gAnalyticsTrackActionClick(ButtonClickSource.Hero, TrackingAction.GoToBooking, TrackingCategory.Booking)}>
                                    Book Appointment <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/services" onClick={() => gAnalyticsTrackActionClick(ButtonClickSource.Hero, TrackingAction.GoToServices, TrackingCategory.Services)}>View Services</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative">
                        <CldImage
                            src="https://res.cloudinary.com/ddudpjxrp/image/upload/t_600w/v1755960920/white-logo_ikrrws.png"
                            alt=""
                            height={"500"}
                            width={"600"}
                            className="rounded-2xl shadow-2xl"
                        />
                        {/*<div className="absolute -bottom-8 -left-10 bg-white p-6 rounded-xl shadow-lg outline-neutral-100 outline-1">*/}
                        {/*    <div className="flex items-center gap-3">*/}
                        {/*        <div className="Icon-bg-tiel p-2 rounded-full">*/}
                        {/*            <Star className="h-6 w-6 Icon-text-tiel" />*/}
                        {/*        </div>*/}
                        {/*        <div>*/}
                        {/*            <div className="font-semibold">500+ Happy Clients</div>*/}
                        {/*            <div className="text-sm text-gray-600">5-star rated service</div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </section>
    )
}