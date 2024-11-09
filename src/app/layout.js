// app/layout.js o app/layout.tsx (si usas TypeScript)

export const metadata = {
  title: 'Mi Portafolio',
  description: 'Portafolio de un desarrollador web',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
