var table = document.getElementById('bagua-table');
var selectedId;

table.onclick = function(event){
    var target = event.target;
    
    if(target.tagName != 'TD') return; 
    
    highlight(target);
}

function highlight(node){
    if(selectedId){
	selectedId.classList.remove('highlight');
    }
    selectedId = node;
    selectedId.classList.add('highlight');
    
}