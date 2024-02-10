import "./globals.css";

export const metadata = {
  title: "Convite",
  description: "Aniversario de 2 anos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className="bg-gradient-to-t from-amber-200 from-10% via-white via-50% to-teal-400 to-90% h-screen"
    >
      <body>{children}</body>
    </html>
  );
}
