import { gql, useQuery } from "@apollo/client";
import { Job } from "../../interfaces/job";

interface JobInput {
  variables: {
      input: {
        companySlug: string;
        jobSlug: string;
      }
  }
}

const GET_DETAIL_JOB = gql`
    query Job($input: JobInput!) {
        job (input: $input) {
          id
          title
          slug
          company {
            name
            logoUrl
          }
          description
          title
          applyUrl
          postedAt
        }
    }
`

export const useGetDetailJob = (input: JobInput): Job | undefined => {
    const { data } = useQuery(GET_DETAIL_JOB, {
      ...input
    });
    return data?.job;
}