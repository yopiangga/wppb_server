import { getFirestore, getDocs, collection } from "firebase/firestore";

export default async function handler(req, res) {
  const db = getFirestore();

  const docSnap = await getDocs(collection(db, "tourism"));

  const data = [];

  docSnap.forEach((doc) => {
    data.push({ id: doc.id, data: doc.data() });
  });

  res.status(200).json(data);
}
