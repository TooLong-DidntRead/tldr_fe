describe("Error Handling", () => {
  beforeEach(() => {
    cy.visit("/abc")
  });

  it("Should display an error page when url is not found", () => {
    cy.get(".error-card")
      .should("be.visible")
      .should("contain", "The page you're looking for doesn't exist");
  });

  it("Should navigate back to a working page when button is clicked", () => {
    cy.get(".MuiButtonBase-root").click();
    cy.get(".error-card").should("not.exist");
    cy.get(".welcome-card").should("be.visible");
  });
});

