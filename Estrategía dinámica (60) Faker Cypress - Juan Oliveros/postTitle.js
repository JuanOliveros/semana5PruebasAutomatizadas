const faker = require('faker');

describe( `Testing Draft Post`, function() {
    it(`Visits to draft post and testing the title field`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin');
		cy.get('#ember8').type('j.oliverosv@uniandes.edu.co')
		cy.get('#ember10').type('Almendra1.*')
		cy.get('#ember12').click()
		cy.get('#ember34 > .gh-nav-viewname').click()
		cy.get('.gh-btn-green').click()
		cy.get('.gh-editor-title').type(faker.random.number()+faker.internet.ip())
		cy.contains('Post').click()
		cy.contains('Post').click()
		Cypress.on('uncaught:exception', (err, runnable) => {
		  return false;
		});
		cy.wait(1000)
    })
})
describe( `Testing Draft Post`, function() {
    it(`Visits to draft post and testing the title field`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin');
		cy.get('#ember8').type('j.oliverosv@uniandes.edu.co')
		cy.get('#ember10').type('Almendra1.*')
		cy.get('#ember12').click()
		cy.get('#ember34 > .gh-nav-viewname').click()
		cy.get('.gh-btn-green').click()
		cy.get('.gh-editor-title').type(faker.date.past())
		cy.contains('Post').click()
		cy.contains('Post').click()
		Cypress.on('uncaught:exception', (err, runnable) => {
		  return false;
		});
		cy.wait(1000)
    })
})

