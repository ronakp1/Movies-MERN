const addFavourite = async(data) => {
    fetch('/api/favourite/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
    })
    const res = await data.json();
    return res;
}

export {
    addFavourite
}