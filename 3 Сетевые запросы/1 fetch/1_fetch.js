let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10]
async function getUsers(arr) {
    let requests = arr.map(user => {
        return fetch(`https://api.github.com/users/${user}`)
            .then(resp => resp.json())
    })
    return (await Promise.all(requests))
}
console.log(getUsers(arr))