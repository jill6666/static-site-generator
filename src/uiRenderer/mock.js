const data = {
  pageId: "0001",
  settings: { backgroundColor: "#eee" },
  schema: [
    {
      id: "00001",
      type: "Box",
      props: {
        padding: ".5rem",
        children: [
          {
            id: "10001",
            type: "AspectRatio",
            props: {
              ratio: [21, 9],
              imgUrl: "https://cataas.com/cat",
            },
          },
        ],
      },
    },
    {
      id: "00002",
      type: "Box",
      props: {
        padding: ".5rem 1rem",
        margin: "0 0 1rem 0",
        children: [
          {
            id: "20001",
            type: "Text",
            props: {
              text: "Hello, world",
              fontSize: "32px",
              fontWeight: "700",
              textAlign: "right",
            },
          },
          {
            id: "20002",
            type: "Progress",
            props: {
              value: "77",
              color: "teal",
              background: "pink",
              height: "12px",
            },
          },
        ],
      },
    },
    {
      id: "00003",
      type: "Box",
      props: {
        padding: ".5rem",
        height: "160px",
        children: [
          {
            id: "30001",
            type: "Tabs",
            props: {
              height: "200px",
              padding: ".5rem",
              contentColor: "pink",
              background: "#333",
              borderRadius: "5px",
              items: [
                {
                  tab: { text: "Progress", fontSize: "14px" },
                  content:
                    "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
                },
                {
                  tab: { text: "Tabs", fontSize: "14px" },
                  content:
                    "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: "00004",
      type: "Box",
      props: {
        padding: ".5rem",
        margin: "0 0 1rem 0",
        children: [
          {
            id: "40001",
            type: "Card",
            props: {
              title: "Card Title",
              description: "Card Description",
              children: [
                {
                  id: "41001",
                  type: "Box",
                  props: {
                    padding: "0 .5rem .5rem .5rem",
                    children: [
                      {
                        id: "41101",
                        type: "AspectRatio",
                        props: {
                          ratio: [21, 9],
                          imgUrl: "https://cataas.com/cat/gif",
                        },
                      },
                      {
                        id: "41102",
                        type: "Button",
                        props: {
                          navigateTo: "/",
                          text: "Click me!",
                          margin: ".5rem 0 0 0",
                          size: "lg",
                          variant: "secondary",
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
      id: "00005",
      type: "Box",
      props: {
        padding: ".5rem",
        margin: "0 0 1rem 0",
        children: [
          {
            id: "50001",
            type: "Carousel",
            props: {
              orientation: "horizontal",
              items: [
                { imgUrl: "https://cataas.com/cat/gif", navigateTo: "/" },
                { imgUrl: "https://cataas.com/cat/gif", navigateTo: "/" },
                { imgUrl: "https://cataas.com/cat/gif", navigateTo: "/" },
              ],
            },
          },
        ],
      },
    },
    {
      id: "00006",
      type: "Box",
      props: {
        padding: ".5rem",
        children: [
          {
            id: "60001",
            type: "Accordion",
            props: {
              padding: ".5rem",
              margin: ".2rem",
              background: "white",
              borderRadius: "1rem",
              triggerColor: "teal",
              contentColor: "#555",
              items: [
                {
                  trigger: "Is it accessible?",
                  content: "Yes. It adheres to the WAI-ARIA design pattern.",
                },
                {
                  trigger: "Is it styled?",
                  content:
                    "Yes. It comes with default styles that matches the other components' aesthetic.",
                },
                {
                  trigger: "Is it animated?",
                  content:
                    "Yes. It's animated by default, but you can disable it if you prefer.",
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: "00007",
      type: "Box",
      props: {
        padding: ".5rem",
        children: [
          {
            id: "70001",
            type: "Box",
            props: {
              padding: "1rem 0",
              twStyle: "gap-2",
              children: [
                {
                  id: "71001",
                  type: "Text",
                  props: {
                    text: "Contact Us",
                    fontSize: "1.5rem",
                    fontWeight: "700",
                  },
                },
                {
                  id: "71002",
                  type: "Text",
                  props: {
                    text: "8F., No. 225-C棟, Sec. 2, Chang'an E. Rd., Songshan Dist., Taipei City 105, Taiwan (R.O.C.)",
                    fontSize: "14px",
                    fontWeight: "300",
                  },
                },
              ],
            },
          },
          {
            id: "70002",
            type: "Map",
            props: {
              positions: [
                { lat: 25.0407284, lng: 121.5484174 },
                { lat: 25.0533797, lng: 121.5462562 },
                { lat: 25.0518654, lng: 121.5448042 },
              ],
              defaultCenter: { lat: 25.0495911, lng: 121.5455781 },
              defaultZoom: 16,
            },
          },
        ],
      },
    },
  ],
};
export default data;
