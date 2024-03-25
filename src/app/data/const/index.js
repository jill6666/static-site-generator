import samplePageData from './samplePageData';
import getUniqId from '../../utils/getUniqId';
import { UIDefaultProps } from '../../../uiConfigure';

export const PAGE_LIST = 'pageList';
export const PAGE_ASSETS_TEMPLATE = 'pageAssetsTemplate';
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
        ...UIDefaultProps['Box'],
        name: 'example',
        children: [
          {
            id: getUniqId(),
            type: 'Text',
            props: { ...UIDefaultProps['Text'] },
          },
        ],
      },
    },
  ],
};
export { samplePageData };
