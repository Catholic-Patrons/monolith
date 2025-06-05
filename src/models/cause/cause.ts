export interface Cause {
    id: number
    title: string
    description: string
    donationLink: string
    thumbnailUrl: string
    start: number
    end?: number
    goal: number
    raised: number
    tags: string[]
}