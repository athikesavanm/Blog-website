'use client';

import LoginForm from '@/components/login_form';
import { useRouter } from 'next/navigation';

export default function UserLoginPage() {
  const router = useRouter();

  const handleUserLogin = ({ email, password }) => {
    console.log('User logged in:', email, password);

    router.push('/players');
  };

  return <LoginForm title="User Login" onSubmit={handleUserLogin} />;
}
