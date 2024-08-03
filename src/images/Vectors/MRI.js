import React from 'react'

const MRI = ({props, themeColor}) => {
  return (
    <>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" {...props} className={themeColor}>
    <path d="M55 48V33.195c.655-2.299 1-4.715 1-7.195C56 11.663 44.337 0 30 0S4 11.663 4 26c0 2.479.345 4.896 1 7.195V48c0 2.206 1.794 4 4 4h8.137l-.083.438c-.036.19-.045.381-.045.571H17v3.99c0 1.654 1.346 3 3 3h20c1.654 0 3-1.346 3-3v-3.99h-.009c0-.19-.009-.381-.045-.571L42.863 52H51c2.206 0 4-1.794 4-4zM30 2c13.233 0 24 10.767 24 24 0 8.713-4.615 16.574-12.121 20.837l-2.072-10.876c2.662-2.627 4.192-6.218 4.192-9.962 0-7.72-6.28-14-14-14s-14 6.28-14 14c0 3.744 1.531 7.335 4.192 9.962l-2.072 10.876C10.613 42.574 5.998 34.712 5.998 26 6 12.767 16.767 2 30 2zM19.019 52.813l3.238-17a1 1 0 0 1 .981-.813h13.523a1 1 0 0 1 .981.813l3.238 17a.986.986 0 0 1-.211.823.997.997 0 0 1-.771.363H20c-.3 0-.58-.132-.771-.363a.986.986 0 0 1-.211-.823zm19.943-18.84a2.99 2.99 0 0 0-2.2-.973H23.239c-.862 0-1.647.373-2.2.973A12.034 12.034 0 0 1 18.001 26c0-6.617 5.383-12 12-12s12 5.383 12 12c0 2.943-1.095 5.784-3.038 7.973zM9 50c-1.103 0-2-.897-2-2v-9.826c2.37 4.485 6.063 8.23 10.728 10.725L17.518 50zm31 8H20a1 1 0 0 1-1-1v-1.19c.319.113.653.19 1.001.19h19.998A2.97 2.97 0 0 0 41 55.81V57a1 1 0 0 1-1 1zm11-8h-8.518l-.21-1.101c4.665-2.495 8.358-6.24 10.728-10.725V48c0 1.103-.897 2-2 2z" />
    <path d="M27 10h6c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-6c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2zm0-4h6l.002 2H27zM9 27.009c.553 0 1-.456 1-1.009a1 1 0 1 0-2 0v.017c0 .553.447.992 1 .992zM13 25a1 1 0 0 0-1 1v.017c0 .553.447.992 1 .992s1-.456 1-1.009-.447-1-1-1zM14 30a1 1 0 0 0-1-1H9a1 1 0 1 0 0 2h4a1 1 0 0 0 1-1zM9 23h4a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2zM47 27.009c.553 0 1-.456 1-1.009a1 1 0 1 0-2 0v.017c0 .553.447.992 1 .992zM51 25a1 1 0 0 0-1 1v.017c0 .553.447.992 1 .992s1-.456 1-1.009-.447-1-1-1zM47 31h4a1 1 0 1 0 0-2h-4a1 1 0 1 0 0 2zM47 23h4a1 1 0 1 0 0-2h-4a1 1 0 1 0 0 2z" />
  </svg>
  </>
  )
}

export default MRI