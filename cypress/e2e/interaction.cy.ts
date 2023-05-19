describe("As a user, I should recieve a summary of the terms that is easy to read and understand", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
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
              title: "Test Title",
              impact: "Test Impact",
              actionable: "Test Actionable",
              ranking: 0,
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

    cy.get(".results-main").should("exist");
  });
});
