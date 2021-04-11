import { css, cx } from "linaria";
import type { FC, VFC } from "react";
import { fonts } from "../../../theme/fonts";
import { Button } from "../../uiKits/Button";
import { Background } from "./components/BackGround";

export const Home: VFC = () => (
  <main className={layout}>
    <Title className={layoutTitle} />
    <Description className={layoutDescription} />
    <CustomButton className={layoutButton} />
    <Background className={layoutBackGround} />
  </main>
);

const layout = css`
  display: grid;
  grid-template-columns: 1fr auto auto auto 1fr;
  grid-template-rows: 1fr auto 30px auto 30px auto 1fr;
  grid-template-areas:
    ". .           .           .           ."
    ". title       title       title       ."
    ". .           .           .           ."
    ". description description description ."
    ". .           .           .           ."
    ". button      .           .           ."
    ". .           .           .           .";

  min-height: 100vh;
`;

const layoutTitle = css`
  grid-area: title;
`;

const layoutDescription = css`
  grid-area: description;
`;

const layoutButton = css`
  grid-area: button;
`;

const layoutBackGround = css`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

/**
 * Title Component
 */
const Title: FC<{ className: string }> = ({ className }) => (
  <h1 className={cx(className, styleTitle)}>Next-linaria-boilerplate</h1>
);

const styleTitle = css`
  font-family: ${fonts.family.FredokaOne};
  font-size: 5vw;
`;

/**
 * Description Component
 */
const Description: FC<{ className?: string }> = ({ className }) => (
  <p className={cx(className, styleDescription)}>
    This is an extension of &nbsp;
    <a
      href="https://github.com/vercel/next.js/tree/canary/examples/with-linaria"
      rel="noffolow"
    >
      &quot;the next with linaria example.&quot;
    </a>
  </p>
);

const styleDescription = css`
  font-size: 3vw;
`;

/**
 * CustomButton Component
 */
const CustomButton: FC<{ className?: string }> = ({ className }) => (
  <Button
    className={cx(className, styleButton)}
    onClick={() => {
      alert("hello world");
    }}
  >
    test button
  </Button>
);

const styleButton = css`
  background-color: skyblue;
  color: #000;
`;

export default Home;
