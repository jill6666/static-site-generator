import Accordion, { defaultValues as AccordionProps } from './creator/Accordion';
import AspectRatio, { defaultValues as AspectRatioProps } from './creator/AspectRatio';
import Box, { defaultValues as BoxProps } from './creator/Box';
import Button, { defaultValues as ButtonProps } from './creator/Button';
import Card, { defaultValues as CardProps } from './creator/Card';
import Carousel, { defaultValues as CarouselProps } from './creator/Carousel';
import Map, { defaultValues as MapProps } from './creator/Map';
import Tabs, { defaultValues as TabsProps } from './creator/Tabs';
import Text, { defaultValues as TextProps } from './creator/Text';
import Progress, { defaultValues as ProgressProps } from './creator/Progress';
import BuyMeACoffee, { defaultValues as BuyMeACoffeeProps } from './creator/BuyMeACoffee';

import { PageSettings } from './store/schema';

export const PageConfigure = { ...PageSettings };

export const UIConfigure = {
  Accordion, // 手風琴，收合 menu
  AspectRatio, // 依照比例展示圖片
  Box,
  Button,
  Card,
  Carousel,
  Map,
  Progress, // 進度條
  Tabs,
  Text,
  BuyMeACoffee,
};

export const UIDefaultProps = {
  Accordion: AccordionProps,
  AspectRatio: AspectRatioProps,
  Box: BoxProps,
  Button: ButtonProps,
  Card: CardProps,
  Carousel: CarouselProps,
  Map: MapProps,
  Progress: ProgressProps,
  Tabs: TabsProps,
  Text: TextProps,
  BuyMeACoffee: BuyMeACoffeeProps,
};
