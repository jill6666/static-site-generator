import Accordion from "./web/Accordion";
import AspectRatio from "./web/AspectRatio";
import Box from "./web/Box";
import Button from "./web/Button";
import Card from "./web/Card";
import Carousel from "./web/Carousel";
import Map from "./web/Map";
import Tabs from "./web/Tabs";
import Text from "./web/Text";
import Progress from "./web/Progress";

import Border from "./form/Border";
import Color from "./form/Color";
import Distance from "./form/Distance";
import Image from "./form/Image";
import Input from "./form/Input";
import Radio from "./form/Radio";
import Range from "./form/Range";
import Size from "./form/Size";

import withField from "../utils/withField";

export const UIStore = {
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

export const FormStore = {
  Input: withField(Input),
  Color: withField(Color),
  Image: withField(Image),
  Radio: withField(Radio),
  Range: withField(Range),
  Size: withField(Size),
  Border: withField(Border),
  Distance: withField(Distance),
};
