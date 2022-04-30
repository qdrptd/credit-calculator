function sc_to_gr(score){
    if(score >= 90){return 'A+';}
    if(score >= 85){return 'A0';}
    if(score >= 80){return 'A-';}
    if(score >= 75){return 'B+';}
    if(score >= 70){return 'B0';}
    if(score >= 65){return 'B-';}
    if(score >= 60){return 'C+';}
    if(score >= 55){return 'C0';}
    if(score >= 50){return 'C-';}
    else{return 'F';}
}

mid_score_collect = document.querySelectorAll('.mid_s');
fin_score_collect = document.querySelectorAll('.fin_s');
perf_score_collect = document.querySelectorAll('.perf_s');
for(let i = 0; i < mid_score_collect.length; i++){
    let node_mid = mid_score_collect[i];
    let node_fin = fin_score_collect[i];
    let node_perf = perf_score_collect[i];
    node_mid.addEventListener("input", SetVar);
    node_fin.addEventListener("input", SetVar);
    node_perf.addEventListener("input", SetVar);
}

function SetVar(e){
    parent = e.target.parentNode.parentNode;
    const mid_s = parseInt(parent.querySelector(".mid_s").value) || 0;
    const mid_p = parseInt(parent.querySelector(".mid_p").innerHTML) || 0;
    const fin_s = parseInt(parent.querySelector(".fin_s").value) || 0;
    const fin_p = parseInt(parent.querySelector(".fin_p").innerHTML) || 0;
    const perf_s = parseInt(parent.querySelector(".perf_s").value) || 0;
    const tot = parent.querySelector(".tot_s");
    const grade = parent.querySelector(".grade");
    tot.innerHTML = mid_s * mid_p / 100 + fin_s * fin_p / 100 + perf_s;
    grade.innerHTML = sc_to_gr(mid_s * mid_p / 100 + fin_s * fin_p / 100 + perf_s);
}
