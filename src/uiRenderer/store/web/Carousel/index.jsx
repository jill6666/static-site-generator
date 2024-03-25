import * as React from 'react';

import AspectRatio from '../AspectRatio';
import { Carousel as CarouselMarkup, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './markup';

const Carousel = ({ items = [] }) => {
  return (
    <div className="w-full px-12">
      <CarouselMarkup>
        <CarouselContent className="w-full">
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <AspectRatio imgUrl={item?.imgUrl} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </CarouselMarkup>
    </div>
  );
};
export default Carousel;
