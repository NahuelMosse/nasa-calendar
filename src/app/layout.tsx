import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/header";
import Image from "next/image";

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
            <body className={helvetica.className}>
                <Header title="Calendar"></Header>
                {children}
                <footer className="w-full text-center px-4 bg-black flex justify-center">
                    <Image
                        src="/images/NASA_logo.svg"
                        alt={"NASA logo"}
                        width={60}
                        height={60}
                        className="m-2"
                    ></Image>
                </footer>
            </body>
        </html>
    );
}
