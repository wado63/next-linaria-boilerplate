import { css, cx } from "linaria";
import { forwardRef, MutableRefObject } from "react";

type AllowButtonType = NonNullable<
  Required<React.ButtonHTMLAttributes<HTMLButtonElement>["type"]>
>;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
  type: AllowButtonType;
};
type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string;
  type?: undefined;
};

const hasHref = (props: ButtonProps | AnchorProps): props is AnchorProps =>
  "href" in props;

export const Presenter = forwardRef<unknown, ButtonProps | AnchorProps>(
  (props, ref) => {
    if (hasHref(props))
      return (
        <a
          {...props}
          className={cx(props.className, styledButton)}
          ref={ref as MutableRefObject<HTMLAnchorElement>}
        />
      );

    return (
      <button
        {...props}
        className={cx(props.className, styledButton)}
        ref={ref as MutableRefObject<HTMLButtonElement>}
      />
    );
  }
);

export const styledButton = css`
  color: #fff;
  background-color: #eb6100;
  border: none;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.5;
  display: inline-block;
  padding: 1rem 4rem;
  cursor: pointer;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  letter-spacing: 0.1em;
  border-radius: 0.5rem;
  &:hover {
    outline: #68ceff auto 1px;
  }
  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: #68ceff auto 1px;
  }
`;
