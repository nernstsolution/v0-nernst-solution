import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { XCircle, ArrowLeft, HelpCircle } from "lucide-react"

export default function CheckoutCancelPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <XCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-3xl font-bold font-sans text-foreground mb-4">Checkout Cancelled</h1>
            <p className="text-xl text-muted-foreground font-serif">
              Your order was not completed. Your cart items have been saved for you.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-sans">Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <HelpCircle className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-left">
                  <p className="font-medium">Payment Issues</p>
                  <p className="text-sm text-muted-foreground">
                    If you experienced payment problems, please try again or contact our support team.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <ArrowLeft className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-left">
                  <p className="font-medium">Continue Shopping</p>
                  <p className="text-sm text-muted-foreground">
                    Your cart items are still saved. You can return to complete your purchase anytime.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Button asChild size="lg">
              <Link href="/cart">Return to Cart</Link>
            </Button>
            <div className="space-x-4">
              <Button asChild variant="outline" className="bg-transparent">
                <Link href="/products">Continue Shopping</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent">
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>

          <div className="mt-8 p-4 bg-muted/30 rounded-lg">
            <p className="text-sm text-muted-foreground">
              Need assistance with your purchase? Contact us at{" "}
              <a href="mailto:contact@nernstsolution.com" className="text-primary hover:underline">
                contact@nernstsolution.com
              </a>{" "}
              or call +1 (302) 316-5188
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
