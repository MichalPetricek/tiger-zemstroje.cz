# TIGER CZ s.r.o. - Modern Website PRD

## Core Purpose & Success
- **Mission Statement**: Create a modern, professional website for TIGER CZ that effectively showcases agricultural machinery and drives sales through improved UX/UI
- **Success Indicators**: Increased contact form submissions, better mobile engagement, reduced bounce rate, higher conversion from visitor to inquiry
- **Experience Qualities**: Professional, trustworthy, efficient

## Project Classification & Approach
- **Complexity Level**: Light Application (product catalog with basic state management)
- **Primary User Activity**: Consuming product information and taking action (contact/reservation)

## Essential Features

### Product Catalog
- **What it does**: Displays tractors, loaders, and machinery with filtering and detailed views
- **Why it matters**: Core business showcase that drives sales inquiries
- **Success criteria**: Easy navigation, clear product information, prominent CTAs

### Contact & Reservation System
- **What it does**: Allows customers to inquire about products or make reservations
- **Why it matters**: Primary conversion point from visitor to potential customer
- **Success criteria**: Simple forms, quick submission, clear confirmation

### Service Information
- **What it does**: Communicates repair services, warranty, and support capabilities
- **Why it matters**: Builds trust and demonstrates comprehensive offering
- **Success criteria**: Clear service benefits, easy contact for service needs

### Subsidies Information
- **What it does**: Simplified presentation of available government subsidies for agricultural equipment
- **Why it matters**: Financial incentives drive purchase decisions
- **Success criteria**: Clear regional programs, easy-to-understand benefits, actionable next steps

## Design Direction

### Visual Tone & Identity
- **Emotional Response**: Professional confidence, agricultural heritage, modern efficiency
- **Design Personality**: Clean, industrial, trustworthy with subtle premium touches
- **Visual Metaphors**: Machinery precision, agricultural landscapes, German/Czech engineering quality
- **Simplicity Spectrum**: Minimal interface that lets product photography shine

### Color Strategy
- **Color Scheme Type**: Custom brand palette based on logo
- **Primary Color**: Dark navy (#111324) - professional, stable, industrial
- **Accent Color**: Bright orange (#EE7202) - energy, action, visibility, matches logo
- **Color Psychology**: Navy conveys trust and professionalism; orange drives action and stands out in agricultural contexts
- **Color Accessibility**: High contrast between navy background and white text, orange accent meets WCAG AA standards
- **Foreground/Background Pairings**: 
  - Background (#111324) with white text (21:1 contrast ratio)
  - Cards (lighter navy) with white text (15:1 contrast ratio)
  - Orange accent (#EE7202) with white text (4.8:1 contrast ratio)
  - Light mode: White background with dark navy text, same orange accent

### Typography System
- **Font Pairing Strategy**: Single font family (Inter) for consistency and modern feel
- **Typographic Hierarchy**: Bold headings, medium body text, subtle captions
- **Font Personality**: Clean, modern, professional - reflects engineering precision
- **Readability Focus**: Generous line spacing, comfortable reading sizes
- **Which fonts**: Inter (Google Fonts)
- **Legibility Check**: Inter is optimized for screens and highly legible at all sizes

### Visual Hierarchy & Layout
- **Attention Direction**: Orange accent strategically used for primary CTAs and key information
- **White Space Philosophy**: Generous spacing to reduce cognitive load and highlight products
- **Grid System**: 12-column responsive grid for consistent alignment
- **Responsive Approach**: Mobile-first design with progressive enhancement
- **Content Density**: Balanced - enough detail to inform without overwhelming

### Animations
- **Purposeful Meaning**: Subtle hover effects reinforce interactivity, smooth transitions maintain context
- **Hierarchy of Movement**: CTAs get subtle hover animations, navigation shows active states
- **Contextual Appropriateness**: Professional subtlety appropriate for B2B audience

### UI Elements & Component Selection
- **Component Usage**: shadcn/ui components for consistency and accessibility
- **Component Customization**: Brand colors applied through CSS variables
- **Component States**: Hover, active, focus states for all interactive elements
- **Icon Selection**: Phosphor icons for industrial/technical feel
- **Component Hierarchy**: Orange buttons for primary actions, outline buttons for secondary
- **Spacing System**: Consistent 4px grid system using Tailwind spacing
- **Mobile Adaptation**: Collapsible navigation, stacked layouts, touch-friendly buttons

### Accessibility & Readability
- **Contrast Goal**: WCAG AA compliance minimum for all text and interactive elements

## Implementation Considerations
- **Scalability Needs**: Component-based architecture for easy expansion
- **Testing Focus**: Mobile responsiveness, form functionality, loading performance
- **Critical Questions**: How to handle product images, contact form backend, SEO optimization

## Reflection
This approach uniquely serves TIGER CZ by combining professional B2B credibility with accessible information architecture. The design balances agricultural industry expectations with modern web standards, creating trust while driving action.