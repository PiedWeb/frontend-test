/// <reference types="Cypress" />

context('CMS', () => {

  beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    cy.visit(Cypress.env('baseURL')+'/admin/dashboard')
    cy.login()
  })

  it('New Page', () => {

    /** Create a new Page **/
    cy.get('.container-fluid > .navbar-collapse > .nav > li > .sonata-action-element')
        .click()

    let random = Math.floor((Math.random() * 100) + 1)

    cy.get('#sc86eadbc42_title')
        .type('Page test ' + random).should('have.value', 'Page test ' + random)

    cy.get('textarea.ace_text-input').type('Lorem ipsum dolor sit amet.', {force:true})

    cy.get('#sc86eadbc42_slug')
        .type('page-' + random).should('have.value', 'page-' + random)

    cy.get('.sonata-ba-form-actions > .btn').first().click()

    cy.get('.alert').contains('succès')

    /** Upload **/
    cy.get('[title="Ajouter"]').first().click()

    cy.upload_file('images/favicon.png', 'image/png', '[type=file]')

    cy.get('[name=btn_create]').click()

    /** Update **/
    cy.get('.sonata-ba-form-actions > .btn').first().click()

    /** Check page generation **/
    cy.visit(Cypress.env('baseURL')+'/fr/page-' + random)
    cy.get('#content').contains('Lorem ipsum')
  })

  it('Delete last created Page', () => {
    cy.visit(Cypress.env('baseURL')+'/admin/dashboard')
    cy.get('.sonata-link-identifier').first().click()

    cy.get('.sonata-ba-form-actions > .btn-danger').click()
    cy.get('.btn-danger').click()
    cy.get('.alert').contains('succès')
  })

  it('Delete last created Image', () => {
    cy.visit(Cypress.env('baseURL')+'/admin/app/media/list')

    cy.get('.col-xs-6 > .mosaic-box-outter > .mosaic-inner-link > .mosaic-inner-box > .mosaic-inner-box-hover').first().click()
    cy.get('.btn-danger').first().click()
    cy.get('.btn-danger').click()
    cy.get('.alert').contains('succès')
  })

  it('New User', () => {
    cy.visit(Cypress.env('baseURL')+'/admin/app/user/list')

    cy.get('.sonata-action-element').first().click()

    let random = Math.floor((Math.random() * 100) + 1)
    cy.get('#s30e217ffbf_email').type('test'+random+'@piedweb.com')
    cy.get('#s30e217ffbf_plainPassword').type('hello!PiedW3b')
    cy.get('#s30e217ffbf_enabled').click()

    cy.get('.sonata-ba-form-actions > .btn').first().click()

    cy.get('.alert').contains('succès')

    /** Delete it **/
    cy.get('.btn-danger').first().click()
    cy.get('.btn-danger').click()
    cy.get('.alert').contains('succès')

  })

})
