"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Phone, MapPin, Mail, Send } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-lavender-light relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/areal%20view%20of%20hoses-A8b5iupFcFat2U6luKAG6GxbB9letz.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-dark text-balance">
              Let&apos;s Get Your House Leased
            </h2>
            <p className="mt-4 text-lg text-charcoal/70 leading-relaxed">
              Tell us about your property and we&apos;ll review whether it is a good fit for our master lease structure.
            </p>

            {/* Contact Details */}
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-border">
                  <Phone className="h-6 w-6 text-purple-cta" />
                </div>
                <div>
                  <div className="font-semibold text-purple-dark">Phone</div>
                  <a href="tel:281-380-2128" className="text-charcoal/70 hover:text-purple-cta transition-colors">
                    281-380-2128
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-border">
                  <MapPin className="h-6 w-6 text-purple-cta" />
                </div>
                <div>
                  <div className="font-semibold text-purple-dark">Address</div>
                  <p className="text-charcoal/70">
                    330 Rayford Rd., #146<br />
                    Spring, TX 77386
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-border">
                  <Mail className="h-6 w-6 text-purple-cta" />
                </div>
                <div>
                  <div className="font-semibold text-purple-dark">Service Area</div>
                  <p className="text-charcoal/70">
                    Houston, Spring, and<br />
                    surrounding Houston area
                  </p>
                </div>
              </div>
            </div>

            {/* Home Image */}
            <div className="mt-10 hidden lg:block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Mat%20at%20Front%20exterior-hyVpRYNgiq4f1fjYfmTtRcsmglfJjS.jpg"
                alt="Welcome home mat"
                width={400}
                height={300}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-border">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-purple-dark mb-2">Thank You!</h3>
                <p className="text-charcoal/70">
                  We&apos;ve received your property submission and will be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-charcoal">Full Name *</Label>
                    <Input 
                      id="fullName" 
                      name="fullName"
                      required 
                      className="border-gray-border focus:border-purple-cta focus:ring-purple-cta"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-charcoal">Phone *</Label>
                    <Input 
                      id="phone" 
                      name="phone"
                      type="tel" 
                      required 
                      className="border-gray-border focus:border-purple-cta focus:ring-purple-cta"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-charcoal">Email *</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    required 
                    className="border-gray-border focus:border-purple-cta focus:ring-purple-cta"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="propertyAddress" className="text-charcoal">Property Address *</Label>
                  <Input 
                    id="propertyAddress" 
                    name="propertyAddress"
                    required 
                    className="border-gray-border focus:border-purple-cta focus:ring-purple-cta"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-charcoal">City *</Label>
                    <Input 
                      id="city" 
                      name="city"
                      required 
                      className="border-gray-border focus:border-purple-cta focus:ring-purple-cta"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="propertyType" className="text-charcoal">Property Type *</Label>
                    <Select name="propertyType" required>
                      <SelectTrigger className="border-gray-border focus:border-purple-cta focus:ring-purple-cta">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single-family">Single Family Home</SelectItem>
                        <SelectItem value="townhouse">Townhouse</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                        <SelectItem value="duplex">Duplex</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="bedrooms" className="text-charcoal">Bedrooms / Units *</Label>
                    <Select name="bedrooms" required>
                      <SelectTrigger className="border-gray-border focus:border-purple-cta focus:ring-purple-cta">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="5+">5+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="occupancyStatus" className="text-charcoal">Occupancy Status *</Label>
                    <Select name="occupancyStatus" required>
                      <SelectTrigger className="border-gray-border focus:border-purple-cta focus:ring-purple-cta">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vacant">Vacant</SelectItem>
                        <SelectItem value="occupied-tenant">Occupied (Tenant)</SelectItem>
                        <SelectItem value="occupied-owner">Occupied (Owner)</SelectItem>
                        <SelectItem value="soon-vacant">Soon to be Vacant</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-charcoal">Message (Optional)</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    rows={4}
                    placeholder="Tell us about your property or any specific needs..."
                    className="border-gray-border focus:border-purple-cta focus:ring-purple-cta resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-cta hover:bg-purple-dark text-white rounded-full py-6 text-base font-semibold shadow-lg shadow-purple-cta/25"
                >
                  {isSubmitting ? "Submitting..." : "Submit Property for Review"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
