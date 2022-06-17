describe('End to End test', () => {
  it('Testing the entire application', () => {
    //@ts-ignore
    cy.visit('http://localhost:3000/');
    //@ts-ignore
    cy.findByRole('textbox', { name: /email/i }).type('alekos@gmail.com');
    //@ts-ignore
    cy.findByTestId('password').type('123456');
    //@ts-ignore
    cy.findByRole('button', { name: /sign in/i }).click();
    //@ts-ignore
    cy.findByRole('combobox', { name: /filter by users/i }).type(
      'Clementine Bauch'
    );
    //@ts-ignore
    cy.findByRole('option', { name: /clementine bauch/i }).click();
    //@ts-ignore
    cy.findByRole('combobox', { name: /filter by users/i }).type(
      'Chelsey Dietrich'
    );
    //@ts-ignore
    cy.findByRole('option', { name: /chelsey dietrich/i }).click();
    //@ts-ignore
    cy.findByRole('combobox', { name: /filter by users/i }).type(
      'Glenna Reichert'
    );
    //@ts-ignore
    cy.findByRole('option', { name: /glenna reichert/i }).click();
    //@ts-ignore
    cy.findByRole('button', { name: /logout/i }).click();
  });
});
