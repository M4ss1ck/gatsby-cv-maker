import * as React from "react"
import { Trans } from "gatsby-plugin-react-i18next"
import Pdf from "react-to-pdf"
import { ImageListType } from "react-images-uploading"
import { useElementSize, useWindowSize } from "usehooks-ts"

interface CVData {
  cvdata: {
    photo: ImageListType
    name: string
    position: string
    address: string
    email: string
    website: string
    linkedin: string
    twitter: string
    github: string
    skills: string[]
    languages: string[]
    education: any[]
    work: any[]
    projects: any[]
    awards: { date: string; title: string; small: string }[]
    publications: any[]
    interests: any[]
    excerpt: string
  }
}

const CV: React.FC<CVData> = ({ cvdata }) => {
  const ref = React.createRef() as React.RefObject<HTMLDivElement>

  // using https://usehooks-ts.com/react-hook/use-element-size
  const [articleRef, { height }] = useElementSize()
  // https://usehooks-ts.com/react-hook/use-window-size
  const { width } = useWindowSize()

  return (
    <>
      <div ref={ref}>
        <article
          className="container grid max-w-screen-lg grid-cols-1 mx-auto sm:grid-cols-3 font-montserrat"
          ref={articleRef}
        >
          <section className="text-center text-white break-all bg-primario md:text-left">
            {cvdata.photo[0] && (
              <img src={cvdata.photo[0].dataURL} alt="photo" className="p-2" />
            )}
            <h1 className="p-2 text-2xl font-extrabold break-normal break-words md:text-4xl">
              {cvdata.name}
            </h1>
            <p className="px-4">{cvdata.position}</p>
            {(cvdata.address ||
              cvdata.email ||
              cvdata.website ||
              cvdata.linkedin ||
              cvdata.twitter ||
              cvdata.github) && (
              <h1 className="flex justify-center px-2 mt-4 text-lg font-bold bg-primario">
                <Trans>Contact</Trans>
              </h1>
            )}
            {cvdata.address && (
              <h2 className="flex justify-center px-4 mt-2 font-bold">
                <Trans>Address</Trans>
              </h2>
            )}
            {cvdata.address && (
              <p className="flex justify-center px-4">{cvdata.address}</p>
            )}
            {cvdata.email && (
              <h2 className="flex justify-center px-4 font-bold">
                <Trans>E-mail</Trans>
              </h2>
            )}
            {cvdata.email && (
              <p className="flex justify-center px-4">{cvdata.email}</p>
            )}
            {cvdata.website && (
              <h2 className="flex justify-center px-4 font-bold">
                <Trans>Website</Trans>
              </h2>
            )}
            {cvdata.website && (
              <a className="flex justify-center px-4" href={cvdata.website}>
                {cvdata.website}
              </a>
            )}
            {cvdata.linkedin && (
              <h2 className="flex justify-center px-4 font-bold">
                <Trans>LinkedIn</Trans>
              </h2>
            )}
            {cvdata.linkedin && (
              <a className="flex justify-center px-4" href={cvdata.linkedin}>
                {cvdata.linkedin}
              </a>
            )}
            {cvdata.twitter && (
              <h2 className="flex justify-center px-4 font-bold">
                <Trans>Twitter</Trans>
              </h2>
            )}
            {cvdata.twitter && (
              <a className="flex justify-center px-4" href={cvdata.twitter}>
                {cvdata.twitter}
              </a>
            )}
            {cvdata.github && (
              <h2 className="flex justify-center px-4 font-bold">
                <Trans>Github</Trans>
              </h2>
            )}
            {cvdata.github && (
              <a className="flex justify-center px-4" href={cvdata.github}>
                {cvdata.github}
              </a>
            )}
            {cvdata.skills?.length > 0 && (
              <h1 className="flex justify-center px-2 mt-4 text-lg font-bold bg-primario">
                <Trans>Skills</Trans>
              </h1>
            )}
            {cvdata.skills?.length > 0 && (
              <ul className="flex flex-col items-center justify-center p-4 mt-2">
                {cvdata.skills.map((skill, index: number) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            )}
            {cvdata.languages?.length > 0 && (
              <h1 className="flex justify-center px-2 text-lg font-bold bg-primario">
                <Trans>Languages</Trans>
              </h1>
            )}
            {cvdata.languages?.length > 0 && (
              <ul className="flex flex-col items-center justify-center p-4">
                {cvdata.languages.map((lang, index: number) => (
                  <li key={index}>{lang}</li>
                ))}
              </ul>
            )}
          </section>
          <section className="col-span-2 px-8">
            {!cvdata.excerpt ? (
              <p>
                <Trans>Insert summary here...</Trans>
              </p>
            ) : (
              <p className="py-8 text-justify">{cvdata.excerpt}</p>
            )}
            <hr />
            {cvdata.awards?.length > 0 && (
              <>
                <hr />
                <h1 className="py-4 text-lg font-bold text-primario">
                  <Trans>Awards</Trans>
                </h1>
                <hr />
                {cvdata.awards.map((i, index: number) => (
                  <div
                    className="flex flex-col md:grid md:grid-cols-6"
                    key={index}
                  >
                    <p className="md:w-24">{i.date}</p>
                    <div className="col-span-5">
                      <h2 className="text-lg font-bold">{i.title}</h2>
                      <small className="font-thin">{i.small}</small>
                    </div>
                  </div>
                ))}
              </>
            )}

            {cvdata.publications?.length > 0 && (
              <>
                <hr />
                <h1 className="py-4 text-lg font-bold text-primario">
                  <Trans>Publications</Trans>
                </h1>
                <hr />
                {cvdata.publications.map((p: any, index: number) => (
                  <div
                    className="flex flex-col md:grid md:grid-cols-6"
                    key={index}
                  >
                    <p className="md:w-24">{p.date}</p>
                    <div className="col-span-5">
                      <h2 className="text-lg font-bold">{p.title}</h2>
                      <small className="font-thin">{p.small}</small>
                    </div>
                  </div>
                ))}
              </>
            )}

            {cvdata.projects?.length > 0 && (
              <>
                <h1 className="py-4 text-lg font-bold text-primario">
                  <Trans>Projects</Trans>
                </h1>
                <hr />
                {cvdata.projects.map((p: any, index: number) => (
                  <div
                    className="flex flex-col py-2 md:grid md:grid-cols-6"
                    key={index}
                  >
                    <p className="md:w-24">{p.date}</p>
                    <div className="col-span-5">
                      <h2 className="text-lg font-bold">{p.title}</h2>
                      <small>
                        <a href={p.url} className="font-thin text-primario">
                          {p.url}
                        </a>
                      </small>
                      <p>{p.info}</p>
                    </div>
                  </div>
                ))}
                <hr />
              </>
            )}

            {cvdata.work?.length > 0 && (
              <>
                <h1 className="py-4 text-lg font-bold text-primario">
                  <Trans>Work History</Trans>
                </h1>
                <hr />
                {cvdata.work.map((w: any, index: number) => (
                  <div
                    className="flex flex-col py-2 md:grid md:grid-cols-6"
                    key={index}
                  >
                    <p className="md:w-24">{w.date}</p>
                    <div className="col-span-5">
                      <h2 className="text-lg font-bold">{w.position}</h2>
                      <small className="font-thin">{w.small}</small>
                      <p className="text-justify">{w.info}</p>
                    </div>
                  </div>
                ))}
                <hr />
              </>
            )}

            {cvdata.education?.length > 0 && (
              <>
                <hr />
                <h1 className="py-4 text-lg font-bold text-primario">
                  <Trans>Education</Trans>
                </h1>
                <hr />
                {cvdata.education.map((e: any, index: number) => (
                  <div
                    className="flex flex-col md:grid md:grid-cols-6"
                    key={index}
                  >
                    <p className="md:w-24">{e.date}</p>
                    <div className="col-span-5">
                      <h2 className="text-lg font-bold">{e.title}</h2>
                      <small className="font-thin">{e.small}</small>
                    </div>
                  </div>
                ))}
              </>
            )}

            {cvdata.interests?.length > 0 && (
              <>
                <hr />
                <h1 className="py-4 text-lg font-bold text-primario">
                  <Trans>Interests</Trans>
                </h1>
                <hr />
                {cvdata.interests.map((i: any, index: number) => (
                  <div
                    className="flex flex-col md:grid md:grid-cols-6"
                    key={index}
                  >
                    <p className="md:w-24">{i.date}</p>
                    <div className="col-span-5">
                      <h2 className="text-lg font-bold">{i.title}</h2>
                      <small className="font-thin">{i.small}</small>
                    </div>
                  </div>
                ))}
              </>
            )}
          </section>
        </article>
      </div>
      <div className="flex items-center justify-end">
        <p className="mr-4">
          <Trans>CV dimensions:</Trans> {width} x {height} px
        </p>
      </div>
      <div className="container flex flex-row items-center justify-center max-w-screen-lg mx-auto mt-4 mb-12">
        <Pdf
          targetRef={ref}
          filename="my-cv.pdf"
          options={{
            orientation: width > height ? "landscape" : "portrait",
            unit: "in",
            format: [width / 96, height / 96],
          }}
          //scale={0.8}
        >
          {({ toPdf }: any) => (
            <button
              onClick={toPdf}
              className="p-4 font-bold border-2 rounded-lg text-primario border-primario hover:text-white hover:bg-primario"
            >
              <Trans>Export Pdf</Trans>
            </button>
          )}
        </Pdf>
      </div>
    </>
  )
}

export default CV
