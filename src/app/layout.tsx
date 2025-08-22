import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ChatbotProvider from "@/components/ai-chatbot";
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "My Functional Recovery - Physical Therapy & Massage services",
    description:
        "Professional physical therapy and massage services. Book your appointment today for expert care and functional recovery solutions.",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <ChatbotProvider />
        <Footer />
        <SpeedInsights />
        </body>
        </html>
    )
}
