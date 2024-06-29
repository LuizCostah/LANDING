import './index.css'
import Layout from './components/Layout'
import Header from './components/Header'
import Navbar from './components/Navbar'
import ButtonCustom from './components/ButtonCustom'
import LoginBox from './components/LoginBox'



function App() {

  return (
    <>
      <Layout>
        <Header>
          <Navbar>
            <ButtonCustom className="bg-[#20bf6b] hover:bg-[#26de81] text-white p-1 rounded-lg">account</ButtonCustom>
          </Navbar> 
        </Header> 
        <LoginBox />       
      </Layout>     
    </>
  )
}

export default App
