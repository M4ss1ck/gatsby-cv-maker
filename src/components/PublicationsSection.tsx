import React from 'react'
import { useTranslation, Trans } from 'gatsby-plugin-react-i18next'
import Card from './Card'

const PublicationsSection = (props: PublicationsSectionI) => {
    const { t } = useTranslation()
    const { currentPublication, updatePublication, addPublication, remPublication } = props
    return (
        <Card>
            <label htmlFor="publications">
                <Trans>Publications</Trans>
            </label>
            <input
                id="publication_date"
                type="text"
                placeholder={t("Date")}
                className="px-1 my-4 w-full bg-base-100"
                onChange={updatePublication('date')}
                value={currentPublication.date}
            />
            <textarea
                id="publication_title"
                placeholder={t("Title")}
                className="px-1 my-4 w-full bg-base-100"
                onChange={updatePublication('title')}
                value={currentPublication.title}
            />
            <textarea
                id="publication_small"
                placeholder={t("Place")}
                className="px-1 my-4 w-full bg-base-100"
                onChange={updatePublication('small')}
                value={currentPublication.small}
            />
            <div className="flex flex-row justify-between items-center px-2 w-full">
                <button
                    type="button"
                    onClick={addPublication}
                    className="p-2 px-2 mb-2 btn btn-primary"
                >
                    <Trans>Add</Trans>
                </button>
                <button
                    type="button"
                    onClick={remPublication}
                    className="p-2 px-2 mb-2 btn btn-primary"
                >
                    <Trans>Remove</Trans>
                </button>
            </div>
        </Card>
    )
}

export default PublicationsSection