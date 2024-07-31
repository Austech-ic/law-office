// app/layout.js

import './globals.css';
import ClientLoader from './clientloader';
import { Suspense } from 'react';

export const metadata = {
  title: "Law Office Of Udo Uchenna Ekekeulu",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<p>Loading...</p>}>
          <ClientLoader>
            {children}
          </ClientLoader>
        </Suspense>
      </body>
    </html>
  );
}
