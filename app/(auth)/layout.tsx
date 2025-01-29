import Logo from '@/components/Logo';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4">
      <Logo />
      {children}
    </div>
  );
}
