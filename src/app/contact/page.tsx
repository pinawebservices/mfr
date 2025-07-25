import { Clock, Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl font-bold Mfr-text-tiel mb-6">Contact Us</h1>
                    <p className="text-xl text-dark-600 leading-relaxed">
                        Get in touch with our team. We&#39;re here to help you on your wellness journey.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <Card className="shadow-xl border-0">
                            <CardHeader>
                                <CardTitle className="text-2xl Mfr-text-pink">Send us a Message</CardTitle>
                                <CardDescription>Fill out the form below and we&#39;ll get back to you within 24 hours.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="firstName">First Name</Label>
                                        <Input id="firstName" placeholder="John" />
                                    </div>
                                    <div>
                                        <Label htmlFor="lastName">Last Name</Label>
                                        <Input id="lastName" placeholder="Doe" />
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="john@example.com" />
                                </div>

                                <div>
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                                </div>

                                <div>
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input id="subject" placeholder="How can we help you?" />
                                </div>

                                <div>
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea id="message" placeholder="Tell us about your needs or questions..." className="min-h-32" />
                                </div>

                                <Button className="w-full bg-primary hover:bg-primary-600 text-white text-lg py-6">Send Message</Button>
                            </CardContent>
                        </Card>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold Mfr-text-pink mb-6">Get in Touch</h2>
                                <p className="text-dark-600 text-lg leading-relaxed mb-8">
                                    We&#39;re here to answer your questions and help you schedule the perfect appointment. Reach out to us
                                    through any of the methods below.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <Card className="border-l-4 border-l-[#58aebb]">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-primary-100 p-3 rounded-full">
                                                <Phone className="h-6 w-6 text-[#f0978a]" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg mb-1 text-dark">Phone</h3>
                                                <p className="text-dark-600 mb-2">(555) 123-4567</p>
                                                <p className="text-sm text-dark-500">Call us for immediate assistance</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-l-4 border-l-[#58aebb]">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-primary-100 p-3 rounded-full">
                                                <Mail className="h-6 w-6 text-[#f0978a]" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg mb-1 text-dark">Email</h3>
                                                <p className="text-dark-600 mb-2">info@myfunctionalrecovery.com</p>
                                                <p className="text-sm text-dark-500">We&#39;ll respond within 24 hours</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/*<Card className="border-l-4 border-l-primary">*/}
                                {/*    <CardContent className="p-6">*/}
                                {/*        <div className="flex items-start gap-4">*/}
                                {/*            <div className="bg-primary-100 p-3 rounded-full">*/}
                                {/*                <MapPin className="h-6 w-6 text-primary" />*/}
                                {/*            </div>*/}
                                {/*            <div>*/}
                                {/*                <h3 className="font-semibold text-lg mb-1 text-dark">Location</h3>*/}
                                {/*                <p className="text-dark-600 mb-2">*/}
                                {/*                    123 Wellness Street*/}
                                {/*                    <br />*/}
                                {/*                    Health City, HC 12345*/}
                                {/*                </p>*/}
                                {/*                <p className="text-sm text-dark-500">Easy parking available</p>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*    </CardContent>*/}
                                {/*</Card>*/}

                                <Card className="border-l-4 border-l-[#58aebb]">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-primary-100 p-3 rounded-full">
                                                <Clock className="h-6 w-6 text-[#f0978a]" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg mb-1 text-dark">Hours</h3>
                                                <div className="text-dark-600 space-y-1">
                                                    <p>Monday - Friday: 8:00 AM - 7:00 PM</p>
                                                    <p>Saturday: 9:00 AM - 5:00 PM</p>
                                                    <p>Sunday: Closed</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <Card className=" border-primary">
                                <CardContent className="p-6 text-center">
                                    <h3 className="font-semibold text-lg mb-2 text-dark">Ready to Book?</h3>
                                    <p className="text-dark-600 mb-4">Skip the wait and book your appointment online</p>
                                    <Button className="Mfr-btn-bg-pink text-white" asChild>
                                        <a href="/book">Book Appointment Now</a>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
