import "./style/globals.css";


export const metadata = {
  title: "Liton Nandi",
  description: "My personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="custom-cursor">{children}</body>
    </html>
  );
}
