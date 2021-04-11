import { AppPropsType } from "next/dist/next-server/lib/utils";
import { ReactElement } from "react";
import { GlobalStyles } from "../theme/components/GlobalStyles";

export default function MyApp({
  Component,
  pageProps,
}: AppPropsType): ReactElement {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
