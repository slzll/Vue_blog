class Storage {
    static getItem(key) {
        return localStorage.getItem(key)
    }
    static setItem(key, val) {
        localStorage.setItem(key, val)
    }
    static removeItem(key) {
        localStorage.removeItem(key)
    }
}

export default Storage