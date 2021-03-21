describe('Ghost 3.3.0 under monkeys', function() {
    it('visits Ghost 3.3.0 and survives monkeys', function() {
		cy.visit('http://localhost:2999/ghost/#/signin')
		cy.get('#ember8').type('j.oliverosv@uniandes.edu.co')
		cy.get('#ember10').type('Almendra1*')
		cy.get('#ember12').click()
        cy.wait(1000);
        randomClick(10);
    })
})
function randomClick(monkeysLeft) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0) {
        cy.get('a' || 'li').then($links => {
            var randomLink = $links.get(getRandomInt(0, $links.length));
            if(!Cypress.dom.isHidden(randomLink)) {
                cy.wrap(randomLink).click({force: true});
                monkeysLeft = monkeysLeft - 1;
            }
            cy.wait(1000);
            randomClick(monkeysLeft);
        });
    }   
}