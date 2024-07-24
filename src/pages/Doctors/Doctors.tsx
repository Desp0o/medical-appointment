import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useEffect, useState } from "react";
import "./doctors.css"

interface Doctor {
    id: string;
    [key: string]: any; // Allow any additional fields
  }
  
const Doctors = () => {
    const [docDb, setDocDb] = useState<Doctor[]>([]);

  const getDataBase = async () => {
    const collectionRef = collection(db, "doctors");
    const querySnapshot = await getDocs(collectionRef);

    if (!querySnapshot.empty) {
      const documents: Doctor[] = [];
      querySnapshot.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() });
      });
      setDocDb(documents);
    } else {
      console.log("No documents found!");
      setDocDb([]); // Ensure state is empty if no documents are found
    }
  };

  useEffect(() => {
    getDataBase();
  }, []);
  return (
    <div>
    {docDb.length > 0 ? (
      docDb.map((doc) => (
        <div key={doc.id}>
          <h3>Document ID: {doc.id}</h3>
          <pre>{JSON.stringify(doc, null, 2)}</pre>
        </div>
      ))
    ) : (
      <p>No documents available.</p>
    )}
  </div>
  )
}

export default Doctors
