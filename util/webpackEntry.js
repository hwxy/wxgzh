import entrypoints from '../mobile/config/webpack-entrypoints.json';
import get from 'lodash/get';

export const getJsBundlesByEntry = (entry) => {
    const jsFiles = get(entrypoints,`${entry}.files.js`)
    return jsFiles || []
}

export const getCssBundlesByEntry = (entry) => {
    const cssFiles = get(entrypoints,`${entry}.files.css`)
    return cssFiles || []
}
