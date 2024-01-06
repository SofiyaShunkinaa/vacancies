export const getLocalStorage = (key: string) => {
    const data: string = getLocalStorage(key);

    if (data != null) {
        return JSON.parse(data);
    }

    return {};
};

export const setLocalStorage = (key:string, data:unknown) => {
    setLocalStorage(key, JSON.stringify(data))
};
