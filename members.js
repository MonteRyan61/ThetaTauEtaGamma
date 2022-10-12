let currMember = 0;
let memberImage = [];
let memberDesc = [];
let memberMajor = [];


//Ryan Monteleone
memberImage[0] = "members/ryanMonteleone.png";
memberDesc[0] = "Ryan Monteleone";
memberMajor[0] = "CTD"
//Whitney Knopp
memberImage[1] = "members/whitneyKnopp.png";
memberDesc[1] = "Whitney Knopp";
memberMajor[1] = "EVEN"
//Connor Gilpatrick 
memberImage[2] = "members/connorMember.png";
memberDesc[2] = "Connor Gilpatrick";
memberMajor[2] = "EVEN"
//Matt King
memberImage[3] = "members/mattMember.png";
memberDesc[3] = "Matt King";
memberMajor[3] = "ECEN"
//Nicholas Monahan
memberImage[4] = "members/monahanMember.png";
memberDesc[4] = "Nicholas Monahan";
memberMajor[4] = "MCEN"
//Peter Arnold
memberImage[5] = "members/peterArnold.png";
memberDesc[5] = "Peter Arnold";
memberMajor[5] = "MCEN"
//Dane Robinson
memberImage[6] = "members/daneRobinson.png";
memberDesc[6] = "Dane Robinson";
memberMajor[6] = "MCEN"
//Nic Kallemeyn
memberImage[7] = "members/nicKallemeyn.png";
memberDesc[7] = "Nic Kallemeyn";
memberMajor[7] = "MCEN"
//Jacqueline Hall
memberImage[8] = "members/jacquelineHall.png";
memberDesc[8] = "Jacqueline Hall";
memberMajor[8] = "EVEN"
//Riley Dressel
memberImage[9] = "members/rileyDressel.png";
memberDesc[9] = "Riley Dressel";
memberMajor[9] = "MCEN"
//Deryus Jijina
memberImage[10] = "members/deryusJijina.png";
memberDesc[10] = "Deryus Jijina";
memberMajor[10] = "CSCI"
//Bia Santos
memberImage[11] = "members/biaSantos.png";
memberDesc[11] = "Bia Santos";
memberMajor[11] = "MCEN"
//Elias Forey
memberImage[12] = "members/eliasForey.png";
memberDesc[12] = "Elias Forey";
memberMajor[12] = "ECEE"
//Sophie Ramsey
memberImage[13] = "members/sophieRamsey.png";
memberDesc[13] = "Sophie Ramsey";
memberMajor[13] = "BMEN"
//Anvie Gowrishankar
memberImage[14] = "members/anvieGowrishankar.png";
memberDesc[14] = "Anvie Gowrishankar";
memberMajor[14] = "ASEN"


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
        specificMajorDesc.innerText = "Major: " + memberMajor[i];
        i++;
    }
}
document.addEventListener('DOMContentLoaded', setMemberImageAndDesc());