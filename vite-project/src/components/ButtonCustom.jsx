/* eslint-disable react/prop-types */
export default function ButtonCustom({children, className}) {

  return (

    <div>
      <button className={className}>{children}</button>
    </div>

  )
}