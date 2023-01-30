const createStructure = (classContainer, classDiv, array, htmlFunction) => {
  const container = document.getElementById(classContainer);

  const crearDiv = (res) => {
    const div = document.createElement("div");
    div.classList.add(classDiv);
    div.innerHTML = htmlFunction(res);

    container.appendChild(div);
  };

  array.forEach((element) => {
    crearDiv(element);
  });
};

export const jsonBase = {
  createStructure,
};
