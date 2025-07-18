'use client';

import LoginForm from '@/components/login_form';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const router = useRouter();

  const handleAdminLogin = ({ email, password }) => {
    if (email === 'admin@gmail.com' && password === '12345') {
      localStorage.setItem('isAdmin', 'true');
      console.log('Admin logged in');
      router.push('/dashboard');  
    } else {
      alert('Invalid Admin Credentials!');
    }
  };

  return <LoginForm title="Admin Login" onSubmit={handleAdminLogin} />;
}
