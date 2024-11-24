import { FaRegSadTear } from "react-icons/fa";

export default function Error() {
    return (
        <div className="w-full h-screen absolute top-0 bg-[#ffffffbd] flex justify-center items-center">
            <div className="flex justify-between items-center text-5xl opacity-70 gap-x-10">
                <p>Unable To Fetch Data</p>
                <FaRegSadTear className="text-[#0000ff9d]" />
            </div>
        </div>
    )
}