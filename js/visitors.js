
jQuery(document).ready(function( $ ) {
var maindiv = $('#visits');


 $.getJSON( "https://myonlinerepository.000webhostapp.com/public_html/visitsinfo.php", function( data ) {   
    var tbl=$("<table/>").attr("id","mytable");
    maindiv.append(tbl);
    for(var i=0;i<data.length;i++)
    {
        var tr="<tr>";
        var td1="<td>"+data[i]["ip"] || '' +"</td>";
        var td2="<td>"+data[i]["city"] || ''+"</td>";
        var td3="<td>"+data[i]["region"] || ''+"</td></tr>";
        var td4="<td>"+data[i]["country"] || ''+"</td></tr>";
        var td5="<td>"+data[i]["loc"] || ''+"</td></tr>";
        var td6="<td>"+data[i]["org"] || ''+"</td></tr>";
        var td7="<td>"+data[i]["campaign"] || ''+"</td></tr>";
        var td8="<td>"+data[i]["time"] || ''+"</td></tr>";    

        $("#mytable").append(tr+td1+td2+td3+td4+td5+td6+td7+td8); 
    }
});

 });
