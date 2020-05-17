console.log('destructuring OBJ')

// const person = {
//     name: 'Sujeet',
//     age: 25,
//     location: {
//         city: 'kolkata',
//         temp: 88
//     }
// }

// const {name:firstname = 'Anonymous', age} = person
// console.log(`${firstname} is ${age} year old`)

// const {city, temp:temperature}= person.location
// console.log(`It's ${temperature} in ${city}`)

// ARRAY

const address = ['1299 shastri nagar', 'jharkhand', 'giridih', '815301']

// const [street, city, state, zip] = address
// console.log(`you are in ${state}  of ${city}`)

// const [, city='Anonymous'] = address
// console.log(`you are in  ${city}`)

const [, city, , zip] = address
console.log(`you are in ${city} zip is ${zip}`)
