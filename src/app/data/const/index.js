import samplePageData from './samplePageData';
import getUniqId from '../../utils/getUniqId';

export const PAGE_LIST = 'pageList';
export const defaultPageSchema = {
  settings: {
    backgroundColor: '#eee',
    imgUrl: 'https://cataas.com/cat',
  },
  schema: [
    {
      id: getUniqId(),
      type: 'Box',
      props: {
        name: 'intro',
        padding: '.5rem 1rem',
        margin: '0 0 1rem 0',
        children: [
          {
            id: getUniqId(),
            type: 'Text',
            props: {
              name: 'hello world',
              text: 'Hello, world',
              fontSize: '32px',
              fontWeight: '700',
              textAlign: 'right',
            },
          },
        ],
      },
    },
  ],
};
export { samplePageData };
