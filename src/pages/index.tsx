import React, { MouseEventHandler } from "react"
import { graphql } from "gatsby"
import { useTranslation, useI18next, Trans } from "gatsby-plugin-react-i18next"
import ImageUploading, { ImageListType } from "react-images-uploading"
import Card from "../components/Card"
import CuVi from "../components/CV"
import Footer from "../components/Footer"
import Seo from "../components/Seo"
import Language from "../components/Language"
import DarkToggle from "../components/DarkToggle"

const Home = () => {
  const { t } = useTranslation()
  const { language } = useI18next()

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
    // data for submit
    console.log(imageList[0])
    console.log(cvdata)
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

  const [currentEducation, setCurrentEducation] = React.useState({
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

  const [currentWork, setCurrentWork] = React.useState({
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

  return (
    <>
      <Seo lang={language} title={cvdata.name ? cvdata.name : t("My CV")} />
      <main className="container flex flex-col items-center justify-center w-full mx-auto text-primario dark:text-gray-400 dark:bg-black">
        <div className="flex flex-row items-center justify-center w-full">
          <DarkToggle css="relative mr-auto ml-8" />
          <Language />
          <a
            href="/about"
            className="p-2 px-4 my-4 ml-auto mr-8 font-bold text-blue-700 border-2 border-blue-700 rounded-xl hover:text-gray-300 hover:bg-blue-700"
          >
            <Trans>About</Trans>
          </a>
        </div>
        <h1 className="my-auto text-lg font-bold lg:text-4xl">
          <Trans>CV Maker</Trans>
        </h1>
        <p className="font-montserrat">
          <Trans>Crearemos un CV a partir de un formulario</Trans>
        </p>
        <small className="mb-8">
          <Trans>
            Actualmente no estamos validándolo, así que depende de ti introducir
            los valores correctos
          </Trans>
        </small>
        <div className="container flex flex-col items-center justify-center w-full mx-auto md:flex-row md:items-start">
          <form className="flex flex-col flex-nowrap items-center justify-start w-full max-h-[90vh] overflow-y-auto md:max-w-xs scroll-smooth md:mr-8 md:scrollbar dark:md:scrollbardark">
            <Card>
              <label htmlFor="profileImage">
                <Trans>Photo</Trans>
              </label>
              <ImageUploading value={cvdata.photo} onChange={onChange}>
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  isDragging,
                  dragProps,
                  errors,
                }) => (
                  // write your building UI
                  <div className="flex flex-col items-center w-full px-1 my-4">
                    <button
                      style={isDragging ? { color: "red" } : undefined}
                      onClick={onImageUpload}
                      className="p-4 border border-blue-700 border-dashed rounded-xl"
                      {...dragProps}
                    >
                      <Trans>Click or Drop here</Trans>
                    </button>

                    <button
                      onClick={onImageRemoveAll}
                      className="p-2 px-2 my-2 font-bold text-blue-700 border-2 border-blue-700 rounded-lg hover:text-gray-300 hover:bg-blue-700"
                    >
                      <Trans>Remove</Trans>
                    </button>
                    {imageList.map((image, index) => (
                      <div key={index} className="image-item">
                        <img src={image.dataURL} alt="photo" width="100" />
                      </div>
                    ))}
                    {errors && (
                      <div>
                        {errors.acceptType && (
                          <span className="text-red-500">
                            <Trans>File not supported</Trans>
                          </span>
                        )}
                        {errors.maxFileSize && (
                          <span className="text-red-500">
                            <Trans>File too big</Trans>
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </ImageUploading>
            </Card>
            <Card>
              <label htmlFor="full-name">
                <Trans>Nombre, cargo y resumen</Trans>
              </label>
              <input
                id="full-name"
                type="text"
                placeholder={t("Nombre completo")}
                className="px-1 my-4 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e => setCVdata({ ...cvdata, name: e.target.value })}
              />
              <input
                id="position"
                type="text"
                placeholder={t("What are you?")}
                className="px-1 my-4 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e =>
                  setCVdata({ ...cvdata, position: e.target.value })
                }
              />
              <textarea
                id="excerpt"
                placeholder={t("Summary")}
                className="px-1 my-4 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e =>
                  setCVdata({ ...cvdata, excerpt: e.target.value })
                }
              />
            </Card>
            <Card>
              <label htmlFor="address">
                <Trans>Contact info</Trans>
              </label>
              <input
                id="address"
                type="text"
                placeholder={t("Address")}
                className="px-1 my-4 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e =>
                  setCVdata({ ...cvdata, address: e.target.value })
                }
              />
              <input
                id="email"
                type="email"
                placeholder={t("E-mail")}
                className="px-1 my-4 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e => setCVdata({ ...cvdata, email: e.target.value })}
              />
              <input
                id="website"
                type="url"
                placeholder={t("Website")}
                className="px-1 my-4 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e =>
                  setCVdata({ ...cvdata, website: e.target.value })
                }
              />
              <input
                id="linkedin"
                type="url"
                placeholder={"LinkedIn"}
                className="px-1 my-4 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e =>
                  setCVdata({ ...cvdata, linkedin: e.target.value })
                }
              />
              <input
                id="twitter"
                type="url"
                placeholder={t("Twitter")}
                className="px-1 my-4 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e =>
                  setCVdata({ ...cvdata, twitter: e.target.value })
                }
              />
              <input
                id="github"
                type="url"
                placeholder={t("Github")}
                className="px-1 my-4 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e => setCVdata({ ...cvdata, github: e.target.value })}
              />
            </Card>
            <Card>
              <label htmlFor="skills">
                <Trans>Skills</Trans>
              </label>
              <input
                id="skills"
                type="text"
                placeholder={t("Skills")}
                className="px-1 my-4 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e => setCurrentSkill(e.target.value)}
                value={currentSkill}
              />
              <div className="flex flex-row items-center justify-between w-full px-2">
                <button
                  type="button"
                  onClick={addSkill}
                  className="p-2 px-2 mb-2 font-bold text-blue-700 border-2 border-blue-700 rounded-lg hover:text-gray-300 hover:bg-blue-700"
                >
                  <Trans>Add</Trans>
                </button>
                <button
                  type="button"
                  onClick={remSkill}
                  className="p-2 px-2 mb-2 font-bold text-blue-700 border-2 border-blue-700 rounded-lg hover:text-gray-300 hover:bg-blue-700"
                >
                  <Trans>Remove</Trans>
                </button>
              </div>
            </Card>
            <Card>
              <label htmlFor="languages">
                <Trans>Languajes</Trans>
              </label>
              <input
                id="languages"
                type="text"
                placeholder={t("Languajes")}
                className="px-1 my-4 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e => setCurrentLang(e.target.value)}
                value={currentLang}
              />
              <div className="flex flex-row items-center justify-between w-full px-2">
                <button
                  type="button"
                  onClick={addlanguage}
                  className="p-2 px-2 mb-2 font-bold text-blue-700 border-2 border-blue-700 rounded-lg hover:text-gray-300 hover:bg-blue-700"
                >
                  <Trans>Add</Trans>
                </button>
                <button
                  type="button"
                  onClick={remlanguage}
                  className="p-2 px-2 mb-2 font-bold text-blue-700 border-2 border-blue-700 rounded-lg hover:text-gray-300 hover:bg-blue-700"
                >
                  <Trans>Remove</Trans>
                </button>
              </div>
            </Card>
            <Card>
              <label htmlFor="education">
                <Trans>Education</Trans>
              </label>
              <input
                id="education_date"
                type="text"
                placeholder={t("Date")}
                className="px-1 my-4 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
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
                placeholder={t("Title")}
                className="px-1 my-4 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
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
                placeholder={t("Place")}
                className="px-1 my-4 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e =>
                  setCurrentEducation({
                    ...currentEducation,
                    small: e.target.value,
                  })
                }
                value={currentEducation.small}
              />
              <div className="flex flex-row items-center justify-between w-full px-2">
                <button
                  type="button"
                  onClick={addEducation}
                  className="p-2 px-2 mb-2 font-bold text-blue-700 border-2 border-blue-700 rounded-lg hover:text-gray-300 hover:bg-blue-700"
                >
                  <Trans>Add</Trans>
                </button>
                <button
                  type="button"
                  onClick={remEducation}
                  className="p-2 px-2 mb-2 font-bold text-blue-700 border-2 border-blue-700 rounded-lg hover:text-gray-300 hover:bg-blue-700"
                >
                  <Trans>Remove</Trans>
                </button>
              </div>
            </Card>
            <Card>
              <label htmlFor="work">
                <Trans>Work History</Trans>
              </label>
              <input
                id="work_date"
                type="text"
                placeholder={t("Date")}
                className="px-1 my-4 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
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
                placeholder={t("Position")}
                className="px-1 my-4 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
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
                placeholder={t("Place")}
                className="px-1 my-4 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
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
                placeholder={t("More info")}
                className="px-1 my-4 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                rows={5}
                onChange={e =>
                  setCurrentWork({
                    ...currentWork,
                    info: e.target.value,
                  })
                }
                value={currentWork.info}
              />
              <div className="flex flex-row items-center justify-between w-full px-2">
                <button
                  type="button"
                  onClick={addWork}
                  className="p-2 px-2 mb-2 font-bold text-blue-700 border-2 border-blue-700 rounded-lg hover:text-gray-300 hover:bg-blue-700"
                >
                  <Trans>Add</Trans>
                </button>
                <button
                  type="button"
                  onClick={remWork}
                  className="p-2 px-2 mb-2 font-bold text-blue-700 border-2 border-blue-700 rounded-lg hover:text-gray-300 hover:bg-blue-700"
                >
                  <Trans>Remove</Trans>
                </button>
              </div>
            </Card>
            <Card>
              <label htmlFor="projects">
                <Trans>Projects</Trans>
              </label>
              <input
                id="projects_date"
                type="text"
                placeholder={t("Date")}
                className="px-1 my-4 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
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
                placeholder={t("Position")}
                className="px-1 my-4 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
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
                placeholder={t("Place")}
                className="px-1 my-4 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
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
                placeholder={t("More info")}
                className="px-1 my-4 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                rows={5}
                onChange={e =>
                  setCurrentProject({
                    ...currentProject,
                    info: e.target.value,
                  })
                }
                value={currentProject.info}
              />
              <div className="flex flex-row items-center justify-between w-full px-2">
                <button
                  type="button"
                  onClick={addProject}
                  className="p-2 px-2 mb-2 font-bold text-blue-700 border-2 border-blue-700 rounded-lg hover:text-gray-300 hover:bg-blue-700"
                >
                  <Trans>Add</Trans>
                </button>
                <button
                  type="button"
                  onClick={remProject}
                  className="p-2 px-2 mb-2 font-bold text-blue-700 border-2 border-blue-700 rounded-lg hover:text-gray-300 hover:bg-blue-700"
                >
                  <Trans>Remove</Trans>
                </button>
              </div>
            </Card>
            <Card>
              <label htmlFor="awards">
                <Trans>Awards</Trans>
              </label>
              <input
                id="award_date"
                type="text"
                placeholder={t("Date")}
                className="px-1 my-4 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
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
                placeholder={t("Title")}
                className="px-1 my-4 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
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
                placeholder={t("Place")}
                className="px-1 my-4 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e =>
                  setCurrentAward({
                    ...currentAward,
                    small: e.target.value,
                  })
                }
                value={currentAward.small}
              />
              <div className="flex flex-row items-center justify-between w-full px-2">
                <button
                  type="button"
                  onClick={addAward}
                  className="p-2 px-2 mb-2 font-bold text-blue-700 border-2 border-blue-700 rounded-lg hover:text-gray-300 hover:bg-blue-700"
                >
                  <Trans>Add</Trans>
                </button>
                <button
                  type="button"
                  onClick={remAward}
                  className="p-2 px-2 mb-2 font-bold text-blue-700 border-2 border-blue-700 rounded-lg hover:text-gray-300 hover:bg-blue-700"
                >
                  <Trans>Remove</Trans>
                </button>
              </div>
            </Card>
            <Card>
              <label htmlFor="publications">
                <Trans>Publications</Trans>
              </label>
              <input
                id="publication_date"
                type="text"
                placeholder={t("Date")}
                className="px-1 my-4 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
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
                placeholder={t("Title")}
                className="px-1 my-4 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
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
                placeholder={t("Place")}
                className="px-1 my-4 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e =>
                  setCurrentPublication({
                    ...currentPublication,
                    small: e.target.value,
                  })
                }
                value={currentPublication.small}
              />
              <div className="flex flex-row items-center justify-between w-full px-2">
                <button
                  type="button"
                  onClick={addPublication}
                  className="p-2 px-2 mb-2 font-bold text-blue-700 border-2 border-blue-700 rounded-lg hover:text-gray-300 hover:bg-blue-700"
                >
                  <Trans>Add</Trans>
                </button>
                <button
                  type="button"
                  onClick={remPublication}
                  className="p-2 px-2 mb-2 font-bold text-blue-700 border-2 border-blue-700 rounded-lg hover:text-gray-300 hover:bg-blue-700"
                >
                  <Trans>Remove</Trans>
                </button>
              </div>
            </Card>
            <Card>
              <label htmlFor="interests">
                <Trans>Interests</Trans>
              </label>
              <input
                id="interest_date"
                type="text"
                placeholder={t("Date")}
                className="px-1 my-4 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
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
                placeholder={t("Title")}
                className="px-1 my-4 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
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
                placeholder={t("Place")}
                className="px-1 my-4 dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-white "
                onChange={e =>
                  setCurrentInterest({
                    ...currentInterest,
                    small: e.target.value,
                  })
                }
                value={currentInterest.small}
              />
              <div className="flex flex-row items-center justify-between w-full px-2">
                <button
                  type="button"
                  onClick={addInterest}
                  className="p-2 px-2 mb-2 font-bold text-blue-700 border-2 border-blue-700 rounded-lg hover:text-gray-300 hover:bg-blue-700"
                >
                  <Trans>Add</Trans>
                </button>
                <button
                  type="button"
                  onClick={remInterest}
                  className="p-2 px-2 mb-2 font-bold text-blue-700 border-2 border-blue-700 rounded-lg hover:text-gray-300 hover:bg-blue-700"
                >
                  <Trans>Remove</Trans>
                </button>
              </div>
            </Card>

            {/* <button
              className="px-4 border border-primario rounded-xl"
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
