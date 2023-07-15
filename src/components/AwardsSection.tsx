import React from 'react'
import { useTranslation, Trans } from 'gatsby-plugin-react-i18next'
import Card from './Card'

const AwardsSection = (props: AwardsSectionI) => {
    const { t } = useTranslation()
    const { currentAward, updateAward, addAward, remAward } = props
    return (
        <Card>
            <label htmlFor="awards">
                <Trans>Awards</Trans>
            </label>
            <input
                id="award_date"
                type="text"
                placeholder={t("Date")}
                className="px-1 my-4 w-full bg-base-100"
                onChange={updateAward('date')}
                value={currentAward.date}
            />
            <textarea
                id="award_title"
                placeholder={t("Title")}
                className="px-1 my-4 w-full bg-base-100"
                onChange={updateAward('title')}
                value={currentAward.title}
            />
            <textarea
                id="award_small"
                placeholder={t("Place")}
                className="px-1 my-4 w-full bg-base-100"
                onChange={updateAward('small')}
                value={currentAward.small}
            />
            <div className="flex flex-row justify-between items-center px-2 w-full">
                <button
                    type="button"
                    onClick={addAward}
                    className="p-2 px-2 mb-2 btn btn-primary"
                >
                    <Trans>Add</Trans>
                </button>
                <button
                    type="button"
                    onClick={remAward}
                    className="p-2 px-2 mb-2 btn btn-primary"
                >
                    <Trans>Remove</Trans>
                </button>
            </div>
        </Card>
    )
}

export default AwardsSection