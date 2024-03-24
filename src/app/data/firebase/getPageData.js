import { ref, onValue } from 'firebase/database';
import db from './db';

export default function getPageData({ index }) {
  const pageRef = ref(db, 'pages/' + index);

  return onValue(
    pageRef,
    snapshot => {
      const pageData = snapshot.val();
      return pageData;
    },
    {
      onlyOnce: true,
    },
  );
}
