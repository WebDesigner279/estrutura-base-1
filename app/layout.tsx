import "./styles/globals.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Aplicação em Next.js com SCSS",
  description: "Aplicação em Next.js com SCSS",
  icons: {
    icon: "/icons/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Manifesto PWA */}
        <link rel="manifest" href="/manifest.json" />
        {/* Cor da barra de navegação no Android */}
        <meta name="theme-color" content="#004AAD" />

        {/* PWA para iOS */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Aplicação Next.js" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" href="/icons/icon-512x512.png" />
      </head>

      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
