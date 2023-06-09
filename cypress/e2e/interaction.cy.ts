describe("As a user, I should recieve a summary of the terms that is easy to read and understand", () => {
  beforeEach(() => {
    cy.visit("");
    cy.get(".MuiButtonBase-root").click();
    cy.get(":nth-child(1) > #avatar-img > .MuiAvatar-img").click();
  });

  it("Should be able to submit a TOS and take me to the results page", () => {
    cy.intercept("POST", "https://ec2-3-18-245-190.us-east-2.compute.amazonaws.com/api/v1/queries", {
      statusCode: 201,
      fixture: "tosResponse.json",
    });

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

    cy.get(".results-main")
      .should("exist")
      .should("contain", "Your Results")
      .should("contain", "Process Again");

    cy.get(".concern-rows")
      .children()
      .should("have.length", 2)
      .should("contain", "Liability")
      .should("contain", "Privacy");

    cy.get(".footer").should("be.visible");
  });

  it("Should be able to navigate back to the home page", () => {
    cy.intercept("POST", "https://ec2-3-18-245-190.us-east-2.compute.amazonaws.com/api/v1/queries", {
      statusCode: 201,
      fixture: "tosResponse.json",
    });

    cy.get("#tos").type(
      `Netflix Terms of Use
    Netflix provides a personalized subscription service that allows our members to access entertainment content ("Netflix content") over the Internet on certain Internet-connected TV's, computers and other devices ("Netflix ready devices").`,
      { delay: 0 }
    );

    cy.get(
      ":nth-child(4) > .MuiButtonBase-root > .PrivateSwitchBase-input"
    ).click();
    cy.get(".MuiButton-contained").click();
    cy.get("a > .MuiButtonBase-root").click();
    cy.get(".form-card").should("be.visible");
  });

  it("Should be able to log out and switch user", () => {
    cy.get(".user-div > .MuiButtonBase-root").click();
    cy.get(":nth-child(2) > #avatar-img > .MuiAvatar-img").click();
    cy.get(".MuiAvatar-img")
      .should("have.attr", "src")
      .should("include", "/static/media/avatar-2.7d1c2a98ce73b0b13898.jpg");
  });

  it("Should be able to choose from a common TOS to add to my form and submit it", () => {
    cy.intercept("POST", "https://ec2-3-18-245-190.us-east-2.compute.amazonaws.com/api/v1/queries", {
      statusCode: 201,
      fixture: "tosResponse.json",
    });

    cy.get("#tos-library-select").click();
    cy.get('.MuiList-root > [tabindex="0"]').click();
    cy.get("#tos");
    cy.get(
      ":nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input"
    ).click();
    cy.get(
      ":nth-child(4) > .MuiButtonBase-root > .PrivateSwitchBase-input"
    ).click();
    cy.get(".MuiButton-contained").click();

    cy.get(".results-main")
      .should("exist")
      .should("contain", "Your Results")
      .should("contain", "Process Again");

    cy.get(".concern-rows")
      .children()
      .should("have.length", 2)
      .should("contain", "Liability")
      .should("contain", "Privacy");
  });
});
