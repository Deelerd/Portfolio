import styled, { css } from 'styled-components'

export const WheelBox = styled.div`
  position: relative;
  border-radius: 50%;
  box-shadow: rgba(0,0,0,0.2) 0px 0px 10px, rgba(0,0,0,0.05) 0px 3px 0px;
`

export const Square = styled.div`
  width: ${props => props.size};
  height: ${props => props.size};
  background-color: #FFF;
  border: 8px solid #FFF;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  transition: all 10s cubic-bezier(0,.99,.44,.99);
  ${props => props.rotateDegree && css`transform: rotate(${parseInt(props.rotateDegree)}deg);`}
`

export const Triangle = styled.div`
  width: 0;
  height: 0;
  top: -8px;
  left: 50%;
  position: absolute;
  border-style: solid;
  font-size: calc(${props => props.size}/5);
  color: ${props => props.theme.white};
  font-weight: bold;
  border-width: ${props => props.size} calc(${props => props.size}*${props => props.tan_angle}) 0px;        
  transform-origin: calc(${props => props.size}*${props => props.tan_angle}) ${props => props.size};
  &:nth-child(${props => props.section}){ transform: translateX(-50%) rotate(${props => props.rotate_angle}deg); border-color: ${props => props.color} transparent;}
  > * {
    margin-top: calc(${props => props.size}*(-0.75));
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`

export const Pointer = styled.i`
  font-size: 30px;
  color: #f8f4ec;
  text-shadow: 0px 2px 5px #2222227a;
  z-index: 1;
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
`

export const SpinButton = styled.div`
  width: ${props => props.size};
  height: ${props => props.size};
  background-color: #FFF;
  border-radius: 50%;
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`

export const InnerSpin = styled.div`
  width: ${props => props.size};
  height: ${props => props.size};
  background-image: linear-gradient(to bottom right,white,#decdab);
  text-shadow: 0px 1px 0px #BCA168;
  border-radius: 50%;
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  box-shadow: rgba(0,0,0,0.2) 0px 0px 10px, rgba(0,0,0,0.05) 0px 3px 0px;
  cursor: pointer;
  font-family: 'Exo 2', sans-serif;
  font-size: calc(${props => props.size}/3);
  font-weight: 700;
  color: #585858;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const InputGame = styled.input`
  width: 100%;
  font-size: ${props => props.theme.font_m};
  color: ${props => props.theme.primary};
  font-weight: ${props => props.theme.bold};
  background: ${props => props.background || props.theme.white};
  padding: 5px 10px;
  border: 1px solid ${props => props.theme.border};
  ::placeholder{
    font-size: ${props => props.theme.font_m};
    font-weight: normal;
    color: ${props => props.theme.second};
  }
`

export const ButtonAdd = styled.button`
  font-size: ${props => props.theme.font_m};
  color: ${props => props.theme.primary};
  font-weight: ${props => props.theme.bold};
  background: ${props => props.theme.white};
  padding: .25rem .5rem;
  border: 1px solid ${props => props.theme.primary};
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  box-shadow: none;
  :hover {
    opcity: 0.9;
  }
  :disabled{
    background: ${props => props.theme.gray};
    cursor: not-allowed;
    border: 1px solid ${props => props.theme.border}; 
    color: ${props => props.theme.secondary};
  }
`

export const WheelList = styled.div`
  padding: 5px 10px;
  transition: all .5s;
  border-radius: 5px;
  ${props => props.isResult && css`background: ${props => props.theme.green};`}
  ${props => props.fade && css`opacity: 0.5;`}
`