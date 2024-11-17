import "./globals.css"; // Ensure this path matches your `globals.css`

export const metadata = {
  title: "Digital Birthday Card",
  description: "A special card for someone special ❤️",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