describe( `Testing Draft Post`, function() {
    it(`Visits to draft post and testing the title field`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin');
		cy.get('#ember8').type('j.oliverosv@uniandes.edu.co')
		cy.get('#ember10').type('Almendra1.*')
		cy.get('#ember12').click()
		cy.get('#ember34 > .gh-nav-viewname').click()
		cy.get('.gh-btn-green').click()
		cy.get('.gh-editor-title').type(faker.date.future())
		cy.contains('Post').click()
		cy.contains('Post').click()
		Cypress.on('uncaught:exception', (err, runnable) => {
		  return false;
		});
		cy.wait(1000)
    })
})
describe( `Testing Draft Post`, function() {
    it(`Visits to draft post and testing the title field`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin');
		cy.get('#ember8').type('j.oliverosv@uniandes.edu.co')
		cy.get('#ember10').type('Almendra1.*')
		cy.get('#ember12').click()
		cy.get('#ember34 > .gh-nav-viewname').click()
		cy.get('.gh-btn-green').click()
		cy.get('.gh-editor-title').type(faker.date.soon())
		cy.contains('Post').click()
		cy.contains('Post').click()
		Cypress.on('uncaught:exception', (err, runnable) => {
		  return false;
		});
		cy.wait(1000)
    })
})
describe( `Testing Draft Post`, function() {
    it(`Visits to draft post and testing the title field`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin');
		cy.get('#ember8').type('j.oliverosv@uniandes.edu.co')
		cy.get('#ember10').type('Almendra1.*')
		cy.get('#ember12').click()
		cy.get('#ember34 > .gh-nav-viewname').click()
		cy.get('.gh-btn-green').click()
		cy.get('.gh-editor-title').type(faker.date.weekday())
		cy.contains('Post').click()
		cy.contains('Post').click()
		Cypress.on('uncaught:exception', (err, runnable) => {
		  return false;
		});
		cy.wait(1000)
    })
})
describe( `Testing Draft Post`, function() {
    it(`Visits to draft post and testing the title field`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin');
		cy.get('#ember8').type('j.oliverosv@uniandes.edu.co')
		cy.get('#ember10').type('Almendra1.*')
		cy.get('#ember12').click()
		cy.get('#ember34 > .gh-nav-viewname').click()
		cy.get('.gh-btn-green').click()
		cy.get('.gh-editor-title').type(faker.finance.account())
		cy.contains('Post').click()
		cy.contains('Post').click()
		Cypress.on('uncaught:exception', (err, runnable) => {
		  return false;
		});
		cy.wait(1000)
    })
})
describe( `Testing Draft Post`, function() {
    it(`Visits to draft post and testing the title field`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin');
		cy.get('#ember8').type('j.oliverosv@uniandes.edu.co')
		cy.get('#ember10').type('Almendra1.*')
		cy.get('#ember12').click()
		cy.get('#ember34 > .gh-nav-viewname').click()
		cy.get('.gh-btn-green').click()
		cy.get('.gh-editor-title').type(faker.finance.routingNumber())
		cy.contains('Post').click()
		cy.contains('Post').click()
		Cypress.on('uncaught:exception', (err, runnable) => {
		  return false;
		});
		cy.wait(1000)
    })
})
describe( `Testing Draft Post`, function() {
    it(`Visits to draft post and testing the title field`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin');
		cy.get('#ember8').type('j.oliverosv@uniandes.edu.co')
		cy.get('#ember10').type('Almendra1.*')
		cy.get('#ember12').click()
		cy.get('#ember34 > .gh-nav-viewname').click()
		cy.get('.gh-btn-green').click()
		cy.get('.gh-editor-title').type(faker.finance.amount())
		cy.contains('Post').click()
		cy.contains('Post').click()
		Cypress.on('uncaught:exception', (err, runnable) => {
		  return false;
		});
		cy.wait(1000)
    })
})
describe( `Testing Draft Post`, function() {
    it(`Visits to draft post and testing the title field`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin');
		cy.get('#ember8').type('j.oliverosv@uniandes.edu.co')
		cy.get('#ember10').type('Almendra1.*')
		cy.get('#ember12').click()
		cy.get('#ember34 > .gh-nav-viewname').click()
		cy.get('.gh-btn-green').click()
		cy.get('.gh-editor-title').type(faker.finance.bitcoinAddress())
		cy.contains('Post').click()
		cy.contains('Post').click()
		Cypress.on('uncaught:exception', (err, runnable) => {
		  return false;
		});
		cy.wait(1000)
    })
})
describe( `Testing Draft Post`, function() {
    it(`Visits to draft post and testing the title field`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin');
		cy.get('#ember8').type('j.oliverosv@uniandes.edu.co')
		cy.get('#ember10').type('Almendra1.*')
		cy.get('#ember12').click()
		cy.get('#ember34 > .gh-nav-viewname').click()
		cy.get('.gh-btn-green').click()
		cy.get('.gh-editor-title').type(faker.finance.creditCardNumber())
		cy.contains('Post').click()
		cy.contains('Post').click()
		Cypress.on('uncaught:exception', (err, runnable) => {
		  return false;
		});
		cy.wait(1000)
    })
})
describe( `Testing Draft Post`, function() {
    it(`Visits to draft post and testing the title field`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin');
		cy.get('#ember8').type('j.oliverosv@uniandes.edu.co')
		cy.get('#ember10').type('Almendra1.*')
		cy.get('#ember12').click()
		cy.get('#ember34 > .gh-nav-viewname').click()
		cy.get('.gh-btn-green').click()
		cy.get('.gh-editor-title').type(faker.git.commitMessage())
		cy.contains('Post').click()
		cy.contains('Post').click()
		Cypress.on('uncaught:exception', (err, runnable) => {
		  return false;
		});
		cy.wait(1000)
    })
})
describe( `Testing Draft Post`, function() {
    it(`Visits to draft post and testing the title field`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin');
		cy.get('#ember8').type('j.oliverosv@uniandes.edu.co')
		cy.get('#ember10').type('Almendra1.*')
		cy.get('#ember12').click()
		cy.get('#ember34 > .gh-nav-viewname').click()
		cy.get('.gh-btn-green').click()
		cy.get('.gh-editor-title').type(faker.hacker.abbreviation())
		cy.contains('Post').click()
		cy.contains('Post').click()
		Cypress.on('uncaught:exception', (err, runnable) => {
		  return false;
		});
		cy.wait(1000)
    })
})
describe( `Testing Draft Post`, function() {
    it(`Visits to draft post and testing the title field`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin');
		cy.get('#ember8').type('j.oliverosv@uniandes.edu.co')
		cy.get('#ember10').type('Almendra1.*')
		cy.get('#ember12').click()
		cy.get('#ember34 > .gh-nav-viewname').click()
		cy.get('.gh-btn-green').click()
		cy.get('.gh-editor-title').type(faker.hacker.phrase())
		cy.contains('Post').click()
		cy.contains('Post').click()
		Cypress.on('uncaught:exception', (err, runnable) => {
		  return false;
		});
		cy.wait(1000)
    })
})
describe( `Testing Draft Post`, function() {
    it(`Visits to draft post and testing the title field`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin');
		cy.get('#ember8').type('j.oliverosv@uniandes.edu.co')
		cy.get('#ember10').type('Almendra1.*')
		cy.get('#ember12').click()
		cy.get('#ember34 > .gh-nav-viewname').click()
		cy.get('.gh-btn-green').click()
		cy.get('.gh-editor-title').type(faker.image.imageUrl())
		cy.contains('Post').click()
		cy.contains('Post').click()
		Cypress.on('uncaught:exception', (err, runnable) => {
		  return false;
		});
		cy.wait(1000)
    })
})
describe( `Testing Draft Post`, function() {
    it(`Visits to draft post and testing the title field`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin');
		cy.get('#ember8').type('j.oliverosv@uniandes.edu.co')
		cy.get('#ember10').type('Almendra1.*')
		cy.get('#ember12').click()
		cy.get('#ember34 > .gh-nav-viewname').click()
		cy.get('.gh-btn-green').click()
		cy.get('.gh-editor-title').type(faker.internet.password())
		cy.contains('Post').click()
		cy.contains('Post').click()
		Cypress.on('uncaught:exception', (err, runnable) => {
		  return false;
		});
		cy.wait(1000)
    })
})
describe( `Testing Draft Post`, function() {
    it(`Visits to draft post and testing the title field`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin');
		cy.get('#ember8').type('j.oliverosv@uniandes.edu.co')
		cy.get('#ember10').type('Almendra1.*')
		cy.get('#ember12').click()
		cy.get('#ember34 > .gh-nav-viewname').click()
		cy.get('.gh-btn-green').click()
		cy.get('.gh-editor-title').type(faker.lorem.sentence())
		cy.contains('Post').click()
		cy.contains('Post').click()
		Cypress.on('uncaught:exception', (err, runnable) => {
		  return false;
		});
		cy.wait(1000)
    })
})
describe( `Testing Draft Post`, function() {
    it(`Visits to draft post and testing the title field`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin');
		cy.get('#ember8').type('j.oliverosv@uniandes.edu.co')
		cy.get('#ember10').type('Almendra1.*')
		cy.get('#ember12').click()
		cy.get('#ember34 > .gh-nav-viewname').click()
		cy.get('.gh-btn-green').click()
		cy.get('.gh-editor-title').type(faker.lorem.paragraphs())
		cy.contains('Post').click()
		cy.contains('Post').click()
		Cypress.on('uncaught:exception', (err, runnable) => {
		  return false;
		});
		cy.wait(1000)
    })
})
describe( `Testing Draft Post`, function() {
    it(`Visits to draft post and testing the title field`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin');
		cy.get('#ember8').type('j.oliverosv@uniandes.edu.co')
		cy.get('#ember10').type('Almendra1.*')
		cy.get('#ember12').click()
		cy.get('#ember34 > .gh-nav-viewname').click()
		cy.get('.gh-btn-green').click()
		cy.get('.gh-editor-title').type(faker.lorem.sentences())
		cy.contains('Post').click()
		cy.contains('Post').click()
		Cypress.on('uncaught:exception', (err, runnable) => {
		  return false;
		});
		cy.wait(1000)
    })
})
describe( `Testing Draft Post`, function() {
    it(`Visits to draft post and testing the title field`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin');
		cy.get('#ember8').type('j.oliverosv@uniandes.edu.co')
		cy.get('#ember10').type('Almendra1.*')
		cy.get('#ember12').click()
		cy.get('#ember34 > .gh-nav-viewname').click()
		cy.get('.gh-btn-green').click()
		cy.get('.gh-editor-title').type(faker.random.arrayElement())
		cy.contains('Post').click()
		cy.contains('Post').click()
		Cypress.on('uncaught:exception', (err, runnable) => {
		  return false;
		});
		cy.wait(1000)
    })
})
describe( `Testing Draft Post`, function() {
    it(`Visits to draft post and testing the title field`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin');
		cy.get('#ember8').type('j.oliverosv@uniandes.edu.co')
		cy.get('#ember10').type('Almendra1.*')
		cy.get('#ember12').click()
		cy.get('#ember34 > .gh-nav-viewname').click()
		cy.get('.gh-btn-green').click()
		cy.get('.gh-editor-title').type(faker.random.hexaDecimal())
		cy.contains('Post').click()
		cy.contains('Post').click()
		Cypress.on('uncaught:exception', (err, runnable) => {
		  return false;
		});
		cy.wait(1000)
    })
})
describe( `Testing Draft Post`, function() {
    it(`Visits to draft post and testing the title field`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin');
		cy.get('#ember8').type('j.oliverosv@uniandes.edu.co')
		cy.get('#ember10').type('Almendra1.*')
		cy.get('#ember12').click()
		cy.get('#ember34 > .gh-nav-viewname').click()
		cy.get('.gh-btn-green').click()
		cy.get('.gh-editor-title').type(faker.system.commonFileName())
		cy.contains('Post').click()
		cy.contains('Post').click()
		Cypress.on('uncaught:exception', (err, runnable) => {
		  return false;
		});
		cy.wait(1000)
    })
})
describe( `Testing Draft Post`, function() {
    it(`Visits to draft post and testing the title field`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin');
		cy.get('#ember8').type('j.oliverosv@uniandes.edu.co')
		cy.get('#ember10').type('Almendra1.*')
		cy.get('#ember12').click()
		cy.get('#ember34 > .gh-nav-viewname').click()
		cy.get('.gh-btn-green').click()
		cy.get('.gh-editor-title').type(faker.vehicle.vehicle())
		cy.contains('Post').click()
		cy.contains('Post').click()
		Cypress.on('uncaught:exception', (err, runnable) => {
		  return false;
		});
		cy.wait(1000)
    })
})
describe( `Testing Draft Post`, function() {
    it(`Visits to draft post and testing the title field`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin');
		cy.get('#ember8').type('j.oliverosv@uniandes.edu.co')
		cy.get('#ember10').type('Almendra1.*')
		cy.get('#ember12').click()
		cy.get('#ember34 > .gh-nav-viewname').click()
		cy.get('.gh-btn-green').click()
		cy.get('.gh-editor-title').type(faker.vehicle.model())
		cy.contains('Post').click()
		cy.contains('Post').click()
		Cypress.on('uncaught:exception', (err, runnable) => {
		  return false;
		});
		cy.wait(1000)
    })
})
describe( `Testing Draft Post`, function() {
    it(`Visits to draft post and testing the title field`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin');
		cy.get('#ember8').type('j.oliverosv@uniandes.edu.co')
		cy.get('#ember10').type('Almendra1.*')
		cy.get('#ember12').click()
		cy.get('#ember34 > .gh-nav-viewname').click()
		cy.get('.gh-btn-green').click()
		cy.get('.gh-editor-title').type(faker.random.number()+faker.vehicle.model())
		cy.contains('Post').click()
		cy.contains('Post').click()
		Cypress.on('uncaught:exception', (err, runnable) => {
		  return false;
		});
		cy.wait(1000)
    })
})
describe( `Testing Draft Post`, function() {
    it(`Visits to draft post and testing the title field`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin');
		cy.get('#ember8').type('j.oliverosv@uniandes.edu.co')
		cy.get('#ember10').type('Almendra1.*')
		cy.get('#ember12').click()
		cy.get('#ember34 > .gh-nav-viewname').click()
		cy.get('.gh-btn-green').click()
		cy.get('.gh-editor-title').type(faker.random.number()+faker.vehicle.model())
		cy.contains('Post').click()
		cy.contains('Post').click()
		Cypress.on('uncaught:exception', (err, runnable) => {
		  return false;
		});
		cy.wait(1000)
    })
})
describe( `Testing Draft Post`, function() {
    it(`Visits to draft post and testing the title field`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin');
		cy.get('#ember8').type('j.oliverosv@uniandes.edu.co')
		cy.get('#ember10').type('Almendra1.*')
		cy.get('#ember12').click()
		cy.get('#ember34 > .gh-nav-viewname').click()
		cy.get('.gh-btn-green').click()
		cy.get('.gh-editor-title').type(faker.random.number()+faker.random.hexaDecimal())
		cy.contains('Post').click()
		cy.contains('Post').click()
		Cypress.on('uncaught:exception', (err, runnable) => {
		  return false;
		});
		cy.wait(1000)
    })
})
describe( `Testing Draft Post`, function() {
    it(`Visits to draft post and testing the title field`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin');
		cy.get('#ember8').type('j.oliverosv@uniandes.edu.co')
		cy.get('#ember10').type('Almendra1.*')
		cy.get('#ember12').click()
		cy.get('#ember34 > .gh-nav-viewname').click()
		cy.get('.gh-btn-green').click()
		cy.get('.gh-editor-title').type(faker.random.number()+faker.time.recent())
		cy.contains('Post').click()
		cy.contains('Post').click()
		Cypress.on('uncaught:exception', (err, runnable) => {
		  return false;
		});
		cy.wait(1000)
    })
})
describe( `Testing Draft Post`, function() {
    it(`Visits to draft post and testing the title field`, function() { 
		cy.visit('http://localhost:2368/ghost/#/signin');
		cy.get('#ember8').type('j.oliverosv@uniandes.edu.co')
		cy.get('#ember10').type('Almendra1.*')
		cy.get('#ember12').click()
		cy.get('#ember34 > .gh-nav-viewname').click()
		cy.get('.gh-btn-green').click()
		cy.get('.gh-editor-title').type(faker.random.number()+faker.random.number())
		cy.contains('Post').click()
		cy.contains('Post').click()
		Cypress.on('uncaught:exception', (err, runnable) => {
		  return false;
		});
		cy.wait(1000)
    })
})


