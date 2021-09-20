/* eslint-disable */
import React from 'react';
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore';
import { db } from 'Utils/Firebase';

export const DOC = 'DOC';
export const COLLECTION = 'COLLECTION';


export function WithUseCollectionData(collectionNames) {
  return WithUseDBData(COLLECTION)(collectionNames);
}

export const WithUseDocData = (collectionNames) => {
  return WithUseDBData(DOC)(collectionNames);
}

const WithUseDBData = (type) => (collectionNames) => (Component) => {

  const WithStringUseCollectionData = (path, collectionName = null) => (Component) => (props) => {
    const name = collectionName || path;
    let [value, loading, error] = [];

    switch(type) {
      case COLLECTION:
        [value, loading, error] = useCollectionData(db.collection(path));
        break;

      case DOC:
        [value, loading, error] = useDocumentData(db.doc(path));
        break;

      default:
        return;
    }

    const data = {};
    data[name] = {
      value,
      loading,
      error,
    };

    return (
      <Component
        {...props}
        {...data}
      />
    );
  };

  let resultComponent = Component;

  collectionNames.forEach((name) => {
    if (Array.isArray(name)) {
      resultComponent = WithStringUseCollectionData(
        name[0],
        name[1]
      )(resultComponent);

      return;
    }

    resultComponent = WithStringUseCollectionData(name)(resultComponent);
  });

  return resultComponent;
};
