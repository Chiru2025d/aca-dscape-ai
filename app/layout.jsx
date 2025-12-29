export const metadata = {
  title: 'ACA Dscape AI',
  description: 'ACA Dscape AI Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
