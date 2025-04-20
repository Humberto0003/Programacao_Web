import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Catálogo de Produtos",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="pt-BR"
			className={`${geistSans.variable} ${geistMono.variable}`}
		>
			<body className="antialiased bg-[var(--color-background)] text-[var(--color-foreground)] transition-colors duration-300">
				<header className="p-4 flex justify-between items-center">
					<h1 className="text-xl font-bold">Catálogo de Produtos</h1>
					<ThemeToggle />
				</header>
				<main>{children}</main>
			</body>
		</html>
	);
}
