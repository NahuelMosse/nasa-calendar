import { MediaTypes, NasaImage } from "@/types/NasaImage";
import { getVideoId } from "@/utils/youtubeUtils";
import Image from "next/image";
import YouTube from "react-youtube";

interface DayModalProps {
    show: boolean,
    nasaImage: NasaImage,
    closeModal: () => void
}

export default function DayModal({ show, nasaImage, closeModal }: DayModalProps) {
    return (
        <>
            {
                show &&
                <div className="absolute bottom-0 left-0 w-full h-full flex items-center justify-center z-20 modal-animation bg-black/50">
                    <div className="max-w-full max-h-3/4 p-5 flex">
                        {
                            nasaImage.media_type === MediaTypes.Image
                                ? <Image
                                    src={nasaImage.hdurl ? nasaImage.hdurl : nasaImage.url}
                                    alt={"Astronomy Picture of the Day"}
                                    width={1000}
                                    height={1000}
                                    quality={100}
                                    className="sm:rounded p-2 bg-white rounded w-auto"
                                ></Image>
                                : <YouTube  videoId={getVideoId(nasaImage.url)}></YouTube>
                        }
                        
                        <div className="relative flex items-start bottom-3 right-5">
                            <button onClick={closeModal}
                                className="w-8 h-8 rounded-full bg-black text-white text-lg flex items-center justify-center"
                            >
                                ✖
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}