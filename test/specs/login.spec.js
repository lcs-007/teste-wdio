import loginPage from '../pageobjects/login.page'

describe('Funcionalidade: Login', () => {

  beforeEach(async () => {
    await loginPage.abrirMenu()
  })

  it.only('Deve fazer login com sucesso', async () => {
    await loginPage.preencherLogin('fabio@teste.com', 'senha@123')

    await loginPage.mensagemSucesso.waitForDisplayed({ timeout: 15000 })
    await expect(loginPage.mensagemSucesso)
      .toHaveText('You are logged in!')
  })

  it('Deve falhar ao fazer login com email inválido', async () => {
    await loginPage.preencherLogin('teste@teste', 'senha@123')

    await loginPage.mensagemErro.waitForDisplayed({ timeout: 15000 })
    await expect(loginPage.mensagemErro).toBeDisplayed()
  })

})
