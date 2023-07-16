import * as React from "react"
import { Trans } from "gatsby-plugin-react-i18next"
import html2canvas from "html2canvas"
import { jsPDF } from "jspdf"

import { useStore } from "../store/cv"

interface CV {
  cvdata: CVData
}

const CV: React.FC<CV> = ({ cvdata }) => {
  const currentTheme = useStore(state => state.theme)
  const createPDF = async () => {
    try {
      const pdf = new jsPDF("portrait", "pt", "letter");
      const data = await html2canvas(document.querySelector("#pdf")!);
      const img = data.toDataURL("image/png");
      const imgProperties = pdf.getImageProperties(img);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
      pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("cv.pdf");
    } catch (error) {
      console.log('Error exporting the PDF file: ', error)
    }
  }

  return (
    <>
      <div>
        <article
          className="container grid grid-cols-1 mx-auto max-w-screen-lg sm:grid-cols-3 font-montserrat"
          id="pdf"
          data-theme={currentTheme}
        >
          <section className="text-center break-all text-primary-content bg-primary md:text-left">
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
                <h1 className="flex justify-center px-2 mt-4 text-lg font-bold bg-primary">
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
              <h1 className="flex justify-center px-2 mt-4 text-lg font-bold bg-primary">
                <Trans>Skills</Trans>
              </h1>
            )}
            {cvdata.skills?.length > 0 && (
              <ul className="flex flex-col justify-center items-center px-4">
                {cvdata.skills.map((skill, index: number) => (
                  <li key={index} className="first:mt-2">
                    {skill}
                  </li>
                ))}
              </ul>
            )}
            {cvdata.languages?.length > 0 && (
              <h1 className="flex justify-center px-2 mt-4 text-lg font-bold bg-primary">
                <Trans>Languages</Trans>
              </h1>
            )}
            {cvdata.languages?.length > 0 && (
              <ul className="flex flex-col justify-center items-center px-4">
                {cvdata.languages.map((lang, index: number) => (
                  <li key={index} className="first:mt-2 last:mb-2">
                    {lang}
                  </li>
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
                <h1 className="py-4 text-lg font-bold text-primary">
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
                <h1 className="py-4 text-lg font-bold text-primary">
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
                <h1 className="py-4 text-lg font-bold text-primary">
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
                        <a href={p.url} className="font-thin text-primary">
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
                <h1 className="py-4 text-lg font-bold text-primary">
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
                <h1 className="py-4 text-lg font-bold text-primary">
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
                <h1 className="py-4 text-lg font-bold text-primary">
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
      <div className="container flex flex-row justify-center items-center mx-auto mt-4 mb-12 max-w-screen-lg">
        <button onClick={createPDF} type="button" className="p-4 btn btn-primary">
          <Trans>Export Pdf</Trans>
        </button>
      </div>
    </>
  )
}

export default CV
