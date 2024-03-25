import getCurrentUser from '../../utils/getCurrentUser';
import getUniqId from '../../utils/getUniqId';
import { UIDefaultProps } from '../../../uiConfigure';

const pageData = {
  pageId: 'sample',
  settings: {
    backgroundColor: '#0f172a',
    title: 'This is a SAMPLE.',
    description: 'This is a sample page.',
    imgUrl: 'https://cataas.com/cat',
    updatedAt: new Date().toUTCString(),
    updatedBy: getCurrentUser(),
    enabled: true,
  },
  schema: [
    {
      id: getUniqId(),
      type: 'Box',
      props: {
        ...UIDefaultProps['Box'],
        name: 'banner',
        children: [
          {
            id: getUniqId(),
            type: 'AspectRatio',
            props: {
              ...UIDefaultProps['AspectRatio'],
              name: 'bannerImg',
              ratio: [21, 9],
              imgUrl: 'https://cataas.com/cat',
            },
          },
        ],
      },
    },
    {
      id: getUniqId(),
      type: 'Box',
      props: {
        ...UIDefaultProps['Box'],
        name: 'intro',
        children: [
          {
            id: getUniqId(),
            type: 'Text',
            props: {
              ...UIDefaultProps['Text'],
              name: 'hello',
              text: 'If You Like the Project, 👇',
              fontSize: '32px',
              fontWeight: '700',
              textAlign: 'right',
              color: '#eee',
            },
          },
          {
            id: getUniqId(),
            type: 'Progress',
            props: {
              ...UIDefaultProps['Progress'],
              padding: '',
              name: 'progress',
              value: '77',
              color: 'teal',
              background: 'pink',
              height: '12px',
              twStyle: 'border mx-1',
            },
          },
          {
            id: getUniqId(),
            type: 'BuyMeACoffee',
            props: {
              ...UIDefaultProps['BuyMeACoffee'],
              ownerAddr: '0xFE2e24329D4cf49362CC864A51B792157e25Ab92',
            },
          },
        ],
      },
    },
    {
      type: 'Box',
      props: {
        ...UIDefaultProps['Box'],
        name: 'tabs section',
        height: '160px',
        children: [
          {
            id: getUniqId(),
            type: 'Tabs',
            props: {
              ...UIDefaultProps['Tabs'],
              name: 'tabs',
              borderRadius: '5px',
              padding: '12px 8px 12px 8px',
              darkMode: true,
              items: [
                {
                  tab: { text: 'Buy Me a Coffee', fontSize: '14px' },
                  content:
                    '☕️ This is a simple way to support the project. If you like the project, you can buy me a coffee.',
                },
                {
                  tab: { text: 'History', fontSize: '14px' },
                  content: '👻 0x1234...5678 supported the project with 0.1 ETH.',
                },
              ],
            },
          },
        ],
      },
    },
    {
      type: 'Box',
      props: {
        ...UIDefaultProps['Box'],
        name: 'card section',
        children: [
          {
            id: getUniqId(),
            type: 'Card',
            props: {
              ...UIDefaultProps['Card'],
              name: 'card',
              title: 'Card Title',
              description: 'Card Description',
              children: [
                {
                  id: getUniqId(),
                  type: 'Box',
                  props: {
                    padding: '0 .5rem .5rem .5rem',
                    children: [
                      {
                        id: getUniqId(),
                        type: 'AspectRatio',
                        props: {
                          ...UIDefaultProps['AspectRatio'],
                          name: 'card as',
                          ratio: [21, 9],
                          imgUrl: 'https://cataas.com/cat/gif',
                        },
                      },
                      {
                        id: getUniqId(),
                        type: 'Button',
                        props: {
                          ...UIDefaultProps['Button'],
                          name: 'card button',
                          navigateTo: '/',
                          text: 'Click me!',
                          size: 'lg',
                          variant: 'default',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      type: 'Box',
      props: {
        ...UIDefaultProps['Box'],
        name: 'carousel section',
        children: [
          {
            id: getUniqId(),
            type: 'Carousel',
            props: {
              ...UIDefaultProps['Carousel'],
              name: 'carousel',
              orientation: 'horizontal',
              items: [
                { imgUrl: 'https://cataas.com/cat/gif', navigateTo: '/' },
                { imgUrl: 'https://cataas.com/cat/gif', navigateTo: '/' },
                { imgUrl: 'https://cataas.com/cat/gif', navigateTo: '/' },
              ],
            },
          },
        ],
      },
    },
    {
      type: 'Box',
      props: {
        ...UIDefaultProps['Box'],
        name: 'accordion section',
        children: [
          {
            id: getUniqId(),
            type: 'Accordion',
            props: {
              ...UIDefaultProps['Accordion'],
              name: 'accordion',
              background: 'white',
              borderRadius: '1rem',
              triggerColor: 'teal',
              contentColor: '#555',
              items: [
                {
                  trigger: 'Is it accessible?',
                  content: 'Yes. It adheres to the WAI-ARIA design pattern.',
                },
                {
                  trigger: 'Is it styled?',
                  content: "Yes. It comes with default styles that matches the other components' aesthetic.",
                },
                {
                  trigger: 'Is it animated?',
                  content: "Yes. It's animated by default, but you can disable it if you prefer.",
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: getUniqId(),
      type: 'Box',
      props: {
        ...UIDefaultProps['Box'],
        name: 'contact section',
        children: [
          {
            id: getUniqId(),
            type: 'Box',
            props: {
              ...UIDefaultProps['Box'],
              name: 'contact',
              padding: '1rem 0',
              twStyle: 'gap-2',
              children: [
                {
                  type: 'Text',
                  props: {
                    ...UIDefaultProps['Text'],
                    name: 'contact text',
                    text: 'Contact Us',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                  },
                },
                {
                  id: getUniqId(),
                  type: 'Text',
                  props: {
                    ...UIDefaultProps['Text'],
                    name: 'address',
                    text: '845 Avison Way, Vancouver, BC V6G 3E2',
                    fontSize: '14px',
                    fontWeight: '300',
                  },
                },
              ],
            },
          },
          {
            id: getUniqId(),
            type: 'Map',
            props: {
              ...UIDefaultProps['Map'],
              name: 'map',
              positions: [{ lat: 49.3006591, lng: -123.1308637 }],
              defaultCenter: { lat: 49.3006591, lng: -123.1308637 },
            },
          },
        ],
      },
    },
  ],
};
export default pageData;
