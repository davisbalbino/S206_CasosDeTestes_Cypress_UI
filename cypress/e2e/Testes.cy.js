/// <referance types= "cypress"/>

describe("Criando cenario de teste do sina Inatel", ()=>{


it("Caso de teste: Aceitando cookies e LGPD", ()=>{
 
  let info = Cookie()
})

it("Caso de teste: Acessando a página do estudante",()=>{

let info = Cookie()
let info2 = Estudante()


})


function Cookie(){
  let horas = new Date().getHours().toString()
  let minutos = new Date().getMinutes().toString()
  let segundos = new Date().getSeconds().toString()
  
  cy.visit('https://inatel.br/home/')
  cy.get('#contract-1 > .policyMessage > .actionUser > .acceptCookie').click()
  cy.get('.modal-footer > .btn').click()
  cy.get('#contactar').should("contain.text", "Conheça o Inatel")

  return
}

function Estudante(){
  cy.get('#dropbtn > .fa').click()
  cy.get('.ma-menu > :nth-child(1) > :nth-child(6) > a').click()
  cy.get('.SJ-PTRBL-25 > .center-center').should("contain.text", "OPORTUNIDADE E PROGRAMAS")
}

})