import { ref, get } from 'firebase/database';
import db from './db';

async function getPagesData() {
  const pagesRef = ref(db, 'pages/');

  try {
    const snapshot = await get(pagesRef);
    return snapshot.val();
  } catch (e) {
    console.error('Error getting data:', JSON.stringify(e));
  }
  return;
}
export default getPagesData;
