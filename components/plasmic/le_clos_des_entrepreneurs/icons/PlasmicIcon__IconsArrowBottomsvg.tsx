// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconsArrowBottomsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconsArrowBottomsvgIcon(props: IconsArrowBottomsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 59 59"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M26.896 46.854a3.693 3.693 0 005.22 0L54.24 24.73a3.693 3.693 0 000-5.22 3.693 3.693 0 00-5.22 0L29.5 39.03 9.98 19.522a3.693 3.693 0 00-5.22 0 3.693 3.693 0 000 5.22l22.124 22.125.012-.012z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsArrowBottomsvgIcon;
/* prettier-ignore-end */
