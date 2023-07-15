import React from 'react'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import Card from './Card'

const EducationSection = (props: EducationSectionI) => {
    const { t } = useTranslation()
    const { currentEducation, updateEducation, addEducation, remEducation } = props
    return (
        <Card>
            <label htmlFor="education">
                <Trans>Education</Trans>
            </label>
            <input
                id="education_date"
                type="text"
                placeholder={t("Date")}
                className="px-1 my-4 w-full bg-base-100"
                onChange={updateEducation('date')}
                value={currentEducation.date}
            />
            <textarea
                id="education_title"
                placeholder={t("Title")}
                className="px-1 my-4 w-full bg-base-100"
                onChange={updateEducation('title')}
                value={currentEducation.title}
            />
            <textarea
                id="education_small"
                placeholder={t("Place")}
                className="px-1 my-4 w-full bg-base-100"
                onChange={updateEducation('small')}
                value={currentEducation.small}
            />
            <div className="flex flex-row justify-between items-center px-2 w-full">
                <button
                    type="button"
                    onClick={addEducation}
                    className="p-2 px-2 mb-2 btn btn-primary"
                >
                    <Trans>Add</Trans>
                </button>
                <button
                    type="button"
                    onClick={remEducation}
                    className="p-2 px-2 mb-2 btn btn-primary"
                >
                    <Trans>Remove</Trans>
                </button>
            </div>
        </Card>
    )
}

export default EducationSection