
describe('working with fixture data to signup', ()=>{
 
    it('signup through login1 data and tries to signup', ()=>{
      cy.visit('http://localhost:4200/register')
      cy.fixture('signup1.json').then((data)=>{
   
            cy.get('.name').type(data.name)
            cy.get('.email').type(data.email)
            cy.get('.phone').type(data.phone)
            cy.get('select').select('expert')
            cy.get('select').should('have.value','expert')
            cy.get('.password').type(data.password)
   
            //after signup to login page and login
            cy.get('.register').click().then(el=>{
            cy.visit('http://localhost:4200/login')
   
            })
   
      })
  })
  })

  
// describe('working with fixture data to signup', ()=>{
 
//     it('signup through login1 data and tries to signup', ()=>{
//       cy.visit('http://localhost:4200/register')
//       cy.fixture('signup1.json').then((data)=>{
   
//             cy.get('.name').type(data.name)
//             cy.get('.email').type(data.email)
//             cy.get('.phone').type(data.phone)
//             cy.get('select').select('user')
//             cy.get('select').should('have.value','user')
//             cy.get('.password').type(data.password)
   
//             //after signup to login page and login
//             cy.get('.register').click().then(el=>{
//             cy.visit('http://localhost:4200/login')
   
//             })
   
//       })
//   })
//   })

   
   
   
  //registering with fixed data correct details and wrong details
  describe('working with fixture data to login', ()=>{
   
    it('iterates through login2 data and tries to login', ()=>{
        cy.visit('http://localhost:4200/login')
   
        cy.fixture('login2.json').then((dataarray)=>{
            dataarray.forEach((data:{email: string, password: string})=>{
                cy.get('.email').type(data.email)
                cy.get('.password').type(data.password)
   
                if(data.email == 'godwin@gmail.com' && data.password == 'user'){
                    cy.get('.login-btn').click().then(el=>{
                       
                        cy.visit('http://localhost:4200/user/view-booking-user')
                        // cy.location('pathname').should('equal', 'http://localhost:4200/user/view-booking-user');
                        cy.get('.logout').click()
                        cy.visit('http://localhost:4200/login')
                    })
                }
                else if(data.email == 'jack22@gmail.com' && data.password == 'expert'){
                    cy.get('.login-btn').click().then(el=>{
                        cy.visit('http://localhost:4200/expert/view-booking')
                         cy.get('.logout').click()
                        cy.visit('http://localhost:4200')
                        })
              }

              else if(data.email == 'compgodwin@gmail.com' && data.password! == '123456'){
                cy.get('[data-cy="login-btn"]').click()
                cy.contains('Incorrect password')
            }

            })
        })
    })
   
  }) 
   
   
   
//    //intercepting
//   describe('Request without hitting backend', ()=>{
//     // beforeEach(()=>{
//     //     cy.visit( '/auth/login') })
   
//     it('should handle login port request', ()=>{
//         cy.intercept('POST', 'http://localhost:4001/login', {
//             body:{
//                 message: "Logged in successfully"
//             }
//         }).as('loginRequest')
   
//         cy.get('.login-btn').click()
   
//         cy.wait('@loginRequest').then(interception =>{
//             expect( interception.request.body).to.exist;
//   1
//             cy.get('.sucessMsg').should('contain', 'Logged In Successfully')
//         })
//      })
   
//   })
   
   
  
  
