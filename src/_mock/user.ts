import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------



const products= [
  { productName: "Surface & Near-Surface Flaw Detection" },
  { productName: 'ub-Surface Flaw Detection' },
  { productName: 'Corrosion Detection' },
  { productName: 'Non-Metal Inspection' },
  { productName: 'Leak Detection' },
  { productName: 'Metal Inspection' },
  { productName: 'Non-Metal Inspection' },
  { productName: 'Composite Inspection ' },
  { productName: 'Ferromagnetic Inspection' },
  { productName: 'Weld Inspection ' },
  { productName: 'Bolt Hole Inspection' },
  { productName: 'Casting Inspection' },
  { productName: 'Material Property Inspection' },
  { productName: 'Forging Inspection' },
  { productName: 'Gear Inspection' },
  { productName: 'Paint Inspection Tube' },
  { productName: 'Pipe Inspection Thickness' },
  { productName: 'Gauging Inspection Profile Measurement' },
]

// const productNameArray = [
//   "Surface & Near-Surface Flaw Detection",
//   "Sub-Surface Flaw Detection",
//   "Corrosion Detection",
 
// ];

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: products[index % products.length].productName,
  // name: sample([
  //   'santhosh1',
  //   'santhosh2',
  //   'santhosh3',
  //   'santhosh4',


  // ]),
 


   
  company: faker.company.name(),
  productsno: faker.datatype.boolean(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'pending']),
  category: sample([
    "Surface & Near-Surface Flaw Detection",
    'ub-Surface Flaw Detection',
    'Corrosion Detection',
    'Non-Metal Inspection',
    'Leak Detection',
    'Metal Inspection',
    'Non-Metal Inspection',
    'Composite Inspection ',
    'Ferromagnetic Inspection',
    'Weld Inspection ',
    'Bolt Hole Inspection',
    'Casting Inspection',
    'Material Property Inspection',
    'Forging Inspection',
    'Gear Inspection',
    'Paint Inspection Tube',
    'Pipe Inspection Thickness',
    'Gauging Inspection Profile Measurement',
  ]),
}));

export default users;




