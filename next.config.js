/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "apod.nasa.gov",
                port: "",
                pathname: "/apod/image/**",
            },
        ],
    },
    async redirects() {
        return [
            {
                source: "/",
                destination: "/2024/1",
                permanent: true,
            }
        ];
    }
};

module.exports = nextConfig;
