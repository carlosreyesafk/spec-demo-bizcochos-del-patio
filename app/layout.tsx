export const metadata = {
  title: "Bizcochos del Patio | Repostería en Av. Venezuela, Santo Domingo Este",
  description:
    "Bizcochos del Patio — bizcochos personalizados y postres por encargo en la Av. Venezuela, Santo Domingo Este. Cumpleaños, bodas y eventos. Pide por WhatsApp: (809) 520-8688.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
