import { MediaTypes, NasaImage } from "@/types/nasa-image";
import Image from "next/image";
import { SyntheticEvent } from "react";

interface DayModalProps {
    show: boolean,
    nasaImage: NasaImage,
    closeModal: () => void
}

export default function DayModal({ show, nasaImage, closeModal }: DayModalProps): JSX.Element {
    return (
        <>
            {
                show &&
                <div
                    className="absolute bottom-0 left-0 w-full h-full flex flex-col items-center justify-center z-20 modal-animation bg-black/50"
                >
                    <div className="relative flex items-start md:top-4 top-6">
                        <button onClick={closeModal}
                            className="w-8 h-8 rounded-full bg-black text-white text-lg flex items-center justify-center"
                        >
                                ✖
                        </button>
                    </div>
                    {
                        nasaImage.media_type === MediaTypes.Image
                            ? <Image
                                src={nasaImage.hdurl ? nasaImage.hdurl : nasaImage.url}
                                alt={"Astronomy Picture of the Day"}
                                width={1000}
                                height={1000}
                                quality={100}
                                className="sm:rounded md:p-1 p-2 md:bg-white bg-transparent rounded max-w-full max-h-3/4"
                                onLoad={(e: SyntheticEvent<HTMLImageElement, Event>) => {
                                    const imageElement = e.target as HTMLImageElement;
                                    if (imageElement) {
                                        imageElement.classList.add("w-auto");
                                    }
                                }}
                            ></Image>
                            : <iframe
                                className="aspect-video md:w-3/4 w-full p-2 md:bg-white bg-transparent rounded"
                                src={nasaImage.url}
                            />
                    }
                </div>
            }
        </>
    );
}