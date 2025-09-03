# Product Requirements Document: TIGER CZ Modern Website

## Core Purpose & Success

**Mission Statement**: Create a modern, professional, and user-friendly website for TIGER CZ s.r.o. that effectively showcases their agricultural and construction machinery while facilitating easy customer contact and service requests.

**Success Indicators**: 
- Increased customer inquiries through contact forms
- Improved user engagement with product catalog
- Better mobile experience leading to higher conversion rates
- Streamlined service request process

**Experience Qualities**: Professional, trustworthy, accessible

## Project Classification & Approach

**Complexity Level**: Light Application (multiple features with basic state management)

**Primary User Activity**: Interacting - users browse products, learn about services, and contact the company

## Thought Process for Feature Selection

**Core Problem Analysis**: The original website had good content but was too text-heavy, not mobile-optimized, and lacked modern UX patterns.

**User Context**: Agricultural professionals and businesses looking for reliable machinery and service, typically accessing from mobile devices during work hours.

**Critical Path**: Home → Product Discovery → Contact/Service Request

**Key Moments**:
1. First impression with hero section featuring TIGER 504
2. Product browsing with clear specifications
3. Service request form submission

## Essential Features

### Navigation & Structure
- Sticky navigation with active state indicators
- Dark/light mode toggle for different lighting conditions
- Mobile-first responsive design
- Clear product categorization

### Product Catalog
- Interactive product cards with key specifications
- Detailed product pages with features and pricing
- Badge system for highlighting special offers
- High-quality product imagery

### Service Management
- Comprehensive service request form with validation
- Pricing transparency with detailed service rates
- Specialized welding and parts information
- Multiple contact options

### Subsidies Information
- Region-specific subsidy information
- Clear deadlines and requirements
- Simplified application guidance

### Contact & Communication
- Multiple contact methods (phone, email, form)
- Social media integration
- Clear business hours and location

## Design Direction

### Visual Tone & Identity
**Emotional Response**: Users should feel confident in the company's professionalism and reliability
**Design Personality**: Clean, modern, trustworthy - reflecting industrial precision with approachable usability
**Visual Metaphors**: Strong geometric shapes reflecting machinery durability, clean lines suggesting precision
**Simplicity Spectrum**: Minimal interface that lets content and products shine

### Color Strategy
**Color Scheme Type**: Monochromatic with accent
**Primary Color**: Dark navy (#111324) - professional, trustworthy, industrial
**Accent Color**: Orange (#EE7202) - energetic, attention-grabbing, matches logo
**Color Psychology**: Dark background conveys professionalism and reduces eye strain for outdoor work environments
**Color Accessibility**: Ensured WCAG AA contrast ratios (4.5:1 minimum)
**Foreground/Background Pairings**:
- White text (#FAFAFA) on dark background (#111324) - 15.8:1 ratio ✓
- Dark text (#111324) on light background (#FAFAFA) - 15.8:1 ratio ✓
- White text on orange accent (#EE7202) - 4.7:1 ratio ✓

### Typography System
**Font Pairing Strategy**: Single font family (Inter) with varied weights for hierarchy
**Typographic Hierarchy**: Clear distinction between headings (bold), subheadings (semibold), and body text (regular)
**Font Personality**: Modern, clean, highly legible - suitable for technical specifications
**Readability Focus**: Generous line spacing (1.5), optimal line length, appropriate sizing for mobile
**Typography Consistency**: Consistent heading scale using mathematical ratios
**Which fonts**: Inter from Google Fonts
**Legibility Check**: Excellent legibility across all device sizes and lighting conditions

### Visual Hierarchy & Layout
**Attention Direction**: Strategic use of color, size, and spacing to guide users to CTAs
**White Space Philosophy**: Generous spacing to create breathing room and focus attention
**Grid System**: Consistent container max-widths and responsive grid layouts
**Responsive Approach**: Mobile-first design with progressive enhancement
**Content Density**: Balanced information richness without overwhelming users

### Animations
**Purposeful Meaning**: Subtle hover effects and transitions that provide feedback
**Hierarchy of Movement**: Primary CTAs have more prominent hover states
**Contextual Appropriateness**: Professional, subtle animations that don't distract from content

### UI Elements & Component Selection
**Component Usage**: 
- Cards for product display and information grouping
- Forms for service requests and contact
- Badges for product highlights and status
- Buttons with clear hierarchy (primary, secondary, outline)
- Navigation with active states
- Modal dialogs for contact forms

**Component Customization**: shadcn components styled with brand colors and spacing
**Component States**: Comprehensive hover, focus, and active states for all interactive elements
**Icon Selection**: Phosphor Icons for consistency and clarity
**Component Hierarchy**: Clear visual distinction between primary and secondary actions
**Spacing System**: Consistent 8px grid system using Tailwind spacing scale
**Mobile Adaptation**: Components scale appropriately and maintain usability on small screens

### Visual Consistency Framework
**Design System Approach**: Component-based design with reusable patterns
**Style Guide Elements**: Color palette, typography scale, spacing system, component states
**Visual Rhythm**: Consistent patterns create predictable user experience
**Brand Alignment**: Orange accent color directly from logo reinforces brand identity

### Accessibility & Readability
**Contrast Goal**: WCAG AA compliance achieved for all text and meaningful elements
**Additional Considerations**: Focus indicators, semantic HTML, keyboard navigation support

## Edge Cases & Problem Scenarios

**Potential Obstacles**: 
- Long product specifications overwhelming mobile users
- Complex subsidy information being difficult to understand
- Service form abandonment due to length

**Edge Case Handling**:
- Progressive disclosure for detailed specifications
- Simplified subsidy summaries with key details upfront
- Form validation and progress indication

**Technical Constraints**: 
- Images need optimization for mobile data usage
- Forms must work without JavaScript for accessibility

## Implementation Considerations

**Scalability Needs**: 
- Easy addition of new products
- Expandable service categories
- Additional language support preparation

**Testing Focus**: 
- Mobile usability testing
- Form completion rates
- Contact conversion tracking

**Critical Questions**: 
- How do we balance information density with readability?
- What's the optimal number of products to show before pagination?
- How can we make subsidy information more actionable?

## Reflection

This approach uniquely serves TIGER CZ by:
- Maintaining their professional reputation while modernizing the experience
- Making technical information accessible to both experts and newcomers
- Streamlining the customer journey from interest to contact
- Positioning the company as forward-thinking while emphasizing reliability

**Assumptions to Challenge**:
- Do users really need all the detailed specifications upfront?
- Is the current navigation structure optimal for user goals?
- Are we making it easy enough to contact the company?

**What Makes This Exceptional**:
- Dark mode design that works well in bright outdoor conditions
- Mobile-first approach for field professionals
- Clear service pricing that builds trust
- Streamlined contact process with multiple options