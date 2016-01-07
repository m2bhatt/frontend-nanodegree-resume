/* Bio Objects*/
var bio = {
	"name": "Megha Bhatt",
	"role": "Web Developer",
	"contacts": {
		"mobile": "519 616 6825",
		"email": "meghabhatt15@gmail.com",
		"github": "m2bhatt",
		"twitter": "@m2bhatt",
		"location": "Waterloo, Canada"
	},
	"biopic": "images/Megha.jpg",
	"welcomeMessage": "I am a front end web developer with experience in data analysis, technical writing,marketing, communications, and social media marketing.",
	"skills": ["HTML/CSS", "Leadership", "Quick learner", "Photoshop"]
};

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);
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
	var formattedbioTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedbioTwitter = formattedbioTwitter.replace("#", bio.contacts.twitter);
	$("#topContacts").append(formattedbioTwitter);
	$("#footerContacts").append(formattedbioTwitter);
	var formattedbioLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedbioLocation = formattedbioLocation.replace("#", bio.contacts.locationURL);
	$("#topContacts").append(formattedbioLocation);
	$("#footerContacts").append(formattedbioLocation);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

/* Work Experience */

var work = {
	"jobs": [{
		"employer": "Shopify",
		"title": "eCommerce Specialist",
		"location": "Ontario",
		"dates": "October 2015 - Present",
		"description": "I answer queries related to merchants' online businesses, inlcuding setting up stores, sales, billing, SEOs, online marketing, taxes, and domains."
	},{
		"employer": "Canadian Touring Car Championship",
		"title": "Communications and Social Media Manager",
		"location": "Toronto",
		"dates": "March 2015 - Present",
		"description": "I use social media to market CTCC's race events during the racing season. I interview drivers, collect and analyze vital information on the tracks and create a press release every race weekend."
	}]
};

work.display = function(){
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
};

/* Education */

var education = {
	"schools": [{
		"name": "University of Waterloo",
		"location": "Waterloo, ON, Canada",
		"degree": "Bachelor of Arts",
		"majors": ["Honours Rhetoric", "Professional Writing"],
		"dates": 2014,
		"url": "https://ugradcalendar.uwaterloo.ca/page/ARTS-Hon-English-Rhetoric-and-Professional-Writing"
	},{
		"name": "University of Waterloo",
		"location": "Waterloo, ON, Canada",
		"degree": "Bachelor of Arts",
		"majors": ["Honours Math", "Physics"],
		"dates": 2014,
		"url": "https://uwaterloo.ca/math/"
	}],
	"onlineCourses": [{
		"title": "Intro to HTML and CSS",
		"school": "Udacity",
		"date": 2015,
		"url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
	},{
		"title": "Javascript Basics",
		"school": "Udacity",
		"date": 2015,
		"url": "https://www.udacity.com/course/javascript-basics--ud804"
	}]
};

education.display = function() {
	for (school in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolMajor);
	}

//Online Courses

	$("#education").append(HTMLonlineClasses);
	for(course in education.onlineCourses){
		$("#education").append(HTMLschoolStart);
		var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
		var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

		$(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);
		$(".education-entry:last").append(formattedonlineDates);
		$(".education-entry:last").append(formattedonlineURL);
	}
};

/* Project */
var projects = {
	"projects":[{
		"title":"Personal Website",
		"dates":"January 2015",
		"description":"I created my own website to find jobs",
		"images":"images/Portfolio1.png"
	},{
		"title":"Animated Mug",
		"dates":"February 2013",
		"description":"I created an animated mug to learn more about animation via Blender.",
		"images":"images/Animated Mug.png"
}]
};

projects.display = function() {
	for (project in projects.projects) {
	$("#projects").append(HTMLprojectStart);
	var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);

	$(".project-entry:last").append(formattedProjectTitle);
	$(".project-entry:last").append(formattedProjectDates);
	$(".project-entry:last").append(formattedProjectDescription);
	$(".project-entry:last").append(formattedImage);
	}
};

/* Maps */
$("#mapDiv").append(googleMap);

work.display();
education.display();
projects.display();
