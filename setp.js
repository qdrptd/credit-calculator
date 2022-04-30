const sub = document.querySelectorAll('.name');
for(let i = 0; i < sub.length; i++){
    sub[i].addEventListener("change", update_p, false);
}

function gr_to_cr(gr){
    switch(gr){
        case 'A+':
        return 4.3;
        case 'A0':
        return 4.0;
        case 'A-':
        return 3.7;
        case 'B+':
        return 3.3;
        case 'B0':
        return 3.0;
        case 'B-':
        return 2.7;
        case 'C+':
        return 2.3;
        case 'C0':
        return 2.0;
        case 'C-':
        return 1.7;
        default:
        return 0;
    }
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
    update_credit();
}

function update_credit(){
    let c = 0;
    let total_time = 0;
    for(let i = 0; i < sub.length; i++){
        if(!data[sub[i].value][4]){   
            c += data[sub[i].value][0] * gr_to_cr(sub[i].parentNode.parentNode.querySelector('.grade').innerHTML);
            total_time += parseInt(data[sub[i].value][0]);
        }
    }
    console.log(c, total_time);
    grade_node = document.querySelector("#credit");
    grade_node.innerHTML = "당신의 학점은 " +String(c / total_time)+" 입니다.";
}