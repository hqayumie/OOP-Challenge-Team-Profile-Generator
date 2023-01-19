const createTeam = (team) => {
    const html = [];


 const managerCard = (manager) => {
    return `
    <div class="card employee-card">
    <div class="card-header">
      <h2 class="card-title">${manager.name}</h2>
      <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i></h3>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">
          Email: <a href="mailto:${manager.email}">${manager.email}</a>
        </li>
        <li class="list-group-item">Office number: ${manager.officeNumber}</li>
      </ul>
    </div>
  
   `;
   html.push(managerHTML);
 }
 
 const engineerCard = (engineer) => {
    return `
    <div class="card engineer-card">
  <div class="card-header">
    <h2 class="card-title">${engineer.name}</h2>
    <h3 class="card-title">
      <i class="fas fa-user-graduate mr-2"></i>
    </h3>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">ID: ${engineer.id}</li>
      <li class="list-group-item">
        Email: <a href="mailto:${engineer.email}">${itern.email }</a>
      </li>
      <li class="list-group-item">
      GitHub:
      <a
        href="https://github.com/${enginner.github}"
        target="_blank"
        rel="noopener noreferrer"
        >${engineer.github}</a
      >
    </li>
  </ul>
</div>
</div
    `;
    html.push(engineerHTML);
};


const internCard = (intern) => {
    return `
    <div class="card employee-card">
  <div class="card-header">
    <h2 class="card-title">${intern.name}</h2>
    <h3 class="card-title">
      <i class="fas fa-user-graduate mr-2"></i>
    </h3>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">ID: ${intern.id}</li>
      <li class="list-group-item">
        Email: <a href="mailto:${intern.email}">${itern.email }</a>
      </li>
      <li class="list-group-item">School:${school}</li>
    </ul>
  </div>
</div>
    `;
    html.push(internHTML);
};
    
  
//loop for all employee's on team

 for(let i=0; i < team.length; i++){
    if (team[i].getRole() ==="Manager"){
        managerCard(team[i]);
    }
    if(team[i].getRole()==="Engineer"){
        engineerCard(team[i]);
    }
    if(team[i].getRole()==="Intern"){
        internCard(team[i]);
    }
 }
return html.join('');
}

module.exports = team => {
    return`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
<div class="container-fluid">
<div class="row">
    <div class="col-12 jumbotron mb-3 team-heading bg-info text-white">
        <h1 class="text-center">My Team</h1>
    </div>
</div>
</div>
<br>
<div class="container">
<div class="row">
    <div class="team-area col-12 d-flex justify-content-center">
        {{ team }}
    </div>
</div>
</div>
</body>

</html>
    `
}