import ButtonCustom from "./ButtonCustom"

export default function LoginBox() {

  return (
    <div className="w-full h-10 items-center text-center justify-end px-40 hidden loginBar">
      <div>        
        <form method="POST" className="flex items-center justify-end">
          <input className="mr-2 font-normal text-xl w-1/3 h-6 rounded-lg text-center outline-none " placeholder="Login" type="text" />
          <input className="mr-2 font-normal text-xl w-1/3 h-6 rounded-lg text-center outline-none " placeholder="Password" type="password" />          
          <ButtonCustom className="bg-[#20bf6b] hover:bg-[#26de81] text-white px-1 rounded-lg">Login</ButtonCustom>
          <ButtonCustom className="bg-[#eb3b5a] hover:bg-[#fc5c65] text-white px-1 rounded-lg">SignUp</ButtonCustom>      
        </form>                  
      </div>        
    </div>

  )
}