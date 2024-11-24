"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Project } from "@/types/project";
import BigLoading from "../atoms/BigLoading";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataFromAPI } from "@/features/fetchDataSlice";
import { AppDispatch, RootState } from "@/redux/store";
import Loading_spin from "../atoms/Loading_effect";
import Error from "../atoms/Error";


export default function Cards() {
    const router = useRouter()
    const dispatch = useDispatch<AppDispatch>()

    const { projects, loading, error } = useSelector((state: RootState) => state.api);

    useEffect(() => {
        dispatch(fetchDataFromAPI())
    }, [dispatch])

    if (loading) return <Loading_spin />
    if (error) return <Error />

    if (!projects) {
        return <BigLoading />
    }

    return (
        <div className="w-full p-5">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 gap-y-10">
                {projects?.map((project: Project, index: number) => (
                    <div key={index} className="w-full hover:scale-105 cursor-pointer transition active:scale-95 h-[300px] shadow shadow-[#6464645d] rounded flex flex-col justify-between items-center p-2" onClick={() => {
                        router.push(`/detelse/${project._id}`)
                    }}>
                        <div className="h-full w-full flex justify-center items-center">
                            <Image
                                src={'/banner4.jpg'}
                                height={1000}
                                width={1000}
                                alt={project.projectTitle || 'Project Image'}
                                className="w-full max-w-[300px] h-full max-h-[150px] object-cover rounded"
                            />
                        </div>
                        <div className="h-full w-full flex justify-between overflow-hidden">
                            <div className="flex flex-col h-full text-[#000000b4] font-sans w-2/3 justify-between overflow-hidden p-2">
                                <p className="whitespace-nowrap text-xs">{project.projectTitle}</p>
                                <p className="text-xs">{project.projectLocation?.address}</p>
                                <div className="flex gap-x-4 items-center">
                                    <span className={`inline-block h-4 w-4 ${project.projectStatus === 'Upcoming' ? 'bg-blue-300' : project.projectStatus === 'Completed' ? 'bg-green-500' : 'bg-red-300'} rounded-full`}></span>
                                    <p>{project.projectStatus}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}