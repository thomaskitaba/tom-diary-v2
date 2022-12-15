

var catagory_type_id = document.getElementById ("catagory-type");
var sub_catagory_id = document.querySelector(".mulitple-select");
var temp_catagory = document.getElementById("new-catagory");

var last_index_of_sub_cat;
var sub_catagory = [];
var recived_data ;
var selected_type_index;
var suffix = "";


function get_multipleSelects_suffix(string)
{
// accept string then return integer suffix
// vscomp-dropbox-container-428
  var count = 0;
  suffix = "";
  for (let j = 0; j < string.length; j++)
  {
      if (string[j] == "-")
      {
        count += 1;
      }

      if (count == 3)
      {
        suffix += string[j];
      }
  }
  return suffix;
  console.log(suffix);
}

// todo:=========================================================================
function getCatagories()
{
  console.log("hello thomas kitaba")
  var user_catagories = new XMLHttpRequest();

  user_catagories.open('GET', 'reloadecatagory');
  user_catagories.onload = function(){
    if (user_catagories.status == 200 && user_catagories.readyState == 4)
    {
    var recived_data = JSON.parse(user_catagories.responseText);
      // console.log(recived_data);
      console.log("start rendering -----------------------------------------")
      loadCatagories(recived_data);
      
    }
  }
  user_catagories.send();
  
}  // todo: end of getCatagories() function
// todo:=========================================================================
//todo: start of loadCatagories() Function
function loadCatagories(json_catagories)
{

console.log("hello for the secondtime");
console.log(json_catagories);
last_index_of_sub_cat = json_catagories[0].sub_catagories.length - 1;

  var html_catagory_type = "";
  var html_sub_catagory = "";
  var html_options = "";

  var html_select_start = "<select id =mulitpleSelect class='mulitple-select  custom-width-400 + multiple name= native-select placeholder= Select SUB Catagories data-search=True data-silent-initial-value-set=true>";          
  var html_select_end = "</select>";

  selected_type_index = catagory_type_id.selectedIndex;
  var element_id_name = $(".vscomp-dropbox-container").attr("id");  //TODO: get class name
  
  
  var suffix = get_multipleSelects_suffix(element_id_name);
  
  console.log("+++++++++" + element_id_name + "+++++++++");
  console.log("+++++++++" + suffix + "+++++++++++");
  
    var sub_catagory = json_catagories[selected_type_index].sub_catagories;
    if (sub_catagory != null)
    {
      //if append not selected 
      // clear html_sub_catagory = "" ;
      
      for (let ii = 0; ii < sub_catagory.length; ii++)
      {
        // fill id=multipleSelectBox with catagory id and catagory name
      
        console.log("---" + sub_catagory[ii].catagory_name);
        last_index_of_sub_cat += 1;

        
        
        html_sub_catagory+=  "<option value=" + sub_catagory[ii].catagory_id + ">" + sub_catagory[ii].catagory_name + "</option>";
        // html_sub_catagory += "<div role= option  aria-selected= false id= " + "vscomp-option" + suffix + "-" + last_index_of_sub_cat + " class= vscomp-option " + "data-value= " +  sub_catagory[ii].catagory_id + " data-index= " + last_index_of_sub_cat + " data-visible-index= " + last_index_of_sub_cat + " style= height: 40px" + ";" + ">" + "<span class=" + "checkbox-icon> </span>" + "<span class= " + " vscomp-option-text data-tooltip= " + "Natrural Disasters data-tooltip-enter-delay= 200 data-tooltip-z-index=  2 data-tooltip-font-size= 14px data-tooltip-alignment= center data-tooltip-max-width= 300px data-tooltip-ellipsis-only= true data-tooltip-allow-html= true>" + sub_catagory[ii].catagory_name + " </span> </div>";
      
      
      } // todo: end of loop ii
        console.log("==========");
        console.log("selected index" + catagory_type_id.selectedIndex );
        // console.log(html_sub_catagory);
        console.log(last_index_of_sub_cat);

        // $("#multipleSelect").empty();
        // var all = html_select_start + html_options + html_select_end;
        // new_sub_catagory.insertAdjacentHTML('beforeend', all);


        
        sub_catagory_id.insertAdjacentHTML('beforeend', html_sub_catagory);
        // sub_catagory_id.innerHTML= html_sub_catagory;
        
        temp_catagory.insertAdjacentHTML('beforeend', html_sub_catagory);
    }
  
  } // todo: end of loadCatagories() function

// how many items are in sub_catagory multipleSelect
// get the id name of the firstchild of   .vscomp-options to usit after vscomp-options-xxxxxxxx-last_index_of_sub_cat

