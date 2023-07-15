import React from 'react'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import Card from './Card'

const ProjectsSection = (props: ProjectsSectionI) => {
    const { t } = useTranslation()
    const { currentProject, updateProject, addProject, remProject } = props
    return (
        <Card>
            <label htmlFor="projects">
                <Trans>Projects</Trans>
            </label>
            <input
                id="projects_date"
                type="text"
                placeholder={t("Date")}
                className="px-1 my-4 w-full bg-base-100"
                onChange={updateProject('date')}
                value={currentProject.date}
            />
            <input
                id="projects_title"
                type="text"
                placeholder={t("Position")}
                className="px-1 my-4 w-full bg-base-100"
                onChange={updateProject('title')}
                value={currentProject.title}
            />
            <input
                id="projects_url"
                type="text"
                placeholder={t("Place")}
                className="px-1 my-4 w-full bg-base-100"
                onChange={updateProject('url')}
                value={currentProject.url}
            />
            <textarea
                id="projects_info"
                placeholder={t("More info")}
                className="px-1 my-4 w-full bg-base-100"
                rows={5}
                onChange={updateProject('info')}
                value={currentProject.info}
            />
            <div className="flex flex-row justify-between items-center px-2 w-full">
                <button
                    type="button"
                    onClick={addProject}
                    className="p-2 px-2 mb-2 btn btn-primary"
                >
                    <Trans>Add</Trans>
                </button>
                <button
                    type="button"
                    onClick={remProject}
                    className="p-2 px-2 mb-2 btn btn-primary"
                >
                    <Trans>Remove</Trans>
                </button>
            </div>
        </Card>
    )
}

export default ProjectsSection