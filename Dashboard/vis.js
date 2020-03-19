url = "http://127.0.0.1:5000/LosAngeles/Inspection"

var flag2018=false, flag2019=false;
var date18, count18, date19, count19, newdate18 = [],newdate19 = [], newcount18 = [], newcount19 = [], inactive18, active18, newinactive18 = [], newactive18 =[], inactive19, active19, newinactive19 = [], newactive19 =[];

var flagG2018=false, flagG2019=false;
var dateG18, countG18, dateG19, countG19, newdateG18 = [],newdateG19 = [], newcountG18 = [], newcountG19 = [], inactiveG18, activeG18, newinactiveG18 = [], newactiveG18 =[], inactiveG19, activeG19, newinactiveG19 = [], newactiveG19 =[], aG18, bG18, cG18, newaG18 = [],newbG18 = [], newcG18 = [], aG19, bG19, cG19, newaG19 = [],newbG19 = [], newcG19 = [];

// Program Status - Active/Inactive
function funcPS2018(){
    flag2018 = true;
    flag2019 = false;
    d3.json(url).then(function(data){
        date18 = data.map(d =>d["DATE"]);
        count18 = data.map(d => d["COUNT"]);
        inactive18 = data.map(d => d["INACTIVE"]);
        active18 = data.map(d => d["ACTIVE"]);
        for(var i=0; i<date18.length; i++){
            if(date18[i].substring(0, 3) == "18-" && flag2018){
                newdate18.push(date18[i])
                newcount18.push(count18[i])
                newinactive18.push(inactive18[i])
                newactive18.push(active18[i])
            }
        }

        var trace1 = {
            x: newdate18,
            y: newinactive18,
            type:'bar',
            name: 'InActive'
        }
        var trace2 ={
            x: newdate18,
            y: newactive18,
            type:'bar',
            name: 'Active'

        }
        var data = [trace1, trace2]
        var layout = {barmode: 'stack',
        title: 'Count of Active/Inactive Restaurants',
        yaxis: {
            title: 'Count'
        },
        xaxis: {
            title: 'Month'
        }
        };
        Plotly.newPlot('bar', data, layout);
    });
    newdate18= [], newcount18=[]
}

function funcPS2019(){
    flag2019 = true;
    flag2018 = false;
    d3.json(url).then(function(data){
        date19 = data.map(d =>d["DATE"]);
        count19 = data.map(d => d["COUNT"]);
        inactive19 = data.map(d => d["INACTIVE"]);
        active19 = data.map(d => d["ACTIVE"]);
        for(var i=0; i<date19.length; i++){
            if(date19[i].substring(0, 3) == "19-" && flag2019){
                newdate19.push(date19[i])
                newcount19.push(count19[i])
                newinactive19.push(inactive19[i])
                newactive19.push(active19[i])
            }
        }
        var trace19x = {
            x: newdate19,
            y: newinactive19,
            type:'bar',
            name: 'InActive'
        }
        var trace19y = {
            x: newdate19,
            y: newactive19,
            type:'bar',
            name: 'Active'
        }
        var layout = {barmode: 'stack',
        title: 'Count of Active/Inactive Restaurants',
        yaxis: {
            title: 'Count'
        },
        xaxis: {
            title: 'Month'
        }
        };
        var data = [trace19x, trace19y]
        Plotly.newPlot('bar', data, layout);
    });
    newdate19= [], newcount19=[]
}
  
