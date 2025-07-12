import { Item, SwapRequest, User } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    username: 'fashionlover',
    email: 'fashion@example.com',
    profileImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    points: 250,
    role: 'user'
  },
  {
    id: '2',
    username: 'admin',
    email: 'admin@rewear.com',
    profileImage: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400',
    points: 1000,
    role: 'admin'
  },
  {
    id: '3',
    username: 'stylequeen',
    email: 'style@example.com',
    profileImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    points: 180,
    role: 'user'
  }
];

export const mockItems: Item[] = [
  {
    id: '1',
    title: 'Vintage Denim Jacket',
    description: 'Beautiful vintage denim jacket in excellent condition. Perfect for layering and adding a retro touch to any outfit. Features classic button closure and multiple pockets.',
    category: 'Outerwear',
    type: 'Jacket',
    size: 'M',
    condition: 'Excellent',
    tags: ['vintage', 'denim', 'casual'],
    images: [
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    uploaderId: '1',
    uploaderName: 'fashionlover',
    status: 'available',
    pointValue: 45,
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Floral Summer Dress',
    description: 'Light and airy summer dress with beautiful floral pattern. Perfect for warm weather and special occasions. Made from breathable cotton blend.',
    category: 'Dresses',
    type: 'Summer Dress',
    size: 'S',
    condition: 'Good',
    tags: ['floral', 'summer', 'elegant'],
    images: [
      'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    uploaderId: '2',
    uploaderName: 'admin',
    status: 'available',
    pointValue: 35,
    createdAt: '2024-01-18'
  },
  {
    id: '3',
    title: 'Classic White Sneakers',
    description: 'Clean, minimalist white sneakers that go with everything. Barely worn and in great condition. Perfect for casual or smart-casual looks.',
    category: 'Shoes',
    type: 'Sneakers',
    size: '9',
    condition: 'Like New',
    tags: ['sneakers', 'white', 'minimalist'],
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    uploaderId: '1',
    uploaderName: 'fashionlover',
    status: 'available',
    pointValue: 40,
    createdAt: '2024-01-20'
  },
  {
    id: '4',
    title: 'Leather Crossbody Bag',
    description: 'Genuine leather crossbody bag in rich brown color. Perfect size for daily essentials with adjustable strap. Shows minimal wear.',
    category: 'Accessories',
    type: 'Bag',
    size: 'One Size',
    condition: 'Good',
    tags: ['leather', 'crossbody', 'brown'],
    images: [
      'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    uploaderId: '2',
    uploaderName: 'admin',
    status: 'available',
    pointValue: 30,
    createdAt: '2024-01-22'
  },
  {
    id: '5',
    title: 'Bohemian Maxi Dress',
    description: 'Flowing bohemian-style maxi dress with intricate patterns. Perfect for festivals, beach days, or casual outings.',
    category: 'Dresses',
    type: 'Maxi Dress',
    size: 'M',
    condition: 'Excellent',
    tags: ['bohemian', 'maxi', 'patterns'],
    images: [
      'https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    uploaderId: '3',
    uploaderName: 'stylequeen',
    status: 'available',
    pointValue: 50,
    createdAt: '2024-01-25'
  },
  {
    id: '6',
    title: 'Designer Silk Scarf',
    description: 'Luxury silk scarf with beautiful geometric patterns. Can be worn as a neck accessory or hair wrap.',
    category: 'Accessories',
    type: 'Scarf',
    size: 'One Size',
    condition: 'Like New',
    tags: ['silk', 'designer', 'luxury'],
    images: [
      'https://images.pexels.com/photos/7148997/pexels-photo-7148997.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    uploaderId: '3',
    uploaderName: 'stylequeen',
    status: 'available',
    pointValue: 60,
    createdAt: '2024-01-28'
  }
];

export const mockSwapRequests: SwapRequest[] = [
  {
    id: '1',
    requesterId: '1',
    requesterName: 'fashionlover',
    itemId: '2',
    itemTitle: 'Floral Summer Dress',
    status: 'pending',
    createdAt: '2024-01-23'
  },
  {
    id: '2',
    requesterId: '3',
    requesterName: 'stylequeen',
    itemId: '1',
    itemTitle: 'Vintage Denim Jacket',
    status: 'approved',
    createdAt: '2024-01-26'
  }
];