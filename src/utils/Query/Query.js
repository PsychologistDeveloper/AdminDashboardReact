/* eslint-disable */
import { db } from 'Utils/Firebase';

export const addDoc = (
  path,
  data,
  isAutoKeygen = false,
  merge = true,
) => {
  if (isAutoKeygen) {
    db.collection(path).add(data);
    return;
  }

  db.doc(path).set(data, { merge });
};

export const getDocByField = async (collectionName, fieldName, field) => {
  let data = null;

  try {
    const a = await db.collection(collectionName).doc('V8eqO3QfLbNbK0YfUFRF').
    console.log(a)
  //     .where(fieldName, '==', field)
      
  //     .get()
  //     .then((querySnapshot) => {
  //       debugger
  //       querySnapshot.forEach((element) => {
  //         debugger;
  //         data = element.data();
  //       });
  //     });

  //     debugger
  } catch (e) {
    console.log(e);
  }

  return data;
};
