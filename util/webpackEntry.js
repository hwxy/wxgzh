import get from 'lodash/get';    

import env from '../env'

let path = env == 'prod' ?  '../asset/webpack-entrypoints.json'  : '../react/config/webpack-entrypoints.json'

const entrypoints = require(path)

export const getJsBundlesByEntry = (entry) => {
    const jsFiles = get(entrypoints,`${entry}.files.js`)

    // if(env == 'prod'){}

    return jsFiles || []
}

export const getCssBundlesByEntry = (entry) => {
    const cssFiles = get(entrypoints,`${entry}.files.css`)
    return cssFiles || []
}
