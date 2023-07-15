import React, { MouseEventHandler } from "react"
import { graphql } from "gatsby"
import { useTranslation, useI18next, Trans } from "gatsby-plugin-react-i18next"
import ImageUploading, { ImageListType } from "react-images-uploading"
import Card from "../components/Card"
import CuVi from "../components/CV"
import Footer from "../components/Footer"
import Seo from "../components/Seo"
import Language from "../components/Language"
import Themes from "../components/Themes"

import Photo from "../components/Photo"
import NameSection from "../components/NameSection"
import ContactSection from "../components/ContactSection"
import SkillsSection from "../components/SkillsSection"
import LanguagesSection from "../components/LanguagesSection"
import EducationSection from "../components/EducationSection"
import WorkHistorySection from "../components/WorkHistorySection"
import ProjectsSection from "../components/ProjectsSection"
import AwardsSection from "../components/AwardsSection"
import PublicationsSection from "../components/PublicationsSection"
import InterestsSection from "../components/InterestsSection"

const Home = () => {
  const { t } = useTranslation()
  const { language } = useI18next()

  const emptycvdata: CVData = {
    photo: [],
    name: "",
    position: "",
    address: "",
    email: "",
    website: "",
    twitter: "",
    linkedin: "",
    github: "",
    skills: [],
    languages: [],
    education: [],
    work: [],
    projects: [],
    awards: [],
    publications: [],
    interests: [],
    excerpt: "",
  }
  const [cvdata, setCVdata] = React.useState<CVData>(emptycvdata)

  React.useEffect(() => {
    setCVdata(
      JSON.parse(localStorage.getItem("cvdata") || JSON.stringify(emptycvdata))
    )
  }, [])

  React.useEffect(() => {
    localStorage.setItem("cvdata", JSON.stringify(cvdata))
  }, [cvdata])

  const onChange = (imageList: ImageListType) => {
    setCVdata({ ...cvdata, photo: imageList })
  }

  const [currentLang, setCurrentLang] = React.useState("")
  const addlanguage = () => {
    const newLangs = cvdata.languages
      ? [...cvdata.languages, currentLang]
      : [currentLang]
    setCVdata({ ...cvdata, languages: newLangs })
    setCurrentLang("")
  }
  const remlanguage = () => {
    const newLangs = cvdata.languages ? cvdata.languages.slice(0, -1) : []
    setCVdata({ ...cvdata, languages: newLangs })
    setCurrentLang("")
  }

  const [currentSkill, setCurrentSkill] = React.useState("")
  const addSkill = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const newSkills = cvdata.skills
      ? [...cvdata.skills, currentSkill]
      : [currentSkill]
    setCVdata({ ...cvdata, skills: newSkills })
    setCurrentSkill("")
  }
  const remSkill = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const newSkills = cvdata.skills ? cvdata.skills.slice(0, -1) : []
    setCVdata({ ...cvdata, skills: newSkills })
    setCurrentSkill("")
  }

  const [currentEducation, setCurrentEducation] = React.useState<Education>({
    date: "",
    title: "",
    small: "",
  })
  const addEducation = () => {
    const newEducation = cvdata.education
      ? [...cvdata.education, currentEducation]
      : [currentEducation]
    setCVdata({ ...cvdata, education: newEducation })
    setCurrentEducation({
      date: "",
      title: "",
      small: "",
    })
  }
  const remEducation = () => {
    const newEducation = cvdata.education ? cvdata.education.slice(0, -1) : []
    setCVdata({ ...cvdata, education: newEducation })
    setCurrentEducation({
      date: "",
      title: "",
      small: "",
    })
  }

  const [currentWork, setCurrentWork] = React.useState<Work>({
    date: "",
    position: "",
    small: "",
    info: "",
  })
  const addWork = () => {
    const newWork = cvdata.work ? [...cvdata.work, currentWork] : [currentWork]
    setCVdata({ ...cvdata, work: newWork })
    setCurrentWork({
      date: "",
      position: "",
      small: "",
      info: "",
    })
  }
  const remWork = () => {
    const newWork = cvdata.work ? cvdata.work.slice(0, -1) : []
    setCVdata({ ...cvdata, work: newWork })
    setCurrentWork({
      date: "",
      position: "",
      small: "",
      info: "",
    })
  }

  const [currentProject, setCurrentProject] = React.useState({
    date: "",
    title: "",
    url: "",
    info: "",
  })
  const addProject = () => {
    const newProject = cvdata.projects
      ? [...cvdata.projects, currentProject]
      : [currentProject]
    setCVdata({ ...cvdata, projects: newProject })
    setCurrentProject({
      date: "",
      title: "",
      url: "",
      info: "",
    })
  }
  const remProject = () => {
    const newProject = cvdata.projects ? cvdata.projects.slice(0, -1) : []
    setCVdata({ ...cvdata, projects: newProject })
    setCurrentProject({
      date: "",
      title: "",
      url: "",
      info: "",
    })
  }

  const [currentAward, setCurrentAward] = React.useState({
    date: "",
    title: "",
    small: "",
  })
  const addAward = () => {
    const newAward = cvdata.awards
      ? [...cvdata.awards, currentAward]
      : [currentAward]
    setCVdata({ ...cvdata, awards: newAward })
    setCurrentAward({
      date: "",
      title: "",
      small: "",
    })
  }
  const remAward = () => {
    const newAward = cvdata.awards ? cvdata.awards.slice(0, -1) : []
    setCVdata({ ...cvdata, awards: newAward })
    setCurrentAward({
      date: "",
      title: "",
      small: "",
    })
  }

  const [currentPublication, setCurrentPublication] = React.useState({
    date: "",
    title: "",
    small: "",
  })
  const addPublication = () => {
    const newPublication = cvdata.publications
      ? [...cvdata.publications, currentPublication]
      : [currentPublication]
    setCVdata({ ...cvdata, publications: newPublication })
    setCurrentPublication({
      date: "",
      title: "",
      small: "",
    })
  }
  const remPublication = () => {
    const newPublication = cvdata.publications
      ? cvdata.publications.slice(0, -1)
      : []
    setCVdata({ ...cvdata, publications: newPublication })
    setCurrentPublication({
      date: "",
      title: "",
      small: "",
    })
  }

  const [currentInterest, setCurrentInterest] = React.useState({
    date: "",
    title: "",
    small: "",
  })
  const addInterest = () => {
    const newInterest = cvdata.interests
      ? [...cvdata.interests, currentInterest]
      : [currentInterest]
    setCVdata({ ...cvdata, interests: newInterest })
    setCurrentInterest({
      date: "",
      title: "",
      small: "",
    })
  }
  const remInterest = () => {
    const newInterest = cvdata.interests ? cvdata.interests.slice(0, -1) : []
    setCVdata({ ...cvdata, interests: newInterest })
    setCurrentInterest({
      date: "",
      title: "",
      small: "",
    })
  }

  const updateCV = (name: keyof CVData) => (e: React.ChangeEvent<HTMLInputElement>) => setCVdata({ ...cvdata, [name]: e.target.value })

  const updateEducation = (name: keyof Education) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setCurrentEducation({ ...currentEducation, [name]: e.target.value })

  const updateWorkHistory = (name: keyof Work) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setCurrentWork({ ...currentWork, [name]: e.target.value })

  const updateProject = (name: keyof Project) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setCurrentProject({ ...currentProject, [name]: e.target.value })

  const updateAward = (name: keyof Education) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setCurrentAward({ ...currentAward, [name]: e.target.value })

  const updatePublication = (name: keyof Education) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setCurrentPublication({ ...currentPublication, [name]: e.target.value })

  const updateInterest = (name: keyof Education) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setCurrentInterest({ ...currentInterest, [name]: e.target.value })

  return (
    <>
      <Seo lang={language} title={cvdata.name ? cvdata.name : t("My CV")} />
      <main className="container flex flex-col justify-center items-center mx-auto w-full">
        <div className="flex flex-row justify-center items-center w-full">
          <Themes />
          <Language />
          <a
            href="/about"
            //className="p-2 px-4 m-auto my-4 font-bold rounded-xl border-2 text-primary border-primary hover:text-secondary hover:bg-primary"
            className="mx-auto my-4 btn btn-primary"
          >
            <Trans>About</Trans>
          </a>
        </div>
        <div className="flex justify-center items-center mb-2">
          <h1 className="my-auto text-lg font-bold uppercase lg:text-4xl">
            <Trans>CV Maker</Trans>
          </h1>
          <p className="px-4 font-montserrat">
            <Trans>Crearemos un CV a partir de un formulario</Trans>
          </p>
        </div>
        <div className="container flex flex-col justify-center items-center mx-auto w-full md:flex-row md:items-start">
          <form className="flex flex-col flex-nowrap items-center justify-start w-full max-h-[90vh] overflow-y-auto md:max-w-xs scroll-smooth md:mr-8 scrollbar-thin scrollbar-thumb-current scrollbar-track-transparent">
            <Photo
              value={cvdata.photo}
              onChange={onChange}
            />

            <NameSection
              onNameChange={updateCV('name')}
              onPositionChange={updateCV('position')}
              onExcerptChange={updateCV('excerpt')}
              data={cvdata}
            />

            <ContactSection
              updateCV={updateCV}
              data={cvdata}
            />

            <SkillsSection
              currentSkill={currentSkill}
              setCurrentSkill={setCurrentSkill}
              addSkill={addSkill}
              remSkill={remSkill}
            />

            <LanguagesSection
              currentLang={currentLang}
              setCurrentLang={setCurrentLang}
              remlanguage={remlanguage}
              addlanguage={addlanguage}
            />

            <EducationSection
              updateEducation={updateEducation}
              currentEducation={currentEducation}
              addEducation={addEducation}
              remEducation={remEducation}
            />

            <WorkHistorySection
              currentWork={currentWork}
              updateWorkHistory={updateWorkHistory}
              addWork={addWork}
              remWork={remWork}
            />

            <ProjectsSection
              updateProject={updateProject}
              currentProject={currentProject}
              addProject={addProject}
              remProject={remProject}
            />

            <AwardsSection
              currentAward={currentAward}
              updateAward={updateAward}
              addAward={addAward}
              remAward={remAward}
            />

            <PublicationsSection
              currentPublication={currentPublication}
              updatePublication={updatePublication}
              addPublication={addPublication}
              remPublication={remPublication}
            />

            <InterestsSection
              currentInterest={currentInterest}
              updateInterest={updateInterest}
              addInterest={addInterest}
              remInterest={remInterest}
            />
          </form>
          <div className="sticky top-0">
            <CuVi cvdata={cvdata} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home
export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
