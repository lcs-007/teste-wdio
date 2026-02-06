import formPage from '../pageobjects/forms.page'

describe('Funcionalidade: Tela de formulário', () => {

    beforeEach(async () => {
    await formPage.abrirmenuForm()
});


    it('Deve validar se o texto foi preenchido corretamente', async () => {
        await formPage.preencherTexto('Teste Appium')
        expect(await formPage.validarTexto()).toEqual('Teste Appium')
        await driver.pause(5000)
    });

    it('deve trocar o botao de off para on', async () => {
        //Trocar para on
        const botaoOnOff = await driver.$("accessibility id:switch");
        await botaoOnOff.click();
        await driver.pause(5000)
        //Trocar para Off
        await driver.action('pointer')
            .move({ duration: 0, x: 224, y: 1159 })
            .down({ button: 0 })
            .move({ duration: 1000, x: 105, y: 1163 })
            .up({ button: 0 })
            .perform();
        await driver.pause(5000)
    });

});