import "./globals.css";

export const metadata = {
  title: "ACA Juris - Criminal Law Firm",
  description: "Bangalore-based criminal law firm specializing in criminal litigation",
  preconnect: [
    { href: "https://fonts.googleapis.com" },
    { href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
