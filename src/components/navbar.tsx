"use client"

import { Calendar, Menu, Phone, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const navigation = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ]

    return (
        <nav className="bg-stone-900 shadow-sm border-b sticky top-0 z-50" id={"Navbar"}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        {/*<div className="bg-emerald-600 p-2 rounded-lg">*/}
                        {/*    <div className="w-6 h-6 bg-white rounded-sm"></div>*/}
                        {/*</div>*/}
                        <Image src="/mfr-logo.png" alt="" width={120} height={40} className="h-10 w-auto" priority />
                        <span className="text-xl font-bold text-neutral-50">MY FUNCTIONAL RECOVERY</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-neutral-50 hover:text-[#58aebb] font-medium transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button variant="outline" size="sm" asChild>
                            <Link href="/contact">
                                <Phone className="mr-2 h-4 w-4" />
                                Call Us
                            </Link>
                        </Button>
                        <Button size="sm" className="Mfr-btn-bg-pink" asChild>
                            <Link href="/book">
                                <Calendar className="mr-2 h-4 w-4" />
                                Book Now
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-md text-neutral-50 hover:text-emerald-600"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t">
                        <div className="flex flex-col space-y-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-neutral-50 hover:text-[#f0978a] font-medium px-2 py-1"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="flex flex-col space-y-2 pt-4 border-t">
                                <Button variant="outline" size="sm" asChild>
                                    <Link href="/contact">
                                        <Phone className="mr-2 h-4 w-4" />
                                        Call Us
                                    </Link>
                                </Button>
                                <Button size="sm" className="Mfr-btn-bg-pink" asChild>
                                    <Link href="/book">
                                        <Calendar className="mr-2 h-4 w-4" />
                                        Book Now
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
