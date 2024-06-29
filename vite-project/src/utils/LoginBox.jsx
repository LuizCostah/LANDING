function LoginBox() {

  const logar = document.querySelector('.loginBar')

  return (

    logar.style.display =(logar.style.display === 'flex') ? 'none' : 'flex'

  )
}

export default LoginBox;