// TODO: TODO:TODO: TODO:TODO: TODO:TODO: TODO:TODO: TODO:TODO: TODO:
  // 
  // <div role="option" aria-selected="false" id="vscomp-option-4457- {{{8}}}" class="vscomp-option" data-value="{{{17}}}" data-index="{{{8}}}" data-visible-index="{{{8}}" style="height: 40px;">
  //         <span class="checkbox-icon"></span>
  //         <span class="vscomp-option-text" data-tooltip="Natrural Disasters" data-tooltip-enter-delay="200" data-tooltip-z-index="2" data-tooltip-font-size="14px" data-tooltip-alignment="center" data-tooltip-max-width="300px" data-tooltip-ellipsis-only="true" data-tooltip-allow-html="true">
  //           {{{Natrural Disasters}}}
  //         </span>
          
          
  //       </div>
  // last_index_of_sub_cat += 1;
  // html_sub_catagory += "<div role= option aria-selected=false id= vscomp-option-" + {{4457}} + "-"  + "{{{8}}}" + "class=vscomp-option" + + "data-value={{{sub_catagory_id}}}" + "data-index=" + {{{8}}} + "data-visible-index=" + {{{8}} + "style= height: 40px;>" + "<span class=checkbox-icon></span> <span class= vscomp-option-text data-tooltip= Natrural Disasters data-tooltip-enter-delay= 200 data-tooltip-z-index= 2 data-tooltip-font-size= 14px data-tooltip-alignment=center data-tooltip-max-width=300px data-tooltip-ellipsis-only=true data-tooltip-allow-html=true>" + {{{Natrural Disasters}}} + " </span> </div>"



  // html_sub_catagory += "<div role= option aria-selected=false id= vscomp-option-" + {{4457}} + "-"  + last_index_of_sub_cat + "class='vscomp-option' data-value=" + sub_catagory[ii].catagory_id + "data-index=" + last_index_of_sub_cat + "data-visible-index=" + last_index_of_sub_cat + "style= height: 40px;>" + "<span class=checkbox-icon></span> <span class= vscomp-option-text data-tooltip= Natrural Disasters data-tooltip-enter-delay= 200 data-tooltip-z-index= 2 data-tooltip-font-size= 14px data-tooltip-alignment=center data-tooltip-max-width=300px data-tooltip-ellipsis-only=true data-tooltip-allow-html=true>" + sub_catagory[ii].catagory_name + " </span> </div>";




// TODO: TODO:TODO: TODO:TODO: TODO:TODO: TODO:TODO: TODO:TODO: TODO:



// TODO: BACKUP working code that generates catagory types with their sub catagories

// function loadCatagories(json_catagories)
// {

// console.log("hello for the secondtime");
// console.log(json_catagories);


// if (json_catagories.length != null)
// {
//   var html_catagory_type = "";
//   var html_sub_catagory = "";

//   for(let i = 0; i < json_catagories.length; i++) 
//   {
//     console.log(json_catagories[i].catagory_type_name);
//     var sub_catagory = json_catagories[i].sub_catagories;
//     if (sub_catagory != null)
//     {
      
//       for (let ii = 0; ii < sub_catagory.length; ii++)
//       {
//         // fill id=multipleSelectBox with catagory id and catagory name

//         console.log("---" + sub_catagory[ii].catagory_name);
//         html_sub_catagory += 1;


//       } // todo: end of loop ii
//         console.log("==========");
//     }
//   } // todo: end of loop i
// }

//   } // todo: end of loadCatagories() function
// // TODO: end of working code backup

// function selectCatagoryTypes()
// {

// console.log("hello thomas kitaba")
// var catagory_types = new XMLHttpRequest();
// catagory_types.open('GET', '/reloadecatagory' );
// catagory_types.onload = function(){
//   if (catagory_types.status == 200 && catagory_types.readyState == 4)
//   {
//     var recived_data = JSON.parse(catagory_types.responseText);
//     global_user_catagories = recived_data;
    
//     load_catagories(global_user_catagories);
      
//   }
  

// }
// catagory_types.send();
// }


// function load_catagories(data) {
//   var html = "";
//   var html_sub = "";

//   console.log(data);
//   test_data = "";
//   for (i = 0; i < data.length; i++) 
//   {
  
//   console.log(data[i].catagory_type_name);
//   if (html != "")
//     html += "<option value=" + data[i].catagory_type_id + ">" + data[i].catagory_type_name + "<option>";

  
//   sub_catagory = data[i].sub_catagories;

//     if (data[i].sub_catagories)
//     {
//     for (let j = 0; j < sub_catagory.length; j++)
//       {
//         console.log("----" + sub_catagory[j].catagory_name);
//         if (i== 0)
//         {
//           if (html_sub != "")
//             html_sub += "<option value=" + sub_catagory[j].catagory_id + ">" + sub_catagory[j].catagory_name + "</option>";
//         }
        
//       }
//     }
  
//   }
//   catagory_type_id.insertAdjacentHTML('beforeend', html);
//   sub_catagory_id.insertAdjacentHTML('beforeend', html_sub);
  
// }