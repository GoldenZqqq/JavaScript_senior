class ZQCache {
  constructor(isLocal = true) {
    this.storage = isLocal ? localStorage : sessionStorage
  }

  setItem (key, value) {
    if (value) {
      this.storage.setItem(key, JSON.stringify(value))
    }
  }

  getItem (key) {
    const value = this.storage.getItem(key)
    if (value) {
      value = JSON.parse(value)
      return value
    }
  }

  removeItem (key) {
    this.storage.removeItem(key)
  }

  clear () {
    this.storage.clear()
  }

  key (index) {
    return this.storage.key(index)
  }

  length () {
    return this.storage.length
  }
}

const localCache = new ZQCache()
const sessionCache = new ZQCache(false)

export {
  localCache,
  sessionCache
}