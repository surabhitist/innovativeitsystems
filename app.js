// const getDataFromFirestore = (path) => {
//   console.log("Fetching data for path:", path);

//   let collection = db.collection("products").doc(path);

//   collection
//     .get()
//     .then((doc) => {
//       if (doc.exists) {
//         console.log("Document data:", doc.data());
//         alert("Data exists"); // Ensure alert works as expected
//       } else {
//         console.log("No such document");
//         alert("Data does not exist");
//       }
//     })
//     .catch((err) => {
//       console.error("Error getting document:", err);
//       alert("Error: " + err.message);
//     });
// };

// let path = location.pathname.split("/").pop();
// getDataFromFirestore(path);
