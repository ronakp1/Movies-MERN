export default {
    login: user => {
        const res = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        const data = await res.json();
        console.log("dataar", data);
        if (data.errors) {
            console.log("dataar", data.errors)
        }
        if (data.user) {
            console.log("user is signed in");
            // setToHomepage(true);
        }
    },
    register: user => {
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        const data = await res.json();
        console.log("dataar", data);
        if (data.errors) {
            console.log("dataar", data.errors)
        }
        if (data.user) {
            console.log("user is signed in");
            // setToHomepage(true);
        }
    },
    // isAuthenticated: () => {
    //     fetch ('/user/authenticated');
    //     if(res.status !==401)
    // }



}
    