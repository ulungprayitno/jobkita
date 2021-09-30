import { gql, useQuery } from "@apollo/client";

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
          title
        }
    }
`

export const useGetDetailJob = (companySlug: string, jobSlug: string) : ((
  input: JobInput,
) => any) => {
    const { data } = useQuery(GET_DETAIL_JOB, {
        variables: { imput: { companySlug: companySlug , jobSlug: jobSlug  } }
    });
    return data?.job;
}