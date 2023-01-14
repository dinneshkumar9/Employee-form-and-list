let employeeArray = [];
let id = 1;
      
function addEmployee() {
    const name = document.getElementById("name").value;
    const profession = document.getElementById("profession").value;
    const age = document.getElementById("age").value;
        if (name && profession && age) {
          const newEmployee = { id, name, profession, age };
          employeeArray.push(newEmployee);
          id++;
          document.getElementById("name").value = "";
          document.getElementById("profession").value = "";
          document.getElementById("age").value = "";
          document.getElementById("error").innerHTML = "";
          document.getElementById("success").innerHTML = "Success : Employee Added!";
          document.getElementById("number_employees").style.display = "none";
          renderTable();
        } else {
          document.getElementById("error").innerHTML = "Error : Please Make sure All the fields are filled before adding in an employee !";
          document.getElementById("success").innerHTML = "";
        }
      }
      
function renderTable() {
    let employeeList = "";
    employeeArray.forEach(employee => {
      employeeList += `<tr>
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.profession}</td>
            <td>${employee.age}</td>
            <td><button type="button" onclick="deleteEmployee(${employee.id})">Delete</button></td>
          </tr>`;
        });
        document.getElementById("employeeList").innerHTML = employeeList;
      }
      
function deleteEmployee(id) {
        employeeArray = employeeArray.filter(employee => employee.id !== id);
        renderTable();
      }
