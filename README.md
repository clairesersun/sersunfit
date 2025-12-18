# Website Creation Process

This project documents a deliberate, human-in-the-loop approach to building a production-ready website using AI as a collaborator — not a replacement for design or engineering judgment.

The goal was to create a **clear, accessible, scalable foundation** while dramatically reducing time to first version.

---

## Step 1 — Prompt Architecture (ChatGPT)

I began by using ChatGPT to help me **construct a single, comprehensive prompt** for Claude.

Rather than starting from scratch, I referenced an existing conversation I had already been having about website creation and refinement. I liked how structured and detailed that conversation was, so I used it as the starting point.

**Initial instruction to ChatGPT:**

> Go back to the beginning of this conversation where I mentioned a fitness business.  
> I want to now use Claude AI to build me a fitness business page.  
> I want a massive prompt like I did before.  
> Look at best practices for the end of 2025 / beginning of 2026 for business websites, specifically personal trainers in the fitness industry.  
> Ask me questions one at a time to help me build the site and define brand colors.

### What this approach enabled

- ChatGPT asked **one question at a time**, starting with core business details
- For open-ended questions, I requested **at least 10 distinct options** so I could:
  - Choose one
  - Combine several
  - Or create my own hybrid
- After every response, ChatGPT summarized:
  - What it understood
  - How that decision would be reflected in the site

This created a tight feedback loop where I could immediately course-correct if something felt off.

---

## Step 2 — Prompt Refinement (ChatGPT)

Once the initial Claude prompt existed, I iterated on it heavily.

Key refinements included:

- Feeding in my professional bio with the instruction that it should be used as **background signal, not verbatim**
- Adding **all certifications**
- Introducing a **Blog / Writing section** as a future-facing SEO foundation
- Explicitly adding **SEO and GEO (Generative Engine Optimization)** requirements

At this point, the prompt had become a true **spec document**, not just an instruction.

---

## Step 3 — Claude Specification (Verbatim)

The following is the **exact prompt** used with Claude.  
It is included **verbatim** for transparency and reproducibility.

---

### 🔒 Claude Prompt

> You are building a fitness coaching website FROM SCRATCH.
>
> There is no existing website.  
> The only existing assets are:  
> • Instagram presence  
> • A Fillout application form: https://clairesersunfitness.fillout.com/coaching
>
> The goal is to design and structure a premium, accessible, mobile-first fitness website that will serve as the primary business home for the brand AND maximize long-term discoverability via SEO and GEO.
>
> ━━━━━━━━━━━━━━━━━━  
> **BUSINESS CONTEXT**  
> ━━━━━━━━━━━━━━━━━━
>
> Business name: Claire Sersun Fitness  
> Delivery: Online, worldwide  
> Primary CTA: Apply for coaching (high-trust, personal process)  
> Secondary goals: Long-term discoverability across all relevant search queries  
> Application tool: Existing Fillout form (embed if possible, with fallback link)
>
> This is a NEW BUILD, not an iteration.
>
> ━━━━━━━━━━━━━━━━━━  
> **CORE GOALS**  
> ━━━━━━━━━━━━━━━━━━
>
> • Create a premium, calm, confidence-building fitness website  
> • Prioritize clarity, emotional safety, and motivation  
> • Avoid hype, influencer fitness tropes, and salesy language  
> • Position Claire as a confident coach and authority  
> • Emphasize long-term capability, independence, and embodied strength  
> • Be discoverable for ALL ways an ideal client might describe their problem
>
> Visitors should feel:  
> → Safe  
> → Seen  
> → Motivated
>
> Core belief to lead with:  
> “You are capable of more than you think.”
>
> ━━━━━━━━━━━━━━━━━━  
> **AUDIENCE**  
> ━━━━━━━━━━━━━━━━━━
>
> • Women across life stages (including 60+)  
> • Neurodivergent women  
> • Women intimidated by gyms or unsure what to do  
> • Active women who want more than Pilates/Yoga  
> • Hikers, travelers, women training for real life  
> • Grandmothers focused on independence and longevity
>
> ━━━━━━━━━━━━━━━━━━  
> **SITE STRUCTURE**  
> ━━━━━━━━━━━━━━━━━━
>
> Pages to build:  
> • Home  
> • About  
> • Coaching / Program Overview + Application (combined)  
> • Blog / Writing (SEO + GEO focused)  
> • Contact
>
> Navigation behavior:  
> • Blog appears only if posts exist  
> • Hidden otherwise  
> • Blog URLs remain indexable
>
> Explicitly exclude:  
> • Ecommerce-style layouts  
> • Multiple offers  
> • Testimonials (for now)  
> • Sales funnels disguised as content
>
> ━━━━━━━━━━━━━━━━━━  
> **DESIGN INSPIRATION**  
> ━━━━━━━━━━━━━━━━━━
>
> • Girls Gone Strong — https://www.girlsgonestrong.com/  
> • Equinox (Pilates) — https://www.equinox.com/pilates  
> • ATX Pilates — https://www.atxpilates.com/about
>
> Design principles:  
> • Calm authority  
> • Clear hierarchy  
> • Motion that supports comprehension  
> • Never overwhelming  
> • Never salesy
>
> ━━━━━━━━━━━━━━━━━━  
> **DELIVERABLE**  
> ━━━━━━━━━━━━━━━━━━
>
> Build a premium, accessible, mobile-first fitness website with strong SEO and GEO foundations that allows ideal clients to discover Claire Sersun Fitness no matter how they describe their problem — and feel confident applying when they arrive.
>
> The site should feel like a grounded, intelligent coach walking beside someone who is ready to change.

---

## Step 4 — Refinement & Engineering Review (Claude)

After reviewing the initial output, I iterated with Claude to:

- Correct onboarding and application flow assumptions
- Resolve light/dark mode inconsistencies
- Improve CSS structure and scalability
- Add motion only when `prefers-reduced-motion` is off
- Review the project **as a senior developer**
- Ensure accessibility, SEO, and GEO best practices
- Prepare the project for GitHub Pages or Vercel deployment

---

## Step 5 — Deploy

Once the site met functional, visual, and accessibility standards, it was ready for deployment.

**Time to upload to GitHub 🪩**

---

## Closing Thoughts

AI is a powerful tool when used **intentionally and responsibly**.

This entire process took **less than one day**, compared to the one to two weeks it would typically take using a traditional workflow.

Here’s to continued exploration — and using tools thoughtfully.
