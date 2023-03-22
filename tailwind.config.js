/** @type {import('tailwindcss').Config} */

function generateSpacing() {
  let data = {}
  for (let i = 1; i <= 10000; i++) {
    let value = (i / 10).toFixed(1),
      firstNum = value.split('.')[0],
      lastNum = value.split('.')[1],
      property = `${lastNum === '0' ? firstNum : value}`,
      trueValue = `${(property / 10).toFixed(1)}rem`
    data[property] = trueValue
  }
  return data
}

function generateFontSize() {
  let data = {
    small: '1rem',
  }
  for (let i = 1; i <= 200; i++) {
    data[`${i}`] = `${i / 10}rem`
  }
  return data
}

/**
 * 使用的时候
 * fontSize => text-文字大小 text-16表示1.6rem 也就是16px
 * 间距 => mr-像素 mr-20表示2rem 也就是20px
 * 宽高 => w-像素 w-200表示20rem 也就是200px
 */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: generateFontSize(),
    spacing: generateSpacing(),
  },
  plugins: [],
}
