var questions = [
	//prompt = question
	{
		prompt: "\n WHICH OF THESE MESESAGES ARE NOT OKAY? (type a/b/c) \n \n (a) Your new glasses look nice!! \n \n(b) Sally sucks, i hate her \n \n(c) my painting in art class was soooo bad :( \n",
		
		answer: "b"
	},
	
	{
		prompt: "\n WHICH OF THESE MESESAGES ARE NOT OKAY? (type a/b/c) \n \n (a) u should be in the ugly hall of fame HAHA \n \n(b) i wish my mom would let me have a sleepover \n \n(c) :D :D :D :D :D :D :D :D \n",
		answer: "a"
	},
	
	{
		prompt: "\n WHICH OF THESE MESESAGES ARE NOT OKAY? (type a/b/c) \n \n (a) do u wanna play minecraft \n \n(b) YOUUU LOVE TOMMY HAAHAH U AND TOMMY SITTING IN A TREE \n \n(c) the cafeteria food was grosssss \n",
		answer: "b"
	},
	
	{
		prompt: "\n WHICH OF THESE MESESAGES ARE NOT OKAY? (type a/b/c) \n \n (a) im so smart lol \n \n(b) i don't really like cats.... \n \n(c) keep rolling ur eyes, maybe you will find a brain back there HAH \n",
		answer: "c"
	},
	
	{
		prompt: "\n WHICH OF THESE MESESAGES ARE NOT OKAY? (type a/b/c) \n \n (a) my brother broke my iPad, he's mean :( \n \n(b) my dog bit me omg OW \n \n(c) ur soooo fake just stop it, no one likes u \n",
		answer: "c"
	},
	
	
];


var score = 0; //how many questions correct

//loop thorugh all the questions & ask each question individually, get response, see if it's right, then tell them
//loop for as many qiuestions that are present in the array
for(var i=0; i < questions.length; i++) {
	var response = window.prompt(questions[i].prompt);
	//^^ open up a window prompt to insert text
	//the (question[i].prompt) is acessing the certain question defined in the array
	
	//check if they got the answer right
	if(response === questions[i].answer){  //basiaclly checking is the response typed in is the same as the one in the array
		score++; //if they got the question right, a point is added / incremented
		alert("\n Correct! \n");
	}
	
	else {
		alert("\n Sorry, wrong answer! \n");
	}
}

alert ("You got " + score + "/" + questions.length);


//educational theory pop up thing, repitition helps - it's also a popup, increase interactivity