import { ref, set } from 'firebase/database';
import db from './db';

export default async function setPageData({ slug, props, onSuccess, onError }) {
  try {
    await set(ref(db, `pages/${slug}`), props);

    onSuccess && onSuccess();
  } catch (e) {
    console.error('setPageData error:', e);
    onError && onError();
  }
}
