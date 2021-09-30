import { gql, useQuery } from "@apollo/client";
import { Job } from "../../interfaces/job";

interface JobOrderByInput {
  variables: {
    orderBy?: string
  }
}

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
    query GetFilterJobs($orderBy: JobOrderByInput!) {
        cities{
          jobs(orderBy: $orderBy){
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

export const useGetFilterJobs = (orderBy: JobOrderByInput): Job[] | undefined => {
  const { data } = useQuery(GET_FILTER_JOBS, {
      ...orderBy
  });

  console.log(data)
  return data?.jobs;
}