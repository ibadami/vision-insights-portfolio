# Ishrat Badami - Portfolio Website

A modern, responsive portfolio website for Ishrat Badami, Sr. Applied Machine Learning Engineer, built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Modern UI that works on all devices
- **Professional Sections**: Hero, About, Skills, Publications, Patents, and Contact
- **Contact Form**: Functional email system with acknowledgment emails
- **Smooth Navigation**: Seamless scrolling between sections
- **Modern Tech Stack**: React 18, TypeScript, Tailwind CSS, Vite

## Contact Form Setup

The contact form uses EmailJS to send emails directly from the frontend without a backend server.

### EmailJS Setup Instructions

1. **Create EmailJS Account**
   - Go to [EmailJS.com](https://www.emailjs.com/)
   - Sign up for a free account

2. **Create Email Service**
   - In your EmailJS dashboard, go to "Email Services"
   - Add a new service (Gmail, Outlook, etc.)
   - Follow the setup instructions for your email provider

3. **Create Email Templates**
   
   **Template 1: Contact Form (for you to receive messages)**
   - Create a new template with these variables:
   ```
   Subject: New Contact Form Message: {{subject}}
   
   From: {{from_name}} ({{from_email}})
   Subject: {{subject}}
   
   Message:
   {{message}}
   ```

   **Template 2: Acknowledgment (for sender confirmation)**
   - Create another template:
   ```
   Subject: Thank you for contacting Ishrat Badami
   
   Hi {{to_name}},
   
   Thank you for reaching out! I've received your message and will get back to you as soon as possible.
   
   Best regards,
   Ishrat Badami
   Sr. Applied Machine Learning Engineer
   ```

4. **Get Your Credentials**
   - Service ID: From your Email Services page
   - Template IDs: From your Email Templates page (you'll have 2)
   - Public Key: From Account > API Keys

5. **Configure Environment Variables**
   - Copy `.env.example` to `.env`
   - Fill in your EmailJS credentials:
   ```bash
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_contact_template_id
   VITE_EMAILJS_ACKNOWLEDGMENT_TEMPLATE_ID=your_acknowledgment_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vision-insights-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install @emailjs/browser
   # or
   bun add @emailjs/browser
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your EmailJS credentials
   ```

4. **Run development server**
   ```bash
   npm run dev
   # or
   bun dev
   ```

5. **Build for production**
   ```bash
   npm run build
   # or
   bun run build
   ```

## Deployment

The site is configured for GitHub Pages deployment:

```bash
npm run deploy
```

This will build the site and push it to the `gh-pages` branch.

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Radix UI
- **Build Tool**: Vite
- **Email Service**: EmailJS
- **Deployment**: GitHub Pages
- **Package Manager**: npm/bun

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── PublicationsSection.tsx
│   ├── PatentSection.tsx
│   └── ContactSection.tsx
├── lib/                # Utility functions
│   ├── emailService.ts # EmailJS integration
│   └── utils.ts
├── pages/              # Page components
└── assets/             # Static assets
```

## Contact Form Features

- **Form Validation**: Client-side validation with error messages
- **Loading States**: Visual feedback during submission
- **Success States**: Confirmation when message is sent
- **Dual Emails**: 
  - You receive the contact form message
  - Sender receives an acknowledgment email
- **Error Handling**: Graceful error handling with fallback instructions

## Testing in Production

### Prerequisites for Testing

1. **Complete EmailJS Setup**
   - EmailJS account created and verified
   - Email service connected (Gmail/Outlook)
   - Two email templates created and published
   - Environment variables configured in `.env`

2. **Deploy to Production**
   ```bash
   npm run build
   npm run deploy
   ```

### Step-by-Step Testing Guide

#### 1. **Local Testing First**
```bash
# Install dependencies
npm uninstall emailjs-com
npm install @emailjs/browser

# Create environment file
cp .env.example .env
# Add your EmailJS credentials to .env

# Test locally
npm run dev
```

#### 2. **EmailJS Configuration Verification**

**Check your EmailJS dashboard:**
- Service Status: ✅ Connected and Active
- Template 1 (Contact): Published with variables `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
- Template 2 (Acknowledgment): Published with variables `{{to_name}}`, `{{to_email}}`

**Environment Variables Check:**
```bash
# Verify your .env file contains:
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx  
VITE_EMAILJS_ACKNOWLEDGMENT_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

#### 3. **Production Testing Scenarios**

**Test Case 1: Basic Form Submission**
1. Navigate to your live website contact form
2. Fill out all fields:
   - Name: "Test User"
   - Email: "your-test-email@gmail.com" (use a real email you can check)
   - Subject: "Production Test"
   - Message: "Testing contact form functionality"
3. Click "Send Message"
4. **Expected Results:**
   - Form shows loading spinner
   - Success message appears
   - Form fields reset
   - You receive email at `badami.ishrat@gmail.com`
   - Test email receives acknowledgment

**Test Case 2: Form Validation**
1. Try submitting with empty fields
2. Try invalid email format
3. **Expected Results:**
   - Validation errors appear
   - Form doesn't submit
   - Toast notifications show error messages

**Test Case 3: Error Handling**
1. Temporarily break EmailJS config (wrong service ID)
2. Submit form
3. **Expected Results:**
   - Error message appears
   - Fallback instructions shown
   - Form remains functional for retry

#### 4. **Email Verification Checklist**

**Check Your Inbox (`badami.ishrat@gmail.com`):**
- ✅ Email received from contact form
- ✅ Contains sender's name and email
- ✅ Subject line includes form subject
- ✅ Message content is complete
- ✅ Email arrives within 1-2 minutes

**Check Test Email Inbox:**
- ✅ Acknowledgment email received
- ✅ Personalized with sender's name
- ✅ Professional message content
- ✅ Correct sender (your EmailJS service)

#### 5. **Troubleshooting Common Issues**

**Form submits but no emails received:**
- Check EmailJS dashboard for failed sends
- Verify service is active and not suspended
- Check spam folders
- Confirm template IDs match environment variables

**Emails only work locally, not in production:**
- Ensure environment variables are set in production
- For GitHub Pages: Add secrets in repository settings
- Verify build process includes environment variables

**Acknowledgment emails not sending:**
- Check acknowledgment template ID
- Verify template has correct variable names
- Test template in EmailJS dashboard

#### 6. **Production Environment Variables**

**For GitHub Pages Deployment:**
Since GitHub Pages is static hosting, environment variables need to be set at build time:

1. **Option A: Build with variables locally**
   ```bash
   # Create .env with production values
   npm run build
   npm run deploy
   ```

2. **Option B: Use GitHub Actions (recommended)**
   - Add secrets in GitHub repository settings
   - Create workflow that builds with environment variables

#### 7. **Monitoring and Analytics**

**EmailJS Dashboard Monitoring:**
- Check monthly email quota usage
- Monitor delivery success rates
- Review error logs for failed sends

**Website Analytics:**
- Track contact form submission rates
- Monitor user engagement with contact section
- Set up conversion tracking for form completions

### Quick Production Test Commands

```bash
# Complete setup and test sequence
npm uninstall emailjs-com && npm install @emailjs/browser
cp .env.example .env
# Edit .env with your credentials
npm run dev
# Test locally first
npm run build && npm run deploy
# Test on production site
```

## License

 2024 Ishrat Badami - Applied Machine Learning Engineer. All rights reserved.
