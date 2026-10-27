export const business = {
  name: 'Universal Graphic Services',
  phone: '+91 97411 01035',
  phoneHref: 'tel:+919741101035',
  email: 'info@universalgraphicservices.com',
  address: ['52-5A-6, Near post office,', 'Opp. Rajarajeshwari Citadel Apartment,', 'Pattanagere main road,', 'Rajarajeshwari Nagar,', 'Bangalore-560098. Karnataka.'],
};

// Search the supplied address without inventing coordinates or a place ID.
export const addressSearch = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address.join(' '))}`;
export const enquiryCategories = ['General Enquiry', 'Product Enquiry', 'Spare Parts', 'Consumables', 'Software', 'Machine Service', 'Machine Installation', 'Maintenance & Repairs', 'Technical Support'];
