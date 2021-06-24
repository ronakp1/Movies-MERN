const submitComment = async(comment) => {
    console.log("20201", comment);
    const res = await fetch('/api/comment/submit',  {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    })
    const data = await res.json();
    
    console.log(data);
    return data;
}

export {
    submitComment
}
