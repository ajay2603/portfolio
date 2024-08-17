import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | Atchuta Rama Raju Jampana - MERN & Next.js Developer",
  description:
    "Hi there! I'm Atchuta Rama Raju Jampana, a passionate Full Stack Developer specializing in the MERN stack, Next.js, and cross-platform mobile app development with React Native and Flutter. I create dynamic, responsive websites and mobile apps with clean code and optimized performance.",
  keywords:
    "Full Stack Developer, MERN stack, Next.js, React Native, Flutter, Cross-Platform Development, Portfolio, Atchuta Rama Raju Jampana, Web Development, JavaScript, TypeScript, My Quiz, Pigeon, Safe Sprout, Child Tracking, Mobile App Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
