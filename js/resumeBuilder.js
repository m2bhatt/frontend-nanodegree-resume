/* JSON Objects*/
var bio = {
	"name": "Megha Bhatt",
	"role": "Web Developer",
	"contacts": {
		"mobile": "519 616 6825",
		"email": "meghabhatt15@gmail.com",
		"github": "m2bhatt",
		"twitter": "@m2bhatt",
		"location": "Waterloo, ON, Canada"
},
	"welcomeMessage": "Welcome to my online resume",
	"skills": ["HTML/CSS", "Leadership", "Quick learner", "Photoshop"],
	"biopic": "images/fry.jpg"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedwelcomeMsg);
    var formattedbioMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedbioMobile);
    $("#footerContacts").append(formattedbioMobile);
    var formattedbioEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedbioEmail = formattedbioEmail.replace("#", bio.contacts.emailURL);
    $("#topContacts").append(formattedbioEmail);
    $("#footerContacts").append(formattedbioEmail);
    var formattedbioGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedbioGithub = formattedbioGithub.replace("#", bio.contacts.github);
    $("#topContacts").append(formattedbioGithub);
    $("#footerContacts").append(formattedbioGithub);
    var formattedbioLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedbioLocation = formattedbioLocation.replace("#", bio.contacts.locationURL);
    $("#topContacts").append(formattedbioLocation);

 if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
    }

var education = {
	"schools": [
	{
		"name": "University of Waterloo",
		"location": "Waterloo, ON, Canada",
		"degree": "Bachelor of Arts",
		"majors": ["Honours Rhetoric", "Professional Writing"],
		"dates": 2014,
		"url": "https://ugradcalendar.uwaterloo.ca/page/ARTS-Hon-English-Rhetoric-and-Professional-Writing"
	},
	{
		"name": "University of Waterloo",
		"location": "Waterloo, ON, Canada",
		"degree": "Bachelor of Arts",
		"majors": ["Honours Math", "Physics"],
		"dates": 2014,
		"url": "https://uwaterloo.ca/math/"
	}
	],
	"onlineCourses": [
	{
		"title": "Intro to HTML and CSS",
		"school": "Udacity",
		"date": 2015,
		"url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
	},
		{
		"title": "Javascript Basics",
		"school": "Udacity",
		"date": 2015,
		"url": "https://www.udacity.com/course/javascript-basics--ud804"
		}],
	"display": "function"
};

var work = {
	"jobs": [{
		"employer": "Shopify",
		"title": "eCommerce Specialist",
		"location": "Remoate in Ontario",
		"dates": "October 2015 - Present",
		"description": "I answer queries related to merchants' online businesses, inlcuding setting up stores, sales, billing, SEOs, online marketing, taxes, and domains."
	},
	{
		"employer": "Canadian Touring Car Championship",
		"title": "Communications and Social Media Manager",
		"location": "Toronto, Ontario, Canada",
		"dates": "March 2015 - Present",
		"description": "I use social media to market CTCC's race events during the racing season. I interview drivers, collect and analyze vital information on the tracks and create a press release every race weekend."
	}],
};
function displayWork() {
for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
}
};
displayWork();

var projects = {
	"projects":[{
		"title":"Personal Website",
		"dates":"January 2015",
		"description":"I created my own website to find jobs",
		"images":["https://www.dropbox.com/s/2l0l4nji06iv7e2/Picture%201.png?dl=0", "https://www.dropbox.com/s/4t1q3n1dts99rcg/Screen%20Shot%202015-12-19%20at%207.37.13%20PM.png?dl=0"]
},
	{
		"title":"Animated Mug",
		"dates":"February 2013",
		"description":"I created an animated mug to learn more about animation via Blender.",
		"images":["https://www.dropbox.com/s/wulzwlyolqxa431/Animated%20Mug.png?dl=0", "http://www.blender-models.com/wp-content/uploads/2013/09/kop-billede.jpg"]
	}],
	"display": "function"
};




/* Displaying skills */
if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}

$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;
	
	logClicks(x.y);
});


