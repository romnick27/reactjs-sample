/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BadgeProps, DividerProps, FlexProps, IconProps, ImageProps, RatingProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductCard2OverridesProps = {
    "100"?: PrimitiveOverrideProps<TextProps>;
    ProductCard2?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Classic Long Sleeve T-Shirt"?: PrimitiveOverrideProps<TextProps>;
    Ratings?: PrimitiveOverrideProps<FlexProps>;
    "\uD83D\uDD12Icon"?: PrimitiveOverrideProps<IconProps>;
    Rating?: PrimitiveOverrideProps<RatingProps>;
    Tags?: PrimitiveOverrideProps<FlexProps>;
    Badge38464394?: PrimitiveOverrideProps<BadgeProps>;
    Badge38464395?: PrimitiveOverrideProps<BadgeProps>;
    Badge38464396?: PrimitiveOverrideProps<BadgeProps>;
    "Information about this product."?: PrimitiveOverrideProps<TextProps>;
    Quote?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    "\u201CThis is a quote.\u201C"?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    Features?: PrimitiveOverrideProps<FlexProps>;
    Feature38464403?: PrimitiveOverrideProps<FlexProps>;
    Icon38464404?: PrimitiveOverrideProps<ViewProps>;
    Vector38464405?: PrimitiveOverrideProps<IconProps>;
    Fast?: PrimitiveOverrideProps<TextProps>;
    Feature38464407?: PrimitiveOverrideProps<FlexProps>;
    Icon38464408?: PrimitiveOverrideProps<ViewProps>;
    Vector38464409?: PrimitiveOverrideProps<IconProps>;
    Fun?: PrimitiveOverrideProps<TextProps>;
    Feature38464411?: PrimitiveOverrideProps<FlexProps>;
    Icon38464412?: PrimitiveOverrideProps<ViewProps>;
    Vector38464413?: PrimitiveOverrideProps<IconProps>;
    Flirty?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ProductCard2Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ProductCard2OverridesProps | undefined | null;
}>;
export default function ProductCard2(props: ProductCard2Props): React.ReactElement;
