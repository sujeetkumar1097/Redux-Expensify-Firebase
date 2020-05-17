const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name:'sujeet',
            age:25
        })
        //reject('something went wrong')
    },5000)
})

console.log('before')

promise.then((data) => {
    console.log('1.', data)

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('this is my other promise')
            //reject('something went wrong')
        },5000)
    })
}).then((str) => {
    console.log('2.', str)
}).catch((error) =>{
    console.log('error', error)
})

console.log('after')