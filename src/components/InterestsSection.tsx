import React from 'react'
import { useTranslation, Trans } from 'gatsby-plugin-react-i18next'
import Card from './Card'

const InterestsSection = (props: InterestsSectionI) => {
    const { t } = useTranslation()
    const { currentInterest, updateInterest, addInterest, remInterest } = props
    return (
        <Card>
            <label htmlFor="interests">
                <Trans>Interests</Trans>
            </label>
            <input
                id="interest_date"
                type="text"
                placeholder={t("Date")}
                className="px-1 my-4 w-full bg-base-100"
                onChange={updateInterest('date')}
                value={currentInterest.date}
            />
            <textarea
                id="interest_title"
                placeholder={t("Title")}
                className="px-1 my-4 w-full bg-base-100"
                onChange={updateInterest('title')}
                value={currentInterest.title}
            />
            <textarea
                id="interest_small"
                placeholder={t("Place")}
                className="px-1 my-4 w-full bg-base-100"
                onChange={updateInterest('small')}
                value={currentInterest.small}
            />
            <div className="flex flex-row justify-between items-center px-2 w-full">
                <button
                    type="button"
                    onClick={addInterest}
                    className="p-2 px-2 mb-2 btn btn-primary"
                >
                    <Trans>Add</Trans>
                </button>
                <button
                    type="button"
                    onClick={remInterest}
                    className="p-2 px-2 mb-2 btn btn-primary"
                >
                    <Trans>Remove</Trans>
                </button>
            </div>
        </Card>
    )
}

export default InterestsSection