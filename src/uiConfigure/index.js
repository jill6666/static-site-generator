import Accordion from './creator/Accordion';
import AspectRatio from './creator/AspectRatio';
import Box from './creator/Box';
import Button from './creator/Button';
import Card from './creator/Card';
import Carousel from './creator/Carousel';
import Map from './creator/Map';
import Tabs from './creator/Tabs';
import Text from './creator/Text';
import Progress from './creator/Progress';
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
};
