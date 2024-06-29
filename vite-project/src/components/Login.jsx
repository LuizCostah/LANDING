function Login() {

  return (

    <div className="loginBar">
      <div className="loginInput">
        <h2>Login</h2>
        <input type="email" placeholder="E-mail"/>      
        <input type="password" placeholder="Password"/>         
        <div className="loginButton">
          <button>Entrar</button>
        </div>
        <div className="controle">
          <a href="#" >Recuperar senha</a>
          <a href="#" className="regis">Registro</a>
        </div>
      </div>     
    </div>

  )
}

export default Login;