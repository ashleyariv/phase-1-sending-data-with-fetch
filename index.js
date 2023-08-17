function submitData(name, email) {
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            name: 'ashley',
            email: 'fakemail',
        }),
    })
    .then(response => response.json())
    .then(object => console.log(object))
    .catch(function(error) {
        alert("error message")
        console.log(error.message)
    })
}