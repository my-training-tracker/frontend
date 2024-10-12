import { PropsWithChildren } from 'react';

import AuthScreenLayout from '@/components/layout/AuthScreenLayout';

export default function BeforeAuthLayout({ children }: PropsWithChildren) {
  return <AuthScreenLayout>{children}</AuthScreenLayout>;
}
