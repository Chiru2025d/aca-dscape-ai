# Image Optimization Changes - PNG to WebP with 2× & 3× Resolution

## Overview
Replaced all PNG images with 2× and 3× webp variants using the srcSet attribute for optimal resolution support across different device pixel densities. This eliminates blur on high-resolution displays without requiring JavaScript.

## Files Updated

### 1. **src/components/home/hero.jsx**
- **Frame-2.png** → **Frame-2@2x.webp** with srcSet
  - Added: `/images/Frame-2@2x.webp 2x, /images/Frame-2@3x.webp 3x`
- **Frame-2_mob.png** → **Frame-2_mob@2x.webp** with srcSet
  - Added: `/images/Frame-2_mob@2x.webp 2x, /images/Frame-2_mob@3x.webp 3x`
- **Frame-3.png** → **Frame-3@2x.webp** with srcSet
  - Added: `/images/Frame-3@2x.webp 2x, /images/Frame-3@3x.webp 3x`

### 2. **src/components/home/team.jsx**
- **abhiram.png** → **abhiram@2x.webp**
  - Added: `imgSrcSet: "/images/abhiram@2x.webp 2x, /images/abhiram@3x.webp 3x"`

### 3. **src/components/contact/team-contacts.jsx**
- **team1.png** → **team1@2x.webp**
  - Added: `imageSrcSet: "/images/team1@2x.webp 2x, /images/team1@3x.webp 3x"`
- **team2.png** → **team2@2x.webp**
  - Added: `imageSrcSet: "/images/team2@2x.webp 2x, /images/team2@3x.webp 3x"`
- **team3.png** → **team3@2x.webp**
  - Added: `imageSrcSet: "/images/team3@2x.webp 2x, /images/team3@3x.webp 3x"`

### 4. **src/components/contact/office-info.jsx**
- **location.png** → **location@2x.webp**
  - Added: `srcSet="/icons/location@2x.webp 2x, /icons/location@3x.webp 3x"`
- **mail.png** → **mail@2x.webp**
  - Added: `srcSet="/icons/mail@2x.webp 2x, /icons/mail@3x.webp 3x"`
- **call.png** → **call@2x.webp**
  - Added: `srcSet="/icons/call@2x.webp 2x, /icons/call@3x.webp 3x"`

### 5. **src/components/under-dev/under-development.jsx**
- **page_under_devlopment.png** → **page_under_devlopment@2x.webp**
  - Added: `srcSet="/images/page_under_devlopment@2x.webp 2x, /images/page_under_devlopment@3x.webp 3x"`

## Benefits
✅ **No Blur on High-DPI Displays** - Safari and other modern browsers automatically select the correct resolution  
✅ **WebP Format** - Better compression than PNG, faster loading times  
✅ **No JavaScript Required** - Native browser support via srcSet attribute  
✅ **Future-Proof** - Scalable approach for various device densities  

## Image Asset Requirements
Ensure the following image files exist in the public folder:
- All Frame-2 variants: @2x and @3x webp versions
- All Frame-3 variants: @2x and @3x webp versions
- All team images: @2x and @3x webp versions
- All icons: @2x and @3x webp versions

## Note
The actual image files need to be converted from PNG to WebP and created at 2× (1200px) and 3× (1800px) resolutions using image processing tools or services.
