describe("Error Handling", () => {

  it("Should be able to handle a bad response", () => {
    cy.intercept("POST", "https://tldr-api.onrender.com/api/v1/queries",
      {
        statusCode: 400
      }
    );
    cy.wait(30000)
    cy.visit("")
    cy.get(".MuiButtonBase-root").click();
    cy.get(":nth-child(1) > #avatar-img > .MuiAvatar-img").click();

    cy.get("#tos").type(
      `Netflix Terms of Use
    Netflix provides a personalized subscription service that allows our members to access entertainment content ("Netflix content") over the Internet on certain Internet-connected TV's, computers and other devices ("Netflix ready devices").`,
      { delay: 0 }
    );

    cy.get(
      ":nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input"
    ).click();
    cy.get(
      ":nth-child(4) > .MuiButtonBase-root > .PrivateSwitchBase-input"
    ).click();
    cy.get(
      ":nth-child(6) > .MuiButtonBase-root > .PrivateSwitchBase-input"
    ).click();

    cy.get(".MuiButton-contained").click();

    cy.get('.error-card')
      .should("contain", "Uh-Oh, There's been an error");
  });

  beforeEach(() => {
    cy.visit("abc")
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

