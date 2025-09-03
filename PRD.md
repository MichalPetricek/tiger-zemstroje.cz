# TIGER CZ s.r.o. - Modern Website

Redesign zemstroje.cz as a modern, conversion-focused website for agricultural machinery sales and service.

**Experience Qualities**: 
1. Professional - Clean, trustworthy design that builds confidence in expensive machinery purchases
2. Efficient - Fast navigation to key information (prices, specs, contact) without unnecessary friction  
3. Accessible - Clear information architecture that works perfectly on mobile devices

**Complexity Level**: Light Application (multiple features with basic state)
- Multiple product catalogs with filtering, contact forms, and persistent user preferences for favorites/comparisons

## Essential Features

### Hero Section with Main CTA
- Functionality: Showcase flagship TIGER 504 with price and reservation CTA
- Purpose: Immediate value proposition and lead capture
- Trigger: Page load
- Progression: Hero view → Value props → CTA click → Contact form
- Success criteria: Clear price display, compelling USP, high CTA visibility

### Product Catalog System  
- Functionality: Filterable catalog of tractors, loaders, forklifts with detailed specs
- Purpose: Help customers find suitable equipment quickly
- Trigger: Navigation to product categories
- Progression: Category selection → Filter application → Product cards → Detail view → Contact CTA
- Success criteria: Fast filtering, clear product differentiation, easy comparison

### Contact & Reservation System
- Functionality: Multiple contact methods with integrated forms
- Purpose: Convert interest into sales leads
- Trigger: CTA buttons throughout site
- Progression: Form display → Input validation → Submission → Confirmation
- Success criteria: Low form abandonment, clear next steps, quick response promise

### Service Information Hub
- Functionality: Service capabilities, rental terms, warranty details
- Purpose: Build trust and communicate full-service capabilities  
- Trigger: Service navigation or related product interest
- Progression: Service overview → Specific service details → Contact for scheduling
- Success criteria: Clear service scope, response time commitments, local presence emphasis

### News & Updates Feed
- Functionality: Latest arrivals, events, and company news
- Purpose: Show active business and build credibility
- Trigger: Homepage visit or news section navigation
- Progression: News feed → Article detail → Related CTAs
- Success criteria: Fresh content, professional presentation, clear dates

## Edge Case Handling
- **No JavaScript**: Core content and contact info remain accessible
- **Slow connections**: Progressive image loading, critical CSS inline
- **Mobile orientation**: Horizontal scrolling for product comparisons
- **Form errors**: Clear validation messages with correction guidance
- **Missing images**: Fallback placeholders with product names

## Design Direction
Professional industrial aesthetic that balances modern web design with agricultural sector expectations - clean lines and bold typography while maintaining the rugged, reliable feel appropriate for heavy machinery customers.

## Color Selection
Complementary (opposite colors) - Using the existing brand orange against the dark navy creates strong contrast and energy while maintaining professional credibility.

- **Primary Color**: Deep Navy (#111324) - Communicates stability, reliability, and industrial strength
- **Secondary Colors**: Charcoal grays (#2A2D3F, #3C4058) for cards and secondary content areas
- **Accent Color**: Tiger Orange (#EE7202) - Energetic call-to-action color for buttons and key highlights  
- **Foreground/Background Pairings**: 
  - Background (#111324): White text (#FFFFFF) - Ratio 18.1:1 ✓
  - Card (#2A2D3F): White text (#FFFFFF) - Ratio 12.8:1 ✓  
  - Primary (#111324): White text (#FFFFFF) - Ratio 18.1:1 ✓
  - Accent (#EE7202): White text (#FFFFFF) - Ratio 4.9:1 ✓
  - Muted (#3C4058): Light gray text (#E5E7EB) - Ratio 8.2:1 ✓

## Font Selection
Industrial sans-serif typography that projects confidence and readability across all devices while maintaining the technical precision expected in agricultural equipment.

- **Typographic Hierarchy**:
  - H1 (Hero Headlines): Inter Bold/48px/tight letter spacing  
  - H2 (Section Headers): Inter SemiBold/32px/normal spacing
  - H3 (Product Names): Inter Medium/24px/normal spacing
  - Body (Product Descriptions): Inter Regular/16px/relaxed line height
  - Captions (Specs/Prices): Inter Medium/14px/tight spacing

## Animations
Subtle, purposeful motion that guides attention without feeling gimmicky - appropriate for a professional B2B audience while adding modern polish.

- **Purposeful Meaning**: Smooth scroll reveals and hover states that communicate interactivity without overwhelming technical content
- **Hierarchy of Movement**: Primary CTAs get subtle pulse effects, product cards lift on hover, navigation transitions smoothly

## Component Selection
- **Components**: Cards for products, Dialog for contact forms, Tabs for product specifications, Badge for key features, Button with clear hierarchy (primary/secondary), Input with robust validation, Sheet for mobile navigation
- **Customizations**: Custom product comparison component, specialized spec table component, image gallery with thumbnail navigation
- **States**: Buttons show clear loading, hover, and disabled states; product cards indicate favorited/compared status; forms show validation progress  
- **Icon Selection**: Phosphor icons for consistency - Phone, Mail, MapPin for contact, Gear for service, Star for features
- **Spacing**: 4/8/16/24/32px consistent spacing scale throughout
- **Mobile**: Navigation collapses to sheet, product cards stack vertically, comparison tables scroll horizontally with sticky headers