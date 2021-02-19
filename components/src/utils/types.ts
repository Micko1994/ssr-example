export enum ActionTypes {
    fixed = 'fixed',
    crop = 'crop',
    min = 'min',
}

export type pictureTo = ActionTypes.crop | ActionTypes.fixed | ActionTypes.min;

export type ImageSrcParams = {
    src: string;
    action: pictureTo;
    r?: any;
    type?: string | null;
}

export type GetImageSource = (params: ImageSrcParams) => string;

export type SVGType = (pattern: string) => boolean;

export type GetSourceFormatType = (format?: string) => string;
