const createProfiles = teamDataArr => {
    const managers = teamDataArr.filter(member => member.role === 'Manager');
    const engineers = teamDataArr.filter(member => member.role === 'Engineer');
    const interns = teamDataArr.filter(member => member.role === 'Intern');
    console.log(managers);
    console.log(engineers);
    console.log(interns);
    return `       

        ${managers
        .map(manager => {
            return `
            <div class="col-12 col-md-3 mx-3 card">
                <h3 class="team-name">${manager.getName()}</h3>
                <h4 class="team-role">${manager.getRole()}</h4>
                <p>ID: ${manager.getId()}</p>
                <p>Email: <a href = "mailto: ${manager.getEmail()}"></a><p>
                <p>Office number: ${manager.getOfficeNumber()}
            </div>
        `;
       
        })
        .join("")}

        ${engineers
            .map(engineer => {
                return `
            <div class="col-12 col-md-3 mx-3 card">
                <h3 class="team-name">${engineer.getName()}</h3>
                <h4 class="team-role">${engineer.getRole()}</h4>
                <p>ID: ${engineer.getId()}</p>
                <p>Email: <a href = "mailto: ${engineer.getEmail()}"></a><p>
                <p>GitHub: ${engineer.getGitHub()}
            </div>
            `;
           
            })
            .join("")}
    
            ${interns
                .map(intern => {
                    return `
                <div class="col-12 col-md-3 mx-3 card">
                    <h3 class="team-name">${intern.getName()}</h3>
                    <h4 class="team-role">${intern.getRole()}</h4>
                    <p>ID: ${intern.getId()}</p>
                    <p>Email: <a href = "mailto: ${intern.getEmail()}"></a><p>
                    <p>School: ${intern.getSchool()}
                </div>
                `;
               
                })
                .join("")}
    

        </div> 
        `;
 
};

// module.exports = generateHTML;


// Export function to generate entire page
module.exports = templateData => {

    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie-edge">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300&display=swap">        

        <link rel="stylesheet" href="../dist/style.css">
    <head>

    <body>
        <div class="row">
            <div class="col-12 w-100">
                <header>
                    <h1 class="team-title">My Team</h1>
               </header>            
            </div>
        </div>


        <main class="container">
            <section class="row" id="team-members">
                ${createProfiles(templateData)} 

        </main>

    </body>
    </html>
      `;
};
