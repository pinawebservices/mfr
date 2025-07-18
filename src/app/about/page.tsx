import { Award, Heart, Shield, Users } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image";

export default function AboutPage() {
    // const team = [
    //     {
    //         name: "Dr. Sarah Johnson",
    //         role: "Lead Physical Therapist",
    //         credentials: "DPT, OCS",
    //         experience: "12 years",
    //         image: "/placeholder.svg?height=300&width=300",
    //         bio: "Specializes in orthopedic and sports rehabilitation with extensive experience in manual therapy techniques.",
    //     },
    //     {
    //         name: "Michael Chen",
    //         role: "Licensed Massage Therapist",
    //         credentials: "LMT, NCTMB",
    //         experience: "8 years",
    //         image: "/placeholder.svg?height=300&width=300",
    //         bio: "Expert in deep tissue and sports massage with a focus on injury prevention and recovery.",
    //     },
    //     {
    //         name: "Dr. Emily Rodriguez",
    //         role: "Physical Therapist",
    //         credentials: "DPT, CSCS",
    //         experience: "6 years",
    //         image: "/placeholder.svg?height=300&width=300",
    //         bio: "Passionate about helping patients regain mobility and strength through personalized treatment plans.",
    //     },
    //     {
    //         name: "Lisa Thompson",
    //         role: "Massage Therapist",
    //         credentials: "LMT, CranioSacral Certified",
    //         experience: "10 years",
    //         image: "/placeholder.svg?height=300&width=300",
    //         bio: "Specializes in relaxation and therapeutic massage with additional training in craniosacral therapy.",
    //     },
    // ]

    const values = [
        {
            icon: Heart,
            title: "Compassionate Care",
            description: "We treat every client with empathy, respect, and genuine concern for their wellbeing.",
        },
        {
            icon: Award,
            title: "Excellence",
            description: "We maintain the highest standards in treatment quality and professional development.",
        },
        {
            icon: Shield,
            title: "Trust & Safety",
            description: "Your safety and privacy are our top priorities in everything we do.",
        },
        {
            icon: Users,
            title: "Personalized Approach",
            description: "Every treatment plan is tailored to your unique needs and goals.",
        },
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gray-50 py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl font-bold Mfr-text-tiel mb-6">About My Functional Recovery</h1>
                    <p className="text-xl text-dark-600 leading-relaxed">
                        Dedicated to helping you achieve optimal health and wellness through professional physical therapy and
                        massage services.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold Mfr-text-tiel mb-6">Our Story</h2>
                            <div className="space-y-4 text-dark-600 leading-relaxed">
                                <p>
                                    Founded in 2018, My Functional Recovery began with a simple mission: to provide exceptional physical
                                    therapy and massage services in a warm, welcoming environment. Our founders, both healthcare
                                    professionals, recognized the need for a practice that combines clinical expertise with genuine care
                                    for each individual&#39;s journey to wellness.
                                </p>
                                <p>
                                    Over the years, we&#39;ve grown from a small clinic to a comprehensive wellness center, but our core
                                    values remain unchanged. We believe that healing happens best when patients feel heard, understood,
                                    and supported throughout their treatment process.
                                </p>
                                <p>
                                    Today, we&#39;re proud to serve hundreds of clients each month, helping them overcome injuries, manage
                                    pain, reduce stress, and achieve their health and wellness goals. Our team of licensed professionals
                                    brings together decades of combined experience and a shared commitment to excellence.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/srt_professional.jpg"
                                width={600}
                                height={500}
                                alt="My Functional Recovery facility"
                                className="rounded-2xl shadow-xl"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary">500+</div>
                                    <div className="text-sm text-dark-600">Happy Clients</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold Mfr-text-tiel mb-4">Our Values</h2>
                        <p className="text-xl text-dark-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <Card key={index} className="text-center border-0 shadow-lg">
                                <CardContent className="p-8">
                                    <div className="Icon-bg-pink w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <value.icon className="h-8 w-8 text-[#f0978a]" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-dark">{value.title}</h3>
                                    <p className="text-dark-600">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Team */}
            {/*<section className="py-20 px-4 bg-white">*/}
            {/*    <div className="max-w-7xl mx-auto">*/}
            {/*        <div className="text-center mb-16">*/}
            {/*            <h2 className="text-4xl font-bold Mfr-text-tiel mb-4">Meet Our Team</h2>*/}
            {/*            <p className="text-xl text-dark-600 max-w-2xl mx-auto">*/}
            {/*                Experienced professionals dedicated to your health and wellness*/}
            {/*            </p>*/}
            {/*        </div>*/}

            {/*        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">*/}
            {/*            {team.map((member, index) => (*/}
            {/*                <Card key={index} className="border-0 shadow-lg overflow-hidden">*/}
            {/*                    <div className="relative">*/}
            {/*                        <img*/}
            {/*                            src={member.image || "/placeholder.svg"}*/}
            {/*                            alt={member.name}*/}
            {/*                            className="w-full h-64 object-cover"*/}
            {/*                        />*/}
            {/*                        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-xs font-semibold text-primary">*/}
            {/*                            {member.experience}*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    <CardContent className="p-6">*/}
            {/*                        <h3 className="text-xl font-semibold mb-1 text-dark">{member.name}</h3>*/}
            {/*                        <p className="text-primary font-medium mb-1">{member.role}</p>*/}
            {/*                        <p className="text-sm text-dark-500 mb-3">{member.credentials}</p>*/}
            {/*                        <p className="text-dark-600 text-sm">{member.bio}</p>*/}
            {/*                    </CardContent>*/}
            {/*                </Card>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/* Certifications & Credentials */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold Mfr-text-tiel mb-4">Certifications & Credentials</h2>
                        <p className="text-xl text-dark-600">Our commitment to professional excellence and continuing education</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="text-center border-0 shadow-lg">
                            <CardContent className="p-8">
                                <div className="Icon-bg-tiel w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Award className="h-8 w-8 text-primary Icon-text-tiel" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-dark">Licensed Professionals</h3>
                                <p className="text-dark-600">
                                    All our therapists are fully licensed and maintain current certifications in their respective fields.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center border-0 shadow-lg">
                            <CardContent className="p-8">
                                <div className="Icon-bg-tiel w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Shield className="h-8 w-8 Icon-text-tiel" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-dark">Insurance Accepted</h3>
                                <p className="text-dark-600">
                                    We work with most major insurance providers to make our services very accessible and affordable.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center border-0 shadow-lg">
                            <CardContent className="p-8">
                                <div className="Icon-bg-tiel w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="h-8 w-8 Icon-text-tiel" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-dark">Continuing Education</h3>
                                <p className="text-dark-600">
                                    Our team regularly attends workshops and training to stay current with the latest techniques and best
                                    practices.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}
