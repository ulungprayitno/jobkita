import { Company } from "./company";

export interface Job {
  id: string
  title: string
  locationNames: string
  company: Company
}