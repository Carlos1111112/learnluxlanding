# Contact Form Setup Guide

## ✅ Implementation Complete

The contact form backend has been successfully implemented with the following components:

### Files Created/Modified:
1. **API Route**: `/app/api/contact/route.ts` - Handles POST requests and sends emails via Nodemailer
2. **Contact Component**: `/app/landing/sections/Contact.tsx` - Updated with API integration
3. **Dependencies**: Installed `nodemailer` and `@types/nodemailer`

---

## 🔧 Environment Setup (Required)

To enable email sending, you need to configure Gmail credentials:

### Step 1: Create `.env.local` file

In the `web` directory, create a new file named `.env.local` and add:

```bash
EMAIL_USER=contact.learnlux@gmail.com
EMAIL_PASS=your_gmail_app_password_here
```

### Step 2: Generate Gmail App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Factor Authentication** (if not already enabled)
3. Search for "App passwords" in the search bar
4. Click on **App passwords**
5. Select "Mail" as the app and "Other" as the device
6. Enter "LearnLux Contact Form" as the name
7. Click **Generate**
8. Copy the 16-character password (without spaces)
9. Paste it as the `EMAIL_PASS` value in your `.env.local` file

### Important Notes:
- ⚠️ **Never commit `.env.local` to version control**
- The `.env.local` file is already in `.gitignore` by default in Next.js
- For production deployment (Vercel), add these as Environment Variables in your project settings

---

## 🚀 Deployment to Vercel

When deploying to Vercel:

1. Go to your project settings on Vercel
2. Navigate to **Environment Variables**
3. Add the following variables:
   - `EMAIL_USER` = `contact.learnlux@gmail.com`
   - `EMAIL_PASS` = `<your_gmail_app_password>`
4. Make sure to add them for all environments (Production, Preview, Development)

---

## 🧪 Testing Locally

1. Create the `.env.local` file with your credentials (see Step 1 above)
2. Restart your development server:
   ```bash
   npm run dev
   ```
3. Navigate to the Contact section on your landing page
4. Fill out the form and click "Send Message"
5. Check the `contact.learnlux@gmail.com` inbox for the message

---

## 🎨 Features Implemented

✅ **API Endpoint** (`/api/contact`)
- Validates all form fields
- Validates email format
- Sends formatted HTML emails
- Returns proper error messages
- Handles network errors gracefully

✅ **Frontend Updates**
- Smooth animations with Framer Motion
- Loading state ("Sending..." button text)
- Success message (green, fades in for 3 seconds)
- Error messages (red, with descriptive text)
- Disabled button during submission
- Form resets after successful submission

✅ **Email Features**
- Professional HTML template
- Includes sender's name and email
- Sets reply-to address for easy response
- Violet accent colors matching LearnLux brand

---

## 🔍 Troubleshooting

### "Email service is not configured" error
- Make sure `.env.local` exists in the `web` directory
- Verify `EMAIL_USER` and `EMAIL_PASS` are set correctly
- Restart your development server after creating/updating `.env.local`

### "Failed to send message" error
- Verify the Gmail App Password is correct (16 characters, no spaces)
- Make sure 2FA is enabled on the Gmail account
- Check that the account isn't blocking "less secure app access"

### Emails not arriving
- Check the spam folder
- Verify `contact.learnlux@gmail.com` is the correct email
- Check Gmail's sent folder to see if the email was sent

---

## 📋 Next Steps

1. ✅ Create `.env.local` with Gmail credentials
2. ✅ Test the form locally
3. ✅ Add environment variables to Vercel (for production)
4. ✅ Test in production after deployment

---

Your contact form is now fully functional! 🎉

