import { ComponentType } from 'react'
import { SvgIconProps } from '@mui/material/SvgIcon'
import { IconProps } from '@mui/material/Icon'
import { IconBaseProps } from 'react-icons'

export interface ICardConfig {
  title: string
  description: string
  icon:
    | ComponentType<IconBaseProps>
    | ComponentType<IconProps>
    | ComponentType<SvgIconProps>
}
