var referenced_by = document.querySelectorAll("#referenced-by-id");
// var referenced_by_checked = document.querySelector("#referenced-by-id").checked;

var referenced_id = document.querySelectorAll("#referenced-id");
var referenced_text = document.querySelectorAll("#referenced-text");
var referencer_text = document.querySelectorAll("#referencer-text");
var link_button = document.querySelectorAll("#link-button");
var save_reference = document.getElementById("save-reference");
var cancel_reference = document.getElementById("cancel-reference");
var reference_name_list = document.querySelectorAll("#reference-name-list");
var reference_form = document.getElementById("reference-form");
var referencer_diary_id;
var referenced_diary_id;
var selected_index = -1;

// var checkedValue = document.querySelector('.messageCheckbox:checked').value



function showReferencerCheckboxes() // todo: references          show
{
  for (let i = 0; i < referenced_by.length; i++)
  {
    referenced_by[i].style.visibility = "visible";
    // referencer_text[i].innerHTML = "Add";
    referenced_by[i].checked = false;
    save_reference.style.visibility = "hidden";
    
    reference_form.style.visibility = "hidden";
    cancel_reference.style.visibility = "hidden";
    referenced_by[i].disabled = false;
    referenced_id[i].style.visibility = "hidden";
    reference_name_list[i].style.visibility = "hidden";
    
  } 
  
  // hideReferencedCheckbox();  // todo: referenced hide
  
}
function showSaveReference()
{
  save_reference.style.visibility = "visible";
}

// TODO: main function
function diaryReference()
{
  
  for(let i = 0; i < referenced_by.length; i++)
  {
    
    if (referenced_by[i].checked)
    {
      save_reference.style.visibility = "visible";
      reference_form.style.visibility = "visible";
      cancel_reference.style.visibility = "visible";
      referenced_by[i].disabled = true;
      
      // put the value of the diary_id in hidden inputbox 
      //TODO: hide all checkboxes except the one that is selected
      for (let ii= 0; ii< referenced_by.length; ii++)
      {
          // referenced_id[ii].style.visibility = "visible";
          // reference_name_list[ii].style.visibility = "visible";
          if ( ii != i){
            referenced_by[ii].style.visibility = "hidden";
            referenced_id[ii].style.visibility = "visible";
            reference_name_list[ii].style.visibility = "visible";
            
          }
          // showReferencedCheckbox();
      }
      // showReferencedCheckbox();
      
    }

  }
}


// function addDiaryReference()
// {
//   console.log("Thomas Kitaba");
//   $(document).ready(function() {
//     $("#save-reference").on('click', function(event) {
//       $.ajax({
//         data : {
//             referencer_id : $("#referencer-diary-id").val(),
//             referenced_id: $("#referenced-diary-id").val(),
//             reference_name_id: 1

//                 },
//             type : 'POST',
//             url : '/adddiaryreference'
//           })
//       .done(function(data) {
//         alert("diaries succesfully linked")
//     });
//     event.preventDefault();
//     });
// });

// }