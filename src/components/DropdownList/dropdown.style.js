import styled, { css } from 'styled-components'

export const ContactDropDown = styled.div`
    position: relative;
`

export const DropdownButton = styled.div`
    text-align: center;
    min-width: 100px;
    padding: 0px 10px;
    margin: 1px 0px;
    cursor: pointer;
    border: 1px solid ${props => props.theme.second};
`

export const DropdownBox = styled.div`
    position: absolute;
    right: 0;
    background-color: ${props => props.theme.white};
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    overflow-y: scroll;
    z-index: 1000;
    transition: all .2s cubic-bezier(0.25, 0.23, 0.51, 0.48);
    ${props => props.isOpen ? css`max-height: 500px;` : css`max-height: 0px;`}
`

export const Dropdownlist = styled.div`
    min-width: 100px;
    padding: 5px;
    cursor: pointer;
    font-size: ${props => props.theme.font_m};
    :hover {
        color: ${props => props.theme.white};
        background-color: ${props => props.theme.primary};
    }
`