import React, { Suspense } from 'react';
import { Card as CardMarkup, CardDescription, CardHeader, CardTitle } from './markup';

const RenderSchema = React.lazy(() => import('../../../index'));

const Card = ({
  children,
  twStyle = '',
  title,
  description,
  titleColor,
  descriptionColor,
  height,
  width,
  padding,
  margin,
  border,
  borderRadius,
  background,
}) => {
  return (
    <CardMarkup
      className={twStyle}
      style={{
        height,
        width,
        padding,
        margin,
        border,
        borderRadius,
        background,
      }}
    >
      {(description || title) && (
        <CardHeader>
          {title && <CardTitle style={{ color: titleColor }}>{title}</CardTitle>}
          {description && <CardDescription style={{ color: descriptionColor }}>{description}</CardDescription>}
        </CardHeader>
      )}
      <Suspense fallback={<></>}>
        <RenderSchema schema={children} />
      </Suspense>
    </CardMarkup>
  );
};
export default Card;
