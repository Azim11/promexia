---
name: website-compliance-checklist
description: Use this skill whenever the user asks to audit, review, or check a website for compliance, launch-readiness, or quality before going live. Covers checks on website content authenticity, required pages (Home, Services, About Us, Contact Us, Checkout, Privacy Policy, Terms & Conditions, Refund Policy), header/footer presence, social media links, logo and favicon, support email, and footer information completeness. Trigger this skill for requests like "review my website before launch," "is my site compliant," "check my website checklist," "audit my site's pages," or "what's missing from my website footer." Make sure to use this skill even if the user only mentions one part of the checklist (e.g. just footer or just essential pages), since the full checklist provides useful context for a complete review. Note: this skill does NOT cover SSL/TLS certificate setup or installation — that is a separate technical/infrastructure task outside this skill's scope.
---

# Website Compliance Checklist

A skill for reviewing a website against a standard pre-launch compliance checklist, covering content quality, required pages, branding, and footer completeness. This skill intentionally excludes SSL/TLS certificate setup, since that's a hosting/infrastructure task rather than a content or structural compliance check.

## When to use this

Use this skill when a user wants to:
- Audit an existing website before launch or handoff to a client
- Check whether a website meets a baseline compliance standard
- Get a checklist-style review of pages, footer, links, or branding elements
- Identify what's missing from a website's footer, navigation, or policy pages

If the user specifically asks about SSL/HTTPS setup, handle that as a separate technical question — it is not part of this checklist.

## How to perform the review

If the user provides a URL, fetch the page(s) with `web_fetch` to inspect actual content. If they provide a description or screenshots instead, work from what they share. Walk through each section below and report findings as a clear pass/fail/missing list, not a wall of prose — this is inherently checklist content, so structured output (a short table or list) is appropriate here even though general writing should avoid over-formatting.

### 1. Actual Content and Images

Verify that all text and images on the site are genuine and relevant to the actual service offered — flag anything that looks like placeholder/dummy content (e.g. "Lorem ipsum," stock template text left unedited, generic placeholder images, or example product names like "Product 1").

### 2. Essential Pages

Confirm the following pages exist and are reachable from navigation:
- Home
- Services
- About Us
- Contact Us
- Checkout Page
- Privacy Policy
- Terms & Conditions
- Refund Policy

Also confirm the site has a clearly defined header and footer on every page.


### 3. Logo and Favicon

Confirm the site displays the business's own logo (not a template logo) and has a favicon set, so the site looks professional and branded in browser tabs/bookmarks.

### 4. Support Email

Confirm a support or contact email is visible somewhere on the site contact page and footer

### 6. Footer Information

Confirm the footer contains:
- Business logo with a short company bio
- Contact Person
- Business address
- Contact email
- Phone number
- Short links to policy pages (Privacy Policy, Terms & Conditions, Refund Policy)
- Accepted payment method logos (e.g. Visa, Mastercard, Discover, Amex, PayPal)

## Output format

Summarize results as a short checklist with a status per item (Pass / Missing / Needs Fix), followed by a brief list of the highest-priority fixes. Keep the summary scannable — this is the one type of content where a table or bulleted checklist is the right format, not prose.
