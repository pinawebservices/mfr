import { ArrowRight, Calendar, Clock, MapPin, Phone, Star } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image";

export default function HomePage() {
  const services = [
    {
      name: "Physical Therapy",
      description: "Comprehensive rehabilitation and injury recovery programs",
      duration: "45-60 min",
      price: "From $120",
      image: "/deep_tissue.jpg?height=300&width=400",
    },
    {
      name: "Deep Tissue Massage",
      description: "Therapeutic massage targeting muscle tension and knots",
      duration: "60-90 min",
      price: "From $90",
      image: "/scraping.jpg?height=300&width=400",
    },
    {
      name: "Sports Massage",
      description: "Specialized treatment for athletes and active individuals",
      duration: "60 min",
      price: "From $100",
      image: "/physical_therapy.jpg?height=300&width=400",
    },
    {
      name: "Relaxation Massage",
      description: "Gentle, soothing massage for stress relief and relaxation",
      duration: "60-90 min",
      price: "From $80",
      image: "/relaxation_massage.jpg?height=300&width=400",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Amazing experience! The therapists are incredibly skilled and helped me recover from my injury faster than expected.",
    },
    {
      name: "Mike Chen",
      rating: 5,
      text: "Professional, clean facility with top-notch service. I've been coming here for months and always leave feeling great.",
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      text: "The massage therapy here is exceptional. Perfect for stress relief after long work weeks.",
    },
  ]

  return (
      <div className="min-h-screen">
        {/* Hero Section */}
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
                  Expert physical therapy and massage services designed to help you recover, relax, and reach your
                  wellness goals in a modern, caring environment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="Mfr-btn-bg-pink" asChild>
                    <Link href="/book">
                      Book Appointment <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/services">View Services</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Image
                    src="/white-logo.png"
                    alt=""
                    height={"500"}
                    width={"600"}
                    className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -left-10 bg-white p-6 rounded-xl shadow-lg outline-neutral-100 outline-1">
                  <div className="flex items-center gap-3">
                    <div className="Icon-bg-tiel p-2 rounded-full">
                      <Star className="h-6 w-6 Icon-text-tiel" />
                    </div>
                    <div>
                      <div className="font-semibold">500+ Happy Clients</div>
                      <div className="text-sm text-gray-600">5-star rated service</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold Mfr-text-tiel mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive wellness solutions tailored to your individual needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                          src={service.image || "/placeholder.svg"}
                          alt={service.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold Mfr-text-tiel">
                        {service.price}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {service.duration}
                        </div>
                      </div>
                      <Button className="w-full Mfr-btn-bg-pink" asChild>
                        <Link href="/book">Book Now</Link>
                      </Button>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold Mfr-text-tiel mb-6">Why Choose Us?</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="Icon-bg-tiel p-3 rounded-full flex-shrink-0">
                      <Star className="h-6 w-6 Icon-text-tiel" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Licensed Professionals</h3>
                      <p className="text-gray-600">
                        Our team consists of licensed physical therapists and certified massage therapists with years of
                        experience.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="Icon-bg-tiel p-3 rounded-full flex-shrink-0">
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
                    <div className="Icon-bg-tiel p-3 rounded-full flex-shrink-0">
                      <MapPin className="h-6 w-6 Icon-text-tiel" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Modern Facility</h3>
                      <p className="text-gray-600">
                        State-of-the-art equipment and a clean, comfortable environment for your treatment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                    src="/srt_professional.jpg?height=400&width=500"
                    alt="Professional therapist"
                    className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold Mfr-text-tiel mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600">Real experiences from real people</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-[#f0978a]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Wellness Journey?</h2>
            <p className="text-xl text-neutral-50 mb-8">
              Book your appointment today and take the first step towards better health and wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="Mfr-btn-bg-tiel" asChild>
                <Link href="/book">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </Link>
              </Button>
              <Button
                  size="lg"
                  variant="outline"
                  asChild
              >
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
  )
}
