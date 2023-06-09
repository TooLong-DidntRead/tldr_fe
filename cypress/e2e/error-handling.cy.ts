describe("Error Handling", () => {

  before(() => {
    cy.wait(60000)
  })

  it("Should be able to handle a bad response", () => {
    cy.intercept("POST", "https://ec2-3-18-245-190.us-east-2.compute.amazonaws.com/api/v1/queries",
      {
        statusCode: 400
      }
    );
    
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

  it("Should display an error page when url is not found, and nav back to the home page", () => {
    cy.wait(1000)
    cy.visit("/abc")
    cy.get(".error-card")
      .should("be.visible")
      .should("contain", "The page you're looking for doesn't exist");
    cy.get(".MuiButtonBase-root").click();
    cy.get(".error-card").should("not.exist");
    cy.get(".welcome-card").should("be.visible");
  });
});

