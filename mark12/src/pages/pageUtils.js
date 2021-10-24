function doesNotExist(item) {
    if (item === undefined || item === null) {
        return true;
    }
    if (typeof item === 'string' && item.trim().length === 0) {
        return true;
    }
    return false;
}

export { doesNotExist };