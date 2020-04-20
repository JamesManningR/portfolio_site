require("firebase/storage");
const firebase = require("firebase/app");
const firebaseStorage = firebase.storage();

export default {
  async upload(file, fileRef) {
    const storageRef = firebaseStorage.ref(`uploads/${fileRef}`);
    let task = storageRef.put(file);

    task.on(
      "state_changed",
      function progress(snapshot) {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(percentage);
      },
      function error(err) {
        throw err;
      },
      function complete() {
        return;
      }
    );

    return task.then(() => {
      return storageRef.getDownloadURL();
    });
  }
};
