import React, { PropsWithChildren } from 'react';

export default function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <div>
      {/* Header */}
      <main className="min-h-screen flex justify-center items-center">{children}</main>
      {/* Footer */}
    </div>
  );
}
