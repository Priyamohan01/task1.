var request = new XMLHttpRequest()
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json')
request.send()
request.onload=function(){
    var output = JSON.parse(request.response)
    for(i=0;i<output.length;i++){
        console.log(output[i].flag)
    
    }
}
