'use client'

import {Button} from "@/components/ui/button";
import Link from "next/link";
import {
    ButtonClickSource,
    gAnalyticsTrackActionClick,
    TrackingAction,
    TrackingCategory
} from "@/components/google-analytics";
import {Calendar, Phone} from "lucide-react";

export default function CtaSection() {
    return (
        <section className="py-20 px-4 bg-[#f0978a]">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Wellness Journey?</h2>
                <p className="text-xl text-neutral-50 mb-8">
                    Book your appointment today and take the first step towards better health and wellness.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="Mfr-btn-bg-tiel" asChild>
                        <Link href="/book" onClick={() => gAnalyticsTrackActionClick(ButtonClickSource.Testimonials, TrackingAction.GoToBooking, TrackingCategory.Booking)}>
                            <Calendar className="mr-2 h-5 w-5" />
                            Book Appointment
                        </Link>
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        asChild
                    >
                        <Link href="/contact" onClick={() => gAnalyticsTrackActionClick(ButtonClickSource.Testimonials, TrackingAction.ClickPhone, TrackingCategory.Contact)}>
                            <Phone className="mr-2 h-5 w-5" />
                            Call Us
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}