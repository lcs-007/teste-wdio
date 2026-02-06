class LoginPage {

  // 🔹 Seletores
  get menuLogin() {
    return $('~Login')
  }

  get campoEmail() {
    return $('~input-email')
  }

  get campoSenha() {
    return $('~input-password')
  }

  get botaoLogin() {
    return $('~button-LOGIN')
  }

  get mensagemSucesso() {
    return $('id=android:id/message')
  }

  get mensagemErro() {
    return $('//android.widget.TextView[@text="Please enter a valid email address"]')
  }

  // 🔹 Ações
  async abrirMenu() {
    await this.menuLogin.click()
  }

  async preencherLogin(email, senha) {
    await this.campoEmail.clearValue()
    await this.campoEmail.setValue(email)
    await this.campoSenha.clearValue()
    await this.campoSenha.setValue(senha)
    await this.botaoLogin.click()
  }

}

export default new LoginPage()
