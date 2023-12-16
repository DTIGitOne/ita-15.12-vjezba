let left = document.createElement("div");

let right = document.createElement("div");

let root = document.getElementById("root");

left.className = "left";
right.className = "right";

root.append(left);
root.append(right);

let leftTop1 = document.createElement("div");
leftTop1.className = "leftTop1Box";
left.append(leftTop1);

let sideBarButton = document.createElement("img");
sideBarButton.setAttribute('src' , '../slike/Capture.png');
sideBarButton.className = "sideBarButton";
leftTop1.append(sideBarButton);
//da li je uredi korisiti ovako img = setAttribute
let gmailLogo = document.createElement("img");
gmailLogo.setAttribute('src' , '../slike/gmailLogo.png');
gmailLogo.className = "gmailLogo";
leftTop1.append(gmailLogo);

let composeBoxFlex = document.createElement("div");
composeBoxFlex.className = "composeBoxFlex";
left.append(composeBoxFlex);

let composeBox = document.createElement("div");
composeBox.className = "composeBox";
composeBoxFlex.append(composeBox);

let ComposeBoxButton = document.createElement("img");
ComposeBoxButton.setAttribute('src' , '../slike/ComposeButton.png');
ComposeBoxButton.className = "ComposeBoxButton";
composeBox.append(ComposeBoxButton);

let composeBoxText = document.createElement("div");
composeBoxText.className = "composeBoxText";
composeBoxText.innerHTML = "Compose";
composeBox.append(composeBoxText);

let InboxBoxFlexAll = document.createElement("div");
InboxBoxFlexAll.className = "InboxBoxFlex";
left.append(InboxBoxFlexAll);

let InboxBox = document.createElement("div");
InboxBox.className = "InboxBox";
InboxBoxFlexAll.append(InboxBox);

let inboxBoxLogo = document.createElement("img");
inboxBoxLogo.setAttribute('src' , '../slike/InboxCapture1.PNG');
inboxBoxLogo.className = "InboxBoxLogo";
InboxBox.append(inboxBoxLogo);

let InboxBoxText = document.createElement("div");
InboxBoxText.className = "InboxBoxText";
InboxBoxText.innerHTML = "Inbox";
InboxBox.append(InboxBoxText);

let InboxBoxCount = document.createElement("div");
InboxBoxCount.className = "InboxBoxCount";
InboxBoxCount.innerHTML = "1,258";
InboxBox.append(InboxBoxCount);

let StarredBox = document.createElement("div");
StarredBox.className = "StarredBox";
InboxBoxFlexAll.append(StarredBox);

let StarredBoxLogo = document.createElement("img");
StarredBoxLogo.setAttribute('src' , '../slike/StarredCapture.PNG');
StarredBoxLogo.className = "StarredBoxLogo";
StarredBox.prepend(StarredBoxLogo);

let StarredBoxText = document.createElement("div");
StarredBoxText.className = "StarredBoxText";
StarredBoxText.innerHTML = "Starred";
StarredBox.append(StarredBoxText);

let SnoozedBox = document.createElement("div");
SnoozedBox.className = "SnoozedBox";
InboxBoxFlexAll.append(SnoozedBox);

let SnoozedBoxLogo = document.createElement("img");
SnoozedBoxLogo.setAttribute('src' , '../slike/SnoozedCapture.PNG');
SnoozedBoxLogo.className = "SnoozedBoxLogo";
SnoozedBox.prepend(SnoozedBoxLogo);

let SnoozedBoxText = document.createElement("div");
SnoozedBoxText.className = "SnoozedBoxText";
SnoozedBoxText.innerHTML = "Snoozed";
SnoozedBox.append(SnoozedBoxText);

let SentBox = document.createElement("div");
SentBox.className = "SentBox";
InboxBoxFlexAll.append(SentBox);

