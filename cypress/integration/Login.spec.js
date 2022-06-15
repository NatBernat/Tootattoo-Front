describe("Given Toottattoo web app", () => {
  describe("When a new user enters in and wants to register and log in", () => {
    it("Then it can go to login form and then log in", () => {
      cy.visit("public-list");

      cy.get("p").contains("Log in").click();

      cy.get("span").contains("Register").click();

      cy.get("label").contains("Username").type("cypress");
      cy.get("label").contains("Password").type("cypress");
      cy.get("label").contains("Full name").type("cypress");
      cy.get("label").contains("E-mail").type("cypress@cypress.com");
      cy.get("button").contains("Register").click();

      cy.get("label").contains("Username").type("cypress");
      cy.get("label").contains("Password").type("cypress");
      cy.get("button").contains("Log In").click();

      cy.get(".greeting").contains("Logged as @cypress").should("exist");
    });
  });
});
