
import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  onAuthStateChanged, 
  signInWithPopup, 
  signOut, 
  User as FirebaseUser 
} from 'firebase/auth';
import { auth, googleProvider } from '../lib/firebase';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  loginWithGoogle: () => Promise<void>;
  login: (email: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (data: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// List of admin emails - kept lowercase for comparison
const ADMIN_EMAILS = ['pratham.solanki30@gmail.com', 'admin@farmtofamily.com'];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for persisted user on mount via Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const email = firebaseUser.email || '';
        const isAdmin = ADMIN_EMAILS.includes(email.toLowerCase());

        // Map Firebase user to our app's user structure
        setUser({
          name: firebaseUser.displayName || email.split('@')[0] || 'User',
          email: email,
          avatar: firebaseUser.photoURL,
          address: 'Campus Hub, University Road, Vadodara, Gujarat, 390001',
          isAdmin: isAdmin
        });
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error logging in with Google", error);
      throw error;
    }
  };

  const login = async (email: string, name: string) => {
    // Simulate login/signup by setting user directly (for manual sign up flow)
    // Ensure case-insensitive check
    const isAdmin = ADMIN_EMAILS.includes(email.toLowerCase());
    
    setUser({
      name: name,
      email: email,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`,
      address: 'Campus Hub, University Road, Vadodara, Gujarat, 390001',
      isAdmin: isAdmin
    });
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error logging out", error);
    }
  };

  const updateProfile = (data: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...data });
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, loginWithGoogle, login, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
