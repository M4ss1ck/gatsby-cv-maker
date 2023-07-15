import React from 'react'
import Card from './Card'
import { useTranslation, Trans } from 'gatsby-plugin-react-i18next'

const NameSection = (props: NameSectionI) => {
    const { t } = useTranslation()
    const { data } = props
    return (
        <Card>
            <label htmlFor="full-name">
                <Trans>Nombre, cargo y resumen</Trans>
            </label>
            <input
                id="full-name"
                type="text"
                placeholder={t("Nombre completo")}
                className="px-1 my-4 w-full bg-base-100"
                onChange={props.onNameChange}
                value={data.name}
            />
            <input
                id="position"
                type="text"
                placeholder={t("What are you?")}
                className="px-1 my-4 w-full bg-base-100"
                onChange={props.onPositionChange}
                value={data.position}
            />
            <textarea
                id="excerpt"
                placeholder={t("Summary")}
                className="px-1 my-4 w-full bg-base-100"
                onChange={props.onExcerptChange}
                value={data.excerpt}
            />
        </Card>
    )
}

export default NameSection