import styled, { css } from 'styled-components'

const fontStyle = styled.div`
   color: ${props => props.theme.primary};
   ${props => props.second && css`color: ${props.theme.second};`}
   ${props => props.blue && css`color: ${props.theme.blue};`}
   ${props => props.white && css`color: ${props.theme.white};`}
   ${props => props.gray && css`color: ${props.theme.gray};`}
   ${props => props.black && css`color: ${props.theme.black};`}

   ${props => props.bold && css`font-weight: ${props.theme.font_bold};`}
   ${props => props.center && css`text-align: center`};
   ${props => props.link && css`cursor: pointer; :hover { opacity: 0.5 };`};
`


export const Font = styled(fontStyle)`
   font-size: ${props => props.size ? props.size : props.theme.font_m};
`

export const FontXL = styled(fontStyle)`
   font-size: ${props => props.theme.font_xl};
`

export const FontL = styled(fontStyle)`
  font-size: ${props => props.theme.font_l};
`

export const FontM = styled(fontStyle)`
  font-size: ${props => props.theme.font_m};
`

export const FontS = styled(fontStyle)`
  font-size: ${props => props.theme.font_s};
`

export const FontXS = styled(fontStyle)`
  font-size: ${props => props.theme.font_xs};
`