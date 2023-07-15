import React from 'react'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import Card from './Card'

const ContactSection = (props: ContactSectionI) => {
    const { t } = useTranslation()
    const { updateCV, data } = props
    return (
        <Card>
            <label htmlFor="address">
                <Trans>Contact info</Trans>
            </label>
            <input
                id="address"
                type="text"
                placeholder={t("Address")}
                className="px-1 my-4 w-full bg-base-100"
                onChange={updateCV('address')}
                value={data['address']}
            />
            <input
                id="email"
                type="email"
                placeholder={t("E-mail")}
                className="px-1 my-4 w-full bg-base-100"
                onChange={updateCV('email')}
                value={data['email']}
            />
            <input
                id="website"
                type="url"
                placeholder={t("Website")}
                className="px-1 my-4 w-full bg-base-100"
                onChange={updateCV('website')}
                value={data['website']}
            />
            <input
                id="linkedin"
                type="url"
                placeholder={"LinkedIn"}
                className="px-1 my-4 w-full bg-base-100"
                onChange={updateCV('linkedin')}
                value={data['linkedin']}
            />
            <input
                id="twitter"
                type="url"
                placeholder={t("Twitter")}
                className="px-1 my-4 w-full bg-base-100"
                onChange={updateCV('twitter')}
                value={data['twitter']}
            />
            <input
                id="github"
                type="url"
                placeholder={t("Github")}
                className="px-1 my-4 w-full bg-base-100"
                onChange={updateCV('github')}
                value={data['github']}
            />
        </Card>
    )
}

export default ContactSection