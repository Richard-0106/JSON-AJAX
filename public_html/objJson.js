
var tarsasTomb=[];
$ (function(){
   // console.log("Helló világ"); 
    
   // var tarsasTomb=JSON.parse(tarsasJson);
    
    $.ajax({
        url:"termekek.json",
        success: function (result){
       console.log(result); 
       tarsasTomb=result;
       kiir();
    }}
            );
    $("#OK").click(ment);
    $("rendez").click(rendez);
});
function rendez(){
    tarsasTomb.sort(function(a, b){return Number (a.nev>b.nev)-0.5;});
    kiir();
}
function kiir(){
    $("article").empty();
    console.log(tarsasTomb);
    $("article").append("<table>");
    $("article table").append("<tr>");
    $("article table tr").append("<th>Termék neve: </th>");
    $("article table tr").append("<th>Ár: </th>");
    $("article table tr").append("<th>Típus: </th>");
    for (var i = 0; i < tarsasTomb.length; i++) {
        $("article table").append("<tr>");
        for (var item in tarsasTomb[i]) {
        $("article table tr").eq(i+1).append("<td>"+tarsasTomb[i][item]+"</td>");
            
        }
    }
}
function ment(){
    var ujJatek={};
    
    ujJatek.termeknev=$("#nev").val();
    ujJatek.ar=$("#ar").val();
    ujJatek.tipus="Táblás";
    
  console.log(ujJatek);
    tarsasTomb.push(ujJatek);
    kiir();
}
//objektum szerkezet létrehozása. amiben tudom tárolni az adatokat amiben az ürlapon vannak 
//var tarsasTomb=[
//    {
//            termeknev: "Monopoly",
//            ar:2500,
//            tipus:"táblajáték"   
//    }, {
//            termeknev: "Activity",
//            ar:3000,
//            tipus:"táblajáték"        
//    } ,{
//            termeknev: "Uno",
//            ar:1000,
//            tipus:"kártyajáték"     
//    }
//];

//JSON szöveges szabványos adatleíro formátum, megfeleltető a jávascrpit objektumának
//var tarsasJson = '[{"termeknev": "Monopoly","ar":2500,"tipus":"táblajáték"},{"termeknev": "Activity","ar":3000,"tipus":"táblajáték"},{"termeknev": "Uno","ar":1000,"tipus":"kártyajáték"}]';

