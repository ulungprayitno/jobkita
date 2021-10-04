import { gql, useQuery } from "@apollo/client";
import { Job } from "../../interfaces/job";

const GET_JOBS = gql`
    query GetJobs {
        jobs {
          id
          title
          slug
          locationNames
          company {
            name
            slug
            logoUrl
          }
          tags {
            name
          }
        }
    }
`

export const GET_FILTER_JOBS = gql`
    query GetFilterJobs($orderBy: JobOrderByInput, $where: JobWhereInput) {
        cities{
          jobs(orderBy: $orderBy, where: $where){
            id
            locationNames
            title
            postedAt
            company {
              name
              logoUrl
            }
            tags {
              name
            }
          }
        }
    }
`

export const useGetJobs = (): Job[] | undefined => {
    const { data } = useQuery(GET_JOBS, {
        variables: { options: { paginate: { page: 1, limit: 10 } } }
    });
    return data?.jobs;
}