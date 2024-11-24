import { ImSpinner9 } from "react-icons/im";

export default function BigLoading() {
    return (
        <div className="w-full h-screen absolute top-0 bg-[#ffffffbd] flex justify-center items-center">
            <div className="flex justify-between items-center text-8xl opacity-70 gap-x-10">
                <ImSpinner9 className="animate-spin text-[#34349e]" />
            </div>
        </div>
    )
}