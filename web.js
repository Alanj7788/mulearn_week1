const personListElement = document.getElementById("personList");

fetch('people.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(person => {
      const { name, age } = person;
      const listItem = document.createElement("li");
      listItem.textContent = `Name: ${name}, Age: ${age}`;
      personListElement.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error("Something went wrong!");
    console.error(error);
  });
