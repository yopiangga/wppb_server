import { getFirestore, updateDoc, doc } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const db = getFirestore();
    const date = new Date();
    const time = date.getTime();

    return await updateDoc(doc(db, "tourism", req.body.id), {
      title: req.body.title ?? "",
      location: req.body.location ?? "",
      imageUrl: req.body.imageUrl ?? "",
      distance: req.body.distance ?? "",
      weather: req.body.weather ?? "",
      price: req.body.price ?? "",
      description: req.body.description ?? "",
    });
  } else {
    res.status(200).json(null);
  }
}
