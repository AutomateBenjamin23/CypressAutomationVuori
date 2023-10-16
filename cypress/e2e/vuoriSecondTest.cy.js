describe('vuoriSecondTest.cy.js', () => {
   it('should visit Vuori Mens', () => {
      cy.visit('https://vuoriclothing.com') 

      cy.get(mensTab).click();

   })
   
})  