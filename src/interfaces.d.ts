interface CVData {
    photo: ImageListType
    name: string
    position: string
    address: string
    email: string
    website: string
    twitter: string
    linkedin: string
    github: string
    skills: string[]
    languages: string[]
    education: any[]
    work: any[]
    projects: any[]
    awards: any[]
    publications: any[]
    interests: any[]
    excerpt: string
}

interface SeoProps {
    description?: string,
    lang?: string,
    meta?: any,
    title: string,
}

interface SeoQuery {
    site: {
        siteMetadata: {
            title: string
            description: string
            social: {
                twitter: string
            }
        }
    }
}


interface PhotoI {
    value: ImageListType
    onChange: (imageList: ImageListType) => void
}

interface NameSectionI {
    onNameChange: (e: any) => void
    onPositionChange: (e: any) => void
    onExcerptChange: (e: any) => void
    data: CVData
}

interface ContactSectionI {
    updateCV: (name: keyof CVData) => (e: React.ChangeEvent<HTMLInputElement>) => void
    data: CVData
}

interface SkillsSectionI {
    currentSkill: string
    setCurrentSkill: (value: React.SetStateAction<string>) => void
    addSkill: (event: React.MouseEvent<HTMLButtonElement>) => void
    remSkill: (event: React.MouseEvent<HTMLButtonElement>) => void
}

interface LanguagesSectionI {
    currentLang: string
    setCurrentLang: (value: React.SetStateAction<string>) => void
    addlanguage: (event: React.MouseEvent<HTMLButtonElement>) => void
    remlanguage: (event: React.MouseEvent<HTMLButtonElement>) => void
}

interface Education {
    date: string
    title: string
    small: string
}

interface EducationSectionI {
    updateEducation: (name: keyof Education) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    currentEducation: Education
    addEducation: (event: React.MouseEvent<HTMLButtonElement>) => void
    remEducation: (event: React.MouseEvent<HTMLButtonElement>) => void
}

interface Work {
    date: string
    position: string
    small: string
    info: string
}

interface Project {
    date: string
    title: string
    url: string
    info: string
}

interface WorkHistorySectionI {
    currentWork: Work
    updateWorkHistory: (name: keyof Work) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    addWork: (event: React.MouseEvent<HTMLButtonElement>) => void
    remWork: (event: React.MouseEvent<HTMLButtonElement>) => void
}

interface ProjectsSectionI {
    currentProject: Project
    updateProject: (name: keyof Project) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    addProject: (event: React.MouseEvent<HTMLButtonElement>) => void
    remProject: (event: React.MouseEvent<HTMLButtonElement>) => void
}

interface AwardsSectionI {
    currentAward: Education
    updateAward: (name: keyof Education) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    addAward: (event: React.MouseEvent<HTMLButtonElement>) => void
    remAward: (event: React.MouseEvent<HTMLButtonElement>) => void
}

interface InterestsSectionI {
    currentInterest: Education
    updateInterest: (name: keyof Education) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    addInterest: (event: React.MouseEvent<HTMLButtonElement>) => void
    remInterest: (event: React.MouseEvent<HTMLButtonElement>) => void
}

interface PublicationsSectionI {
    currentPublication: Education
    updatePublication: (name: keyof Education) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    addPublication: (event: React.MouseEvent<HTMLButtonElement>) => void
    remPublication: (event: React.MouseEvent<HTMLButtonElement>) => void
}
