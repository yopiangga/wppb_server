import { getFirestore, setDoc, doc } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const db = getFirestore();
    const date = new Date();
    const time = date.getTime();

    return await setDoc(doc(db, "tourism", time.toString()), {
      name: "",
      price: 1,
    });
  } else {
    res.status(200).json(null);
  }
}
