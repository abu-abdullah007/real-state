import { gql } from '@apollo/client';

export const GET_PROJECTS = gql`
  query GetProjects($search: String, $page: Int, $limit: Int, $order: SortOrder, $sort: String) {
    getProjects(search: $search, page: $page, limit: $limit, order: $order, sort: $sort) {
      projects {
        _id
      projectTitle
      thumbnailImage
      floorNo
      bedroomNo
      bathroomNo
      balconyNo
      unitNo
      flatSize
      projectType
      projectStatus
      projectLocation {
        address
      }
      images {
        id
        path
        caption
      }
      category {
        categoryName
      }
      salesStatus
      landArea
      cctvAccessRole
      carParkingSlot
      projectFeatures {
        name
      }
      facilities {
        facility
      }
      }
      meta {
        page
        limit
        total
        totalPage
      }
    }
  }
`;
