'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import {Suspense, useEffect} from 'react'

// Replace with your actual Measurement ID
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'

// Helper function to track page views
export const pageview = (url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', GA_MEASUREMENT_ID, {
            page_path: url,
        })
    }
}

// Helper function to track events (like button clicks, form submissions)
export const event = ({ action, category, label, value }: {
    action: string
    category: string
    label: string
    value?: number
}) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', label, {
            event_action: action,
            event_category: category,
            value: value,
        })
    }
}

// export const handleBookingClick = () => {
//     // Track the event in GA4
//     event({
//         action: 'click_book_now',
//         category: 'booking',
//         label: 'header_button',
//     })
// }
export enum ButtonClickSource {
    ContactUs = 'contact_us',
    FeaturedServices = 'featured-services',
    Hero = 'hero',
    Navbar = 'navbar',
    ServicesCTA = 'services_cta',
    ServicesGallery = 'services_page',
    Testimonials = 'testimonials',
}

export enum Devices {
    Desktop = 'desktop',
    Mobile = 'mobile',
}

export enum TrackingAction {
    ClickPhone = 'click_phone',
    GoToBooking = 'click_go_to_booking',
    GoToContactUs = 'click_get_consultation',
    GoToServices = 'click_go_to_services',
    ToggleMobileMenu = 'open_mobile_menu',
}

export enum TrackingCategory {
    Contact = 'contact_us',
    Booking = 'booking',
    Services = 'services',
    MobileMenuToggle = 'navigation',
}

export const gAnalyticsTrackActionClick = (source: ButtonClickSource, action: TrackingAction, category: TrackingCategory) => {
    event({
        action: `${action}`,
        category: `${category}`,
        label: `${source}_${action}`,
    })
}

export const gAnalyticsTrackActionClickWithDevice = (source: ButtonClickSource, action: TrackingAction, category: TrackingCategory, device: Devices) => {
    event({
        action: `${action}`,
        category: `${category}`,
        label: `${source}_${action}_${device}`,
    })
}

// Google Analytics gtag types
// type GtagCommand = 'config' | 'event' | 'js' | 'set'
type GtagConfigParams = {
    page_path?: string
    page_title?: string
    page_location?: string
    custom_map?: Record<string, string>
    [key: string]: unknown
}
type GtagEventParams = {
    event_category?: string
    event_label?: string
    value?: number
    [key: string]: unknown
}

// Declare gtag on window
declare global {
    interface Window {
        gtag?: {
            (command: 'config', targetId: string, config?: GtagConfigParams): void
            (command: 'event', eventName: string, eventParams?: GtagEventParams): void
            (command: 'js', date: Date): void
            (command: 'set', config: Record<string, unknown>): void
        }
        dataLayer?: unknown[]
    }
}

// Separate component for analytics tracking that uses useSearchParams
function GoogleAnalyticsTracking() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    // Track page views when route changes
    useEffect(() => {
        const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
        pageview(url)
    }, [pathname, searchParams])

    return null
}

export default function GoogleAnalytics() {

    // Only load in production
    if (process.env.NODE_ENV !== 'production') {
        return null
    }

    return (
        <>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
            {/* Wrap the component that uses useSearchParams in Suspense */}
            <Suspense fallback={null}>
                <GoogleAnalyticsTracking />
            </Suspense>
        </>
    )
}