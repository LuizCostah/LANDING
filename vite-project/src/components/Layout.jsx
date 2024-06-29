import ContentHome from './ContentHome';
import Header from './Header'
import Login from './Login';

function Layout() {

  return (

    <div className="layout">
      <Header />
      <Login />
      <ContentHome />
    </div>

  )

}

export default Layout;