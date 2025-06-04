import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

import Image from "next/image";

export default function Footer() {
    return (
        <footer className= "text-white" id={"Footer"}>
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            {/*<div className="bg-emerald-600 p-2 rounded-lg">*/}
                            {/*    <div className="w-6 h-6 bg-white rounded-sm"></div>*/}
                            {/*</div>*/}
                            <Image src="/mfr-logo.png" alt="" width={120} height={40} className="h-10 w-auto" priority />
                            <span className="text-xl font-bold">MY FUNCTIONAL RECOVERY</span>
                        </Link>
                        <p className="text-gray-400 mb-6">
                            Your trusted partner in health and wellness. Professional physical therapy and massage services.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/book" className="text-gray-400 hover:text-white transition-colors">
                                    Book Appointment
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/services#physical-therapy" className="text-gray-400 hover:text-white transition-colors">
                                    Physical Therapy
                                </Link>
                            </li>
                            <li>
                                <Link href="/services#massage" className="text-gray-400 hover:text-white transition-colors">
                                    Massage Therapy
                                </Link>
                            </li>
                            <li>
                                <Link href="/services#sports" className="text-gray-400 hover:text-white transition-colors">
                                    Sports Massage
                                </Link>
                            </li>
                            <li>
                                <Link href="/services#relaxation" className="text-gray-400 hover:text-white transition-colors">
                                    Relaxation Massage
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <MapPin className="h-5 w-5 Mfr-text-tiel" />
                                <span className="text-gray-400">123 Wellness St, Health City, HC 12345</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="h-5 w-5 Mfr-text-tiel" />
                                <span className="text-gray-400">(555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="h-5 w-5 Mfr-text-tiel" />
                                <span className="text-gray-400">info@wellnesshub.com</span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h4 className="font-semibold mb-2">Hours</h4>
                            <div className="text-gray-400 text-sm space-y-1">
                                <div>Mon-Fri: 8:00 AM - 7:00 PM</div>
                                <div>Saturday: 9:00 AM - 5:00 PM</div>
                                <div>Sunday: Closed</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 WellnessHub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
