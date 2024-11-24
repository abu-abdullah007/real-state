export interface ProjectLocation {
    address: string;
}

export interface Image {
    id: string;
    path: string;
    caption: string;
}

export interface Category {
    categoryName: string;
}

export interface ProjectFeature {
    name: string;
}

export interface Facility {
    facility: string;
}

export interface Project {
    _id: string;
    projectTitle: string;
    thumbnailImage: string;
    floorNo: number;
    bedroomNo: number;
    bathroomNo: number;
    balconyNo: number;
    unitNo: number;
    flatSize: number;
    projectType: string;
    projectStatus: string;
    projectLocation: ProjectLocation;
    images: Image[];
    category: Category;
    salesStatus: string;
    landArea: number;
    cctvAccessRole: string;
    carParkingSlot: number;
    projectFeatures: ProjectFeature[];
    facilities: Facility[];
}

export interface ProjectMeta {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
}

export interface ProjectsData {
    getProjects: {
        projects: Project[];
        meta: ProjectMeta;
    }
}
