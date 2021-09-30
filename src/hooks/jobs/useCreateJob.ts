import { gql, useMutation } from "@apollo/client";

interface PostJobInput {
    variables: {
        input: {
          title: string;
          commitmentId: string,
          companyName: string;
          locationNames: string;
          userEmail: string
          description: string
          applyUrl: string
        }
    }
}

const CREATE_JOB = gql`
    mutation postJob($input: PostJobInput!) {
        postJob(input: $input) {
            id
            company {
              name
            }
            locationNames
            userEmail
            description
            applyUrl
        }
    }
`

export const useCreateJob = (): ((
    input: PostJobInput,
) => any) => {
    const [postJob] = useMutation(CREATE_JOB, {
        update(cache, { data: { postJob } }) {
            cache.modify({
                fields: {
                    jobs(existingJobs = []) {
                        const newJobRef = cache.writeFragment({
                            data: postJob,
                            fragment: gql`
                                fragment newJob on Job {
                                   id,
                                  company {
                                    name
                                  },
                                  locationNames,
                                  userEmail,
                                  description,
                                  applyUrl
                                }
                            `
                        });
                        return [...existingJobs, newJobRef]
                    },
                },
            });
        },
    });
    return postJob
}