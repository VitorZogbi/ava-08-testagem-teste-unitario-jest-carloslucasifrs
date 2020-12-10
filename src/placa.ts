
export function placa(p: string) {
  validaEntrada(p)

  return converte(p)
}

function converte(p: string): string {
  const regex = new RegExp('^[A-Za-z]{3}[0-9]{4}$')

  if (regex.test(p)) {
    const subs: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    const split = p.split('')
    // split[4] = subs[parseInt(p.slice(4, 5), 10)]
    split[4] = subs[parseInt(p.charAt(4), 10)]
    p = split.join('')
  }

  return p.toUpperCase()

}

function validaEntrada(p: string): void {
  const regex = new RegExp('^[A-Za-z]{3}[0-9][0-9A-J][0-9]{2}$')

  if (!regex.test(p)) throw new Error("Placa inválida")

}

