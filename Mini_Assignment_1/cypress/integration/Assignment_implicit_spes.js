describe('Assertion', () =>{

    it('Implicit subject', ( )=>{
        cy.visit('http://www.flipkart.com')

        // required test cases
        cy.url().should('eq', 'https://www.flipkart.com/');

        // validation on product names
        cy.get('div[class*="eFQ30H"]:nth-of-type(1)').should('contain.text','Top Offers')
        cy.get('div[class*="eFQ30H"]:nth-of-type(2)').should('contain.text','Grocery')
        cy.get('div[class*="eFQ30H"]:nth-of-type(3)').should('contain.text','Mobiles')
        cy.get('div[class*="eFQ30H"]:nth-of-type(4)').should('contain.text','Fashion')
        cy.get('div[class*="eFQ30H"]:nth-of-type(5)').should('contain.text','Electronics')
        cy.get('div[class*="eFQ30H"]:nth-of-type(6)').should('contain.text','Home')
        cy.get('div[class*="eFQ30H"]:nth-of-type(7)').should('contain.text','Appliances')
        cy.get('div[class*="eFQ30H"]:nth-of-type(8)').should('contain.text','Travel')
        cy.get('div[class*="eFQ30H"]:nth-of-type(9)').should('contain.text','Beauty, Toys & More')

        // validation on login window
        cy.get('a[class*="_1_3w1N"]').click()
        cy.get('p[class*="_1-pxlW"]').should('contain.text','Get access to your Orders, Wishlist and Recommendations')
        cy.get('button[class*="_2KpZ6l _2HKlqd _3AWRsL"]').click()
        cy.get('span[class*="_2YULOR"]').should('contain.text','Please enter valid Email ID/Mobile number')

        // additional test cases

        // text validation
        cy.get('a[class="_3-PJz-"]').should('contain.text','Become a Seller')
        cy.get('div[class="exehdJ"]').should('contain.text','More')
        cy.get('a[class="_3SkBxJ"]').should('contain.text','Cart')

        // search validation
        cy.get('button[class*="_2KpZ6l _2doB4z"]').click()
        cy.get('input[type*="text"]').should('be.enabled').and('be.visible').type('Watch')
        cy.get('button[type="submit"]').click()
        
        // Ideal For check box text validation
        cy.get('div[title="Couple"]').should('contain.text','Couple')
        cy.get('div[title="Women"]').should('contain.text','Women')
        cy.get('div[title="Men"]').should('contain.text','Men')
        cy.get('div[title="Boys"]').should('contain.text','Boys')
        cy.get('div[title="Girls"]').should('contain.text','Girls')
        cy.get('div[title="Boys & Girls"]').should('contain.text','Boys & Girls')
        cy.get('div[title="Men & Women"]').should('contain.text','Men & Women')

        // Rating Check Box Validation
        cy.get('div[title="4★ & above"]').should('contain.text','4★ & above')
        cy.get('div[title="3★ & above"]').should('contain.text','3★ & above')
        cy.get('div[title="2★ & above"]').should('contain.text','2★ & above')
        cy.get('div[title="1★ & above"]').should('contain.text','1★ & above')
    })
})