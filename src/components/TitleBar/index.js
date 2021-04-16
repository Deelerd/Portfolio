import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { FontM } from '../Font'
import { BarContainer, LanguageBox, LanguageSelect, Sidebar, SidebarItem, SidebarTitle } from './bar.style'

import { selectLang } from '../../redux/actions/language'

const TitleBar = (props) => {
  let { store_language: { dictionary } } = props
  const [isSidebar, setSidebar] = useState(false)

  const language = [
    { id: 'en', value: 'English' },
    { id: 'th', value: 'Thai' }
  ]

  const menu = [{
    id: 'profile',
    name: dictionary.profile,
    icon: 'fas fa-user-tie',
    href: '/',
  }, {
    id: 'coding',
    name: dictionary.coding,
    icon: 'fas fa-code',
    href: '/coding',
  }]

  useEffect(() => {
    const clickOutBtn = (event) => {
      let element = window.document.getElementById('sidebar')
      if (element && isSidebar) {
        let isClick = element.contains(event.target);
        if (!isClick) setSidebar(false)
      }
    }

    window.document.addEventListener('click', clickOutBtn)
    return () => window.document.removeEventListener('click', clickOutBtn)
  }, [isSidebar])

  const onClickMenu = (link) => {
    setSidebar(false)
    return props.history.push(link)
  }

  let current_menu = Boolean(props.location.pathname)
    ? menu.filter(f => f.href === props.location.pathname)[0]
    : menu[0]

  return <BarContainer>
    <div onClick={() => setSidebar(!isSidebar)}>
      <FontM link white center bold className='d-flex align-items-baseline'>
        <i className="fas fa-bars mr-2" /> {current_menu.name.toUpperCase()}
      </FontM>
    </div>
    <LanguageBox className='ml-2'>
      {
        language.map((val, key) => {
          return <LanguageSelect
            key={`${key}_${val.id}`}
            className='px-1'
            select={dictionary.locale === val.id}
            onClick={() => props.selectLang(val.id)}>
            {val.id.toUpperCase()}
          </LanguageSelect>
        })
      }
    </LanguageBox>
    <Sidebar id='sidebar' isSidebar={isSidebar}>
      <SidebarTitle>
        <div>{dictionary.first_name.toUpperCase()}</div>
        <div>{dictionary.last_name.toUpperCase()}</div>
      </SidebarTitle>
      {
        menu.map((val) => {
          return <SidebarItem key={val.id} onClick={() => onClickMenu(val.href)}>
            <i className={`${val.icon} mr-2 text-center`} style={{ minWidth: '20px' }} />
            <div style={{ whiteSpace: 'nowrap' }}>{val.name.toUpperCase()}</div>
          </SidebarItem>
        })
      }
    </Sidebar>
  </BarContainer>
}

const mapStateToProps = (state) => {
  return {
    store_language: state.language
  }
}

const mapDipatchToProps = (dispatch) => {
  return bindActionCreators({
    selectLang
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDipatchToProps)(TitleBar));