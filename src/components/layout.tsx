import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
  language: string;
  onLanguageChange: (lang: string) => void;
  isAuthenticated: boolean;
  onSignIn: () => void;
  onSignOut: () => void;
  userEmail?: string;
}

export default function Layout({
  children,
  language,
  onLanguageChange,
  isAuthenticated,
  onSignIn,
  onSignOut,
  userEmail,
}: LayoutProps) {
  return (
    <>
      <Navbar
        language={language}
        onLanguageChange={onLanguageChange}
        isAuthenticated={isAuthenticated}
        onSignIn={onSignIn}
        onSignOut={onSignOut}
        userEmail={userEmail}
      />
      <main className="pt-16">{children}</main>
    </>
  );
}