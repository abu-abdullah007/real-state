"use client"
import Image from "next/image"
import { useRouter } from "next/navigation";
import { Project } from "../../../types/project";

interface CardPropType {   /// type defs for data object
    data: {
        getProjects: {
            projects: Project[]
        }
    }
}

export default function Cards({ data }: CardPropType) {
    const router = useRouter()  // using router for push slug in url bar

    return (
        <div className="w-full p-5">
            <div className="container mx-auto grid grid-cols-4 gap-5">
                {data?.getProjects?.projects.map((project: Project, index: number) => (
                    <div key={index} className="w-full min-w-[300px] h-[300px] bg-[#b3fffb] rounded-xl flex flex-col justify-between items-center p-2" onClick={() => {
                        router.push(`/detelse/${[project._id]}`,)       // dynamic slug generate from _id proparti
                    }}>
                        <div className="h-full w-full flex justify-center items-center">
                            <Image
                                src={'/img.jpeg'}                       // card thumbneil image
                                height={1000}
                                width={1000}
                                alt={project.projectTitle || 'Project Image'}
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                        <div className="h-full w-full flex justify-between overflow-hidden">
                            <div className="flex flex-col h-full text-[#000000b4] font-sans w-2/3 justify-between overflow-hidden p-2">
                                <p className="whitespace-nowrap text-xs">{project.projectTitle}</p>
                                <p>{project.category?.categoryName}</p>
                                <p className="text-[red] flex gap-3 items-center">
                                    <span className={`inline-flex ${project.projectStatus === 'Upcoming' ? 'bg-[#ffff00c7]' : project.projectStatus === 'Ongoing' ? 'bg-red-600' : 'bg-blue-500'} w-4 h-4 rounded-full`}></span>
                                    {project.projectStatus}               {/* dynamic color adding for status indicator */}
                                </p>
                            </div>
                            <div className="w-1/3 h-full flex justify-center items-center text-center p-4">
                                <p className="text-sm">{project.projectLocation?.address}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}