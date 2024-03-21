describe('Combined Test', () => {
  it('Performs Appointment, Login, and Validates Sidebar Activation', () => {
    // Visit the webpage
    cy.visit('https://katalon-demo-cura.herokuapp.com');

    // Click the "Make Appointment" button
    cy.get('a#btn-make-appointment').click();

    // Fill in the username field
    cy.get('input#txt-username').type("John Doe");

    // Fill in the password field
    cy.get('input#txt-password').type("ThisIsNotAPassword");

    // Click the login button
    cy.get('button#btn-login').click();

    // Click on the menu icon to open the menu bar
    cy.get('i.fa.fa-bars').click();

    // Validate that the sidebar is active
    cy.get('nav#sidebar-wrapper').should('have.class', 'active');

    // Click on the "History" link
    cy.contains('a[href="history.php#history"]', 'History').click();

    // Validate that the text "No appointment." is visible
    cy.get('.col-sm-12.text-center').contains('No appointment.').should('be.visible');
  });
});
