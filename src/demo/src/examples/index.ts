import Basic from "./Basic";
import CustomStyle from "./CustomStyle";
import HTML from "./HTML";
import IconAndCloseButton from "./IconAndCloseButton";
import Input from "./Input";
import LongMessage from "./LongMessage";
import Password from "./Password";
import Success from "./Success";
import TitleWithText from "./TitleWithText";
import WarningWithCallbacks from "./WarningWithCallbacks";

export class Example {
  constructor(
    public title: string,
    public snippet: string
  ) {}
}

export const examples: Example[] = [
  Basic,
  TitleWithText,
  Success,
  WarningWithCallbacks,
  IconAndCloseButton,
  HTML,
  Input,
  Password,
  CustomStyle,
  LongMessage,
];
