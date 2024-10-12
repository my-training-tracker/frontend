import Link from 'next/link';

import Button from '@/components/common/elements/Button';
import Input from '@/components/common/elements/Input';

export default function LoginForm() {
  return (
    <section className="max-w-sm mx-auto flex flex-col gap-10">
      <div>
        <h1>Welcome Back 👋</h1>

        <p>Today is a new day. It's yourday. You shape it.</p>
        <p>Sign in to start managing your projects.</p>
      </div>
      {/* FORM */}
      <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <Input type="email" id="email" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <Input type="password" id="password" />
        </div>
        <Link href="/login/forgot-password" className="text-right underline-offset-4 hover:underline">
          <p>Forgot Password?</p>
        </Link>

        <Button variant={'default'}>Sign in</Button>
      </form>
      {/* OAUTH */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <div className="w-full h-[1px] bg-gray-300" />
          <span>Or</span>
          <div className="w-full h-[1px] bg-gray-300" />
        </div>
        <div className="flex sm:flex-col gap-3">
          <Button variant={'secondary'}>Sign in with Google</Button>
          <Button variant={'secondary'}>Sign in with GitHub</Button>
        </div>
      </div>
      {/* SIGNUP */}
      <p className="text-center">
        Don't you have an account?{' '}
        <Link href="/register" className="underline-offset-4 hover:underline">
          Sign up
        </Link>
      </p>
    </section>
  );
}
