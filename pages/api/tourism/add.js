import { getFirestore, setDoc, doc } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const db = getFirestore();
    const date = new Date();
    const time = date.getTime();

    const result = await setDoc(doc(db, "tourism", time.toString()), {
      title: req.body.title ?? "",
      location: req.body.location ?? "",
      imageUrl: req.body.imageUrl ?? "",
      distance: req.body.distance ?? "",
      weather: req.body.weather ?? "",
      price: req.body.price ?? "",
      description: req.body.description ?? "",
    });

    res.status(200).json({ data: time.toString(), message: "Oke" });
  } else {
    res.status(200).json("Gagal nambah");
  }
}
