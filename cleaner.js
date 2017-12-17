var push = Array.prototype.push
var keys = Object.keys

module.exports = cleaner

function cleaner (env, keep) {
  env = env || ''
  keep = keep ? [].concat(keep) : []

  env.split(/\r?\n/).forEach(function (line) {
    if (!(line = line.trim())) return
    if (!~line.indexOf('=')) return

    var kv = line.split('=')
    var key = kv[0].trim()
    var val = kv[1].trim()
    if (!key) return

    if (key === 'CLEAN_ENV_KEEP') {
      push.apply(keep, val.split(':'))
      return
    }

    process.env[key] = val
    keep.push(key)
  })

  keys(process.env).forEach(function (key) {
    if (!~keep.indexOf(key))
      delete process.env[key]
  })

  return keys(process.env)
}
