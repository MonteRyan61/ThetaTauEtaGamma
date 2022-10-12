let currMember = 0;
let memberImage = [];
let memberDesc = [];
let memberMajor = [];

//Whitney Knopp
memberImage[0] = "members/whitneyKnopp.png";
memberDesc[0] = "Whitney Knopp";
memberMajor[0] = "EVEN"
//Connor Gilpatrick 
memberImage[1] = "members/connorMember.png";
memberDesc[1] = "Connor Gilpatrick";
memberMajor[1] = "EVEN"
//Matt King
memberImage[2] = "members/mattMember.png";
memberDesc[2] = "Matt King";
memberMajor[2] = "ECEN"
//Nicholas Monahan
memberImage[3] = "members/monahanMember.png";
memberDesc[3] = "Nicholas Monahan";
memberMajor[3] = "MCEN"
//Peter Arnold
memberImage[4] = "members/peterArnold.png";
memberDesc[4] = "Peter Arnold";
memberMajor[4] = "MCEN"
//Dane Robinson
memberImage[5] = "members/daneRobinson.png";
memberDesc[5] = "Dane Robinson";
memberMajor[5] = "MCEN"
//Nic Kallemeyn
memberImage[6] = "members/nicKallemeyn.png";
memberDesc[6] = "Nic Kallemeyn";
memberMajor[6] = "MCEN"
//Jacqueline Hall
memberImage[7] = "members/jacquelineHall.png";
memberDesc[7] = "Jacqueline Hall";
memberMajor[7] = "EVEN"
//Riley Dressel
memberImage[8] = "members/rileyDressel.png";
memberDesc[8] = "Riley Dressel";
memberMajor[8] = "MCEN"
//Deryus Jijina
memberImage[8] = "members/deryusJijina.png";
memberDesc[8] = "Deryus Jijina";
memberMajor[8] = "CSCI"
//Bia Santos
memberImage[9] = "members/biaSantos.png";
memberDesc[9] = "Bia Santos";
memberMajor[9] = "MCEN"
//Elias Forey
memberImage[10] = "members/eliasForey.png";
memberDesc[10] = "Elias Forey";
memberMajor[10] = "ECEE"
//Sophie Ramsey
memberImage[11] = "members/sophieRamsey.png";
memberDesc[11] = "Sophie Ramsey";
memberMajor[11] = "BMEN"
//Anvie Gowrishankar
memberImage[11] = "members/anvieGowrishankar.png";
memberDesc[11] = "Anvie Gowrishankar";
memberMajor[11] = "ASEN"


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