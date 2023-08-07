function updatePreview() {
    //below, the textbox element is imported and saved as a var.
    let textElement = document.querySelector('#input-text');
    
    //any text in that text box is saved as "content" var.
    let content= textElement.value;
    console.log(content);
    
    //this next phase gets the element by ID, save it to printText var, then inserts new content for the element to display via ".textContent".
    //below shows the querySelector way instead of getElementById. note element.innerHTML would work as well as .textContent.
    //console.log(document.querySelector('#preview').textContent);
    
    let printText = document.getElementById('preview');
    console.log(printText.textContent);
    printText.textContent = content;
    }
    
     
    //this function, which runs as soon as a drop down font is selected, saves the font selection to the newFont var, which then gets inserted as the font family to the element with ID "preview".
    
    function changeFont() {
      let newFont = document.getElementById('font').value;
    console.log(newFont);
    preview.style.fontFamily = newFont;
    }
    
    
    
    
    