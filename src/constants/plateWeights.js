export const BAR_WEIGHT = 20;

export const PLATE_OPTIONS = [0.25, 0.5, 1.25, 2.5, 5.0, 10.0, 15.0, 20.0, 25.0]

export const DEFAULT_PLATE_LOADING_INSTRUCTIONS = PLATE_OPTIONS.reduce((object, plateWeight) => {
    object[`${plateWeight}`] = 0
    return object
}, {})