import { ref, set } from 'firebase/database';
import db from './db';

export default function setPageData({ index, pageId, settings, schema }) {
  set(ref(db, 'pages/' + index), {
    pageId,
    settings,
    schema,
  })
    .then(() => {
      console.log('Data set.');
      return true;
    })
    .catch(error => {
      console.error('Error setting data:', error);
      return false;
    });
}
