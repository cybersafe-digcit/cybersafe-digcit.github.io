var questions = [
	//prompt = question
	{
		prompt: "\nWhat type of free software may include spyware / malware? \n(type a/b/c/d) \n \n(a) Electronic games \n \n(b) Screensavers & toolbars \n \n(c) Anti-spyware software \n \n(d) All of the above \n",
		
		answer: "d"
	},
	
	
	
	{
		prompt: "\nWhat is the optimal type and length of a computer password? \n(type a/b/c) \n \n(a) Your name and birthday \n \n(b) The word 'password' \n \n(c) 8 or more characters with a mix of letters, numbers, and symbols \n",
		
		answer: "c"
	},

	
	
	{
		prompt: "\nYou don’t know if your computer has anti-virus and anti-spyware to protect you. What should you do? (type a/b/c) \n \n(a) Do nothing. It’s probably fine. \n \n(b) Check your computer firewall and software to see if it’s working properly, then get new or updated security software from a store or a site that is trusted. \n \n(c) Get free anti-virus software from the pop-up ad that you keep seeing. \n",
		
		answer: "b"
	},
	
	
	
	{
		prompt: "\n Before entering personal information online, you should find out: (type a/b/c) \n \n(a) How the company collecting your information will protect it \n \n(b) Why the company needs this information \n \n(c) With whom this information might be shared \n \n(d) All of the above \n",
		answer: "d"
	},
	
	
	
	
	{
		prompt: "\n Someone you met online asked you for personal information, such as your full name, your birthday, where you live, where you go to school, etc. What should you do? (type a/b/c) \n \n(a) Don't give away my personal information \n \n(b) I'll tell them all of that except where I live \n \n(c) They seem nice, so it's okay to tell them \n",
		
		answer: "a"
	},
	
	
	
	
	{
		prompt: "\nYou get an email from a game company asking to sign up for free games - they ask for your account information and other personal information. What should you do? (type a/b/c) \n \n(a) Click the link to the email to check the website first before providing any information \n \n(b) First delete the email. If you think the email is real, ask your parents to call the company’s customer service and ask about it \n \n(c) Reply the email with your information like they asked \n",
		
		answer: "b"
	},
	
	
	
	
	
];





var score = 0; //how many questions correct

//loop through all the questions & ask each question individually, get response, see if it's right, then user if it's correct

//loop for as many qiuestions that are present in the array
for(var i=0; i < questions.length; i++) {
	var response = window.prompt(questions[i].prompt);
	//^^ open up a window prompt to insert text
	//the (question[i].prompt) is acessing the certain question defined in the array
	
	//check if they got the answer right
	if(response === questions[i].answer){  //basiaclly checking is the response typed in is the same as the one in the array
		score++; //if they got the question right, a point is added / incremented
		alert("\n Correct answer! \n");
	}
	
	else {
		alert("\n Wrong answer! \n");
	}
}

alert ("You got " + score + "/" + questions.length);


//educational theory pop up thing, repitition helps - it's also a popup, increase interactivity

