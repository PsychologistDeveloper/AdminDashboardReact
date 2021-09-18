import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db } from 'Utils/Firebase';

const WithUseCollectionData = (collectionNames) => (Component) => {
  const WithStringUseCollectionData = (collectionName) => (Component) => (props) => {
    const [value, loading, error] = useCollectionData(db.collection(collectionName));

    const data = {};
    data[collectionName] = {
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
    resultComponent = WithStringUseCollectionData(name)(resultComponent);
  });

  return resultComponent;
};

export default WithUseCollectionData;
