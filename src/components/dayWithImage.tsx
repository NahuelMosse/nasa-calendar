import Image from "next/image";

interface DayWithImageProps {
    imageUrl: string,
    children: React.ReactNode
}

export default function Day({ children, imageUrl }: DayWithImageProps): JSX.Element {
    return (
        <div
            className="w-20 h-20 rounded bg-cover"
        >
            <Image
                src={imageUrl}
                alt={"Astronomy Picture of the Day"}
                width={500}
                height={500}
                className="w-full h-full rounded"
            ></Image>
            <div className="relative bottom-3 flex justify-center">
                <span className="w-5.5 h-5.5 rounded-full bg-black text-white text-sm flex items-center justify-center">
                    {children}
                </span>
            </div>
        </div>
    );
}