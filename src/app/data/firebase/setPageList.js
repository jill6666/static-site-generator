import { ref, set } from 'firebase/database';
import db from './db';

export default async function setPageList({ newPageList, pageId, settings, schema, onSuccess, onError }) {
  const pageListRef = ref(db, 'pages');

  try {
    await set(pageListRef, newPageList);

    return onSuccess && onSuccess();
  } catch (e) {
    console.log('setPageList error:', e);
    return onError && onError();
  }
}
