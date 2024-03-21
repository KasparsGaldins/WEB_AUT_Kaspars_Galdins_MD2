describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://katalon-demo-cura.herokuapp.com');
      cy.get('a#btn-make-appointment').click();
      //cy.get('.element-on-new-page').should('exist');

      
      // Then, check the URL
   //   cy.url().should('include', '#appointment');

   // Fill in the username field
cy.get('input#txt-username').type("John Doe");

// Fill in the password field
cy.get('input#txt-password').type("ThisIsNotAPassword");
// Click the login button
cy.get('button#btn-login').click();
// Select the desired healthcare center
cy.get('select[name="facility"]').select('Seoul CURA Healthcare Center');

// Mark the checkbox for hospital readmission
cy.get('input#chk_hospotal_readmission').check();

// Choose the Medicaid radio button
cy.get('input#radio_program_medicaid').check();

// Enter the visit date
cy.get('input#txt_visit_date').click(); // Click to open the date picker
cy.get('.datepicker').contains('30').click(); // Select the date (assuming 30th of the month)


// Enter the comment
cy.get('textarea#txt_comment').type('This is a test comment for Cypress automation.');

// Click the login button
// Click the "Book Appointment" button
cy.get('button#btn-book-appointment').click();



      
    });
  });