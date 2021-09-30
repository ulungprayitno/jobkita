import { Company } from "./company";

interface Tags {
  id: string
  name: string
  slug: string
}

export interface Job {
  id: string
  title: string
  slug: string
  locationNames: string
  company: Company
  postedAt?: string
  description?: string
  tags?: Array<Tags>
}