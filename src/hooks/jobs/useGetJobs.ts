import { gql, useQuery } from "@apollo/client";
import { Job } from "../../interfaces/job";

const GET_JOBS = gql`
    query GetJobs {
        jobs {
          id
          title
          locationNames
          company {
            name
            logoUrl
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