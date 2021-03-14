const faker = require('faker');

describe( `Filling loggin`, function() {
    it(`Visits jotform and fills an example form`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin')
		cy.get('#ember8').type(faker.internet.email())
		cy.get('#ember10').type(faker.internet.password())
		cy.get('#ember12').click()
		
        cy.wait(1000)
    })
})

describe( `Filling loggin`, function() {
    it(`Visits jotform and fills an example form`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin')
		cy.get('#ember8').type(faker.internet.password())
		cy.get('#ember10').type(faker.internet.email())
		cy.get('#ember12').click()
		
        cy.wait(1000)
    })
})

describe( `Filling loggin`, function() {
    it(`Visits jotform and fills an example form`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin')
		cy.get('#ember8').type(faker.name.firstName())
		cy.get('#ember10').type(faker.name.lastName())
		cy.get('#ember12').click()
		
        cy.wait(1000)
    })
})

describe( `Filling loggin`, function() {
    it(`Visits jotform and fills an example form`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin')
		cy.get('#ember8').type(faker.address.streetAddress())
		cy.get('#ember10').type(faker.address.streetAddress())
		cy.get('#ember12').click()
		
        cy.wait(1000)
    })
})
describe( `Filling loggin`, function() {
    it(`Visits jotform and fills an example form`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin')
		cy.get('#ember8').type(faker.address.city())
		cy.get('#ember10').type(faker.address.state())
		cy.get('#ember12').click()
		
        cy.wait(1000)
    })
})
describe( `Filling loggin`, function() {
    it(`Visits jotform and fills an example form`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin')
		cy.get('#ember8').type(faker.phone.phoneNumber())
		cy.get('#ember10').type(faker.company.companyName())
		cy.get('#ember12').click()
		
        cy.wait(1000)
    })
})
describe( `Filling loggin`, function() {
    it(`Visits jotform and fills an example form`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin')
		cy.get('#ember8').type(faker.company.companyName())
		cy.get('#ember10').type(faker.internet.password())
		cy.get('#ember12').click()
		
        cy.wait(1000)
    })
})
describe( `Filling loggin`, function() {
    it(`Visits jotform and fills an example form`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin')
		cy.get('#ember8').type(faker.internet.email())
		cy.get('#ember10').type(faker.phone.phoneNumber())
		cy.get('#ember12').click()
		
        cy.wait(1000)
    })
})
describe( `Filling loggin`, function() {
    it(`Visits jotform and fills an example form`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin')
		cy.get('#ember8').type(faker.internet.email())
		cy.get('#ember10').type(faker.internet.password())
		cy.get('#ember12').click()
		
        cy.wait(1000)
    })
})
describe( `Filling loggin`, function() {
    it(`Visits jotform and fills an example form`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin')
		cy.get('#ember8').type(faker.commerce.color())
		cy.get('#ember10').type(faker.internet.password())
		cy.get('#ember12').click()
		
        cy.wait(1000)
    })
})
describe( `Filling loggin`, function() {
    it(`Visits jotform and fills an example form`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin')
		cy.get('#ember8').type(faker.commerce.price())
		cy.get('#ember10').type(faker.internet.password())
		cy.get('#ember12').click()
		
        cy.wait(1000)
    })
})
describe( `Filling loggin`, function() {
    it(`Visits jotform and fills an example form`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin')
		cy.get('#ember8').type(faker.commerce.product())
		cy.get('#ember10').type(faker.internet.password())
		cy.get('#ember12').click()
		
        cy.wait(1000)
    })
})
describe( `Filling loggin`, function() {
    it(`Visits jotform and fills an example form`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin')
		cy.get('#ember8').type(faker.date.month())
		cy.get('#ember10').type(faker.internet.password())
		cy.get('#ember12').click()
		
        cy.wait(1000)
    })
})
describe( `Filling loggin`, function() {
    it(`Visits jotform and fills an example form`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin')
		cy.get('#ember8').type(faker.internet.email())
		cy.get('#ember10').type(faker.internet.password())
		cy.get('#ember12').click()
		
        cy.wait(1000)
    })
})
describe( `Filling loggin`, function() {
    it(`Visits jotform and fills an example form`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin')
		cy.get('#ember8').type(faker.internet.email())
		cy.get('#ember10').type(faker.finance.amount())
		cy.get('#ember12').click()
		
        cy.wait(1000)
    })
})
describe( `Filling loggin`, function() {
    it(`Visits jotform and fills an example form`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin')
		cy.get('#ember8').type(faker.finance.transactionType())
		cy.get('#ember10').type(faker.finance.amount())
		cy.get('#ember12').click()
		
        cy.wait(1000)
    })
})
describe( `Filling loggin`, function() {
    it(`Visits jotform and fills an example form`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin')
		cy.get('#ember8').type(faker.hacker.phrase())
		cy.get('#ember10').type(faker.internet.password())
		cy.get('#ember12').click()
		
        cy.wait(1000)
    })
})
describe( `Filling loggin`, function() {
    it(`Visits jotform and fills an example form`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin')
		cy.get('#ember8').type(faker.internet.email())
		cy.get('#ember10').type(faker.internet.password())
		cy.get('#ember12').click()
		
        cy.wait(1000)
    })
})
describe( `Filling loggin`, function() {
    it(`Visits jotform and fills an example form`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin')
		cy.get('#ember8').type(faker.internet.ip())
		cy.get('#ember10').type(faker.internet.password())
		cy.get('#ember12').click()
		
        cy.wait(1000)
    })
})
describe( `Filling loggin`, function() {
    it(`Visits jotform and fills an example form`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin')
		cy.get('#ember8').type(faker.internet.email())
		cy.get('#ember10').type(faker.lorem.words())
		cy.get('#ember12').click()
		
        cy.wait(1000)
    })
})
describe( `Filling loggin`, function() {
    it(`Visits jotform and fills an example form`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin')
		cy.get('#ember8').type(faker.internet.email())
		cy.get('#ember10').type(faker.music.genre())
		cy.get('#ember12').click()
		
        cy.wait(1000)
    })
})
describe( `Filling loggin`, function() {
    it(`Visits jotform and fills an example form`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin')
		cy.get('#ember8').type(faker.internet.email())
		cy.get('#ember10').type(faker.music.genre())
		cy.get('#ember12').click()
		
        cy.wait(1000)
    })
})
describe( `Filling loggin`, function() {
    it(`Visits jotform and fills an example form`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin')
		cy.get('#ember8').type(faker.name.jobArea())
		cy.get('#ember10').type(faker.name.jobTitle())
		cy.get('#ember12').click()
		
        cy.wait(1000)
    })
})
describe( `Filling loggin`, function() {
    it(`Visits jotform and fills an example form`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin')
		cy.get('#ember8').type(faker.internet.email())
		cy.get('#ember10').type(faker.name.jobArea())
		cy.get('#ember12').click()
		
        cy.wait(1000)
    })
})
describe( `Filling loggin`, function() {
    it(`Visits jotform and fills an example form`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin')
		cy.get('#ember8').type(faker.name.jobTitle())
		cy.get('#ember10').type(faker.internet.password())
		cy.get('#ember12').click()
		
        cy.wait(1000)
    })
})
describe( `Filling loggin`, function() {
    it(`Visits jotform and fills an example form`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin')
		cy.get('#ember8').type(faker.internet.email())
		cy.get('#ember10').type(faker.phone.phoneNumber())
		cy.get('#ember12').click()
		
        cy.wait(1000)
    })
})
describe( `Filling loggin`, function() {
    it(`Visits jotform and fills an example form`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin')
		cy.get('#ember8').type(faker.random.number())
		cy.get('#ember10').type(faker.internet.password())
		cy.get('#ember12').click()
		
        cy.wait(1000)
    })
})
describe( `Filling loggin`, function() {
    it(`Visits jotform and fills an example form`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin')
		cy.get('#ember8').type(faker.internet.email())
		cy.get('#ember10').type(faker.random.number())
		cy.get('#ember12').click()
		
        cy.wait(1000)
    })
})
describe( `Filling loggin`, function() {
    it(`Visits jotform and fills an example form`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin')
		cy.get('#ember8').type(faker.internet.email())
		cy.get('#ember10').type(faker.internet.password())
		cy.get('#ember12').click()
		
        cy.wait(1000)
    })
})
describe( `Filling loggin`, function() {
    it(`Visits jotform and fills an example form`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin')
		cy.get('#ember8').type(faker.random.alphaNumeric())
		cy.get('#ember10').type(faker.internet.password())
		cy.get('#ember12').click()
		
        cy.wait(1000)
    })
})
describe( `Filling loggin`, function() {
    it(`Visits jotform and fills an example form`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin')
		cy.get('#ember8').type(faker.internet.email())
		cy.get('#ember10').type(faker.system.filePath())
		cy.get('#ember12').click()
		
        cy.wait(1000)
    })
})


