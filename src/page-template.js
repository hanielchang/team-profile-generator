const Manager = require("../lib/Manager");
const generateProfile = employeesArray => {

    const newEmployeesArray = employeesArray.map(({ name, email, id, unknown}) => {
        var github = ``;
        var school = ``;

        if (unknown === 'github') {
            github = `<a href="${unknown}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>${unknown}</a>`
        }
        else {

        }
        
        
        return `
          <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
            <h3 class="portfolio-item-title text-light">${name}</h3>
            <h5 class="portfolio-languages">
              ID number: ${id}
            </h5>
            <a href="${email}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>${email}</a>
          </div>
        `;
    });

    return `
      <section class="my-3" id="portfolio">
        <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
        <div class="flex-row justify-space-between">
        ${newEmployeesArray.join('')}
        </div>
      </section>
    `;
};



module.exports = templateData => {

    // this will create three variables based on data in templateData
    const { name, email, id, office, employees } = templateData;
    console.log('Here is your team profile destructured');
    console.log(name);
    console.log(email);
    console.log(id);
    console.log(office);
    console.log(employees);
    console.log(typeof(employees));

    const manager = new Manager(name, email, id, office);

    var ManagerHTML = `
    <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
      <h3 class="portfolio-item-title text-light">${manager.getName()}</h3>
      <h5 class="portfolio-languages">
        ${manager.getRole()}
      </h5>
      <h5 class="portfolio-languages">
        ID number: ${manager.getId()}
      </h5>
      <a href="${manager.getEmail()}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>${manager.getEmail()}</a>
      <h5 class="portfolio-languages">
        Office number: ${manager.officeNumber}
      </h5>
    </div>
  `;


    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
        </div>
      </header>
      <main class="container my-5">
        ${ManagerHTML}
        ${generateProfile(employees)}
      </main>
    </body>
    </html>
    `;
};