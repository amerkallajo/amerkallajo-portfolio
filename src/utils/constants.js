/**
 * Application Constants
 * =====================
 * 
 * This file defines all static content and configuration
 * that will be used throughout the application.
 */

// ================================
// Site Metadata
// ================================

export const SITE_CONFIG = {
  name: 'Amer Kallajo',
  tagline: 'Multidisciplinary Builder',
  description: 'Web, visual production, AI workflows, research, and commercial execution',
  url: 'https://github.com/amerkallajo/amerkallajo-portfolio',
};

// ================================
// Navigation Links
// ================================

export const NAV_LINKS = [
  {
    id: 'product',
    label: 'Product Photography & Graphic Design',
    path: '/product',
  },
  {
    id: 'web',
    label: 'Web Design',
    path: '/web',
  },
];

// ================================
// Contact Information
// ================================

export const CONTACT_INFO = {
  whatsapp: {
    label: 'Chat on WhatsApp',
    number: '+49 172 377 3552',
    link: 'https://wa.me/491723773552',
  },
};

// ================================
// Social Links
// ================================

export const SOCIAL_LINKS = [
  {
    id: 'instagram',
    label: 'Instagram',
    url: 'https://www.instagram.com/amerkallajo/',
    icon: '📸',
  },
];

// ================================
// Page Content
// ================================

