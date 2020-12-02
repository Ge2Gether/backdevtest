const admin = require('firebase-admin');

const serviceAccount = require('./firebasekeys.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();


async function getInfo(id=null){
  console.log('Started firebase procedure');  
  profiles = db.collection('profiles')
  const query = await profiles.where("id", "==", id);
  console.log("get id:",id);
  query.get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      if(doc.data.id == id){
        console.log('YESYESYESYESYESYES',doc.data());
      }
      
    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  })
}
module.exports.getInfo = getInfo