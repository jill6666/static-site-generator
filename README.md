# CUBE

Description: Generate Static Site without Coding.

# Development

Get Started!

```bash
yarn
yarn start
```

## src/uiConfigure

Configurations for each Web Elements, what settings can be adjusted.

The schema is aim to render the control panel with form, and the type in object is defined as 'FormStore' in src/uiRenderer/store.

e.g. Accordion

```javascript
const schema = {
  name: { type: 'Input', label: 'Element Name' },
  height: { type: 'Size', label: 'Height' },
  width: { type: 'Size', label: 'Width' },
  padding: { type: 'Distance', label: 'Padding' },
  margin: { type: 'Distance', label: 'Margin' },
  border: { type: 'Border', label: 'Border' },
  borderRadius: { type: 'Size', label: 'Border Radius' },
  twStyle: { type: 'Input', label: 'Style (tailwind)' },
  triggerColor: { type: 'Color', label: 'Trigger Color' },
  contentColor: { type: 'Color', label: 'Content Color' },
  items: {
    type: 'Repeater',
    label: 'Accordion Content',
    control: {
      trigger: { type: 'Input', label: 'Trigger' },
      content: { type: 'Input', label: 'Content' },
    },
  },
};
```

## src/uiRenderer

Defind the render method of UI by schema, like form rendering and web components rendering. And store elements for rendering.

```javascript
import { RenderSchema, RenderForm } from 'src/uiRenderer';

const webPageSchema = [
    {
      id: "00001",
      type: "Box",
      props: {
        name: "banner",
        padding: ".5rem",
        children: [
          {
            id: "10001",
            type: "AspectRatio",
            props: {
              name: "bannerImg",
              ratio: [21, 9],
              imgUrl: "https://cataas.com/cat",
            },
          },
        ],
      },
    }
]

const formSchema = [
    {
        type: 'Input',
        props: {
            placeholder:'',
            maxLength: 50,
            autoComplete: "on",
        }
    }
]

// render web page
<Suspense fallback={<>OOPS! Something went wrong</>}>
  <RenderSchema schema={webPageSchema} />
</Suspense>;

// render control panel
<Suspense fallback={<>OOPS! Something went wrong</>}>
  <RenderForm schema={formSchema} />;
</Suspense>;
```
