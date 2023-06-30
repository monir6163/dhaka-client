import Script from "next/script";
import FooterBar from "./components/Shared/FooterBar";
import NavBar from "./components/Shared/NavBar";
import "./globals.css";

export const metadata = {
    title: "Dhaka Client",
    description: "A Next.js starter with Tailwind CSS and TypeScript",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className="bg-color-primary text-white tracking-wider"
                suppressHydrationWarning={false}
            >
                <NavBar />
                {children}
                <FooterBar />
                <Script
                    src="https://kit.fontawesome.com/8330d3dfaf.js"
                    crossOrigin="anonymous"
                />
            </body>
        </html>
    );
}