let SentBoxLogo = document.createElement("img");
SentBoxLogo.setAttribute('src' , '../slike/SentCapture.PNG');
SentBoxLogo.className = "SentBoxLogo";
SentBox.prepend(SentBoxLogo);

let SentBoxText = document.createElement("div");
SentBoxText.className = "SentBoxText";
SentBoxText.innerHTML = "Sent";
SentBox.append(SentBoxText);

let DraftsBox = document.createElement("div");
DraftsBox.className = "DraftsBox";
InboxBoxFlexAll.append(DraftsBox);

let DraftBoxLogo = document.createElement("img");
DraftBoxLogo.setAttribute('src' , '../slike/DraftsCapture.PNG');
DraftBoxLogo.className = "DraftBoxLogo";
DraftsBox.prepend(DraftBoxLogo);

let DraftBoxText = document.createElement("div");
DraftBoxText.className = "DraftBoxText";
DraftBoxText.innerHTML = "Drafts";
DraftsBox.append(DraftBoxText);

let DraftsBoxCount = document.createElement("div");
DraftsBoxCount.className = "DraftsBoxCount";
DraftsBoxCount.innerHTML = "7";
DraftsBox.append(DraftsBoxCount);

let MoreBox = document.createElement("div");
MoreBox.className = "MoreBox";
InboxBoxFlexAll.append(MoreBox);

let MoreBoxLogo = document.createElement("img");
MoreBoxLogo.setAttribute('src' , '../slike/MoreCapture.PNG');
MoreBoxLogo.className = "MoreBoxLogo";
MoreBox.prepend(MoreBoxLogo);

let MoreBoxText = document.createElement("div");
MoreBoxText.className = "MoreBoxText";
MoreBoxText.innerHTML = "More";
MoreBox.append(MoreBoxText);

let LabelsBoxFlex = document.createElement("div");
LabelsBoxFlex.className = "LabelsBoxFlex";
left.append(LabelsBoxFlex);

let LabelsLeft = document.createElement("div");
LabelsLeft.className = "LabelsLeft";
LabelsLeft.innerHTML = "Labels";
LabelsBoxFlex.append(LabelsLeft);

let LabelsRight = document.createElement("img");
LabelsRight.className = "LabelsRight";
LabelsRight.setAttribute('src' , '../slike/LabelsCapture.PNG');
LabelsBoxFlex.append(LabelsRight);

let RightTop1 = document.createElement("div");
RightTop1.className = "RightTop1";
right.append(RightTop1);

let rightBigBoxFlex = document.createElement("div");
rightBigBoxFlex.className = "rightBigBoxFlex";
right.append(rightBigBoxFlex);

let RightTop2 = document.createElement("div");
RightTop2.className = "RightTop2";
rightBigBoxFlex.append(RightTop2);

let RightTop3 = document.createElement("div");
RightTop3.className = "RightTop3";
rightBigBoxFlex.append(RightTop3);

let searchBar = document.createElement("div");
searchBar.className = "SearchBar";
RightTop1.append(searchBar);

let searchBar1 = document.createElement("img");
searchBar1.className = "SearchBar1";
searchBar1.setAttribute('src' , '../slike/SearchBar1.PNG');
searchBar.append(searchBar1);

let searchBar2 = document.createElement("div");
searchBar2.className = "SearchBar2";
searchBar2.innerHTML = "Search mail";
searchBar.append(searchBar2);

let searchBar3 = document.createElement("img");
searchBar3.className = "SearchBar3";
searchBar3.setAttribute('src' , '../slike/SearchBar2.PNG');
searchBar.append(searchBar3);

let ProfileAddons = document.createElement("div");
ProfileAddons.className = "ProfileAddons";
RightTop1.append(ProfileAddons);

let profileLogo = document.createElement("img");
profileLogo.setAttribute('src' , '../slike/logo.png');
profileLogo.className = "profileLogo";
ProfileAddons.append(profileLogo);

