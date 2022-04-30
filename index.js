subject = Object.keys(data).sort();
for(let o = 0; o <= 15; o++){
    document.write("<tr>");
    
    document.write("<td>");
    document.write("<select name = '과목' class = name>");
    for(let i = 0; i < subject.length; i++){
        console.log("<option value = \"" + subject[i] + "\">" + subject[i] + "</option>");
        
        document.write("<option value = \"" + subject[i] + "\">" + subject[i] + "</option>");
    }
    document.write("</select>");
    document.write("</td>");
    
    document.write("<td>");
    document.write("<p class = num></p>");
    document.write("</td>");
    
    document.write("<td>");
    document.write("<p class = mid_p></p>");
    document.write("</td>");
    
    document.write("<td>");
    document.write("<input type = number class = mid_s>");
    document.write("</td>");
    
    document.write("<td>");
    document.write("<p class = fin_p></p>");
    document.write("</td>");
    
    document.write("<td>");
    document.write("<input type = number class = fin_s>");
    document.write("</td>");
    
    document.write("<td>");
    document.write("<p class = perf_p></p>");
    document.write("</td>");
    
    document.write("<td>");
    document.write("<input type = number class = perf_s>");
    document.write("</td>");
    
    document.write("<td>");
    document.write("<p class = tot_s></p>");
    document.write("</td>");
    
    document.write("<td>");
    document.write("<p class = grade></p>");
    document.write("</td>");
    document.write("</tr>");
}