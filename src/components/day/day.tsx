import Image from "next/image";
import DayEmpty from "./dayEmpty";

interface DayWithImageProps {
    mediaUrl: string,
    mediaType: string,
    children: React.ReactNode
}

export default function DayWithImage({ children, mediaUrl, mediaType }: DayWithImageProps): JSX.Element {
    return (
        <button
            className="max-w-20 sm:w-20 h-20 bg-cover"
        >
            {
                mediaType === "image"
                    ?
                    <Image
                        src={mediaUrl}
                        alt={"Astronomy Picture of the Day"}
                        width={80}
                        height={80}
                        className="w-full h-full sm:rounded"
                    ></Image>
                    :   <DayEmpty></DayEmpty>
            }
            
            <div className="relative bottom-3 flex justify-center">
                <span className="w-5.5 h-5.5 rounded-full bg-black text-white text-sm flex items-center justify-center">
                    {children}
                </span>
            </div>
        </button>
    );
}