import { getFirestore, updateDoc, doc } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const db = getFirestore();
    const date = new Date();
    const time = date.getTime();

    return await updateDoc(doc(db, "banner", req.body.id), {
      title: req.body.title ?? "",
      location: req.body.location ?? "",
      imageUrl: req.body.imageUrl ?? "",
    });
  } else {
    res.status(200).json(null);
  }
}
