const choice = (items) => {
    const rand = Math.floor(Math.random() * items.length)
    return items[rand];
}

const remove = (items, item) => {
    if(items.includes(item)){
        let i = items.indexOf(item);
        return items.splice(i, 1)[0];
    } else {
        return undefined;
    }
}

export { choice, remove };