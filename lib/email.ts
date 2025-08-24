export interface EmailTemplate {
  to: string
  subject: string
  html: string
  text: string
}

export interface QuoteRequestData {
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
            <h2>Requested Product</h2>
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

REQUESTED PRODUCT:
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
    subject: `Quote Request: ${data.productName} - ${data.company}`,
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
    subject: `Contact Inquiry: ${data.subject} - ${data.firstName} ${data.lastName}`,
    html,
    text,
  }
}
