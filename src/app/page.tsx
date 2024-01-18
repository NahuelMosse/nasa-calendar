import Header from "@/components/header/header";
import Image from "next/image";

export default function Home(): JSX.Element {
    return (
        <main className="flex flex-col justify-between gap-4 items-center">
            <Header title="Calendar"></Header>
            <footer className="w-full text-center px-4 bg-black flex justify-center">
                <Image
                    src="/images/NASA_logo.svg"
                    alt={"NASA logo"}
                    width={60}
                    height={60}
                    className="m-2"
                ></Image>
            </footer>
        </main>
    );
}
