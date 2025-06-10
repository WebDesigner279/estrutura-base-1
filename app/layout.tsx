import "./styles/globals.scss";
import Header from "@/components/Header"
import Footer from "@components/Footer";
import Providers from "./provider";

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
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Aplicação Next.js" />
      </head>

      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
