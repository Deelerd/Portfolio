import styled, { css } from 'styled-components'

export const BarContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: linear-gradient(180deg, ${props => props.theme.black}, ${props => props.theme.primary});
  position: sticky;
  top: 0;
  z-index: 999;
`

export const LanguageBox = styled.div`
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.white};
`

export const LanguageSelect = styled.div`
  cursor: pointer;
  color: ${props => props.theme.second};
  font-size: ${props => props.theme.font_m};
  ${props => props.select && css`
    background-color: ${props.theme.white}; 
    color: ${props.theme.primary};
    font-weight: bold;
  `}
`

export const Sidebar = styled.div`
  ${props => props.isSidebar ? css`width: 250px;` : css`width: 0;`}
  height: 100%;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.primary};
  overflow-x: hidden;
  transition: 0.5s;
`

export const SidebarItem = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  color: ${props => props.theme.second};
  transition: 0.3s;
  font-size: ${props => props.theme.font_m};
  font-weight: bold;
  cursor: pointer;
  border-bottom: 1px solid ${props => props.theme.second};
  :hover {
    color: ${props => props.theme.white};
  }
`

export const SidebarTitle = styled.div`
  width: 100%;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: ${props => props.theme.white};
  border-bottom: 1px solid ${props => props.theme.second};
  white-space: nowrap;
`