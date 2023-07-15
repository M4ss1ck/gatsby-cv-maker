import React from 'react'
import { useTranslation, Trans } from 'gatsby-plugin-react-i18next'
import Card from './Card'

const LanguagesSection = (props: LanguagesSectionI) => {
    const { t } = useTranslation()
    const { currentLang, setCurrentLang, remlanguage, addlanguage } = props
    return (
        <Card>
            <label htmlFor="languages">
                <Trans>Languajes</Trans>
            </label>
            <input
                id="languages"
                type="text"
                placeholder={t("Languajes")}
                className="px-1 my-4 w-full bg-base-100"
                onChange={e => setCurrentLang(e.target.value)}
                value={currentLang}
            />
            <div className="flex flex-row justify-between items-center px-2 w-full">
                <button
                    type="button"
                    onClick={addlanguage}
                    className="p-2 px-2 mb-2 btn btn-primary"
                >
                    <Trans>Add</Trans>
                </button>
                <button
                    type="button"
                    onClick={remlanguage}
                    className="p-2 px-2 mb-2 btn btn-primary"
                >
                    <Trans>Remove</Trans>
                </button>
            </div>
        </Card>
    )
}

export default LanguagesSection