let addon1 = document.createElement("img");
addon1.setAttribute('src' , '../slike/addon1.png');
addon1.className = "addon1";
ProfileAddons.append(addon1);

let addon2 = document.createElement("img");
addon2.setAttribute('src' , '../slike/addon2.png');
addon2.className = "addon2";
ProfileAddons.append(addon2);

let addon3 = document.createElement("img");
addon3.setAttribute('src' , '../slike/addon3.png');
addon3.className = "addon3";
ProfileAddons.append(addon3);

let leftBar = document.createElement("div");
leftBar.className = "leftBar";
RightTop2.append(leftBar);

let rightBar = document.createElement("div");
rightBar.className = "rightBar";
RightTop2.append(rightBar);

let bar1ar = document.createElement("div");
bar1ar.className = "bar1ar";
leftBar.append(bar1ar)

let bar1 = document.createElement("img");
bar1.setAttribute('src' , '../slike/bar1.PNG');
bar1.className = "bar1";
bar1ar.append(bar1);

let arrow = document.createElement("img");
arrow.setAttribute('src' , '../slike/arrow.png');
arrow.className = "arrow";
bar1ar.append(arrow);

let bar2 = document.createElement("img");
bar2.setAttribute('src' , '../slike/bar2.PNG');
bar2.className = "bar2";
leftBar.append(bar2);

let bar3 = document.createElement("img");
bar3.setAttribute('src' , '../slike/bar3.PNG');
bar3.className = "bar3";
leftBar.append(bar3);

let pageNumber = document.createElement("div");
pageNumber.className = "pageNumber";
pageNumber.innerHTML = "51-100 " + " of" + " 1,548";
rightBar.append(pageNumber);

let previousPage = document.createElement("img");
previousPage.setAttribute('src' , '../slike/leftArrow.PNG');
previousPage.className = "previousPage";
rightBar.append(previousPage);

let NextPage = document.createElement("img");
NextPage.setAttribute('src' , '../slike/rightArrow.PNG');
NextPage.className = "NextPage";
rightBar.append(NextPage);

let PrimaryFlex = document.createElement("div");
PrimaryFlex.className = "PrimaryFlex";
RightTop3.append(PrimaryFlex);

let PromotionsFlex = document.createElement("div");
PromotionsFlex.className = "PromotionsFlex";
RightTop3.append(PromotionsFlex);

let SocialFlex = document.createElement("div");
SocialFlex.className = "SocialFlex";
RightTop3.append(SocialFlex);

let PrimaryLogo = document.createElement("img")
PrimaryLogo.setAttribute('src' , '../slike/primary.PNG');
PrimaryLogo.className = "PrimaryLogo";
PrimaryFlex.append(PrimaryLogo);

let PrimaryText = document.createElement("div");
PrimaryText.className = "PrimaryText";
PrimaryText.innerHTML = "Primary";
PrimaryFlex.append(PrimaryText);

let PromotionLogo = document.createElement("img");
PromotionLogo.setAttribute('src' , '../slike/Promotion.PNG');
PromotionLogo.className = "PromotionsLogo";
PromotionsFlex.append(PromotionLogo);

let PromotionsText = document.createElement("div");
PromotionsText.className = "PromotionsText";
PromotionsText.innerHTML = "Promotions";
PromotionsFlex.append(PromotionsText);

let SocialLogo = document.createElement("img");
SocialLogo.setAttribute('src' , '../slike/Social.PNG');
SocialLogo.className = "SocialLogo";
SocialFlex.append(SocialLogo);

let SocialText = document.createElement("div");
SocialText.className = "SocialText";
SocialText.innerHTML = "Social";
SocialFlex.append(SocialText);

let emailBox = document.createElement("div");
emailBox.className = "emailBox";
rightBigBoxFlex.append(emailBox);

for (i=0 ; i<=19 ; i++) {
   let mail = document.createElement("div");
   mail.className = "mail";
}
