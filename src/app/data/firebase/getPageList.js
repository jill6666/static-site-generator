import { ref, get } from 'firebase/database';
import db from './db';

export default async function getPageList() {
  const pagesRef = ref(db, 'pages/');

  try {
    const snapshot = await get(pagesRef);
    return snapshot.val();
  } catch (e) {
    console.error('Error getting data:', JSON.stringify(e));
  }
  return;
}
