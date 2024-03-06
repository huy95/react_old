export const TYPE_LOG = 'log'
export const TYPE_WARN = 'warn'
export const TYPE_ERROR = 'eror'

function logtest(log, type = 'log'){
    console.log(log);
}

export default logtest; // chi co 1 default nhung co nhieu const