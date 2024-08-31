import d from 'date-fns' // npm i date-fns
import _ from 'lodash' // npm i -D @types/lodash

let mensagem: string
mensagem = 'teste'
console.log(mensagem)

type Carro = {
    modelo: string
    ano: number
    opcionais?: string[]
}

let carro:Carro
carro = {
    modelo: 'Peugeot 2008',
    ano: 2024,
    opcionais: ['Ar condicionado', 'vidros e travas elétricas']
}

console.log(carro.modelo)
console.log(carro.modelo.toUpperCase())
console.log(carro.opcionais)

function teste(mensagem: string){
    console.log(mensagem)
}

teste('teste')

function getMensagem(): string{
    return 'testeGetMensagem'
}

console.log(getMensagem())
console.log(getMensagem().toUpperCase())

function getCarro(): Carro{
    return {
        modelo: 'hb20',
        ano: 2019,
        opcionais: ['Motor 2.0', 'Freios ABS']
    }
}

console.log(getCarro())

function toJSON(obj:any){
    return JSON.stringify(obj)
}

function fromJSON<T>(json: string){
    return JSON.parse(json) as T
}

const novoCarro: Carro = {
    modelo: 'Fusca',
    ano: 2013,
}
console.log(toJSON(novoCarro))

const carroJson = '{"modelo":"Fusca","ano":2013}'

console.log(fromJSON<Carro>(carroJson).ano.toFixed())