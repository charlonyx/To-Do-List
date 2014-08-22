var list = [];

function entry(todo){
	if (todo.value == '') return;
	console.log(todo.value);
	var itm = document.createElement('li');
	itm.innerHTML = todo.value;
	itm.className = 'unchecked';
	list.push(itm);	
		
	var box = document.createElement('input');
	box.type = 'checkbox';
	
	itm.onclick=function(){

		if (itm.className.indexOf('unchecked') < 0){
			itm.style.textDecoration='none';
			itm.className = 'unchecked'; 
			box.checked = false;
		}
		else{
			itm.className = 'checked';
			itm.style.textDecoration='line-through';
			box.checked = true;
		}
	};
	
	document.getElementById("list").appendChild(itm);
	itm.appendChild(box);
	
	todo.value = '';
	
}

function search(){
	console.log('input detected');
	var search = document.getElementById('search').value;
	console.log(search);
	for (i=0; i<list.length; i++){
		console.log(list[i].innerHTML);
		if (list[i].innerText.indexOf(search) < 0){
			if (list[i].className.indexOf('show') >= 0){
				list[i].className = list[i].className.replace('show', 'hide');
			}
			else{
				if (list[i].className.indexOf('hide') < 0){
					list[i].className = list[i].className + ' hide';
				}
			}
		}
		else{
			if (list[i].className.indexOf('hide') >= 0){
				list[i].className = list[i].className.replace('hide', 'show');
			}
			else{
				if (list[i].className.indexOf('show') < 0){
					list[i].className = list[i].className + ' show';
				}
			}
		}
	}

}