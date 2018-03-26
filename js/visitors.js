
jQuery(document).ready(function( $ ) {
var maindiv = $('#visits');


 $.getJSON( "https://myonlinerepository.000webhostapp.com/public_html/visitsinfo.php", function( data ) {   
    var tbl=$("<table/>").attr("id","mytable");
    maindiv.append(tbl);
    for(var i=0;i<data.length;i++)
    {
        var tr="<tr>";
        var td1="<td>"+obj[i]["ip"]+"</td>";
        var td2="<td>"+obj[i]["city"]+"</td>";
        var td3="<td>"+obj[i]["region"]+"</td></tr>";
        var td4="<td>"+obj[i]["country"]+"</td></tr>";
        var td5="<td>"+obj[i]["loc"]+"</td></tr>";
        var td6="<td>"+obj[i]["org"]+"</td></tr>";
        var td7="<td>"+obj[i]["campaign"]+"</td></tr>";
        var td8="<td>"+obj[i]["time"]+"</td></tr>";    

        $("#mytable").append(tr+td1+td2+td3+td4+td5+td6+td7+td8); 
    }
});

 });
