import "normalize.css";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/styles/global.scss";
import "../assets/styles/variables.scss";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
