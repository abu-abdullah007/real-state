"use client"
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import BigLoading from '@/components/atoms/BigLoading';

export default function ProjectDetails() {
    const params = useParams();
    const projectId = params.slug;
    const { projects } = useSelector((state: RootState) => state.api);

    const project = projects?.find((p) => p._id === projectId);

    if (!project) {
        return <BigLoading />
    }

    return (
        <div className="container mx-auto flex justify-center items-center pt-10">
            <div className="w-4/5 shadow shadow-[#00000096] p-4 rounded">
                <h1 className="text-3xl font-bold mb-4">{project.projectTitle}</h1>
                <div className="gap-4 space-y-5">
                    <div>
                        <Image
                            src={'/img.jpeg'}
                            alt={project.projectTitle}
                            width={1000}
                            height={1000}
                            className="w-full h-auto max-h-[500px] rounded-lg object-cover"
                        />
                    </div>
                    <div className="w-full flex justify-between flex-col sm:flex-row gap-y-10">
                        <div className='w-1/2'>
                            <h2 className="text-xl font-semibold mb-2">Project Details</h2>
                            <div className="space-y-2">
                                <p><strong>Location:</strong> {project.projectLocation?.address}</p>
                                <p><strong>Type:</strong> {project.projectType}</p>
                                <p><strong>Status:</strong> {project.projectStatus}</p>
                                <p><strong>Floor:</strong> {project.floorNo}</p>
                                <p><strong>Bedrooms:</strong> {project.bedroomNo}</p>
                                <p><strong>Bathrooms:</strong> {project.bathroomNo}</p>
                                <p><strong>Balconies:</strong> {project.balconyNo}</p>
                                <p><strong>Flat Size:</strong> {project.flatSize} sqft</p>
                                <p><strong>Parking Slots:</strong> {project.carParkingSlot}</p>
                            </div>
                        </div>
                        <div className="w-1/2 h-full">
                            <h2 className="text-xl font-semibold mb-2">More Details</h2>
                            <div className="space-y-2">
                                <p><strong>Sale Status: </strong>{project.salesStatus}</p>
                                <p><strong>Land Area: </strong>{project.landArea}</p>
                                <p><strong>CCTV Access Role: </strong>{project.cctvAccessRole}</p>
                                <p><strong>Car Parking Slot: </strong>{project.carParkingSlot}</p>
                                <p><strong>Project Features: </strong>{project.projectFeatures?.map(f => f.name).join(', ')}</p>
                                <p><strong>Project Facilities: </strong>{project.facilities?.map(f => f.facility).join(', ')}</p>
                            </div>
                        </div>
                    </div>
                    <p className='bg-[#d8b4b4] px-10 py-3 text-center md:text-end'>
                        <strong>Category: </strong>#{project.category?.categoryName || 'No Category Added'}
                    </p>
                </div>
            </div>
        </div>
    );
}