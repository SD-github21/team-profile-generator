// Create createProfiles function to generate HTML sections for each type of role
const createProfiles = teamDataArr => {
    const managers = teamDataArr.filter(member => member.role === 'Manager');
    const engineers = teamDataArr.filter(member => member.role === 'Engineer');
    const interns = teamDataArr.filter(member => member.role === 'Intern');
    return `       

        ${managers
        .map(manager => {
            return `    
            <div class="col-12 col-md-3 mx-3 my-3 shadow rounded">
                <h3 class="team-name">${manager.getName()}</h3>
                <h4 class="team-role"><i class="fa-solid fa-mug-hot"></i>       ${manager.getRole()}</h4>
                <p>ID: ${manager.getId()}</p>
                <p>Email: <a href = "mailto: ${manager.getEmail()}">${manager.getEmail()}</a><p>
                <p>Office number: ${manager.getOfficeNumber()}
            </div>`;
        })
        .join("")}

        ${engineers
            .map(engineer => {
                return `    
            <div class="col-12 col-md-3 mx-3 my-3 shadow rounded">
                <h3 class="team-name">${engineer.getName()}</h3>
                <h4 class="team-role"><i class="fa-solid fa-glasses"></i>        ${engineer.getRole()}</h4>
                <p>ID: ${engineer.getId()}</p>
                <p>Email: <a href = "mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a><p>
                <p>GitHub: <a href = "https://github.com/${engineer.getGitHub()}" target="_blank" class="github">https://github.com/${engineer.getGitHub()}</a></p>
            </div>`;          
            })
            .join("")}
    
        ${interns
            .map(intern => {
                return `    
            <div class="col-12 col-md-3 mx-3 my-3 shadow rounded">    
                <h3 class="team-name">${intern.getName()}</h3>
                <h4 class="team-role"><i class="fa-solid fa-user-graduate"></i>        ${intern.getRole()}</h4>
                <p>ID: ${intern.getId()}</p>
                <p>Email: <a href = "mailto: ${intern.getEmail()}">${intern.getEmail()}</a><p>
                <p>School: ${intern.getSchool()}
            </div>`;              
            })
            .join("")}`;
 };


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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
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

           <section class="row d-flex flex-wrap justify-content-center" id="team-members">
                ${createProfiles(templateData)} 

           </section>

        </main>

    </body>
    </html>
      `;
};
