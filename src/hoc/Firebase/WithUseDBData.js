/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore';
import { db } from 'Utils/Firebase';

export const DOC = 'DOC';
export const DOC_BY_ID = 'DOC_BY_ID';
export const COLLECTION = 'COLLECTION';

export const WithUseDBData = (configs) => (Component) => {

  const WithStringUseCollectionData = (config) => (Component) => (props) => {
    const {
      type,
      path,
      nameInProps,
      fieldName,
      dispatchCbName,
      reduxDependencyName
    } = config;

    const field = props[fieldName] || null;
    const dispatchCb = props[dispatchCbName] || (() => {});
    const name = nameInProps || path;

    let [value, loading, error] = [undefined, false, undefined];

    switch(type) {
      case COLLECTION:
        [value, loading, error] = useCollectionData(db.collection(path));
        break;

      case DOC:
        [value, loading, error] = useDocumentData(db.doc(path));
        break;

      case DOC_BY_ID:
        if (!field || props[reduxDependencyName]) {
          break;
        }

        const [ val, setValue ] = useState([]);
        value = val;

        loading = true;

        useEffect(() => {
          db.collection(path)
            .where(fieldName, '==', field)
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((element) => {
                setValue(element.data());
              });

              loading = false;
            },
            (err) => {
              error = err;
            });
        });

        break;

      default:
        return;
    }

    const data = {};
    data[name] = {
      value: value || props[reduxDependencyName],
      loading,
      error,
    };

    dispatchCb(data);

    return (
      <Component
        {...props}
        {...data}
      />
    );
  };

  let resultComponent = Component;

  configs.forEach((config) => {
      resultComponent = WithStringUseCollectionData(config)(resultComponent);
  });

  return resultComponent;
};

export default WithUseDBData;
