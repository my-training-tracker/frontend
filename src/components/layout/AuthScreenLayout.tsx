import React, { PropsWithChildren } from 'react';

import Image from 'next/image';

import LoginArt from '@/assets/images/Login_Art.png';
import MobileLoginArt from '@/assets/images/Mobile_Login_Art.png';

export default function AuthScreenLayout({ children }: PropsWithChildren) {
  return (
    <main className="min-h-screen flex flex-col-reverse items-center sm:flex-row sm:justify-between p-5 gap-5">
      <div className="flex flex-1">{children}</div>
      <picture className="sm:flex-1">
        {/* TOOD: 이미지 반응형 */}
        <Image src={LoginArt} alt="로그인 이미지" placeholder="blur" className="hidden sm:inline-block rounded-xl" />
        <Image
          src={MobileLoginArt}
          alt="모바일 로그인 이미지"
          placeholder="blur"
          className="inline-block sm:hidden rounded-xl"
        />
      </picture>
    </main>
  );
}
