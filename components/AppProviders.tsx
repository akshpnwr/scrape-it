'use client';

import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    console.log('AppProviders');
  }, []);
  return (
    <ThemeProvider enableSystem attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  );
}
