import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const helvetica = localFont({
    src: [
        {
            path: "../fonts/HelvLightRegular.ttf",
            weight: "400",
            style: "latin"
        }
    ]
});

export const metadata: Metadata = {
    title: "Calendario APOD",
    description: "A calendar made with the picture of the day in each day"
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}): JSX.Element {
    return (
        <html lang="en">
            <body className={helvetica.className}>{children}</body>
        </html>
    );
}
