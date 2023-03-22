import React from 'react'
import './InputItem.less'
export default function InputItem() {
  return (
    <div className="input-fill-box mb-30">
      <input
        className="input-fill rounded-md"
        placeholder="username"
        pattern="^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$"
        required
      />
      <span className="clear">close</span>
      <label className="input-label">username</label>
    </div>
  )
}
