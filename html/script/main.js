function storageUpload(namep) {
   // Create the file metadata
   /** @type {any} */
   const metadata = {
     contentType: 'image/png'
   };
   // Upload file and metadata to the object 'images/mountains.jpg'
   const storageRef = ref(storage, namep);
   const uploadTask = uploadBytesResumable(storageRef, file, metadata);
   // Listen for state changes, errors, and completion of the upload.
   uploadTask.on('state_changed',
     (snapshot) => {
       // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
       const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
       console.log('Upload is ' + progress + '% done');
       switch (snapshot.state) {
         case 'paused':
           console.log('Upload is paused');
           break;
         case 'running':
           console.log('Upload is running');
           break;
       }
     }, 
     (error) => {
       // A full list of error codes is available at
       // https://firebase.google.com/docs/storage/web/handle-errors
       switch (error.code) {
         case 'storage/unauthorized':
           // User doesn't have permission to access the object
           break;
         case 'storage/canceled':
           // User canceled the upload
           break;
         case 'storage/unknown':
           // Unknown error occurred, inspect error.serverResponse
           break;
       }
     }, 
     () => {
       // Upload completed successfully, now we can get the download URL
       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
         console.log('File available at', downloadURL);
       });
     }
   );
} 
function storageGet(namep) {
  const starsRef = ref(storage, 'images/stars.jpg');
   // Get the download URL
   getDownloadURL(starsRef)
     .then((url) => {
    // Insert url into an <img> tag to "download"
  })
     .catch((error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/object-not-found':
        // File doesn't exist
        break;
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect the server response
        break;
    }
  });
}
function storageDelete(namep) {
  // Create a reference to the file to delete
  const desertRef = ref(storage, namep);

  // Delete the file
  deleteObject(desertRef).then(() => {
   // File deleted successfully
   }).catch((error) => {
   // Uh-oh, an error occurred!
  });
}
function authCreate(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log("User was created");
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    console.log("User was not created");
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}
function authLogin(email, password) {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log("Logged in successfully");
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    console.log("Logged in insuccessfully");
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}
function authLogout() {
  signOut(auth).then(() => {
    console.log("Logged out successfully");
  // Sign-out successful.
  }).catch((error) => {
    console.log("Logged out insuccessfully");
    console.log("An error occurred!");
  // An error happened.
  });
}