import { db } from 'Utils/Firebase';

// DB setters
export const addDocWithAutoId = async (
    collectionPath,
    data,
) => {
    try {
        const result = await db.collection(collectionPath).add(data).then((docRef) => docRef.id);
        return result;
    } catch (e) {
        alert(e);
    }
};

export const addOrUpdateDoc = async (docPath, data, merge = true) => {
    await db.doc(docPath).set(data, { merge });
};

export const deleteDocByPath = async (docPath) => {
    await db
        .doc(docPath)
        .get()
        .then((doc) => doc.ref.delete());
};

// DB getters

export const getDocId = async (
    collectionName,
    fieldName,
    field,
) => {
    try {
        const id = await db
            .collection(collectionName)
            .where(fieldName, '==', field)
            .get();

        return id.docs[0]?.id;
    } catch (e) {
        alert(e);
    }
};

// DB getters
export const getDocByPath = async (path) => {
    try {
        const docData = await db
            .doc(path)
            .get()
            .then((snapshot) => snapshot.data());

        return docData;
    } catch (e) {
        alert(e);
    }
};

export const getCollectionDocs = async (path) => {
    try {
        const docs = await db
            .collection(path)
            .get()
            .then(
                (snapshot) => snapshot.docs.map(
                    (doc) => ({
                        data: doc.data(),
                        id: doc.id,
                    }),
                ),
            );

        return docs;
    } catch (e) {
        alert(e);
    }
};

export const getCollectionDocsByWhere = async (collectionName, fieldName, field) => {
    try {
        return await db
            .collection(collectionName)
            .where(fieldName, '==', field)
            .get()
            .then(
                (snapshot) => snapshot.docs.map(
                    (doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }),
                ),
            );
    } catch (e) {
        alert(e);
    }
};

const _getDocsData = (snapshot) => {
    const docs = snapshot.docs;
    const docsData = docs.map(
        (doc) => ({
            id: doc.id,
            data: doc.data(),
        }),
    );

    return {
        docs,
        docsData
    };
}

export const getInitialSortedPaginatedDocsByWhere = async (
    collectionName,
    limit,
    orderBy,
    fieldName,
    field,
    orderingType = 'desc',
) => {
    try {
        return await db
            .collection(collectionName)
            .where(fieldName, '==', field)
            .orderBy(orderBy, orderingType)
            .limit(limit)
            .get()
            .then(_getDocsData);
    } catch (e) {
        console.log(e);
    }
};

export const getNextDocsByWhere = async (
    collectionName,
    limit,
    startAfter,
    orderBy,
    fieldName,
    field,
    orderingType = 'desc',
) => {
    try {
        return await db
            .collection(collectionName)
            .where(fieldName, '==', field)
            .orderBy(orderBy, orderingType)
            .startAfter(startAfter)
            .limit(limit)
            .get()
            .then(_getDocsData);
    } catch (e) {
        alert(e);
    }
};

export const getInitialSortedPaginatedDocs = async (
    collectionName,
    limit,
    orderBy,
    orderingType = 'desc',
) => {
    try {
        return await db
            .collection(collectionName)
            .orderBy(orderBy, orderingType)
            .limit(limit)
            .get()
            .then(_getDocsData);
    } catch (e) {
        alert(e);
    }
};

export const getNextDocs = async (
    collectionName,
    limit,
    startAfter,
    orderBy,
    orderingType = 'desc',
) => {
    try {
        return await db
            .collection(collectionName)
            .orderBy(orderBy, orderingType)
            .startAfter(startAfter)
            .limit(limit)
            .get()
            .then(_getDocsData);
    } catch (e) {
        alert(e);
    }
};