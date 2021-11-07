const Manager = require("../lib/Manager");
const generateProfile = employeesArray => {

    const newEmployeesArray = employeesArray.map(employeeObj => {
        var role = employeeObj.getRole();

        if (role === 'Engineer') {
            // Engineer template
            return `
            <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
              <h3 class="portfolio-item-title text-light">${employeeObj.getName()}</h3>
              <h5 class="portfolio-languages">
                ${employeeObj.getRole()}
              </h5>
              <h5 class="portfolio-languages">
                ID number: ${employeeObj.getId()}
              </h5>
              <a href="https://github.com/${employeeObj.getGithub()}" target="_blank" class="btn mt-auto"><i class="fab fa-github mr-2"></i>Github Profile</a>
              <a href="mailto:${employeeObj.getEmail()}" class="btn2 mt-auto">${employeeObj.getEmail()}</a>
            </div>
          `;
        }
        else {
            // Intern template
            return `
            <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
              <h3 class="portfolio-item-title text-light">${employeeObj.getName()}</h3>
              <h5 class="portfolio-languages">
                ${employeeObj.getRole()}
              </h5>
              <h5 class="portfolio-languages">
                ID number: ${employeeObj.getId()}
              </h5>
              <h5 class="portfolio-languages">
              School: ${employeeObj.getSchool()}
              </h5>
              <a href="mailto:${employeeObj.getEmail()}" class="btn2 mt-auto">${employeeObj.getEmail()}</a>
            </div>
          `;
        }
    });

    return `
      <section class="my-3" id="portfolio">
        <h2 class="text-dark bg-primary p-2 display-inline-block">Employees</h2>
        <div class="flex-row justify-space-between">
        ${newEmployeesArray.join('')}
        </div>
      </section>
    `;
};



module.exports = templateData => {

    // Here, the name, email, id, and officeNum are properties of the manager. The rest of
    // the employees are stored as objects in the 'employees' array.
    const { name, email, id, officeNum, employees } = templateData;
    const manager = new Manager(name, email, id, officeNum);

    // This is the HTML for manager info, which is to be appended to the main body code below.
    var ManagerHTML = `
    <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
      <h3 class="portfolio-item-title text-light">${manager.getName()}</h3>
      <h5 class="portfolio-languages">
        ${manager.getRole()}
      </h5>
      <h5 class="portfolio-languages">
        ID number: ${manager.getId()}
      </h5>
      <a href="mailto:${manager.getEmail()}" class="btn2 mt-auto"></i>${manager.getEmail()}</a>
      <h5 class="portfolio-languages">
        Office number: ${manager.getOfficeNum()}
      </h5>
    </div>
  `;

    // Main template
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