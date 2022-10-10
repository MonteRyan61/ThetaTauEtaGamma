let currMember = 0;
let memberImage = [];
let memberDesc = [];

//Nicholas Monteleone 
memberImage[0] = "members/nickMember.png"
memberDesc[0] = "Nicholas Monteleone"

//Connor Gilpatrick 
memberImage[1] = "members/connorMember.png"
memberDesc[1] = "Connor Gilpatrick"

//Matt King
memberImage[2] = "members/mattMember.png"
memberDesc[2] = "Matt King"

//Nicholas Monahan
memberImage[3] = "members/monahanMember.png"
memberDesc[3] = "Nicholas Monahan"

let memberPhotoClass = document.querySelectorAll(".member-photo");
let memberDescClass = document.querySelectorAll(".member-description");
function setMemberImageAndDesc() {
    let i = 0;
    for (const specificMemberPhoto of memberPhotoClass) {
        specificMemberPhoto.src = memberImage[i];
        console.log(i);
        i++;
    }
    i = 0;
    for (const specificMemberDesc of memberDescClass) {
        specificMemberDesc.innerText = memberDesc[i];
        i++;
    }
}
document.addEventListener('DOMContentLoaded', setMemberImageAndDesc());