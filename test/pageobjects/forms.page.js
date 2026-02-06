class FormPage {

  // Seletores
  get menuform() { 
    return $('accessibility id:Forms') 
  }

  get campoTexto() { 
    return $('accessibility id:text-input') 
  }

  get labeResultado() { 
    return $('accessibility id:input-text-result') 
  }

  // Métodos
  async abrirmenuForm() {
    await this.menuform.click()
  }

  async preencherTexto(texto) {
    await this.campoTexto.setValue(texto)
  }

  async validarTexto() {
    return await this.labeResultado.getText()
  }
}

export default new FormPage()
