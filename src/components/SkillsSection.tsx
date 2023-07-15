import React from 'react'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import Card from './Card'

const SkillsSection = (props: SkillsSectionI) => {
    const { t } = useTranslation()
    const { currentSkill, setCurrentSkill, addSkill, remSkill } = props
    return (
        <Card>
            <label htmlFor="skills">
                <Trans>Skills</Trans>
            </label>
            <input
                id="skills"
                type="text"
                placeholder={t("Skills")}
                className="px-1 my-4 w-full bg-base-100"
                onChange={e => setCurrentSkill(e.target.value)}
                value={currentSkill}
            />
            <div className="flex flex-row justify-between items-center px-2 w-full">
                <button
                    type="button"
                    onClick={addSkill}
                    className="p-2 px-2 mb-2 btn btn-primary"
                >
                    <Trans>Add</Trans>
                </button>
                <button
                    type="button"
                    onClick={remSkill}
                    className="p-2 px-2 mb-2 btn btn-primary"
                >
                    <Trans>Remove</Trans>
                </button>
            </div>
        </Card>
    )
}

export default SkillsSection