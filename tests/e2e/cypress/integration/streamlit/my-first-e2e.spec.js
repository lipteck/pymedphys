/// <reference types="cypress" />

Cypress.Commands.add('compute', () => {
  cy.get("#ReportStatus").should("be.visible")
  cy.get("#ReportStatus").should("not.be.visible")
})


describe("smoke", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8501/");
    cy.get(".decoration").invoke("css", "display", "none");
  });

  it("basics", () => {
    cy.get(".stTextInput input")
      .first()
      .type("989898{enter}");

    cy.compute()

    cy.get(".stMarkdown").contains('MU')

    cy.get(".stTextInput input")
      .first()
      .clear()
      .blur();

    cy.compute()

    cy.get(".stMarkdown").contains('MU')
  });
});
