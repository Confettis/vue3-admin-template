export const localGet = (key: string) => {
    const value = window.localStorage.getItem(key)
    try {
        return JSON.parse(window.localStorage.getItem(key) || '')
    } catch (error) {
        return value
    }
}

export const localSet = (key: string, value: any) => {
    window.localStorage.setItem(key, JSON.stringify(value))
}

export const localRemove = (key: string) => {
    window.localStorage.removeItem(key)
}
