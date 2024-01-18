import Image from "next/image";
import DayEmpty from "./dayEmpty";
import DayNumber from "./dayNumber";

interface DayWithImageProps {
    mediaUrl: string,
    mediaType: string,
    children: React.ReactNode
}

export default function DayWithImage({ children, mediaUrl, mediaType }: DayWithImageProps): JSX.Element {
    return (
        <button
            className="max-w-20 sm:w-20 h-20"
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
            <DayNumber>{children}</DayNumber>
        </button>
    );
}