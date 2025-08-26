import { CheckCircle, ArrowLeft, FileText, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function QuoteSuccessPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <CardTitle className="text-2xl font-sans">Quote Request Submitted!</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-muted-foreground">
                Thank you for your interest in our electrolyzer test equipment. We have received your quote request and
                our sales team will contact you within 2-3 business days.
              </p>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-semibold font-sans mb-3 flex items-center justify-center gap-2">
                  <Clock className="h-4 w-4" />
                  Next Steps
                </h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Our technical sales team will review your requirements</li>
                  <li>• We'll prepare a detailed quote with specifications</li>
                  <li>• You'll receive a comprehensive proposal via email</li>
                  <li>• We'll schedule a follow-up call to discuss your project</li>
                </ul>
              </div>

              {/* <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FileText className="h-4 w-4 text-blue-600" />
                  <span className="font-semibold text-blue-900">Reference Number</span>
                </div>
                <p className="text-blue-800 font-mono text-lg">QR-{Date.now().toString().slice(-6)}</p>
                <p className="text-xs text-blue-600 mt-1">Please reference this number in future communications</p>
              </div> */}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline">
                  <Link href="/">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Home
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/products">View More Products</Link>
                </Button>
              </div>

              <div className="pt-6 border-t">
                <p className="text-sm text-muted-foreground mb-2">Questions about your quote?</p>
                <Button asChild variant="link" size="sm">
                  <Link href="/contact">Contact Our Sales Team</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
