const generateHTML = teamDataArr => {
    console.log(teamDataArr)
};

module.exports = generateHTML

/// Create the team member profiles section
// const generateManagers = teamDataArr => {
//     if (role === "Manager") {
//     return `
 
//         ${teamDataArr
//            .map(({ name, id, email, role }) => {
//             return `
//             <div class="col-12 col-md-4 card">
//               <h3 class="team-name">${manager.getName()}</h3>
//               <h4 class="team-role">${getRole()}</h4>
//               <p>ID: ${getId()}</p>
//               <p>Email: <a href = "mailto: ${getEmail()}"></a><p>
//               <p>Office numner: ${getOfficeNumber()}
//             </div>
//           `;
//           })
//           .join('')}
//         </div>
//       </section>
//     `;
//   };
// }
// // Export function to generate entire page
// module.exports = templateData => {
//     // destructure page data by section
//     const { projects, about, ...header } = templateData;

//     return `
//     <!DOCTYPE html>
//     <html lang="en">

//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <meta http-equiv="X-UA-Compatible" content="ie-edge">
//         <title>Team Profile Generator</title>
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
//         <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300&display=swap">        

//         <link rel="stylesheet" href="../dist/style.css">
//     <head>

//     <body>
//         <div class="row">
//             <div class="col-12 w-100">
//                 <header>
//                     <h1 class="team-title">My Team</h1>
//                </header>            
//             </div>
//         </div>


//         <main class="container">
//             <section class="my-3" id="team-members">
//                 ${generateManagers(teamData)} 

//         </main>

//     </body>
//     </html>
//       `;
// };

