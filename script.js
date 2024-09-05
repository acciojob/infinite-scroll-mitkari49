//your code here!
// first add 10 elements
// add elements +2 after each scoll reached the end
let itemCount=10;
const list=document.getElementById("infi-list");
// loading item's 
function loadElements(){
	for(let i=0;i<2;i++){
		const newItem=document.createElement("li");
		itemCount++;
		newItem.innerHTML=`item ${itemCount}`
		list.appendChild(newItem);
	}
}

function End (){
	return list.scrollTop + list.clientHeight >= list.scrollHeight;
}

list.addEventListener('scroll',()=>{
	if (End()){
		loadElements();
	}
});
