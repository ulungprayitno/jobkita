import { Company } from "./company";

export interface Job {
  id: string
  title: string
  slug: string
  locationNames: string
  company: Company
}