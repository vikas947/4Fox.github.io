const productNames = [
  'Nova Headphones',
  'Pulse Smartwatch',
  'Arc Gaming Chair',
  'Lumen Desk Lamp',
  'Orbit Laptop Stand',
  'Echo Speaker Pro',
  'Aero Water Bottle',
  'Fusion Keyboard',
  'Vertex Monitor Arm',
  'Drift Running Shoes',
  'Prism Backpack',
  'Nimbus Hoodie',
  'Stratos Drone',
  'Peak Protein Mix',
  'Harbor Travel Case',
  'Motive Yoga Mat',
  'Core Dumbbells',
  'Beacon Doorbell',
  'Summit Jacket',
  'Ridge Boots',
  'Horizon Tablet',
  'Urban Coffee Maker',
  'Trail Sunglasses',
  'Spark Action Cam',
  'Zen Sleep Mask',
  'Terra Plant Pot',
  'Comet E-bike',
  'Glide Roller Skates',
  'Flow Blender',
  'Atlas Carry-On',
];

export const bannerItems = [
  {
    id: 1,
    source: 'Source #1',
    image:
      'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    source: 'Source #2',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    source: 'Source #3',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
  },
];

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const createTimeSeries = (days = 30) => {
  const start = new Date('2022-04-01');
  return Array.from({ length: days }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    const views = randomInt(180, 480);
    const cartAdditions = randomInt(40, Math.floor(views * 0.55));
    return {
      date: date.toISOString().split('T')[0],
      views,
      cartAdditions,
    };
  });
};

export const createProductRows = (count = 50) =>
  Array.from({ length: count }, (_, idx) => {
    const views = randomInt(800, 16000);
    const cartAdditions = randomInt(120, Math.floor(views * 0.45));
    return {
      id: idx + 1,
      productName: productNames[idx % productNames.length],
      productViews: views,
      cartAdditions,
    };
  });

export const dateRanges = [
  { label: 'Last 7 Days', value: '7' },
  { label: 'Last 14 Days', value: '14' },
  { label: 'Last 30 Days', value: '30' },
];
