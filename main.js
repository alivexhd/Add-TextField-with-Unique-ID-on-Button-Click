//Author: Rounak Kayathwal (http://alivexhd.com)
//GitHub: https://github.com/alivexhd

//Use this script however you want! :)

let fieldID = 1;

let addNewField = () => {
    let optionsWrapper = document.getElementById('btnContainer');

    if(fieldID>1){
        let removeCount = document.getElementById('optionsCount');
        optionsWrapper.removeChild(removeCount);
    }
    let elementName = 'option'+fieldID;

    let newField = document.createElement('input');
    newField.setAttribute('name', elementName);
    newField.setAttribute('id', elementName);
    newField.setAttribute('type', 'text');                     
    newField.setAttribute('value', elementName);
    newField.setAttribute('class', 'options');

    optionsWrapper.appendChild(newField);

    let hiddenCount = document.createElement('input');
    hiddenCount.setAttribute('id', 'optionsCount');
    hiddenCount.setAttribute('name', 'optionsCount');
    hiddenCount.setAttribute('type', 'hidden');                     
    hiddenCount.setAttribute('value', fieldID);

    optionsWrapper.appendChild(hiddenCount);
    
    fieldID++;
}

document.getElementById('addNew').addEventListener('click', addNewField);

//In the action file where form will be submitted you can use the names of the field to extract the values
//For example in PHP: $_POST['optionsCount'] will give the number of options and then iterate using a for loop optionsCount times to generate names option1, option2, option3 ... and so on then store these values in an array. $_POST['option1] ...!

//A cute little func which returns element when id is provided as argument!
//let returnElement = (id) => (document.getElementById(id));