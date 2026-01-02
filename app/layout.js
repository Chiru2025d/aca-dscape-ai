import "../src/app/globals.css";

export const metadata = {
  title: "ACA Juris - Criminal Law Firm",
  description: "Bangalore-based criminal law firm specializing in criminal litigation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Jost:wght@300;400;500;600&family=Be+Vietnam:wght@300;400;500;600&family=Montserrat:wght@500;600&family=DM+Serif+Display:ital,wght@0,400&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
