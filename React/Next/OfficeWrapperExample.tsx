import type { Metadata } from "next";
import "./globals.css";
import OfficeLoader from "@/components/officeLoader";
export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};
export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body>
                <OfficeLoader>
                    {children}
                </OfficeLoader>
            </body>
        </html>
    );
}