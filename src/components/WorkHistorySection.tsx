import React from 'react'
import { useTranslation, Trans } from 'gatsby-plugin-react-i18next'
import Card from './Card'

const WorkHistorySection = (props: WorkHistorySectionI) => {
    const { t } = useTranslation()
    const { currentWork, updateWorkHistory, addWork, remWork } = props
    return (
        <Card>
            <label htmlFor="work">
                <Trans>Work History</Trans>
            </label>
            <input
                id="work_date"
                type="text"
                placeholder={t("Date")}
                className="px-1 my-4 w-full bg-base-100"
                onChange={updateWorkHistory('date')}
                value={currentWork.date}
            />
            <textarea
                id="work_title"
                placeholder={t("Position")}
                className="px-1 my-4 w-full bg-base-100"
                onChange={updateWorkHistory('position')}
                value={currentWork.position}
            />
            <textarea
                id="work_small"
                placeholder={t("Place")}
                className="px-1 my-4 w-full bg-base-100"
                onChange={updateWorkHistory('small')}
                value={currentWork.small}
            />
            <textarea
                id="work_info"
                placeholder={t("More info")}
                className="px-1 my-4 w-full bg-base-100"
                rows={5}
                onChange={updateWorkHistory('info')}
                value={currentWork.info}
            />
            <div className="flex flex-row justify-between items-center px-2 w-full">
                <button
                    type="button"
                    onClick={addWork}
                    className="p-2 px-2 mb-2 btn btn-primary"
                >
                    <Trans>Add</Trans>
                </button>
                <button
                    type="button"
                    onClick={remWork}
                    className="p-2 px-2 mb-2 btn btn-primary"
                >
                    <Trans>Remove</Trans>
                </button>
            </div>
        </Card>
    )
}

export default WorkHistorySection