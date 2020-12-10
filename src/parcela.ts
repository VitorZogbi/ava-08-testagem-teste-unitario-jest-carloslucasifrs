export class Parcelar {
  readonly numParcelas: number
  readonly valor: number
  private parcela: number
  private ultima: number

  constructor(valor: number, numParcelas: number) {
    this.validaValor(valor)
    this.validaParcela(numParcelas)
    this.numParcelas = numParcelas
    this.valor = valor
    this.parcela = this.calculaParcela()
    this.ultima = this.calculaUltima()
  }

  private calculaUltima(): number {
    return (this.valor - (this.parcela * this.numParcelas)) + this.parcela
  }

  private calculaParcela(): number {
    const parcela = Math.floor(this.valor / this.numParcelas)
    if (parcela < 1) throw new Error('valor da parcela não pode ser menor que 1')
    return parcela
  }

  private validaValor(valor: number): boolean {
    if (valor < 0) throw new Error('valor 0 ou negativo não pode ser passado')
    return true
  }

  private validaParcela(numParcelas: number): boolean {
    if (numParcelas < 2) throw new Error('parcela deve ser igual ou maior 2')

    return true
  }
  getParcela(): number {
    return parseFloat(this.parcela.toFixed(2))
  }

  getUltima(): number {
    return parseFloat(this.ultima.toFixed(2))
  }

  getNumParcelas(): number {
    return this.numParcelas
  }

  private formataValor(valor: number): string {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  toString() {
    let tostring: string = ''
    for (let index = 1; index < this.numParcelas; index++) {
      const parcelaFormatada: string = this.formataValor(this.parcela)

      tostring += `${index}-${parcelaFormatada}\n`
    }
    const ultimaFormatada: string = this.formataValor(this.ultima)
    return tostring + `${this.numParcelas}-${ultimaFormatada}`
  }
}
