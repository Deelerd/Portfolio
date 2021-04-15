import React, { useState } from 'react';
import { ContactDropDown, Dropdownlist, DropdownBox, DropdownButton } from './dropdown.style'
import { FontM } from '../Font'

const DropdownList = (props) => {
  let { btnName, list, onClick } = props
  const [isOpen, setDropdown] = useState(false)

  const onClickEvent = (link) => {
    setDropdown(!isOpen)
    return onClick(link)
  }

  return <ContactDropDown
    onClick={() => setDropdown(!isOpen)}
    onMouseEnter={() => setDropdown(true)}
    onMouseLeave={() => setDropdown(false)}>
    <DropdownButton>
      <FontM white center bold>{btnName}</FontM>
    </DropdownButton>
    <DropdownBox isOpen={isOpen}>
      {
        list.map((val, key) => {
          return <Dropdownlist key={`${key}_${val.id}`} onClick={() => onClickEvent(val.href)}>
            {val.value}
          </Dropdownlist>
        })
      }
    </DropdownBox>
  </ContactDropDown>
}

export default DropdownList;