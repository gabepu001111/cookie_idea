import cookie1 from '../assets/cookie-1.svg?url'
import cookie2 from '../assets/cookie-2.svg?url'
import cookie3 from '../assets/cookie-3.svg?url'
import cookie4 from '../assets/cookie-4.svg?url'

const recipes = [
  {
    id: 'cinnamon-dough-usa',
    name: 'Cinnamon & Cookie Dough',
    country: 'America',
    countryCode: 'usa',
    description: 'Warm cinnamon meets cookie-dough comfort — a classic US-inspired treat.',
    ingredients: ['All-purpose flour', 'Butter', 'Brown sugar', 'Cinnamon', 'Eggs', 'Chocolate chips (optional)'],
    price: '$4.50',
    image: cookie1,
    featured: true
  },
  {
    id: 'sakura-matcha-jpn',
    name: 'Sakura Matcha',
    country: 'Japan',
    countryCode: 'jpn',
    description: 'Delicate matcha and cherry blossom notes create a subtle floral cookie.',
    ingredients: ['Cake flour', 'Matcha powder', 'White chocolate', 'Butter', 'Sugar', 'Sakura petals (optional)'],
    price: '$4.75',
    image: cookie2
  },
  {
    id: 'dubai-choc-chip',
    name: 'Dubai Chocolate Chip',
    country: 'Dubai',
    countryCode: 'dxb',
    description: 'Rich, decadent chocolate chips with a touch of cardamom for warmth.',
    ingredients: ['Flour', 'Butter', 'Brown sugar', 'Dark chocolate', 'Cardamom', 'Vanilla'],
    price: '$5.00',
    image: cookie3
  },
  {
    id: 'gulab-chai-coconut-ind',
    name: 'Gulab/Chai & Coconut',
    country: 'India',
    countryCode: 'ind',
    description: 'A fragrant cookie blending chai spices, coconut, and gulab jamun inspiration.',
    ingredients: ['Flour', 'Ghee or butter', 'Desiccated coconut', 'Cardamom', 'Sugar', 'Rose syrup (optional)'],
    price: '$4.75',
    image: cookie4
  }
]

export default recipes
