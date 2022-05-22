const generateHTML = teamDataArr => {
    const manager = teamDataArr.filter(member => member.role === 'Manager');
    const engineer = teamDataArr.filter(member => member.role === 'Engineer');
    const intern = teamDataArr.filter(member => member.role === 'Intern');
    console.log(manager);
    console.log(engineer);
    console.log(intern);
    return `       
        <div class="col-12 col-md-4 card">
        ${manager
        .map(({ name, id, role, email, officeNumber }) => {
            return `
            <h3 class="team-name">${name}</h3>
            <h4 class="team-role">${role}</h4>
            <p>ID: ${id}</p>
            <p>Email: <a href = "mailto: ${email}"></a><p>
            <p>Office number: ${officeNumber}
        `;
       
        })
        .join("")}

        ${engineer
            .map(({ name, id, email, role, gitHub }) => {
                return `
                <h3 class="team-name">${name}</h3>
                <h4 class="team-role">${role}</h4>
                <p>ID: ${id}</p>
                <p>Email: <a href = "mailto: ${email}"></a><p>
                <p>GitHub: ${gitHub}
            `;
           
            })
            .join("")}
    
            ${intern
                .map(({ name, id, email, role, school }) => {
                    return `
                    <h3 class="team-name">${name}</h3>
                    <h4 class="team-role">${role}</h4>
                    <p>ID: ${id}</p>
                    <p>Email: <a href = "mailto: ${email}"></a><p>
                    <p>School: ${school}
                `;
               
                })
                .join("")}
    

        </div> 
        `;
 
};

module.exports = generateHTML;


// // Export function to generate entire page
// module.exports = templateData => {

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
//                 ${createProfiles(teamData)} 

//         </main>

//     </body>
//     </html>
//       `;
// };
