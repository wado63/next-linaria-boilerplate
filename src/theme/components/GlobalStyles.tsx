import { cx } from 'linaria'
import type { FC } from 'react'
import { reset } from '../foundations/reset'
import { base } from '../foundations/base'

export const GlobalStyles: FC = () => <div className={cx(reset, base)}></div>
