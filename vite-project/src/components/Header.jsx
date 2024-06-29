/* eslint-disable react/prop-types */

export default function Header({children}) {

  return(

    <header className="flex relative justify-between items-center w-full h-12 bg-black px-40 py-2">
      <div className="flex justify-between items-center w-1/2">
        <h2 className="text-white text-3xl font-semibold">LOGO</h2>      
        <input type="text" className="font-semibold text-xl w-80 h-8 rounded-lg text-center outline-none px-2" placeholder='Search'/>
      </div>
      {children}
    </header>

  )
}