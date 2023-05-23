describe("As a user, I should be able to see the welcome page and navigate to the home page", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("Should be able to see a welcome page", () => {
    cy.get(".welcome-card")
      .should("contain", "Welcome to")
      .should(
        "contain",
        "A ChatGPT-powered app that helps everyday web surfers navigate the intentionally ambiguous realm of Terms of Service."
      );

    cy.get(".welcome-logo").should("be.visible");

    cy.get(".MuiButtonBase-root").should("be.visible");
  });

  it("Should be able to begin demo and display the login page", () => {
    cy.get(".MuiButtonBase-root").click();

    cy.get(".login-card")
      .should("exist")
      .should("contain", "Please Select A User");

    cy.get(".avatar-container")
      .children()
      .should("have.length", 3)
      .first()
      .should("contain", "Travis Howard");

    cy.get(":nth-child(1) > #avatar-img > .MuiAvatar-img")
      .should("have.attr", "src")
      .should("include", "/static/media/avatar-1.8e47360fb8a28e41c441.jpg");

    cy.get(".avatar-container")
      .children()
      .last()
      .should("contain", "Remy Sharp");

    cy.get(":nth-child(3) > #avatar-img > .MuiAvatar-img")
      .should("have.attr", "src")
      .should("include", "/static/media/avatar-3.bbace1ff38bd51a4220b.jpg");
  });

  it("Should be able to navigate to the home page", () => {
    cy.get(".MuiButtonBase-root").click();
    cy.get(":nth-child(1) > #avatar-img > .MuiAvatar-img").click();

    cy.get(".process-main")
      .should("contain", "Terms of Service Processor")
      .should("contain", "Understand what's important to you.");

    cy.get(".form-card")
      .should("be.visible")
      .should(
        "contain",
        "Paste, upload, or select your Terms of Service from a list of popular services."
      );

    cy.get(".MuiFormGroup-root")
      .children()
      .should("have.length", 6)
      .should("contain", "Privacy")
      .should("contain", "Security")
      .should("contain", "Copyright")
      .should("contain", "Liability")
      .should("contain", "Cancellation")
      .should("contain", "Payment");

    cy.get(".form-footer").children().should("have.length", 2);
    cy.get(".MuiButton-contained").contains("Process");
    cy.get(".MuiButton-outlined").contains("Upload");
    cy.get(".footer").should("be.visible");
  });
});
