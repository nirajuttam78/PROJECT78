var images = ["FAMILY COVER PAGE.jpg","FATHER.webp","GRANDPA.jpg","MOTHER.jpg","GRANDMA.jpg","GIRL.jpg"];
var names = ["Family Book","Father", "Grand Father", "Mother", "Grand Mother", "Daughter"];
var i = 0;
function update(){

    
    var numbers_of_family_member_in_array = images.length;
    if(i >= numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_image").src= updatedImage;
    document.getElementById("family_member_image").src= updatedImage;
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_image").src= updatedImage;
    
    
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i];
    document.getElementById("family_member_name").innerHTML = updatedName;
    document.getElementById("family_member_name").innerHTML = updatedName;
    document.getElementById("family_member_name").innerHTML = updatedName;
    document.getElementById("family_member_name").innerHTML = updatedName;
    document.getElementById("family_member_name").innerHTML = updatedName;
    document.getElementById("family_member_name").innerHTML= updatedName;
    document.getElementById("family_member_name").innerHTML= updatedName;
    i++;
    }