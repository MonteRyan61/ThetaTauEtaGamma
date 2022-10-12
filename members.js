let currMember = 0;
let memberImage = [];
let memberDesc = [];
let memberMajor = [];

//Nicholas Monteleone 
memberImage[0] = "members/nickMember.png";
memberDesc[0] = "Nicholas Monteleone";
memberMajor[0] = "CHEM"
//Connor Gilpatrick 
memberImage[1] = "members/connorMember.png";
memberDesc[1] = "Connor Gilpatrick";
//Matt King
memberImage[2] = "members/mattMember.png";
memberDesc[2] = "Matt King";
//Nicholas Monahan
memberImage[3] = "members/monahanMember.png";
memberDesc[3] = "Nicholas Monahan";
//Peter Arnold
memberImage[4] = "members/peterArnold.png";
memberDesc[4] = "Peter Arnold";
//Dane Robinson
memberImage[5] = "members/daneRobinson.png";
memberDesc[5] = "Dane Robinson";
//Nic Kallemeyn
memberImage[6] = "members/nicKallemeyn.png";
memberDesc[6] = "Nic Kallemeyn";
//Jacqueline Hall
memberImage[7] = "members/jacquelineHall.png";
memberDesc[7] = "Jacqueline Hall";
//Riley Dressel
memberImage[8] = "members/rileyDressel.png";
memberDesc[8] = "Riley Dressel";
//Deryus Jijina
memberImage[8] = "members/deryusJijina.png";
memberDesc[8] = "Deryus Jijina";
//Bia Santos
memberImage[9] = "members/biaSantos.png";
memberDesc[9] = "Bia Santos";
//Elias Forey
memberImage[10] = "members/eliasForey.png";
memberDesc[10] = "Elias Forey";
//Sophie Ramsey
memberImage[11] = "members/sophieRamsey.png";
memberDesc[11] = "Sophie Ramsey";


let memberPhotoClass = document.querySelectorAll(".member-photo");
let memberDescClass = document.querySelectorAll(".member-description");
let memberMajorClass = document.querySelectorAll(".member-major");
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
    i = 0;
    for (const specificMajorDesc of memberMajorClass) {
        specificMajorDesc.innerText = memberMajor[i];
        i++;
    }
}
document.addEventListener('DOMContentLoaded', setMemberImageAndDesc());