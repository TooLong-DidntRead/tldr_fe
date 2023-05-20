describe("As a user, I should recieve a summary of the terms that is easy to read and understand", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:3000/");
    cy.get(".MuiButtonBase-root").click();
    cy.get(":nth-child(1) > #avatar-img > .MuiAvatar-img").click();
  });

  it("Should be able to submit a TOS and take me to the results page", () => {
    cy.intercept(
      {
        method: "POST",
        url: "https://4196c33d-8951-4a3a-8216-bffd37431cc2.mock.pstmn.io/api/v1/processTOS",
      },
      {
        statusCode: 200,
        body: {
          data: [
            {
              title: "Liability",
              impact:
                "The Netflix Terms of Use outlines the subscription service that allows members to access entertainment content over the Internet on certain Internet-connected TV's, computers and other devices. It also outlines the payment method that is charged for the subscription service.",
              actionable:
                "The Terms of Use outlines the steps that members must take to cancel their subscription service, as well as the steps that must be taken to ensure that the subscription service is not renewed after the cancellation.",
              ranking: 8,
            },
            {
              title: "Privacy",
              impact:
                "Netflix Inc. states that they may collect personal information from members, including name, address, email address, payment information, and other information. They may also collect information about members' use of the service, such as the titles of movies and TV shows watched and the duration of the viewing session.",
              actionable:
                "Members can control the amount of personal information they provide to Netflix Inc. by adjusting their account settings. They can also control the amount of information Netflix Inc. collects about their use of the service by adjusting their privacy settings.",
              ranking: 5,
            },
          ],
        },
      }
    );

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
  });

  it("Should be able to navigate back to the home page", () => {
    cy.intercept(
      {
        method: "POST",
        url: "https://4196c33d-8951-4a3a-8216-bffd37431cc2.mock.pstmn.io/api/v1/processTOS",
      },
      {
        statusCode: 200,
        body: {
          data: [
            {
              title: "Liability",
              impact:
                "The Netflix Terms of Use outlines the subscription service that allows members to access entertainment content over the Internet on certain Internet-connected TV's, computers and other devices. It also outlines the payment method that is charged for the subscription service.",
              actionable:
                "The Terms of Use outlines the steps that members must take to cancel their subscription service, as well as the steps that must be taken to ensure that the subscription service is not renewed after the cancellation.",
              ranking: 8,
            },
          ],
        },
      }
    );
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
});
