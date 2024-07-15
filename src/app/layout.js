import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "Shreyash Sahu",
  description: "Software Engineer | Competitive Programmer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Shreyash Sahu</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <body>{children}</body>
    </html>
  );
}
