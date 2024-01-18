import Image from "next/image";

interface DayModalProps {
    show: boolean,
    mediaUrl: string,
    closeModal: () => void
}

export default function DayModal({ show, mediaUrl, closeModal }: DayModalProps) {
    return (
        <>
            {
                show &&
                <div className="absolute bottom-0 left-0 w-full h-full flex items-center justify-center z-20 modal-animation bg-black/50">
                    <div className="max-w-full max-h-3/4 p-5 flex">
                        <Image
                            src={mediaUrl}
                            alt={"Astronomy Picture of the Day"}
                            width={1000}
                            height={1000}
                            quality={100}
                            className="sm:rounded p-2 bg-white rounded w-auto"
                        ></Image>
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