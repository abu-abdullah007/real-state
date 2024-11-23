import Image from "next/image";

export default function Herosection() {
    return (
        <div className="w-full h-auto">
            <div className="container mx-auto h-[400px] p-10 bg-[#ffecec]">
                <div className="w-full h-full">
                    <Image src={'/banner.jpeg'} height={1000} width={1000} alt="root banner" className="h-full w-[1600px] object-cover rounded-2xl" />
                </div>
            </div>
        </div>
    )
}