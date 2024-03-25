import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------



const orders= [
  { orderID: "111111" },
  { orderID: '222222' },
  { orderID: '333333' },
  { orderID: '444444' },
  { orderID: '555555' },
  { orderID: '666666' },
  { orderID: '777777' },
  { orderID: '888888' },
  { orderID: '999999' },
  { orderID: '122222' },
  { orderID: '133333' },
  { orderID: '144444' },
  { orderID: '155555' },
  { orderID: '166666' },
  { orderID: '177777' },
  { orderID: '199999' },
  { orderID: '200000' },
  { orderID: '211111' },
]



const order = [...Array(24)].map((_, index) => {
  const generatedDate = faker.date.recent();
  const formattedDate = `${generatedDate.getDate()}-${generatedDate.getMonth() + 1}-${generatedDate.getFullYear()}`;
  
  return {
    id: faker.datatype.uuid(),
    // avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
    name: orders[index % orders.length].orderID,
    date: formattedDate,
    customer: faker.person.firstName(),
    total: faker.datatype.number({ min: 10, max: 1000 }),
    fulfillstatus: sample(['active', 'pending']),
    category: sample([
      "Surface & Near-Surface Flaw Detection",
      'Sub-Surface Flaw Detection',
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
    deliverystatus: sample(['active', 'pending']),
    deliverymethod: sample(['online', 'offline']),
  };
});

export default order;





