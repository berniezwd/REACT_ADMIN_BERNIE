import React from 'react'
import ReactDOM from 'react-dom'
import './Loading.less'
const LoadingRoot = document.getElementById('loading') as HTMLElement

export default function Loading(props: any) {
  return ReactDOM.createPortal(
    <div className={`Loading ${props.className}`}>
      <div className="dot-spinner">
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
      </div>
      <div className="loader mt-20">
        <div className="scanner">
          <span>Loading...</span>
        </div>
      </div>
    </div>,
    LoadingRoot,
  )
}
