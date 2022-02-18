import React from "react"
import { graphql } from "gatsby"
import { useTranslation, useI18next } from "gatsby-plugin-react-i18next"
import Card from "../components/Card"
import CuVi from "../components/CV"
import Footer from "../components/Footer"
import Seo from "../components/Seo"
import Language from "../components/Language"
import DarkToggle from "../components/DarkToggle"

const Home = () => {
  const { t } = useTranslation()
  const { language } = useI18next()

  const [cvdata, setCVdata] = React.useState({
    name: "",
    position: "",
    address: "",
    email: "",
    website: "",
    twitter: "",
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
  })

  // React.useEffect(() => {
  //   setCVdata(JSON.parse(window.localStorage.getItem("cvdata")))
  // }, [])

  // React.useEffect(() => {
  //   window.localStorage.setItem("cvdata", cvdata)
  // }, [cvdata])

  const [currentLang, setCurrentLang] = React.useState("")
  const addlanguage = () => {
    const newLangs = [...cvdata.languages, currentLang]
    setCVdata({ ...cvdata, languages: newLangs })
    setCurrentLang("")
  }
  const remlanguage = () => {
    const newLangs = cvdata.languages.slice(0, -1)
    setCVdata({ ...cvdata, languages: newLangs })
    setCurrentLang("")
  }

  const [currentSkill, setCurrentSkill] = React.useState("")
  const addSkill = () => {
    const newSkills = [...cvdata.skills, currentSkill]
    setCVdata({ ...cvdata, skills: newSkills })
    setCurrentSkill("")
  }
  const remSkill = () => {
    const newSkills = cvdata.skills.slice(0, -1)
    setCVdata({ ...cvdata, skills: newSkills })
    setCurrentSkill("")
  }

  const [currentEducation, setCurrentEducation] = React.useState({
    date: "",
    title: "",
    small: "",
  })
  const addEducation = () => {
    const newEducation = [...cvdata.education, currentEducation]
    setCVdata({ ...cvdata, education: newEducation })
    setCurrentEducation({
      date: "",
      title: "",
      small: "",
    })
  }
  const remEducation = () => {
    const newEducation = cvdata.education.slice(0, -1)
    setCVdata({ ...cvdata, education: newEducation })
    setCurrentEducation({
      date: "",
      title: "",
      small: "",
    })
  }

  const [currentWork, setCurrentWork] = React.useState({
    date: "",
    position: "",
    small: "",
    info: "",
  })
  const addWork = () => {
    const newWork = [...cvdata.work, currentWork]
    setCVdata({ ...cvdata, work: newWork })
    setCurrentWork({
      date: "",
      position: "",
      small: "",
      info: "",
    })
  }
  const remWork = () => {
    const newWork = cvdata.work.slice(0, -1)
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
    const newProject = [...cvdata.projects, currentProject]
    setCVdata({ ...cvdata, projects: newProject })
    setCurrentProject({
      date: "",
      title: "",
      url: "",
      info: "",
    })
  }
  const remProject = () => {
    const newProject = cvdata.projects.slice(0, -1)
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
    const newAward = [...cvdata.awards, currentAward]
    setCVdata({ ...cvdata, awards: newAward })
    setCurrentAward({
      date: "",
      title: "",
      small: "",
    })
  }
  const remAward = () => {
    const newAward = cvdata.awards.slice(0, -1)
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
    const newPublication = [...cvdata.publications, currentPublication]
    setCVdata({ ...cvdata, publications: newPublication })
    setCurrentPublication({
      date: "",
      title: "",
      small: "",
    })
  }
  const remPublication = () => {
    const newPublication = cvdata.publications.slice(0, -1)
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
    const newInterest = [...cvdata.interests, currentInterest]
    setCVdata({ ...cvdata, interests: newInterest })
    setCurrentInterest({
      date: "",
      title: "",
      small: "",
    })
  }
  const remInterest = () => {
    const newInterest = cvdata.interests.slice(0, -1)
    setCVdata({ ...cvdata, interests: newInterest })
    setCurrentInterest({
      date: "",
      title: "",
      small: "",
    })
  }

  return (
    <>
      <Seo lang={language} title={cvdata.name ? cvdata.name : t("My CV")} />
      <main className="container mx-auto flex flex-col items-center justify-center w-full text-primario dark:text-gray-400 dark:bg-black">
        <div className="flex flex-row items-center justify-center container">
          <DarkToggle />
          <Language />
          <a
            href="/about"
            className="rounded-xl px-4 mr-8 my-4 ml-auto border-2 border-blue-700 text-blue-700 font-bold p-2 hover:text-gray-300 hover:bg-blue-700"
          >
            About
          </a>
        </div>
        <h1 className="font-bold text-lg lg:text-4xl my-auto">CV Maker</h1>
        <p className="font-montserrat">
          Crearemos un CV a partir de un formulario
        </p>
        <small className="mb-8">
          Actualmente no estamos validándolo, así que depende de ti introducir
          los valores correctos
        </small>
        <div className="flex flex-col md:flex-row w-full container mx-auto items-center md:items-start justify-center">
          <form className="flex flex-col flex-nowrap items-center justify-start w-full max-h-[90vh] overflow-y-auto md:max-w-xs scroll-smooth md:mr-8 md:scrollbar dark:md:scrollbardark">
            <Card>
              <label htmlFor="full-name">Nombre, cargo y resumen</label>
              <input
                id="full-name"
                type="text"
                placeholder="Nombre completo"
                className="my-4 px-1 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e => setCVdata({ ...cvdata, name: e.target.value })}
              />
              <input
                id="position"
                type="text"
                placeholder="What are you?"
                className="my-4 px-1 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e =>
                  setCVdata({ ...cvdata, position: e.target.value })
                }
              />
              <textarea
                id="excerpt"
                type="text"
                placeholder="Summary"
                className="my-4 px-1 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e =>
                  setCVdata({ ...cvdata, excerpt: e.target.value })
                }
              />
            </Card>
            <Card>
              <label htmlFor="address">Contact info</label>
              <input
                id="address"
                type="text"
                placeholder="Address"
                className="my-4 px-1 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e =>
                  setCVdata({ ...cvdata, address: e.target.value })
                }
              />
              <input
                id="email"
                type="email"
                placeholder="E-mail"
                className="my-4 px-1 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e => setCVdata({ ...cvdata, email: e.target.value })}
              />
              <input
                id="website"
                type="url"
                placeholder="Website"
                className="my-4 px-1 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e =>
                  setCVdata({ ...cvdata, website: e.target.value })
                }
              />
              <input
                id="twitter"
                type="url"
                placeholder="Twitter"
                className="my-4 px-1 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e =>
                  setCVdata({ ...cvdata, twitter: e.target.value })
                }
              />
              <input
                id="github"
                type="url"
                placeholder="Github"
                className="my-4 px-1 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e => setCVdata({ ...cvdata, github: e.target.value })}
              />
            </Card>
            <Card>
              <label htmlFor="skills">Skills</label>
              <input
                id="skills"
                type="text"
                placeholder="Skills"
                className="my-4 px-1 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e => setCurrentSkill(e.target.value)}
                value={currentSkill}
              />
              <div className="flex flex-row px-2 items-center justify-between w-full">
                <button
                  type="button"
                  onClick={addSkill}
                  className="border-2 border-blue-700 text-blue-700 font-bold p-2 hover:text-gray-300 hover:bg-blue-700 rounded-lg px-2 mb-2"
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={remSkill}
                  className="border-2 border-blue-700 text-blue-700 font-bold p-2 hover:text-gray-300 hover:bg-blue-700 rounded-lg px-2 mb-2"
                >
                  Remove
                </button>
              </div>
            </Card>
            <Card>
              <label htmlFor="languages">Languajes</label>
              <input
                id="languages"
                type="text"
                placeholder="Languajes"
                className="my-4 px-1 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e => setCurrentLang(e.target.value)}
                value={currentLang}
              />
              <div className="flex flex-row px-2 items-center justify-between w-full">
                <button
                  type="button"
                  onClick={addlanguage}
                  className="border-2 border-blue-700 text-blue-700 font-bold p-2 hover:text-gray-300 hover:bg-blue-700 rounded-lg px-2 mb-2"
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={remlanguage}
                  className="border-2 border-blue-700 text-blue-700 font-bold p-2 hover:text-gray-300 hover:bg-blue-700 rounded-lg px-2 mb-2"
                >
                  Remove
                </button>
              </div>
            </Card>
            <Card>
              <label htmlFor="education">Education</label>
              <input
                id="education_date"
                type="text"
                placeholder="Date"
                className="my-4 px-1 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e =>
                  setCurrentEducation({
                    ...currentEducation,
                    date: e.target.value,
                  })
                }
                value={currentEducation.date}
              />
              <textarea
                id="education_title"
                type="text"
                placeholder="Title"
                className="my-4 px-1 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e =>
                  setCurrentEducation({
                    ...currentEducation,
                    title: e.target.value,
                  })
                }
                value={currentEducation.title}
              />
              <textarea
                id="education_small"
                type="text"
                placeholder="Place"
                className="my-4 px-1 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e =>
                  setCurrentEducation({
                    ...currentEducation,
                    small: e.target.value,
                  })
                }
                value={currentEducation.small}
              />
              <div className="flex flex-row px-2 items-center justify-between w-full">
                <button
                  type="button"
                  onClick={addEducation}
                  className="border-2 border-blue-700 text-blue-700 font-bold p-2 hover:text-gray-300 hover:bg-blue-700 rounded-lg px-2 mb-2"
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={remEducation}
                  className="border-2 border-blue-700 text-blue-700 font-bold p-2 hover:text-gray-300 hover:bg-blue-700 rounded-lg px-2 mb-2"
                >
                  Remove
                </button>
              </div>
            </Card>
            <Card>
              <label htmlFor="work">Work History</label>
              <input
                id="work_date"
                type="text"
                placeholder="Date"
                className="my-4 px-1 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e =>
                  setCurrentWork({
                    ...currentWork,
                    date: e.target.value,
                  })
                }
                value={currentWork.date}
              />
              <textarea
                id="work_title"
                type="text"
                placeholder="Position"
                className="my-4 px-1 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e =>
                  setCurrentWork({
                    ...currentWork,
                    position: e.target.value,
                  })
                }
                value={currentWork.position}
              />
              <textarea
                id="work_small"
                type="text"
                placeholder="Place"
                className="my-4 px-1 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e =>
                  setCurrentWork({
                    ...currentWork,
                    small: e.target.value,
                  })
                }
                value={currentWork.small}
              />
              <textarea
                id="work_info"
                type="text"
                placeholder="More info"
                className="my-4 px-1 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                rows={5}
                onChange={e =>
                  setCurrentWork({
                    ...currentWork,
                    info: e.target.value,
                  })
                }
                value={currentWork.info}
              />
              <div className="flex flex-row px-2 items-center justify-between w-full">
                <button
                  type="button"
                  onClick={addWork}
                  className="border-2 border-blue-700 text-blue-700 font-bold p-2 hover:text-gray-300 hover:bg-blue-700 rounded-lg px-2 mb-2"
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={remWork}
                  className="border-2 border-blue-700 text-blue-700 font-bold p-2 hover:text-gray-300 hover:bg-blue-700 rounded-lg px-2 mb-2"
                >
                  Remove
                </button>
              </div>
            </Card>
            <Card>
              <label htmlFor="projects">Projects</label>
              <input
                id="projects_date"
                type="text"
                placeholder="Date"
                className="my-4 px-1 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e =>
                  setCurrentProject({
                    ...currentProject,
                    date: e.target.value,
                  })
                }
                value={currentProject.date}
              />
              <input
                id="projects_title"
                type="text"
                placeholder="Position"
                className="my-4 px-1 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e =>
                  setCurrentProject({
                    ...currentProject,
                    title: e.target.value,
                  })
                }
                value={currentProject.title}
              />
              <input
                id="projects_url"
                type="text"
                placeholder="Place"
                className="my-4 px-1 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e =>
                  setCurrentProject({
                    ...currentProject,
                    url: e.target.value,
                  })
                }
                value={currentProject.url}
              />
              <textarea
                id="projects_info"
                type="text"
                placeholder="More info"
                className="my-4 px-1 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                rows={5}
                onChange={e =>
                  setCurrentProject({
                    ...currentProject,
                    info: e.target.value,
                  })
                }
                value={currentProject.info}
              />
              <div className="flex flex-row px-2 items-center justify-between w-full">
                <button
                  type="button"
                  onClick={addProject}
                  className="border-2 border-blue-700 text-blue-700 font-bold p-2 hover:text-gray-300 hover:bg-blue-700 rounded-lg px-2 mb-2"
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={remProject}
                  className="border-2 border-blue-700 text-blue-700 font-bold p-2 hover:text-gray-300 hover:bg-blue-700 rounded-lg px-2 mb-2"
                >
                  Remove
                </button>
              </div>
            </Card>
            <Card>
              <label htmlFor="awards">Awards</label>
              <input
                id="award_date"
                type="text"
                placeholder="Date"
                className="my-4 px-1 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e =>
                  setCurrentAward({
                    ...currentAward,
                    date: e.target.value,
                  })
                }
                value={currentAward.date}
              />
              <textarea
                id="award_title"
                type="text"
                placeholder="Title"
                className="my-4 px-1 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e =>
                  setCurrentAward({
                    ...currentAward,
                    title: e.target.value,
                  })
                }
                value={currentAward.title}
              />
              <textarea
                id="award_small"
                type="text"
                placeholder="Place"
                className="my-4 px-1 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e =>
                  setCurrentAward({
                    ...currentAward,
                    small: e.target.value,
                  })
                }
                value={currentAward.small}
              />
              <div className="flex flex-row px-2 items-center justify-between w-full">
                <button
                  type="button"
                  onClick={addAward}
                  className="border-2 border-blue-700 text-blue-700 font-bold p-2 hover:text-gray-300 hover:bg-blue-700 rounded-lg px-2 mb-2"
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={remAward}
                  className="border-2 border-blue-700 text-blue-700 font-bold p-2 hover:text-gray-300 hover:bg-blue-700 rounded-lg px-2 mb-2"
                >
                  Remove
                </button>
              </div>
            </Card>
            <Card>
              <label htmlFor="publications">Publications</label>
              <input
                id="publication_date"
                type="text"
                placeholder="Date"
                className="my-4 px-1 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e =>
                  setCurrentPublication({
                    ...currentPublication,
                    date: e.target.value,
                  })
                }
                value={currentPublication.date}
              />
              <textarea
                id="publication_title"
                type="text"
                placeholder="Title"
                className="my-4 px-1 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e =>
                  setCurrentPublication({
                    ...currentPublication,
                    title: e.target.value,
                  })
                }
                value={currentPublication.title}
              />
              <textarea
                id="publication_small"
                type="text"
                placeholder="Place"
                className="my-4 px-1 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e =>
                  setCurrentPublication({
                    ...currentPublication,
                    small: e.target.value,
                  })
                }
                value={currentPublication.small}
              />
              <div className="flex flex-row px-2 items-center justify-between w-full">
                <button
                  type="button"
                  onClick={addPublication}
                  className="border-2 border-blue-700 text-blue-700 font-bold p-2 hover:text-gray-300 hover:bg-blue-700 rounded-lg px-2 mb-2"
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={remPublication}
                  className="border-2 border-blue-700 text-blue-700 font-bold p-2 hover:text-gray-300 hover:bg-blue-700 rounded-lg px-2 mb-2"
                >
                  Remove
                </button>
              </div>
            </Card>
            <Card>
              <label htmlFor="interests">Interests</label>
              <input
                id="interest_date"
                type="text"
                placeholder="Date"
                className="my-4 px-1 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e =>
                  setCurrentInterest({
                    ...currentInterest,
                    date: e.target.value,
                  })
                }
                value={currentInterest.date}
              />
              <textarea
                id="interest_title"
                type="text"
                placeholder="Title"
                className="my-4 px-1 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e =>
                  setCurrentInterest({
                    ...currentInterest,
                    title: e.target.value,
                  })
                }
                value={currentInterest.title}
              />
              <textarea
                id="interest_small"
                type="text"
                placeholder="Place"
                className="my-4 px-1 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e =>
                  setCurrentInterest({
                    ...currentInterest,
                    small: e.target.value,
                  })
                }
                value={currentInterest.small}
              />
              <div className="flex flex-row px-2 items-center justify-between w-full">
                <button
                  type="button"
                  onClick={addInterest}
                  className="border-2 border-blue-700 text-blue-700 font-bold p-2 hover:text-gray-300 hover:bg-blue-700 rounded-lg px-2 mb-2"
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={remInterest}
                  className="border-2 border-blue-700 text-blue-700 font-bold p-2 hover:text-gray-300 hover:bg-blue-700 rounded-lg px-2 mb-2"
                >
                  Remove
                </button>
              </div>
            </Card>

            {/* <button
              className="border border-primario px-4 rounded-xl"
              type="submit"
            >
              Agregar
            </button> */}
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
