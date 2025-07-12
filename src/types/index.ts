export interface User {
  id: string;
  username: string;
  email: string;
  profileImage: string;
  points: number;
  role: 'user' | 'admin';
}

export interface Item {
  id: string;
  title: string;
  description: string;
  category: string;
  type: string;
  size: string;
  condition: string;
  tags: string[];
  images: string[];
  uploaderId: string;
  uploaderName: string;
  status: 'available' | 'swapped' | 'pending';
  pointValue: number;
  createdAt: string;
}

export interface SwapRequest {
  id: string;
  requesterId: string;
  requesterName: string;
  itemId: string;
  itemTitle: string;
  status: 'pending' | 'approved' | 'rejected' | 'completed';
  createdAt: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, username: string) => Promise<boolean>;
  logout: () => void;
  updatePoints: (points: number) => void;
}