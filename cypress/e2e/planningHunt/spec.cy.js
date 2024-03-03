import { dinos } from "../../mockData";

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.intercept(
      {
        method: 'GET',
        url: 'https://dino-backend.onrender.com/dino'
      },
      {
        statusCode: 200,
        body: { dinos },
      }
    ).as('apiRequest');

    cy.get('#planningHuntBtn').click();
    cy.wait('@apiRequest');
  });

  it('should be able to view specific dinosaurs', () => {
    cy.get('#0.cards_item_name').should('exist');
    cy.get('#0.cards_item_name').should('include.text', 'Tyrannosaurus Rex');

    cy.get('#2.cards_item_name').should('exist');
    cy.get('#2.cards_item_name').should('include.text', 'Triceratops');
    

    cy.get('#4.cards_item_name').should('exist');
    cy.get('#4.cards_item_name').should('include.text', 'Brachiosaurus');

  });

  it('should be able to plan a hunt', () => {

    cy.get('.cards_item_info .select-button').eq(0).should('be.visible').click();
   
    const firstDino = dinos[0];

    cy.get('h1:contains("Your Hunt")').should('be.visible');
    cy.get('.plannedhunt-section').should('have.length', 1);
    cy.get('.plannedhunt-section img').should('have.attr', 'src', firstDino.img);
    cy.get('.plannedhunt-section h2').should('contain.text', firstDino.name);
    cy.get('.plannedhunt-section p:contains("Description:")').should('contain.text', `Description: ${firstDino.description}`);
    cy.get('.plannedhunt-section p:contains("Era:")').should('contain.text', `Era: ${firstDino.era}`);
    cy.get('.plannedhunt-section p:contains("Diet:")').should('contain.text', `Diet: ${firstDino.diet}`);
    cy.get('.plannedhunt-section h1:contains("Danger level:")').should('contain.text', `Danger level: ${firstDino.dangerLevel}`);

  })
  it('should be able to plan a hunt with another dino', () => {

    cy.get('.cards_item_info .select-button').eq(3).should('be.visible').click();
   
    const firstDino = dinos[3];

    cy.get('h1:contains("Your Hunt")').should('be.visible');
    cy.get('.plannedhunt-section').should('have.length', 1);
    cy.get('.plannedhunt-section img').should('have.attr', 'src', firstDino.img);
    cy.get('.plannedhunt-section h2').should('contain.text', firstDino.name);
    cy.get('.plannedhunt-section p:contains("Description:")').should('contain.text', `Description: ${firstDino.description}`);
    cy.get('.plannedhunt-section p:contains("Era:")').should('contain.text', `Era: ${firstDino.era}`);
    cy.get('.plannedhunt-section p:contains("Diet:")').should('contain.text', `Diet: ${firstDino.diet}`);
    cy.get('.plannedhunt-section h1:contains("Danger level:")').should('contain.text', `Danger level: ${firstDino.dangerLevel}`);

  })
  it.only('should click random and plan a hunt', () => {
    cy.get('#random-button').click()
    
    cy.get('.select-button').click()
      cy.get('.hunted-dino').should('exist')
      cy.get('h1:contains("Your Hunt")').should('exist');
      cy.get('.plannedhunt-section').should('exist');
      cy.get('.plannedhunt-section img').should('exist');
      cy.get('.plannedhunt-section h2').should('exist');
      cy.get('.plannedhunt-section p:contains("Description:")').should('exist');
      cy.get('.plannedhunt-section p:contains("Era:")').should('exist');
      cy.get('.plannedhunt-section p:contains("Diet:")').should('exist');
      cy.get('.plannedhunt-section h1:contains("Danger level:")').should('exist');
  
  })
});
