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
