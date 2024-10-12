import { PropsWithChildren } from 'react';

import DefaultLayout from '@/components/layout/DefaultLayout';

export default function AfterAuthLayout({ children }: PropsWithChildren) {
  return <DefaultLayout>{children}</DefaultLayout>;
}
