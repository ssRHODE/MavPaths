

let output = document.getElementById('choice1');
                function selectOption() {
                    let dropdown = document.getElementById('choice1');
                    // get the index of the selected option
                    let selectedIndex = dropdown.selectedIndex;
                    // get a selected option and text value using the text property
                    let selectedValue = dropdown.options[selectedIndex].text;
                


                 switch(selectedValue) {
                    case "Central Community College":
                        
                        const cent = ["Theatre",
                            "Criminology",
                            "CCC A.S. in (Architectural Engineering focus)",
                            "Civil engineering",
                            "Computer engineering",
                            "Construction engineer",
                            "Construction management",
                            "Electrical engineering"];

                            var select = document.getElementById("nameSelect");
                            var uno = document.getElementById("unoSelect");
                            _html1 = "";
                            _html2 = "";
                            for ( i = 0; i < cent.length; i++ ) {
                                _html1 += "<option value=" + cent[i] +">" + cent[i] + "</option>";
                            }
                            select.innerHTML = _html1;
                        break;
                    case "Iowa Western Community College":
                
                        const  IWCC= ["IWCC A.A. Business Administration"];
                            var select = document.getElementById("nameSelect"),
                            _html = "";
                            for ( i = 0; i < IWCC.length; i++ ) {
                                _html += "<option value=" + IWCC[i] +">" + IWCC[i] + "</option>";
                            }
                            select.innerHTML = _html;
                        break;
                    case "Little Priest Tribal College":
                    
                        const  LPTC= ["LPTC A.S. in Biology", "LPTC A.S. Business", "LPTC A.A.L.A. (Sociology focus)"];
                            var select = document.getElementById("nameSelect"),
                            _html = "";
                            for ( i = 0; i < LPTC.length; i++ ) {
                                _html += "<option value=" + LPTC[i] +">" + LPTC[i] + "</option>";
                            }
                            select.innerHTML = _html;
                        break;
                    case "Metropolitan Community College":
                        break;
                    case "Nebraska Indian Community College":
                        const  NICC= ["NICC A.A. General Studies", "NICC A.A. General Liberal Arts(Emergency Management, concentration in Criminology and Criminal Justice focus)", "NICC A.A. Native American Studies (Contemporary Tribal Leadership emphasis)","NICC A.A. Native American Studies (History and Traditional Culture emphasis)"];
                            var select = document.getElementById("nameSelect"),
                            _html = "";
                            for ( i = 0; i < NICC.length; i++ ) {
                                _html += "<option value=" + NICC[i] +">" + NICC[i] + "</option>";
                            }
                            select.innerHTML = _html;
                        break;
                    case "Northeast Community College":
                        const  NCC = ["Theatre nc",
                        "Criminology",
                        "Architecture engineering",
                        "Civil engineering",
                        "Computer engineering",
                        "Construction engineer",
                        "Construction management",
                        "Electrical engineering"];
                            var select = document.getElementById("nameSelect"),
                            _html = "";
                            for ( i = 0; i < NCC.length; i++ ) {
                                _html += "<option value=" + NCC[i] +">" + NCC[i] + "</option>";
                            }
                            select.innerHTML = _html;
                        break;
                    case "Southeast Community College":
         
                        const  SCC= ["Business Administration",
                        "Architecture engineering",
                        "Civil engineering",
                        "Computer engineering",
                        "Construction engineer",
                        "Construction management",
                        "Electrical engineering"];
                            var select = document.getElementById("nameSelect"),
                            _html = "";
                            for ( i = 0; i < SCC.length; i++ ) {
                                _html += "<option value=" + SCC[i] +">" + SCC[i] + "</option>";
                            }
                            select.innerHTML = _html;
                        break;
                    case "Wayne State College":
    
                        const  WSC= ["WSC Coursework (Pre-Engineering focus)"];
                            var select = document.getElementById("nameSelect"),
                            _html = "";
                            for ( i = 0; i < WSC.length; i++ ) {
                                _html += "<option value=" + WSC[i] +">" + WSC[i] + "</option>";
                            }
                            select.innerHTML = _html;
                        break;
                    case "Western Nebraska Community College":

                        const  WNCC= ["Architecture engineering",
                        "Civil engineering",
                        "Computer engineering",
                        "Construction engineer",
                        "Construction management",
                        "Electrical engineering"];
                            var select = document.getElementById("nameSelect"),
                            _html = "";
                            for ( i = 0; i < WNCC.length; i++ ) {
                                _html += "<option value=" + WNCC[i] +">" + WNCC[i] + "</option>";
                            }
                            select.innerHTML = _html;
                        break;
                    default:
                        document.getElementById("demo").innerHTML = "You selected noting";
                    } 
                }

                //if based off the option of com college as that is a smaller array would have to be if contains then we wouldnt need as many cases

let output1 = document.getElementById('nameSelect');
                function selectUNOption() {
                    let UNdropdown = document.getElementById('nameSelect');
                    // get the index of the selected option
                    let UNselectedIndex = UNdropdown.UNselectedIndex;
                    // get a selected option and text value using the text property
                    let UNselectedValue = UNdropdown.options[UNselectedIndex].text;
                    document.getElementById("un").innerHTML = "You selected ";

                }
