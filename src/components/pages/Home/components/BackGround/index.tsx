import { css, cx } from "linaria";
import { styled } from "linaria/lib/react";
import type { FC } from "react";

export const Background: FC<{ className?: string }> = ({ className }) => (
  // cxの書き順注意 classNameを渡さないと上書きできない
  <div className={cx(className, layout)}>
    <TilesDiv />
    <CellsDiv />
  </div>
);

const layout = css`
  position: relative;
`;

const layoutBaseCells = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "□ □ □ □ △ △ △"
    "□ □ □ □ △ △ △"
    "× × ○ ○ △ △ △"
    "× × ○ ○ △ △ △"
    "× × ● ● ● ● ●"
    "× × ● ● ● ● ●";

  position: absolute;
  width: 100%;
  height: 100%;
`;

const TilesDiv: FC = () => (
  <div className={layoutBaseCells}>
    <SkyBlueDiv
      className={css`
        grid-area: □;
      `}
    />
    <PinkDiv
      className={css`
        grid-area: △;
      `}
    />
    <YellowDiv
      className={css`
        grid-area: ×;
      `}
    />
    <PurpleDiv
      className={css`
        grid-area: ○;
      `}
    />
    <GreenDiv
      className={css`
        grid-area: ●;
      `}
    />
  </div>
);

const SkyBlueDiv = styled.div`
  background-color: rgba(0, 255, 255, 0.1);
`;
const PinkDiv = styled.div`
  background-color: rgba(255, 0, 255, 0.1);
`;
const YellowDiv = styled.div`
  background-color: rgba(255, 255, 0, 0.1);
`;
const PurpleDiv = styled.div`
  background-color: rgba(0, 0, 255, 0.1);
`;
const GreenDiv = styled.div`
  background-color: rgba(0, 255, 0, 0.1);
`;

const CellsDiv: FC = () => (
  <div className={layoutBaseCells}>
    {[...Array(49).keys()].map((index) => (
      <DotTileDiv key={index} />
    ))}
  </div>
);

const DotTileDiv = styled.div`
  border: 1px dotted rgba(0, 0, 0, 0.1);
`;