export const PAGE_CONTENT = {
  home: {
    title: 'Amer Kallajo',
    subtitle: 'Visual Creator',
    disciplines: 'Product Photography • Graphic Design • Web Design',
  },
  product: {
    title: 'Product Photography & Graphic Design',
    description: 'Crafting visual stories through precise photography and bold graphic design concepts.',
    items: [
      // New Featured Items from pics folder
      { id: 100, title: 'Product Showcase 1', description: 'Professional product photography', image: '/images/portfolio/590628139_753194227803790_5661270352996134145_n.jpg' },
      { id: 101, title: 'Product Showcase 2', description: 'Professional product photography', image: '/images/portfolio/591577570_753195231137023_3347224601297849135_n.jpg' },
      { id: 102, title: 'Product Showcase 3', description: 'Professional product photography', image: '/images/portfolio/593412587_753194907803722_750801739355812987_n.jpg' },
      { id: 103, title: 'Product Showcase 4', description: 'Professional product photography', image: '/images/portfolio/593424124_753195324470347_6404104474347063359_n.jpg' },
      { id: 104, title: 'Product Showcase 5', description: 'Professional product photography', image: '/images/portfolio/593558823_753202374469642_8420223521425140434_n.jpg' },
      { id: 105, title: 'Product Showcase 6', description: 'Professional product photography', image: '/images/portfolio/594055204_753200414469838_2992915484970931899_n.jpg' },
      { id: 106, title: 'Product Showcase 7', description: 'Professional product photography', image: '/images/portfolio/594378474_2024061901679826_4155662596014460486_n.jpg' },
      { id: 107, title: 'Product Showcase 8', description: 'Professional product photography', image: '/images/portfolio/595726076_2024061938346489_1950064257241609051_n.jpg' },
      { id: 108, title: 'Product Showcase 9', description: 'Professional product photography', image: '/images/portfolio/595740682_2024062025013147_3487538976416594156_n.jpg' },
      { id: 109, title: 'Product Showcase 10', description: 'Professional product photography', image: '/images/portfolio/595858133_2024061998346483_523394875998009505_n.jpg' },
      // Previous Items
      { id: 1, title: 'Khloud', description: 'Premium presentation', image: '/images/portfolio/khloud-1.png' },
      { id: 2, title: 'Perfume Collection', description: 'Elegant fragrance photography', image: '/images/portfolio/perfume-1.png' },
      { id: 3, title: 'Shaka', description: 'Vibrant product showcase', image: '/images/portfolio/shaka-1.png' },
      { id: 4, title: 'Rise', description: 'Energy and motion', image: '/images/portfolio/rise-1.png' },
      { id: 5, title: 'Nature Bar', description: 'Organic and natural', image: '/images/portfolio/nature-bar-1.png' },
      { id: 6, title: 'Bain', description: 'Clean and minimal', image: '/images/portfolio/bain-1.png' },
      { id: 7, title: 'Good Habit', description: 'Skincare essentials', image: '/images/portfolio/good-habit-2.png' },
      { id: 8, title: 'LWL8', description: 'Modern aesthetics', image: '/images/portfolio/lwl8-1.png' },
      { id: 9, title: 'Mushroom', description: 'Natural supplements', image: '/images/portfolio/mushroom-1.png' },
      { id: 10, title: 'Mycroboost', description: 'Wellness products', image: '/images/portfolio/mycroboost-1.png' },
      { id: 11, title: 'Orka', description: 'Premium quality', image: '/images/portfolio/orka-1.png' },
      { id: 12, title: 'Vibrax', description: 'Dynamic composition', image: '/images/portfolio/vibrax-1.png' },
      { id: 13, title: 'Happy Soaps', description: 'Eco-friendly care', image: '/images/portfolio/happy-soaps-1.png' },
      { id: 14, title: 'Petlibro', description: 'Pet lifestyle', image: '/images/portfolio/petlibro-1.png' },
      { id: 15, title: 'Antillean Coast', description: 'Tropical vibes', image: '/images/portfolio/antilleancoast-1.png' },
      { id: 16, title: 'Beam Minerals', description: 'Mineral supplements', image: '/images/portfolio/beamminerals-1.png' },
      { id: 17, title: 'Gut2Be', description: 'Health and balance', image: '/images/portfolio/gut2be-1.png' },
      { id: 18, title: 'Pop', description: 'Playful and bright', image: '/images/portfolio/pop-1.png' },
      { id: 19, title: 'Raaka Chocolate', description: 'Artisanal chocolate', image: '/images/portfolio/raakachocolate-1.png' },
      // New Items
      { id: 20, title: 'Ambeezy', description: 'Product showcase', image: '/images/portfolio/ambeezy-1.png' },
      { id: 21, title: 'Bink', description: 'Modern design', image: '/images/portfolio/bink-1.png' },
      { id: 22, title: 'Katie', description: 'Lifestyle photography', image: '/images/portfolio/katie-1.png' },
      { id: 23, title: 'Aerflo', description: 'Tech accessory', image: '/images/portfolio/aerflo-1.png' },
      { id: 24, title: 'Heat Supply', description: 'Spicy branding', image: '/images/portfolio/heatsupply-1.png' },
      { id: 25, title: 'Powder Vitamin', description: 'Health supplements', image: '/images/portfolio/powdervitamin-1.png' },
      { id: 26, title: 'Rise Brew', description: 'Coffee culture', image: '/images/portfolio/rise-brew-1.png' },
      { id: 27, title: 'Scent Object', description: 'Minimalist scent', image: '/images/portfolio/scent-objec-1.png' },
      { id: 28, title: 'Sip', description: 'Beverage photography', image: '/images/portfolio/sip-1.png' },
      { id: 29, title: 'Sphinx Cat Feeder', description: 'Pet product', image: '/images/portfolio/sphinxcatfeeder-1.png' },
      { id: 30, title: 'Jerky', description: 'Food photography', image: '/images/portfolio/jerky-1.jpg' },
    ],
  },
  web: {
    title: 'Web Design',
    description: 'Crafting stunning websites that transform brands and elevate businesses to new heights.',
    items: [
      {
        id: 1,
        title: 'Econic Media',
        description: 'A public agency website presented here as an inspectable portfolio artifact. Authorship is asserted by this repository; commercial outcomes are not independently verified.',
        image: '/images/web/econic-media.png',
        link: 'https://www.econicmedia.pro/'
      },
      {
        id: 2,
        title: 'Alafandi',
        description: 'A live architecture and real-estate website presented as a portfolio artifact. The public page can be inspected; client outcomes are not independently verified.',
        image: '/images/web/alafandi.png',
        link: 'https://alafandi.pro/'
      },
      {
        id: 3,
        title: 'Benfresh',
        description: 'A live German business website whose footer publicly attributes Econic Media and displays Amer’s public WhatsApp number. This supports delivery, not performance claims.',
        image: '/images/web/benfresh.jpg',
        link: 'https://www.benfresh.de/'
      },
      {
        id: 4,
        title: 'SUZ Reinigung',
        description: 'A hosted website artifact presented by this repository. Treat authorship and client relationship as self-asserted unless corroborated externally.',
        image: '/images/web/suz-reinigung.png',
        link: 'https://suzreinigungweb.netlify.app/'
      },
    ],
  },
  contact: {
    title: "Let's Connect",
    description: 'Ready to bring your vision to life? Reach out and let\'s create something amazing.',
  },
};
