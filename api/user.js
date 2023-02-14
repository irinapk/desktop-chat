import { db } from "../firebase";
import { collection, setDoc, addDoc, updateDoc, doc, deleteDoc, query, where, getDoc, getDocs } from "firebase/firestore";

const addUser = async ({ id, email, name }) => {
  try {
    await setDoc(doc(db, "users", id), {
      userId: id,
      email: email,
      name: name,
    });
  } catch (err) {
    console.log(err);
  }
};

const getUserById = async (id) => {
  const docRef = doc(db, "users", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    const user = docSnap.data();
    return user;
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};

export { addUser, getUserById };
