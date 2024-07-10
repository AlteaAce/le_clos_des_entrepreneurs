// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconsArrowTopRightsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconsArrowTopRightsvgIcon(
  props: IconsArrowTopRightsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 25"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.697 4.432V2.275c0-.913.738-1.652 1.647-1.647L22.225.623c.913 0 1.652.739 1.647 1.647v18.886c0 .914-.738 1.652-1.647 1.647h-2.157a1.65 1.65 0 01-1.646-1.686l.276-11.43-13.96 13.961a1.645 1.645 0 01-2.332 0L.852 22.094a1.645 1.645 0 010-2.332l13.96-13.96-11.43.276a1.639 1.639 0 01-1.685-1.646z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsArrowTopRightsvgIcon;
/* prettier-ignore-end */
