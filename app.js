const contactplace = document.getElementsByClassName("contactplace");
const addedcontact = document.getElementById("contactAdd");
const textplace = document.getElementsByClassName("textplace");
const messageInput = document.querySelector(".typer input");
const sendButton = document.querySelector(".send");

const sendMessage = () => {
  if (messageInput.value.trim() === "") return;

  let newMessage = document.createElement("div");
  newMessage.className = "message";
  newMessage.style = `
         background-color: #e3f2fd;
         padding: 10px 15px;
         border-radius: 15px;
         margin: 10px 0;
         max-width: 70%;
         align-self: flex-end;
         display: flex;
         flex-direction: column;
         gap: 5px;
     `;

  let topRow = document.createElement("div");
  topRow.style = `
         display: flex;
         justify-content: space-between;
         align-items: center;
     `;

  let messageText = document.createElement("div");
  messageText.textContent = messageInput.value;

  let actions = document.createElement("div");
  actions.style = `
         display: flex;
         gap: 8px;
     `;

  let editBtn = document.createElement("img");
  editBtn.src = "./assests/pen.png";
  editBtn.alt = "Edit";
  editBtn.style = "width:18px; height:18px; cursor:pointer;";

  let deleteBtn = document.createElement("img");
  deleteBtn.src = "./assests/delete.png";
  deleteBtn.alt = "Delete";
  deleteBtn.style = "width:18px; height:18px; cursor:pointer;";

  editBtn.onclick = () => {
    let newText = prompt(
      "Yangi xabar matnini kiriting:",
      messageText.textContent
    );
    if (newText !== null && newText.trim() !== "") {
      messageText.textContent = newText;
    }
  };

  deleteBtn.onclick = () => {
    newMessage.remove();
  };

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  topRow.appendChild(messageText);
  topRow.appendChild(actions);

  newMessage.appendChild(topRow);

  let time = document.createElement("span");
  time.textContent = new Date().toLocaleTimeString();
  time.style = `
         font-size: 12px;
         color: #666;
         align-self: flex-end;
     `;
  newMessage.appendChild(time);

  textplace[0].appendChild(newMessage);
  textplace[0].scrollTop = textplace[0].scrollHeight;
  messageInput.value = "";
};

const addContact = () => {
  if (addedcontact.value.trim() === "") return;

  let newContact = document.createElement("div");
  newContact.className = "contact-item";
  newContact.textContent = addedcontact.value;
  newContact.style = `
        border: solid 1px black;
        border-radius: 8px;
        font-size: 15px;
        padding: 8px;
        width: 90%;
        margin: 5px auto;
        cursor: pointer;
        transition: all 0.3s ease;
        background-color: white;
        display: block;
        word-break: break-word;
    `;
  contactplace[0].appendChild(newContact);
  addedcontact.value = "";
};
