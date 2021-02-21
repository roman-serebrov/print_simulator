export const SET_TEXT = 'SET_TEXT'
export const ERR_ARRAY = 'ERR_ARRAY'
export const UPDATE_LATTER = 'UPDATE_LATTER'
export function setText(text) {
    return {
        type: SET_TEXT,
        text
    }
}

export function errArray(array) {
    return {
        type: ERR_ARRAY,
        array,
    }
}

export function updateLatter() {
    return {
        type: UPDATE_LATTER
    }
}

