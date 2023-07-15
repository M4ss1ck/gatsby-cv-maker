import React from 'react'
import ImageUploading, { ImageListType } from "react-images-uploading"
import Card from './Card'
import { Trans } from 'gatsby-plugin-react-i18next'

const Photo = (props: PhotoI) => {
    return (
        <Card>
            <label htmlFor="profileImage">
                <Trans>Photo</Trans>
            </label>
            <ImageUploading value={props.value} onChange={props.onChange}>
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    isDragging,
                    dragProps,
                    errors,
                }) => (
                    // write your building UI
                    <div className="flex flex-col items-center px-1 my-4 w-full">
                        <button
                            style={isDragging ? { color: "red" } : undefined}
                            onClick={onImageUpload}
                            className="p-4 rounded-xl border border-dashed border-primary bg-base-100"
                            {...dragProps}
                        >
                            <Trans>Click or Drop here</Trans>
                        </button>

                        <button
                            onClick={onImageRemoveAll}
                            className="p-2 px-2 my-2 btn btn-primary"
                        >
                            <Trans>Remove</Trans>
                        </button>
                        {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                                <img src={image.dataURL} alt="photo" width="100" />
                            </div>
                        ))}
                        {errors && (
                            <div>
                                {errors.acceptType && (
                                    <span className="text-error">
                                        <Trans>File not supported</Trans>
                                    </span>
                                )}
                                {errors.maxFileSize && (
                                    <span className="text-error">
                                        <Trans>File too big</Trans>
                                    </span>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </ImageUploading>
        </Card>
    )
}

export default Photo