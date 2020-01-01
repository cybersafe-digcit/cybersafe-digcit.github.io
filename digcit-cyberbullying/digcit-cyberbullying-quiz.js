var questions = [
	//prompt = question
	{
		prompt: "\n Someone has been spreading false rumours online about Kenny. The rumours say that Kenny is a really awful person and no one should be friends with him! This makes Kenny feel really hurt and sad. \n \nDoes this count as cyberbullying? (type a/b) \n \n(a) Yes \n(b) No \n",
		
		answer: "a"
	},
	
	{
		prompt: "\n Markus is on the basketball team. At practice, he kept missing the basket when he was shooting. When he got home, his friend texted him, 'Hey Mark, you had such nice shots today HAHAHA' Markus just laughs and replies, 'I know, right?' \n \nDoes this count as cyberbullying? (type a/b) \n \n(a) Yes \n(b) No \n",
		
		answer: "b"
	},
	
	{
		prompt: "\n Marius always posts really bad photos of Jake on his WeChat Moments without asking for Jake’s permission. This upsets Jake, but Marius thinks Jake is just joking, and keeps posting the photos. Marius thinks the photos are really funny, and wants to share them with everyone for a laugh. \n \nDoes this count as cyberbullying? (type a/b) \n \n(a) Yes \n(b) No \n",
		
		answer: "a"
	},
	
	{
		prompt: "\n Gina is in a group chat with a few other classmates. They always talk behind Hanna's back, one of their classmates. They pretend to be her friend, but on the group chat, they always say terrible things about her, they judge her and they criticise her, even though she didn’t do anything to them. \n \nDoes this count as cyberbullying? (type a/b) \n \n(a) Yes \n(b) No \n",
		
		answer: "a"
	},
	
	{
		prompt: "\n Amy's group of friends suggested a plan for the weekend - they would go to a theme park and ride all the crazy rollercoasters. But Amy's scared of heights, so she didn't want to. When Amy went home, Nala texted her, 'It will be boring if you don't go! They're just rollercoasters, don't be such a wimp!' Amy felt hurt, because it felt like Nala was being insensitive and not caring about what Amy thinks. \n \nDoes this count as cyberbullying? (type a/b) \n \n(a) Yes \n(b) No \n",
		
		answer: "b"
	},
	
	
];




var score = 0; //how many questions correct

//loop through all the questions, ask each question individually, get response, see if it's right, then tell them
//loop for as many qiuestions that are present in the array
for(var i=0; i < questions.length; i++) {
	var response = window.prompt(questions[i].prompt);
	//^^ open up a window prompt to insert text
	//the (question[i].prompt) is accessing the certain question defined in the array
	
	//check if they got the answer right
	if(response === questions[i].answer){  //basiaclly checking is the response typed in is the same as the one in the array
		score++; //if they got the question right, a point is added / incremented
		alert("\n Correct! \n");
	}
	
	else {
		alert("\n Wrong answer! \n");
	}
}

alert ("You got " + score + "/" + questions.length);


//educational theory pop up thing, repitition helps - it's also a popup, increase interactivity