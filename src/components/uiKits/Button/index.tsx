import { ComponentPropsWithRef, forwardRef } from "react";
import { Presenter } from "./presenter";

export const Button = forwardRef<
  unknown,
  ComponentPropsWithRef<typeof Presenter>
>((props, ref) => <Presenter {...props} ref={ref}></Presenter>);
