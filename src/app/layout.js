import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/providers/AuthProvider';

export const metadata = {
  title: 'Aprende Frontend',
  description:
    'Aprende frontend paso a paso. Aquí no solo aprendes, construyes. Mejora tus habilidades mientras creas proyectos para tu portfolio.'
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
