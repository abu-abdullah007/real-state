import { ImSpinner4 } from "react-icons/im";

export default function Loading_spin() {
    return (
        <div className="w-full h-screen absolute top-0 bg-[#ddd0d088] flex justify-center items-center">
            <div className="flex justify-between items-center gap-x-5 text-4xl opacity-70">
                <p>Informations Is Loading... Please Wait</p>
                <ImSpinner4 className="animate-spin" />
            </div>
        </div>
    )
}