describe('Assertion using the chai methods',()=>{
    it('Validating the url and products',()=>{
        
        cy.visit('http://www.flipkart.com')

        cy.url().should((link) => {
            expect(link).to.eq('https://www.flipkart.com/')
        })

        cy.get('div:nth-child(1) > a > div.xtXmba').invoke('text').then($text =>{
            expect('Top Offers').to.be.equal($text)
        })

        cy.get('div:nth-child(2) > a > div.xtXmba').invoke('text').then($text =>{
            expect('Grocery').to.be.equal($text)
        })

        cy.get('div:nth-child(3) > a > div.xtXmba').invoke('text').then($text=>{
            expect('Mobiles').to.be.equal($text)
        })

        cy.get('div:nth-child(4) > a > div._1psGvi.SLyWEo > div > div').invoke('text').then($text=>{
            expect('Fashion').to.be.equal($text)
        })

        cy.get('div:nth-child(5) > a > div._1psGvi.SLyWEo > div > div').invoke('text').then($text=>{
            expect('Electronics').to.be.equal($text)
        })

        cy.get('div:nth-child(6) > a > div._1psGvi.SLyWEo > div > div').invoke('text').then($text=>{
            expect('Home').to.be.equal($text)
        })

        cy.get('div:nth-child(7) > a > div._1psGvi.SLyWEo > div > div').invoke('text').then($text=>{
            expect('Appliances').to.be.equal($text)
        })

        cy.get('div:nth-child(8) > a > div.xtXmba').invoke('text').then($text=>{
            expect('Travel').to.be.equal($text)
        })

        cy.get(' div:nth-child(9) > a > div._1psGvi.SLyWEo > div > div').invoke('text').then($text=>{
            expect('Beauty, Toys & More').to.be.equal($text)
        })

    })
    it('Login Validation',()=>{

        cy.visit('http://www.flipkart.com')
        cy.contains('Login').click()
        cy.get('div:nth-child(1) > label > span').invoke('text').then($text=>{
            expect('Enter Email/Mobile number').to.be.equal($text)
        })
        cy.get('div:nth-child(2) > label > span').invoke('text').then($text=>{
            expect('Enter Password').to.be.equal($text)
        })
        cy.get(' div._1D1L_j > button > span').click()
        cy.get('span._2YULOR > span').invoke('text').then($text=>{
            expect('Please enter valid Email ID/Mobile number').to.be.equal($text)
        })
        
    })
       
})