export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface NavigationProps {
  navigation: any;
  route: any;
}

export interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  loading?: boolean;
}

export interface CardProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  onPress?: () => void;
}
