export type OurProgramSlideType = {
  title: string
  description: string
  button?: {
    text: string
    link: string
  }
  image?: {
    src: string
    alt: string
  }
}

export type OurProgramData = {
    title: string
    description: string
    slides?: OurProgramSlideType[]
}