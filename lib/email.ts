export interface EmailTemplate {
  to: string
  subject: string
  html: string
  text: string
}

export interface QuoteRequestData {
  quoteReference?: string
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
  productName: string
  productId: string
}

export interface ContactFormData {
  inquiryReference?: string
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  subject: string
  inquiryType: string
  message: string
  newsletter: boolean
}

export interface OrderData {
  orderNumber: string
  customerEmail: string
  customerName: string
  items: Array<{
    name: string
    quantity: number
    price: number
  }>
  total: number
  shippingAddress?: {
    line1: string
    line2?: string
    city: string
    state: string
    postal_code: string
    country: string
  }
}

export function createQuoteRequestEmail(data: QuoteRequestData): EmailTemplate {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Quote Request - ${data.productName}</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #164e63; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .section { margin-bottom: 20px; }
        .section h3 { color: #164e63; border-bottom: 2px solid #84cc16; padding-bottom: 5px; }
        .field { margin-bottom: 10px; }
        .field strong { color: #164e63; }
        .product-info { background-color: #ecfeff; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Quote Request</h1>
          <p>Nernst Solution LLC</p>
        </div>
        
        <div class="content">
          <div class="product-info">
            <h2>Quote Request Details</h2>
            <p><strong>Reference Number:</strong> ${data.quoteReference}</p>
            <p><strong>Product:</strong> ${data.productName}</p>
            <p><strong>Product ID:</strong> ${data.productId}</p>
          </div>

          <div class="section">
            <h3>Contact Information</h3>
            <div class="field"><strong>Name:</strong> ${data.firstName} ${data.lastName}</div>
            <div class="field"><strong>Email:</strong> ${data.email}</div>
            <div class="field"><strong>Phone:</strong> ${data.phone || "Not provided"}</div>
            <div class="field"><strong>Company:</strong> ${data.company}</div>
            <div class="field"><strong>Job Title:</strong> ${data.jobTitle || "Not provided"}</div>
            <div class="field"><strong>Organization Type:</strong> ${data.organizationType || "Not specified"}</div>
            <div class="field"><strong>Country:</strong> ${data.country || "Not provided"}</div>
          </div>

          <div class="section">
            <h3>Project Details</h3>
            <div class="field"><strong>Project Description:</strong></div>
            <p>${data.projectDescription}</p>
            <div class="field"><strong>Timeline:</strong> ${data.timeline || "Not specified"}</div>
            <div class="field"><strong>Budget Range:</strong> ${data.budget || "Not specified"}</div>
          </div>

          ${
            data.additionalRequirements
              ? `
          <div class="section">
            <h3>Additional Requirements</h3>
            <p>${data.additionalRequirements}</p>
          </div>
          `
              : ""
          }

          <div class="section">
            <h3>Marketing Preferences</h3>
            <div class="field"><strong>Newsletter Subscription:</strong> ${data.newsletter ? "Yes" : "No"}</div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `

  const text = `
New Quote Request - ${data.productName}

QUOTE REQUEST DETAILS:
Reference Number: ${data.quoteReference}
Product: ${data.productName}
Product ID: ${data.productId}

CONTACT INFORMATION:
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Company: ${data.company}
Job Title: ${data.jobTitle || "Not provided"}
Organization Type: ${data.organizationType || "Not specified"}
Country: ${data.country || "Not provided"}

PROJECT DETAILS:
Project Description: ${data.projectDescription}
Timeline: ${data.timeline || "Not specified"}
Budget Range: ${data.budget || "Not specified"}

${data.additionalRequirements ? `ADDITIONAL REQUIREMENTS:\n${data.additionalRequirements}\n\n` : ""}

MARKETING PREFERENCES:
Newsletter Subscription: ${data.newsletter ? "Yes" : "No"}
  `

  return {
    to: "contact@nernstsolution.com",
    subject: `Quote Request: ${data.quoteReference} - ${data.productName} - ${data.company}`,
    html,
    text,
  }
}

export function createContactEmail(data: ContactFormData): EmailTemplate {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Contact Inquiry - ${data.subject}</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #164e63; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .section { margin-bottom: 20px; }
        .section h3 { color: #164e63; border-bottom: 2px solid #84cc16; padding-bottom: 5px; }
        .field { margin-bottom: 10px; }
        .field strong { color: #164e63; }
        .inquiry-info { background-color: #ecfeff; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Inquiry</h1>
          <p>Nernst Solution LLC</p>
        </div>
        
        <div class="content">
          <div class="inquiry-info">
            <h2>Inquiry Details</h2>
            <p><strong>Reference Number:</strong> ${data.inquiryReference}</p>
            <p><strong>Subject:</strong> ${data.subject}</p>
            <p><strong>Type:</strong> ${data.inquiryType || "General Inquiry"}</p>
          </div>

          <div class="section">
            <h3>Contact Information</h3>
            <div class="field"><strong>Name:</strong> ${data.firstName} ${data.lastName}</div>
            <div class="field"><strong>Email:</strong> ${data.email}</div>
            <div class="field"><strong>Phone:</strong> ${data.phone || "Not provided"}</div>
            <div class="field"><strong>Company:</strong> ${data.company || "Not provided"}</div>
          </div>

          <div class="section">
            <h3>Message</h3>
            <p>${data.message.replace(/\n/g, "<br>")}</p>
          </div>

          <div class="section">
            <h3>Marketing Preferences</h3>
            <div class="field"><strong>Newsletter Subscription:</strong> ${data.newsletter ? "Yes" : "No"}</div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `

  const text = `
New Contact Inquiry - ${data.subject}

INQUIRY DETAILS:
Reference Number: ${data.inquiryReference}
Subject: ${data.subject}
Type: ${data.inquiryType || "General Inquiry"}

CONTACT INFORMATION:
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Company: ${data.company || "Not provided"}

MESSAGE:
${data.message}

MARKETING PREFERENCES:
Newsletter Subscription: ${data.newsletter ? "Yes" : "No"}
  `

  return {
    to: "contact@nernstsolution.com",
    subject: `Contact Inquiry: ${data.inquiryReference} - ${data.subject} - ${data.firstName} ${data.lastName}`,
    html,
    text,
  }
}

export function createOrderConfirmationEmail(data: OrderData): EmailTemplate {
  const itemsHtml = data.items
    .map(
      (item) => `
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;">${item.name}</td>
      <td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: center;">${item.quantity}</td>
      <td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: right;">$${item.price.toFixed(2)}</td>
      <td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: right;">$${(item.price * item.quantity).toFixed(2)}</td>
    </tr>
  `,
    )
    .join("")

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Order Confirmation - ${data.orderNumber}</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #164e63; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .section { margin-bottom: 20px; }
        .section h3 { color: #164e63; border-bottom: 2px solid #84cc16; padding-bottom: 5px; }
        .order-info { background-color: #ecfeff; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
        th { background-color: #164e63; color: white; padding: 10px; text-align: left; }
        .total { font-size: 18px; font-weight: bold; color: #164e63; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Order Confirmation</h1>
          <p>Thank you for your purchase!</p>
        </div>
        
        <div class="content">
          <div class="order-info">
            <h2>Order Details</h2>
            <p><strong>Order Number:</strong> ${data.orderNumber}</p>
            <p><strong>Customer:</strong> ${data.customerName}</p>
            <p><strong>Email:</strong> ${data.customerEmail}</p>
          </div>

          <div class="section">
            <h3>Items Ordered</h3>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th style="text-align: center;">Quantity</th>
                  <th style="text-align: right;">Unit Price</th>
                  <th style="text-align: right;">Total</th>
                </tr>
              </thead>
              <tbody>
                ${itemsHtml}
              </tbody>
            </table>
            <p class="total">Total: $${data.total.toFixed(2)}</p>
          </div>

          ${
            data.shippingAddress
              ? `
          <div class="section">
            <h3>Shipping Address</h3>
            <p>
              ${data.shippingAddress.line1}<br>
              ${data.shippingAddress.line2 ? data.shippingAddress.line2 + "<br>" : ""}
              ${data.shippingAddress.city}, ${data.shippingAddress.state} ${data.shippingAddress.postal_code}<br>
              ${data.shippingAddress.country}
            </p>
          </div>
          `
              : ""
          }

          <div class="section">
            <p>We will process your order and send you tracking information once it ships.</p>
            <p>If you have any questions, please contact us at contact@nernstsolution.com</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `

  const itemsText = data.items
    .map(
      (item) =>
        `${item.name} - Qty: ${item.quantity} - $${item.price.toFixed(2)} each - Total: $${(item.price * item.quantity).toFixed(2)}`,
    )
    .join("\n")

  const text = `
Order Confirmation - ${data.orderNumber}

Thank you for your purchase!

ORDER DETAILS:
Order Number: ${data.orderNumber}
Customer: ${data.customerName}
Email: ${data.customerEmail}

ITEMS ORDERED:
${itemsText}

TOTAL: $${data.total.toFixed(2)}

${
  data.shippingAddress
    ? `
SHIPPING ADDRESS:
${data.shippingAddress.line1}
${data.shippingAddress.line2 ? data.shippingAddress.line2 + "\n" : ""}${data.shippingAddress.city}, ${data.shippingAddress.state} ${data.shippingAddress.postal_code}
${data.shippingAddress.country}
`
    : ""
}

We will process your order and send you tracking information once it ships.
If you have any questions, please contact us at contact@nernstsolution.com
  `

  return {
    to: data.customerEmail,
    subject: `Order Confirmation - ${data.orderNumber}`,
    html,
    text,
  }
}

export function createOrderNotificationEmail(data: OrderData): EmailTemplate {
  const itemsHtml = data.items
    .map(
      (item) => `
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;">${item.name}</td>
      <td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: center;">${item.quantity}</td>
      <td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: right;">$${item.price.toFixed(2)}</td>
      <td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: right;">$${(item.price * item.quantity).toFixed(2)}</td>
    </tr>
  `,
    )
    .join("")

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Order Received - ${data.orderNumber}</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #164e63; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .section { margin-bottom: 20px; }
        .section h3 { color: #164e63; border-bottom: 2px solid #84cc16; padding-bottom: 5px; }
        .order-info { background-color: #ecfeff; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
        th { background-color: #164e63; color: white; padding: 10px; text-align: left; }
        .total { font-size: 18px; font-weight: bold; color: #164e63; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Order Received</h1>
          <p>Nernst Solution LLC</p>
        </div>
        
        <div class="content">
          <div class="order-info">
            <h2>Order Details</h2>
            <p><strong>Order Number:</strong> ${data.orderNumber}</p>
            <p><strong>Customer:</strong> ${data.customerName}</p>
            <p><strong>Email:</strong> ${data.customerEmail}</p>
          </div>

          <div class="section">
            <h3>Items Ordered</h3>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th style="text-align: center;">Quantity</th>
                  <th style="text-align: right;">Unit Price</th>
                  <th style="text-align: right;">Total</th>
                </tr>
              </thead>
              <tbody>
                ${itemsHtml}
              </tbody>
            </table>
            <p class="total">Total: $${data.total.toFixed(2)}</p>
          </div>

          ${
            data.shippingAddress
              ? `
          <div class="section">
            <h3>Shipping Address</h3>
            <p>
              ${data.shippingAddress.line1}<br>
              ${data.shippingAddress.line2 ? data.shippingAddress.line2 + "<br>" : ""}
              ${data.shippingAddress.city}, ${data.shippingAddress.state} ${data.shippingAddress.postal_code}<br>
              ${data.shippingAddress.country}
            </p>
          </div>
          `
              : ""
          }
        </div>
      </div>
    </body>
    </html>
  `

  const itemsText = data.items
    .map(
      (item) =>
        `${item.name} - Qty: ${item.quantity} - $${item.price.toFixed(2)} each - Total: $${(item.price * item.quantity).toFixed(2)}`,
    )
    .join("\n")

  const text = `
New Order Received - ${data.orderNumber}

ORDER DETAILS:
Order Number: ${data.orderNumber}
Customer: ${data.customerName}
Email: ${data.customerEmail}

ITEMS ORDERED:
${itemsText}

TOTAL: $${data.total.toFixed(2)}

${
  data.shippingAddress
    ? `
SHIPPING ADDRESS:
${data.shippingAddress.line1}
${data.shippingAddress.line2 ? data.shippingAddress.line2 + "\n" : ""}${data.shippingAddress.city}, ${data.shippingAddress.state} ${data.shippingAddress.postal_code}
${data.shippingAddress.country}
`
    : ""
}
  `

  return {
    to: "contact@nernstsolution.com",
    subject: `New Order: ${data.orderNumber} - ${data.customerName}`,
    html,
    text,
  }
}

export function createQuoteConfirmationEmail(data: QuoteRequestData): EmailTemplate {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Quote Request Confirmation - ${data.quoteReference}</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #164e63; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .section { margin-bottom: 20px; }
        .quote-info { background-color: #ecfeff; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Quote Request Received</h1>
          <p>Thank you for your interest!</p>
        </div>
        
        <div class="content">
          <div class="quote-info">
            <h2>Your Quote Request</h2>
            <p><strong>Reference Number:</strong> ${data.quoteReference}</p>
            <p><strong>Product:</strong> ${data.productName}</p>
          </div>

          <div class="section">
            <p>Dear ${data.firstName},</p>
            <p>Thank you for your quote request for <strong>${data.productName}</strong>. We have received your inquiry and our team will review your requirements.</p>
            <p>We will contact you within 1-2 business days with a detailed quote and any additional questions.</p>
            <p>Your quote reference number is: <strong>${data.quoteReference}</strong></p>
            <p>Please reference this number in any future communications.</p>
            <p>If you have any immediate questions, please contact us at contact@nernstsolution.com</p>
            <p>Best regards,<br>Nernst Solution LLC Team</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `

  const text = `
Quote Request Confirmation - ${data.quoteReference}

Dear ${data.firstName},

Thank you for your quote request for ${data.productName}. We have received your inquiry and our team will review your requirements.

We will contact you within 1-2 business days with a detailed quote and any additional questions.

Your quote reference number is: ${data.quoteReference}
Please reference this number in any future communications.

If you have any immediate questions, please contact us at contact@nernstsolution.com

Best regards,
Nernst Solution LLC Team
  `

  return {
    to: data.email,
    subject: `Quote Request Confirmation - ${data.quoteReference}`,
    html,
    text,
  }
}

export function createContactConfirmationEmail(data: ContactFormData): EmailTemplate {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Inquiry Confirmation - ${data.inquiryReference}</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #164e63; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .section { margin-bottom: 20px; }
        .inquiry-info { background-color: #ecfeff; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Inquiry Received</h1>
          <p>Thank you for contacting us!</p>
        </div>
        
        <div class="content">
          <div class="inquiry-info">
            <h2>Your Inquiry</h2>
            <p><strong>Reference Number:</strong> ${data.inquiryReference}</p>
            <p><strong>Subject:</strong> ${data.subject}</p>
          </div>

          <div class="section">
            <p>Dear ${data.firstName},</p>
            <p>Thank you for contacting Nernst Solution LLC. We have received your inquiry and our team will review your message.</p>
            <p>We will respond to your inquiry within 1-2 business days.</p>
            <p>Your inquiry reference number is: <strong>${data.inquiryReference}</strong></p>
            <p>Please reference this number in any future communications.</p>
            <p>If you have any urgent questions, please contact us at contact@nernstsolution.com</p>
            <p>Best regards,<br>Nernst Solution LLC Team</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `

  const text = `
Inquiry Confirmation - ${data.inquiryReference}

Dear ${data.firstName},

Thank you for contacting Nernst Solution LLC. We have received your inquiry and our team will review your message.

We will respond to your inquiry within 1-2 business days.

Your inquiry reference number is: ${data.inquiryReference}
Please reference this number in any future communications.

If you have any urgent questions, please contact us at contact@nernstsolution.com

Best regards,
Nernst Solution LLC Team
  `

  return {
    to: data.email,
    subject: `Inquiry Confirmation - ${data.inquiryReference}`,
    html,
    text,
  }
}

export function generateOrderNumber(): string {
  const timestamp = Date.now().toString(36).toUpperCase()
  return `ORD-${timestamp}`
}

export function generateQuoteReference(): string {
  const timestamp = Date.now().toString(36).toUpperCase()
  return `QUO-${timestamp}`
}

export function generateInquiryReference(): string {
  const timestamp = Date.now().toString(36).toUpperCase()
  return `INQ-${timestamp}`
}

export async function sendEmail(template: EmailTemplate): Promise<{ success: boolean; id?: string; error?: string }> {
  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY environment variable is not set")
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "contact@nernstsolution.com",
        to: [template.to],
        subject: template.subject,
        html: template.html,
        text: template.text,
      }),
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(`Resend API error: ${result.message || "Unknown error"}`)
    }

    return { success: true, id: result.id }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}
