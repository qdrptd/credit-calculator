const sub = document.querySelectorAll('.name');
for(let i = 0; i < sub.length; i++){
    sub[i].addEventListener("change", update_p, false);
}



function update_p(e){
    const this_name = e.path[0].value;
    const parent = e.target.parentNode.parentNode;
    
    const num_node = parent.querySelector(".num");
    const midp_node = parent.querySelector(".mid_p");
    const finp_node = parent.querySelector(".fin_p");
    const perfp_node = parent.querySelector(".perf_p");
    
    num_node.innerHTML = data[this_name][0];
    midp_node.innerHTML = data[this_name][1];
    finp_node.innerHTML = data[this_name][2];
    perfp_node.innerHTML = data[this_name][3];
}