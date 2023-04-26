let a =
		{id: 0,
      	f_name: "Mason",
	  	l_name: "Burdess"};
let b =
		{
      id: 1,
		f_name: "David",
	  	l_name: "Ayala"    };
let c =	
	{
      id: 2,
		f_name: "Pat",
	  	l_name: "Alderman"    };
let d ={
      id: 3,
		f_name: "Pat",
	  	l_name: "Ayala"    };

const people = {friends:[a,b,c,d]};


document.body.innerHTML = "<h1>My names are " + people.friends["0"].f_name + people.friends["1"].f_name + people.friends["2"].f_name + people.friends["3"].f_name; 
