import { Job } from "./job";

export interface City {
  id: string
  name: string
  slug: string
  type: string
  jobs: Array<Job>
}