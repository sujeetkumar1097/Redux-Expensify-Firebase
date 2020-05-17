import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(firebaseConfig)

  const database = firebase.database()

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

  export {firebase, googleAuthProvider , database as default }

  //==================================================
  // database.ref().set({
  //   name: 'Sujeet',
  //   age: 25,
  //   isSingle: true,
  //   location: {
  //     city: 'kolkata',
  //     country: 'india'
  //   }
  // }).then(() => {
  //   console.log('Data is Saved')
  // }).catch((e) => {
  //   console.log('Data is Failed', e)
  // })

  // database.ref()
  //     .remove()
  //     .then(() =>{
  //       console.log('Data is Saved')
  //     }).catch((e) => {
  //       console.log('Data is Failed', e)
  //     })

  //  database.ref().update({
  //   name: 'Sanjeet',
  //   age:22,
  //   job: 'Soft. Engg.',
  //   isSingle: null
  // })

  //   database.ref().update({
  //   job: 'Soft. Engg.',
  //   'location/city': 'Boston'     // to update inner object  we need to reach to that location
  // })
  // database.ref()
  //     .once('value')             // once is used to get value once this function will run only for single time
  //     .then((snapShot) => {
  //       console.log(snapShot.val())
  //     }).catch((e) => {{
  //       console.log('Error', e)
  //     }})

  // database.ref()
  //     .on('value', (snapShot) => {     // on is used to re-run whenever data changes in database
  //       console.log(snapShot.val())    // on doesnot support promises
  //     })   
  
  // database.ref().off()       //off is used to unsubscribe from DB
       
  // const onValueChange = database.ref().on('value', (snapShot) =>{
  //   console.log(snapShot.val())
  // }, (e) => {
  //   console.log('Error', e)
  // })

  // database.ref().off(onValueChange) 
  // database.ref().push()              // push will generate some dummy data for each object you push which will be helpful for updating

  // database.ref().push({
  //   description: 'Food bill',
  //   amount: 450,
  //   note: 'Its delicious',
  //   createdAt: 9000000
  // }) 

  // database.ref('expenses')
  //       .once('value')
  //       .then((snapShots) => {
  //         const expenses = []

  //         snapShots.forEach((childSnapShot) => {
  //           expenses.push({
  //             id: childSnapShot.key,
  //             ...childSnapShot.val()
  //           })
  //         })
  //         console.log(expenses)

  //       })

        // database.ref('expenses')
        // .on('value', (snapShots) => {
        //   const expenses = []

        //   snapShots.forEach((childSnapShot) => {
        //     expenses.push({
        //       id: childSnapShot.key,
        //       ...childSnapShot.val()
        //     })
        //   })
        //   console.log(expenses)
        // })    

        
// // child_removed
// database.ref('expenses').on('child_removed', (snapShot) => {
//   console.log(snapShot.key, snapShot.val())
// })    

// // child_changed
// database.ref('expenses').on('child_changed', (snapShot) => {
//   console.log(snapShot.key, snapShot.val())
// }) 

// // child_added
// database.ref('expenses').on('child_added', (snapShot) => {
//   console.log(snapShot.key, snapShot.val())
// }) 