
var global_user_catagories = '';
var catagory_type_id = document.getElementById("catagory-type");
var sub_catagory_id = document.getElementById("mulitpleSelect");
var sub_catagory ;

function selectCatagoryTypes()
{

console.log("hello thomas kitaba")
var catagory_types = new XMLHttpRequest();
catagory_types.open('GET', '/reloadecatagory' );
catagory_types.onload = function(){
  if (catagory_types.status == 200 && catagory_types.readyState == 4)
  {
    var recived_data = JSON.parse(catagory_types.responseText);
    global_user_catagories = recived_data;
    
    load_catagories(global_user_catagories);
  
  }
  

}
catagory_types.send();
}


function load_catagories(data) {
  var html = "";
  var html_sub = "";

  console.log(data);
  test_data = "";
  for (i = 0; i < data.length; i++) 
  {
  
  console.log(data[i].catagory_type_name);
  if (html != "")
    html += "<option value=" + data[i].catagory_type_id + ">" + data[i].catagory_type_name + "<option>";

  
  sub_catagory = data[i].sub_catagories;

    if (data[i].sub_catagories)
    {
    for (let j = 0; j < sub_catagory.length; j++)
      {
        console.log("----" + sub_catagory[j].catagory_name);
        if (i== 0)
        {
          if (html_sub != "")
            html_sub += "<option value=" + sub_catagory[j].catagory_id + ">" + sub_catagory[j].catagory_name + "</option>";
        }
        
      }
    }
  
  }
  catagory_type_id.insertAdjacentHTML('beforeend', html);
  sub_catagory_id.insertAdjacentHTML('beforeend', html_sub);
  
}