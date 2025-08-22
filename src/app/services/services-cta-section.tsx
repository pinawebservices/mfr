'use client'

import {Button} from "@/components/ui/button";
import Link from "next/link";
import {
    ButtonClickSource,
    gAnalyticsTrackActionClick,
    TrackingAction,
    TrackingCategory
} from "@/components/google-analytics";

export default function ServicesCTASection() {
    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold Mfr-text-tiel mb-6">Not Sure Which Service is Right for You?</h2>
                <p className="text-xl text-dark-600 mb-8">
                    Our experienced team can help you choose the best treatment plan for your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="Mfr-btn-bg-pink text-white" asChild>
                        <Link href="/contact" onClick={() => gAnalyticsTrackActionClick(ButtonClickSource.ServicesCTA, TrackingAction.GoToContactUs, TrackingCategory.Contact)}
                        >Get a Consultation</Link>
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className=" Mfr-btn-bg-tiel text-white"
                        asChild
                    >
                        <Link href="/book" onClick={() => gAnalyticsTrackActionClick(ButtonClickSource.ServicesCTA, TrackingAction.GoToBooking, TrackingCategory.Booking)}
                        >Book Any Service</Link>
                    </Button>
                </div>
            </div>
        </section>
        )
}