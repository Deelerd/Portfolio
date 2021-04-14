import React from 'react'
import { theme } from '../styles/theme'

const Loading = (props) => {
  let { size, margin, padding } = props;
  size = size || '2rem';
  margin = margin || '10px';
  padding = padding || '10px'

  return <div className='w-100 d-flex justify-content-center align-items-center' style={{ padding: padding, margin: margin }}>
    <i className="fas fa-spinner fa-pulse" style={{ fontSize: size, color: theme.primary }} />
  </div>
}

export default Loading;