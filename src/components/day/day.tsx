"use client";

import Image from "next/image";
import DayEmpty from "./dayEmpty";
import DayNumber from "./dayNumber";
import { useState } from "react";
import DayModal from "./dayModal";
import { NasaImage } from "@/types/NasaImage";

interface DayProps {
    nasaImage: NasaImage,
    children: React.ReactNode
}

export default function Day({ children, nasaImage }: DayProps): JSX.Element {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(!showModal);
    };
    
    return (
        <>
            <button onClick={handleClick}
                className="max-w-20 sm:w-20 h-20"
            >
                <div className="relative w-full h-full">
                    {
                        nasaImage.media_type === "image"
                            ?
                            <Image
                                src={nasaImage.url}
                                alt={"Astronomy Picture of the Day"}
                                fill
                                className="w-full h-full sm:rounded"
                                sizes="80px"
                                style={{ objectFit: "cover" }}
                            ></Image>
                            :   <DayEmpty></DayEmpty>
                    }
                </div>
                <DayNumber>{children}</DayNumber>
            </button>
            {
                nasaImage.media_type === "image" &&
                <DayModal 
                    closeModal={handleClick}
                    mediaUrl={nasaImage.hdurl ? nasaImage.hdurl : nasaImage.url}
                    show={showModal}
                ></DayModal>
            }
        </>
    );
}