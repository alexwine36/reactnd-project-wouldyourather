declare module 'mabrg-ui' {
  import { HTMLAttributes, ReactNode } from 'react';

  type ResponsiveValue<T> = T | (T | null)[];
  type SpaceValue = number | string;
  type ResponsiveSpaceValue = ResponsiveValue<SpaceValue>;
  type WidthValue = number | string;
  type ResponsiveWidthValue = ResponsiveValue<WidthValue>;
  type JustifyContentValue =
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'left'
    | 'right'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'safe center'
    | 'unsafe center';
  type ResponsiveJustifyContentValue = ResponsiveValue<JustifyContentValue>;
  type AlignItemsValue =
    | 'normal'
    | 'stretch'
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'self-start'
    | 'self-end'
    | 'left'
    | 'right'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'safe center'
    | 'unsafe center';
  type ResponsiveAlignItemsValue = ResponsiveValue<AlignItemsValue>;

  interface AlignItemsProps {
    align?: ResponsiveAlignItemsValue;
  }
  interface JustifyContentProps {
    justify?: ResponsiveJustifyContentValue;
  }
  interface WidthProps {
    width?: ResponsiveWidthValue;
    w?: ResponsiveWidthValue;
  }
  interface SpaceProps {
    m?: ResponsiveSpaceValue;
    mt?: ResponsiveSpaceValue;
    mr?: ResponsiveSpaceValue;
    mb?: ResponsiveSpaceValue;
    ml?: ResponsiveSpaceValue;
    mx?: ResponsiveSpaceValue;
    my?: ResponsiveSpaceValue;
    p?: ResponsiveSpaceValue;
    pt?: ResponsiveSpaceValue;
    pr?: ResponsiveSpaceValue;
    pb?: ResponsiveSpaceValue;
    pl?: ResponsiveSpaceValue;
    px?: ResponsiveSpaceValue;
    py?: ResponsiveSpaceValue;
  }

  interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
    icon: string;
    base?: string;
    emphasis?: number;
    reverse?: boolean;
    type?: string;
    to?: string;
    href?: string;
  }
  interface HrProps extends HTMLAttributes<HTMLHRElement>, SpaceProps {
    base?: string;
    emphasis?: number;
  }
  interface Avatar extends HTMLAttributes<HTMLSpanElement>, SpaceProps {
    icon?: string;
    size?: number;
    base?: string;
    image?: string;
    transparent?: boolean;
  }
  interface BodyProps extends HTMLAttributes<HTMLBodyElement>, SpaceProps {
    base?: string;
    emphasis?: number;
    small?: boolean;
    optimalWidth?: boolean;
  }

  interface ButtonProps extends HTMLAttributes<HTMLButtonElement>, SpaceProps {
    base?: string;
    disabled?: boolean;
    outline?: boolean;
    type?: string;
    to?: string;
    href?: string;
    flat?: boolean;
    text?: boolean;
  }
  interface CaptionProps
    extends HTMLAttributes<HTMLDivElement>,
      SpaceProps,
      WidthProps {
    base?: string;
    emphasis?: number;
    small?: boolean;
  }
  interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
    name?: string;
    checked?: boolean;
  }
  interface ChipsProps
    extends HTMLAttributes<HTMLDivElement>,
      SpaceProps,
      WidthProps {
    base?: string;
    emphasis?: number;
    reverse?: boolean;
    left?: ReactNode;
    right?: ReactNode;
    outline?: boolean;
  }
  interface ColProps extends HTMLAttributes<HTMLDivElement>, SpaceProps {
    col?: number;
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
    xl?: boolean;
    smCol?: number;
    mdCol?: number;
    lgCol?: number;
    xlCol?: number;
  }
  interface ContainerProps
    extends HTMLAttributes<HTMLDivElement>,
      SpaceProps,
      WidthProps {}
  interface FabProps extends IconButtonProps {
    center?: boolean;
    square?: boolean;
    diamond?: boolean;
    right?: boolean;
    bottom?: boolean;
    widthPadding?: number;
    heightPadding?: number;
  }
  interface HeadingProps
    extends HTMLAttributes<HTMLHeadingElement>,
      SpaceProps {
    asLevel?: number;
    level?: number;
    base?: string;
    emphasis?: number;
  }
  interface IconProps extends HTMLAttributes<HTMLSpanElement>, SpaceProps {
    icon?: string;
    intensity?: number;
    size?: number;
    base?: string;
  }
  interface InputProps
    extends HTMLAttributes<HTMLInputElement>,
      SpaceProps,
      WidthProps {
    type?: string;
    box?: boolean;
    bgBase?: string;
    bgIntensity?: number;
    label?: string;
    outlined?: boolean;
    base?: string;
    intensity?: number;
    reverse?: boolean;
    error?: string | any;
    value?: string | number;
  }
  interface LabelProps
    extends HTMLAttributes<HTMLLabelElement>,
      SpaceProps,
      WidthProps,
      AlignItemsProps,
      JustifyContentProps {
    base?: string;
    emphasis?: number;
    underline?: boolean;
  }
  interface LiProps extends HTMLAttributes<HTMLLIElement>, SpaceProps {
    base?: string;
    emphasis?: number;
    small?: boolean;
    underline?: boolean;
  }
  interface LiTextProps extends HTMLAttributes<HTMLSpanElement> {}
  interface OverlineProps extends HTMLAttributes<HTMLDivElement>, SpaceProps {
    base?: string;
    emphasis?: number;
    optimalWidth?: boolean;
  }
  interface ProgressProps
    extends HTMLAttributes<HTMLDivElement>,
      SpaceProps,
      WidthProps {
    base?: string;
    emphasis?: number;
    progress: number;
  }
  interface RadioProps extends HTMLAttributes<HTMLInputElement> {
    name?: string;
    value?: string;
    checked?: boolean;
    reverse?: boolean;
    base?: boolean;
  }
  interface RowProps
    extends HTMLAttributes<HTMLDivElement>,
      SpaceProps,
      WidthProps {}
  interface SubtitleProps extends HTMLAttributes<HTMLDivElement>, SpaceProps {
    base?: string;
    emphasis?: number;
    small?: boolean;
  }
  interface TabProps extends HTMLAttributes<HTMLButtonElement> {
    reverse?: boolean;
    active?: boolean;
    icon?: string;
    text?: string;
    content?: ReactNode;
  }
  interface UlProps
    extends HTMLAttributes<HTMLUListElement>,
      SpaceProps,
      WidthProps {
    base?: string;
    emphasis?: number;
    small?: boolean;
    underline?: boolean;
  }
  interface MaterialThemeProps {
    theme: {};
  }
  interface AppBarProps extends HTMLAttributes<HTMLDivElement>, SpaceProps {
    bottom?: boolean;
    base?: string;
    emphasis?: number;
    reverse?: boolean;
    innerRef?: any;
  }
  interface AppBarStartProps
    extends HTMLAttributes<HTMLDivElement>,
      SpaceProps,
      AlignItemsProps {}

  interface CardBaseProps extends HTMLAttributes<HTMLDivElement> {}

  interface CardProps extends CardBaseProps, SpaceProps, WidthProps {
    elevation?: number;
    horizontal?: boolean;
    hoverable?: boolean;
    bottomRadius?: boolean;
  }

  interface CardPrimaryActionsProps extends CardBaseProps {
    outline?: boolean;
  }
  interface CardMediaProps extends CardBaseProps {
    image?: string;
    x?: number;
    y?: number;
  }
  interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
    vertical?: boolean;
  }
  interface DialogProps {
    header?: ReactNode;
    content?: ReactNode;
    footer?: ReactNode;
    active?: boolean;
    close?: () => any;
  }
  interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
    close?: () => void;
    header?: ReactNode;
    children?: ReactNode;
    linkStyle?: string;
    open: boolean;
  }
  interface EventProps {
    target: any;
  }
  interface RadioGroupProps
    extends HTMLAttributes<HTMLInputElement>,
      SpaceProps,
      WidthProps {
    underline?: boolean;
    name: string;
    children?: ReactNode;
    value?: string | number;
    onChange: (e: EventProps) => any;
  }
  interface TabsProps {
    reverse?: boolean;
    defaultActiveIndex?: number;
    children: ReactNode;
  }

  export function IconButton(props: IconButtonProps): JSX.Element;
  export function Hr(props: HrProps): JSX.Element;
  export function Avatar(props: Avatar): JSX.Element;
  export function Body(props: BodyProps): JSX.Element;
  export function Button(props: ButtonProps): JSX.Element;
  export function Caption(props: CaptionProps): JSX.Element;
  export function Checkbox(props: CheckboxProps): JSX.Element;
  export function Chips(props: ChipsProps): JSX.Element;
  export function Col(props: ColProps): JSX.Element;
  export function Container(props: ContainerProps): JSX.Element;
  export function Fab(props: FabProps): JSX.Element;
  export function Heading(props: HeadingProps): JSX.Element;
  export function Icon(props: IconProps): JSX.Element;
  export function Input(props: InputProps): JSX.Element;
  export function Label(props: LabelProps): JSX.Element;

  export function Overline(props: OverlineProps): JSX.Element;
  export function Progress(props: ProgressProps): JSX.Element;
  export function Radio(props: RadioProps): JSX.Element;
  export function Row(props: RowProps): JSX.Element;
  export function Subtitle(props: SubtitleProps): JSX.Element;
  export function Tab(props: TabProps): JSX.Element;
  export function Ul(props: UlProps): JSX.Element;
  export function ButtonGroup(props: ButtonGroupProps): JSX.Element;
  export function Drawer(props: DrawerProps): JSX.Element;
  export function RadioGroup(props: RadioGroupProps): JSX.Element;
  export function Tabs(props: TabsProps): JSX.Element;
  export namespace MaterialTheme {
    export function Provider(props: MaterialThemeProps): JSX.Element;
    export function combineTheme(props: MaterialThemeProps): {};
  }
  export function AppBar(props: AppBarProps): JSX.Element;
  export namespace AppBar {
    export function Start(props: AppBarStartProps): JSX.Element;
    export function End(props: AppBarStartProps): JSX.Element;
  }

  export function Li(props: LiProps): JSX.Element;
  export namespace Li {
    export function Text(props: LiTextProps): JSX.Element;
  }
  export function Card(props: CardProps): JSX.Element;
  export namespace Card {
    export function Primary(props: CardPrimaryActionsProps): JSX.Element;
    export function Secondary(props: CardBaseProps): JSX.Element;
    export function Actions(props: CardPrimaryActionsProps): JSX.Element;
    export function ActionIcons(props: CardBaseProps): JSX.Element;
    export function Content(props: CardBaseProps): JSX.Element;
    export function Media(props: CardMediaProps): JSX.Element;
  }
  export var Elevation: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    11: string;
    12: string;
    13: string;
    14: string;
    15: string;
    16: string;
    18: string;
    19: string;
    20: string;
    21: string;
    22: string;
    23: string;
    24: string;
  };
}
