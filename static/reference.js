var referenced_by = document.querySelectorAll("#referenced-by-id");
// var referenced_by_checked = document.querySelector("#referenced-by-id").checked;

var referenced_id = document.querySelectorAll("#referenced-id");
var referenced_text = document.querySelectorAll("#referenced-text");
var referencer_text = document.querySelectorAll("#referencer-text");
var link_button = document.querySelectorAll("#link-button");
var save_reference = document.getElementById("save-reference");
var referencer_diary_id;
var referenced_diary_id;
var selected_index = -1;

// var checkedValue = document.querySelector('.messageCheckbox:checked').value

function showReferencedCheckbox()
{
  for (let i = 0; i < referenced_id.length; i++)
  {
    referenced_id[i].style.visibility = "visible";
    referenced_text[i].style.visibility = "visible";
    link_button[i].style.visibility = "visible";
    

  }
}

function hideReferencedCheckbox()
{
  for (let i = 0; i < referenced_id.length; i++)
  {
    referenced_id[i].style.visibility = "hidden";
    // referenced_text[i].innerHTML = "";
    link_button[i].style.visibility = "hidden";
    referenced_text[i].style.visibility = "hidden"

  }
}

function showReferencerCheckboxes()
{
  for (let i = 0; i < referenced_by.length; i++)
  {
    referenced_by[i].style.visibility = "visible";
    // referencer_text[i].innerHTML = "Add";
    referenced_by[i].checked = false;
    save_reference.style.visibility = "hidden";
  }
  hideReferencedCheckbox();
}
function showSaveReference()
{
  save_reference.inne = "hidden";
}


// TODO: main function
function diaryReference()
{
  
  for(let i = 0; i < referenced_by.length; i++)
  {
    
    if (referenced_by[i].checked)
    {
      save_reference.style.visibility = "visible";
      
      // put the value of the diary_id in hidden inputbox 
      //TODO: hide all checkboxes except the one that is selected
      for (let ii= 0; ii< referenced_by.length; ii++)
      {
          if ( ii != i){
            referenced_by[ii].style.visibility = "hidden";
            
          }
          
      }
      showReferencedCheckbox();
      
      
      
    }

  }
}