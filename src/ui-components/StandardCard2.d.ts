/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type StandardCard2OverridesProps = {
    "6969"?: PrimitiveOverrideProps<TextProps>;
    StandardCard2?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group"?: PrimitiveOverrideProps<FlexProps>;
    "$99 USD"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type StandardCard2Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: StandardCard2OverridesProps | undefined | null;
}>;
export default function StandardCard2(props: StandardCard2Props): React.ReactElement;
