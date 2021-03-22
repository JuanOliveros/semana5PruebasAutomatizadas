

describe('Los estudiantes under monkeys', function() {
  it('visits los estudiantes and survives monkeys', function() {
    cy.visit('https://losestudiantes.com');
    cy.wait(5000);
    randomEvent(5);
  });
});

function randomEvent(numberEvent) {
  if (numberEvent > 0) {
    randomGenerator[getRandomInt(0, randomGenerator.length)]();
    var aux = numberEvent - 1;
    cy.wait(2000);
    randomEvent(aux);
  }
}

function clickLink() {
  cy.get('a').then($f => 
    {
      var aux = $f.get(getRandomInt(0, $f.length));
      if (!Cypress.dom.isHidden(aux)) {
        cy.wrap(aux).click({force: true});
      }
    });
}

function clickButton() {
  cy.get('button').then($f => 
    {
      var aux = $f.get(getRandomInt(0, $f.length));
      if (!Cypress.dom.isHidden(aux)) {
        cy.wrap(aux).click({force: true});
      }
    });
}

function typeText() {
  cy.get('input').then($f => 
    {
      var aux = $f.get(getRandomInt(0, $f.length));
      if (!Cypress.dom.isHidden(aux)) {
        cy.wrap(aux).click({force: true}).type('This is a random text generate from cypress');
      }
    });
}

function selectCombo() {
  cy.get('select').then($f => 
    {
      var aux = $f.get(getRandomInt(0, $f.length));
      if (!Cypress.dom.isHidden(aux)) {
        var optionRandom = aux.options[getRandomInt(0, aux.options.length)].value;
        cy.wrap(aux).select(optionRandom, {force: true});
      }
    });
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

var randomGenerator = [
  clickLink,
  typeText,
  clickButton,
  selectCombo
];