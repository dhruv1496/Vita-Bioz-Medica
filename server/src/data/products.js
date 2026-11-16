export const products = [
  {
    id: 1,
    slug: 'foie-sain',
    name: 'Foie Sain',
    tagline: 'Ayurvedic Liver Tonic',
    image: '/foie-sain-image.jpg',
    logo: '/foie-sain-logo.jpg',
    form: 'Syrup',
    color: 'Caramel',
    packSize: '200 ml',
    shortDescription: 'An Ayurvedic liver tonic formulated with traditional herbs to support liver function, digestion, and overall health.',
    fullDescription: `Foie Sain is a premium Ayurvedic formulation crafted to support optimal liver health through the wisdom of traditional herbs. This carefully balanced syrup combines 23 time-tested botanicals, each selected for their specific hepatoprotective and digestive properties.

The liver is the body's primary detoxification organ, processing everything we consume. Modern lifestyles, environmental toxins, and dietary habits can overwhelm this vital organ. Foie Sain provides comprehensive support with herbs that work synergistically to protect liver cells, enhance bile production, improve digestion, and promote natural detoxification pathways.

Each ingredient is sourced from trusted suppliers and processed according to classical Ayurvedic principles to preserve maximum potency and bioavailability. The caramel-colored syrup has a pleasant taste, making it easy to incorporate into your daily wellness routine.`,
    benefits: [
      'Supports healthy liver function and regeneration',
      'Promotes natural detoxification processes',
      'Enhances digestion and nutrient absorption',
      'Helps maintain healthy bile production',
      'Provides antioxidant protection to liver cells',
      'Supports metabolic health and energy levels',
    ],
    dosage: 'Adults: 10-15 ml twice daily after meals, or as directed by a healthcare professional. Children (above 5 years): 5 ml twice daily.',
    composition: [
      { name: 'Bhring Raj', botanicalName: 'Eclipta prostrata', quantity: '400 mg', description: 'Renowned hepatoprotective herb that supports liver cell regeneration' },
      { name: 'Sarphonka', botanicalName: 'Tephrosia purpurea', quantity: '400 mg', description: 'Traditional herb for liver and spleen health' },
      { name: 'Rohitak Chhal', botanicalName: 'Tecomella undulata', quantity: '400 mg', description: 'Supports liver function and blood purification' },
      { name: 'Arjun Chhal', botanicalName: 'Terminalia arjuna', quantity: '300 mg', description: 'Cardiotonic herb with liver-supportive properties' },
      { name: 'Ashwa Gandha', botanicalName: 'Withania somnifera', quantity: '300 mg', description: 'Adaptogen that helps manage stress-induced liver strain' },
      { name: 'Giloy', botanicalName: 'Tinospora cordifolia', quantity: '100 mg', description: 'Immunomodulator with hepatoprotective effects' },
      { name: 'Daru Haldi', botanicalName: 'Berberis aristata', quantity: '100 mg', description: 'Contains berberine, supports liver enzyme function' },
      { name: 'Harar', botanicalName: 'Terminalia chebula', quantity: '200 mg', description: 'Digestive tonic, supports elimination and liver health' },
      { name: 'Amla', botanicalName: 'Phyllanthus emblica', quantity: '200 mg', description: 'Rich in vitamin C, potent antioxidant for liver protection' },
      { name: 'Bahera', botanicalName: 'Terminalia bellirica', quantity: '200 mg', description: 'Part of Triphala, supports digestion and liver function' },
      { name: 'Chitrak Mool', botanicalName: 'Plumbago indica', quantity: '100 mg', description: 'Enhances digestive fire (agni) and metabolism' },
      { name: 'Makoy', botanicalName: 'Solanum nigrum', quantity: '200 mg', description: 'Traditional herb for liver and skin health' },
      { name: 'Vaividang', botanicalName: 'Embelia ribes', quantity: '200 mg', description: 'Anthelmintic and digestive support herb' },
      { name: 'Pitpapra', botanicalName: 'Fumaria indica', quantity: '100 mg', description: 'Cooling herb for liver and blood purification' },
      { name: 'Bhumi Amla', botanicalName: 'Phyllanthus niruri', quantity: '300 mg', description: 'Well-researched hepatoprotective herb' },
      { name: 'Tulsi', botanicalName: 'Ocimum tenuiflorum', quantity: '100 mg', description: 'Adaptogenic, antioxidant, supports overall wellness' },
      { name: 'Kasni', botanicalName: 'Cichorium intybus', quantity: '100 mg', description: 'Supports liver function and bile production' },
      { name: 'Saunf', botanicalName: 'Foeniculum vulgare', quantity: '100 mg', description: 'Digestive aid, reduces bloating and discomfort' },
      { name: 'Pippali', botanicalName: 'Piper longum', quantity: '50 mg', description: 'Bioavailability enhancer, supports digestion' },
      { name: 'Kali Mirch', botanicalName: 'Piper nigrum', quantity: '50 mg', description: 'Enhances absorption of other herbs' },
      { name: 'Sounth', botanicalName: 'Zingiber officinale', quantity: '50 mg', description: 'Ginger root, supports digestion and circulation' },
    ],
    precautions: [
      'Consult a healthcare professional before use if pregnant, nursing, or under medical supervision',
      'Not recommended for children under 5 years without medical advice',
      'Discontinue use if any adverse reaction occurs',
      'Store in a cool, dry place away from direct sunlight',
      'Keep out of reach of children',
    ],
    certifications: ['GMP Certified', 'ISO 9001:2015', 'AYUSH Approved', 'Heavy Metal Tested'],
    category: 'Liver Health',
    tags: ['ayurvedic', 'liver-tonic', 'syrup', 'hepatoprotective', 'detox'],
    inStock: true,
    featured: true,
  },
];

export function getAllProducts() {
  return products;
}

export function getProductById(id) {
  return products.find(p => p.id === id);
}

export function getProductBySlug(slug) {
  return products.find(p => p.slug === slug);
}

export function getFeaturedProducts() {
  return products.filter(p => p.featured);
}

export function getProductsByCategory(category) {
  return products.filter(p => p.category === category);
}