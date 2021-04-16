import styled, { keyframes } from 'styled-components'

const GradientAnimation = keyframes`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`

export const CoverGradient = styled.div`
  width: 100%;
  height: 40vh;
  background-color: ${props => props.theme.primary};
  background-size: 400% 400%;
  background-image: linear-gradient(to right, #c5f9d7, #f7d486, #f27a7d);
  position: relative;
  box-shadow: 0px 0px 5px 0px #828282;
  animation: ${GradientAnimation} 5s ease infinite;
  margin-bottom: 100px;
`

export const ProfileImg = styled.img`
  width: 20vw;
  max-width: 200px;
  min-width: 180px;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%,-50%);
  border: 3px solid ${props => props.theme.white};
  border-radius: 50%;
`

export const ProfileDetail = styled.div`
  padding: 10px;
  border-top: 1px solid ${props => props.theme.border};
  background-color: #FAFAFA;
`

export const ProfileContent = styled.div`
  width: 100%;
  padding: .5rem 1rem;
`

export const IconContact = styled.i`
  font-size: 30px;
  color: ${props => props.color || props.theme.primary}
`

export const ContactIconContainer = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    cursor: pointer;
    background: ${props => props.theme.white};
    :hover {
        > * {
          color: ${props => props.color || props.theme.primary}
        }
    }
`
