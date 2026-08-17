export type Tool = {
  id: string; name: string; category: string; description: string; popular?: boolean;
};
export const tools: Tool[] = [
  {
    "id": "passport-photo-maker",
    "name": "Passport Photo Maker",
    "category": "Popular",
    "description": "Create print-ready passport photos with common size presets.",
    "popular": true
  },
  {
    "id": "reduce-image-size-kb",
    "name": "Reduce Image Size in KB",
    "category": "Popular",
    "description": "Compress an image toward a target file size.",
    "popular": true
  },
  {
    "id": "resize-image-pixel",
    "name": "Resize Image by Pixel",
    "category": "Popular",
    "description": "Resize an image using exact pixel dimensions.",
    "popular": true
  },
  {
    "id": "photo-collage-maker",
    "name": "Photo Collage Maker",
    "category": "Popular",
    "description": "Join multiple photos into one clean image.",
    "popular": true
  },
  {
    "id": "generate-signature",
    "name": "Generate Signature",
    "category": "Popular",
    "description": "Create a clean signature image from an uploaded file.",
    "popular": true
  },
  {
    "id": "increase-image-size-kb",
    "name": "Increase Image Size in KB",
    "category": "Popular",
    "description": "Export with a controlled minimum target size.",
    "popular": true
  },
  {
    "id": "ai-photo-enhancer",
    "name": "AI Photo Enhancer",
    "category": "Popular",
    "description": "AI-powered enhancement adapter; configure a real provider to enable it.",
    "popular": true
  },
  {
    "id": "resize-signature",
    "name": "Resize Signature",
    "category": "Popular",
    "description": "Resize signatures to official dimensions.",
    "popular": true
  },
  {
    "id": "resize-image-cm",
    "name": "Resize Image in Centimeter",
    "category": "Popular",
    "description": "Resize for print dimensions using DPI.",
    "popular": true
  },
  {
    "id": "resize-image-35x45",
    "name": "Resize Image 3.5cm x 4.5cm",
    "category": "Popular",
    "description": "Prepare a standard 35 \u00d7 45 mm photo.",
    "popular": true
  },
  {
    "id": "blur-background",
    "name": "Blur Background",
    "category": "Editing",
    "description": "Apply a soft blur effect to an image.",
    "popular": false
  },
  {
    "id": "remove-background",
    "name": "Remove Background",
    "category": "Editing",
    "description": "AI background removal adapter; requires a configured provider.",
    "popular": false
  },
  {
    "id": "remove-object",
    "name": "Remove Object from Photo",
    "category": "Editing",
    "description": "AI object removal adapter; requires a configured provider.",
    "popular": false
  },
  {
    "id": "add-name-dob",
    "name": "Add Name & DOB on Photo",
    "category": "Editing",
    "description": "Add a name and date of birth overlay.",
    "popular": false
  },
  {
    "id": "rotate-image",
    "name": "Rotate Image",
    "category": "Editing",
    "description": "Rotate an image by 90\u00b0, 180\u00b0 or 270\u00b0.",
    "popular": false
  },
  {
    "id": "flip-image",
    "name": "Flip Image",
    "category": "Editing",
    "description": "Flip horizontally or vertically.",
    "popular": false
  },
  {
    "id": "watermark-images",
    "name": "Watermark Images",
    "category": "Editing",
    "description": "Add a text watermark to your image.",
    "popular": false
  },
  {
    "id": "freehand-crop",
    "name": "Freehand Crop",
    "category": "Editing",
    "description": "Crop an image to a custom rectangular area.",
    "popular": false
  },
  {
    "id": "circle-crop",
    "name": "Circle Crop",
    "category": "Editing",
    "description": "Create a circular crop with transparency.",
    "popular": false
  },
  {
    "id": "square-crop",
    "name": "Square Crop",
    "category": "Editing",
    "description": "Crop the image to a centered square.",
    "popular": false
  },
  {
    "id": "round-corners",
    "name": "Round Corners",
    "category": "Editing",
    "description": "Add rounded transparent corners.",
    "popular": false
  },
  {
    "id": "aspect-ratio",
    "name": "Change Aspect Ratio",
    "category": "Editing",
    "description": "Fit an image to a selected aspect ratio.",
    "popular": false
  },
  {
    "id": "merge-photo-signature",
    "name": "Merge Photo & Signature",
    "category": "Editing",
    "description": "Place a signature over a photo.",
    "popular": false
  },
  {
    "id": "join-images",
    "name": "Join Multiple Images",
    "category": "Editing",
    "description": "Join uploaded images vertically.",
    "popular": false
  },
  {
    "id": "split-image",
    "name": "Split Image",
    "category": "Editing",
    "description": "Split an image into a grid.",
    "popular": false
  },
  {
    "id": "color-picker",
    "name": "Image Color Picker",
    "category": "Editing",
    "description": "Pick colors directly from an uploaded image.",
    "popular": false
  },
  {
    "id": "edit-metadata",
    "name": "Edit Metadata",
    "category": "Editing",
    "description": "Browser-safe metadata editor placeholder.",
    "popular": false
  },
  {
    "id": "view-metadata",
    "name": "View Metadata",
    "category": "Editing",
    "description": "View dimensions, type and file information.",
    "popular": false
  },
  {
    "id": "remove-metadata",
    "name": "Remove Metadata",
    "category": "Editing",
    "description": "Re-export the image to strip browser-retained metadata.",
    "popular": false
  },
  {
    "id": "crop-png",
    "name": "Crop PNG",
    "category": "Editing",
    "description": "Crop transparent PNG images.",
    "popular": false
  },
  {
    "id": "beautify-image",
    "name": "Beautify Image",
    "category": "Effects",
    "description": "Local enhancement with contrast and brightness.",
    "popular": false
  },
  {
    "id": "deep-fry-photo",
    "name": "Deep Fry Photo",
    "category": "Effects",
    "description": "Apply a high-contrast stylized filter.",
    "popular": false
  },
  {
    "id": "unblur-image",
    "name": "Unblur Image",
    "category": "Effects",
    "description": "Local sharpening approximation.",
    "popular": false
  },
  {
    "id": "blur-image",
    "name": "Blur Image",
    "category": "Effects",
    "description": "Blur an image using canvas filtering.",
    "popular": false
  },
  {
    "id": "blur-face",
    "name": "Blur Face",
    "category": "Effects",
    "description": "Local full-image blur fallback; face-specific AI requires a provider.",
    "popular": false
  },
  {
    "id": "unblur-face",
    "name": "Unblur Face",
    "category": "Effects",
    "description": "Face restoration requires an AI provider.",
    "popular": false
  },
  {
    "id": "add-border",
    "name": "Add Border To Image",
    "category": "Effects",
    "description": "Add a configurable border.",
    "popular": false
  },
  {
    "id": "pixelate-image",
    "name": "Pixelate Image",
    "category": "Effects",
    "description": "Pixelate an image.",
    "popular": false
  },
  {
    "id": "pixelate-face",
    "name": "Pixelate Face",
    "category": "Effects",
    "description": "Pixelation adapter; face detection requires an AI provider.",
    "popular": false
  },
  {
    "id": "censor-photo",
    "name": "Censor Photo",
    "category": "Effects",
    "description": "Pixelate/censor an image region.",
    "popular": false
  },
  {
    "id": "motion-blur",
    "name": "Motion Blur",
    "category": "Effects",
    "description": "Apply a directional blur approximation.",
    "popular": false
  },
  {
    "id": "grayscale-image",
    "name": "Grayscale Image",
    "category": "Effects",
    "description": "Convert to grayscale.",
    "popular": false
  },
  {
    "id": "black-white",
    "name": "Black & White",
    "category": "Effects",
    "description": "Convert to high-contrast black and white.",
    "popular": false
  },
  {
    "id": "pixel-art",
    "name": "Picture to Pixel Art",
    "category": "Effects",
    "description": "Create a pixel-art style result.",
    "popular": false
  },
  {
    "id": "white-border",
    "name": "Add White Border To Image",
    "category": "Effects",
    "description": "Add a white print border.",
    "popular": false
  },
  {
    "id": "ai-face-generator",
    "name": "AI Face Generator",
    "category": "Effects",
    "description": "AI generator adapter; requires a configured provider.",
    "popular": false
  },
  {
    "id": "blemishes-remover",
    "name": "Blemishes Remover",
    "category": "Effects",
    "description": "AI retouch adapter; requires a configured provider.",
    "popular": false
  },
  {
    "id": "retouch-image",
    "name": "Retouch Image",
    "category": "Effects",
    "description": "AI retouch adapter; requires a configured provider.",
    "popular": false
  },
  {
    "id": "add-text",
    "name": "Add Text to Image",
    "category": "Effects",
    "description": "Place text on the image.",
    "popular": false
  },
  {
    "id": "add-logo",
    "name": "Add Logo to Image",
    "category": "Effects",
    "description": "Place a logo file over an image.",
    "popular": false
  },
  {
    "id": "increase-quality",
    "name": "Increase Image Quality",
    "category": "DPI & Quality",
    "description": "Local quality-preserving export; AI super-resolution needs a provider.",
    "popular": false
  },
  {
    "id": "convert-dpi",
    "name": "Convert DPI",
    "category": "DPI & Quality",
    "description": "Prepare an image for 200, 300 or 600 DPI print workflows.",
    "popular": false
  },
  {
    "id": "check-dpi",
    "name": "Check Image DPI",
    "category": "DPI & Quality",
    "description": "Inspect available browser image metadata and dimensions.",
    "popular": false
  },
  {
    "id": "super-resolution",
    "name": "Super Resolution",
    "category": "DPI & Quality",
    "description": "AI super-resolution adapter; requires a configured provider.",
    "popular": false
  },
  {
    "id": "resize-image",
    "name": "Resize Image by Pixel",
    "category": "Resize",
    "description": "Resize with locked or unlocked aspect ratio.",
    "popular": false
  },
  {
    "id": "resize-cm",
    "name": "Resize in Centimeters",
    "category": "Resize",
    "description": "Resize for print dimensions.",
    "popular": false
  },
  {
    "id": "resize-mm",
    "name": "Resize in Millimeters",
    "category": "Resize",
    "description": "Resize for print dimensions.",
    "popular": false
  },
  {
    "id": "resize-inches",
    "name": "Resize in Inches",
    "category": "Resize",
    "description": "Resize for print dimensions.",
    "popular": false
  },
  {
    "id": "bulk-resizer",
    "name": "Bulk Image Resizer",
    "category": "Resize",
    "description": "Resize multiple images and download a ZIP.",
    "popular": false
  },
  {
    "id": "ai-upscale",
    "name": "Upscale Image With AI",
    "category": "Resize",
    "description": "AI upscale adapter; requires a configured provider.",
    "popular": false
  },
  {
    "id": "a4-size",
    "name": "A4 Size",
    "category": "Official Sizes",
    "description": "Prepare an image on an A4 canvas.",
    "popular": false
  },
  {
    "id": "ssc-photo",
    "name": "SSC Photo Resize",
    "category": "Official Sizes",
    "description": "Common SSC photo workflow.",
    "popular": false
  },
  {
    "id": "pan-card",
    "name": "PAN Card",
    "category": "Official Sizes",
    "description": "Prepare an image for PAN-related dimensions.",
    "popular": false
  },
  {
    "id": "upsc-photo",
    "name": "UPSC Photo",
    "category": "Official Sizes",
    "description": "Prepare a standard exam photo.",
    "popular": false
  },
  {
    "id": "psc-photo",
    "name": "PSC Photo",
    "category": "Official Sizes",
    "description": "Prepare a standard exam photo.",
    "popular": false
  },
  {
    "id": "passport-photo",
    "name": "Passport Photo Maker",
    "category": "Passport & ID",
    "description": "Create passport photos with background and print copies.",
    "popular": false
  },
  {
    "id": "red-passport",
    "name": "Red Background Passport",
    "category": "Passport & ID",
    "description": "Create a passport photo with red background.",
    "popular": false
  },
  {
    "id": "white-passport",
    "name": "White Background Passport",
    "category": "Passport & ID",
    "description": "Create a passport photo with white background.",
    "popular": false
  },
  {
    "id": "resize-sign-6x2",
    "name": "Resize Sign 6cm x 2cm",
    "category": "Passport & ID",
    "description": "Resize signature to 60 \u00d7 20 mm at 300 DPI.",
    "popular": false
  },
  {
    "id": "photo-35x45",
    "name": "3.5cm x 4.5cm",
    "category": "Passport & ID",
    "description": "Create a 35 \u00d7 45 mm photo.",
    "popular": false
  },
  {
    "id": "signature-50x20",
    "name": "Signature 50mm x 20mm",
    "category": "Passport & ID",
    "description": "Create a 50 \u00d7 20 mm signature.",
    "popular": false
  },
  {
    "id": "photo-35x45-mm",
    "name": "35mm x 45mm",
    "category": "Passport & ID",
    "description": "Standard 35 \u00d7 45 mm photo.",
    "popular": false
  },
  {
    "id": "photo-2x2",
    "name": "2 x 2 Inch",
    "category": "Passport & ID",
    "description": "Create a 2 \u00d7 2 inch photo.",
    "popular": false
  },
  {
    "id": "photo-3x4",
    "name": "3 x 4 Inch",
    "category": "Passport & ID",
    "description": "Create a 3 \u00d7 4 inch photo.",
    "popular": false
  },
  {
    "id": "photo-4x6",
    "name": "4 x 6 Inch",
    "category": "Passport & ID",
    "description": "Create a 4 \u00d7 6 inch print canvas.",
    "popular": false
  },
  {
    "id": "photo-600",
    "name": "600 x 600 Pixels",
    "category": "Passport & ID",
    "description": "Create a square 600 \u00d7 600 image.",
    "popular": false
  },
  {
    "id": "instagram-no-crop",
    "name": "Instagram (No Crop)",
    "category": "Social Media",
    "description": "Fit an image into a social-friendly canvas without cropping.",
    "popular": false
  },
  {
    "id": "instagram-grid",
    "name": "Instagram Grid Maker",
    "category": "Social Media",
    "description": "Split an image into a 3 \u00d7 3 grid.",
    "popular": false
  },
  {
    "id": "whatsapp-dp",
    "name": "WhatsApp DP",
    "category": "Social Media",
    "description": "Create a square display picture.",
    "popular": false
  },
  {
    "id": "youtube-banner",
    "name": "YouTube Banner",
    "category": "Social Media",
    "description": "Prepare a 2560 \u00d7 1440 banner canvas.",
    "popular": false
  },
  {
    "id": "zoom-out",
    "name": "Zoom Out Image",
    "category": "Social Media",
    "description": "Fit an image inside a larger canvas.",
    "popular": false
  },
  {
    "id": "ocr-image",
    "name": "OCR Image",
    "category": "Convert",
    "description": "OCR requires a browser OCR engine/provider; adapter included.",
    "popular": false
  },
  {
    "id": "image-to-jpg",
    "name": "Image to JPG",
    "category": "Convert",
    "description": "Convert common image formats to JPG.",
    "popular": false
  },
  {
    "id": "heic-to-jpg",
    "name": "HEIC to JPG",
    "category": "Convert",
    "description": "HEIC decoding depends on browser support; unsupported files are rejected clearly.",
    "popular": false
  },
  {
    "id": "webp-to-jpg",
    "name": "WEBP to JPG",
    "category": "Convert",
    "description": "Convert WebP to JPG.",
    "popular": false
  },
  {
    "id": "jpeg-to-png",
    "name": "JPEG to PNG",
    "category": "Convert",
    "description": "Convert JPEG to PNG.",
    "popular": false
  },
  {
    "id": "png-to-jpeg",
    "name": "PNG to JPEG",
    "category": "Convert",
    "description": "Convert PNG to JPEG.",
    "popular": false
  },
  {
    "id": "png-to-ico",
    "name": "PNG to ICO",
    "category": "Convert",
    "description": "Export a favicon-style PNG image.",
    "popular": false
  },
  {
    "id": "jpg-to-text",
    "name": "JPG to Text",
    "category": "Convert",
    "description": "OCR adapter; configure a real OCR provider.",
    "popular": false
  },
  {
    "id": "png-to-text",
    "name": "PNG to Text",
    "category": "Convert",
    "description": "OCR adapter; configure a real OCR provider.",
    "popular": false
  },
  {
    "id": "favicon-generator",
    "name": "Favicon Generator",
    "category": "Convert",
    "description": "Create a favicon-ready square image.",
    "popular": false
  },
  {
    "id": "image-to-pdf",
    "name": "Image to PDF",
    "category": "PDF",
    "description": "Create a PDF from one or more images.",
    "popular": false
  },
  {
    "id": "pdf-to-jpg",
    "name": "PDF to JPG",
    "category": "PDF",
    "description": "PDF rasterization requires a PDF rendering engine/provider.",
    "popular": false
  },
  {
    "id": "jpg-to-pdf-50",
    "name": "JPG to PDF Under 50KB",
    "category": "PDF",
    "description": "Create a PDF and attempt target-size optimization.",
    "popular": false
  },
  {
    "id": "jpg-to-pdf-100",
    "name": "JPG to PDF Under 100KB",
    "category": "PDF",
    "description": "Create a PDF and attempt target-size optimization.",
    "popular": false
  },
  {
    "id": "jpeg-to-pdf-200",
    "name": "JPEG to PDF Under 200KB",
    "category": "PDF",
    "description": "Create a PDF and attempt target-size optimization.",
    "popular": false
  },
  {
    "id": "jpg-to-pdf-300",
    "name": "JPG to PDF Under 300KB",
    "category": "PDF",
    "description": "Create a PDF and attempt target-size optimization.",
    "popular": false
  },
  {
    "id": "jpg-to-pdf-500",
    "name": "JPG to PDF Under 500KB",
    "category": "PDF",
    "description": "Create a PDF and attempt target-size optimization.",
    "popular": false
  },
  {
    "id": "image-compressor",
    "name": "Image Compressor",
    "category": "Compress",
    "description": "Reduce image size while maintaining quality.",
    "popular": false
  },
  {
    "id": "reduce-kb",
    "name": "Reduce Size in KB",
    "category": "Compress",
    "description": "Compress to a target KB.",
    "popular": false
  },
  {
    "id": "reduce-mb",
    "name": "Reduce Size in MB",
    "category": "Compress",
    "description": "Compress to a target MB.",
    "popular": false
  },
  {
    "id": "jpg-to-kb",
    "name": "JPG to KB",
    "category": "Compress",
    "description": "Compress JPG toward a target size.",
    "popular": false
  },
  {
    "id": "mb-to-kb",
    "name": "Convert MB to KB",
    "category": "Compress",
    "description": "Convert file-size units.",
    "popular": false
  },
  {
    "id": "kb-to-mb",
    "name": "Convert KB to MB",
    "category": "Compress",
    "description": "Convert file-size units.",
    "popular": false
  },
  {
    "id": "compress-5kb",
    "name": "Compress to 5KB",
    "category": "Exact Size",
    "description": "Compress an image toward 5KB.",
    "popular": false
  },
  {
    "id": "compress-10kb",
    "name": "Compress to 10KB",
    "category": "Exact Size",
    "description": "Compress an image toward 10KB.",
    "popular": false
  },
  {
    "id": "compress-15kb",
    "name": "Compress to 15KB",
    "category": "Exact Size",
    "description": "Compress an image toward 15KB.",
    "popular": false
  },
  {
    "id": "compress-20kb",
    "name": "Compress to 20KB",
    "category": "Exact Size",
    "description": "Compress an image toward 20KB.",
    "popular": false
  },
  {
    "id": "compress-20kb-50kb",
    "name": "Compress to 20KB\u201350KB",
    "category": "Exact Size",
    "description": "Compress an image toward 20KB\u201350KB.",
    "popular": false
  },
  {
    "id": "compress-25kb",
    "name": "Compress to 25KB",
    "category": "Exact Size",
    "description": "Compress an image toward 25KB.",
    "popular": false
  },
  {
    "id": "compress-30kb",
    "name": "Compress to 30KB",
    "category": "Exact Size",
    "description": "Compress an image toward 30KB.",
    "popular": false
  },
  {
    "id": "compress-40kb",
    "name": "Compress to 40KB",
    "category": "Exact Size",
    "description": "Compress an image toward 40KB.",
    "popular": false
  },
  {
    "id": "compress-50kb",
    "name": "Compress to 50KB",
    "category": "Exact Size",
    "description": "Compress an image toward 50KB.",
    "popular": false
  },
  {
    "id": "compress-100kb",
    "name": "Compress to 100KB",
    "category": "Exact Size",
    "description": "Compress an image toward 100KB.",
    "popular": false
  },
  {
    "id": "compress-150kb",
    "name": "Compress to 150KB",
    "category": "Exact Size",
    "description": "Compress an image toward 150KB.",
    "popular": false
  },
  {
    "id": "compress-200kb",
    "name": "Compress to 200KB",
    "category": "Exact Size",
    "description": "Compress an image toward 200KB.",
    "popular": false
  },
  {
    "id": "compress-300kb",
    "name": "Compress to 300KB",
    "category": "Exact Size",
    "description": "Compress an image toward 300KB.",
    "popular": false
  },
  {
    "id": "compress-500kb",
    "name": "Compress to 500KB",
    "category": "Exact Size",
    "description": "Compress an image toward 500KB.",
    "popular": false
  },
  {
    "id": "compress-1mb",
    "name": "Compress to 1MB",
    "category": "Exact Size",
    "description": "Compress an image toward 1MB.",
    "popular": false
  },
  {
    "id": "compress-2mb",
    "name": "Compress to 2MB",
    "category": "Exact Size",
    "description": "Compress an image toward 2MB.",
    "popular": false
  }
];