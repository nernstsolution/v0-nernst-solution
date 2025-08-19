"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import type { Product } from "@/lib/products"
import { FileText, Send } from "lucide-react"

interface QuoteRequestFormProps {
  product: Product
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  jobTitle: string
  organizationType: string
  country: string
  projectDescription: string
  timeline: string
  budget: string
  additionalRequirements: string
  newsletter: boolean
}

export function QuoteRequestForm({ product }: QuoteRequestFormProps) {
  const { toast } = useToast()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    organizationType: "",
    country: "",
    projectDescription: "",
    timeline: "",
    budget: "",
    additionalRequirements: "",
    newsletter: false,
  })

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-quote-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          productName: product.name,
          productId: product.id,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to send quote request")
      }

      router.push("/quote/success")
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-sans">
          <FileText className="h-5 w-5" />
          Quote Request Form
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="font-semibold font-sans">Contact Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
              />
            </div>
          </div>

          {/* Organization Information */}
          <div className="space-y-4">
            <h3 className="font-semibold font-sans">Organization Information</h3>
            <div>
              <Label htmlFor="company">Company/Institution *</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input
                  id="jobTitle"
                  value={formData.jobTitle}
                  onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="organizationType">Organization Type</Label>
                <Select
                  value={formData.organizationType}
                  onValueChange={(value) => handleInputChange("organizationType", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="university">University</SelectItem>
                    <SelectItem value="research-institute">Research Institute</SelectItem>
                    <SelectItem value="industrial-company">Industrial Company</SelectItem>
                    <SelectItem value="government">Government Agency</SelectItem>
                    <SelectItem value="startup">Startup</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                value={formData.country}
                onChange={(e) => handleInputChange("country", e.target.value)}
              />
            </div>
          </div>

          {/* Project Information */}
          <div className="space-y-4">
            <h3 className="font-semibold font-sans">Project Details</h3>
            <div>
              <Label htmlFor="projectDescription">Project Description *</Label>
              <Textarea
                id="projectDescription"
                value={formData.projectDescription}
                onChange={(e) => handleInputChange("projectDescription", e.target.value)}
                placeholder="Please describe your research project and how you plan to use this equipment..."
                rows={4}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="timeline">Project Timeline</Label>
                <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate (1-2 weeks)</SelectItem>
                    <SelectItem value="1-month">Within 1 month</SelectItem>
                    <SelectItem value="3-months">Within 3 months</SelectItem>
                    <SelectItem value="6-months">Within 6 months</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="budget">Budget Range</Label>
                <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-50k">Under $50,000</SelectItem>
                    <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                    <SelectItem value="100k-200k">$100,000 - $200,000</SelectItem>
                    <SelectItem value="200k-500k">$200,000 - $500,000</SelectItem>
                    <SelectItem value="over-500k">Over $500,000</SelectItem>
                    <SelectItem value="not-specified">Prefer not to specify</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="additionalRequirements">Additional Requirements or Comments</Label>
              <Textarea
                id="additionalRequirements"
                value={formData.additionalRequirements}
                onChange={(e) => handleInputChange("additionalRequirements", e.target.value)}
                placeholder="Any specific requirements, customizations, or questions..."
                rows={3}
              />
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="newsletter"
              checked={formData.newsletter}
              onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
            />
            <Label htmlFor="newsletter" className="text-sm">
              Subscribe to our newsletter for product updates and research insights
            </Label>
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <>
                <Send className="h-5 w-5 mr-2" />
                Submit Quote Request
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to our privacy policy. We'll only use your information to provide you
            with a quote and relevant product information.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
