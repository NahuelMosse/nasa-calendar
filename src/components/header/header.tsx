import { getTodayLink } from "@/utils/dateUtils";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
    title: string
}

export default function Header({ title }: HeaderProps): JSX.Element {
    return (
        <header className="w-full flex flex-col items-center pb-2 pt-1 grey-background">
            <div className="max-w-2xl w-full px-2">
                <div className="flex gap-1 items-center">
                    <Link href={getTodayLink()}>
                        <Image
                            src="/images/NASA_logotype.svg"
                            alt={""}
                            width={100}
                            height={28}
                        ></Image>
                    </Link>
                    <h1 className="text-4xl text-center font-light">{title}</h1>
                </div>
                <div className="flex justify-between">
                    <p className="w-40 text-xs font-light">
                        National Aeronautic and
                        <br />
                        Space Administration
                    </p>
                </div>
            </div>
        </header>
    );
}