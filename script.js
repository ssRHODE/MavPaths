let output = document.getElementById('choice1');
                function selectOption() {
                    let dropdown = document.getElementById('choice1');
                    // get the index of the selected option
                    let selectedIndex = dropdown.selectedIndex;
                    // get a selected option and text value using the text property
                    let selectedValue = dropdown.options[selectedIndex].text;
                


                 switch(selectedValue) {
                    case "Central Community College":
                        document.getElementById("demo").innerHTML = "You selected " + selectedValue;
                        break;
                    case "Iowa Western Community College":
                        document.getElementById("demo").innerHTML = "You selected " + selectedValue;
                        break;
                    case "Little Priest Tribal College":
                        document.getElementById("demo").innerHTML = "You selected " + selectedValue;
                        break;
                    case "Metropolitan Community College":
                        document.getElementById("demo").innerHTML = "You selected " + selectedValue;
                        break;
                    case "Nebraska Indian Community College":
                        document.getElementById("demo").innerHTML = "You selected " + selectedValue;
                        break;
                    case "Northeast Community College":
                        document.getElementById("demo").innerHTML = "You selected " + selectedValue;
                        break;
                    case "Southeast Community College":
                        document.getElementById("demo").innerHTML = "You selected " + selectedValue;
                        break;
                    case "Wayne State College":
                        document.getElementById("demo").innerHTML = "You selected " + selectedValue;
                        break;
                    case "Western Nebraska Community College":
                        document.getElementById("demo").innerHTML = "You selected " + selectedValue;
                        break;
                    default:
                        document.getElementById("demo").innerHTML = "You selected noting";
                    } 
                }

                document.getElementById('input-file').addEventListener('change', getFile)


  
function getFile(event) {
	const input = event.target
  if ('files' in input && input.files.length > 0) {

	  placeFileContent(
      document.getElementById('content-target'),
      input.files[0])
  }
}

function placeFileContent(target, file) {
	readFileContent(file).then(content => {
  	target.value = content
  }).catch(error => console.log(error))
}

function readFileContent(file) {
	const reader = new FileReader()

  return new Promise((resolve, reject) => {
    reader.onload = event => resolve(event.target.result)
    reader.onerror = error => reject(error)
    reader.readAsText(file)
  })
}
