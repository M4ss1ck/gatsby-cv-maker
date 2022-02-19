import * as React from "react"
import { useTranslation, Trans } from "gatsby-plugin-react-i18next"
import Pdf from "react-to-pdf"
import { useElementSize, useWindowSize } from "usehooks-ts"

const CV = ({ cvdata }) => {
  const ref = React.createRef()

  // using https://usehooks-ts.com/react-hook/use-element-size
  const [articleRef, { height }] = useElementSize()
  // https://usehooks-ts.com/react-hook/use-window-size
  const { width } = useWindowSize()

  const { t } = useTranslation()
  //const { language } = useI18next()
  return (
    <>
      <div ref={ref}>
        <article
          className="mx-auto container grid grid-cols-1 sm:grid-cols-4 font-montserrat max-w-screen-lg"
          ref={articleRef}
        >
          <section className="bg-blue-800 text-white text-center md:text-left">
            <h1 className="font-extrabold text-2xl md:text-4xl p-2">
              {cvdata.name}
            </h1>
            <p className="px-4">{cvdata.position}</p>
            {(cvdata.address ||
              cvdata.email ||
              cvdata.website ||
              cvdata.twitter ||
              cvdata.github) && (
              <h1 className="bg-blue-900 font-bold mt-4 px-2 text-lg">
                <Trans>Contact</Trans>
              </h1>
            )}
            {cvdata.address && (
              <h2 className="px-4 font-bold mt-2">
                <Trans>Address</Trans>
              </h2>
            )}
            {cvdata.address && <p className="px-4">{cvdata.address}</p>}
            {cvdata.email && (
              <h2 className="px-4 font-bold">
                <Trans>E-mail</Trans>
              </h2>
            )}
            {cvdata.email && <p className="px-4">{cvdata.email}</p>}
            {cvdata.website && (
              <h2 className="px-4 font-bold">
                <Trans>Website</Trans>
              </h2>
            )}
            {cvdata.website && (
              <a className="px-4" href={cvdata.website}>
                {cvdata.website}
              </a>
            )}
            {cvdata.twitter && (
              <h2 className="px-4 font-bold">
                <Trans>Twitter</Trans>
              </h2>
            )}
            {cvdata.twitter && (
              <a className="px-4" href={cvdata.twitter}>
                {cvdata.twitter}
              </a>
            )}
            {cvdata.github && (
              <h2 className="px-4 font-bold">
                <Trans>Github</Trans>
              </h2>
            )}
            {cvdata.github && (
              <a className="px-4" href={cvdata.github}>
                {cvdata.github}
              </a>
            )}
            {cvdata.skills.length > 0 && (
              <h1 className="bg-blue-900 font-bold text-lg px-2 mt-4">
                <Trans>Skills</Trans>
              </h1>
            )}
            {cvdata.skills.length > 0 && (
              <ul className="p-4 mt-2">
                {cvdata.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            )}
            {cvdata.languages.length > 0 && (
              <h1 className="bg-blue-900 font-bold px-2 text-lg">
                <Trans>Languages</Trans>
              </h1>
            )}
            {cvdata.languages.length > 0 && (
              <ul className="p-4">
                {cvdata.languages.map((lang, index) => (
                  <li key={index}>{lang}</li>
                ))}
              </ul>
            )}
          </section>
          <section className="col-span-3 px-8">
            {!cvdata.excerpt ? (
              <p>
                <Trans>Insert summary here...</Trans>
              </p>
            ) : (
              <p className="py-8 text-justify">{cvdata.excerpt}</p>
            )}
            <hr />
            {cvdata.awards.length > 0 && (
              <>
                <hr />
                <h1 className="py-4 text-blue-800 font-bold text-lg">
                  <Trans>Awards</Trans>
                </h1>
                <hr />
                {cvdata.awards.map((i, index) => (
                  <div
                    className="flex flex-col md:grid md:grid-cols-6"
                    key={index}
                  >
                    <p className="md:w-24">{i.date}</p>
                    <div className="col-span-5">
                      <h2 className="font-bold text-lg">{i.title}</h2>
                      <small className="font-thin">{i.small}</small>
                    </div>
                  </div>
                ))}
              </>
            )}

            {cvdata.publications.length > 0 && (
              <>
                <hr />
                <h1 className="py-4 text-blue-800 font-bold text-lg">
                  <Trans>Publications</Trans>
                </h1>
                <hr />
                {cvdata.publications.map((p, index) => (
                  <div
                    className="flex flex-col md:grid md:grid-cols-6"
                    key={index}
                  >
                    <p className="md:w-24">{p.date}</p>
                    <div className="col-span-5">
                      <h2 className="font-bold text-lg">{p.title}</h2>
                      <small className="font-thin">{p.small}</small>
                    </div>
                  </div>
                ))}
              </>
            )}

            {cvdata.projects.length > 0 && (
              <>
                <h1 className="py-4 text-blue-800 font-bold text-lg">
                  <Trans>Projects</Trans>
                </h1>
                <hr />
                {cvdata.projects.map((p, index) => (
                  <div
                    className="flex flex-col md:grid md:grid-cols-6 py-2"
                    key={index}
                  >
                    <p className="md:w-24">{p.date}</p>
                    <div className="col-span-5">
                      <h2 className="font-bold text-lg">{p.title}</h2>
                      <small>
                        <a href={p.url} className="font-thin text-blue-700">
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

            {cvdata.work.length > 0 && (
              <>
                <h1 className="py-4 text-blue-800 font-bold text-lg">
                  <Trans>Work History</Trans>
                </h1>
                <hr />
                {cvdata.work.map((w, index) => (
                  <div
                    className="flex flex-col md:grid md:grid-cols-6 py-2"
                    key={index}
                  >
                    <p className="md:w-24">{w.date}</p>
                    <div className="col-span-5">
                      <h2 className="font-bold text-lg">{w.position}</h2>
                      <small className="font-thin">{w.small}</small>
                      <p className="text-justify">{w.info}</p>
                    </div>
                  </div>
                ))}
                <hr />
              </>
            )}

            {cvdata.education.length > 0 && (
              <>
                <hr />
                <h1 className="py-4 text-blue-800 font-bold text-lg">
                  <Trans>Education</Trans>
                </h1>
                <hr />
                {cvdata.education.map((e, index) => (
                  <div
                    className="flex flex-col md:grid md:grid-cols-6"
                    key={index}
                  >
                    <p className="md:w-24">{e.date}</p>
                    <div className="col-span-5">
                      <h2 className="font-bold text-lg">{e.title}</h2>
                      <small className="font-thin">{e.small}</small>
                    </div>
                  </div>
                ))}
              </>
            )}

            {cvdata.interests.length > 0 && (
              <>
                <hr />
                <h1 className="py-4 text-blue-800 font-bold text-lg">
                  <Trans>Interests</Trans>
                </h1>
                <hr />
                {cvdata.interests.map((i, index) => (
                  <div
                    className="flex flex-col md:grid md:grid-cols-6"
                    key={index}
                  >
                    <p className="md:w-24">{i.date}</p>
                    <div className="col-span-5">
                      <h2 className="font-bold text-lg">{i.title}</h2>
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
      <div className="container max-w-screen-lg mx-auto flex flex-row items-center justify-center mt-4 mb-12">
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
          {({ toPdf }) => (
            <button
              onClick={toPdf}
              className="border-2 border-blue-700 text-blue-700 font-bold rounded-lg p-4 hover:text-white hover:bg-blue-700"
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
