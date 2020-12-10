import { Parcelar } from './parcela'


test('36,15 - 12,00 - 12,15', () => {
  const parc = new Parcelar(36.15, 3)
  expect(parc.getParcela()).toEqual(12.00)
  expect(parc.getUltima()).toEqual(12.15)

})

test('31.07 - 10.00 - 11.07', () => {
  const parc = new Parcelar(31.07, 3)
  expect(parc.getParcela()).toEqual(10.00)
  expect(parc.getUltima()).toEqual(11.07)
})

test('31.08 - 10.00 - not 11.08', () => {
  const parc = new Parcelar(31.08, 3)
  expect(parc.getParcela()).toEqual(10.0000)
  expect(parc.getUltima()).not.toBe(11.06)
})


test('not 37.07 - 12.00 - 13.07', () => {
  const parc = new Parcelar(37.07, 3)
  expect(parc.getParcela()).not.toEqual(10.75)
  expect(parc.getUltima()).not.toEqual(11.07)
})


test('valor negativo', () => {
  expect(() => {
    const parc = new Parcelar(-15, 3)
  }).toThrowError('valor 0 ou negativo não pode ser passado')
})

test('parcela negativo', () => {
  expect(() => {
    const parc = new Parcelar(15.00, -53)
  }).toThrowError('parcela deve ser igual ou maior 2')
})

test('parcela igual a 1', () => {
  expect(() => {
    const parc = new Parcelar(15.00, 1)
  }).toThrowError('parcela deve ser igual ou maior 2')
})

test('valor da parcela menor que 1', () => {
  expect(() => {
    const parc = new Parcelar(4.55, 6)
  }).toThrowError('valor da parcela não pode ser menor que 1')
})


// test('descrição das parcelas', () => {

//   const toString: string = '1-R$ 12,00\n' +
//     '2-R$ 12,00\n' +
//     '3-R$ 12,15'


//   const parc = new Parcelar(36.15, 3)
//   expect(parc.toString()).toStrictEqual(toString.replace(/\s/, ' '))
// })