// Grade
function funcG2018(){
    flagG2018 = true;
    flagG2019 = false;
    d3.json(url).then(function(data){
        dateG18 = data.map(d =>d["DATE"]);
        countG18 = data.map(d => d["COUNT"]);
        inactiveG18 = data.map(d => d["INACTIVE"]);
        activeG18 = data.map(d => d["ACTIVE"]);
        aG18 = data.map(d => d["A"]);
        bG18 = data.map(d => d["B"]);
        cG18 = data.map(d => d["C"]);
        for(var i=0; i<dateG18.length; i++){
            if(dateG18[i].substring(0, 3) == "18-" && flagG2018){
                newdateG18.push(dateG18[i])
                newcountG18.push(countG18[i])
                newaG18.push(aG18[i])
                newbG18.push(bG18[i])
                newcG18.push(cG18[i])
            }
        }
        var trace1 = {
            x: newdateG18,
            y: newcountG18,
            z: newaG18,
            type:'scatter3d',
            name: 'Grade A',
            mode: 'markers',
            marker: {
                size: 15,
                line: {
                color: 'rgba(217, 217, 217, 0.14)',
                width: 0.5},
                opacity: 0.8},
        }
        var trace2 ={
            x: newdateG18,
            y: newcountG18,
            z: newbG18,
            type:'scatter3d',
            name: 'Grade B',
            mode: 'markers',
            marker: {
                size: 15,
                line: {
                color: 'rgba(227, 227, 227, 0.14)',
                width: 0.5},
                opacity: 0.8},
        }
        var trace3 ={
            x: newdateG18,
            y: newcountG18,
            z: newcG18,
            type:'scatter3d',
            name: 'Grade C',
            mode: 'markers',
            marker: {
                color: 'rgb(127, 127, 127)',
                size: 15,
                symbol: 'circle',
                line: {
                color: 'rgb(204, 204, 204)',
                width: 1},
                opacity: 0.8},
        }
        var data = [trace1, trace2, trace3]
        var layout = {margin: {
            l: 0,
            r: 0,
            b: 0,
            t: 0
        }};
        Plotly.newPlot('bar', data, layout);
    });
    newdateG18= [], newcountG18=[]
}

function funcG2019(){
    flagG2018 = false;
    flagG2019 = true;
    d3.json(url).then(function(data){
        dateG19 = data.map(d =>d["DATE"]);
        countG19 = data.map(d => d["COUNT"]);
        inactiveG19 = data.map(d => d["INACTIVE"]);
        activeG19 = data.map(d => d["ACTIVE"]);
        aG19 = data.map(d => d["A"]);
        bG19 = data.map(d => d["B"]);
        cG19 = data.map(d => d["C"]);
        for(var i=0; i<dateG19.length; i++){
            if(dateG19[i].substring(0, 3) == "19-" && flagG2019){
                newdateG19.push(dateG19[i])
                newcountG19.push(countG19[i])
                newaG19.push(aG19[i])
                newbG19.push(bG19[i])
                newcG19.push(cG19[i])
            }
        }
        var trace1 = {
            x: newdateG19,
            y: newcountG19,
            z: newaG19,
            type:'scatter3d',
            name: 'Grade A',
            mode: 'markers',
            marker: {
                size: 15,
                line: {
                color: 'rgba(217, 217, 217, 0.14)',
                width: 0.5},
                opacity: 0.8},
        }
        var trace2 ={
            x: newdateG19,
            y: newcountG19,
            z: newbG19,
            type:'scatter3d',
            name: 'Grade B',
            mode: 'markers',
            marker: {
                size: 15,
                line: {
                color: 'rgba(227, 227, 227, 0.14)',
                width: 0.5},
                opacity: 0.8},
        }
        var trace3 ={
            x: newdateG19,
            y: newcountG19,
            z: newcG19,
            type:'scatter3d',
            name: 'Grade C',
            mode: 'markers',
            marker: {
                color: 'rgb(127, 127, 127)',
                size: 15,
                symbol: 'circle',
                line: {
                color: 'rgb(204, 204, 204)',
                width: 1},
                opacity: 0.8},
        }
        var data = [trace1, trace2, trace3]
        var layout = {margin: {
            l: 0,
            r: 0,
            b: 0,
            t: 0
        }};
        Plotly.newPlot('bar', data, layout);
    });
    newdateG19= [], newcountG19=[]
}