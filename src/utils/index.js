// 判断元素类型
export function toType (obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

// 数组过滤
export function filterArray (arr) {
    arr.filter(item => {
        return item !== '' && item !== 'undefined' && item !== null
    })
    return arr
}

// 参数过滤函数
export function filterNull (obj) {
    for (var key in obj) {
        (obj[key] === '' || obj[key] === 'undefined' || obj[key] === null) && delete obj[key]
        toType(obj[key]) === 'string' ? obj[key] = obj[key].trim() : toType(obj[key]) === 'object' ? obj[key] = filterNull(obj[key]) : (toType(obj[key]) === 'array') && (obj[key] = filterArray(obj[key]))
    }
    return obj
}

// 去掉前后空格
export function trimSpace (str) {
    return str.replace(/(^\s*)|(\s*$)/g, '')
}

// 把一个或多个空格替换成一个空格
export function singleSpace (str) {
    return str.replace(/\s+/g, ' ')
}

// 去掉左右空格
export function noSpace (str) {
    return str.replace(/\s+/g, '')
}
