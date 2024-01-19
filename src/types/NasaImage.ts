export type NasaImage = {
    copyright?: string,
    date: string,
    explanation: string,
    hdurl?: string,
    media_type: string,
    service_version: string,
    title: string,
    url: string
}

export const MediaTypes = Object.freeze({
    Image: "image",
    Video: "video",
});