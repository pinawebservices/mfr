"use client"

import { Calendar, Clock, User } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"

export default function BookingPage() {
    const [step, setStep] = useState(1)
    // const [ setSelectedService] = useState("")
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [selectedService, setSelectedService] = useState("")
    // const [selectedDate, ] = useState("")
    // const [selectedTime, ] = useState("")

    const services = [
        { id: "physical-therapy", name: "Physical Therapy", duration: "60 min", price: 120 },
        { id: "deep-tissue", name: "Deep Tissue Massage", duration: "60 min", price: 90 },
        { id: "sports-massage", name: "Sports Massage", duration: "60 min", price: 100 },
        { id: "relaxation", name: "Relaxation Massage", duration: "90 min", price: 80 },
    ]

    // const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

    const handleServiceSelect = (serviceId: string) => {
        setSelectedService(serviceId)
        setStep(2)
    }

    // const handleDateTimeSelect = () => {
    //     if (selectedDate && selectedTime) {
    //         setStep(3)
    //     }
    // }

    //const selectedServiceData = services.find((s) => s.id === selectedService)

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold Mfr-text-tiel mb-4">Book Your Appointment</h1>
                    <p className="text-xl text-dark-600">Choose your service and preferred time</p>
                </div>

                {/* Progress Steps */}
                <div className="flex justify-center mb-12">
                    <div className="flex items-center space-x-4">
                        <div
                            className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 1 ? "bg-primary text-white" : "bg-gray-200"}`}
                        >
                            <User className="h-5 w-5" />
                        </div>
                        <div className={`w-16 h-1 ${step >= 2 ? "bg-primary" : "bg-gray-200"}`}></div>
                        <div
                            className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 2 ? "bg-primary text-white" : "bg-gray-200"}`}
                        >
                            <Calendar className="h-5 w-5" />
                        </div>
                        {/*<div className={`w-16 h-1 ${step >= 3 ? "bg-primary" : "bg-gray-200"}`}></div>*/}
                        {/*<div*/}
                        {/*    className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 3 ? "bg-primary text-white" : "bg-gray-200"}`}*/}
                        {/*>*/}
                        {/*    <CreditCard className="h-5 w-5" />*/}
                        {/*</div>*/}
                    </div>
                </div>

                {/* Step 1: Service Selection */}
                {step === 1 && (
                    <div className="grid md:grid-cols-2 gap-6">
                        {services.map((service) => (
                            <Card
                                key={service.id}
                                className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-primary"
                                onClick={() => handleServiceSelect(service.id)}
                            >
                                <CardHeader>
                                    <CardTitle className="flex justify-between items-center text-dark">
                                        {service.name}
                                        <span className="Mfr-text-tiel font-bold">${service.price}</span>
                                    </CardTitle>
                                    <CardDescription className="flex items-center gap-2">
                                        <Clock className="h-4 w-4" />
                                        {service.duration}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Button className="w-full Mfr-btn-bg-pink text-white">Select Service</Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}

                {/* Step 2: Date & Time Selection */}
                {step === 2 && (
                    <div className="grid md:grid-cols-1 gap-6">
                        {/*<div className="calendly-inline-widget"*/}
                        {/*     data-url="https://calendly.com/pinawebservices"*/}
                        {/*     style={{minWidth: "320px",height:"700px"}}></div>*/}
                        {/*<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"*/}
                        {/*        async></script>*/}
                        <script src='https://square.site/appointments/buyer/widget/bji0h66ss162sw/LDY57JFN8GKEC.js' async></script>
                    </div>
                    // <Card className="max-w-2xl mx-auto">
                    //     <CardHeader>
                    //         <CardTitle className="text-dark">Select Date & Time</CardTitle>
                    //         <CardDescription>
                    //             Service: {selectedServiceData?.name} - ${selectedServiceData?.price}
                    //         </CardDescription>
                    //     </CardHeader>
                    //     <CardContent className="space-y-6">
                    //         <div>
                    //             <Label htmlFor="date">Preferred Date</Label>
                    //             <Input
                    //                 id="date"
                    //                 type="date"
                    //                 value={selectedDate}
                    //                 onChange={(e) => setSelectedDate(e.target.value)}
                    //                 min={new Date().toISOString().split("T")[0]}
                    //             />
                    //         </div>
                    //
                    //         <div>
                    //             <Label>Available Time Slots</Label>
                    //             <div className="grid grid-cols-4 gap-3 mt-2">
                    //                 {timeSlots.map((time) => (
                    //                     <Button
                    //                         key={time}
                    //                         variant={selectedTime === time ? "default" : "outline"}
                    //                         className={
                    //                             selectedTime === time
                    //                                 ? "bg-primary hover:bg-primary-600 text-white"
                    //                                 : "border-primary Mfr-btn-bg-pink text-white"
                    //                         }
                    //                         onClick={() => setSelectedTime(time)}
                    //                     >
                    //                         {time}
                    //                     </Button>
                    //                 ))}
                    //             </div>
                    //         </div>
                    //
                    //         <div className="flex gap-4">
                    //             <Button
                    //                 variant="outline"
                    //                 onClick={() => setStep(1)}
                    //                 className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
                    //             >
                    //                 Back
                    //             </Button>
                    //             <Button
                    //                 onClick={handleDateTimeSelect}
                    //                 disabled={!selectedDate || !selectedTime}
                    //                 className="flex-1 Mfr-btn-bg-tiel text-white"
                    //             >
                    //                 Continue
                    //             </Button>
                    //         </div>
                    //     </CardContent>
                    // </Card>
                )}

                {/*/!* Step 3: Contact & Payment *!/*/}
                {/*{step === 3 && (*/}
                {/*    <Card className="max-w-2xl mx-auto">*/}
                {/*        <CardHeader>*/}
                {/*            <CardTitle className="text-dark">Contact Information & Payment</CardTitle>*/}
                {/*            <CardDescription>*/}
                {/*                {selectedServiceData?.name} on {selectedDate} at {selectedTime}*/}
                {/*            </CardDescription>*/}
                {/*        </CardHeader>*/}
                {/*        <CardContent className="space-y-6">*/}
                {/*            <div className="grid md:grid-cols-2 gap-4">*/}
                {/*                <div>*/}
                {/*                    <Label htmlFor="firstName">First Name</Label>*/}
                {/*                    <Input id="firstName" placeholder="John" />*/}
                {/*                </div>*/}
                {/*                <div>*/}
                {/*                    <Label htmlFor="lastName">Last Name</Label>*/}
                {/*                    <Input id="lastName" placeholder="Doe" />*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*            <div>*/}
                {/*                <Label htmlFor="email">Email</Label>*/}
                {/*                <Input id="email" type="email" placeholder="john@example.com" />*/}
                {/*            </div>*/}

                {/*            <div>*/}
                {/*                <Label htmlFor="phone">Phone Number</Label>*/}
                {/*                <Input id="phone" type="tel" placeholder="(555) 123-4567" />*/}
                {/*            </div>*/}

                {/*            <div>*/}
                {/*                <Label htmlFor="notes">Special Notes (Optional)</Label>*/}
                {/*                <Textarea id="notes" placeholder="Any specific concerns or requests..." />*/}
                {/*            </div>*/}

                {/*            <div className="border-t pt-6">*/}
                {/*                <h3 className="text-lg font-semibold mb-4 text-dark">Payment Information</h3>*/}

                {/*                <div>*/}
                {/*                    <Label htmlFor="cardNumber">Card Number</Label>*/}
                {/*                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" />*/}
                {/*                </div>*/}

                {/*                <div className="grid grid-cols-3 gap-4 mt-4">*/}
                {/*                    <div className="col-span-2">*/}
                {/*                        <Label htmlFor="expiry">Expiry Date</Label>*/}
                {/*                        <Input id="expiry" placeholder="MM/YY" />*/}
                {/*                    </div>*/}
                {/*                    <div>*/}
                {/*                        <Label htmlFor="cvv">CVV</Label>*/}
                {/*                        <Input id="cvv" placeholder="123" />*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*            <div className="bg-gray-50 p-4 rounded-lg">*/}
                {/*                <div className="flex justify-between items-center text-lg font-semibold">*/}
                {/*                    <span className="text-dark">Total:</span>*/}
                {/*                    <span className="text-primary">${selectedServiceData?.price}</span>*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*            <div className="flex gap-4">*/}
                {/*                <Button*/}
                {/*                    variant="outline"*/}
                {/*                    onClick={() => setStep(2)}*/}
                {/*                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"*/}
                {/*                >*/}
                {/*                    Back*/}
                {/*                </Button>*/}
                {/*                <Button className="flex-1 Mfr-btn-bg-pink text-white">Confirm Booking</Button>*/}
                {/*            </div>*/}
                {/*        </CardContent>*/}
                {/*    </Card>*/}
                {/*)}*/}
            </div>
        </div>
    )
}
