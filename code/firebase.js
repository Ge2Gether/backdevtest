const admin = require('firebase-admin');

const serviceAccount = require('./firebasekeys.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();


async function getInfo(id=0){
  console.log('Started firebase procedure');  
  profiles = db.collection('profiles');
  const query = await profiles.where("profiles.id", "==", parseInt(id));
  console.log("get id:",id);
  await query.get().then((snapshot) => {
    snapshot.forEach((doc) => {
      if(doc.id == id){
        console.log('YESYESYESYESYESYES',doc.data());
      }
      console.log(doc);
    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  })
}
module.exports.getInfo = getInfo