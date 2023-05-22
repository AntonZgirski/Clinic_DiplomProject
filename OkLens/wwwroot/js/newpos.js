slon=0;
reala="";
realb="";
keydepression="";

var xmlHttp = createXmlHttpRequestObject();

document.onkeydown = function(e) {
	if(keydepression=="18"){
		if(e.keyCode=="90") smotrz('newchek', '1');
		else if(e.keyCode=="88") smotrz('smotrchek', '1');
	}
    keydepression=e.keyCode;
}

//var objTarget = document.getElementById('cowa');
//objTarget.style.cursor = 'cursor: url(str.cur), pointer;'


//document.style['cursor']=url(str.cur),e-resize;
function holdresponse(){
miko.innerHTML=gifa;
document.body.className= 'cross';
}

function copy_to_clipboard(a){
//копирование в буфер обмена
  var emailLink = document.getElementById(a);
  var range = document.createRange();  
  range.selectNode(emailLink);  
  window.getSelection().addRange(range);  
    
  try {  
    // Теперь, когда мы выбрали текст, выполним команду копирования
    var successful = document.execCommand('copy');  
    var msg = successful ? 'successful' : 'unsuccessful';  
  } catch(err) {  
    alert('Упс, Не Шмогла скопировать');  
  }  
    
  // Снятие выделения - ВНИМАНИЕ: вы должны использовать
  // removeRange(range) когда это возможно
  window.getSelection().removeAllRanges();  
}

function unsverresp(){
miko=document.getElementById("mic");
miko.innerHTML='';
document.body.className= 'dontcross'; 
}

function createXmlHttpRequestObject() 
{
  var xmlHttp;
  try
  {
    xmlHttp = new XMLHttpRequest();
  }
     catch (e)
  {
    var XmlHttpVersions = new Array("MSXML2.XMLHTTP.6.0",
                                    "MSXML2.XMLHTTP.5.0",
                                    "MSXML2.XMLHTTP.4.0",
                                    "MSXML2.XMLHTTP.3.0",
                                    "MSXML2.XMLHTTP",
                                    "Microsoft.XMLHTTP");

    for (var i=0; i<XmlHttpVersions.length && !xmlHttp; i++) 
    {
      try 
      { 
        xmlHttp = new ActiveXObject(XmlHttpVersions[i]);
      } 
      catch (e) {} 
    }
  }

  if (!xmlHttp)
    alert("Error creating the XMLHttpRequest object.");
  else 
    return xmlHttp;
}

function newposit(){
myDivo=document.getElementById("newpo");
myDivo.style['display']="block";
}

function newkat(){
var myDivo=document.getElementById("newkat");
var ht='<label>Введите имя новой категории</label><input id="newkatu" name="newkat" type="text" size="40" onkeyup="postroy_name(0);"><br/><br/>';
myDivo.innerHTML=ht;
huh(1); huh(2); huh(3);
document.getElementById("ddfr").style['display']="none";
document.getElementById("kategor").value="";
postroy_name(0);
}

function shalo(f,b){
	if(document.getElementById("a"+f+"d").value!="1") smotrz('osnr',encodeURIComponent(b)+'&numkat='+f);
	process("a"+f);
} 

function process(a){
var hidd=a+"d";
hidd=document.getElementById(hidd);
/*var myDivo=document.getElementById(a);*/var myDivo=document.querySelector("div.hid#"+a);
if(hidd.value==0){
myDivo.style['display']="block";
hidd.value=1;}
else {myDivo.style['display']="none";
hidd.value=0;}
}

function SavePlan(period) {
  var b=  '$pok1='+document.getElementById("pok1"+period).value+
          ';$pok2='+document.getElementById("pok2"+period).value+
          ';$pok3='+document.getElementById("pok3"+period).value+
          ';$period='+period+
          ';$dateplan='+document.getElementById("dateplan").value+';';                 
  smotrz('saveplan',b)
}
function mdata1() {
  smotrz('plan',document.getElementById("plandate").value);
}

function harp18(c,b){
document.getElementById(c).style.opacity="0.4";
realtocc=c;
smotrz("newcabzap",b);	//+"&cabinetos="+b
}


function smotrz(a, b){
if (xmlHttp && (xmlHttp.readyState==0||xmlHttp.readyState==4))
  {
    try
    {
holdresponse();
reala=a; realb=b; var pramo=0;
if(a=="logi_0" && b=="none") {document.getElementById('newfi').innerHTML="<input id='klien' onkeyup='newfiltrlogi();' placeholder='первые 3 символа'>"; return ;}
var eysebio="&kontra="+encodeURIComponent(document.getElementById("keyword").value)+"&vidkontra="+document.getElementById("poklv").value+"&numreal="+document.getElementById("munso").value;
if(a=="qivi" || a=="qivislow") ttt="nchancecat.php?b="+b;
else if (a=="planpotkli"){ttt="index.php?a="+a; location.href="index.php?a="+a; pramo=1;}
else if (a=="viemkontakt") if(b.length>2 || !isNaN(b)) {ttt="napravleno.php?a=viemkontakt&b="+encodeURIComponent(b); fpole=0;}else return;
else if (a=="savekon") {ttt="napravleno.php?a=savekon&b=1"+b; fpole=0;}
else if(a=="intobufer") ttt="napravleno.php?a="+a+"&b"+b;
else if(a=="aktiv") ttt="arzararh.php?a=aktiv&b="+b;
else if(a=="arhiv") ttt="arzararh.php?a=arhiv&b="+b;
else if(a=="marshrut") {var ozzs5=document.getElementById("marshrut_log_"+b); ttt="napravleno.php?a=marshrut&b="+ozzs5.value+"&id="+b;ozzs5.style.background="yellow";}
else if(a=="marshrut0") {var ozzs5=document.getElementById("marshrut0_log_"+b); ttt="napravleno.php?a=marshrut0&b="+ozzs5.value+"&id="+b;ozzs5.style.background="yellow";}
else if(a=="komalogtik") {var ozzs5=document.getElementById("komm_log_"+b); ttt="napravleno.php?a=komalogtik&b="+ozzs5.value+"&id="+b;ozzs5.style.background="yellow";}
//else if(a=="test") {alert(8);}
else if(a=="numdatadog") ttt="arzararh.php?a=numdatadog&id="+b+"&datadog="+document.getElementById("example245").value+"&numdog="+document.getElementById("exampk").value+"&sokrname="+document.getElementById("sokrname").value;
else if(a=="dellogik") {ttt="napravleno.php?a=dellogik&b="+b+"&text="+dasist;}
else if(a=="budembank") {ttt="bank.php?a="+b; fpole=9;}
else if(a=="dvizsklad") location.href="index.php?dvizsklad=8&ids="+realb+"&data="+document.getElementById("exampleRange").value;
else if(a=="zalvn") {ozzs=document.getElementById("zzs"+b);ttt="zal.php?a=zalvn&b="+b+"&zzs="+ozzs.value;ozid=b;}
else if(a=="zalub") {ozzs=document.getElementById("zzb"+b);var ozzpp=document.getElementById("zzpp"+b);
if(parseFloat(ozzs.value)>parseFloat(ozzpp.value)) {alert("Нельзя выдавать "+zalognoo+" большей суммой, чем он был принят."); return;}
else {ttt="zal.php?a=zalub&b="+b+"&zzs="+ozzs.value;ozid=b;}}
else if(a=="newsnab") {ttt="snabquery.php?a=new&kat="+document.getElementById("kategor").value+"&naimen="+document.getElementById("kategor").value+" "+document.getElementById("osnr1").value+" "+
document.getElementById("osnr2").value+" "+document.getElementById("osnr3").value+"&kolvoraz="+document.getElementById("kolvoraz").value+"&priceraz="+
document.getElementById("cenapr").value+"&zakup="+document.getElementById("cenazak").value+"&sklad="+document.getElementById("sklad").value;}
else if(a=="kommentedit") {ozzs=document.getElementById("comidar"+b); ttt="komentkchek.php?a=kommentedit&b="+b+"&zzs="+ozzs.value;}
else if(a=="oldsnab") {ttt="snabquery.php?a=old&b="+b+"&kolvodva="+document.getElementById("kolvodva"+b).value+"&cenakon="+
document.getElementById("cenakon"+b).value+"&srok="+document.getElementById("srok"+b).value; fasB=b;}
else if(a=="editolimita" || a=='delkli'|| a=='reanimekli'|| a=='delpos'|| a=='reanimepos'|| a=='delspikli'|| a=='addspikli'|| a=='delspipos'|| a=='addspipos') ttt="kliequery.php?a="+a+"&b="+b;
else if(a=="qnewklque"||a=="qnewpoque"||a=="qredakklque"||a=="qredakpoque"||a=="qredaksvoy") ttt="napravleno.php?a="+a+"&b="+b;
else if(a=="searchpac") {fpole=0;ttt="napravleno.php?b=8&a=searchpac&famaly="+document.getElementById("famaly").value+"&telef="+document.getElementById("telef").value;}
else{
myDiv=document.getElementById("exampleRange");
var c="";
fpole=0;
if(a=="debetcli"||a=="debetpost"||a=="otgper"||a=="oplper"||a=="oplperw"||a=="nezzdel") b=encodeURIComponent(document.getElementById("keyword").value);
else if(a=="debetagent" && b==0) b=encodeURIComponent(document.getElementById("keyword").value);
else if(a=="redakklque"||a=="redakpoque"){if(!b) b=encodeURIComponent(document.getElementById("keyword").value); location.href="index.php?a="+a+"&b="+b+eysebio; pramo=1;}
//непонятна нижняя строка. зачем?
c="&c="+encodeURIComponent(document.getElementById("keyword").value)+"&num="+document.getElementById("munso").value;
if(a=="newchek"){b=encodeURIComponent(document.getElementById("keyword").value); location.href="index.php?a="+a+"&b="+b+eysebio; pramo=1;}
else if(a=="newchekklon") {location.href="index.php?a=newchek&b="+encodeURIComponent(document.getElementById("keyword").value)+"&kloner="+b+eysebio; pramo=1;}
else if(a=="newchekinterzaya") {location.href="index.php?a=newchek&b="+encodeURIComponent(document.getElementById("keyword").value)+"&numinz="+b+eysebio; pramo=1;}
if(a=="newnak"||a=="newscf"){b=encodeURIComponent(document.getElementById("keyword").value); location.href="index.php?a="+a+"&b="+b+"&time="+myDiv.value+"&num="+document.getElementById("munso").value+eysebio; pramo=1;}
else if(a=="newnakid") {location.href="index.php?a=newnak&idnum="+b; pramo=1;}
if(b=='prih'||b=='ras') fpole=9;
if(a=="otgper"||a=="oplper"||a=="oplperw"||a=="izen"||b=="dkkl"||b=="dkpo"||a=="nezzdel"||a=="opove"||a=="otchbalc"||a=="plategki"||(a=="oststki"&&b!="all")||
(a=="poizvo" && b=="period")||(a=="poizvo" && b=="periodpr") ||(a=="agents" && b=="order") || a=='pacikperiod') slon=7;
else if(a=='podborsperiod'||a=='konverspac') slon=77;
else if(a=="price") slon=5;
if(a=="debetcli_target") ttt="napravleno.php?a=debetcli&"+b;
else if(a=="dostup") ttt="asss.php?a="+b;
else if(a=="datapr") ttt="datapr.php?a="+b;
else if(a=="datainsert") {
	if(b.substr(0,3)=="new"){
	if(document.getElementById('name').value.length<2){alert("Мало данных о пациенте для записи.");return false;}
		ttt="napravleno.php?a="+a+"&b="+b+c+"&name="+document.getElementById('name').value+
"&patronymic="+document.getElementById('patronymic').value+"&lastname="+document.getElementById('lastname').value+
"&tel="+document.getElementById('tel').value+"&market="+document.getElementById('market').value;
		if(document.getElementById('marketagent')) ttt+="&marketagent="+document.getElementById('marketagent').value;
		ttt+="&zametko="+document.getElementById('zametko').value.replace(/\n/g,'<br>')+
"&document="+document.getElementById('document').value+"&serialdocument="+document.getElementById('serialdocument').value
+"&issuedby="+document.getElementById('issuedby').value+"&sex="+document.getElementById('sex').value+
"&birthday="+document.getElementById('birthday').value+"&representative="+document.getElementById('representative').value+
"&repretel="+document.getElementById('repretel').value+"&aaa0="+document.getElementById('aaa0').value
+"&aaa1="+document.getElementById('aaa1').value+"&aaa2="+document.getElementById('aaa2').value+
"&aaa3="+document.getElementById('aaa3').value+"&aaa4="+document.getElementById('aaa4').value+"&aaa5="+document.getElementById('aaa5').value+"&aaa6="+document.getElementById('aaa6').value	
+"&www0="+document.getElementById('www0').value+"&www1="+document.getElementById('www1').value+
"&numkart="+document.getElementById('numcartnewpac').value+"&dataok="+document.getElementById('example398').value;
		
document.getElementById('shirinam2').style['display']='none';}
	else ttt="napravleno.php?a="+a+"&b="+b+c+"&time="+myDiv.value;
}
else if(a=="retypeposic") {ttt="napravleno.php?a="+a+"&b="+b+"&repac="+document.getElementById('idpacikreal').value+"&cabidnumber="+document.getElementById('cabidnumber').value;
realb=document.getElementById('cabidnumber').value;}
/*"&representative="+document.getElementById('representative').value+"&repretel="+document.getElementById('repretel').value*/
else ttt="napravleno.php?a="+a+"&b="+b+c+"&time="+myDiv.value;
//else ttt="napravleno.php?a="+a+"&test1="+escape(document.getElementById("keyword").value)+"&test2="+encodeURIComponent(document.getElementById("keyword").value)+"&b="+b+c+"&time="+myDiv.value;
}
//alert(xmlHttp.readyState+" * "+xmlHttp.status);
if(a=="datainsert" || a=="datainsertanddel") {ttt+="&smsgo="+document.getElementById('checksms').checked;}
if(pramo==0){
ttt=ttt+eysebio;
//alert(ttt);


	  xmlHttp.open("GET", ttt, true);
      if(a=="qivi" || a=="qivislow") xmlHttp.onreadystatechange = newposdrp;
      else if(a=="aktiv" || a=="arhiv") xmlHttp.onreadystatechange = arhivo;
      else if(a=="zalvn" || a=="zalub" || a=="kommentedit" || a=="sortchek" || a=="intobufer" || a=="nextskldch") xmlHttp.onreadystatechange = zalog;
      else if(a=="newsnab") xmlHttp.onreadystatechange = newsnab;
      else if(a=="oldsnab") xmlHttp.onreadystatechange = oldsnab;
      else if(a=="izmenabalcen") xmlHttp.onreadystatechange = newbalcenw;
      else if(a=="dostup") xmlHttp.onreadystatechange = newdostup;
      else if(a=="qnewklque"||a=="qnewpoque"||a=="qredakklque"||a=="qredakpoque"||a=="qredaksvoy") xmlHttp.onreadystatechange = provkanames;
      else if(a=="edron"||(a=="poizvo" && (realb=="all" || realb=="bron")) ||a=="provogotovo" ||a=="provobron"||a=="delzakvprvo") xmlHttp.onreadystatechange = edronbaton;
      else if(a=="plan") xmlHttp.onreadystatechange=planing;
      else if(a=="saveplan") xmlHttp.onreadystatechange=saveplaning;
      else
      xmlHttp.onreadystatechange = handleRequestStateChange;
      xmlHttp.send(null);
    }
}
    catch (e)
    {
      alert("Can't connect to server:\n" + e.toString());
    }
  }}

  
function huh(a){
myDiv=document.getElementById("sel"+a);
myDiv.innerHTML='<input id="osnr'+a+'" name="osnr'+a+'" type="text" size="40" onkeyup="postroy_name(0);">';
}
function saveplaning() {
  if (xmlHttp.readyState == 4) { 
    if (xmlHttp.status == 200)  {
        alert('Изменения плана успешно сохранены!');
    } else testinternet(1);
  }
}
function planing() {
  if (xmlHttp.readyState == 4) { 
    if (xmlHttp.status == 200)  {
        var html=xmlHttp.responseText;
        var texthtml = '';
        var data = html.split('+');
        var titls = ['Планирование на день', 'Планирование на недел', 'Планирование на месяц'];
        for (var i in data) {
          if (i<3) {
            var d = data[i].split('|');
          //if (i==3) {alert('!'+alert(d[0].substring(1, 1)));};
            RegEx=/\s/g;

            d[0]=d[0].replace(RegEx,"");
            texthtml +=
            "<div id='divforplan'>"+ 
            "<input type='hidden' id='periodplan' value='"+d[0]+"'>"+
            "<input type='hidden' id='dateplan' value='"+d[1]+"'>"+   
            "<h3>"+titls[i]+"</h3>"+
            "<table id='tableplan' >"+
              "<tr id='first'>"+ 
                "<td>Показатель</td>"+     
                "<td>Выполненно</td>"+
                "<td>Заппланированно</td>"+
                "<td>Процент выполнения плана</td>"+
              "</tr>"+
              "<tr>"+
                "<td>Звонки</td>"+
                "<td>"+d[2]+"</td>"+
                "<td><input type='text' id='pok1"+d[0]+"' value='"+d[3]+"'></td>"+
                "<td>"+(d[2]-d[3])+"</td>"+
              "</tr>"+
              "<tr>"+ 
                "<td>Встречи</td>"+
                "<td>"+d[4]+"</td>"+
                "<td><input type='text' id='pok2"+d[0]+"' value='"+d[5]+"'></td>"+
                "<td>"+(d[4]-d[5])+"</td>"+
              "</tr>"+
              "<tr> "+
                "<td>Договоренность на встречу</td>"+
                "<td>"+d[6]+"</td>"+
                "<td><input type='text' id='pok3"+d[0]+"' value='"+d[7]+"'></td>"+
                "<td>"+(d[6]-d[7])+"</td>"+
              "</tr>"+
            "</table>"+
            "<input id='button1' type='button' value='Сохранить' name='saveplan' onClick='SavePlan("+d[0]+");'>"+
            "</div>";
          }
          else { 
            var gfafs = data[i].split('/');
            //day
            var days = gfafs[0].split('*');
            var pok=[[0,0,0,0,0,0,0,0,0,0,0,0],
                     [0,0,0,0,0,0,0,0,0,0,0,0],
                     [0,0,0,0,0,0,0,0,0,0,0,0]] 
            for (var j in days) 
            if (days[j]!=''){
              var poks=days[j].split('|');
              if (poks[2]<9)        {pok[(poks[0]-1)][0]+=1;}
              else if (poks[2]>23)   {pok[(poks[0]-1)][11]+=1;}
              else {pok[(poks[0]-1)][(poks[2]-8)]+=1;}             
            }             
            var cat=['0','9','10','11','12','13','14','15','16','17','18','24'];
            paintgraf('fraf1',cat,pok,'За день');
           // paintgraf('fraf2');



           var days = gfafs[1].split('*');
            var pok=[[0,0,0,0,0,0,0],
                     [0,0,0,0,0,0,0],
                     [0,0,0,0,0,0,0]] 
            for (var j in days) 
            if (days[j]!=''){
              var poks=days[j].split('|');
              if (poks[2]==-1)        {pok[(poks[0]-1)][6]+=1;}
              else {pok[(poks[0]-1)][(poks[2]-1)]+=1;}             
            }             
            var cat=['пн.','вт.','ср.','чт.','пт.','сб.','вс.'];
            paintgraf('fraf2',cat,pok,'За неделю');


           // paintgraf('fraf3');
           var q1 = gfafs[2].split('!');
           var days = q1[1].split('*');
           var pok = [[],[],[]];
           var cat = new Array;
          for (var i=0; i<=(q1[0]-1); i++) {
            pok[0][i]=0;
            pok[1][i]=0;
            pok[2][i]=0;
            cat[i] = i+1;
          }

          for (var j in days) 
            if (days[j]!=''){
              var poks=days[j].split('|');
              pok[(poks[0]-1)][(poks[2]-1)]+=1;             
            }
           paintgraf('fraf3',cat,pok,'За месяц');
          }          
        }
        var mydivajax=document.getElementById("planing");
        mydivajax.innerHTML=texthtml;
    } else testinternet(1);
  }
}

function edronbaton()
{ 

  if (xmlHttp.readyState == 4) 
  { 

    if (xmlHttp.status == 200) 
    {
unsverresp(); 
      try
      {
var html=xmlHttp.responseText;
if(reala=="edron"){
if(html=="@@@@@@@@@@@") alert("На этом складе нет ни одной партии этой позиции.");
else {
  var barva=html.split("^");
  for(i=0;i<barva.length;i++){
  bar2=barva[i].split("|");
  if(i==0) {var f1='<div style="float: right; margin: 9px; color:#ffffff; cursor:pointer;" onclick="document.getElementById(\'edroid\').style[\'display\']=\'none\';" >   X   </div>'+
  "<br><h2>Партии товара "+bar2[0]+"</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ед.изм.: "+document.getElementById("edizma"+bar2[1]).value+"&nbsp;&nbsp;&nbsp;&nbsp;Кол-во: "+document.getElementById("kolvo"+bar2[1]).value+"<form id='f1'>"; var temgrpa=bar2[1];}
  else {  
  f1=f1+"<fieldset id='rekvizit'><legend>"+bar2[1]+"</legend><div class='gruzpp' onclick='goparty("+bar2[0]+", "+temgrpa+", \""+bar2[1]+"\", \""+bar2[3]+"\", \""+bar2[4]+"\");'>Количество: "+bar2[3]+"<br />Доступно: "+parseFloat(bar2[3]-bar2[5]).toFixed(3)+"<br />Оплачено: "+bar2[6]+"<br />Балансовая цена: "+bar2[2]+"<br />Прайсовая цена:"+bar2[4]+"<br /></div></fieldset>";
  }
  }
  f1=f1+'</form>';
var inhedro=document.getElementById("edroid");
inhedro.style['display']="block";
inhedro.innerHTML=f1;
}}
else if(reala=="poizvo" && (realb=="all" || realb=="bron")){
if(html=="@@@@@@@@@@@@") f1="<br /><h2>На данный момент заказов в производство нет.</h2>";
else {
  var barva=html.split("^");
  var temprach=0;
  if(realb=="all") {
	  var realdeystviy="provogotovo";
	  var realtite="Произвести продукцию";
	  f1='<div id="content-table"><h2>Заказы в производство<a href="x_proizvodstvo.php" target="xls"><i class="icon-link-1"></i> экспорт в Excel</a>';
	  }
  else {
	  var realdeystviy="provobron";
	  var realtite="Забронировать сырье";
	  f1='<div id="content-table"><h2>Бронирование сырья для будущего производства';
  }
  var tempr=0; var tempslov="";
  for(i=0;i<barva.length;i++){
  bar2=barva[i].split("|");
  if(i==0) {
  	if(bar2[0]=="2") {f1=f1+'&nbsp;&nbsp;&nbsp;<i class="icon-back-in-time"></i>&nbsp;&nbsp;<input name="exampleTR" id="exampleTR" type="text" value="Дата готовности">'+
  	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="icon-wrench"></i>&nbsp;&nbsp;<select name="rabsilas" id="rabsilas"><option value="none">&nbsp;&nbsp;&nbsp;Выбор рабочего&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>';
  	bar77=bar2[1].split("~");
  	for(jimo=0;jimo<bar77.length;jimo++){
  		if(bar77[jimo].length>2) {bar213=bar77[jimo].split("*"); f1=f1+'<option value="'+bar213[0]+'">'+bar213[1]+'</option>';}
  	}
  	f1=f1+'</select>';
  	}
  	var dataoj=bar2[0];
  	var minya="";
  	f1=f1+'</h2><br><table id="table"><thead><tr><th>z1</th><th>z2</th><th>zcom</th><th>z3</th><th>z4</th><th>z5</th><th>z6</th><th>z7</th><th>z8</th><th title="Предварительная дата готовности производства">z9</th><th>z10</th><th>z11</th><th>z12</th><th>zero</th></tr></thead><tbody>';
  }
  else {
  if(isNaN(bar2[5])) bar2[5]=0;
  temprach=(bar2[4]-bar2[5]).toFixed(3);
  if(i!=(barva.length-1)) {if(bar2[3].length<1) bar2[3]="заявка";
  if(tempslov!=bar2[7]) {tempslov=bar2[7]; tempr=1;} else tempr=tempr+1;
  if(bar2[12]=="") minya="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
  else {var zookko=bar2[12].split("~`"); var zookko2=zookko[(zookko.length-2)].split("@@@"); if(zookko2[1].length>13) minya=zookko2[1].substring(0,10)+"..."; else minya=zookko2[1];}
  f1=f1+"<tr><td>"+bar2[7]+"</td><td>"+bar2[6]+"</td><td><a href='#' id='hfefca"+bar2[0]+"' onclick='primtextalert("+bar2[0]+",\""+bar2[12]+"\");'>"+minya+"</a></td>";
  
  if(bar2[16].length<1 && bar2[18]>0) {bar2[16]="<a href='#' onclick='prtxrt("+bar2[0]+");'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>";}
  if(bar2[17].length>1) bar2[17]='&nbsp;&nbsp;&nbsp;<a title="Вывод изображений на печать" target="_blank" href="printimg.php?izo='+bar2[17]+'&all=4"><i class="icon-picture"></i></a>';
  if(bar2[15]>0) bar2[14]='<input id="protrud'+bar2[0]+'" tape="text" value="'+bar2[14]+'" onchange="smotrz(\'trudorex\',\''+bar2[0]+'&value=\'+this.value);">';
  f1=f1+"<td>"+bar2[16]+bar2[17]+"</td><td>"+bar2[14]+"</td>";
  
  f1=f1+"<td>"+temprach+"</td><td>"+bar2[4]+"</td><td>"+bar2[5]+"</td><td>"+bar2[3];
  if(bar2[11]!=0) f1=f1+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='printimg.php?izo="+bar2[11]+"' target='_blank' title='Вывод изображений на печать'><i class='icon-picture'></i></a>";
  f1=f1+"</td><td>"+bar2[1]+"</td><td>"+
 bar2[9]+"</td><td>"+bar2[10]+"</td><td>";
 if(dataoj=="2") {
 	if(bar2[9].length==10) f1=f1+"<a onclick=\"dataprogo("+bar2[0]+", this);\" style=\"cursor: pointer\" title=\"Задать предварительную дату готовности и рабочего\">"+bar2[9]+"</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
 	else f1=f1+"<a onclick=\"dataprogo("+bar2[0]+", this);\" style=\"cursor: pointer\" title=\"Задать предварительную дату готовности и рабочего\"><i class=\"icon-back-in-time\"></i> задать</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";}
  if(bar2[8]==2 || (bar2[8]==1 && realb!="all")) {f1=f1+"<a href='#' onclick=\"smotrz('"+realdeystviy+"', '"+bar2[0]+"&zekol="+bar2[7]+"');\"><img src='/buch/vlogenia/img/icons/cog";
  if(bar2[13]==4) f1=f1+"gr";
  f1=f1+".png' title='"+realtite+"'></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";}
	if(bar2[19]==1) var hgy7=" style='color:blue' "; else hgy7="";
  f1=f1+"<a "+hgy7+"href=\"x_proizvodstvonow.php?id="+bar2[0]+"\" target=\"xls\"><i class=\"icon-link-1\"></i> Заказ в Excel</a>";
  if(bar2[8]==2) f1=f1+"<a style='color:red;margin-left:12px' href='#' id='gban"+bar2[0]+"' onclick='var newsko=window.confirm(\"Вы уверены, что хотите удалить позицию из Заявки № "+
  bar2[7]+"\"); if(newsko==true) {smotrz(\"delzakvprvo\", "+bar2[0]+");}'><i class=\"icon-cancel\"></i></a></td></tr>";
  }
  }} 
  f1=f1+'</tbody></table><div id="viborgruzopol" style="display:none;"></div>';
  }
var mydivajax=document.getElementById("ajaxo");
mydivajax.innerHTML=f1;
if(dataoj=="2") $(document).ready(function(){ $('#exampleTR').attachDatepicker(); });
var height_t=height-120+"px";
tableToGrid('#table',{height:height_t,autowidth:true, 
rowNum:9999,
colNames:['№ Заказа','Продукция', 'Комментарий', 'Общий комм.',  'Труд-ть', 'Требуется', 'В заказе','Готово','№ счета','Дата заказа','Готовность','Исполнитель','Управление',' '],
colModel:[
 {name:'z1',index:'z1',sorttype:'float',width:50},
 {name:'z2',index:'z2',width:300},
 {name:'zcom',index:'zcom',width:80,sorttype:'float',editable:true},
 {name:'z3',index:'z3',width:80,sorttype:'float'},{name:'z4',index:'z4',width:50,sorttype:'float'},
 {name:'z5',index:'z5',width:80,sorttype:'float'},
 {name:'z6',index:'z6',width:80,sorttype:'float'},
 {name:'z7',index:'z7',width:80,sorttype:'float'},
 {name:'z8',index:'z8',width:80,sorttype:'float'},
 {name:'z9',index:'z9',width:100,sorttype:'date', formatter:'date',formatoptions:{srcformat:'d.m.Y'}},
 {name:'z10',index:'z10',width:100,sorttype:'date', formatter:'date',formatoptions:{srcformat:'d.m.Y'}},
 {name:'z11',index:'z11',width:200},
 {name:'z12',index:'z12',width:350},
 {name:'zero',index:'zero',width:12}
]
});

}

else if(reala=="delzakvprvo"){
  if(isNaN(html)) alert(html);
  else {
    /*for(var i=1; i<=html; i++)
    {
    document.getElementById("gban"+realb+"os"+i).style['display']="none";}*/
  document.getElementById("gban"+html).style['display']="none";
  }
  
   
}
else if(reala=="provogotovo"||reala=="provobron"){
if(html=="HHHHHHHHHHH") f1="<br /><h2>Такого товара в производстве нет.</h2>";
else {
  //alert(html);
  var barva=html.split("^");
  for(i=0;i<barva.length;i++){
  bar2=barva[i].split("|");
  
      if(i==0 && bar2[5]=="@@@@@@@@@@@@") f1="<br /><h2>На складе сырья отсутствуют материалы для производства данного вида продукции.</h2>";
      else {
  if(i==0) {
  //var datanowp=datanow();
  f1='<div id="wrapper"><div id="content"><div id="box"><h3 id="adduser">';
  if(reala=="provogotovo") f1=f1+'Создать продукт ';
  else f1=f1+'Забронировать сырье для ';
  f1=f1+bar2[2]+" длина:<a href='#' id='dsilver'";
  if(hu=="adm") f1=f1+' onclick="dmendlin(this,\''+bar2[3]+'\');"';
  f1=f1+'>'+bar2[11]+'</a> ширина:<a href="#" id="silver"';
  if(hu=="adm") f1=f1+' onclick="mendlin(this,\''+bar2[3]+'\');"';
  f1=f1+'>'+bar2[12]+'</a></h3><form name="new" id="f1" action="proizvo.php?newo='+bar2[0]+'&reala='+reala+'" method="post">'+
  '<p><label for="choice">Дата производства </label><input name="exampleT" id="exampleT" type="text" value="'+bar2[8]+'"></p>'+
  '<p><label for="choice">Исполнитель </label><select name="foirab">';
  if(bar2[9].length>3) {
  var zelo=bar2[9].split("~");
  for(izs=0;izs<zelo.length;izs++){
  if(zelo[izs].length>3) {var zoom=zelo[izs].split("*"); f1=f1+"<option value='"+zoom[0]+"'>"+zoom[1]+"&nbsp;&nbsp;&nbsp;</option>";}
  }
  }
  f1=f1+'</select></p>';
  if(bar2[10].length>0){
  	f1=f1+'<div style="float:right"><p><label for="choice">Коэфф. ширины</label><input id="ssss" type="text" autocomplete="off" value="'+bar2[10]+'" onkeyup="nulihi(this); newpodschekshi(\''+bar2[3]+'\');"></p>'+
  	'<p><label for="choice">Коэфф. длины</label><input id="dddd" type="text" autocomplete="off" value="1" onkeyup="nulihi(this); newpodschekshi(\''+bar2[3]+'\');"></p></div>';
  }
  f1=f1+'<div style="float:right; border:1px dotted; padding: 8px;"';
  if(bar2[13].length>0) {f1=f1+'style="width: 380px; height: 130px;">';
  var zookko=bar2[13].split("~`");
for(hh=0;hh<zookko.length;hh++){
  		if(zookko[hh]!=""){zookko2=zookko[hh].split("@@@");
  		f1=f1+'<font color="#000"><b>'+zookko2[0]+':</b></font><br>'+zookko2[1]+'<br><br>';
  }}}
  else f1=f1+'style="width: 385px; height: 20px;">Комментариев нет';
  
  tuzik= new Array();
  tuzikid= new Array();
  tuzikol= new Array();
  if(bar2[14]==4) var fnt=bar2[15].split("@"); 
  for(hoh=1;hoh<kolvosir;hoh++){
	  hohm=hoh-1;
if(bar2[14]==4 && fnt[hohm].length>5) {var reu=fnt[hohm].split("*"); tuzik[hoh]="bron"+hoh+"'>"+reu[1]+" Забронировал "+reu[3]+", Бал. цена: "+reu[4]+"руб."; tuzikid[hoh]=reu[0]; tuzikol[hoh]=reu[2];}
else {tuzik[hoh]="none'>"; tuzikid[hoh]=""; tuzikol[hoh]="";}
  }
  
  
  f1=f1+'</div><p><label for="choice">Произведена партия </label><input name="party" id="party" type="text" autocomplete="off" value="';
  if(bar2[5]=="none") f1=f1+bar2[7]+'">';
  else f1=f1+bar2[5]+'" disabled>';
  f1=f1+'<p><label for="choice">Произведено '+bar2[3]+'</label><input name="kolvoproiz" id="kolvoproiz" type="text" autocomplete="off" value="'+bar2[1]+'" onkeyup="nulihi(this); proizskoka(this,\''+bar2[4]+'\');"><input id="nunu" value="'+bar2[1]+'" type="hidden">'+
  '</p><p><label for="choice">Требуется сырья</label><input type="text" id="treba" disabled>'+
'</p><p><label for="choice">Выбрано сырья</label><input type="text" id="result" disabled>';

if(bar2[6]==0) bar2[6]="";
  f1=f1+'</p><br /><table><caption>Выбор сырья</caption><thead><th>Наименование и партия</th><th>Количество</th>';
  if(bar2[3]=="м2") f1=f1+'<th>Прирост цены за М2</th>';
  else f1=f1+'<th>Коэффицент роста цены</th>';
  if(bar2[6]==0) var prirost=1;
  else var prirost=bar2[6];
  f1=f1+'</thead><tbody>';
  var tempsb=bar2[4];
  naim= new Array();
  kolnaim= new Array();
  hohoid= new Array();
  edizmreal= new Array();
  balancesum= new Array();
  datastov=new Array();
  var edizm=bar2[3];
  }
  else {
  //alert(bar2[2]+"****"+bar2[0]+"*"+bar2[1]);  
    hohoid.push(bar2[0]);
    naim.push(bar2[2]); 
    //тот же расчет только обратный есть в proizvo.php ФУФ233
      /*if(edizm=="м2" && bar2[3]=="пм") {var tnjuj=(bar2[1]*rachet_shiriny(bar2[2])).toFixed(3);
      if(isNaN(tnjuj)) {tnjuj=bar2[1]; edizmreal.push(bar2[3]);}
      else edizmreal.push("м2");
      kolnaim.push(tnjuj);} //kolnaim.push(bar2[1]);
      else 
      {*/
        kolnaim.push(bar2[1]); edizmreal.push(bar2[3]);
       // balancesum.push(Math.round(parseFloat(bar2[4])*parseFloat(bar2[1])));
        balancesum.push(Math.round(parseFloat(bar2[4])));
        datastov.push(" дата: "+bar2[5]);
      //}
      //alert(bar2[3]+"*"+tnjuj);
    
  }}
  var osoka=barva[3];
  }
  if(barva.length!=1) {
    for(g=1; g<kolvosir; g++){
      f1=f1+"<tr><td><input type='hidden' name='realid"+g+"' id='realid"+g+"' value='"+tuzikid[g]+"'><select onchange='changeprvo(this, "+g+");' name='select"+g+"' id='select"+g+"' style='width: 100%;'><option value='"+tuzik[g]+"</option>";
      for(ss=0;ss<naim.length;ss++){
        if(typeof naim[ss]!="undefined") f1=f1+'<option value="'+ss+'">'+naim[ss]+', доступно: '+kolnaim[ss]+' '+edizmreal[ss]+', Бал. цена: '+balancesum[ss]+'руб. '+datastov[ss]+'</option>';
      }
	  f1=f1+"</select></td><td><input type='text' name='hochkol"+g+"' id='hochkol"+g+"' onkeyup='vvodkolva();' autocomplete='off' value='"+tuzikol[g]+"'";
      if(osoka<2) f1=f1+" disabled";
      f1=f1+"></td><td><input type='text' name='prirost"+g+"' id='prirost"+g+"' autocomplete='off' onkeyup='cifra(this);' value='"+prirost+"'";
      if(osoka<2) f1=f1+" disabled";
      f1=f1+"></td></tr>";
    }}
    f1=f1+'</tbody></table><p><br></p><a href="#" onclick="smotrz(\'';
    if(reala=="provogotovo") f1=f1+'provogotovo';
    else f1=f1+'provobron';
    f1=f1+'\',\''+realb+'&allsir=ok\');"><small>Полный список сырья</small></a><div align="center">';
    if(barva.length!=1) {f1=f1+'<input id="button1" value="';
    if(reala=="provogotovo") f1=f1+'Создать продукцию';
    else f1=f1+'Забронировать сырье';
    f1=f1+'" type="button" onclick="proverkproizvodstvo();">';}
    f1=f1+'</div></form></div></div></div>';
    
  }
var mydivajax=document.getElementById("ajaxo");
mydivajax.innerHTML=f1;
proizskoka(document.getElementById("kolvoproiz"),tempsb);
$(document).ready(function(){ $('#exampleT').attachDatepicker(); });
if(tuzik[1]!="") vvodkolva();
}
   }
      catch(e)
      {
        displayError(e);
      }
    } 
     else testinternet(1);
  }

} 

function provkanames()
{ 

  if (xmlHttp.readyState == 4) 
  {

    if (xmlHttp.status == 200) 
    {
unsverresp();
      try
      {
var html=xmlHttp.responseText;
if(realb.search("okrname")==1)  {
    if(html==2 && document.getElementById("realsok").value!=document.getElementById("sokrname").value)
    document.getElementById("nima").innerHTML="<font color='red'>Такое имя уже используется</font>";
    else document.getElementById("nima").innerHTML="";
  }
else if(realb.search("nn")==1)  {
    if(html==2 && document.getElementById("innreal").value!=document.getElementById("inn").value)
    document.getElementById("inn1").innerHTML="<font color='red'>Этот ИНН уже используется</font>"; 
    else if(document.getElementById("inn1").innerHTML=="<font color='red'>Этот ИНН уже используется</font>")document.getElementById("inn1").innerHTML="";
    }
else if(realb.search("elf")==1)  {
    if(html==2) document.getElementById("telf1").innerHTML="<a href='' onclick='this.href=\"index.php?a=redakklque&inn=\"+document.getElementById(\"telf\").value;' target='_blank'><font color='red'>Этот Телефон уже используется</font></a>"; 
    else document.getElementById("telf1").innerHTML="";
    }
else {alert (realb);}
    }
      catch(e)
      {
        displayError(e);
      }
    } else testinternet(1);
  }

} 

function oldsnab()
{ 

  if (xmlHttp.readyState == 4) 
  {

    if (xmlHttp.status == 200) 
    {
unsverresp(); 
      try
      {
var html=xmlHttp.responseText;
var sim=document.getElementById("newosn");
var simv = sim.innerHTML.indexOf('<!--as'+fasB+'-->');
var simv2 = sim.innerHTML.indexOf('</tr>',simv);
var a1=sim.innerHTML.substring(simv,simv2);
var a3=sim.innerHTML.replace(a1, html);
sim.innerHTML=a3;
      }
      catch(e)
      {
        displayError(e);
      }
    } 
    else testinternet(1);
  }
}
 
function newsnab()
{ 

  if (xmlHttp.readyState == 4) 
  {

    if (xmlHttp.status == 200) 
    {
unsverresp(); 
      try
      {
var html=xmlHttp.responseText;
var sim=document.getElementById("newosn");
var a1="<tr><td>"+html+"</td></tr><!--u-->";
var a2=sim.innerHTML;
var a3=a2.replace("<!--u-->", a1);
sim.innerHTML=a3;
      }
      catch(e)
      {
        displayError(e);
      }
    } else testinternet(1);
  }

} 

function zalog()
{ 

  if (xmlHttp.readyState == 4) 
  {

    if (xmlHttp.status == 200) 
    {
unsverresp(); 
      try
      {
var html=xmlHttp.responseText;
if(reala=="kommentedit"){
  if(html=="ok") alert("Комментарий сохранен");
  else alert("Ошибка. Комментарий сохранить не удалось.\n"+html);
}

else if(reala=="sortchek"){
document.getElementById("busort"+html).style['display']="none";
}
else if(reala=="intobufer"){
var barvat=html.split("|");
 if(isNaN(barvat[1])) {alert(html);}
  else if(barvat[0]=="0") document.getElementById("ahref"+barvat[1]).style['color']="green";
  else if(barvat[0]=="1") document.getElementById("ahref"+barvat[1]).style['color']="yellow";
}
else if(reala=="nextskldch"){
  if(isNaN(html)) {alert("*"+html);}
  else {document.getElementById("sledusk"+html).style['color']="green";
  document.getElementById("fdr"+html).innerHTML=document.getElementById("gfvbh").value;}
}
else{
var sim=document.getElementById("gtt"+ozid);
if(html!="ow" && html!="dont" && html!="gopa") {sim.innerHTML=sim.innerHTML+"<font color=\"red\"> + внесен "+zalognoo+" "+ozzs.value+"</font>";
like=window.confirm(zalognoo+" внесен. Вывести квитанцию сейчас (Excel)?");
if(like==true) window.open("x_kvitkprih.php?id="+html);}
else if(html=="ow") {sim.innerHTML=sim.innerHTML+"<font color=\"red\"> - отдан "+zalognoo+" "+ozzs.value+"</font>";}
else alert ("Ошибка. попробуйте еще раз.");
ozzs.value="";
}
      }
      catch(e)
      {
        displayError(e);
      }
    } else testinternet(1);
  }

} 

function arhivo()
{ 

  if (xmlHttp.readyState == 4) 
  {

    if (xmlHttp.status == 200) 
    {
unsverresp(); 
      try
      {
var html=xmlHttp.responseText;
if(html.substring(0,1)=="G"){
  html=html.replace("G", "Для активации необходимо увеличить количество следующих позиций:\n\n");
  alert(html);
}
else if(html.substring(0,1)=="F"){
html=html.replace("F", "");
var temp=document.getElementById("b"+html);
var ttm=temp.innerHTML.replace("Активировать", "В Архив");
ttm=ttm.replace("aktiv", "arhiv");
temp.innerHTML=ttm;
var temp=document.getElementById("gtt"+html);
html=temp.innerHTML.replace("#666", "#000");
temp.innerHTML=html;
}
else if(html.substring(0,1)=="Q"){
html=html.replace("Q", "");
var temp=document.getElementById("b"+html);
var ttm=temp.innerHTML.replace("В Архив", "Активировать");
ttm=ttm.replace("arhiv", "aktiv");
temp.innerHTML=ttm;
var temp=document.getElementById("gtt"+html);
html=temp.innerHTML.replace("Счет №", "<font color='#666'>Счет №");
html=html.replace("</a>", "</font></a>");
temp.innerHTML=html;
}
else alert(html);
      }
      catch(e)
      {
        displayError(e);
      }
    } else testinternet(1);
  }

} 


function newposdrp()
{ 

  if (xmlHttp.readyState == 4) 
  {

    if (xmlHttp.status == 200) 
    {
unsverresp(); 
      try
      {
var html=xmlHttp.responseText;
barva=html.split("|");
for(i=0;i<3;i++){
p=i+1;
myDiv=document.getElementById("sel"+p);
listar=barva[i].split("@");
if(reala=="qivislow") f1='<select id="osnr'+p+'" name="osnr'+p+'">';
else f1='<select style="width: 300px; margin-left: 0px;" id="osnr'+p+'" name="osnr'+p+'" onchange="postroy_name(this);">';
for(j=0;j<listar.length;j++){
  f1=f1+'<option value="'+listar[j]+'">'+listar[j]+'  </option>';
}
f1=f1+'<option value="end'+p+'">другой  </option></select>';
myDiv.innerHTML=f1;
if(reala!="qivislow") postroy_name(0);
}

//alert("html----------^"+html+"html----------^")
      }
      catch(e)
      {
        displayError(e);
      }
    } else testinternet(1);
  }

}  
  
  
function  nameind(f,kk) {
  if (xmlHttp)
  {
    try
    {
      if(f=="viol" && kk=="database") {
 var dos=document.getElementById("idvn");
 idren=dos.value;
 strok=document.getElementById("strok");
 var too="vivodname.php?s="+idren+"&strok="+strok.value;  
  } 
  else if(f=="uslugi"){
  	var too="vivodname.php?a="+kk.value+"&strok="+strok.value;
  }
    else{
strok=document.getElementById("strok");
var nskl=document.getElementById("nosklad");
var dos=document.getElementById("osnr"+f);
var ddo=document.getElementById("dopr"+f);
var dst=document.getElementById("stal"+f);
katg=kk;
if(kk=='Прочее') {kk=""; newpos=kk+dos.value+" "+ddo.value+" "+dst.value;}
else {newpos=kk+" "+dos.value+" "+ddo.value+" "+dst.value; kk=kk+"~`";}
newposdich=kk+dos.value+"~`"+ddo.value+"~`"+dst.value;
var too="vivodname.php?a="+newposdich+"&strok="+strok.value+"&sklade="+nskl.value;}
      xmlHttp.open("GET", too, true);
      xmlHttp.onreadystatechange = gopa;
      xmlHttp.send(null);
    }

    catch (e)
    {
      alert("Can't connect to server:\n" + e.toString());
    }
  } 
}
 
function newgopa(kk,ihh){
	if (document.getElementById("osnr"+ihh)) var q1=document.getElementById("osnr"+ihh).value; else var q1="";
	if (document.getElementById("dopr"+ihh)) var q2=document.getElementById("dopr"+ihh).value; else var q2="";
	if (document.getElementById("stal"+ihh)) var q3=document.getElementById("stal"+ihh).value; else var q3="";
	
	window.open("index.php?a=newpos&script="+kk+"~`"+q1+"~`"+q2+"~`"+q3+"&katg="+kk, "newposition", "width=790, height=600, toolbar=no, status=no");
	}
function gopa()
{ 

  if (xmlHttp.readyState == 4) 
  {

    if (xmlHttp.status == 200) 
    {
unsverresp();   
      try
      {
var html=xmlHttp.responseText;
//alert(html);
if(html=="GGGGGG"){
var newsko=window.confirm('Такой позиции нет! Создать позицию '+newpos+'?');
if(newsko==true) window.open("index.php?a=newpos&script="+newposdich+"&katg="+katg, "newposition", "width=290, height=500, toolbar=no, status=no");
}
else if(html=="ffffff"){
var newsko=window.confirm('Такой позиции нет! Создать позицию c ID '+idren+'?');
if(newsko==true) window.open("index.php?a=newpos&id=7&script="+idren, "newposition", "width=290, height=500, toolbar=no, status=no");
}
else if(html=="ssssss") alert("Такой позиции нет!");
else{
myDiv=document.getElementById("ving");
if(strok.value!="0"){
  ara= new Array(parseFloat(strok.value));
  dih= new Array(parseFloat(strok.value));
  if(cookk=="sun") afr= new Array(parseFloat(strok.value));
  for(i=1; i<=parseFloat(strok.value); i++){
  var ddo=document.getElementById("strok"+i);
  var fof=document.getElementById("metr"+i);
  ara[i]=ddo.value;
  dih[i]=fof.value;
  if(cookk=="sun") {
  		var dui=document.getElementById("dlina"+i);
  		afr[i]=dui.value;}
  }
}
strok.value=parseFloat(strok.value)+1;
myDiv.innerHTML=myDiv.innerHTML+html;
if(strok.value>1){
  for(i=1; i<strok.value; i++){
  var ddo=document.getElementById("strok"+i);
  var fof=document.getElementById("metr"+i);
  ddo.value=ara[i];
  fof.value=dih[i];
  if(cookk=="sun") {
  	var fas=document.getElementById("dlina"+i);
  	fas.value=afr[i];
  }
  }
}}
      }
      catch(e)
      {
        displayError(e);
      }
    } else testinternet(1);
  }

}

function nameprice(f,kk) {
  if (xmlHttp)
  {
    try
    {
  if(f=="viol" && kk=="database") {
 var dos=document.getElementById("idvn");
 idren=dos.value;
 strok=document.getElementById("strok");
 var too="vivodchek.php?s="+idren+"&strok="+strok.value;  
  } 
  else if(f=="bufer_into_chek" || f=="bufer_outto_chek"){
  	reala="bufer_into_chek";realb=kk;
  	var too="vivodchek.php?bufer="+f+"&strok="+document.getElementById("strok").value;
  	if(f=="bufer_outto_chek") document.getElementById("vidbufer").style['display']="none";
  }
  else if(f=="gruzopol"){
  var too="gruzop.php?gruz="+document.getElementById("kligr").value;  
  }
	else if(f=="recdoctor"){
		var too="vivodchek.php?bufer="+f+"&strok="+document.getElementById("strok").value+"&idpac="+kk;
		reala=f;
	}
 /* */else{
strok=document.getElementById("strok");
var dos=document.getElementById("osnr"+f);
var ddo=document.getElementById("dopr"+f);
var dst=document.getElementById("stal"+f);
katg=kk;
if(kk=='Прочее' || kk=='Услуги') {kk=""; newpos=kk+dos.value+" "+ddo.value+" "+dst.value;}
else {newpos=kk+" "+dos.value+" "+ddo.value+" "+dst.value; kk=kk+"~`";}
newposdich=kk+dos.value+"~`"+ddo.value+"~`"+dst.value;
var too="vivodchek.php?a="+newposdich+"&strok="+strok.value+"&bsd="+dos.value+"~`"+ddo.value+"~`"+dst.value+"&kat="+katg;}/* */
      xmlHttp.open("GET", too, true);
      if(f=="gruzopol") xmlHttp.onreadystatechange = gruzopoluch;
      else xmlHttp.onreadystatechange = goparez;
      xmlHttp.send(null);
    }

    catch (e)
    {
      alert("Can't connect to server:\n" + e.toString());
    }
  } 
}

function uslugpr(usl,ude){
    if (xmlHttp)
  {
    try
    {
		if(ude=="recdoctor"){
		var too="kassdoc.php?strok="+document.getElementById("strok").value+"&bsd="+encodeURIComponent(usl)+"&recdoc=recdoc";
		newposdich=usl;
		}
		else if(ude=="simple") {
		var too="vivodchek.php?strok="+document.getElementById("strok").value+"&bsd="+encodeURIComponent(usl)+"&thatisthis="+ude;
		newposdich=usl;
		newpos=usl;
		}
		else{
		if (document.getElementById("dopr"+ude)) var dopr=document.getElementById("dopr"+ude).value; else var dopr="";
		if (document.getElementById("stal"+ude)) var stal=document.getElementById("stal"+ude).value; else var stal="";
		
		/*if(4==2)*/document.getElementById("postall"+ude).innerHTML="<a onclick=\"uslugpr('"+usl+"','"+ude+"');\" href=\"#\"><i class='icon-list-add'></i>добавить товар</a>";
if(usl=='Прочее' || usl=='Услуги') newpos=document.getElementById("osnr"+ude).value+" "+dopr+" "+stal;
else newpos=usl+" "+document.getElementById("osnr"+ude).value+" "+dopr+" "+stal;
strok=document.getElementById("strok");
newposdich=document.getElementById("osnr"+ude).value+"~`"+dopr+"~`"+stal;
if(document.getElementById("thatis").value=="check") var too="vivodchek.php?strok="+strok.value+"&bsd="+encodeURIComponent(newposdich)+"&kat="+encodeURIComponent(usl);
else if(document.getElementById("thatis").value=="dockass") var too="kassdoc.php?strok="+strok.value+"&bsd="+encodeURIComponent(newposdich)+"&kat="+encodeURIComponent(usl);
else var too="vivodname.php?strok="+strok.value+"&bsd="+encodeURIComponent(newposdich)+"&kat="+encodeURIComponent(usl)+"&sklade="+document.getElementById('nosklad').value;
katg=usl;
newposdich=usl+"~`"+newposdich;
		} 
      xmlHttp.open("GET", too, true);
	  if(document.getElementById("thatis").value=="check" || document.getElementById("thatis").value=="dockass") xmlHttp.onreadystatechange = goparez;
	  else  xmlHttp.onreadystatechange = gopa;
      xmlHttp.send(null);
    }

    catch (e)
    {
      alert("Can't connect to server:\n" + e.toString());
    }
  }   
}

function goparez()
{

  if (xmlHttp.readyState == 4) 
  {

    if (xmlHttp.status == 200) 
    {unsverresp();      
      try
      {
var html=xmlHttp.responseText;
if(reala=="recdoctor"){
if(html!="GGGGGG"){
if(html=="nonrecomend") {document.getElementById('vidbufer').innerHTML="Нет рекомендаций"; return false;}
else 
var te44=new Array();
var htmlpalec=html.split("***");
var zames57="";
for(i=0; i<htmlpalec.length; i++){
	if(htmlpalec[i].length>1) {
		var ddpossi=htmlpalec[i].split("|");
		if(ddpossi.length==4){
		var np_html="Линза D "+ddpossi[0]+" ПЦК "+ddpossi[1]+" ЗР "+ddpossi[2];
		if(ddpossi[3].length>0) np_html=np_html+" R1 "+ddpossi[3];
		var np_cs="Линза D "+ddpossi[0]+"~`ПЦК "+ddpossi[1]+"~`ЗР "+ddpossi[2]+"~`R1 "+ddpossi[3];//this.style["display"]="none";
		zames57=zames57+'<a onclick=\'window.open("index.php?a=newpos&script='+np_cs+'&katg='+ddpossi[0]+'", "newposition", "width=790, height=600, toolbar=no, status=no"); this.text="Добавить товар '+np_html+' в продажу"; this.onclick=function() {uslugpr("'+np_cs+'","recdoctor");};  return false;\'  href="javascript://">Создать позицию '+np_html+'</a><br>';
	}
		else {te44.push(htmlpalec[i]);}
	}
}
	if(zames57.length>1) document.getElementById('vidbufer').innerHTML=zames57;
	//else document.getElementById('vidbufer').innerHTML="";
} else {var dfg45=newposdich.split("~`"); katg=dfg45[0]; newpos=newposdich.split("~`").join(" ");}
	if(te44.length>0){
		for(e7=0;e7<te44.length;e7++) addposit(te44[e7],"dochek");
	}
}
else {
if(html=="GGGGGG"){
var newsko=window.confirm('Такой позиции нет! Создать позицию '+newpos+'?');
if(newsko==true) window.open("index.php?a=newpos&script="+newposdich+"&katg="+katg, "newposition", "width=290, height=500, toolbar=no, status=no");
}
else if(html=="ffffff"){
var newsko=window.confirm('Такой позиции нет! Создать позицию c ID '+idren+'?');
if(newsko==true) window.open("index.php?a=newpos&id=7&script="+idren, "newposition", "width=290, height=500, toolbar=no, status=no");
}
else if(html=="ssssss") alert("Такой позиции нет!");
else if(reala=="bufer_into_chek"){
var htmlpalec=html.split("^");
realb=realb*2;
for(io=0; io<realb; io=io+2){
addposit(htmlpalec[io]+"^"+htmlpalec[(io+1)],"klon");
keypr(document.getElementById("strok").value);
}
reala="";
}
else{
if(document.getElementById("thatis").value=="dockass") addposit(html,'dochek');
else addposit(html);
}
}
      }
      catch(e)
      {
        displayError(e);
      }
    } else testinternet(1);
  }

}

function handleRequestStateChange()
{ 
  if (xmlHttp.readyState == 4) 
  {

    if (xmlHttp.status == 200) 
    {
unsverresp();
      try
      {
var html=xmlHttp.responseText;
//print "$rew[sokrname]|$rew[name]|$rew[login]|$rew[gorod]|$g^"; print"$aldeb|$alkre|$_GET[a]|$dada|$ny|$nj";
if(html=="jukukh8") location.href="/index.php?pass=7";
myDiv=document.getElementById("ajaxo");
if(realb=="dkkl"){
var tempikisnul=0;
var barva=html.split("^");
for(i=0;i<barva.length;i++){
bar2=barva[i].split("|"); 
  if(i==0){
    var firmop=bar2[0]; var datatop=bar2[1];
    f1="<br /><h2>Дебиторка клиентов "+firmop+" на "+datatop+" <a href='x_deb_kre.php?kp=kl&a="+bar2[3]+"&dada="+bar2[1]+"&y="+bar2[4]+"&j="+bar2[5]+"' target='xls'><i class='icon-link-1'></i> экспорт в Excel</a></h2><br /><input type='hidden' id='numth' value='5'><div class='outer'><div class='innera'><table id="+
    '"exampleG" class="tablesorter" border="0" cellpadding="0" cellspacing="1"><thead><tr id="thidwidth"><th id="tabh1">Клиент<th id="tabh2">Манеджер<th id="tabh3">Город<th id="tabh4">Кредитор<th id="tabh5">Дебитор</tr></thead><tbody>'+
    '<tr style="display:none"><td> </td><td> </td><td> </td><td>1</td><td>1</td></tr>'; 
    var gettime=bar2[2];
  }
  else if(i==1){
    tempikisnul=1;
    if(parseFloat(bar2[4])>0) f1=f1+"<tr id='tdidwidth'><td id='tabd1'><a href='index.php?target=debetcli&biis="+bar2[0]+"&timeiis="+gettime+"' target='_blank' style='color:black;text-decoration: none'>"+
    bar2[1]+"</a></td><td id='tabd2'>"+bar2[2]+"</td><td id='tabd3'>"+bar2[3]+"</td><td id='tabd4'>"+parseFloat(bar2[4]).toFixed(2)+"</td><td id='tabd5'> </td></tr>";
    else if(parseFloat(bar2[4])<0)  f1=f1+"<tr id='tdidwidth'><td id='tabd1'><a href='index.php?target=debetcli&biis="+bar2[0]+"&timeiis="+gettime+"' target='_blank' style='color:black;text-decoration: none'>"+
    bar2[1]+"</a></td><td id='tabd2'>"+bar2[2]+"</td><td id='tabd3'>"+bar2[3]+"</td><td id='tabd4'> </td><td id='tabd5'>"+parseFloat(Math.abs(bar2[4])).toFixed(2)+"</td></tr>";
  }
  else if(i!=(barva.length-1)){
    if(parseFloat(bar2[4])>0) f1=f1+"<tr><td style='width:450px;'><a href='index.php?target=debetcli&biis="+bar2[0]+"&timeiis="+gettime+"' target='_blank' style='color:black;text-decoration: none'>"+
    bar2[1]+"</a></td><td>"+bar2[2]+"</td><td>"+bar2[3]+"</td><td>"+parseFloat(bar2[4]).toFixed(2)+"</td><td> </td></tr>";
    else if(parseFloat(bar2[4])<0)  f1=f1+"<tr><td style='width:450px;'><a href='index.php?target=debetcli&biis="+bar2[0]+"&timeiis="+gettime+"' target='_blank' style='color:black;text-decoration: none'>"+
    bar2[1]+"</a></td><td>"+bar2[2]+"</td><td>"+bar2[3]+"</td><td> </td><td>"+parseFloat(Math.abs(bar2[4])).toFixed(2)+"</td></tr>";
  }
  else {
  f1=f1+"</tbody></table><table>";
  if(bar2[1]=="")bar2[1]=0;if(bar2[0]=="")bar2[0]=0;
  f1=f1+"<tr><td id='tabit1'> </td><td id='tabit2'> </td><td id='tabit3'>Итого:</td><td id='tabit4'><b>&nbsp;"+parseFloat(bar2[0]).toFixed(2)+"</b></td><td id='tabit5'><b>&nbsp;"+parseFloat(bar2[1]).toFixed(2)+"</b></td></tr>";
  if(parseFloat(bar2[0])>parseFloat(bar2[1])) f1=f1+"<tr><td> </td><td> </td><td><b>Итого:</b></td><td><b>&nbsp;"+parseFloat((bar2[0]-bar2[1])).toFixed(2)+"</b></td><td>&nbsp;</td></tr></table></div>";
  else f1=f1+"<tr><td> </td><td> </td><td><b>Итого:</b></td><td>&nbsp;</td><td><b>&nbsp;"+parseFloat((bar2[1]-bar2[0])).toFixed(2)+"</b></td></tr></table></div>";
  f1=f1+"</div>";
  //<br><a href='x_deb_kre.php?kp=kl&a="+bar2[2]+"&dada="+bar2[3]+"&y="+bar2[4]+"&j="+bar2[5]+"' target='_blank'><img src='excel.png' width='30' height='30'></a>";
  }
  
}
popravka=6;
if(tempikisnul!=0) myDiv.innerHTML=f1;  
else {myDiv.innerHTML="<br /><h2>Дебиторка клиентов "+firmop+" на "+datatop+" чиста</h2><br />";slon=0;}
}
else if(realb=="dkpo"){
var tempikisnul=0;
var barva=html.split("^");
for(i=0;i<barva.length;i++){
bar2=barva[i].split("|");
  if(i==0){
    var firmop=bar2[0]; var datatop=bar2[1];
    f1="<br /><h2>Дебиторка поставщиков "+firmop+" на "+datatop+" <a href='x_deb_kre.php?kp=po&a="+bar2[2]+"&dada="+bar2[1]+"&y="+bar2[3]+"' target='xls'><i class='icon-link-1'></i> экспорт в Excel</a></h2><br /><input type='hidden' id='numth' value='3'><div class='outer'><div class='innera'><table id="+
    '"exampleG" class="tablesorter" border="0" cellpadding="0" cellspacing="1"><thead><tr id="thidwidth"><th id="tabh1">Поставщик<th id="tabh2">Кредитор<th id="tabh3">Дебитор</tr></thead><tbody>'+
    '<tr style="display:none"><td> </td><td>1</td><td>1</td></tr>'; 
    }
  else if(i==1){
    tempikisnul=1;
    if(parseFloat(bar2[0])>0) f1=f1+"<tr id='tdidwidth'><td id='tabd1'>"+bar2[1]+"</td><td id='tabd2'> </td><td id='tabd3'>"+parseFloat(Math.abs(bar2[0])).toFixed(2)+"</td></tr>";
    else if(parseFloat(bar2[0])<0)  f1=f1+"<tr id='tdidwidth'><td id='tabd1'>"+bar2[1]+"</td><td id='tabd2'>"+parseFloat(Math.abs(bar2[0])).toFixed(2)+"</td><td id='tabd3'> </td></tr>";
  }
  else if(i!=(barva.length-1)){
    if(parseFloat(bar2[0])>0) f1=f1+"<tr><td style='width:450px;'>"+bar2[1]+"</td><td> </td><td>"+parseFloat(Math.abs(bar2[0])).toFixed(2)+"</td></tr>";
    else if(parseFloat(bar2[0])<0)  f1=f1+"<tr><td style='width:450px;'>"+bar2[1]+"</td><td>"+parseFloat(Math.abs(bar2[0])).toFixed(2)+"</td><td> </td></tr>";
  }
  else {
  f1=f1+"</tbody></table><table>";
  if(bar2[1]=="")bar2[1]=0;if(bar2[0]=="")bar2[0]=0;
  f1=f1+"<tr><td id='tabit1'>Итого:</td><td id='tabit2'><b>&nbsp;"+parseFloat(bar2[0]).toFixed(2)+"</b></td><td id='tabit3'><b>&nbsp;"+parseFloat(bar2[1]).toFixed(2)+"</b></td></tr>";
  if(parseFloat(bar2[1])<=parseFloat(bar2[0])) f1=f1+"<tr><td><b>Итого:</b></td><td><b>&nbsp;"+parseFloat((bar2[0]-bar2[1])).toFixed(2)+"</b></td><td> </td></tr></table></div>";
  else f1=f1+"<tr><td><b>Итого:</b></td><td> </td><td><b>&nbsp;"+parseFloat((bar2[1]-bar2[0])).toFixed(2)+"</b></td></tr></table></div>";
  f1=f1+"</div>";
  //<br><a href='x_deb_kre.php?kp=po&a="+bar2[2]+"&dada="+bar2[3]+"&y="+bar2[4]+"' target='_blank'><img src='excel.png' width='30' height='30'></a>";
  }
  
}
popravka=4;
if(tempikisnul!=0) myDiv.innerHTML=f1;  
else {myDiv.innerHTML="<br /><h2>Дебиторка поставщиков "+firmop+" на "+datatop+" чиста</h2><br />";slon=0;}
}
else if(reala=="marshrut"){if(html==1) {document.getElementById("marshrut_log_"+realb).style.background="green";} else document.getElementById("marshrut_log_"+realb).style.background="red";}
else if(reala=="marshrut0"){if(html==1) {document.getElementById("marshrut0_log_"+realb).style.background="green";} else document.getElementById("marshrut0_log_"+realb).style.background="red";}
else if(reala=="komalogtik"){if(html==1) {document.getElementById("komm_log_"+realb).style.background="green";} else document.getElementById("komm_log_"+realb).style.background="red";}
else if(reala=="oststki" || reala=="ostpere"){popravka="ostat";myDiv.innerHTML=html;}
else if(reala=="ossrva"){myDiv.innerHTML=html;$(document).ready(function(){ $('#exampleW').attachDatepicker(); });}
else if(reala=="agents" && realb=="order"){
	if(html=="none") {f1="<br /><h2>За данный период продаж у агентов не было</h2><br />";slon=0;}
	else {
  var barva=html.split("^");
for(i=0;i<barva.length-1;i++){
bar2=barva[i].split("|");
if(i==0){
	f1='<br /><input type="hidden" id="numth" value="11"><h2>Отчет по продажам агентов за период <a href="x_agentszap.php?time='+bar2[0]+"&b="+bar2[1]+'" target="xls"><i class="icon-link-1"></i> экспорт в Excel</a></h2><br /><div class="outer"><div class="innera"><table id="exampleG" class="tablesorter" border="0" cellpadding="0" cellspacing="1"><thead><tr id="thidwidth"><th id="tabh1">Дата<th id="tabh2">Пациент<th id="tabh3">№ продажи<th id="tabh4">Сумма<th id="tabh5">Сумма скидки<th id="tabh6">Агент<th id="tabh7">Сумма агенту<th id="tabh8">Отдано агенту<th id="tabh9">Код агента<th id="tabh10">Телефон агента<th id="tabh11">E-mail агента</tr></thead><tbody>'+
  '<tr style="display:none"><td>2012-03-03</td><td> </td><td>1</td><td>1</td><td>1</td><td> </td><td>1</td><td>1</td><td>1</td><td>1</td><td> </td></tr>';
}
	else {
		if(i==1) f1=f1+"<tr id='tdidwidth'><td id='tabd1'>"+bar2[1]+"</td><td id='tabd2'>"+bar2[2]+"</td><td id='tabd3'>"+parseFloat(bar2[3])+"</td><td id='tabd4'>"+parseFloat(bar2[6]).toFixed(2)+"</td><td id='tabd5'>"+parseFloat(bar2[10]).toFixed(2)+"</td><td id='tabd6'>"+bar2[13]+" "+bar2[14]+" "+bar2[15]+"</td><td id='tabd7'>"+parseFloat(bar2[11]).toFixed(2)+"</td><td id='tabd8'>"+parseFloat(bar2[12]).toFixed(2)+"</td><td id='tabd9'>"+parseFloat(bar2[16])+"</td><td id='tabd10'>"+bar2[17]+"</td><td id='tabd11'>"+bar2[18]+"</td></tr>";
		else {f1=f1+"<tr><td>"+bar2[1]+"</td><td>"+bar2[2]+"</td><td>"+parseFloat(bar2[3])+"</td><td>"+parseFloat(bar2[6]).toFixed(2)+"</td><td>"+parseFloat(bar2[10]).toFixed(2)+"</td><td>"+bar2[13]+" "+bar2[14]+" "+bar2[15]+"</td><td>"+parseFloat(bar2[11]).toFixed(2)+"</td><td>"+parseFloat(bar2[12]).toFixed(2)+"</td><td>"+parseFloat(bar2[16])+"</td><td>"+bar2[17]+"</td><td>"+bar2[18]+"</td></tr>";}
	}
}
		f1=f1+"</tbody></table></div></div>";
}
myDiv.innerHTML=f1;
popravka=0;
}
				
else if(reala=="podborsperiod"){
	if(html=="none") {f1="<br /><h2>За данный период подборов не было</h2><br />";slon=0;}
	else {
  var barva=html.split("^");
for(i=0;i<barva.length-1;i++){
bar2=barva[i].split("|");
if(i==0){
	f1='<br /><input type="hidden" id="numth" value="11"><h2>Отчет по подборам за период <a href="x_podbrzappdb.php?time='+bar2[0]+"&b="+bar2[1]+'" target="xls"><i class="icon-link-1"></i> экспорт в Excel</a></h2><br /><div class="outer"><div class="innera"><table id="exampleG" class="tablesorter" border="0" cellpadding="0" cellspacing="1"><thead><tr id="thidwidth"><th id="tabh1">№ карты<th id="tabh2">ФИО пациента<th id="tabh3">ФИО несовершеннолетнего<th id="tabh4">Дата рождения<th id="tabh5">Телефон<th id="tabh6">Дата подбора (создание заявки)<th id="tabh7">Подбор<th id="tabh8">Дата заказа линз<th id="tabh9">Приход ожидается<th id="tabh10">Статус прихода<th id="tabh11">Долг пациента</tr></thead><tbody>'+
  '<tr style="display:none"><td>1</td><td> </td><td> </td><td>2012-03-03</td><td>1</td><td> </td><td> </td><td>1</td><td>2012-03-03</td><td> </td><td>1</td></tr>';
}
	else {
		if(isNaN(bar2[10])) bar2[10]=parseFloat(bar2[10]).toFixed(2);
		if(i==1) f1=f1+"<tr id='tdidwidth'><td id='tabd1' onclick='window.open(\"index.php?uprsotr=701000&amp;gross="+bar2[0]+"\");' style='cursor:pointer'>"+bar2[1]+"</td><td id='tabd2'>"+bar2[2]+"</td><td id='tabd3'>"+bar2[3]+"</td><td id='tabd4'>"+bar2[4]+"</td><td id='tabd5'>"+bar2[5]+"</td><td id='tabd6'>"+bar2[6]+"</td><td id='tabd7'>"+bar2[11]+"</td><td id='tabd8'>"+bar2[7]+"</td><td id='tabd9'>"+bar2[8]+"</td><td id='tabd10'>"+bar2[9]+"</td><td id='tabd11'>"+bar2[10]+"</td></tr>";
		else {f1=f1+"<tr><td id='tabd1' onclick='window.open(\"index.php?uprsotr=701000&amp;gross="+bar2[0]+"\");' style='cursor:pointer'>"+bar2[1]+"</td><td id='tabd2'>"+bar2[2]+"</td><td id='tabd3'>"+bar2[3]+"</td><td id='tabd4'>"+bar2[4]+"</td><td id='tabd5'>"+bar2[5]+"</td><td id='tabd6'>"+bar2[6]+"</td><td id='tabd7'>"+bar2[11]+"</td><td id='tabd8'>"+bar2[7]+"</td><td id='tabd9'>"+bar2[8]+"</td><td id='tabd10'>"+bar2[9]+"</td><td id='tabd11'>"+bar2[10]+"</td></tr>";}
	}
}
		f1=f1+"</tbody></table></div></div>";
}
myDiv.innerHTML=f1;
popravka=0;
}					
				
else if(reala=="konverspac"){
	if(html=="errorName0") {f1="<br /><h2>Ошибка названий первичных приемов.</h2><br />";slon=0;}
	else if(html=="errorName1") {f1="<br /><h2>Ошибка названий подбора.</h2><br />";slon=0;}
	else {
  var barva=html.split("^");
  var WK1=0; var WK2=0; var WK3=0; var WK4=0; var WK5=0;
  var ESS=new Array(); var SDA=new Array();
for(i=0;i<barva.length-1;i++){
bar2=barva[i].split("|");
if(i==0){
	f1='<br /><input type="hidden" id="numth" value="6"><h2>Отчет по конверсии за период'+// <a href="x_conversdoc.php?time='+bar2[0]+"&b="+bar2[1]+'" target="xls"><i class="icon-link-1"></i> экспорт в Excel</a>
	'</h2><br /><div class="outer"><div class="innera"><table id="exampleG" class="tablesorter" border="0" cellpadding="0" cellspacing="1"><thead><tr id="thidwidth"><th id="tabh1">Первичный записан<th id="tabh2">Первичный состоялся<th id="tabh3">Подбор записан<th id="tabh4">Подбор состоялся<th id="tabh5">OK-дата<th id="tabh6">Источник</tr></thead><tbody>'+
  '<tr style="display:none"><td> </td><td> </td><td> </td><td> </td><td>01.01.1990</td><td> </td></tr>';
}
	else {
		WK1++;
		if(bar2[6]=="nine") {bar2[1]=bar2[1]+" ("+bar2[2]+")"; bar2[2]="";}
		if(bar2[2].length>5) WK2++;
		if(bar2[3].length>5) WK5++;
		if(bar2[4].length>1) {
			if(!ESS[bar2[4]]) {
				if(!isNaN(bar2[4])) bar2[4]="Агент №"+bar2[4];
				else if(bar2[4].substr(0,1)=="," && bar2[4].substr(-1)==",") {
					/*var loka=bar2[4].split(",");
					for(izi=0;izi<barva.length-1;izi++){
					if(!isNaN(bar2[4])) bar2[4]="Агент №"+bar2[4]; ESS[bar2[4]]=0; SDA[bar2[4]]=0;
					}*/
					bar2[4]="Агенты №"+bar2[4].substr(1,bar2[4].length-2);
				}
				
				ESS[bar2[4]]=0; SDA[bar2[4]]=0;
				}
			ESS[bar2[4]]=ESS[bar2[4]]+1;
			if(bar2[3].length>5) SDA[bar2[4]]=SDA[bar2[4]]+1;
		}
		if(isNaN(bar2[10])) bar2[10]=parseFloat(bar2[10]).toFixed(2);
		var fDs=bar2[7].split("***"); var ggji=""; var ggaa="";
		for(izi=1;izi<fDs.length;izi++){
			if(izi%3==0) {if(ggji=="") {WK3++; ggji=ggji+fDs[izi];} else ggji=ggji+", "+fDs[izi];}
			else if((izi==1||izi==4||izi==7||izi==10||izi==13||izi==16||izi==19||izi==22||izi==25) && fDs[(izi+1)]!=0)
			{if(ggaa=="") {WK4++; ggaa=ggaa+fDs[izi];} else ggaa=ggaa+", "+fDs[izi];}
		} 
		if(i==1) f1=f1+"<tr id='tdidwidth'><td id='tabd1' onclick='window.open(\"index.php?uprsotr=701000&amp;gross="+bar2[5]+"\");' style='cursor:pointer'>"+bar2[1]+"</td><td id='tabd2'>"+bar2[2]+"</td><td id='tabd3'>"+ggji+"</td><td id='tabd4'>"+ggaa+"</td><td id='tabd5'>"+bar2[3]+"</td><td id='tabd6'>"+bar2[4]+"</td></tr>";
		else {f1=f1+"<tr><td id='tabd1' onclick='window.open(\"index.php?uprsotr=701000&amp;gross="+bar2[5]+"\");' style='cursor:pointer'>"+bar2[1]+"</td><td id='tabd2'>"+bar2[2]+"</td><td id='tabd3'>"+ggji+"</td><td id='tabd4'>"+ggaa+"</td><td id='tabd5'>"+bar2[3]+"</td><td id='tabd6'>"+bar2[4]+"</td></tr>";}
	}
}
		f1=f1+"</tbody></table></div>";
		f1=f1+"<div class='golu'>Первичный записан: "+WK1+"<br>Первичный состоялся: "+WK2+" ("+Math.round(WK2/WK1*100)+"%)<br>Подбор записан: "+WK3+
		" ("+Math.round(WK3/WK1*100)+"%)<br>Подбор состоялся: "+WK4+" ("+Math.round(WK4/WK1*100)+"%)<br>ОК-дата :"+WK5+" ("+Math.round(WK5/WK1*100)+"%)</div><div class='golu'>Источники:<br>";

		for (let key in ESS) {
		f1=f1+key+": "+SDA[key]+" из "+ESS[key]+"<br>";	
		}
		f1=f1+"</div></div>";
}
myDiv.innerHTML=f1;
popravka=0;
}
				
else if(reala=="pacikperiod"){
	if(html=="none") {f1="<br /><h2>За данный период продаж и приемов не было</h2><br />";slon=0;}
	else {
  var barva=html.split("^");
for(i=0;i<barva.length-1;i++){
bar2=barva[i].split("|");
if(i==0){
	f1='<br /><input type="hidden" id="numth" value="11"><h2>Отчет по пациентам за период <a href="x_pacikzap.php?time='+bar2[0]+"&b="+bar2[1]+'" target="xls"><i class="icon-link-1"></i> экспорт в Excel</a></h2><br /><div class="outer"><div class="innera"><table id="exampleG" class="tablesorter" border="0" cellpadding="0" cellspacing="1"><thead><tr id="thidwidth"><th id="tabh1">№ карты<th id="tabh2">Пациент<th id="tabh3">Дата договора<th id="tabh4">№ договора<th id="tabh5">ФИО несовершеннолетнего<th id="tabh6">Врач<th id="tabh7">Код агента<th id="tabh8">Дата приема<th id="tabh9">Вид приема<th id="tabh10">Сумма продажи<th id="tabh11">Причина</tr></thead><tbody>'+
  '<tr style="display:none"><td>1</td><td> </td><td>2012-03-03</td><td>1</td><td> </td><td> </td><td>1</td><td>2012-03-03</td><td> </td><td>1</td><td> </td></tr>';
}
	else {
		if(isNaN(bar2[9])) bar2[9]=parseFloat(bar2[9]).toFixed(2);
		if(bar2[6].substr(0,1)=="," && bar2[6].substr(-1)==",") bar2[6]=bar2[6].substr(1,bar2[6].length-2);
		if(i==1) f1=f1+"<tr id='tdidwidth'><td id='tabd1'>"+bar2[0]+"</td><td id='tabd2'>"+bar2[1]+"</td><td id='tabd3'>"+bar2[2]+"</td><td id='tabd4'>"+parseFloat(bar2[3])+"</td><td id='tabd5'>"+bar2[4]+"</td><td id='tabd6'>"+bar2[5]+"</td><td id='tabd7'>"+bar2[6]+"</td><td id='tabd8'>"+(bar2[7])+"</td><td id='tabd9'>"+bar2[8]+"</td><td id='tabd10'>"+bar2[9]+"</td><td id='tabd11'>"+bar2[10]+"</td></tr>";
		else {f1=f1+"<tr><td id='tabd1'>"+bar2[0]+"</td><td id='tabd2'>"+bar2[1]+"</td><td id='tabd3'>"+bar2[2]+"</td><td id='tabd4'>"+parseFloat(bar2[3])+"</td><td id='tabd5'>"+bar2[4]+"</td><td id='tabd6'>"+bar2[5]+"</td><td id='tabd7'>"+bar2[6]+"</td><td id='tabd8'>"+(bar2[7])+"</td><td id='tabd9'>"+bar2[8]+"</td><td id='tabd10'>"+bar2[9]+"</td><td id='tabd11'>"+bar2[10]+"</td></tr>";}
	}
}
		f1=f1+"</tbody></table></div></div>";
}
myDiv.innerHTML=f1;
popravka=0;
}				
	
else if(reala=="logchprice"){
	if(html=="error") alert("Ошибка сохранения.");
	else {
		bar2=html.split("|");
		document.getElementById('rrr'+bar2[0]).text=bar2[1];
	}
}
else if(reala=="logchdata"){
	if(html=="error") alert("Ошибка сохранения.");
	else {
		bar2=html.split("|");
		document.getElementById('fff'+bar2[0]).text=bar2[1];
	}
}
				
				
else if(reala=="otgper"){
  if(html=="GGGGGGGGGG") {f1="<br /><h2>За данный период у данного клиента отгрузок не было</h2><br />";slon=0;}
  else {
  var barva=html.split("^");
for(i=0;i<barva.length;i++){
bar2=barva[i].split("|");
if(i==0){
  if(vedonoff==2) f1='<br><input type="hidden" id="numth" value="17"><h2>Отгрузки за период <a href="x_otgzap.php?time='+bar2[0]+"&b="+bar2[1]+'" target="xls"><i class="icon-link-1"></i> экспорт в Excel</a></h2><br /><div class="outer"><div class="innera"><table id="exampleG" class="tablesorter" border="0" cellpadding="0" cellspacing="1"><thead><tr id="thidwidth"><th id="tabh1">Дата<th id="tabh2">№ счета<th id="tabh3">№ ведомости<th id="tabh4">№ с/ф<th id="tabh5">Поставщик<th id="tabh6">Склад<th id="tabh7">Заказчик<th id="tabh8">Наименование товара<th id="tabh9">Ед.изм.<th id="tabh10">Кол-во<th id="tabh11">бал. Цена<th id="tabh12">бал. стоимость<th id="tabh13">прод. Цена<th id="tabh14">прод. стоимость<th id="tabh15">Маржа<th id="tabh16">Наценка, %<th id="tabh17">отв. Менеджер</tr></thead><tbody>'+
  '<tr style="display:none"><td>2012-03-03</td><td>1</td><td>1</td><td>1</td><td> </td><td>1</td><td> </td><td> </td><td> </td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td> </td></tr>';
	else if(industry=="doctor") f1='<br><input type="hidden" id="numth" value="18"><h2>Отгрузки за период <a href="x_otgzap.php?time='+bar2[0]+"&b="+bar2[1]+'" target="xls"><i class="icon-link-1"></i> экспорт в Excel</a></h2><div class="outer"><div class="innera"><table id="exampleG" class="tablesorter" border="0" cellpadding="0" cellspacing="1"><thead><tr id="thidwidth"><th id="tabh1">Дата<th id="tabh2">№ счета<th id="tabh3">№ с/ф / продажи<th id="tabh4">Поставщик<th id="tabh5">Склад<th id="tabh6" style="width:83px;">Заказчик<th id="tabh7" style="width:121px;">Наименование товара<th id="tabh8">Ед.изм.<th id="tabh9">Кол-во<th id="tabh10">бал. Цена<th id="tabh11">бал. стоимость<th id="tabh12">прод. Цена<th id="tabh13">прод. стоимость<th id="tabh14">Маржа<th id="tabh15">Наценка, %<th id="tabh16">отв. Менеджер<th id="tabh17">Врач<th id="tabh18">Агент</tr></thead><tbody>'+
  '<tr style="display:none"><td>2012-03-03</td><td>1</td><td>1</td><td> </td><td>1</td><td> </td><td> </td><td> </td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td> </td><td> </td><td> </td></tr>';
  else f1='<br><input type="hidden" id="numth" value="16"><h2>Отгрузки за период <a href="x_otgzap.php?time='+bar2[0]+"&b="+bar2[1]+'" target="xls"><i class="icon-link-1"></i> экспорт в Excel</a></h2><div class="outer"><div class="innera"><table id="exampleG" class="tablesorter" border="0" cellpadding="0" cellspacing="1"><thead><tr id="thidwidth"><th id="tabh1">Дата<th id="tabh2">№ счета<th id="tabh3">№ с/ф<th id="tabh4">Поставщик<th id="tabh5">Склад<th id="tabh6" style="width:83px;">Заказчик<th id="tabh7" style="width:121px;">Наименование товара<th id="tabh8">Ед.изм.<th id="tabh9">Кол-во<th id="tabh10">бал. Цена<th id="tabh11">бал. стоимость<th id="tabh12">прод. Цена<th id="tabh13">прод. стоимость<th id="tabh14">Маржа<th id="tabh15">Наценка, %<th id="tabh16">отв. Менеджер</tr></thead><tbody>'+
  '<tr style="display:none"><td>2012-03-03</td><td>1</td><td>1</td><td> </td><td>1</td><td> </td><td> </td><td> </td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td> </td></tr>';

}
else {
temp3st=parseFloat(bar2[2]);
if(isNaN(temp3st)) temp3st=" "; 
if(vedonoff==2) {
if(i==1) f1=f1+"<tr id='tdidwidth'><td id='tabd1'>"+bar2[0]+"</td><td id='tabd2' style='width:40px;'>"+parseFloat(bar2[1])+"</td><td id='tabd3'>"+temp3st+"</td><td id='tabd4'>"+parseFloat(bar2[3])+"</td><td id='tabd5'>"+bar2[4]+"</td><td id='tabd6'>"+parseFloat(bar2[5])+"</td><td id='tabd7'>"+bar2[6]+"</td><td id='tabd8' style='width:200px;'>"+bar2[7]+"</td><td id='tabd9'>"+bar2[8]+"</td><td id='tabd10'>"+parseFloat(bar2[9]).toFixed(3)+"</td><td id='tabd11'>"+parseFloat(bar2[10]).toFixed(2)+"</td><td id='tabd12'>"+parseFloat(bar2[11]).toFixed(2)+"</td><td id='tabd13'>"+parseFloat(bar2[12]).toFixed(2)+"</td><td id='tabd14'>"+parseFloat(bar2[13]).toFixed(2)+"</td><td id='tabd15'>"+parseFloat(bar2[14]).toFixed(2)+"</td><td id='tabd16'>"+parseFloat(bar2[15]).toFixed(2)+"</td><td id='tabd17'>"+bar2[16]+"</td></tr>";
else f1=f1+"<tr><td>"+bar2[0]+"</td><td>"+parseFloat(bar2[1])+"</td><td>"+temp3st+"</td><td>"+parseFloat(bar2[3])+"</td><td>"+bar2[4]+"</td><td>"+parseFloat(bar2[5])+"</td><td>"+bar2[6]+"</td><td>"+bar2[7]+"</td><td>"+bar2[8]+"</td><td>"+parseFloat(bar2[9]).toFixed(3)+"</td><td>"+parseFloat(bar2[10]).toFixed(2)+"</td><td>"+parseFloat(bar2[11]).toFixed(2)+"</td><td>"+parseFloat(bar2[12]).toFixed(2)+"</td><td>"+parseFloat(bar2[13]).toFixed(2)+"</td><td>"+parseFloat(bar2[14]).toFixed(2)+"</td><td>"+parseFloat(bar2[15]).toFixed(2)+"</td><td>"+bar2[16]+"</td></tr>";
}
else if(industry=="doctor"){
if(i==1) f1=f1+"<tr id='tdidwidth'><td id='tabd1'>"+bar2[0]+"</td><td id='tabd2'>"+parseFloat(bar2[1])+"</td><td id='tabd3'>"+parseFloat(bar2[3])+"</td><td id='tabd4'>"+bar2[4]+"</td><td id='tabd5'>"+parseFloat(bar2[5])+"</td><td id='tabd6' style='width:83px;'>"+bar2[6]+"</td><td id='tabd7' style='width:121px;'>"+bar2[7]+"</td><td id='tabd8'>"+bar2[8]+"</td><td id='tabd9'>"+parseFloat(bar2[9]).toFixed(3)+"</td><td id='tabd10'>"+parseFloat(bar2[10]).toFixed(2)+"</td><td id='tabd11'>"+parseFloat(bar2[11]).toFixed(2)+"</td><td id='tabd12'>"+parseFloat(bar2[12]).toFixed(2)+"</td><td id='tabd13'>"+parseFloat(bar2[13]).toFixed(2)+"</td><td id='tabd14'>"+parseFloat(bar2[14]).toFixed(2)+"</td><td id='tabd15'>"+parseFloat(bar2[15]).toFixed(2)+"</td><td id='tabd16'>"+bar2[16]+
"</td><td id='tabd17'>"+bar2[17]+"</td><td id='tabd18'>"+bar2[18]+"</td></tr>";
else f1=f1+"<tr><td>"+bar2[0]+"</td><td>"+parseFloat(bar2[1])+"</td><td>"+parseFloat(bar2[3])+"</td><td>"+bar2[4]+"</td><td>"+parseFloat(bar2[5])+"</td><td style='width:83px;'>"+bar2[6]+"</td><td style='width:121px;'>"+bar2[7]+"</td><td>"+bar2[8]+"</td><td>"+parseFloat(bar2[9]).toFixed(3)+"</td><td>"+parseFloat(bar2[10]).toFixed(2)+"</td><td>"+parseFloat(bar2[11]).toFixed(2)+"</td><td>"+parseFloat(bar2[12]).toFixed(2)+"</td><td>"+parseFloat(bar2[13]).toFixed(2)+"</td><td>"+parseFloat(bar2[14]).toFixed(2)+"</td><td>"+parseFloat(bar2[15]).toFixed(2)+"</td><td>"+bar2[16]+"</td>"+
"<td>"+bar2[17]+"</td><td>"+bar2[18]+"</td></tr>";
}
else {
if(i==1) f1=f1+"<tr id='tdidwidth'><td id='tabd1'>"+bar2[0]+"</td><td id='tabd2' style='width:40px;'>"+parseFloat(bar2[1])+"</td><td id='tabd3'>"+parseFloat(bar2[3])+"</td><td id='tabd4'>"+bar2[4]+"</td><td id='tabd5'>"+parseFloat(bar2[5])+"</td><td id='tabd6'>"+bar2[6]+"</td><td id='tabd7'>"+bar2[7]+"</td><td id='tabd8' style='width:200px;'>"+bar2[8]+"</td><td id='tabd9'>"+parseFloat(bar2[9]).toFixed(3)+"</td><td id='tabd10'>"+parseFloat(bar2[10]).toFixed(2)+"</td><td id='tabd11'>"+parseFloat(bar2[11]).toFixed(2)+"</td><td id='tabd12'>"+parseFloat(bar2[12]).toFixed(2)+"</td><td id='tabd13'>"+parseFloat(bar2[13]).toFixed(2)+"</td><td id='tabd14'>"+parseFloat(bar2[14]).toFixed(2)+"</td><td id='tabd15'>"+parseFloat(bar2[15]).toFixed(2)+"</td><td id='tabd16'>"+bar2[16]+"</td></tr>";
else f1=f1+"<tr><td>"+bar2[0]+"</td><td>"+parseFloat(bar2[1])+"</td><td>"+parseFloat(bar2[3])+"</td><td>"+bar2[4]+"</td><td>"+parseFloat(bar2[5])+"</td><td>"+bar2[6]+"</td><td style='width:170px;'>"+bar2[7]+"</td><td>"+bar2[8]+"</td><td>"+parseFloat(bar2[9]).toFixed(3)+"</td><td>"+parseFloat(bar2[10]).toFixed(2)+"</td><td>"+parseFloat(bar2[11]).toFixed(2)+"</td><td>"+parseFloat(bar2[12]).toFixed(2)+"</td><td>"+parseFloat(bar2[13]).toFixed(2)+"</td><td>"+parseFloat(bar2[14]).toFixed(2)+"</td><td>"+parseFloat(bar2[15]).toFixed(2)+"</td><td>"+bar2[16]+"</td></tr>";
}
}
}
f1=f1+"</tbody></table></div></div>";
//<br><a href='x_otgzap.php?time="+firmop+"&b="+datatop+"'><img src='excel.png' width='30' height='30'></a>";
  } 
myDiv.innerHTML=f1;
popravka=0;
}
else if(reala=="otchbalc"){popravka=0;myDiv.innerHTML=html;}
else if(reala=="obnovjpg"){
	var barva=html.split(",");
	var temin="";
	for(i=0;i<barva.length;i++){
		if(i==1 && barva[i].length>5) temin=temin+"<a href='izo_br/"+barva[i]+"' target='_blank'>"+i+"</a>";
		else if(i!=0 && barva[i].length>5) temin=temin+", <a href='izo_br/"+barva[i]+"' target='_blank'>"+i+"</a>";
	}
var dataf=barva[0].split("|");
document.getElementById("sp"+dataf[0]+dataf[3]).innerHTML=temin;
document.getElementById("spa"+dataf[0]+dataf[3]).href="imgadd.php?id="+dataf[1]+"&unik="+dataf[0]+"&maintr="+dataf[2];
document.getElementById("spa"+dataf[0]+dataf[3]).style['display']="block";
}
else if(reala=="editolimita") {
ghoble.value=html;
}
else if(reala=='zigsa' || reala=='figsa'){
	var dataf=html.split("|");
	if(dataf[0]=="error") document.getElementById("zsda"+dataf[1]).checked=dataf[2];
	else{
		if(dataf[1]=="false") document.getElementById("zsda"+dataf[0]).checked=false;
		else document.getElementById("zsda"+dataf[0]).checked=true;
		var tts=dataf[3].split(","); var newdata=""; var fcc=""; var fcn="";
		if(reala=='zigsa') {
			var ghy0=document.getElementById("allcab0").value.split("|");
			var ghy1=document.getElementById("allcab1").value.split("|");
			var assa="";
		}
		else {
			var ghy0=document.getElementById("allsklad0").value.split("|");
			var ghy1=document.getElementById("allsklad1").value.split("|");
			var assa="S";
		}
		for(i=0;i<tts.length;i++){
			if(tts[i].length>0) {
					for(j=0;j<ghy0.length;j++) {
						if(ghy0[j]==tts[i]) {
						newdata+=ghy1[j];
						if(i!=0) newdata+=",";
						if(fcn=="") fcn=ghy1[j]; else fcn+=', '+ghy1[j];
						if(fcc=="") fcc=','+ghy0[j]+','; else fcc+=ghy0[j]+',';
						}
					}
				}
		}
		document.getElementById(assa+"ACC"+dataf[2]).innerHTML='<input type="hidden" id="'+assa+'FCC'+dataf[2]+'" value="'+fcc+'">'+
		'<input type="hidden" id="'+assa+'FCN'+dataf[2]+'" value="'+fcn+'">'+newdata;
		
	}
}
else if(reala=="editsubgrnezdel" || reala=="editsubgrnezdelpro"){}
else if(reala=="scheduleadminko" || reala=="datainsert" || reala=="datainsertanddel" || reala=="realpac"  || reala=='realpac1win' || reala=="retypeposic") {
	if(reala=="datainsert" || reala=="datainsertanddel" || reala=="retypeposic"){
		if(html=="errorSHC-434") {alert("Такой пациент уже существует! Нельзя создавать пациентов с одинаковыми ФИО, телефоном и ФИО несовершеннолетнего. Проверьте эти данные или используйте уже существующую карту пациента."); return true;}
		else if(html=="errortimevidpri") {alert("Вы не выбрали вид приема."); return false;}
		if (document.getElementById('shirinam')) {
			if(html=="error") {alert("Ошибка записи");return true;}
			else if(html=="timeerror") {alert("Время уже занято.");return true;}
			else if(html=="doctimeerror") {alert("У врача нет такого расписания.");return true;}
			document.getElementById('shirinam').style['display']="none";
			if(reala=="retypeposic") document.getElementById('blockwater').style['display']="none";
		}
	}
	if(reala=="realpac"){
		if(html=="errornotb") {alert("Вы не выбрали пациента в фильтре.");return true;}
		else if(html=="errornotthis") {alert("Пациент с такими данными не найден. Попробуйте найти его в фильтре по номеру карты, телефона или фамилии.");return true;}
		else {realb="";}
	}
	if(reala=="datainsert" || reala=="retypeposic") {
		var bww=html.split("~@^"); realviemid=bww[0];
		html=bww[1];
	}
	var teD=scheduleadminko(html);
	if(reala=='realpac1win'){realb="";}
	else if(reala=="realpac"){izobroo = document.createElement('div');izobroo.id=shirinam;document.body.appendChild(izobroo);izobroo.innerHTML=teD;}
	else myDiv.innerHTML=teD;
}

else if(reala=="goesctf"||reala=="goesotgruz"||reala=="goesproizvo"){
var trg733=reala+"off";
if(html=="1") {document.getElementById('tos'+realb).innerHTML='<span onclick="smotrz(\''+trg733+'\','+realb+');">1C</span>'; document.getElementById('tos'+realb).className="onees yellow";}
else {document.getElementById('tos'+realb).innerHTML='<input type="checkbox" onchange="this.disabled=\'disabled\'; smotrz(\''+reala+'\','+realb+');">';}
}
else if(reala=="goesctfoff"||reala=="goesotgruzoff"||reala=="goesproizvooff"){
var trg733=reala.substr(0,reala.length-3);
if(html=="1") {document.getElementById('tos'+realb).innerHTML='<input type="checkbox" onchange="this.disabled=\'disabled\'; smotrz(\''+trg733+'\','+realb+');">';}
}
else if(reala=="tointegrafor1cstart"){
	if(html=="1") smotrz('tointegrafor1c',1);
	else alert("Ошибка записи файла. Обратитесь к администратору.");
}

else if(reala=="supostat"){
	var temin='<br /><h2>Управление субординацией</h2><br /><form action="supostat.php?a=edit" method="post">';
	var barva=html.split("~");
	var zor=1; var eoche="";
	for(i=0;i<barva.length;i++){
		if(i==0){
			var goniny=barva[0].split("|");
		} else {
		if(barva[i].length>3){
		var snouden=barva[i].split("|");
		temin=temin+'<div class="visi"><div id="ootv'+i+'" class="pr" onclick="otv('+i+');"><img src="plus.jpg"></div><div class="pr"><input type="hidden" id="ooq'+snouden[0]+
		'" value="'+zor+'"><input id="otchff'+snouden[0]+'" onclick="otchf('+snouden[0]+');" type="checkbox">Подчиненные <font color="blue"><b>'+snouden[1]+'</b></font></div><div id="ooraztv'+i+'" class="hid">';
		for(j=0;j<goniny.length;j++){
		if(goniny[j].length>2) {
		if(snouden[2].indexOf(','+goniny[j]+',')==-1) eoche=""; else eoche=" checked";
		if(snouden[1]!=goniny[j]) temin=temin+'<input class="mg" name="'+snouden[1]+'~'+goniny[j]+'" id="otch'+zor+'" type="checkbox"'+eoche+'>'+goniny[j]+'<br>';
		zor=zor+1;
		}
		}
		temin=temin+'<input type="hidden" id="obq'+snouden[0]+'" value="'+(zor-1)+'"></div></div>';	
		}}}
temin=temin+'<div class="clear"></div><br><br><input type="submit" value="Сохранить" id="button1"></form>';	
myDiv.innerHTML=temin;
}
else if(reala=="plategki"){
  if(html=="GGGGGGGGGG") {f1="<br /><h2>За данный период данному поставщику платежных поручений выписано не было</h2><br />";slon=0;}
  else {
  var barva=html.split("^");
for(i=0;i<barva.length;i++){
bar2=barva[i].split("|");
if(i==0){
  f1='<input type="hidden" id="numth" value="6"><br /><h2>Платежные поручения за период ';
  f1=f1+'</h2><br /><div class="outer"><div class="innera"><table id="exampleG"  class="tablesorter" border="0" cellpadding="0" cellspacing="1"><thead><tr id="thidwidth">'+
  '<th id="tabh1">Оплата от<th id="tabh2">Дата<th id="tabh3">Номер пл.<th id="tabh4">Контрагент<th id="tabh5">Сумма, руб.<th id="tabh6">Основание</tr></thead><tbody>'+
  '<tr style="display:none"><td> </td><td>2012-03-03</td><td>1</td><td> </td><td>1</td><td> </td></tr>';
}
else {
/*if(isNaN(bar2[3])) temp3st=bar2[3];
else temp3st=parseFloat(bar2[3]).toFixed(2);
temp3st=bar2[3];*/
temp3st="<a href='x_plategka.php?id="+bar2[0]+"' target='xls'/>"+bar2[3]+"</a>";
if(i==1) f1=f1+"<tr id='tdidwidth'><td id='tabd1'>"+bar2[1]+"</td><td id='tabd2'>"+bar2[2]+"</td><td id='tabd3'>"+temp3st+"</td><td id='tabd4'>"+bar2[4]+"</td><td id='tabd5'>"+bar2[5]+"</td><td id='tabd6'>"+bar2[6]+"</td></tr>";
else f1=f1+"<tr><td>"+bar2[1]+"</td><td>"+bar2[2]+"</td><td>"+temp3st+"</td><td>"+bar2[4]+"</td><td>"+bar2[5]+"</td><td style='width:250px;'>"+bar2[6]+"</td></tr>";
}
}
f1=f1+"</tbody></table></div></div>";
//<br><a href='x_oplzap.php?time="+firmop+"&b="+datatop+"'><img src='excel.png' width='30' height='30'></a>";
  }
myDiv.innerHTML=f1;
popravka=0;
}

else if(reala=="pricered"){
if(html=="@@@@@@@@@@@") alert("Ошибка NWP1186");
else{
var barva=html.split("@");
if(barva[1]=="EEEEEE"){
	document.getElementById("jogi"+barva[2]).style['display']='none';
} else{
	try {
var objt=document.getElementById(barva[0]+barva[2]);
	objt.style['border']='none';
	objt.style.background="none";
	} catch (m) {}
if(barva[1]=="WWWWW"){
	try {objt.value="";}
	catch (m) {}
	alert(barva[3]);
} 

else {
var objt=document.getElementById(barva[0]+barva[2]);
	objt.value=barva[1];
}}}
}

else if(reala=="trudorex"){
var bar=html.split("|");
document.getElementById("protrud"+bar[1]).value=bar[0];
document.getElementById("protrud"+bar[1]).style['color']="blue";
}

else if(reala=="oplperw"||reala=='oplper'){
  if(html=="GGGGGGGGGG") {f1="<br /><h2>За данный период у данного клиента оплаты не было</h2><br />";slon=0;}
  else if(html=="HHHHHHHHHHHH") {f1="<br /><h2>За данный период с данным клиентом операций не было</h2><br />";slon=0;}
  else {
  var barva=html.split("^");
for(i=0;i<barva.length;i++){
bar2=barva[i].split("|");
if(i==0){
  f1='<input type="hidden" id="numth" value="7"><br /><h2>';
  if(reala=="oplperw") f1=f1+'Оплата за период';
  else f1=f1+'Операции за период';
  f1=f1+'<a href="x_oplzap.php?time='+bar2[0]+"&b="+bar2[1]+'" target="xls"><i class="icon-link-1"></i> экспорт в Excel</a></h2><br /><div class="outer"><div class="innera"><table id="exampleG"  class="tablesorter" border="0" cellpadding="0" cellspacing="1"><thead><tr id="thidwidth"><th id="tabh1">Дата<th id="tabh2">Контрагент<th id="tabh3">Сумма, руб.<th id="tabh4">Основание<th id="tabh5">Примечание<th id="tabh6">Менеджер<th id="tabh7">Способ оплаты</tr></thead><tbody>'+
  '<tr style="display:none"><td>2012-03-03</td><td> </td><td>1</td><td>1</td><td> </td><td> </td><td> </td></tr>';
}
else {
/*if(isNaN(bar2[3])) temp3st=bar2[3];
else temp3st=parseFloat(bar2[3]).toFixed(2);
temp3st=bar2[3];*/
if(bar2[3]!="Не разнесено") temp3st="<a href='#' onclick='deleteoplata(\""+bar2[7]+"\",\""+bar2[0]+"\",\""+bar2[1]+"\",\""+bar2[2]+"\");' title='поставить оплату как неразнесенную'/>"+bar2[3]+"</a>";
else temp3st=bar2[3];
if(i==1) f1=f1+"<tr id='tdidwidth'><td id='tabd1'>"+bar2[0]+"</td><td id='tabd2'>"+bar2[1]+"</td><td id='tabd3'>"+parseFloat(bar2[2]).toFixed(2)+"</td><td id='tabd4'>"+temp3st+"</td><td id='tabd5'>"+bar2[4]+"</td><td id='tabd6'>"+bar2[5]+"</td><td id='tabd7'>"+bar2[6]+"</td></tr>";
else f1=f1+"<tr><td>"+bar2[0]+"</td><td style='width:250px;'>"+bar2[1]+"</td><td>"+parseFloat(bar2[2]).toFixed(2)+"</td><td style='width:90px;'>"+temp3st+"</td><td style='width:150px;'>"+bar2[4]+"</td><td>"+bar2[5]+"</td><td>"+bar2[6]+"</td></tr>";
}
}
f1=f1+"</tbody></table></div></div>";
//<br><a href='x_oplzap.php?time="+firmop+"&b="+datatop+"'><img src='excel.png' width='30' height='30'></a>";
  }
myDiv.innerHTML=f1;
popravka=0;
}
else if(reala=='osnr'||reala=='dopr'||reala=='stal'){
	var use=html.split("^");
	
	if(document.getElementById("izdopr"+use[0]) && document.getElementById("izdopr"+use[0]).className=="icon-lock redi") var lock1=1; else var lock1=0;
	if(document.getElementById("izstal"+use[0]) && document.getElementById("izstal"+use[0]).className=="icon-lock redi") var lock2=1; else var lock2=0;
	
	if(reala=='osnr') {document.getElementById("divdopr"+use[0]).innerHTML="";document.getElementById("divstal"+use[0]).innerHTML="";
	document.getElementById("lockdopr"+use[0]).innerHTML="";document.getElementById("lockstal"+use[0]).innerHTML="";}
	
	else if(reala=='dopr' && lock2==0) {document.getElementById("divstal"+use[0]).innerHTML="";document.getElementById("lockstal"+use[0]).innerHTML="";}
	else if(reala=='stal' && lock2==0) document.getElementById("lockstal"+use[0]).innerHTML="<i id='izstal"+use[0]+"' onclick='closeiz(this);' class='icon-lock-open grii'></i>";
	if(use[3].length<2 && use[2]=="end") uslugpr(use[1],use[0]);
	
	
	else if(reala=='dopr' && lock1==1 && lock2==1) uslugpr(use[1],use[0]);
	else if(reala=='dopr' && lock1==1) smotrz('stal',realb+"&numkat="+use[0]+"&osnr="+encodeURIComponent(document.getElementById("osnr"+use[0]).value)+"&dopr="+encodeURIComponent(document.getElementById("dopr"+use[0]).value));
	else if(reala=='stal' && lock2==1) uslugpr(use[1],use[0]);
	
	else{
	var tabl=use[3].split("|");
	var todis="<option value=''></option>";
		var usa0=reala+use[0];
		if (document.getElementById(usa0)) {var d=document.getElementById(usa0); d.innerHTML="<option value=''>Загрузка...</option>";}
		else {var d = document.createElement('select');
		d.className='smotr8';d.id=usa0;
		document.getElementById("div"+usa0).appendChild(d);
		}
for(i=0;i<tabl.length-1;i++){
	todis=todis+"<option value='"+tabl[i]+"'>"+tabl[i]+"&nbsp;&nbsp;&nbsp;</option>";
}
	d.innerHTML=todis;
	if(use[2]=="end") {
		d.setAttribute("onchange","uslugpr('"+use[1]+"','"+use[0]+"');");		
		}
	else{
		if(reala=='osnr') d.setAttribute("onchange","smotrz('dopr','"+realb+"&osnr='+encodeURIComponent(document.getElementById(\"osnr"+use[0]+"\").value));");
		else if(reala=='dopr') {d.setAttribute("onchange","smotrz('stal','"+realb+"&dopr='+encodeURIComponent(document.getElementById(\"dopr"+use[0]+"\").value));");
		document.getElementById("lockdopr"+use[0]).innerHTML="<i id='izdopr"+use[0]+"' onclick='closeiz(this);' class='icon-lock-open grii'></i>";}
		}
	}
}

else if(reala=="datapr"){
	var use=html.split("*");
	if(use[0].length==10){
	var c=upupdate.parentNode;
	var cc=c.previousSibling;
	var ccc=cc.previousSibling;
	if(use[1]!="none") { cc.innerHTML=use[1];}
	ccc.innerHTML=use[0];
	ccc.title=use[0];	
	upupdate.text=use[0];
	} else alert(html);
	}
else if(reala=="nezzdelpostav"){
//alert(html);
myDiv.innerHTML='<table id="tabletable"></table><div id="tabletablePager"></div><div id="filter" style="margin-left:30%;display:none">Search Invoices</div>';
to_table(html);
}
else if(reala=="dostavka"){
if(html!="HHHHHHHHHHH"){
editourl="rabsila.php?edit=edit";
myDiv.innerHTML='<table id="tabletable"></table><div id="tabletablePager"></div><div id="filter" style="margin-left:30%;display:none">Search Invoices</div>';
to_table(html);
}
else alert("Результат выборки превышает 300 строк. Выберайте меньший период просмотра.");
}

else if(reala=="zakazoktoprih"){
	if(html=="error") alert("Ошибка DCDS-9. Заявка не помечена как заказанная.");
	else{
		document.getElementById("obzx"+realb).innerHTML=document.getElementById("obzx"+realb).innerHTML+" <font color='red'>ЗАКАЗАНО СЕГОДНЯ</font>";
	}
}
				
else if(reala=="rabsila" || reala=="auto" || reala=="drivers"){
if(reala=="rabsila") editourl="rabsila.php?edit=edit";
else if(reala=="auto" || reala=="drivers") editourl="autohoz.php?edit=edit&table="+reala;
myDiv.innerHTML='<table id="tabletable"></table><div id="tabletablePager"></div><div id="filter" style="margin-left:30%;display:none">Search Invoices</div>';
to_table(html);
}
else if(reala=="logistikOLD"){
var use=html.split("^");

var resulete="<br /><h2>График доставок "+use[0]+"<a href='x_logistik.php?b="+realb+"&time="+document.getElementById('exampleRange').value+"'><i class='icon-link-1'></i> Данные в Excel</a></h2><br /><input type='hidden' id='endornot' value='0'><div id='chekino' class='chekini' style='display:none'></div><input type='hidden' id='idvedom'>"+
"<input type='hidden' id='vedidque'><input type='hidden' id='chidque'>"+
"<table><thead><tr><th> <th class='mang'>Дата<th class='mang'>Клиент<th class='mang'>Адрес<th class='mang'>Телефон<th class='mang'>Менеджер<th class='mang'>Счета"+
"<th class='mang'>Оплата<th class='mang'>Ведомости<th class='mang'>Тоннаж<th class='mang'>Создал ПЛ<th class='mang'>Маршрут<th class='mang'>Комментарий<th class='admn'>км на конец<th class='admn'>ГСМ на конец<th class='admn'>Расход"+
"<th class='admn'>Цена литра<th class='admn'>Стоимость<th class='admn'>Норма списания<th class='admn'>Остаток в баке<th class='admn'>Мотивация<th class='admn'>Доп.Мотивация</tr></thead><tbody>";

//['id']['data']['sokrname']['adres']['telf']['idschek']['numchek']['manager']['login']['oplatainchek']['idsvedom']['numved']['tonnag']['aktual']['prih']['kmnakonec']['marshrut']['komment']['marshrut0']
//  0		1		2			3		4			5			6		7		8				9			10			11		12			13		14		15				16			17			18
if(use[2].length>5){
var tabl=use[2].split("~");
for(i=0;i<tabl.length;i++){
	var rows=tabl[i].split("|");
	if(tabl[i].length>5) {resulete=resulete+"<tr id='loggg"+rows[0]+"'";
	if(rows[13]=="0") resulete=resulete+" style='background-color: #484512;' title='"+rows[14]+"'><td title='"+rows[14]+"'><i class=\"icon-cancel\" title='"+rows[14]+"'></i>";
	else{
	resulete=resulete+"><td>";
	if(use[3]==2) resulete=resulete+"<i class='icon-trash' onclick='privatedellogi("+rows[0]+");' title='Отменить доставку' style='cursor: pointer;'></i>";}
	while (rows[10].search(',')!=-1) rows[10]=rows[10].replace(',', '.');
	while (rows[5].search(',')!=-1) rows[5]=rows[5].replace(',', '.');
	resulete=resulete+"</td><td>"+rows[1]+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='putelistOLD.php?id="+rows[0]+"' title='Путевой лист в Excel'><i class='icon-link-1'></i></a></td><td>"+rows[2]+"</td><td>"+rows[3]+
	"</td><td>"+rows[4]+"</td><td>"+rows[7]+"</td><td><a href='index.php?smotrchekid=ok&biis="+rows[5]+"' target='_blank'>"+rows[6]+"</a></td><td>"+rows[9]+"</td>";
	if(rows[10]=="" && rows[13]==1) resulete=resulete+"<td colspan='2'><input type='button' class='butto' style='width: auto;' value='Внести ведомости' onclick='samsonjak("+rows[0]+");'></td><td>"+rows[8]+
	"</td><td><textarea id='marshrut_log_"+rows[0]+"' onchange='smotrz(\"marshrut\","+rows[0]+");' placeholder='Погрузка'>"+
	rows[16]+"</textarea><br><textarea id='marshrut0_log_"+rows[0]+"' onchange='smotrz(\"marshrut0\","+rows[0]+");' placeholder='Разгрузка'>"+
	rows[18]+"</textarea></td><td><textarea  id='komm_log_"+rows[0]+"' onchange='smotrz(\"komalogtik\","+rows[0]+");'>"+rows[17]+"</textarea></td>";
	else {resulete=resulete+"<td><a href='index.php?"; if(rows[10].indexOf("**")!=-1){rows[10]=rows[10].replace('**', ''); resulete=resulete+"smotraktid";}
	else resulete=resulete+"smotrvedomid";
	resulete=resulete+"=ok&biis="+rows[10]+"' target='_blank'>"+rows[11]+"</a></td><td>"+rows[12]+"</td><td>"+rows[8]+"</td><td>"+rows[16]+" - "+rows[18]+"</td><td>"+rows[17]+"</td>";}/*wwwww*/
	if(rows[15]=="" && rows[10]!="" && rows[13]==1) resulete=resulete+'<td><input class="butto" type="button" onclick="lastlogikadd('+rows[0]+');" value="Внести данные" style="width: auto;"></td>';
	else resulete=resulete+"<td>"+rows[15]+"</td>";
	resulete=resulete+"</tr>";}
}
}
resulete=resulete+"</tbody></table>";
myDiv.innerHTML=resulete;
if(use[3]==2) $(document).ready(function(){ $('#exampleY').attachDatepicker(); });
}
else if(reala=="logistik"){
var use=html.split("^");
var resulete="<br /><h2>График доставок "+use[0]+"<a href='x_logistik.php?b="+realb+"&time="+document.getElementById('exampleRange').value+"'><i class='icon-link-1'></i> Данные в Excel</a></h2><br /><input type='hidden' id='endornot' value='0'><div id='chekino' class='chekini' style='display:none'></div><input type='hidden' id='idvedom'>"+
"<input type='hidden' id='vedidque'><input type='hidden' id='chidque'>"+
"<table><thead><tr><th> <th class='mang'>Дата <th class='mang'>Водитель<th class='mang'>Клиент<th class='mang'>Адрес<th class='mang'>Телефон<th class='mang'>Менеджер<th class='mang'>Счета"+
"<th class='mang'>Оплата<th class='mang'>УПД<th class='mang'>Тоннаж<th class='mang'>Создал ПЛ<th class='mang'>Маршрут<th class='mang'>Комментарий<th class='admn'>км на конец<th class='admn'>ГСМ на конец<th class='admn'>Расход"+
"<th class='admn'>Цена литра<th class='admn'>Стоимость<th class='admn'>Норма списания<th class='admn'>Остаток в баке<th class='admn'>Мотивация<th class='admn'>Доп.Мотивация</tr></thead><tbody>";

//['id']['data']['sokrname']['adres']['telf']['idschek']['numchek']['manager']['login']['oplatainchek']['idsvedom']['numved']['tonnag']['aktual']['prih']['kmnakonec']['marshrut']['komment']['vodila']['marshrut0']
//  0		1		2			3		4		5			6			7		8			9				10			11		12		13			14			15			16			17		18			19
var cevod=use[4].split("|");
var optivod="";
for(i=0;i<cevod.length;i++){
if(cevod[i].length>1) {var ss90=cevod[i].split("~"); optivod+="<option value='"+ss90[0]+"'>"+ss90[1]+"</option>";}
}
	
if(use[2].length>5){
var tabl=use[2].split("~");
for(i=0;i<tabl.length;i++){
	var rows=tabl[i].split("|");
	if(tabl[i].length>5) {resulete=resulete+"<tr id='loggg"+rows[0]+"'";
	if(rows[13]=="0") resulete=resulete+" style='background-color: #484512;' title='"+rows[14]+"'><td title='"+rows[14]+"'><i class=\"icon-cancel\" title='"+rows[14]+"'></i>";
	else{
	resulete=resulete+"><td>";
	if(use[3]==2) resulete=resulete+"<i class='icon-trash' onclick='privatedellogi("+rows[0]+");' title='Отменить доставку' style='cursor: pointer;'></i>";}
	while (rows[10].search(',')!=-1) rows[10]=rows[10].replace(',', '.');
	while (rows[5].search(',')!=-1) rows[5]=rows[5].replace(',', '.');
	resulete=resulete+"</td><td>"+rows[1]+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='putelist.php?id="+rows[0]+"' title='Путевой лист в Excel'><i class='icon-link-1'></i></a></td><td>"+
	rows[18]+"</td><td>"+rows[2]+"</td><td>"+rows[3]+
	"</td><td>"+rows[4]+"</td><td>"+rows[7]+"</td><td><a href='index.php?smotrchekid=ok&biis="+rows[5]+"' target='_blank'>"+rows[6]+"</a></td><td><a id='rrr"+rows[0]+"' href='javascript:chagepriceedit(\""+rows[0]+"\",\""+rows[6]+"\");'>"+rows[9]+"</a></td>";
	if(rows[10]=="" && rows[13]==1) resulete=resulete+"<td colspan='2'><input type='button' class='butto' style='width: auto;' value='Внести УПД' onclick='samsonjak("+rows[0]+");'></td><td>"+rows[8]+
	"</td><td><textarea id='marshrut_log_"+rows[0]+"' onchange='smotrz(\"marshrut\","+rows[0]+");' placeholder='Погрузка'>"+
	rows[16]+"</textarea><br><textarea id='marshrut0_log_"+rows[0]+"' onchange='smotrz(\"marshrut0\","+rows[0]+");' placeholder='Разгрузка'>"+
	rows[19]+"</textarea></td><td><textarea  id='komm_log_"+rows[0]+"' onchange='smotrz(\"komalogtik\","+rows[0]+");'>"+rows[17]+"</textarea></td>";
	else {resulete=resulete+"<td><a href='index.php?"; if(rows[10].indexOf("**")!=-1){rows[10]=rows[10].replace('**', ''); resulete=resulete+"smotraktid";}
	else resulete=resulete+"smotrchf";
	resulete=resulete+"=ok&biis="+rows[10]+"' target='_blank'>"+rows[11]+"</a></td><td>"+rows[12]+"</td><td>"+rows[8]+"</td><td>"+rows[16]+" - "+rows[19]+"</td><td>"+rows[17]+"</td>";}/*wwwww*/
	if(rows[15]=="" && rows[10]!="" && rows[13]==1) resulete=resulete+'<td><input class="butto" type="button" onclick="lastlogikadd('+rows[0]+');" value="Внести данные" style="width: auto;"></td>';
	else resulete=resulete+"<td>"+rows[15]+"</td>";
	resulete=resulete+"</tr>";}
}
}
//<td><img width='10' height='10' src='del.png' onclick='smotrz(></td>
//<td></td>



if(use[3]==2){
resulete=resulete+"<tr id='renta'><td></td><td><input name='exampleY' style='width:80px' id='exampleY' type='text' value='Ввод даты'></td>"+
	"<td><select id='newvodila' style='width: 190px;'><option> </option>"+optivod+"</select></td>";
resulete=resulete+'<td id="newfi"><input style="width: 200px;height:21px;" type="text" id="klien" onblur="document.getElementById(\'scroll\').style[\'height\']=\'0\';smotrz(\'logi_0\',this.value);" onfocus="init(\'klien\',\'scrq\',\'suggq\')" onkeyup = "handleKeyUp(event)" placeholder="Наименование контрагента"/>'+
	'<div id="scrq" class="scroll" style="width: 200px;"><div id="suggq" class="suggest"></div></div></td>';
tarasfiltr=use[1];
resulete=resulete+"<td class='mang' id='adresold'>Адрес</td><td class='mang' id='telold'>Телефон</td><td class='mang' id='menold'>Менеджер</td><td class='mang' id='cheold'>Счета"+
"</td><td class='mang'><input type='text'  id='oplold' style='width:60px' value='Оплата'></td><td class='mang' id='vedold'>УПД</td><td class='mang' id='tonold'>Тоннаж</td><td class='mang'>Создал ПЛ</td><td class='mang'><input type='text' id='mashrooms' value='' placeholder='Погрузка'><br><input type='text' id='mashrooms0' value='' placeholder='Разгрузка'></td><td class='mang'>Коммента́рий</td><td class='admn'>км на конец</td><td class='admn'>ГСМ на конец</td><td class='admn'>Расход"+
"</td><td class='admn'>Цена литра</td><td class='admn'>Стоимость</td><td class='admn'>Норма списания</td><td class='admn'>Остаток в баке</td><td class='admn'>Мотивация</td><td class='admn'>Доп.Мотивация</tr></tbody></table>"+
"<input type='hidden' id='buut' class='butto' style='margin-left:500px;' value='Добавить и вывести путевой лист' onclick='privatelogi_3(1);'>"+
"<input type='hidden' id='buuttwo' class='butto' style='margin-left:500px;' value='Внести УПД' onclick='privatelogi_3(2);'>"+
"<input type='hidden' id='buut3' class='butto' style='margin-left:500px;' value='Сохранить и вывести путевой лист' onclick='privatelogi_3(3);'>"+
"<input type='hidden' id='buut4' class='butto' style='margin-left:500px;' value='Внести УПД и вывести путевой лист' onclick='smotrz(\"okokend\",document.getElementById(\"endornot\").value+\"&ton=\"+document.getElementById(\"tonoldnew\").innerHTML+\"&vednum=\"+document.getElementById(\"vedoldnew\").innerHTML+\"&vedid=\"+document.getElementById(\"idvedom\").value);'>";
} else resulete=resulete+"</tbody></table>";
myDiv.innerHTML=resulete;
if(use[3]==2) $(document).ready(function(){ $('#exampleY').attachDatepicker(); });
}
else if(reala=="calltreadtel"){
	if(html!="0") document.getElementById('calltanswer').innerHTML=" Calltouch ID="+html;
	else document.getElementById('calltanswer').innerHTML="";
}
else if(reala=='numdatadog'){alert(html);fpole=-7;}

else if(reala=='okokend'){
	if(html=="0") alert("LOG 234. Ошибка создания путевого листа.");
	else location.href="index.php?putelist="+html;
}

else if(reala=='newposajax'){
var shiri="stoshiri";

if (document.getElementById(shiri)) {
	d = document.getElementById(shiri);
	d.style['display']="block";
	} 
	else {
d = document.createElement('div');
d.id=shiri;
document.body.appendChild(d);
	}
d.innerHTML='<div id="menushirinam">Создайте новую позицию<div id="krestbig"><a onclick="document.getElementById(\''+
shiri+'\').style[\'display\']=\'none\';" href="#"><b>   X   </b></a></div></div><div id="cleapolos"></div>'+html;		
}

else if(reala=='newposajaxgo'){
var use=html.split("@");
if(use[0]=="error") alert(use[1]);
else {
	document.getElementById('stoshiri').style['display']='none';
	document.getElementById('oldname'+use[2]).innerHTML=use[1];
	document.getElementById('nai'+use[2]).value=use[1];
}
}

else if(reala=="dellogik"){
	if(html=="2") document.getElementById('loggg'+realb).style.background="#484512";
	else if(html=="1") alert("Ошибка на стороне сервера NWP 1236/LOG 139. Обратитесь к Администратору.");
	else alert("Ошибка Доступа! NWP 1237.");
}
else if(reala=="logi_1" || reala=="logi_all" || reala=="logi_allall"
|| reala=="logi_0" || reala=="logi_0all" || reala=="logi_0allall"){
document.getElementById("idvedom").value="";
if(html.length<6) {document.getElementById('chekino').style['display']='none';alert("Нет данных!");}
else{
var err=0;
var use=html.split("^");
if(reala!="logi_1"){
var klie=use[0].split("|");
if(klie[0].length>1){
resulete="<select id='adres'><option value='"+klie[0]+"'>"+klie[0]+"</option>";
if(use[1].length>1) {
	var klie1=use[1].split("|");
	for(i=0;i<klie1.length;i++){
		if(klie1[i].length>1) resulete=resulete+"<option value='"+klie1[i]+"'>"+klie1[i]+"</option>";
	}
}
resulete=resulete+"</select>";
document.getElementById('adresold').innerHTML=resulete;
} else {alert("Заполните строку 'Фактический адрес' в карточке клиента."); err++;}

if(klie[1].length>1){
resulete="<select id='tel'><option value='"+klie[1]+"'>"+klie[1]+"</option>";
if(use[2].length>1) {
	var klie2=use[2].split("|");
	for(i=0;i<klie2.length;i++){
		if(klie2[i].length>1) resulete=resulete+"<option value='"+klie2[i]+"'>"+klie2[i]+"</option>";
	}
}
resulete=resulete+"</select>";
document.getElementById('telold').innerHTML=resulete;
} else {alert("Заполните строку 'Телефон/факс' в карточке клиента."); err++;}

if(klie[2].length>1){
document.getElementById('menold').innerHTML=klie[2];	
} else {alert("Закрепите Менеджера за клиентом."); err++;}
}
if(err>0) location.href="index.php?a=redakklque&b="+realb;
else{
if(use[3]=="NONE") alert("Нет ни одного счета у этого клиента.");
else{
//$row['nambercs']."|".date($row['data'])."|".$row['numnak']."|".$row['idnak']."|"."~";
var ciks=use[3].split("~");
if(reala=="logi_1" || reala=="logi_all" || reala=="logi_allall") var textciki="<br><h2>Выбор УПД на доставку</h2><br><table><tr><th>Счета<th>УПД</tr><tbody>";
else if(reala=="logi_0" || reala=="logi_0all" || reala=="logi_0allall") var textciki="<br><h2>Выбор Счетов на доставку</h2><br><table><tr><th>Счета<th>УПД</tr><tbody>";
for(i=0;i<ciks.length;i++){
	if(ciks[i].length>1){
	var ciksos=ciks[i].split("|");
	var vednamber=ciksos[2].split(",");
	var vedid=ciksos[3].split(",");
	var vedineer="";
	for(j=0;j<vednamber.length;j++){
		if(vednamber[j].length>0) {
			if(vedid[j].indexOf("**")!=-1) {vednamber[j]=vednamber[j].replace('**', 'Акт № ');} else vednamber[j]='№ '+vednamber[j];
			if(reala=="logi_1" || reala=="logi_all" || reala=="logi_allall") vedineer=vedineer+"<input type='checkbox' onchange='privatelogi_1(\""+vedid[j]+"\", this);'> "+vednamber[j]+"<br>";
			else if(reala=="logi_0" || reala=="logi_0all" || reala=="logi_0allall") {vedineer=vedineer+vednamber[j]+"<br>"; }
		}
	}
	if(reala=="logi_1" || reala=="logi_all" || reala=="logi_allall") textciki=textciki+"<tr><td>№ "+ciksos[0]+" от "+ciksos[1]+"</td><td>"+vedineer+"</td></tr>";
	else if(reala=="logi_0" || reala=="logi_0all" || reala=="logi_0allall") textciki=textciki+"<tr><td><input type='checkbox' onchange='privatelogi_1(\""+ciksos[4]+"\", this);'> № "+ciksos[0]+" от "+ciksos[1]+"</td><td>"+vedineer+"</td></tr>";
}
}
textciki=textciki+"</tbody></table>";
if(use[4]=="more") textciki=textciki+"<input type='button' id='button6' onclick='smotrz(\"logi_0all\",\""+realb+"\");' value='Показать больше данных'>";
else if(use[4]=="allmore") textciki=textciki+"<input type='button' id='button6' onclick='smotrz(\"logi_0allall\","+realb+");' value='Показать еще больше данных'>";
textciki=textciki+"<br><input type='button' id='button6' onclick='";
if(reala=="logi_1" || reala=="logi_all" || reala=="logi_allall") textciki=textciki+"privatetwologi_1(2);";
else if(reala=="logi_0" || reala=="logi_0all" || reala=="logi_0allall")textciki=textciki+"privatetwologi_1(1);";
textciki=textciki+"' value='Сохранить выбор' style='margin-left: 333px;'><br><br><br><br><br><br>";
document.getElementById('chekino').innerHTML=textciki;
document.getElementById('chekino').style['display']='block';
}}
}
}



else if(reala=='logi_under2'){
if(html=="HHHHHHHHHHHHHHHHHHHHHH")  {alert("Ошибка NWP-1291. Сообщите Администратору.");}
else if(html=="") {
document.getElementById('cheold').innerHTML="";
document.getElementById('oplold').value="";
}
else{	
var zorro=html.split("^");	
document.getElementById('cheold').innerHTML=zorro[0];
document.getElementById('oplold').value=zorro[2];
document.getElementById('vedidque').value=zorro[1];
if(document.getElementById('exampleY').value.length!=10) alert("Поле даты не заполнено");
	document.getElementById('buut').type='button';
	document.getElementById('buuttwo').type='button';}
}

else if(reala=='addtextcomproiz'){
if(html=="HHHH") alert("Ошибка NJS1400. Комментарий добавить не удалось.");	
else {
var ciksos=html.split("~~");
if(ciksos[1].length>13) var minya=ciksos[1].substring(0,10)+"..."; else minya=ciksos[1];	
document.getElementById('hfefca'+ciksos[0]).text=minya;
}
}

else if(reala=="newfiltr") {
to_title_filter();
if(html.length>9){
var ttemp=document.getElementById("modidalarm");
var zorro=ttemp.innerHTML.split("|");
document.getElementById("exampleRange").value=html;
html="<strong>"+html+"</strong> |"+zorro[1]+"|"+zorro[2];
ttemp.innerHTML=html;
//ttemp.title=zorro[1];
if(realb==1 && frt1.length>0 && frt2.length>0) smotrz(frt1, frt2);
}}

else if(reala=='logi_2'){
if(html=="HHHHHHHHHHHHHHHHHHHHHH")  {alert("Ошибка NWP-1291. Сообщите Администратору.");}
else if(html=="") {
document.getElementById('cheold').innerHTML="";
document.getElementById('oplold').value="";
document.getElementById('vedold').innerHTML="";
document.getElementById('tonold').innerHTML="";}
else{	
var zorro=html.split("^");
if(document.getElementById('endornot').value!=0){
document.getElementById('vedoldnew').innerHTML=zorro[2];
document.getElementById('tonoldnew').innerHTML=zorro[3];
while (zorro[4].search('id=')!=-1) zorro[4]=zorro[4].replace("id=","");
while (zorro[4].search(' or ')!=-1) zorro[4]=zorro[4].replace(" or ",",");
document.getElementById('idvedom').value=zorro[4];
document.getElementById('buut4').type='button';
}
else{
document.getElementById('cheold').innerHTML=zorro[0];
//document.getElementById('oplold').value=zorro[1];
document.getElementById('vedold').innerHTML=zorro[2];
document.getElementById('tonold').innerHTML=zorro[3];
document.getElementById('vedidque').value=zorro[4];document.getElementById('chidque').value=zorro[5];
if(document.getElementById('exampleY').value.length!=10) alert("Поле даты не заполнено");
{document.getElementById('buut').type='button';document.getElementById('buuttwo').type='button';}
}}
}

else if(reala=="agentnumchek"){
	if(html=="1"){
		document.getElementById("dh73").innerHTML='<i class="icon-ok gr"></i>';
	}
	else{
		document.getElementById("dh73").innerHTML='<i class="icon-cancel rd"></i>';
		alert("Агента с таким номером не существует!");
	}
}

else if(reala=="newcabzap") {
document.getElementById(realtocc).style.opacity="1";
var dds8=new Array();
dds8=viborvidpriem(html);
document.getElementById(realtocc).innerHTML=dds8[0];//alert(555554);
document.getElementById("market").innerHTML=dds8[1];
}

else if(reala=="nezzdel"){
if(html=="HHHHHHHHHHHHHHHHHHHHHH")  {f1="<br /><h2>Нет незавершенных сделок</h2>";slon=0;}
else{
var barva=html.split("^");
for(i=0;i<barva.length;i++){
bar2=barva[i].split("|");
if(i==0){
f1='<input type="hidden" id="numth" value="11"><br /><h2>Незавершенные сделки <a href="x_nezzdel.php?time='+bar2[0]+"&b="+bar2[1]+'" target="xls"><i class="icon-link-1"></i> экспорт в Excel</a></h2><br /><div class="outer"><div class="innera"><table id="exampleG" class="tablesorter" border="0" cellpadding="0" cellspacing="1"><thead><tr id="thidwidth"><th id="tabh1">№<th id="tabh2">Обоз<th id="tabh3">Клиент<th id="tabh4">Счет<th id="tabh5">Дата счета<th id="tabh6">Сумма счета<th id="tabh7">Оплата<th id="tabh8">С/Ф<th id="tabh9">Сумма С/Ф<th id="tabh10">Менеджер<th id="tabh11">Город</tr></thead><tbody>'+
'<tr style="display:none"><td>1</td><td> </td><td> </td><td>1</td><td>01-03-0212</td><td>1</td><td>1</td><td>1</td><td>1</td><td> </td><td> </td></tr>';
}
else {
if(i==1) f1=f1+"<tr id='tdidwidth'><td id='tabd1'>"+i+"</td><td id='tabd2'>"+bar2[0]+"</td><td id='tabd3'>"+bar2[1]+"</td><td id='tabd4'><a href='x_schet.php?id="+bar2[2]+"' target='_blank'>"+bar2[3]+"</a></td><td id='tabd5'>"+bar2[4]+"</td><td id='tabd6'>"+parseFloat(bar2[5]).toFixed(2)+"</td><td id='tabd7'>"+parseFloat(bar2[6]).toFixed(2)+"</td><td id='tabd8'>"+bar2[7]+"</td><td id='tabd9'>"+parseFloat(bar2[8]).toFixed(2)+"</td><td id='tabd10'>"+bar2[9]+"</td><td id='tabd11'>"+bar2[10]+"</td></tr>";
else f1=f1+"<tr><td>"+i+"</td><td>"+bar2[0]+"</td><td>"+bar2[1]+"</td><td><a href='x_schet.php?id="+bar2[2]+"' target='_blank'>"+bar2[3]+"</a></td><td>"+bar2[4]+"</td><td>"+parseFloat(bar2[5]).toFixed(2)+"</td><td>"+parseFloat(bar2[6]).toFixed(2)+"</td><td>"+bar2[7]+"</td><td>"+parseFloat(bar2[8]).toFixed(2)+"</td><td>"+bar2[9]+"</td><td>"+bar2[10]+"</td></tr>";
}
}
f1=f1+"</tbody></table></div></div>";
//<br><a href='x_nezzdel.php?time="+firmop+"&b="+datatop+"'><img src='excel.png' width='30' height='30'></a>";  
}
myDiv.innerHTML=f1;
popravka=0; 
}

else if(reala=="adovkoment"){
document.getElementById('viborgruzopol').style['display']='none';
var barva=html.split("|");
if (document.getElementById('colobok'+barva[0])) document.getElementById('colobok'+barva[0]).innerHTML=barva[1];
else alert("Общий комментарий сохранен.");
}

else if(reala=="deloprim"){
document.getElementById('colobok'+realb).innerHTML="<a href='#' onClick='prtxrt("+realb+");'>нет</a>";
}

else if(reala=="sootvetzaych"){
if(html=="@@@@@@@@")  {f1="<br /><h2>Нет данных</h2>";slon=0;}
else{
f1=''; var ss=1;
var grug=""; var status=""; var deystv="";
var barva=html.split("^");
var kom="";
for(i=0;i<barva.length;i++){
bar2=barva[i].split("|");
if(i==0) var idchek=bar2[0];
else {
if(i==1 || grug!=bar2[6]+"**"+bar2[2]+"***"+bar2[8]) {
  if(i!=1) f1=f1+kom+deystv+"</table><br /><br />";
if(bar2[4]==1) {status="оприходована"; deystv="";}
else if(bar2[4]=="0") {status="не оприходована"; deystv="";}
else {status="не оформлена"; deystv="<tr><td colspan='4' id='svbut"+ss+"'><input type='button' value='Оформить' id='button6' onclick='smotrz(";
if(bar2[10]>0){
if(bar2[9].length<1) bar2[9]="<a href='#' onClick='prtxrt("+bar2[5]+");'>нет</a>";
else if(bar2[10]>1) bar2[9]=bar2[9]+"&nbsp;&nbsp;&nbsp;<a href='#' onclick='smotrz(\"deloprim\","+bar2[5]+");'>удалить</a>";
kom="<tr><td colspan='4' id='chelsiaj"+ss+"'>";
if(status=="не оформлена" && bar2[3]>0) kom+="Общий комментарий к заказу: <span id='colobok"+bar2[5]+"'>"+bar2[9]+"</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;"+bar2[11];
kom+="</td></tr>";
}
if(bar2[6]!="Производство") deystv=deystv+"\"ajaxofzaya\"";
else {deystv=deystv+"\"ajaxofzayaprvo\""; if(bar2[3]>0 && bar2[4]!=2) {status="не готова"; deystv="";} else if(bar2[4]==2) {status="готова"; deystv="";}}
if(deystv!="") deystv=deystv+", \"&zayachek="+
idchek+"&sklad="+bar2[2]+"&postav="+bar2[7]+"&svazka="+ss+"\");'></td></tr>";}
f1=f1+'<table><CAPTION>Поставщик: '+bar2[6]+". Заявка";
if(status!="не оформлена") {if(bar2[6]=="Производство") f1=f1+' № '+bar2[8]; else f1=f1+' № <a href="#" onclick="smotrz(\'oplata\',\'&idchek='+idchek+'\');">'+bar2[8]+"</a>";}
f1=f1+" <span id='svzka"+ss+"'>"+status+'</span>';
if(bar2[6]=="Производство" && status!="не оформлена") f1=f1+'<a href="x_proizvodstvonow.php?id='+bar2[5]+'" target="xls" style="margin-left:15px; font-size:12px; font-weight:normal"><i class="icon-link-1"></i> Заказ в Excel</a>';
else if(status!="не оформлена") f1=f1+'<a href="x_zayasklad.php?n='+bar2[5]+'" target="xls" style="margin-left:15px; font-size:12px; font-weight:normal"><i class="icon-link-1"></i> Заказ в Excel</a>';
f1=f1+'</CAPTION><tr><th>Товар</th>';
if(cookk=="sun") f1=f1+'<th>Длина,м</th><th>Ширина,м</th><th>Штуки</th>';
f1=f1+'<th>Кол-во в счете</th><th>Кол-во в заявке</th><th>Склад</th></tr>';
grug=bar2[6]+"**"+bar2[2]+"***"+bar2[8];
ss++; 
}
if((bar2[1]-bar2[3])!=0 && status!="не оформлена") deystv="<tr><td colspan='4'>разногласия по количеству</td></tr>";
f1=f1+"<tr><td>"+bar2[0]+"</td>";
if(cookk=="sun") f1=f1+'<td>'+bar2[13]+'</td><td>'+bar2[14]+'</td><td>'+bar2[12]+'</td>';
f1=f1+"<td>"+bar2[1]+"</td><td>"+bar2[3]+"</td><td>"+bar2[2]+"</td></tr>";
}
}
f1=f1+kom+deystv+"</table>";  
}
myDiv.innerHTML=f1;
popravka=0; 
}

else if(reala=="newapponew"){
	var ggg99=html.split("$$$");//"@^~"
	var ldoj4="<div id='zdata'><div style='float:left'>";
	ldoj4+=selectedcabinetos(ggg99,'vidpri');
	ldoj4+="<select name='vbd' id='vidpri' onchange='fornewtime(this,\"newtime\")'>";//required
	var dds8=new Array();
	dds8=viborvidpriem(ggg99[2]);
	/*var dft4=ggg99[2].split("~~~");
	for(i=0;i<4;i++){if(dft4[i].length>3) {var dft12=dft4[i].split("&&&");ldoj4+="<option value='"+i+","+dft12[1]+","+dft12[0]+"'>"+dft12[0]+" ("+minohou(dft12[1])+")</option>";}}*/
	ldoj4+=dds8[0];
	ldoj4+='</select><br><input type="text" name="newtime" id="newtime"><span id="spnewt">мин.</span><br><br><label>Фамилия</label><br>'+
		'<input type="text" id="lastname"><br><label>Имя</label><input required type="text" id="name"><br>'+
		'<label>Отчество</label><br><input type="text" id="patronymic"><br><label>Телефон</label><br><input type="tel" pattern="[7-8][0-9]{10}" id="tel" onkeyup="waterline(this,2)">'+"<div class='clear'></div><div id='water2'></div>"+
		"<br><label>Как узнали о нас</label><br><div id='agentos'><select onchange='agenhu(this);' name='market' id='market'>";
	ldoj4+=dds8[1];
	//var dft9=ggg99[1].split("~~~");
	/*for(i=4;i<12;i++){
		if(dft4[i].length>1) {
		ldoj4+="<option value='"+dft4[i]+"'>"+dft4[i]+"</option>";
	}}*/
		ldoj4+='</select><div id="markettwo"></div></div></div><div class="zamet" style="float:left"><div id="numcartnewpachtml">'+
		'</div><label>Заметки к приему</label><br><textarea id="zametko"></textarea>'+
		'<br><br><label>ФИО несовершеннолетнего</label><br><br><input id="representative" type="text" style="width:320px"></div><div><br><br><br><br><br>'+
		'<input type="hidden" id="cabnow" value="'+realb+'">'+
			
		'<input type="hidden" id="document"><input type="hidden" id="serialdocument"><input type="hidden" id="issuedby">'+
		'<input type="hidden" id="sex"><input type="hidden" id="birthday">'+
		'<input type="hidden" id="repretel">'+
		'<input type="hidden" id="aaa0"><input type="hidden" id="aaa1"><input type="hidden" id="aaa2">'+
		'<input type="hidden" id="aaa3"><input type="hidden" id="aaa4"><input type="hidden" id="aaa5">'+
		'<input type="hidden" id="aaa6"><input type="hidden" id="alladress">'+
		'<input type="hidden" id="mypass"><input type="hidden" id="www0"><input type="hidden" id="www1">'+
		'<input type="hidden" id="workss"><input type="hidden" id="numcartnewpac"><input type="hidden" id="example398">'+
			
		"<input class='butonekras' type='button' onclick='addzapnewp();' value='Записать'></div></div>";
	crnewal2('shirinam2',"<div>Запись на прием</div>",ldoj4);
}
				
else if(reala=="changeprk"){
	var barva=html.split("~^~");
	if(barva[1]=="not") {document.getElementById("water"+barva[0]).innerHTML="";}
	else {
		
		document.getElementById("water"+barva[0]).innerHTML="Есть совпадения";
		document.getElementById("water"+barva[0]).onclick= function() {towatershow(barva[1]);}
	}
}

else if(reala=="poizvo" && (realb=="period" || realb=="periodpr")){
if(html=="@@@@@@@@@@@@" && realb=="period") f1="<br /><h2>В заданный период заказов в производство не было.</h2>";
else if(html=="@@@@@@@@@@@@" && realb=="periodpr") f1="<br /><h2>В заданный период ничего произведено не было.</h2>";
else {
var barva=html.split("^");
for(i=0;i<barva.length;i++){
bar2=barva[i].split("|");
if(i==0){
f1='<input type="hidden" id="numth" value="11"><br /><h2>';
if(realb=="period") f1=f1+"Заказы в производство за период";
else f1=f1+"Произведено за период";
f1=f1+'<a href="x_proizovstat.php?time='+bar2[0]+"&b="+realb+'" target="xls"><i class="icon-link-1"></i> экспорт в Excel</a></h2><br /><div class="outer"><div class="innera"><table id="exampleG" class="tablesorter" border="0" cellpadding="0" cellspacing="1"><thead><tr id="thidwidth"><th id="tabh1">Дата заказа<th id="tabh2">Дата выполнения<th id="tabh3">№ счета<th id="tabh4">№ заказа<th id="tabh5">Наименование<th id="tabh6">Заказано<th id="tabh7">Сделано<th id="tabh8">Исполнитель<th id="tabh9">Примечание<th id="tabh10">Примечание к заказу<th id="tabh11">Управление</tr></thead><tbody>'+
'<tr style="display:none"><td>01-03-0212</td><td>01-03-0212</td><td>1</td><td>1</td><td> </td><td>1</td><td>1</td><td> </td><td> </td><td> </td><td> </td></tr>';
}
else {
  if(bar2[1]!="- - -") udvrpro="<a style=\"float: right;\" href=\"#\" onclick=\"var newsko=window.confirm('Вы уверены, что хотите отменить производство\\n"+bar2[3]+"\\nпроизведено: "+bar2[5]+" ?'); if(newsko==true) {smotrz('delproizvodstvo', "+bar2[7]+");}\"><i class=\"icon-cancel\"></i> удалить</a>";
  else udvrpro="";
  if(realb=="periodpr" && bar2[12]!="-") {
	  if(bar2[12]==1) var tki8=" yellow";
	  else if(bar2[12]==2) var tki8=" grii";
	  else if(bar2[12]==3) var tki8=" redi";
	  else var tki8="";
	  var esso102='<div class="onees'+tki8+'" id="tos'+bar2[7]+'">';
	  if(bar2[12]==0) esso102=esso102+'<input type="checkbox" onchange="this.disabled=\'disabled\'; smotrz(\'goesproizvo\','+bar2[7]+');">';		
	  else esso102=esso102+'<span onclick="smotrz(\'goesproizvooff\','+bar2[7]+');">1C</span>';
	  udvrpro=esso102+"</div>"+udvrpro;
  }
  
  
  if(bar2[9]=="") minya="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
  else {var zookko=bar2[9].split("~`"); var zookko2=zookko[(zookko.length-2)].split("@@@"); if(zookko2[1].length>13) minya=zookko2[1].substring(0,10)+"..."; else minya=zookko2[1];}
  
  
  
if(i==1) f1=f1+"<tr id='tdidwidth'><td id='tabd1'>"+bar2[0]+"</td><td id='tabd2'>"+bar2[1]+"</td><td id='tabd3'><a href='index.php?smotrchekid&biis="+bar2[11]+"' target='_blank'>"+bar2[2]+"</a></td><td id='tabd4'>"+bar2[6]+"</td><td id='tabd5'>"+bar2[3]+"</td><td id='tabd6'>"+bar2[4]+"</td><td id='tabd7'>"+bar2[5]+"</td><td id='tabd8'>"+bar2[8]+"<td id='tabd9'><a href='#' id='hfefca"+bar2[7]+"' onclick='primtextalert("+bar2[7]+",\""+bar2[9]+"\");'>"+minya+"</a><td id='tabd10'>"+bar2[10]+"</td><td id='tabd11'>"+udvrpro+"</td></tr>";
else f1=f1+"<tr><td>"+bar2[0]+"</td><td>"+bar2[1]+"</td><td><a href='index.php?smotrchekid&biis="+bar2[11]+"' target='_blank'>"+bar2[2]+"</a></td><td>"+bar2[6]+"</td><td>"+bar2[3]+"</td><td>"+bar2[4]+"</td><td>"+bar2[5]+"</td><td>"+bar2[8]+"</td><td><a href='#' id='hfefca"+bar2[7]+"' onclick='primtextalert("+bar2[7]+",\""+bar2[9]+"\");'>"+minya+"</a> </td><td>"+bar2[10]+"</td><td>"+udvrpro+"</td></tr>";
}
}
f1=f1+'</tbody></table><div id="viborgruzopol" style="display:none;"></div></div></div>';
  }
myDiv.innerHTML=f1;
popravka=0;
}
else if(reala=="smenuc"){
	if(html==0) alert("Ошибка NWP 1564");
	else {
	var fxzh = html.split('|');
	document.getElementById('obzx'+fxzh[1]).innerHTML="<font color='red'>"+fxzh[0]+"</font>";
	//document.getElementById('nds'+fxzh[1]).value=fxzh[2]; ndsww(fxzh[1],document.getElementById('numres'+fxzh[1]).value,document.getElementById('nds'+fxzh[1]));
	alert ("Центр Учёта сменен.");
	}
}
else if(reala=="viemsaldo"){
	var fxz = html.split('^');
	document.getElementById('viesaldo'+fxz[0]).text="Сальдо: "+fxz[1];
	document.getElementById('viesaldo'+fxz[0]).title=fxz[2];
}
else if(reala=="viemkontakt"){
	if(html=="@@@@@@@@@@@@@") {texty=risuykontakt(5,'','');}
	else {
	var texty=risuykontakt(5,html,'');}
	if(!isNaN(realb)) {var zuname=html.split('~~'); var xuuu=zuname[0];} else var xuuu=realb;
	texty='<div style="float: right; margin: 3px;"><input id="button1" type="button" value="Сохранить" onclick="savekotakt();">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" onclick="document.getElementById(\'kontizvne\').style[\'display\']=\'none\';">&nbsp;&nbsp;&nbsp;X&nbsp;&nbsp;&nbsp;</a></div><br><h2>'+xuuu+
	'</h2><div id="vnutrikonta"><form name="f1" id="f1">'+texty+'</form></div>';
	if(document.getElementById('kontizvne')) {document.getElementById('kontizvne').innerHTML=texty; document.getElementById('kontizvne').style['display']='block';}
	else $('#ajaxo').append('<div id="kontizvne">'+texty+'</div>');
}
else if(reala=="savekon"){
	if(html=="1") document.getElementById('kontizvne').style['display']='none';
	else alert("Сохранить не удалось. Попробуйте позже.");
}
else if(reala=='allgrouplook'){
	var texty='<div style="float: right; margin: 3px;"><a href="#" onclick="document.getElementById(\'viemgroup\').style[\'display\']=\'none\';">&nbsp;&nbsp;&nbsp;X&nbsp;&nbsp;&nbsp;</a></div><br><br><br><div class="clear"></div>';
	if(html!="@@@@@@@@@@@@"){
		var tte="";
		var fxz = html.split('^');
		for (var ipuu in fxz) {
		var osia = fxz[ipuu].split('~');	
		if(osia.length>2) {
			if(document.getElementById("oliv_"+realb+"_"+osia[0])) {if(document.getElementById("oliv_"+realb+"_"+osia[0]).className=="olivergroup green") tte=' green'; else tte='';} else tte='';
			texty=texty+"<span id='oao"+realb+"_"+osia[0]+"' class='olivergroup"+tte+"' title='"+osia[2]+"' onclick='opredgosia(this,\""+osia[0]+"&idkonta="+realb+"\")'>"+osia[1]+"</span>";
		}
		}
	}
	texty=texty+'<!--uuu--><br><br><br><br><br><br><a href="#" style="margin: 40px 0 0 70px" onclick="document.getElementById(\'addgroupkontakt\').style[\'display\']=\'block\';">добавить новую группу</a>'+
	'<div id=\'addgroupkontakt\' style="display:none"><br><label>Название группы</label><input type="text" id="namenewgroup"><br>'+
	'<label>Описание группы</label><textarea id="opisalovonewgroup"></textarea><br><br>'+
	'<label>&nbsp;</label><input type="checkbox" id="uzz" checked>Добавить этот контакт в новую группу<br><br><br><label>&nbsp;</label><input type="button" style="cursor:pointer" value="Добавить" onclick="newgroupadd('+realb+');"<br><br><br><br></div>';
	if(document.getElementById('viemgroup')) {document.getElementById('viemgroup').innerHTML=texty; document.getElementById('viemgroup').style['display']='block';}
	else $('#ajaxo').append('<div id="viemgroup">'+texty+'</div>');
}
else if(reala=='newgradd'){
	if(html=="duble") alert("Группа с таким именем уже существует! Придумайте уникальное имя.");
	else {
	document.getElementById('addgroupkontakt').style['display']='none';
	document.getElementById('namenewgroup').value="";
	document.getElementById('opisalovonewgroup').value="";
	document.getElementById('uzz').checked="checked";
	var fxzz = html.split('|');
	if(fxzz[4]=="true") {
		var ttm="olivergroup green";
		var tohml2='<span id="oliv_'+fxzz[0]+'_'+fxzz[1]+'" class="'+ttm+'" onclick="opredgosia(this,\''+fxzz[1]+'&idkonta='+fxzz[0]+'\')" title="'+fxzz[2]+'">'+fxzz[3]+'</span>';
		var tst2=document.getElementById('emsmso'+fxzz[0]);
		tst2.innerHTML=tst2.innerHTML.replace('<!--ii-->',tohml2+'<!--ii-->');
		
	}
	else ttm="olivergroup";
	var tohml='<span id="oao'+fxzz[0]+'_'+fxzz[1]+'" class="'+ttm+'" onclick="opredgosia(this,\''+fxzz[1]+'&idkonta='+fxzz[0]+'\')" title="'+fxzz[2]+'">'+fxzz[3]+'</span>';
	var tst=document.getElementById('viemgroup');
	tst.innerHTML=tst.innerHTML.replace('<!--uuu-->',tohml+'<!--uuu-->');
		}
}
else if(reala=="goosia"){
	if(html=="note") alert("Ошибка сервера. Попробуйте позже.");
	else {
		if(document.getElementById('oao'+html)){
		var temf=document.getElementById('oao'+html);
		temf.className="olivergroup green";
		//temf.setAttribute("onclick", "");
		var zaputal = html.split('_');
			if(document.getElementById('oliv_'+html)) {
			document.getElementById('oliv_'+html).className="olivergroup green";
		}
		else {
		var tohml2='<span id="oliv_'+html+'" class="olivergroup green" onclick="opredgosia(this,\''+zaputal[1]+'&idkonta='+zaputal[0]+'\')" title="'+temf.title+'">'+temf.innerHTML+'</span>';
		var tst2=document.getElementById('emsmso'+zaputal[0]);
		tst2.innerHTML=tst2.innerHTML.replace('<!--ii-->',tohml2+'<!--ii-->');
		}
	}
	else document.getElementById('oliv_'+html).className="olivergroup green";
	}
}
else if(reala=="delgoosia"){
	if(html=="note") alert("Ошибка сервера. Попробуйте позже.");
	else {
var temf2=document.getElementById('oliv_'+html);
temf2.className="olivergroup";
if(document.getElementById('oao'+html)) document.getElementById('oao'+html).className="olivergroup";
		}
}
else if(reala=="poizvo" && realb=="periodpodrobno"){
var colsp="";
if(html=="@@@@@@@@@@@@") f1="<br /><h2>В заданный период ничего произведено не было.</h2>";
else {
var allstoim=0; var allmarga=0; var allzak=0; var allsdel=0; var allotgrug=0; var allkolvo=0; var allsirstoim=0;
var tempf=""; var tempf1=""; var tempf2=""; var tempf3=""; var stoim=0; var sirstoim=0;
var barva=html.split("^");
for(i=0;i<barva.length;i++){
bar2=barva[i].split("|");
if(i==0){
f1='<br /><h2>Произведено за период (подробно)';
f1=f1+'<a href="x_proizovstatpodrobno.php?time='+bar2[0]+"&b="+realb+'" target="xls"><i class="icon-link-1"></i> экспорт в Excel</a></h2><br /><table border="0" cellpadding="0" cellspacing="1"><thead><tr><th>№ счета<th>Клиент<th>Ответственный менеджер<th>№ заказа<th>Дата заказа<th>Наименование<th>ед. изм.<th>Цена<th>Стоимость<th>коэфф. доб. стоим.<th>маржа<th>Заказано<th>Сделано<th>Отгружено<th>Дата выполнения'+
'<th>Сырье<th>RAL<th>ед. изм.<th>Кол-во<th>бал. цена<th>Стоимость<th>руб.на кв.доб.<th>Исполнитель<th>Управление</tr></thead><tbody>';
}
else {
udvrpro="<a style=\"float: right;\" href=\"#\" onclick=\"var newsko=window.confirm('Вы уверены, что хотите отменить производство\\n"+bar2[3]+"\\nпроизведено: "+bar2[5]+" ?'); if(newsko==true) {smotrz('delproizvodstvo', "+bar2[7]+");}\"><i class=\"icon-cancel\"></i> удалить</a>";

if(bar2[8]!=1) colsp=" ROWSPAN="+bar2[8]; else colsp="";
tempf="<tr><td"+colsp+">"+bar2[2]+"</td><td"+colsp+">"+bar2[9]+"</td><td"+colsp+">"+bar2[11]+"</td><td"+colsp+">"+bar2[6]+"</td><td"+colsp+">"+bar2[0]+"</td><td"+colsp+">"+bar2[3]+"</td><td"+colsp+">"+bar2[14]+"</td>";

tempf2="<td"+colsp+">"+bar2[4]+"</td><td"+colsp+">"+bar2[5]+"</td><td"+colsp+">"+bar2[10]+"</td><td"+colsp+">"+bar2[1]+"</td>";
//                      заказано
tempf3=""; stoim=0; sirstoim=0;
for(hudoi=1;hudoi<=bar2[8];hudoi++) {
  dobav=9*hudoi;
  if(bar2[14]=="м2") rubnakv=((parseFloat(bar2[(6+dobav)])-parseFloat(bar2[(7+dobav)]))/parseFloat(bar2[(9+dobav)])).toFixed(2); else rubnakv="";
 // alert("12="+bar2[12]+" 13="+bar2[13]);
  if(hudoi!=1) tempf3=tempf3+"<tr>";
  tempf3=tempf3+"<td>"+bar2[(11+dobav)]+"</td><td>"+bar2[(10+dobav)]+"</td><td>"+bar2[(8+dobav)]+"</td><td>"+bar2[(9+dobav)]+"</td><td>"+(bar2[(7+dobav)]/bar2[(9+dobav)]).toFixed(2)+"</td><td>"+bar2[(7+dobav)]+
  "</td><td>"+rubnakv+"</td><td>"+bar2[(3+dobav)]+"</td>";
  if(hudoi==1) tempf3=tempf3+'<td'+colsp+'>'+udvrpro+'</td></tr>';
  else tempf3=tempf3+'</tr>';
  stoim=stoim+parseFloat(bar2[(6+dobav)]); sirstoim=sirstoim+parseFloat(bar2[(7+dobav)]);
  allkolvo=allkolvo+parseFloat(bar2[(9+dobav)]);
  
}
allstoim=allstoim+parseFloat(stoim); allmarga=allmarga+(stoim-sirstoim); allzak=allzak+parseFloat(bar2[4]); allsdel=allsdel+parseFloat(bar2[5]); if(bar2[10].length>0) allotgrug=allotgrug+parseFloat(bar2[10]);
 allsirstoim=allsirstoim+sirstoim;
tempf1="<td"+colsp+">"+(stoim/bar2[5]).toFixed(2)+"</td><td"+colsp+">"+stoim.toFixed(2)+"</td><td"+colsp+">"+(stoim/sirstoim).toFixed(2)+"</td><td"+colsp+">"+(stoim-sirstoim).toFixed(2)+"</td>";
f1=f1+tempf+tempf1+tempf2+tempf3;
}
}
f1=f1+"<tr><td></td><td></td><td></td><td></td><td></td><td><b>ИТОГО:</b></td><td></td><td></td><td><b>"+allstoim.toFixed(2)+"</b></td><td></td><td><b>"+
allmarga.toFixed(2)+"</b></td><td><b>"+allzak.toFixed(3)+"</b></td><td><b>"+allsdel.toFixed(3)+
"</b></td><td><b>"+allotgrug.toFixed(3)+"</b></td><td></td><td></td><td></td><td></td><td><b>"+allkolvo.toFixed(3)+"</b></td><td></td><td><b>"+allsirstoim.toFixed(2)+"</b></td><td></td><td></td></tr>"+
"</tbody></table>";
  }
myDiv.innerHTML=f1;

}



else if(reala=="ajaxofzaya" || reala=="ajaxofzayaprvo"){
if(html=="none") alert("Ошибка. Заявка не создана.");
else{
barva=html.split("|");
if(reala=="ajaxofzayaprvo") {
	document.getElementById("svzka"+barva[0]).innerHTML="№ "+barva[1]+" не готова"+'<a href="x_proizvodstvonow.php?id='+barva[2]+
	'" target="xls" style="margin-left:15px; font-size:12px; font-weight:normal"><i class="icon-link-1"></i> Заказ в Excel</a>';
	var z222= Math.floor(Math.random() * (999999999 - 100000000 + 1)) + 1000000000;
	document.getElementById("chelsiaj"+barva[0]).innerHTML='Общий комментарий к заказу: <span id="colobok'+barva[2]+'"><a href="#" onclick="prtxrt('+barva[2]+');">нет</a></span>'+
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<i class="icon-picture"></i>&nbsp;&nbsp;Изображения: <input type="hidden" name="imageadd" id="imageadd" value="none"><span id="sp'+barva[2]+z222+'"></span>&nbsp;&nbsp;&nbsp;&nbsp;<a id="spa'+barva[2]+z222+'" href="imgadd.php?id=null'+z222+'&unik='+barva[2]+'&maintr=proizvo&izonotizo=izo" target="_blank" onclick="izo_1(\'null'+z222+'\', \''+barva[2]+'\', \'proizvo\', \''+z222+'\', \'izo\');">Добавить</a>';
	}
else document.getElementById("svzka"+barva[0]).innerHTML="№ "+barva[1]+" не оприходована"+'<a href="x_zayasklad.php?n='+barva[2]+'" target="xls" style="margin-left:15px; font-size:12px; font-weight:normal"><i class="icon-link-1"></i> Заказ в Excel</a>';
document.getElementById("svbut"+barva[0]).innerHTML="Оформлена";

}
}

else if(reala=="izen"){
if(html=="HHHHHHHHHHHHHHHHHHHHHH")  {f1="<br /><h2>Не было действий за выбранный период</h2>";slon=0;}
else{
f1='<input type="hidden" id="numth" value="4"><br /><h2>Просмотр действий пользователей</h2><div class="outer"><div class="innera"><table id="exampleG" class="tablesorter"><thead><tr id="thidwidth"><th id="tabh1">Дата (время)<th id="tabh2">Таблица<th id="tabh3">Логин<th id="tabh4">Изменения</tr></thead><tbody>';
var barva=html.split("^");
for(i=0;i<barva.length;i++){
bar2=barva[i].split("|");
if(i==0)
f1=f1+"<tr id='tdidwidth'><td id='tabd1' style='width:100px;'>"+bar2[0]+"</td><td id='tabd2' style='width:100px;'>"+bar2[1]+"</td><td id='tabd3' style='width:100px;'>"+bar2[2]+"</td><td id='tabd4' style='width:500px;'>"+bar2[3]+"</td></tr>";
else f1=f1+"<tr><td style='width:100px;'>"+bar2[0]+"</td><td style='width:100px;'>"+bar2[1]+"</td><td style='width:100px;'>"+bar2[2]+"</td><td style='width:500px;'>"+bar2[3]+"</td></tr>";
}
f1=f1+"</tbody></table></div></div>"; 
}
myDiv.innerHTML=f1+"";
popravka=0; 
}

else if(reala=="potresult"||reala=="segpotkli"||reala=='prospotkli'||reala=='nazpotkli'||reala=='zvonper'){
var barva=html.split("^");
if(html=="@@@@@@@@@@@@@@")  {if(reala=="potresult") f1="<br /><h2>Нет понетциальных клиентов удовлетворяющих условиям</h2>";
else if(reala=='prospotkli') f1="<br /><h2>Нет просроченных обращений к понетциальным клиентам</h2>";
else if(reala=='nazpotkli') f1="<br /><h2>Нет обращений за выбранный период</h2>";
else f1="<br /><h2>Нет назначенных контактов с понетциальными клиентами на сегодня</h2>";}
else{
if(reala=="potresult") f1="<br><h2>Потенциальные клиенты ("+(barva.length-1)+")</h2><br />";
else if(reala=='prospotkli') f1="<br /><h2>Просроченные обращения к понетциальным клиентам ("+(barva.length-1)+")</h2><br />";
else if(reala=='nazpotkli') f1="<br /><h2>Обращения к понетциальным клиентам за выбранный период ("+(barva.length-1)+")</h2><br />";
else if(reala=='zvonper') f1="<br /><h2>Звонки к понетциальным клиентам за выбранный период ("+(barva.length-1)+")</h2><br />";
else f1="<br><h2>Назначенные контакты с понетциальными клиентами на сегодня ("+(barva.length-1)+")</h2><br />";

for(i=0;i<barva.length-1;i++){
bar2=barva[i].split("|");
bar2[1]=bar2[1].replace(/ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ/g,"ООО");
bar2[1]=bar2[1].replace(/Общество с ограниченной ответственностью/g,"ООО");
bar2[1]=bar2[1].replace(/ОТКРЫТОЕ АКЦИОНЕРНОЕ ОБЩЕСТВО/g,"ОАО");
bar2[1]=bar2[1].replace(/АКЦИОНЕРНОЕ ОБЩЕСТВО/g,"АО");
bar2[1]=bar2[1].replace(/АВТОНОМНАЯ НЕКОММЕРЧЕСКАЯ ОРГАНИЗАЦИЯ/g,"АНО");
if(bar2[0].length>0) {f1=f1+"<a href='#' class='"+bar2[3]+"' id='ahrew"+bar2[0]+"' onclick='if(document.getElementById(\"podrobnpokli"+bar2[0]+"\").style[\"display\"]==\"none\")"+
" smotrz(\"podrpotkli\","+bar2[0]+"); else document.getElementById(\"podrobnpokli"+bar2[0]+"\").style[\"display\"]=\"none\"'>"+bar2[7]+" "+bar2[8]+" "+bar2[1]+" ("+bar2[2]+") Менеджер: "+bar2[3]+", Статус: ";
/*if(bar2[4]==0) f1=f1+"Не актуальный или нет такого клиента";
else if(bar2[4]==1) f1=f1+"Не хочет с нами работать";
else if(bar2[4]==9) f1=f1+"Является нашим клиентом";
else if(bar2[4]==3) f1=f1+"Потенциальный клиент";
else if(bar2[4]==5) f1=f1+"В активной разработке";
else if(bar2[4]==7) f1=f1+"Близок к заключению договора";*/f1=f1+bar2[4];
if(bar2[10]==1) bar2[10]="<font color='red'>&#10084;</font>"; else bar2[10]="";
if(bar2[11]==1) bar2[10]=bar2[10]+"<font color='green'> &#9742;</font>";
f1=f1+". Примечание: "+bar2[6]+", Посл.Звонок:"+bar2[9]+"||След.Обращение:"+bar2[5]+" "+bar2[10]+"</a><br><div id='podrobnpokli"+bar2[0]+"' style='display:none'></div><br><div class='clear'></div>";}
} 
}
myDiv.innerHTML=f1;
slon=0; 
}
else if(reala=="oplata"){
	myDiv.innerHTML=html;
	var tty=document.getElementById("todatapic").value;
	if(tty.length>1){
		var barva=tty.split("~");
		for(i=0;i<(barva.length-1);i++){
		$(document).ready(function(){ $('#example'+barva[i]).attachDatepicker(); });
		}
	}
}
else if(reala=="keekergo"){
	if(html=="nonhistory") {var temp0="Нет истории.";var temp1="Нет истории.";
													document.getElementById('kee0').innerHTML=temp0;document.getElementById('kee1').innerHTML=temp1;}
	else{
	var DS0=""; var DS1="";
	var barva=html.split("^^^");
	var temp0="";var temp1="";var kom78="";
		for(i=0;i<(barva.length-1);i++){
			var buch=barva[i].split("~~~");
			var hjuhu8="<b>"+buch[0]+" "+buch[1]+":</b> "+buch[2];
			if(buch[2].substr(-4)!="<br>") hjuhu8=hjuhu8+"<br>";
			if(buch[5]=="call"){
				if(buch[4]=="-") DS0="нет даты ОК";
				else {
					if(buch[0]!="-") {DS0="OK+"+buch[1]; DS1=buch[0];}
					else DS0="OK+"+buch[1]+":&nbsp;&nbsp;&nbsp;"+buch[3];
				}
			}
			else{
			if(buch[5]<10) temp0+=hjuhu8;
			if(buch[5]!=10) temp1+=hjuhu8;
			else kom78+=hjuhu8;
			}
		}
	
	document.getElementById('kee0').innerHTML=temp0;
	document.getElementById('kee1').innerHTML=temp1;
	var temp420="<div id='keeks'><b>Комментарии:</b><br><br>"+kom78+"</div><br><br><textarea id='kom478'></textarea><br>"+
	'<input class="butonekras" type="button" onclick="smotrz(\'addkom478\',\''+realb+'&kom=\'+document.getElementById(\'kom478\').value)" value="Добавить"><br><br><br><hr><br>Плановый обзвон: <span id="fdyt7">'+DS0+'&nbsp;&nbsp;&nbsp;<img src="del.png" class="ffs7" onclick="smotrz(\'delstatok\',\''+buch[4]+'\');"></span><br><br>';
	if(buch[6].length>5) temp420+=buch[6]+"<br><br><br>";
	temp420+='<span>Позвонить</span><br><input size="8" type="text" id="exrang44" value="'+DS1+'"><input type="button" value="Задать" onclick="smotrz(\'newdatacall\',document.getElementById(\'exrang44\').value+\'&idpac='+buch[4]+'\');">';
	document.getElementById('keekom').innerHTML=temp420;
	$(document).ready(function(){ $('#exrang44').attachDatepicker(); });
}}
else if(reala=='newdatacall'){	
	if(html=="error") document.getElementById('exrang44').style.border="1px solid red";
	else document.getElementById('exrang44').style.border="1px solid green";
}
else if(reala=='delstatok'){
	if(html!="error") document.getElementById('fdyt7').style['display']="none";
}
else if(reala=='changeagggg'){
	if(html=="none") {
		document.getElementById('market').style['border']="1px yellow solid";
		window.setTimeout("document.getElementById('market').style['border']='none';if(document.getElementById('market').value.substr(0,1)==',' && document.getElementById('market').value.substr(-1)==',') document.getElementById('market').value='';",888);
		}
	else {
	if(html.indexOf(",")>0) var rgu="Коды Агентов "+html;
	else var rgu=html;
	document.getElementById('market').style['border']="1px green solid";
	var newOption = new Option(rgu, ","+html+",");document.getElementById('market').append(newOption);newOption.selected = true;
	window.setTimeout(disabdataf,800,"on");}
	
}
else if(reala=='addkom478'){
	if(html=="ok") {
		document.getElementById('keeks').innerHTML=document.getElementById('keeks').innerHTML+"<br>"+document.getElementById('kom478').value;
		document.getElementById('kom478').value="";
	}
	else alert("Ошибка добавления комментария NPS-2131");
}
else if(reala=="searchnumberzak"){
if(html=="@@@@@@@@@@@@@@")  alert("Такого номера не найдено");
else {	
	 try {
	 var trtr=document.getElementById(html);
	 trtr.className='ui-widget-content jqgrow ui-row-ltr selected-row ui-state-hover';
	 } 
	 catch (e) {
	 	var newsko=window.confirm('Искомый счет находится в другом периоде. Вывести его в новом окне?');
	 	if(newsko==true) window.open("index.php?uprsotr=646776&id="+html, "_blank");}
}
}

else if(reala=="addzap" || reala=="pereaddzap" || reala=="addzapnewpacik" || reala=="addzapdoble"){
	if(html=="errorinsert") {alert("Ошибка записи. Введите правильно данные."); return false;}
	else if(html=="errortimevidpri") {alert("Вы не выбрали вид приема."); return false;}
	if(reala=="pereaddzap") {var action="datainsertanddel"; var action2="pereaddzap";}
	else if(reala=="addzap") {var action="datainsert"; var action2="addzap";}
	else if(reala=="addzapnewpacik" || "addzapdoble") {
		if(html=="errorSHC-433") {alert("Пациент уже существует."); return false;}
		var action="datainsert"; var action2="addzapdoble";
	}
		var rezoo=html.split("~~~");
		if(rezoo[1]=="dont") {
			if(rezoo[0]=="2") {/*1*/document.getElementById('us_alldays1').style['display']="none";
			document.getElementById('us_alldays2').style['display']="none";}
			else alert("Нет свободного времени для записи.");
		}
		else{
		var s=rezoo[1].split("^"); 
		var duncate=""; var first=""; var gh784=rezoo[4].split(",");
		var tempnewtime=Math.round(parseFloat(gh784[1])/60);
		var cte="<br><h2>Пожалуйста, выберите удобное время ("+gh784[2]+" "+tempnewtime+" минут):</h2><br>"; 
		var tempmanagers="";
		for(i=0;i<s.length;i++){
			if(s[i].length>2) {
				if(isNaN(s[i])) {var td6=s[i].split("*"); s[i]=td6[0]; var z=1;} else var z=0;
				var last=s[i]; if(first=="") first=s[i];
				var nowdate = new Date(s[i]*1000);
				var zFd=nowdate.getTimezoneOffset();	nowdate=new Date(nowdate.getTime()+(zFd*60+parseFloat(UTSdatatum))*1000);
				var moun=us_mon(nowdate)[0];
				var week=us_wik(nowdate);
				var day=nowdate.getDate();
				var min=nowdate.getMinutes(); if(min<10) min="0"+min; var homin=nowdate.getHours()+":"+min;
				if(duncate!=day){
					if(duncate!="") cte+="</div>";
					cte+="<div class='us_d_newdate'><span class='us_d_rdate'>"+week+", "+day+" "+moun+"</span>";
					duncate=day;
				}
				if(z==1) {var oterfil=td6[1].split("@@@"); var stapmesto=oterfil[1]; 
				if(tempmanagers!=oterfil[0]+"*"+day+"*"+stapmesto) cte+="<span class='manugza'><i class='icon-user'></i> "+oterfil[0]+" &#10148;</span>";
				tempmanagers=oterfil[0]+"*"+day+"*"+stapmesto;}
				else {cte+="<a class='us_d_time' onclick=\"smotrz('"+action+"','"+rezoo[3]+"&vidpri="+rezoo[4]+
					"&right="+last+"&cab="+rezoo[2]+"&datainsert="+s[i]+"&fordelappo="+rezoo[5]+"&mesto="+stapmesto+"');\">"+homin+"</a>";
						 }
			}
		}

			if(rezoo[0]==1 || rezoo[0]==2) var toleft="<a id='us_alldays0' href='#' onclick=\"smotrz('"+action2+"','"+rezoo[3]+"&vidpri="+rezoo[4]+
					"&left="+first+"&cab="+rezoo[2]+"&appointment="+rezoo[5]+"&newtime="+tempnewtime+"');\">&#9668;</a>";
			else var toleft="<a id='us_alldays0' href='#'>&nbsp;</a>";
			cte+="</div>";

			if(rezoo[0]==2 || rezoo[0]==3) {
				var ondaylast=Math.floor((parseFloat(last)+20*86400)/86400)*86400;
				var toright="<a href='#' id='us_alldays1' onclick=\"smotrz('"+action2+"','"+rezoo[3]+"&vidpri="+rezoo[4]+
					"&right="+last+"&cab="+rezoo[2]+"&appointment="+rezoo[5]+"&newtime="+tempnewtime+"');\">&#9658;</a>"+
					"<a href='#' id='us_alldays2' onclick=\"smotrz('"+action2+"','"+rezoo[3]+"&vidpri="+rezoo[4]+
					"&right="+ondaylast+"&cab="+rezoo[2]+"&appointment="+rezoo[5]+"&newtime="+tempnewtime+"');\">&#9658;&#9658;</a>";
			}
if(reala=="pereaddzap" || reala=="addzapnewpacik" || "addzapdoble") crnewal2('shirinam','<div>Запись на прием</div>'+
'<input id="checksms" type="checkbox" name="checksms" checked="checked"> Послать SMS пациенту'+toleft+toright,cte);
else if(reala=="addzap") document.getElementById('zzapis').innerHTML=cte;
}	}

else if(reala=="docafast"){
document.getElementById('block_msg44').innerHTML=html+" <i class='icon-flash'></i>";
if(html>0) {
	document.getElementById('block_msg44').className='red';
	if(html>lastzvon){
	var audio = new Audio();
  audio.src = 'mp3/415.mp3';
  audio.autoplay = true;}
}
else document.getElementById('block_msg44').className='white';
lastzvon=html;
}
				
else if(reala=="podrpotkli"){
if(html=="@@@@@@@@@@@@@@")  {f1="Нет такого клиента.";}
else{ 
var teplo=new Array();
teplo[1]="Тёплый";
teplo[2]="Поговорили";
teplo[3]="Выставле счёт";
teplo[4]="Демо";
teplo[5]="Демо потом спец";
teplo[6]="Недозвон";
teplo[7]="Принимает решение";
teplo[14]="Ожидание";
teplo[8]="Договор подписан";
teplo[9]="Поступила предоплата";
teplo[10]="Услуга оказана";
teplo[11]="Полный расчет";
teplo[12]="Высланы с/ф";
teplo[13]="С/ф получены";
teplo[15]="Убрать";

var ba=html.split("^");
var bb=ba[0].split("|");
if(bb[6]=="1")  bb[6]="<option value='1'>Прослушать звонок</option><option value='0'>Не слушать звонок</option>"; else bb[6]="<option value='0'>Не слушать звонок</option><option value='1'>Прослушать звонок</option>";
var texxxto="Название компании <input type='text' value='"+bb[1]+"' style='width:350px' id='nounicname"+bb[0]+"' onchange='smotrz(\"red818\",\""+bb[0]+"&thvalue=\"+this.value+\"&name=nounicname\");'><br>"+
"Город "+bb[2]+" Адрес <input type='text' value='"+bb[4]+"' style='width:350px'  id='adres"+bb[0]+"' onchange='smotrz(\"red818\",\""+bb[0]+"&thvalue=\"+this.value+\"&name=adres\");'><br>"+
'Теплый<br><select '+"id='hot"+bb[0]+"' onchange='smotrz(\"red818\",\""+bb[0]+"&thvalue=\"+this.value+\"&name=hot\");'"+'>';

for(yy=1;yy<16;yy++){
	if(yy==1 && bb[5]=="") texxxto=texxxto+'<option value="" selected  disabled>обычный</option>';
	if(bb[5]==yy) var tmko=" selected"; else var tmko="";
	texxxto=texxxto+'<option value="'+yy+'"'+tmko+'>'+teplo[yy]+'</option>';
}
texxxto=texxxto+'</select><br>'+
"<br><select id='calls"+bb[0]+"' onchange='smotrz(\"red818\",\""+bb[0]+"&thvalue=\"+this.value+\"&name=calls\");'>"+bb[6]+"</select><br>"+
"<br>След. звонок<br><input type='text' value='"+bb[9]+"' style='width:100px !important;margin:0' id='dataopo"+bb[0]+"' onchange='smotrz(\"red818\",\""+bb[0]+"&thvalue=\"+this.value+\"&name=dataopo\");'>"+
"<input type='text' value='"+bb[10]+"' style='width:50px !important' id='timeopo"+bb[0]+"' onchange='smotrz(\"red818\",\""+bb[0]+"&thvalue=\"+this.value+\"&name=timeopo\");'><br>"+
"Примечание<br><textarea id='prim"+bb[0]+"' onchange='smotrz(\"red818\",\""+bb[0]+"&thvalue=\"+this.value+\"&name=prim\");'>"+bb[11]+"</textarea><br>"+
"<br>Справка<br><textarea id='list_spravka"+bb[0]+"' onchange='smotrz(\"red818\",\""+bb[0]+"&thvalue=\"+this.value+\"&name=list_spravka\");'>"+bb[13]+"</textarea><br><br>"+
'<input type="text" placeholder="e-mail" id="tokompred'+bb[0]+'"> <input type="button" value="Отправить письмо №1" '+
"onclick='smotrz(\"red818\",\""+bb[0]+"&thvalue=\"+document.getElementById(\"tokompred"+bb[0]+"\").value+\"&name=tomailsend\");'>";
//;$row['id']."|".$row['nounicname']."|".$row['gorod'2]."|".$row['timezone'3]."|".$row['adres'4]."|".$row['hot'5]."|".$row['calls'6]."|".$row['standart_telf']."|".
//	$row['login']."|".$row['dataopo'9]."|".$timeopo."|".$row['prim'11]."|".$row['actionid']."|".$row['list_spravka'13]

var fffg=ba[1].split("~~~");
for(i=0;i<fffg.length-1;i++){
var bbqq=fffg[i].split("|");
if(bbqq[1]==1) bbqq[1]="Секретарь"; else if(bbqq[1]==2) bbqq[1]="ЛПР";
texxxto=texxxto+bbqq[1]+"<br>Фамилия <input type='text' value='"+bbqq[4]+"' style='width:300px' id='famil"+bbqq[0]+"' onchange='smotrz(\"red820\",\""+bbqq[0]+"&thvalue=\"+this.value+\"&name=famil\");'>"+"<br>Имя <input type='text' value='"+bbqq[2]+"' style='width:300px' id='name"+bbqq[0]+"' onchange='smotrz(\"red820\",\""+bbqq[0]+"&thvalue=\"+this.value+\"&name=name\");'><br>"+
"Отчество <input type='text' value='"+bbqq[3]+"' style='width:300px' id='oth"+bbqq[0]+"' onchange='smotrz(\"red820\",\""+bbqq[0]+"&thvalue=\"+this.value+\"&name=oth\");'><br>"+
"Телефон <input type='text' value='"+bbqq[5]+"' style='width:300px' id='standart_telf"+bbqq[0]+"' onchange='smotrz(\"red820\",\""+bbqq[0]+"&thvalue=\"+this.value+\"&name=standart_telf\");'>"+
"<br><input type='button' value='copy' onClick=\"copy_to_clipboard('fffppp"+bbqq[0]+"');\"><div id='fffppp"+bbqq[0]+"'>"+bbqq[5]+"</div><br>"+
"Мыло <input type='text' value='"+bbqq[6]+"' style='width:300px' id='milo"+bbqq[0]+"' onchange='smotrz(\"red820\",\""+bbqq[0]+"&thvalue=\"+this.value+\"&name=milo\");'><br>"+
"Должность <input type='text' value='"+bbqq[7]+"' style='width:300px' id='dolgnost"+bbqq[0]+"' onchange='smotrz(\"red820\",\""+bbqq[0]+"&thvalue=\"+this.value+\"&name=dolgnost\");'><br>"+
"Примечание <textarea id='prim"+bbqq[0]+"' onchange='smotrz(\"red820\",\""+bbqq[0]+"&thvalue=\"+this.value+\"&name=prim\");'>"+bbqq[3]+"</textarea>";

// $ro['id']."|".$ro['smislblock'1]."|".$ro['name'2]."|".$ro['oth'3]."|".$ro['famil']."|".$ro['standart_telf'5]."|".$ro['milo']."|".
//	$ro['dolgnost'7]."|".$ro['pol']."|".$ro['prim'9]."~~~";
}

//
crnewal(texxxto,2);
}
}
else if(reala=="red818"||reala=="red820"){
	if(html=="@@@@@") alert("Изменения не сохранены. Что ж делать то?");
	else if(html=="mailok") document.getElementById('bigform').style['display']='none';
	else document.getElementById(html).style.background="green";
}
else if(reala=="editpotkli"){
  if(html.length>9){
  var ba=html.split("|");
  if(ba[0]=="@@@@@@@@") smotrz('redakklque',ba[1]);
  else if(ba[0]=="########") smotrz('redakpoque',ba[1]);
  } else {
for(var fd=0; fd<10; fd=fd+2){
if(document.getElementById("statuspot"+html+"z"+fd).style.background.search("green")!=-1) var tempstat=document.getElementById("statuspot"+html+"z"+fd).value;
  if(fd==0) fd=-1;
}
var tempnah=document.getElementById("ahrew"+html).text.search('Менеджер:')+10;
tempnah=document.getElementById("ahrew"+html).text.substring(0,tempnah);
tempnah=tempnah+document.getElementById("manager"+html).innerHTML+", Статус: "+tempstat+", Следующее обращение:"+document.getElementById("dateob"+html).value+"<i class='icon-thumbs-up'></i>";
document.getElementById("ahrew"+html).innerHTML=tempnah;
document.getElementById("podrobnpokli"+html).style['display']="none";// <i class="icon-clock-1"></i>
}}
else if(reala=="opove"){
if(html=="@@@@@@@") {f1="<br /><h2>Нет оповещений за данный период</h2>";}
else{ 

f1='<br /><h2>Оповещения</h2><br /><input type="hidden" id="numth" value="6"><div class="outer"><div class="innera"><table id="exampleG" class="tablesorter" border="0" cellpadding="0" cellspacing="1"><thead><tr id="thidwidth"><th id="tabh1">Дата оповещения<th id="tabh2">Текст оповещения<th id="tabh3">Выполнено<th id="tabh4">№ счета<th id="tabh5">Дата счета<th id="tabh6">Контрагент</tr></thead><tbody>';
var barva=html.split("^");
var vipoln="";
for(i=0;i<barva.length;i++){
bar2=barva[i].split("|");
if(bar2[2]==2) vipoln="<a href='opove.php?id="+bar2[8]+"&ch="+bar2[7]+"' title='пометить как Выполнено'>не выполнено</a>";
else if(bar2[2]==4) vipoln="<a href='opove.php?id="+bar2[8]+"&ch="+bar2[7]+"' title='пометить как Выполнено'>просрочено</a>";
else vipoln=bar2[4]+" ("+bar2[3]+")";
if(i==0) 
f1=f1+"<tr id='tdidwidth'><td id='tabd1' style='width:100px;'>"+bar2[0]+"</td><td id='tabd2' style='width:500px;'>"+bar2[1]+"</td><td id='tabd3' style='width:100px;'>"+vipoln+"</td><td id='tabd4' style='width:100px;'><a href='index.php?smotrchekid&biis="+bar2[8]+"' target='_blank'>"+bar2[7]+"</a></td><td id='tabd5' style='width:100px;'>"+bar2[5]+"</td><td id='tabd6' style='width:500px;'>"+bar2[6]+"</td></tr>";
else if(bar2[0].length>0) f1=f1+"<tr><td style='width:100px;'>"+bar2[0]+"</td><td style='width:500px;'>"+bar2[1]+"</td><td style='width:100px;'>"+vipoln+"</td><td style='width:100px;'><a href='index.php?smotrchekid&biis="+bar2[8]+"' target='_blank'>"+bar2[7]+"</a></td><td style='width:100px;'>"+bar2[5]+"</td><td style='width:500px;'>"+bar2[6]+"</td></tr>";
}
f1=f1+"</tbody></table></div></div>"; 
  
}
myDiv.innerHTML=f1;
popravka=0; 
}
else
myDiv.innerHTML=html;
/*myDiv.innerHTML=html+"<div id='trib'> </div>";*/
if(reala=="newpo") risuykontakt('0','','');
if(slon==7 || slon==77) {
if(slon==7){  $(document).ready(function(){
// ---- tablesorter -----
$('#exampleG').tablesorter({
  sortList:[[0,0]],
  widgets: ['zebra']
});
// ---- tablesorter -----
});}
else if(slon==77){  $(document).ready(function(){
// ---- tablesorter -----
$('#exampleG').tablesorter({
  widgets: ['zebra']
});
// ---- tablesorter -----
});
}
try{
var vsegoth=document.getElementById("numth").value;
var eeeeg=document.getElementById("tdidwidth");
eeeeg=eeeeg.offsetWidth;
document.getElementById("thidwidth").style.width=eeeeg+6+"px";
for (z=1;z<=vsegoth;z++){
var tem1=document.getElementById("tabh"+z);
var tem2=document.getElementById("tabd"+z);
if(popravka=="ostat")temnew=tem2.offsetWidth-26; else
temnew=tem2.offsetWidth-24;
if(popravka!=0 && popravka!="ostat") {
  var tem3=document.getElementById("tabit"+z);
  tem3.style.width=(temnew-popravka)+"px";
}
tem1.style.width=temnew+"px";
}
} catch (e) {}
slon=0; 
}
else if(slon==5) {
var ssdf=document.getElementById("sol");
var fist=parseFloat(height)-130;
ssdf.style.height=fist+"px";
slon=0;   
}
if(fpole==9) {
  $(document).ready(function(){ $('#example9').attachDatepicker(); });
  flope=0;
}
      }
      catch(e)
      {
        displayError(e);
      }
    } else testinternet(1);
  }

}

function displayError(message)
{alert("Error encountered: \n" + message);}


function keyprww(k, id, rowid){
var ceno="cen"+id;
var ndsoo="ndso"+id;
var sumo="sum"+id;
var kolo="kol"+id;
var myDndsoo=document.getElementById(ndsoo);
var myDceno=document.getElementById(ceno);  
var myDsumo=document.getElementById(sumo);  
var myDkolo=document.getElementById(kolo);
var ndsrow=document.getElementById("nds"+rowid);

if(k=="kol" || k=="cen"){
var j=(Math.round(myDceno.value*myDkolo.value*100)/10000*ndsrow.value).toFixed(2);
//alert(j+" - -"+((myDceno.value*myDkolo.value)/100*ndsrow.value).toFixed(2));
myDndsoo.value=j;
var jjj=(parseFloat(j)+Math.round((parseFloat(myDceno.value)*parseFloat(myDkolo.value))*100)/100).toFixed(2);
myDsumo.value=jjj;}

else if(k=="sum"){
	if(ndsrow.value!=0) {
	zalnul(myDsumo);
	myDceno.value=(myDsumo.value/(ndsrow.value/100+1)/myDkolo.value).toFixed(2);
	myDndsoo.value=(Math.round(myDceno.value*myDkolo.value*100)/10000*ndsrow.value).toFixed(2);
	/*alert("Расчет по сумме возможен только при НДС = 0"); myDsumo.value="0";*/
	}
	else{
zalnul(myDsumo);
var j=(myDsumo.value/myDkolo.value).toFixed(2);
myDceno.value=j;
}}

else if(k=="nds"){
j=myDndsoo.value;
var jjj=(parseFloat(j)+Math.round((parseFloat(myDceno.value)*parseFloat(myDkolo.value))*100)/100).toFixed(2);
//var jjj=(parseFloat(j)+(parseFloat(myDceno.value)*parseFloat(myDkolo.value)).toFixed(2)).toFixed(2);
myDsumo.value=jjj;}



var num="numres"+rowid;
var numo=document.getElementById(num);
var nah="nah"+rowid;
nah=document.getElementById(nah);
var start=nah.value;
var end=parseFloat(numo.value)+parseFloat(nah.value);
var s=0; var sn=0;
for(i=start; i<end; i++){
sumo="sum"+i;
var myDsumo=document.getElementById(sumo);
var mysumonds=document.getElementById("ndso"+i);
if(myDsumo.value!="") {
s=s+parseFloat(myDsumo.value);
sn=sn+parseFloat(mysumonds.value);
}
}
var to="all"+rowid;
to=document.getElementById(to);
to.value=s.toFixed(2);
alnda=document.getElementById("allnds"+rowid);
alnda.value=sn.toFixed(2);
}


function rep(k, id, rowid){
var myDceno=document.getElementById("cen"+id);    
myDceno.value=(parseFloat(myDceno.value)).toFixed(2);
keyprww(k, id, rowid);
}

function ndsww(rowid, end, uu){
var s=0; var sn=0;
var nah="nah"+rowid;
nah=document.getElementById(nah);
var start=nah.value;
end=parseFloat(end)+parseFloat(start);
for(i=start; i<end; i++){
nd="ndso"+i;
var m=document.getElementById(nd);
var myDceno=document.getElementById("cen"+i); 
var myDkolo=document.getElementById("kol"+i);
var j=((myDceno.value*myDkolo.value)/100*uu.value).toFixed(2);
m.value=j;
var myDsumo=document.getElementById("sum"+i);
var mysumonds=document.getElementById("ndso"+i);
if(myDsumo.value!="") {
myDsumo.value=(parseFloat(j)+parseFloat(myDceno.value)*parseFloat(myDkolo.value)).toFixed(2);
s=s+parseFloat(myDsumo.value);
sn=sn+parseFloat(mysumonds.value);}
}
to=document.getElementById("all"+rowid);
to.value=s.toFixed(2);
alnda=document.getElementById("allnds"+rowid);
alnda.value=sn.toFixed(2);
}

function paryes(rowid, end, uu){
var nah="nah"+rowid;
nah=document.getElementById(nah);
var start=nah.value;
var j=uu.value;
end=parseFloat(end)+parseFloat(start);
for(i=start; i<end; i++){
document.getElementById("party"+i).value=document.getElementById("party"+i).value+j; 
}
}

function prih(i){
var nam=document.getElementById("nambers"+i);
if(nam.value=="") alert("Вы не заполнили поле основание для оприходывания."); 
else {
if(document.getElementById("uslugiest"+i).value==1 && document.getElementById("raspred"+i).checked==false){
var newsko=window.confirm('В приходе есть услуги. Однако, галочка распределить не выставлена. Вы действительно хотите оприходовать без распределения?');
if(newsko==true) var oki=1; else var oki=0;}
else var oki=1;
if(oki==1){
var ff=document.getElementById("jjk"+i);
ff.submit();  }
}}

function prbezden(i){
var nam=document.getElementById("nambers"+i);
if(nam.value=="") alert("Вы не заполнили поле основание для оприходывания."); 
else {
if(isNaN(document.getElementById("all"+i).value)||document.getElementById("all"+i).value==""||document.getElementById("all"+i).value==0)  alert("Сумма прихода не может быть меньше или равна нулю.");  
else {
if(document.getElementById("uslugiest"+i).value==1 && document.getElementById("raspred"+i).checked==false){
var newsko=window.confirm('В приходе есть услуги. Однако, галочка распределить не выставлена. Вы действительно хотите оприходовать без распределения?');
if(newsko==true) var oki=1; else var oki=0;}
else var oki=1;
if(oki==1) oki=provnasum(i);
if(oki==1){
var myD=document.getElementById("aktual"+i);
myD.value=7;
var ff=document.getElementById("jjk"+i);
ff.submit();} }}
}

function sokrprih(i){
var ff=document.getElementById("jjk"+i);
ff.action=ff.action+"&onlysokr=1";
var myD=document.getElementById("aktual"+i);
myD.value=7;
var oki=provnasum(i);
if(oki==1) ff.submit();	
}

function subfor(i){
var ff=document.getElementById("jjk"+i);
ff.submit();  
}
/*не используются 11.2018
function ndsprice(){
var ff=document.getElementById("ccc");
var yy=document.getElementById("realprice");
yy.value=(ff.value*1.18).toFixed(2);
}

function ndspriw(id){
var ff=document.getElementById("inpp"+id);
ff.value=ff.value.replace(",","");ff.value=ff.value.replace(".","");
var yy=document.getElementById("in"+id);
yy.value=(ff.value*1.18).toFixed(2);  
}*/

function delpos(tama,hu){//hu=1 если доктор
var myDiv=document.getElementById("ving");
var itogo=document.getElementById("itog");
var symmin=document.getElementById("sum"+tama);
itogo.value=(parseFloat(itogo.value)-parseFloat(symmin.value)).toFixed(2);
var naibu=document.getElementById("iii"+tama);
var html=myDiv.innerHTML;
var huy=html.search("<!--"+tama+"-->");
var huyk=html.indexOf("<!--ww"+tama+"-->");

  strok=document.getElementById("strok");
  ara= new Array(parseFloat(strok.value));
  bra= new Array(parseFloat(strok.value));
  cra= new Array(parseFloat(strok.value));
  drf= new Array(parseFloat(strok.value));
  skl= new Array(parseFloat(strok.value));
  nac= new Array(parseFloat(strok.value));
  gai= new Array(parseFloat(strok.value));
  if(hu==1) {
	  zir0= new Array(parseFloat(strok.value));
	  zir1= new Array(parseFloat(strok.value));
  }
  if(raschsh==2) {odli= new Array(parseFloat(strok.value)); oshi= new Array(parseFloat(strok.value));}
  if(typeof postv != 'undefined' || edro==2 || prvo==2) vipostr= new Array(parseFloat(strok.value));
  if(vibskldch==2) vipostrw= new Array(parseFloat(strok.value));
  for(i=1; i<=parseFloat(strok.value); i++){
  var fo=document.getElementById("kolvo"+i);
  var ff=document.getElementById("cena"+i);
  var fw=document.getElementById("sum"+i);
  var me=document.getElementById("metr"+i);
  var z=document.getElementById("sklad"+i);
  var onc=document.getElementById("nacnka"+i);
  var nai=document.getElementById("naiid"+i);
  if(hu==1) {
	  var zur0=document.getElementById("odoshi"+i);
	  var zur1=document.getElementById("causs"+i);
	  }
  if(raschsh==2) {var dli=document.getElementById("dlina"+i); var shi=document.getElementById("shirina"+i);}
  if(typeof postv != 'undefined' || edro==2 || prvo==2) var oncpotv=document.getElementById("viborpostavg"+i);
  if(vibskldch==2) var oncpotvw=document.getElementById("viborpostavgw"+i);
  ara[i]=fo.value;
  bra[i]=ff.value;
  cra[i]=fw.value;
  drf[i]=me.value;
  skl[i]=z.value;
  nac[i]=onc.value;
  gai[i]=nai.value;
  if(hu==1) {
	  zir0[i]=zur0.value;
	  zir1[i]=zur1.value;
	  }
  if(raschsh==2) {odli[i]=dli.value; oshi[i]=shi.value;}
  if(typeof postv != 'undefined' || edro==2 || prvo==2) vipostr[i]=oncpotv.value;
  if(vibskldch==2) vipostrw[i]=oncpotvw.value;
  }

html=html.substring(0,huy)+'<input id="kolvo'+tama+'" name="kolvo'+tama+'" type="hidden" value="none"><input name="sklad'+tama+'" id="sklad'+tama+'" type="hidden" value="0"><input name="metr'+tama+'" id="metr'+tama+'" type="hidden" value=""><input id="cena'+
tama+'" type="hidden" value=""><input name="mn'+tama+'" id="mn'+tama+'" value="" type="hidden"><input id="sum'+tama+'" type="hidden" value=""><input name="iii'+tama+'" type="hidden" value="'+naibu.value+'"><input id="nacnka'+tama+'" type="hidden" value=""><input id="shirina'+tama+'" type="hidden" value=""><input id="dlina'+tama+'" type="hidden" value=""><input id="naiid'+tama+'" type="hidden" value="">'+
"<input type='hidden' id='odoshi"+tama+"' value=''><input type='hidden' id='causs"+tama+"' value=''>"+
"<div id='viborpost"+tama+"' style='display:none;'><input type='hidden' value='none' id='viborpostavg"+tama+"'></div>"+
"<div id='viborpostw"+tama+"' style='display:none;'><input type='hidden' value='none' id='viborpostavgw"+tama+"'></div>"+
html.substring(huyk, html.length);
myDiv.innerHTML=html;
if(strok.value>1){
  for(i=1; i<=strok.value; i++){
    if(i!=tama){
  var ko=document.getElementById("kolvo"+i);
  var ff=document.getElementById("cena"+i);
  var fw=document.getElementById("sum"+i);
  var me=document.getElementById("metr"+i);
  var z=document.getElementById("sklad"+i);
  var onc=document.getElementById("nacnka"+i);
  var nai=document.getElementById("naiid"+i);
  if(hu==1) {
	  var zur0=document.getElementById("odoshi"+i);
	  var zur1=document.getElementById("causs"+i);
	  }
  if(raschsh==2) {var dli=document.getElementById("dlina"+i); var shi=document.getElementById("shirina"+i);}
  if(typeof postv != 'undefined' || edro==2 || prvo==2) var oncpotv=document.getElementById("viborpostavg"+i); 
  if(vibskldch==2) var oncpotvw=document.getElementById("viborpostavgw"+i);
  ko.value=ara[i];
  me.value=drf[i];
  ff.value=bra[i];
  fw.value=cra[i];
  z.value=skl[i];
  onc.value=nac[i];
  nai.value=gai[i];
  if(hu==1){
	  zur0.value=zir0[i];
	  zur1.value=zir1[i];
	  }
  if(raschsh==2) {dli.value=odli[i]; shi.value=oshi[i];}
  if(typeof postv != 'undefined' || edro==2 || prvo==2) oncpotv.value=vipostr[i]; 
  if(vibskldch==2) oncpotvw.value=vipostrw[i]; 
    }
  }}
	if(hu==1) susum();
}

function delposy(tama){
var myDiv=document.getElementById("ving");
html=myDiv.innerHTML;
var huy=html.search("<!--"+tama+"-->");
var huyk=html.indexOf("<!--ww"+tama+"-->");
html=html.substring(0,huy)+'<input id="strok'+tama+'" type="hidden" value=""><input id="metr'+tama+'" type="hidden" value="">'+html.substring(huyk, html.length);
if(cookk=="sun") html=html+'<input id="dlina'+tama+'" type="hidden" value="">';
ara=new Array(parseFloat(strok.value));
dih=new Array(parseFloat(strok.value));
if(cookk=="sun") afr= new Array(parseFloat(strok.value));
  for(i=1; i<=parseFloat(strok.value); i++){
  var ddo=document.getElementById("strok"+i);
  var fof=document.getElementById("metr"+i);
  ara[i]=ddo.value;
  dih[i]=fof.value;
    if(cookk=="sun") {
  		var dui=document.getElementById("dlina"+i);
  		afr[i]=dui.value;}
  }
myDiv.innerHTML=html;
if(strok.value>1){
  for(i=1; i<=strok.value; i++){
    if(i!=tama){
  var ddo=document.getElementById("strok"+i);
  var fof=document.getElementById("metr"+i);
  ddo.value=ara[i];
  fof.value=dih[i];
  if(cookk=="sun") {
  	var fas=document.getElementById("dlina"+i);
  	fas.value=afr[i];
  }}
  }}
}

function nuli(th){
if(isNaN(th.value)) th.value=th.value.replace(",",".");
if(isNaN(th.value)) {alert ('Вводите только численные значения!'); th.value="0.000";}
else {
if(th.value.length==0) th.value="0";
th.value=(parseFloat(th.value)).toFixed(3);
}
}


function keyprnac(id){
var nace=document.getElementById("nacnka"+id);
var ce=document.getElementById("cena"+id);
var balsen=document.getElementById("opo"+id);
balsen=parseFloat(balsen.innerHTML);
if(isNaN(nace.value)) nace.value=nace.value.replace(",",".");
if(isNaN(nace.value)) {alert ('Вводите только численные значения!');
if(balsen==0||ce.value==0) nace.value=0;
else nace.value=(parseFloat(ce.value)-balsen)/parseFloat(ce.value)*100;}
else {  
if(balsen==0) {alert ('Балансовая цена равна 0.');
nace.value=0;}
else{
ce.value=((balsen/100)*(100+parseFloat(nace.value))).toFixed(2);
prndscena(id);
}
}
keypr(id,'nonemetr')
}



function nuliop(th){
  if(isNaN(th.value)) th.value=th.value.replace(",",".");
if(isNaN(th.value)) {alert ('Вводите только численные значения!'); th.value="0.000";}
else {
th.value=(parseFloat(th.value)).toFixed(3);
}}

function nulihi(th){
  if(isNaN(th.value)) th.value=th.value.replace(",",".");
if(isNaN(th.value)) {alert ('Вводите только численные значения!'); th.value="0.000";}
}


function nutwo(th){
  if(isNaN(th.value)) th.value=th.value.replace(",",".");
if(isNaN(th.value)) {alert ('Вводите только численные значения!'); th.value="0.00";}
else th.value=(parseFloat(th.value)).toFixed(2);  
}
function zalnul(th){
  if(isNaN(th.value)) th.value=th.value.replace(",",".");
if(isNaN(th.value)) {alert ('Вводите только численные значения!'); th.value="0.00";}  
}


function zapol(){
var nam=document.getElementById("fop");
var ip=document.getElementById("ipo");
ip.value=7;
nam.submit();}

function delprih(id){
var newsko=window.confirm('Вы действительно хотите удалить приход?');
if(newsko==true) location.href="delprih.php?i="+id;
}

function vibskl(inp, sklad, cpcena,us){
var tempposteu="";
  if(document.getElementById("statuspostavki"+inp).value!=2 && document.getElementById("statuspostavki"+inp).value!=3 && document.getElementById("statuspostavki"+inp).value!=7){
  	var strow=document.getElementById("sklad"+inp);

var stro=document.getElementById("z"+inp);
stro.style['display']="none";
var stro=document.getElementById("fcrn"+sklad+"T"+inp);
var zap1=document.getElementById("mon"+inp);
var zap2=document.getElementById("cena"+inp);
//запрет на смену всяких ячеек если уже стоит цена и кол-во
if(isNaN(parseFloat(zap2.value)) || isNaN(parseFloat(document.getElementById("kolvo"+inp).value)))
var dontmen=1; else var dontmen=2;
zap1.value=stro.value;
var temp=document.getElementById("opo"+inp);
if(dontmen==1 && (((strow.value!=0 && sklad!=0) || strow.value==sklad) || document.getElementById("huz").value=="nc")) {zap2.value=parseFloat(stro.value).toFixed(2);
temp.className='opa';zap2.style['color']="black";}
else if(dontmen==1) {temp.className='opar'; zap2.style['color']="blue";}
strow.value=sklad;
temp.innerHTML=cpcena;
if(dontmen==1) keypr(inp);
if(skstat[sklad]=="pst" && typeof postv != 'undefined') {
	tempposteu="<select name='viborpostavg"+inp+"' id='viborpostavg"+inp+"' onchange='lastpost(this);'><option value='none'>Выбор поставщика</option>";
	var postvsort=postv.sort();
	if(typeof selectpostvalue!='undefined') tempposteu=tempposteu+"<option value='"+selectpostvalue+"'>"+selectposttext+"</option>";
  for(ii=0;ii<=postvsort.length;ii++){
   if(typeof postvsort[ii]!= 'undefined') {var def=postvsort[ii].split("~~");tempposteu=tempposteu+"<option value='"+def[1]+"'>"+def[0]+"</option>";}
  }
  tempposteu=tempposteu+"</select>";
  document.getElementById("viborpost"+inp).innerHTML=tempposteu;
}
if(vibskldch==2) {
	var nowsklad=document.getElementById("sklad"+inp).value;
  var tempskldv="<select name='viborpostavgw"+inp+"' id='viborpostavgw"+inp+"'><option value='none'>"+sknaz[nowsklad]+" -> "+sknaz[nowsklad]+"</option>";
  for(ii=1;ii<=nextoskld.length;ii++){
    if(typeof nextoskld[ii]!= 'undefined' && ii!=nowsklad) tempskldv=tempskldv+"<option value='"+ii+"'>"+sknaz[nowsklad]+" -> "+nextoskld[ii]+"</option>";
  }
  tempskldv=tempskldv+"</select>";
  document.getElementById("viborpostw"+inp).innerHTML=tempskldv;
}
if(edro==2 && skstat[sklad]!="pst" && skstat[sklad]!="virtu" && skstat[sklad]!="prvo" && us!="us") {
  var tempedren=document.getElementById("nai"+inp).value;
  smotrz('edron',inp+'&sklad='+sklad+"&naimen="+tempedren);
}
else if(tempposteu=="" && (typeof postv != 'undefined' || edro==2 || prvo==2))
{tempposteu="<input type='hidden' name='viborpostavg"+inp+"' id='viborpostavg"+inp+"' value='none' >";
document.getElementById("viborpost"+inp).innerHTML=tempposteu;}
if(edro==2 && skstat[sklad]!="pst") {
	document.getElementById("viborpost"+inp).innerHTML="<input type='hidden' id='viborpostavg"+inp+"' value=''>";
}
}
else {alert("Нельзя менять склад на позицию с оформленной заявкой поставщику."); document.getElementById("z"+inp).style['display']="none";}
}

function upup(inp){
var stro=document.getElementById("z"+inp);
if(stro.style['display']=="none") stro.style['display']="block";
else stro.style['display']="none";
}

function skl(a){
if(parseFloat(a.value)<0 || parseFloat(a.value)>kolvoskladov){
alert("Неверный номер склада!");
a.value="0";
}
}
function sklnull(a){
if(a.value!="0"){
alert("Для данной позиции номер склада может быть только 0.");
a.value="0";
}
}

function opltch(javath){
  var prk=document.getElementById("opla"+javath);
  if(isNaN(prk.value)) prk.value=prk.value.replace(",",".");
  if(isNaN(prk.value)) {alert ('Вводите только численные значения!'); prk.value="0.00";}
else {sa=parseFloat(prk.value); ss=sa.toFixed(2); prk.value=ss;
var odolg=document.getElementById("dolg"+javath);
odolg.value=(parseFloat(document.getElementById("sum"+javath).innerHTML)-parseFloat(document.getElementById("ugeop"+javath).innerHTML)-parseFloat(prk.value)).toFixed(2);
var javao=document.getElementById("java");
var res=0;
var rdolg=0;
for(i=1;i<javao.value;i++){
  var temp=document.getElementById("opla"+i);
  res=res+parseFloat(temp.value);
  var temps=document.getElementById("dolg"+i);
  rdolg=rdolg+parseFloat(temps.value);  
  }
var sumot=document.getElementById("sumopf");
var temp=document.getElementById("sumred");
var temps=document.getElementById("sumdol");
temps.innerHTML=rdolg.toFixed(2);
res=res.toFixed(2);
if(parseFloat(temp.value)<res) res="<font color='red'>"+res+"</font>";
sumot.innerHTML=res;
}}

function submoney(){
var javao=document.getElementById("java");
var res=0;
for(i=1;i<javao.value;i++){
  var temp=document.getElementById("opla"+i);
  if(parseFloat(temp.value)>0 && !isNaN(temp.value)) res=parseFloat(parseFloat(parseFloat(res)+parseFloat(temp.value)).toFixed(2));
  }
var temp2=document.getElementById("bezpri");
var temp=document.getElementById("sumred");
if(((res+parseFloat(temp2.value))-parseFloat(temp.value))>0.001) alert("Сумма оплаты по счетам и оплаты без привязки к документу "+(res+parseFloat(temp2.value))+
"\n больше изначально заявленной "+parseFloat(temp.value)+"\nна "+((res+parseFloat(temp2.value))-parseFloat(temp.value)));
else if((parseFloat(temp.value)-(res+parseFloat(temp2.value)))>0.001) alert("Сумма оплаты по счетам и оплаты без привязки к документу "+(res+parseFloat(temp2.value))+
"\n меньше изначально заявленной "+parseFloat(temp.value)+"\nна "+(parseFloat(temp.value)-(res+parseFloat(temp2.value))));
else {
var ff=document.getElementById("fop");
ff.submit();  
}
}

function restdata(jk,id){
var myDiv=document.getElementById("exampleRange");
var mydval=myDiv.value;
  var def=mydval.split(" - ");
  var jk=jk.replace("-",".");var jk=jk.replace("-",".");
  if(def[0]==def[1] && def[0]!=jk) {
var newsko=window.confirm('Вы уверены, что хотите изменить дату с/ф с '+jk+' на '+def[0]+'?');
if(newsko==true)
{var ff=document.getElementById("sh"+id); ff.action=ff.action+"&newdata="+def[0]; ff.submit();}
}
  else {
var newsko=window.confirm('Вы уверены, что хотите оставить дату с/ф ('+jk+') без изменений?');
if(newsko==true)
{var ff=document.getElementById("sh"+id);ff.submit();}
}
}

function poisid(e){
   e = (!e) ? window.event : e;
  target = (!e.target) ? e.srcElement : e.target;
  if (target.nodeType == 3) 
    target = target.parentNode;
  code = (e.charCode) ? e.charCode :
       ((e.keyCode) ? e.keyCode :
       ((e.which) ? e.which : 0));
  if(code==13) nameprice('viol','database');
}

function strbo(){
var mk=document.getElementById("kolvo");
var mc=document.getElementById("cena");
var mcs=document.getElementById("sum");
mcs.value=parseFloat(mk.value)*parseFloat(mc.value);
}

function todvig(a){
a.href=a.href+"&data="+document.getElementById("exampleRange").value;
}

function newbalcenw(){ 
if (xmlHttp.readyState ==1)
drogba.innerHTML='меняется';

  if (xmlHttp.readyState == 4) 
  {

    if (xmlHttp.status == 200) 
    {
unsverresp();
var html=xmlHttp.responseText;
if(html.search("шибка")==-1) drogba.innerHTML=html;
else (alert('Ошибка NEWP1023\n'+html));
    } 
    else testinternet(1);
  }

}

function tihref(as, uuu){
if(as=="milo") var name=window.prompt('Введите новый E-mail');
else if(as=="gorod") var name=window.prompt('Введите город');
else if(as=="pass") var name=window.prompt('Введите новый пароль\nПароль должен содержать латинские или кирилические символы, но обязательно наличие строчных и прописных букв.\nТакже, в пароле должн быть как минимум один из спецсимволов (! " # $ % & \' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~) и цифры.\nДлина пароля не менее 8 символов.');
else if(as=="dolg") var name=window.prompt('Введите должность');
else if(as=="telr") var name=window.prompt('Введите рабочий телефон');
else if(as=="tels") var name=window.prompt('Введите сотовый телефон');
else if(as=="birthday") var name=window.prompt('Введите День Рождения в формате 08.03.1917');
else if(as=="opis") var name=window.prompt('Введите описание');
else if(as=="proxy") var name=window.prompt('Введите основание для подписи УПД. Пример: Иванов А.И., Приказ №7 от 12.12.2018г.\nИли основание для договора. Пример: Приказ №7 от 12.12.2018г.');
else if(as=="zoiper") var name=window.prompt('Введите zoiper');
else if(as=="sip") var name=window.prompt('Введите sip');
else if(as=="osnovaba") var name=window.prompt('Введите начало поля 24 в платежном поручении, если нужно.\nНапример: Для зачисления на ПК АС СБЕРКАРТ, Медведев Дмитрий анатольевич, Счет № 40817810567106500001,');
else if(as=="rang") var name=window.prompt('Введите порядковый номер представленности на сайте');
else if(as=="del") {var name=window.confirm('Подтвердите удаление пользователя');
if(name!=false) location.href="statpanelold.php?real=1&reedel="+uuu;}
else if(as=="man") var name=window.prompt('Введите ФИО манагера');
else if(as=="buch") {var name=window.prompt('Введите логин нового пользователя\nЛогин не должен быть менее 3-х символов.\nДля удобства используйте в логине фамилию пользователя, можно на кирилице\nНапример, ПетровАА');
if(name!=null) {var name2=window.prompt('Введите E-mail нового пользователя\nна который придет приглашение установить пароль');
if(name2!=null) name=name+"&newassmilo="+name2;}
}
else if(as=="acc") {var name=window.prompt('Введите название новой группы ограничения прав доступа');
if(name.length>30) {alert("Название группы прав доступа должно состоять не более чем из тридцати символов!");uuu.href=location.href;}}
if(name!=null) uuu.href +="&newass="+name+"&uprizm=30";
else if(as!="pokaz")uuu.href ="#";
}

function huvibor(a){
location.href="statpanelold.php?real=1&ds=h&value="+a.value+"&name="+a.name;
}
function bankvibor(a){
location.href="statpanelold.php?real=1&bank=h&value="+a.value+"&name="+a.name;
}
function bankvibortwo(a){
location.href="statpanelold.php?real=1&banktwo=h&value="+a.value+"&name="+a.name;
}

function dostupgo(a,b,f){
  mikodostup=f;
  smotrz(a,b);
}

function newdostup()
{ 
if (xmlHttp.readyState ==1)
mikodostup.innerHTML='<img src="str.gif"/>';

  if (xmlHttp.readyState == 4) 
  {

    if (xmlHttp.status == 200) 
    {
unsverresp();
mikodostup.innerHTML='';
      try
      {
var html=xmlHttp.responseText;
if(html=="not") mikodostup.innerHTML="ошибка";
else mikodostup.innerHTML="<img src='log_"+html+".png'>";
      }
      catch(e)
      {
        displayError(e);
      }
    } 
   else testinternet(1);
  }

}

function potvibor(){
if(document.getElementById("poklv").value==3 && document.getElementById("keyword").value.length>1) smotrz('podrpotkli', 'potik');
else document.getElementById("ajaxo").innerHTML='<div id="wrapper"><div id="content"><div id="box"><h3 id="adduser">Поиск потенциальных клиентов</h3>'+
'<form name="f1" id="f1"><fieldset id="rekvizit"><legend>Поиск по статусу</legend><br><div id="butony"><input id="statuspotz0" value="Не актуальный или нет такого клиента" onclick="upravpotami(0,\'\');" type="button">'+
'<br><input id="statuspotz1" value="Не хочет с нами работать" onclick="upravpotami(1,\'\');" type="button"><br><input id="statuspotz3" value="Потенциальный клиент" onclick="upravpotami(3,\'\');" type="button"><br>'+
'<input id="statuspotz5" value="В активной разработке" onclick="upravpotami(5,\'\');" type="button"><br><input id="statuspotz7" value="Близок к заключению договора" onclick="upravpotami(7,\'\');" type="button"><br>'+
'</div></fieldset><input type="hidden" name="status" id="status"></fieldset>'+
'<fieldset id="rekvizit"><legend>Поиск по адресу</legend><br><label>Введите любую часть адреса</label><input type="text" name="adres" id="adres" size="70"></fieldset>'+
'<fieldset id="rekvizit"><legend>Поиск по телефону</legend><br><label>Введите любую часть телефона</label><input type="text" name="telef" id="telef" size="70"></fieldset><br><br><div align="center">'+
'<input type="button" id="button1" onclick="smotrz(\'potresult\',document.getElementById(\'status\').value+\'&adres=\'+document.getElementById(\'adres\').value+\'&telef=\'+document.getElementById(\'telef\').value);" value="Поиск"></div>'+
'</form></div></div></div>';
/*<input id="statuspotz9" value="Является нашим клиентом" onclick="upravpotami(9,\'\');" type="button"><br>*/
}

function potzagr(){
document.getElementById("ajaxo").innerHTML='<div id="wrapper"><div id="content"><div id="box"><h3 id="adduser">Добавление списка потенциальных клиентов</h3>'+
'<form enctype="multipart/form-data" action="potbaze-xls.php" method="post" id="f1"><fieldset id="rekvizit"><legend>Экспорт базы</legend>'+
'<input name="MAX_FILE_SIZE" value="3000000" type="hidden">Загрузить файл: <br /><input name="userfile" size="35" type="file"><br /><a href="primer.php" target="_blank">требования к файлу</a><br><br>'+
'<input type="radio" name="zamen" value="1" CHECKED>Добавить всех клиентов<br />'+
'<input type="radio" name="zamen" value="2">Не добавлять клиентов с одинаковыми именами, присутствующими в базе<br />'+
'<input type="radio" name="zamen" value="3">Добавить всех клиентов, клиентам с одинаковыми именами добавить числовой идентификатор<br /><br /><input value="Загрузить" type="submit">'+
'</fieldset></form></div></div></div>';
}

function addnewpotklinow(a,b){
var temps=document.getElementById("textap"+a).value;
while (temps.search('\n')!=-1) temps=temps.replace('\n', '<br>');
if(partnerpos==2) temps=temps+"&partpro="+document.getElementById("partpro"+a).value;
var ula=a+"&status="+document.getElementById("status"+a).value+"&datas="+document.getElementById("dateob"+a).value+"&times="+document.getElementById("timeob"+a).value+"&adres="+document.getElementById("adres"+a).value+"&nazvanie="+document.getElementById("nazvanie"+a).value+
"&tefon="+document.getElementById("telefon"+a).value+"&email="+document.getElementById("mail"+a).value+"&rukvo="+document.getElementById("rukvo"+a).value+"&textnew="+temps+"&zakr="+b;
ula=ula+podsobnic("newpotkli");
smotrz("addnewpotkli", ula);
}

function newpotklinow(a,b){
var temps=document.getElementById("textap"+a).value;
while (temps.search('\n')!=-1) temps=temps.replace('\n', '<br>');
if(partnerpos==2) temps=temps+"&partpro="+document.getElementById("partpro"+a).value;
var ula=a+"&status="+document.getElementById("status"+a).value+"&datas="+document.getElementById("dateob"+a).value+"&times="+document.getElementById("timeob"+a).value+"&adres="+document.getElementById("adres"+a).value+
"&tefon="+document.getElementById("telefon"+a).value+"&email="+document.getElementById("mail"+a).value+"&rukvo="+document.getElementById("rukvo"+a).value+"&textnew="+temps+"&zakr="+b;
ula=ula+podsobnic(a);
smotrz("editpotkli", ula);
}

function podsobnic(a){
	var ula="";
	var resheno=0;
for(gg=1;gg<6;gg++){
if(a=="newpotkli"){if(document.getElementById("uukonnew"+gg).innerHTML.length>10) resheno=1; else resheno=0;}
else if(document.getElementById("uu"+a+"konnew"+gg).innerHTML.length>10) resheno=1;
else resheno=0;

if(resheno==1){
	ula=ula+"&zz"+gg+"konname="+document.getElementById("zz"+gg+"konname").value;
	ula=ula+"&zz"+gg+"konothest="+document.getElementById("zz"+gg+"konothest").value;
	ula=ula+"&zz"+gg+"konfamaly="+document.getElementById("zz"+gg+"konfamaly").value;
	ula=ula+"&zz"+gg+"kondeyrogd="+document.getElementById("zz"+gg+"kondeyrogd").value;
	ula=ula+"&zz"+gg+"konpol="+document.getElementById("zz"+gg+"konpol").value;
	ula=ula+"&zz"+gg+"konmilo="+document.getElementById("zz"+gg+"konmilo").value;
	ula=ula+"&zz"+gg+"kontelf="+document.getElementById("zz"+gg+"kontelfzks").value;
}
}
if(a!="newpotkli"){
var essos=document.getElementById("nambercid"+a).value;
if(essos.length>0 && essos!="undefined"){
var splid=essos.split("~");
for(i=0;i<splid.length;i++){
	if(splid[i].length>0){
	ula=ula+"&konname"+splid[i]+"="+document.getElementById("konname"+splid[i]).value;
	ula=ula+"&konothest"+splid[i]+"="+document.getElementById("konothest"+splid[i]).value;
	ula=ula+"&konfamaly"+splid[i]+"="+document.getElementById("konfamaly"+splid[i]).value;
	ula=ula+"&kondeyrogd"+splid[i]+"="+document.getElementById("kondeyrogd"+splid[i]).value;
	ula=ula+"&konpol"+splid[i]+"="+document.getElementById("konpol"+splid[i]).value;
	ula=ula+"&konmilo"+splid[i]+"="+document.getElementById("konmilo"+splid[i]).value;
	ula=ula+"&kontelf"+splid[i]+"="+document.getElementById("kontelf"+splid[i]+"zks").value;
	if(document.getElementById("delkon"+splid[i]).checked) ula=ula+"&delkon"+splid[i]+"=on";
	else ula=ula+"&delkon"+splid[i]+"=off";
	}
}}}
return ula;	
}

function newdpotkli(id,tik){
var cDat=new Date();
var ff=cDat.getTime();
var ff2=tik*86400000;
var ff3=ff+ff2;
var sputnikLaunch = new Date(ff3);
var gg1=addZero(sputnikLaunch.getUTCDate());
var gg2=addZero((sputnikLaunch.getUTCMonth()+1));
var gg3=addZero(sputnikLaunch.getFullYear());
document.getElementById("dateob"+id).value=gg1+"."+gg2+"."+gg3;
}

function addZero(i) {
return (i < 10)? "0" + i: i;
}

function onoffplat(a){
  if(a.value==1) document.getElementById("platpor").style['display']="block";
  else document.getElementById("platpor").style['display']="none";
}

function gruzopoluch(){ 

  if (xmlHttp.readyState == 4) 
  {

    if (xmlHttp.status == 200) 
    {
unsverresp();      
      try
      {
var html=xmlHttp.responseText;
var inhtmlo=document.getElementById("viborgruzopol");
inhtmlo.style['display']="block";
var f1="<br /><h2>Выбор грузополучателя</h2><form id='f1'>";
var barva=html.split("^");
for(i=0;i<barva.length;i++){
bar2=barva[i].split("|");
var essos=bar2[1];
while (essos.search('"')!=-1) essos=essos.replace('"', '&quot');
while (essos.search("'")!=-1) essos=essos.replace("'", '&acute'); 
f1=f1+"<fieldset id='rekvizit'><legend>"+bar2[1]+"</legend><div class='gruzpp' onclick=\"gogruzo('"+bar2[0]+"', '"+essos+"');\">Адрес "+bar2[2]+"<br>Р/С "+bar2[3]+
"<br>Банк "+bar2[5]+"<br>БИК "+bar2[6]+"<br>К/С "+bar2[3]+"<br></div></fieldset>";
}
f1=f1+"</form>";
inhtmlo.innerHTML=f1;

      }
      catch(e)
      {
        displayError(e);
      }
    } else testinternet(1);
  }

}

function gogruzo(a,b){
document.getElementById("viborgruzopol").style['display']="none";
document.getElementById("grpre").value=a;
document.getElementById("vidimgruz").value=b;
}
function dropgruz(){
document.getElementById("vidimgruz").value="Он же";
document.getElementById("grpre").value="0";
}

function clearfiltr(){
document.getElementById('munso').value='';
document.getElementById('keyword').value='';
document.getElementById('exampleRange').value=timepoumolch;
}

function addspispost(inp) {
  var temppost="<select name='viborpostavg"+inp+"' id='viborpostavg"+inp+"' onchange='lastpost(this);'><option value='none'>Выбор поставщика</option>";
  /*for(ii=1;ii<=postv.length;ii++){
    if(typeof postv[ii]!= 'undefined') temppost=temppost+"<option value='"+ii+"'>"+postv[ii]+"</option>";
  }*/
  var postvsort=postv.sort();
  if(typeof selectpostvalue!='undefined') tempposteu=tempposteu+"<option value='"+selectpostvalue+"'>"+selectposttext+"</option>";
  for(ii=1;ii<=postvsort.length;ii++){
   if(typeof postvsort[ii]!= 'undefined') {var def=postvsort[ii].split("~~");temppost=temppost+"<option value='"+def[1]+"'>"+def[0]+"</option>";}
  }
  
  temppost=temppost+"</select>";
  document.getElementById("viborpost"+inp).innerHTML=temppost;
}

function addspispostproiz(inp) {
var nowsklad=document.getElementById("sklad"+inp).value;
  var tempskldv="<select name='viborpostavgw"+inp+"' id='viborpostavgw"+inp+"'><option value='none'>"+sknaz[nowsklad]+" -> "+sknaz[nowsklad]+"</option>";
  for(ii=1;ii<=nextoskld.length;ii++){
    if(typeof nextoskld[ii]!= 'undefined' && ii!=nowsklad) {tempskldv=tempskldv+"<option value='"+ii+"'>"+sknaz[nowsklad]+" -> "+nextoskld[ii]+"</option>";}
  }
  tempskldv=tempskldv+"</select>";
  document.getElementById("viborpostw"+inp).innerHTML=tempskldv;
}

function goparty(id, inp, party, cbcena, price){
document.getElementById("edroid").style['display']="none";
document.getElementById("viborpost"+inp).innerHTML='<input id="viborpostavg'+inp+'" value="none" type="hidden">'+party;
document.getElementById("viborpostavg"+inp).value=id;

document.getElementById("naiid"+inp).value=id;

if(isNaN(document.getElementById("cena"+inp).value) || isNaN(document.getElementById("kolvo"+inp).value)) document.getElementById("cena"+inp).value=price;
document.getElementById("opo"+inp).innerHTML=cbcena;
  
}

function cifra(a){
a.value=a.value.replace(',','.');
if(isNaN(a.value)) {alert("Вводите только численные значения!"); a.value="";}
}

function nomdoci(a){
while (a.value.search(',') !=-1){
a.value=a.value.replace(',', '.');}
var gogia = a.value.split('.');
for (var zum in gogia) {
if(!isNaN(gogia[zum]) || !isNaN(Math.abs(gogia[zum])) || gogia[zum]=="-") {}
else {alert("Вводите только численные значения!"); a.value="";}
}
}

function proizskoka(a,b){
cifra(a);//a.value=a.value.replace(',','.');
var tempproa=document.getElementById("treba");
if(b.length<1) var rash='';
else var rash=parseFloat(a.value)*parseFloat(b);
rash=Math.round((rash*1000))/1000;
tempproa.value=rash;
}

function vvodkolva(){
var tempproa=document.getElementById("result"); 
var resd=0;
for(iu=1; iu<kolvosir; iu++){  
var temi=document.getElementById("hochkol"+iu);
cifra(temi);//temi.value=temi.value.replace(",",".");
if(temi.value.length>0 &&!isNaN(temi.value)) 
  {
  var provrk=document.getElementById("select"+iu).value;
  if((iu==2 && provrk==document.getElementById("select1").value) || (iu==3 && provrk==document.getElementById("select1").value) || (iu==3 && provrk==document.getElementById("select2").value) || (iu==4 && provrk==document.getElementById("select1").value) || (iu==4 && provrk==document.getElementById("select2").value) || (iu==4 && provrk==document.getElementById("select3").value) || (iu==5 && provrk==document.getElementById("select1").value) || (iu==5 && provrk==document.getElementById("select2").value) || (iu==5 && provrk==document.getElementById("select3").value) || (iu==5 && provrk==document.getElementById("select4").value) ||
(iu==6 && provrk==document.getElementById("select1").value) || (iu==6 && provrk==document.getElementById("select2").value) || (iu==6 && provrk==document.getElementById("select3").value) || (iu==6 && provrk==document.getElementById("select4").value) ||		
(iu==6 && provrk==document.getElementById("select5").value) ||
(iu==7 && provrk==document.getElementById("select1").value) || (iu==7 && provrk==document.getElementById("select2").value) || (iu==7 && provrk==document.getElementById("select3").value) || (iu==7 && provrk==document.getElementById("select4").value) ||		
(iu==7 && provrk==document.getElementById("select5").value) || (iu==7 && provrk==document.getElementById("select6").value)) {alert("Вы уже выбирали данную продукцию."); temi.value="";}
  if(kolnaim[provrk]<parseFloat(temi.value)) {alert("Нельзя выбирать большее количество, чем есть на складе сырья"); temi.value="";}
  if(provrk=="none") {alert("Выберете сначала наименование сырья"); temi.value="";}
  resd=resd+parseFloat(temi.value);
  }
}
tempproa.value=resd.toFixed(3);
}

function changeprvo(a, b){
if(a.value=="none") {a.options[0].text=""; document.getElementById("realid"+b).value="none";}
else document.getElementById("realid"+b).value=hohoid[a.value];
document.getElementById("hochkol"+b).value="";
	var tempplusall=parseFloat(kolnaim[a.value]);
	var zertemp=0;
	for(ii=1;ii<b;ii++){
		zertemp=zertemp+parseFloat(document.getElementById("hochkol"+ii).value);
	}
	tempplusall=tempplusall+zertemp;
	
	if(tempplusall>=parseFloat(document.getElementById("treba").value))
  document.getElementById("hochkol"+b).value=(parseFloat(document.getElementById("treba").value)-zertemp).toFixed(3);
  else document.getElementById("hochkol"+b).value=kolnaim[a.value];							
  vvodkolva();
}

function proverkproizvodstvo(){
  var errors=0;
  if(parseFloat(document.getElementById("hochkol1").value)<0.001 || isNaN(parseFloat(document.getElementById("hochkol1").value))) errors=1;
  if(document.getElementById("realid2").value.length>0 && document.getElementById("realid2").value!="undefined" && (parseFloat(document.getElementById("hochkol2").value)<0.001 || isNaN(parseFloat(document.getElementById("hochkol2").value)))) errors=2;
  if(document.getElementById("realid3").value.length>0 && document.getElementById("realid3").value!="undefined" && (parseFloat(document.getElementById("hochkol3").value)<0.001 || isNaN(parseFloat(document.getElementById("hochkol3").value)))) errors=3;
  if(document.getElementById("realid4").value.length>0 && document.getElementById("realid4").value!="undefined" && (parseFloat(document.getElementById("hochkol4").value)<0.001 || isNaN(parseFloat(document.getElementById("hochkol4").value)))) errors=4;
  if(errors!=0) alert("Нельзя списывать сырье в количестве меньше 0,001");
  else{
var tetta=document.getElementById("treba");
var ff=document.getElementById("f1");
if(tetta.value.length>0){
var tempproa=document.getElementById("result");
if((tetta.value-tempproa.value)!=0 || tempproa.value.length<1) {
if(hu!="adm" && hu!='склад' && hu!='ДИР') alert("Количество требуемого сырья не соответствует количеству выбранного!");
else {
  var name=window.confirm('Количество требуемого сырья не соответствует количеству выбранного!\nЕсли хотите все равно продолжить, нажмите OK\nДля изменения выбранных параметров нажмите ОТМЕНА');
if(name!=false) subsisab(ff);
else {
  //alert("Количество требуемого сырья не соответствует количеству выбранного!");
  tetta.style.background="red";
  tempproa.style.background="red";}
} }  else subsisab(ff);
} else subsisab(ff);
}}

function subsisab(a){
	for(i=1;i<5;i++){
	document.getElementById("hochkol"+i).disabled=false;
	document.getElementById("prirost"+i).disabled=false;}
	a.submit();
}

function upravpotami(b, idh){
var tee="";
var statp=document.getElementById("status"+idh);
for(i=0;i<10;i=i+2){
tee=document.getElementById("statuspot"+idh+"z"+i); 
if(i==b) tee.style.background="green";
else {
  if(statp.value==i && idh!='') tee.style.background="yellow";
  else tee.style.background="none";
}
if(i==0) i=-1;
}
statp.value=b;
}

function sortpoz(a){
//th.value="Сохранить";
  $(function(){
  $("#sortable"+a).sortable({
    placeholder: "ui-state-highlight",
    opacity: 0.6,
    axis: "y",
    stop: function(event, ui) {
      document.getElementById("busort"+a).style['display']="block";
    },
  });

});

}

function gosort(a){
    ter = $("#sortable"+a).sortable("serialize");
    ter=ter.replace('u[]=', '');
while (ter.search('&u') !=-1){
ter=ter.replace('&u[]=', ',');}
ter=a+"&sorte="+ter;
smotrz('sortchek',ter);
}

function addposit(html, klon){
  strok=document.getElementById("strok");
  myDiv=document.getElementById("ving");
if(strok.value!="0"){
  ara= new Array(parseFloat(strok.value));
  bra= new Array(parseFloat(strok.value));
  cra= new Array(parseFloat(strok.value));
  drf= new Array(parseFloat(strok.value));
  skl= new Array(parseFloat(strok.value));
  nac= new Array(parseFloat(strok.value));
  gai= new Array(parseFloat(strok.value));
  if(klon=='dochek') {
	  zir0= new Array(parseFloat(strok.value));
	  zir1= new Array(parseFloat(strok.value));
	  }
  if(raschsh==2) {odli= new Array(parseFloat(strok.value)); oshi= new Array(parseFloat(strok.value));}
  if(typeof postv != 'undefined' || edro==2 || prvo==2) vipostr= new Array(parseFloat(strok.value));
  if(vibskldch==2) vipostrw= new Array(parseFloat(strok.value));
  for(i=1; i<=parseFloat(strok.value); i++){
  var fo=document.getElementById("kolvo"+i);
  var ff=document.getElementById("cena"+i);
  var fw=document.getElementById("sum"+i);
  var me=document.getElementById("metr"+i);
  var z=document.getElementById("sklad"+i);
  var onc=document.getElementById("nacnka"+i);
  var nai=document.getElementById("naiid"+i);
  if(klon=='dochek') {
	  var zur0=document.getElementById("odoshi"+i);
	  var zur1=document.getElementById("causs"+i);
	  }
  if(raschsh==2) {var dli=document.getElementById("dlina"+i); var shi=document.getElementById("shirina"+i);}
  if(typeof postv != 'undefined' || edro==2 || prvo==2) var oncpotv=document.getElementById("viborpostavg"+i);
  if(vibskldch==2) var oncpotvw=document.getElementById("viborpostavgw"+i);
  ara[i]=fo.value;
  bra[i]=ff.value;
  cra[i]=fw.value;
  drf[i]=me.value;
  skl[i]=z.value;
  nac[i]=onc.value;
  gai[i]=nai.value;
  if(klon=='dochek') {
	  zir0[i]=zur0.value;
	  zir1[i]=zur1.value;
	  }
  if(raschsh==2) {odli[i]= dli.value; oshi[i]= shi.value;}
  if(typeof postv != 'undefined' || edro==2 || prvo==2) vipostr[i]=oncpotv.value;
  if(vibskldch==2) vipostrw[i]=oncpotvw.value;
  }
}
strok.value=parseFloat(strok.value)+1;

if(klon=="klon"){barvaz=html.split("^"); barva=barvaz[0].split("|"); barvaklon=barvaz[1].split("|");}
else barva=html.split("|");

if(klon=="klon") {
  var temkol=parseFloat(barvaklon[0]).toFixed(3);
  var temcen=parseFloat(barvaklon[1]).toFixed(2);
  var temskd=barvaklon[2];
  if(temskd==0) var temsbc=barva[3]; else var temsbc=barva[(8+5*temskd)];/*var temsbc=barva[(5+5*temskd)];*/
}
else {
  var temkol="";
  var temcen=parseFloat(barva[8]).toFixed(2);
  var temskd="0";
  var temsbc=barva[3];  
}
	
if(klon!='dochek') var tjj57="0"; else var tjj57="1";
var teslname=barva[2]; //var teslname=barva[2].replace("~`"," "); teslname=teslname.replace("~`"," "); teslname=teslname.replace("~`"," ");
var f1="<!--"+barva[0]+"--></div><div id=\"smotr19\" class=\"clear\"><input type='hidden' value='0' id='statuspostavki"+barva[0]+"'><a href=\"#\" onclick=\"delpos("+barva[0]+
","+tjj57+");\"/><img src=\"del.png\" width=\"10\" height=\"10\" ></a></div><div id=\"";
if(klon=='dochek') f1=f1+"smotr106";
else f1=f1+"smotr105";
f1=f1+"\">"+teslname;
if(klon!='dochek') f1=f1+" <a href='index.php?posithu=8&j="+teslname+
"' target='_blank'><i class='icon-flag'></i></a></div><div id=\"opo"+barva[0]+"\" class=\"tritri\">"+temsbc+"</div>";
else f1=f1+"</div>";
f1=f1+"<div id=\"smotr333\">"+barva[4]+
"</div><input id='edizma"+barva[0]+"' type='hidden' value='"+barva[4]+"'>";
if(barva[10]!="*") f1=f1+"<div id=\"smotr333\">"+barva[10]+"</div>";
if(klon!='dochek') f1=f1+"<input name=\"mn"+barva[0]+"\" id=\"mn"+barva[0]+"\" value=\""+barva[5]+"\" type=\"hidden\"><div id=\"smotr333\">"+barva[5]+
"</div>";

if(klon!='dochek') var vibsklad="vibskl"; else var vibsklad="vibsklDOC";

if(raschsh==2) {
  if(cookk=='sun' && (barva[7]=="Водосток круглый ПП" || barva[7]=="Водосток круглый ОЦ")){
  	siroko="***";
  }
  else if(!isNaN(barva[11])) siroko=barva[11]; else siroko=rachet_shiriny(teslname);
f1=f1+"<div id=\"smotr333\"><input name=\"shirina"+barva[0]+"\" id=\"shirina"+barva[0]+"\" type=\"text\" onkeyup=\"nulihi(this); keyprdlin("+barva[0]+");\"";
if(!isNaN(siroko)) f1=f1+" value=\""+siroko+"\" disabled"; else f1=f1+" value=\"\"";
f1=f1+"></div><div id=\"smotr333\"><input name=\"dlina"+barva[0]+"\" id=\"dlina"+barva[0]+"\" value=\"";
if(!isNaN(barva[12]) && klon=="klon") f1=f1+barva[12];
if(cookk=='sun' && (barva[7]=="Водосток круглый ПП" || barva[7]=="Водосток круглый ОЦ")) f1=f1+rachet_shiriny(teslname);
f1=f1+"\" type=\"text\" onkeyup=\"nulihi(this); keyprdlin("+barva[0]+");\"></div>"+
"<div id=\"smotr333\"><input name=\"metr"+barva[0]+"\" id=\"metr"+barva[0]+"\" type=\"text\" onkeyup=\"nulihi(this); keyprdlin("+barva[0]+");\" value=\"";
if(!isNaN(barva[5]) && klon=="klon") f1=f1+barva[13];
f1=f1+"\"></div>";}
else if(klon!='dochek')  f1=f1+"<div id=\"smotr333\"><input name=\"metr"+barva[0]+"\" id=\"metr"+barva[0]+"\" type=\"text\" disabled></div>";
f1=f1+"<div id=\"smotr997\"><div id=\"smotrslon\">";
if(barva[6]==1) f1=f1+"<input name=\"sklad"+barva[0]+"\" class=\"mini\" id=\"sklad"+barva[0]+"\" type=\"text\" value='"+temskd+"' onchange='sklnull(this);'></div><ul id=\"chek\">";
else f1=f1+"<input name=\"sklad"+barva[0]+"\" class=\"mini\" id=\"sklad"+barva[0]+"\" type=\"text\" value='"+temskd+"' onchange='skl(this);'></div><ul id=\"chek\">";
if(barva[7]=="Услуги") {f1=f1+"<li><a onclick=\"upup('"+barva[0]+"');\"/ class='viborgood'>Выбор</a><div id='z"+barva[0]+"' style='display: none;'><ul class='myskld"+barva[9]+"'>";
												/*<li><a onclick=\""+vibsklad+"('"+barva[0]+
"', '0', '"+barva[3]+"','us');\"/><font color='black'>Склад 0 <font size=1>"+sknaz[0]+"</font></font><br><br><br></a></li>";*/
var i=0;
sknaz.forEach(function(elem,index){
	if(index==0) {
	f1=f1+"<li><a onclick=\""+vibsklad+"('"+barva[0]+
"', '0', '"+barva[3]+"','us');\"/><font color='black'>Склад 0 <font size=1>"+sknaz[0]+"</font></font><br><br><br></a></li>";
	} 
		else{
i++;												
//for(i=1; i<=barva[9]; i++){ 
/*g=6+5*i;*/g=9+5*i;
f1=f1+"<li><a onclick=\""+vibsklad+"('"+barva[0]+"', '"+index+"', '"+barva[g]+"','us');\"/><font color='black'>Склад "+index+" <font size=1>"+elem+"</font></font><br><br><br></a></li>"; 
}});
f1=f1+"</ul></div>";}
else if(barva[6]==1) f1=f1+"только 0</div>";
else {f1=f1+"<li><a onclick=\"upup('"+barva[0]+"');\" class='viborgood'/>Выбор</a><div id='z"+barva[0]+"' style='display: none;'><ul class='myskld"+barva[9]+"'>";
			/*<li><a onclick=\""+vibsklad+"('"+barva[0]+"', '0', '"+barva[3]+"');\"/><font color='black'>Склад 0 <font size=1>"+sknaz[0]+"</font></font><br><br></a></li>";*/
  var i=0;
	sknaz.forEach(function(elem,index){
	if(index==0) {
	f1=f1+"<li><a onclick=\""+vibsklad+"('"+barva[0]+"', '0', '"+barva[3]+"');\"/><font color='black'>Склад 0 <font size=1>"+sknaz[0]+"</font></font><br><br></a></li>";
	//if(klon=="dochek") i++;
	} 
		else{
	i++;
	//for(i=1; i<=barva[9]; i++){
  g=9+5*i; g2=10+5*i; g3=11+5*i; g4=12+5*i; 
    f1=f1+"<li><a onclick=\""+vibsklad+"('"+barva[0]+"', '"+index+"', '"+barva[g]+"');\"/><font color='black'>Склад "+index+" <font size=1>"+elem+"</font></font><br>Остаток: "+parseFloat(barva[g2]).toFixed(3)+
    "<br>Свободно: <font color='green'>"+parseFloat(barva[g2]-barva[g3]).toFixed(3)+"</font><br>Оплачено: "+parseFloat(barva[g4]).toFixed(3)+"</a></li>";
  }});
f1=f1+"</ul></div>";}

f1=f1+"<input id=\"fcrn0T"+barva[0]+"\" type=\"hidden\" value=\""+barva[8]+"\">";
	var i=0;
	sknaz.forEach(function(elem,index){
	if(index!=0) {
	i++;
	g5=13+5*i;
  f1=f1+"<input id=\"fcrn"+index+"T"+barva[0]+"\" type=\"hidden\" value=\""+barva[g5]+"\">";
	}
});
f1=f1+"<input name=\"mon"+barva[0]+"\" id=\"mon"+barva[0]+"\" type=\"hidden\" value=\""+barva[8]+"\"><input name=\"nai"+barva[0]+"\" id=\"nai"+barva[0]+"\" type=\"hidden\" value=\""+
teslname+"\"><input name=\"naiid"+barva[0]+"\" id=\"naiid"+barva[0]+"\" type=\"hidden\" value=\""+
barva[1]+"\"><input name=\"iii"+barva[0]+"\" id=\"iii"+barva[0]+"\" type=\"hidden\" value=\""+barva[1]+"\"></div>";
if(klon!='dochek') {f1=f1+"<div id=\"smotr333\"><input id=\"nacnka"+barva[0]+"\" type=\"text\" value=\"\" onchange=\"keyprnac("+barva[0]+");\"></div>"+
"<div id=\"smotr3\"><input name=\"kolvo"+barva[0]+"\"";
if(cookk=='sun') {
	if(barva[7]=="Профнастил ОЦ"||barva[7]=="Профнастил ПП"||barva[7]=="Металлочерепица"||barva[7]=="Лист плоский ОЦ рулон"||barva[7]=="Лист плоский ОЦ"||barva[7]=="Лист плоский ПП рулон"||barva[7]=="Лист плоский ПП")
	f1=f1+" disabled";}
f1=f1+" id=\"kolvo"+barva[0]+
"\" type=\"text\" onchange=\"nuli(this); keypr("+barva[0]+");\" onkeyup=\"keypr("+barva[0]+");\" value=\""+temkol+"\"></div><div id=\"smotr6\"><input name=\"cena"+barva[0]+
"\" id=\"cena"+barva[0]+"\" type=\"text\" value=\""+temcen+"\" onchange=\"nutwo(this); keypr("+barva[0]+",'nonemetr');\" onkeyup=\"keypr("+barva[0]+",'nonemetr');\" onblur=\"prndscena("+barva[0]+
");\"></div><div id=\"smotr6\"><input name=\"sum"+barva[0]+"\" id=\"sum"+barva[0]+"\" type=\"text\" value=\"0.00\" disabled></div>"; 
if(typeof postv != 'undefined' || edro==2 || prvo==2 || vibskldch==2) f1=f1+"<div class='clear'></div><div id='smotr2'></div>";
if(vibskldch==2) f1=f1+"<div id='viborpostw"+barva[0]+"' class='vibpostplanc'><input type='hidden' id='viborpostavgw"+barva[0]+"' value='none'></div>";
if(typeof postv != 'undefined' || edro==2 || prvo==2) f1=f1+"<div id='viborpost"+barva[0]+"' class='vibpostplanc'><input type='hidden' id='viborpostavg"+barva[0]+"' value='none'></div>";
}
else {
	if(teslname.toLowerCase().indexOf( "линза" )!=-1) {
		var ttmq7=""; var ttmq8="";
		if(barva[barva.length-2]=="OS") var ttmq7=" selected"; else if(barva[barva.length-2]=="OD") var ttmq8=" selected";
		var gh73='<select class="odosselect" name="odoshi'+barva[0]+'" id="odoshi'+barva[0]+
	'"><option value="-">?</option><option value="OD"'+ttmq8+'>OD</option><option value="OS"'+ttmq7+'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OS</option></select>';
	if(document.getElementById("causeli").value=="1") var gh74='<option value="-">?</option>';
	else var gh74='<option value="Подбор">Подбор</option>';
	}
	else {var gh73="-<input type='hidden' name='odoshi"+barva[0]+"' id='odoshi"+barva[0]+"' value=''>"; var gh74="-";}
		
	f1=f1+'<div id="smotr333">'+gh73+'</div><div id="smotr52">';
	if(gh74=="-") f1=f1+gh74+"<input type='hidden' name='causs"+barva[0]+"' id='causs"+barva[0]+"' value=''>";
	else f1=f1+'<div id="sakura'+barva[0]+'"><select class="odosselect" name="causs'+barva[0]+'" id="causs'+barva[0]+
	'" onchange="zamena(this,'+barva[0]+');">'+gh74+'<option value="Переподбор">Переподбор</option><option value="Замена">Замена</option><option value="Исправление">Исправление</option></select></div>';
	
	f1=f1+'</div>';
	
	f1=f1+"<div id='smotr3'><input name='kolvo"+barva[0]+"' value='"+barva[11]+"' id='kolvo"+barva[0]+
	"' type='text' onclick='if(this.value==\"-\") this.value=\"\";' onchange='keyprDOC("+barva[0]+");' onkeyup='keyprDOC("+barva[0]+");' autocomplete='off'></div>"+
	"<div id='smotr6'><input name='cena"+barva[0]+"' id='cena"+barva[0]+"' readonly></div>"+
	"<div id='smotr6'><input name='sum"+barva[0]+"' id='sum"+barva[0]+"' readonly></div>"+
	"<div id='smotr6'><input name='skidka"+barva[0]+"' id='skidka"+barva[0]+"' readonly></div>"+
	"<div id='smotr6'><input name='sumitogo"+barva[0]+"' id='sumitogo"+barva[0]+"' readonly></div>"+
	"<input name=\"metr"+barva[0]+"\" id=\"metr"+barva[0]+"\" type=\"hidden\">"+
	"<input name=\"nacnka"+barva[0]+"\" id=\"nacnka"+barva[0]+"\" type=\"hidden\">"+
	"<input type='hidden' id='viborpostavg"+barva[0]+"' value='none'>";
}
f1=f1+"<br /><br /><!--ww"+barva[0]+"-->";
myDiv.innerHTML=myDiv.innerHTML+f1;
if(strok.value>1){
  for(i=1; i<strok.value; i++){
  var ko=document.getElementById("kolvo"+i);
  var ff=document.getElementById("cena"+i);
  var fw=document.getElementById("sum"+i);
  var me=document.getElementById("metr"+i);
  var z=document.getElementById("sklad"+i);
  var onc=document.getElementById("nacnka"+i);
  var nai=document.getElementById("naiid"+i);
  if(klon=='dochek') {
	  var zur0=document.getElementById("odoshi"+i);
	  var zur1=document.getElementById("causs"+i);
	  }
  if(raschsh==2) {var dli=document.getElementById("dlina"+i); var shi=document.getElementById("shirina"+i);}
  if(typeof postv != 'undefined' || edro==2 || prvo==2) var oncpotv=document.getElementById("viborpostavg"+i);
  if(vibskldch==2) var oncpotvw=document.getElementById("viborpostavgw"+i); 
  ko.value=ara[i];
  me.value=drf[i];
  ff.value=bra[i];
  fw.value=cra[i];
  z.value=skl[i];
  onc.value=nac[i];
  nai.value=gai[i];
   if(klon=='dochek') {
	  zur0.value=zir0[i];
	  zur1.value=zir1[i];
	  }
  if(raschsh==2) {dli.value=odli[i]; shi.value=oshi[i];}
  if(typeof postv != 'undefined' || edro==2 || prvo==2) oncpotv.value=vipostr[i];
  if(vibskldch==2) oncpotvw.value=vipostrw[i];
  }
}
if(klon=='dochek') susum();
}

function podstava(a,b){
	var ss=parseFloat(document.getElementById("strok").value);
	document.getElementById("dlina"+ss).value=b;
	document.getElementById("viborgruzopol").style['display']="none";
	for(upk=1; upk<=parseFloat(strok.value)-1; upk++){
	if((document.getElementById("nai"+upk).value.indexOf(a))+1==1) {sug[upk]="zad";}
	}
}

function rachet_shiriny(teslname){
var a="("; var b=")"; 
  var signy1=teslname.indexOf(a);
  var signy2=teslname.indexOf(b);
  var siroko=teslname.substring(signy1+1,signy2);
  if(!isNaN(siroko)) siroko=parseFloat(siroko)/1000; else siroko="";
  return siroko;}
  
function bufer(id,sklad){
    document.getElementById("ahref"+id).style['color']="black";
    smotrz("intobufer","="+id+"&sklad="+sklad);
  }
function sleduskld(id,sklad){
    document.getElementById("sledusk"+id).style['color']="black";
    var sd=document.getElementById("gfvbh").value;
    smotrz("nextskldch",id+"&sklad="+sklad+"&nextskld="+document.getElementById("gfvbh").value);
  } 
function realperemg(a, b){
  cifra(a);
  if(parseFloat(a.value)>parseFloat(document.getElementById("real"+b).value)) {
    alert("Нельзя переместить товар в количестве большем, чем свободно на складе.");
    a.value=document.getElementById("real"+b).value;
  }
  }
function vivodpot(barva, nee){
  if(barva[1]=="НОВЫЙ") var functia="addnewpotklinow";
  else var functia="newpotklinow";
if(barva[7].length<2) barva[7]="Не было обращений";
else {while (barva[7].search('~as1~') !=-1){
barva[7]=barva[7].replace('~as1~', '<font color="blue">');
barva[7]=barva[7].replace('~as2~', '</font><br>');
barva[7]=barva[7].replace('~as3~', '<br><br>');
}}

if(barva[6].length<1) barva[6]="свободный";

var cDat=new Date();
cDat=cDat.getDay();
var zytula="<div id='dutsmall'>"; var cc=1;
for(r=1;r<7;r++){
if((cDat+cc)==6||(cDat+cc)==13||(cDat+cc)==20) cc=cc+2;
else if((cDat+cc)==7||(cDat+cc)==14||(cDat+cc)==21) cc=cc+1;
zytula=zytula+"<input type='button' value='+"+cc+"' onclick='newdpotkli("+realb+", "+cc+");'>&nbsp;&nbsp;&nbsp;&nbsp;";
if(r==5) cc=14; else cc=cc+1;
} 
if(barva[10]=="DfPortZx") barva[10]=""; else barva[10]="<input type='button' id='button1' style='width:400px;' value='Сохранить и Закрепить за мной' onclick='"+functia+"(\""+realb+"\",2);'><br><br>";
var tempiner='<div id="wrapper"><div id="content"><div id="box"><h3 id="adduser">Потенциальный Клиент '+barva[1]+
'</h3><form name="f1" id="f1"><fieldset id="rekvizit"><legend>Статус</legend>';
tempiner=tempiner+"<br /><div id='butony'><input type='button' id='statuspot"+realb+"z0' value='Не актуальный или нет такого клиента' onclick='upravpotami(0,"+realb+");'><br />";
tempiner=tempiner+"<input type='button' id='statuspot"+realb+"z1' value='Не хочет с нами работать' onclick='upravpotami(1,"+realb+");'><br />";
tempiner=tempiner+"<input type='button' id='statuspot"+realb+"z3' value='Потенциальный клиент' onclick='upravpotami(3,"+realb+");'><br />";
tempiner=tempiner+"<input type='button' id='statuspot"+realb+"z5' value='В активной разработке' onclick='upravpotami(5,"+realb+");'><br />";
tempiner=tempiner+"<input type='button' id='statuspot"+realb+"z7' value='Близок к заключению договора' onclick='upravpotami(7,"+realb+");'><br />";
tempiner=tempiner+"<input type='button' id='statuspot"+realb+"z9' value='Является нашим клиентом' onclick='upravpotami(9,"+realb+");'><br /></div>";
if(partnerpos==2) {if(barva[11]<0.01) barva[11]=""; tempiner=tempiner+"<br><label>Партнерский процент</label><input id='partpro"+realb+"' value='"+barva[11]+"' type='text' onkeyup='zalnul(this);'>";}
tempiner=tempiner+"</fieldset><input type='hidden' id='status"+realb+"' value='"+barva[8]+"'><fieldset id='rekvizit'><legend>Следующее обращение</legend><br />Дата следующего обращения:<br /><input type='text' id='dateob"+realb+"' value='"+
barva[9]+"'><input type='text'  id='timeob"+realb+"' value='09:00' style='display:none;'"+

"onKeyUp="+'"dFilter(event.keyCode, this, '+"'# /#'"+');"'+

"><i class='icon-clock-1' onClick='displaytime("+'"timeob'+realb+'"'+")'></i><br /><br />"+zytula+
"</div></fieldset><fieldset id='rekvizit'><legend>Данные компании</legend>";
if(barva[1]=="НОВЫЙ") tempiner=tempiner+"<br><label>Название клиента</label><input type='text' id='nazvanie"+realb+"' size='70' value='"+barva[2]+"'><br>";
tempiner=tempiner+"<br><label>Адрес</label><input type='text' id='adres"+realb+"' size='70' value='"+barva[2]+"'><br><label>Телефоны</label>"+
"<input type='text' size='70' id='telefon"+realb+"' value='"+barva[3]+"'><br><label>E-mail</label><input type='text' id='mail"+realb+"' size='70' value='"+barva[4]+"'>"+
"<br><label>Руководство</label><input type='text' size='70' id='rukvo"+realb+"' value='"+barva[5]+"'><br><label>Закреплен менеджер</label><span id='manager"+realb+"'>"+barva[6]+
"</span><br></fieldset>";
tempiner=tempiner+risuykontakt(barva[0],barva[14],'');
tempiner=tempiner+"<fieldset id='rekvizit'><legend>История разработки</legend><br><label>История общения</label><div style='display:block;float: left;'>"+barva[7]+
"</div><div style='clear: both;'></div><br><label>Добавить историю</label><textarea id='textap"+realb+"'></textarea>"+barva[12]+"<br></fieldset><div align='center'>"+barva[10]+
"<input type='button' id='button1' value='Сохранить' onclick='"+functia+"(\""+realb+"\",1);'></div></form></div><input type='button' value='Переброс в новую базу' onclick='window.open(\"perebros.php?id="+realb+"\");'><br><br></div></div>";  
return tempiner;
}


var ic=0;
function dFilter(key, textbox, dFilterMask) {
  //textbox.value=123;
  //нужна функция ввода времени по маске...ничего не придумывается...
  if (textbox.value.length>2) {
    if (textbox.value.length==3) {var r=textbox.value.substr(0, 2)+':'+textbox.value.substr(2, 3);textbox.value=r;}; 
    if (textbox.value.length>5) {
      switch (ic) {
        case 0: {
          ic=1;
          var r=textbox.value.substr(5, 1)+textbox.value.substr(1, 1)+textbox.value.substr(2, 3);textbox.value=r;
          break;
        }
        case 1: {
          ic=3;
          var r=textbox.value.substr(0, 1)+textbox.value.substr(5, 1)+textbox.value.substr(2, 3);textbox.value=r;
          break;
        }
        case 3:{
          ic=4;
          var r=textbox.value.substr(0, 3)+textbox.value.substr(5, 1)+textbox.value.substr(4, 1);textbox.value=r;
          break;
        }
        case 4:{
          ic=0;
          var r=textbox.value.substr(0, 4)+textbox.value.substr(5, 1);textbox.value=r;
          break;
        }
      }
    }  
  }
}


////////////////////////////////////////////////////////////

function displaytime(timeob) {
  //timeob.style.display='inline';
  var element = document.getElementById(timeob);
  element.style.display="inline";
}
function addpot(){
realb=1;
barva= new Array();
for(g=0;g<12;g++) barva[g]="";
barva[9]="не запланировано";
barva[1]="НОВЫЙ";
var tempiner=vivodpot(barva,'new'); 
var mydivajax=document.getElementById("ajaxo");
mydivajax.innerHTML=tempiner;
}

function editsumosn(a){
	var temppp="alfa.php?sohr="+a+"&sum="+document.getElementById("all"+a).value+"&namb="+document.getElementById("nambers"+a).value;
	location.href=temppp;
}

function proizvoalert(a){
  alert("Нельзя изменять количество уже произведенной продукции.");
  document.getElementById("kolvo"+a).value=document.getElementById("rkv"+a).value;
}
function planpotkli(){
  //var tempiner=vivodpot(barva);
  var mydivajax=document.getElementById("ajaxo");
  mydivajax.innerHTML=tempiner;
}


function paintgraf(divfordiagram,cat,data,title) {
$(function () {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: divfordiagram
            },
            title: {
                text: title
            },
            xAxis: {
                categories: cat
            },
            labels: {
                items: [{ 
                    style: {
                        left: '40px',
                        top: '8px',
                        color: 'black'
                    }
                }]
            },
            legend: {
                enabled: false
            },
            yAxis: {
                title: '',
                min: 0
                
            },
            series: [{            
                type: 'spline',
                data: data[0],
                name:'Звонки',
                marker: {
                  enabled: false,
                        states: {
                            hover: {
                                enabled: true,
                                symbol: 'circle',
                                radius: 5,
                                lineWidth: 1
                            }
                        }    
                }
            },
            {            
                type: 'spline',
                data: data[1],
                name:'Встречи',
                marker: {
                  enabled: false,
                        states: {
                            hover: {
                                enabled: true,
                                symbol: 'circle',
                                radius: 5,
                                lineWidth: 1
                            }
                        }    
                }
            },
            {            
                type: 'spline',
                data: data[2],
                name:'Договоренность о  встрече',
                marker: {
                  enabled: false,
                        states: {
                            hover: {
                                enabled: true,
                                symbol: 'circle',
                                radius: 5,
                                lineWidth: 1
                            }
                        }    
                }
            }]
        });
    });
    
});
}

function deleteoplata(id, dat, kontra, sum){
	var newsko=window.confirm("Вы уверены, что хотите поставить оплату как неразнесенную\nот "+
  dat+"\nот "+kontra+"\nна сумму "+sum+"\n?");
  if(newsko==true) {smotrz("deleteoplata", id);
}}

function subeditnazdel(a,b){
	var v=b.value+"&id="+a;
	smotrz('editsubgrnezdel', v);
}

function subeditnazdelpro(a,b){
	var v=b.value+"&id="+a;
	smotrz('editsubgrnezdelpro', v);
}

function searchnumberzakaz(){
	var name=window.prompt('Введите искомый номер');
	smotrz('searchnumberzak', name);
}

function checkselectall(a,ids){
	for(var i=1;i<document.getElementById("itogo"+ids).value;i++){
         if(a.checked) document.getElementById("chekss"+ids+"_"+i).checked=true;
         else document.getElementById("chekss"+ids+"_"+i).checked=false;
         }
}

function subokrasperdsk(a){
	var er=0;
	if(document.getElementById("prihodplus"+a).checked){
		if(document.getElementById("usluga"+a).value=="none") {er=1; alert("Выберете услугу.");}
		if(document.getElementById("kk"+a).value.length<1) {er=1; alert("Введите количество.");}
		if(document.getElementById("cc"+a).value.length<1) {er=1; alert("Введите цену.");}
		if(document.getElementById("postav"+a).value=="none") {er=1; alert("Выберете поставщика.");}
		if(document.getElementById("osnovan"+a).value.length<1) {er=1; alert("Введите основание");}
		}
	if(er==0) {var tt=document.getElementsByName("f1_"+a)[0].submit();}
}

function toprihsunrascet(a){
	var k=document.getElementById("kk"+a);
	var c=document.getElementById("cc"+a);
	var s=document.getElementById("ss"+a);
	var t=(parseFloat(k.value)*parseFloat(c.value)).toFixed(2);	
	if(!isNaN(t)) s.value=t; 
}

function prov_namekat(a){
	if(a.value=="Услуги" || a.value=="Прочее") document.getElementById("namekate").checked=false;
}

function prvk_na_usl(){
	if(document.getElementById("namekate").checked==true && (document.getElementById("kategor").value=="Услуги" || document.getElementById("kategor").value=="Прочее"))
	{alert("В категориях 'Услуги' и 'Прочее' название категории не может быть включено в наменование."); document.getElementById("namekate").checked=false;}
	postroy_name(0);
}

function postroy_name(th){if(th.value=="end1") {huh(1);} else if(th.value=="end2") {huh(2);} else if(th.value=="end3") {huh(3);}
else{
	if(document.getElementById("namekate").checked==true) {
		if(document.getElementById("kategor").value!="") var tef=document.getElementById("kategor").value;
		else if(typeof document.getElementById("newkatu") != 'undefined') var tef=document.getElementById("newkatu").value;
	}
	else var tef="";
	if(document.getElementById("osnr1").value=="end") var w1=""; else w1=document.getElementById("osnr1").value;
	if(document.getElementById("osnr2").value=="end") var w2=""; else w2=document.getElementById("osnr2").value;
	if(document.getElementById("osnr3").value=="end") var w3=""; else w3=document.getElementById("osnr3").value;
	tef=tef+" "+w1+" "+w2+" "+w3;
	document.getElementById("posit").innerHTML=tef;
}}

function subformzaya(){
if(cookk=="sun"){
for(i=1; i<=parseFloat(strok.value); i++){
document.getElementById("strok"+i).disabled=false;
  }
}
document.getElementById("f1").submit();
}

function provnasum(i){
var oki=1;
var cikle=document.getElementById("jjk"+i);
for(yy=0;yy<cikle.children.length;yy++){
	if(cikle.children[yy].id=="smotr7") if(cikle.children[yy].children[0].value<0.01) {oki=0; alert('Вы не заполнили суммы позиций.'); break;}
}
return oki;
} 

function mendlin(a,b){
	var name=window.prompt('Введите ширину в Метрах');
	name=name.replace(",",".");
	a.innerHTML=name;
var kd=Math.floor(1.25/parseFloat(name));
var tr=1.25/(kd*parseFloat(name));
	document.getElementById("ssss").value=tr;
	newpodschekshi(b);
}
function dmendlin(a,b){
	var name=window.prompt('Введите длину в Метрах');
	name=name.replace(",",".");
	a.innerHTML=name;
	newpodschekshi(b);
}
function newpodschekshi(c){
	var shi=parseFloat(document.getElementById("silver").text);
	var dli=parseFloat(document.getElementById("dsilver").text);
	var kooshi=parseFloat(document.getElementById("ssss").value);
	var koodli=parseFloat(document.getElementById("dddd").value);
	var kol=parseFloat(document.getElementById("kolvoproiz").value);
	if(koodli<2){
	if(c=="шт") var ret=shi*dli*kol*kooshi*koodli;
	else if(c=="пм") var ret=shi*kol*kooshi*koodli;
	else alert("Ошибка. Ед.изм не шт и не пм!");
	ret=Math.round((ret*1000))/1000;
	document.getElementById("treba").value=ret;
	document.getElementById("kolvoproiz").setAttribute("onkeyup", "newpodschekshi('"+c+"')");
	}
	else alert("Коэфф. длины слишком большой!");
}

function privatelogi_1(a, h){
	var tek=document.getElementById("idvedom");
	if(h.checked) tek.value=tek.value+a+",";
	else tek.value=tek.value.replace(a+",", "");
}
function privatetwologi_1(a){
document.getElementById('chekino').style['display']='none';
if(a==2) smotrz("logi_2",document.getElementById('idvedom').value);
else if(a==1) smotrz("logi_under2",document.getElementById('idvedom').value);
}
function privatelogi_3(a){
document.getElementById('oplold').value=document.getElementById('oplold').value.replace(",",".");
if(document.getElementById('exampleY').value.length!=10) alert("Поле даты не заполнено");
else if(isNaN(document.getElementById('oplold').value)) alert("Поле оплаты не заполнено");
else if(isNaN(document.getElementById('newvodila').value)) alert("Водитель не выбран");
else if(document.getElementById('oplold').value<0) alert("Поле оплаты не может быть меньше нуля.");
else {
var tar=document.getElementById("idvedom").value+"&dataput="+document.getElementById("exampleY").value+"&klien="+
document.getElementById("klien").value+"&adresold="+document.getElementById("adres").value+"&telold="+document.getElementById("tel").value+
"&menold="+document.getElementById("menold").innerHTML+"&cheold="+document.getElementById("cheold").innerHTML+"&oplold="+document.getElementById("oplold").value+
"&vedold="+document.getElementById("vedold").innerHTML+"&tonold="+document.getElementById("tonold").innerHTML+"&idkontri="+document.getElementById("idkontri").value+
"&chidque="+document.getElementById("chidque").value+"&vedidque="+document.getElementById("vedidque").value+
"&nahvodila="+document.getElementById("newvodila").value+"&mashrooms="+document.getElementById("mashrooms").value+"&mashrooms0="+document.getElementById("mashrooms0").value;
if(a==1) location.href="napravleno.php?a=logi_ok&b="+tar;
else if(a==3) location.href="napravleno.php?a=logi_okok&b="+tar;
else {document.getElementById('buut').style['display']='none';
document.getElementById('buuttwo').style['display']='none';
/*document.getElementById('buut3').style['display']='block';*/ document.getElementById('buut3').type='button';
smotrz("logi_1", document.getElementById("vedidque").value);}
}
}

//раскрытие-закрытие onchange="chanc(this,\'vodilica\');"
function chanc(th,divs){
if(th.checked) document.getElementById(divs).style['display']='block';
else document.getElementById(divs).style['display']='none';
}

function privatedellogi(a){
var name=window.prompt('Введите причину отмены рейса.');
if(name.length>4) {dasist=name; smotrz("dellogik",a);}
else alert("Укажите причину разборчиво.");
}

function newfiltrlogi(){
var ddii=document.getElementById('klien');
if(ddii.value.length>2 && isNaN(ddii.value) || ddii.value.length>5 && !isNaN(ddii.value)){
var resulete="<select id='klien' onchange='smotrz(\"logi_0\",this.value);'><option></option>";
var klie=tarasfiltr.split("|");
for(i=0;i<klie.length;i++){
if(klie[i].length>0){
var klieso=klie[i].split("~");
if(!isNaN(ddii.value) && klieso[2].indexOf(ddii.value)==0) resulete=resulete+"<option value='"+klieso[0]+"'>"+klieso[2]+" ___ "+klieso[1]+"</option>";
else if(klieso[1].indexOf(ddii.value)==0) resulete=resulete+"<option value='"+klieso[0]+"'>"+klieso[1]+"</option>";
}}
resulete=resulete+"<option value='none'>другие...</option></select>";
document.getElementById('newfi').innerHTML=resulete;
	}
}

function samsonjak(b){
	var men=document.getElementById('loggg'+b).innerHTML;
	var r1=men.indexOf("<td colspan");
	var r2=men.indexOf("</td>",r1);
	var resu=men.substring(0,r1)+"<td class='mang' id='vedoldnew'>Ведомости</td><td class='mang' id='tonoldnew'>Тоннаж"+men.substring(r2);
	document.getElementById('renta').innerHTML=resu;
	document.getElementById('endornot').value=b;
	smotrz("logi_1",b+"&tara=osia");
}

function lastlogikadd(a){
var zaea='<div style="float: right; margin: 15px;">'+
'<a onclick="document.getElementById(\'chekino\').style[\'display\']=\'none\';" href="#" style=\'color:#000\'>   X   </a>'+
'</div><br><h2>Километров на конец</h2><br><form method="post" action="logistik.php?a=addlastdata"><input name="kmkon" type="text" onkeyup="cifra(this);" style="margin-left:29px"><br>'+
'<br><br><h2>Заправки рейса</h2><br>'+
'<input name="idlist" type="hidden" value="'+a+'">'+
'<table><tr><th>Дата<th>Цена литра<th>Литров залито</tr>'+
'<tr><td><input name="exampleS1" id="exampleS1" type="text"></td><td><input name="cena1" type="text" onkeyup="zalnul(this);"></td><td><input name="litr1" type="text" onkeyup="nulihi(this);"></td></tr>'+
'<tr><td><input name="exampleS2" id="exampleS2" type="text"></td><td><input name="cena2" type="text" onkeyup="zalnul(this);"></td><td><input name="litr2" type="text" onkeyup="nulihi(this);"></td></tr>'+
'<tr><td><input name="exampleS3" id="exampleS3" type="text"></td><td><input name="cena3" type="text" onkeyup="zalnul(this);"></td><td><input name="litr3" type="text" onkeyup="nulihi(this);"></td></tr>'+
'<tr><td><input name="exampleS4" id="exampleS4" type="text"></td><td><input name="cena4" type="text" onkeyup="zalnul(this);"></td><td><input name="litr4" type="text" onkeyup="nulihi(this);"></td></tr>'+
'<tr><td><input name="exampleS5" id="exampleS5" type="text"></td><td><input name="cena5" type="text" onkeyup="zalnul(this);"></td><td><input name="litr5" type="text" onkeyup="nulihi(this);"></td></tr>'+
'</table><br><br><input type="submit" value="Сохранить" id="button6"></form>';


document.getElementById('chekino').innerHTML=zaea;
document.getElementById('chekino').style['display']='block';
$(document).ready(function(){ $('#exampleS1').attachDatepicker(); });
$(document).ready(function(){ $('#exampleS2').attachDatepicker(); });
$(document).ready(function(){ $('#exampleS3').attachDatepicker(); });
$(document).ready(function(){ $('#exampleS4').attachDatepicker(); });
$(document).ready(function(){ $('#exampleS5').attachDatepicker(); });
}

/*function izoadd(id){
var tempo="<form action='uploadimg.php' method='post' enctype='multipart/form-data'>"+
"<input name='file[]' type='file' multiple='true' />"+
"<input type='submit' value='Загрузить' />"+
"</form>";
	if (document.getElementById('izobr')) {
	d = document.getElementById('izobr');
	d.style['display']="block";
	} 
	else {
d = document.createElement('div');
d.className='izo';
d.id="izobr";
document.body.appendChild(d);
	}
d.innerHTML=tempo;
}*/

function izo_1(a, unik, ishta, rndd, izinotizo){
if(a.indexOf("ull")==1) {document.getElementById("imageadd").value=a; ishta=ishta+"&nuliki="+a;}
document.getElementById("spa"+unik+rndd).style['display']="none";
document.getElementById("sp"+unik+rndd).innerHTML="<a href='#' onClick='smotrz(\"obnovjpg\",\""+unik+"&ishta="+ishta+"&rndd="+rndd+"&izinotizo="+izinotizo+"\");'>Обновить</a>";
}

function crnewal(text,a){
if(a==1) a="viborgruzopol"; else if(a==2) a="bigform";
if (document.getElementById(a)) {
	izobroo = document.getElementById(a);
	izobroo.style['display']="block";
	} 
else {
izobroo = document.createElement('div');
izobroo.id=a;
document.body.appendChild(izobroo);}
izobroo.innerHTML="<div style=\"float: right; margin: 10px;\"><a style='color:#fff' onclick=\"document.getElementById('"+a+"').style['display']='none';\" href=\"#\"><b>   X   </b></a></div><br><br><div style='display:block; margin:10px;'>"+text;
}

function primtextalert(idd, text){
	var ttee="";
	if(text!=""){
		var zookko=text.split("~`");
		ttee=ttee+'<h4>Примечания:</h4><br>';
		for(i=0;i<zookko.length;i++){
  		if(zookko[i]!=""){zookko2=zookko[i].split("@@@");
  		ttee=ttee+'<font color="#000"><b>'+zookko2[0]+':</b></font><br>'+zookko2[1]+'<br><br>';
		}}}
		ttee=ttee+'<br><br><textarea id="textar'+idd+'"></textarea><br><br><input id="button1" type="button" value="Добавить" onClick="printeclik('+idd+')"></div>';
crnewal(ttee,1);
}

function prtxrt(id){
	var ttee='<h4>Создать общий комментарий к заказу</h4><br><br><textarea id="textar'+id+
		'"></textarea><br><br><input id="button1" type="button" value="Создать" onClick="smotrz(\'adovkoment\',\''+id+'&text=\'+document.getElementById(\'textar'+id+'\').value);"></div>';
crnewal(ttee,1);
}

function printeclik(idd){
	var ef=document.getElementById("textar"+idd).value;
	if(ef.length>0){
	document.getElementById('viborgruzopol').style['display']='none';
	smotrz('addtextcomproiz', idd+'&text='+ef);}
}

function to_chan(a, id){
	a.style['border']='2px solid #609d66';
}
function go_chan(a, id, huhu){
	if(a=="delete"){
		smotrz("pricered","y&kuda=delete&id="+id);
	}
	else{
	var objt=document.getElementById(a+id);
	objt.style['border']='none';
	objt.style.background="yellow";
	if(huhu=="chkb") {
		if(objt.value==0) var h=1;
		else var h=0;
	}
	else if(huhu=="change"){
	if(objt.checked==true) h=1;
	else h=0;
	}
	else h=objt.value;
	var isklad=document.getElementById("sklad").value;
	smotrz("pricered",isklad+"&kuda="+a+"&id="+id+"&value="+h);
	objt.value="";
	}
}

function podstavznach(th,i){
var p1=document.getElementById("mil_"+th).value;
var p2=document.getElementById("tel_"+th).value;
document.getElementById("maill"+i).value=p1;
document.getElementById("tell"+i).value=p2;
}

function editlimit(th,id){
ghoble=th;
var elscot=th.value;
th.value="сохраняется";
smotrz("editolimita", id+"&sum="+elscot);
}

function testinternet(hg){
	var eM = new Date().getTime();
	var tro1= document.getElementById("inerok");
	var tro2= document.getElementById("servok");
	var tro3= document.getElementById("deystotsut");
	if(hg==1) {tro1.innerHTML=".";tro2.innerHTML="";tro3.innerHTML="";}
	else if(hg==2){tro2.innerHTML=".";tro3.innerHTML="";}
	else if(hg==3){tro2.innerHTML=".";tro3.innerHTML="";}
	document.getElementById("inernetotest").style['display']="block";
	if(hg==1) document.getElementById("testrinter").innerHTML="<img src='http://mc.yandex.ru/watch/723233?time="+eM+"' onerror='nointernet(1);' onload='nointernet(2);'>";
	else if(hg==2||hg==3) document.getElementById("testrinter").innerHTML="<img src='http://"+servername+"/frg3434wefw3r.php?time="+eM+"' onerror='nointernet(3);' onload='nointernet(4);'>";
}

function nointernet(a){
	var tro1= document.getElementById("inerok");
	var tro2= document.getElementById("servok");
	var tro3= document.getElementById("deystotsut");
	if(a=="1"){tro1.innerHTML="<font color='red'>Нет</font>"; tro3.innerHTML="<input type='button' onclick='testinternet(1);' value='Проверить Internet-соединение еще раз'>";}
	else if(a=="2"){tro1.innerHTML="<font color='#b6eb8d'>Есть</font>";testinternet(2);}
	else if(a=="3"){tro2.innerHTML="<font color='red'>Нет</font>"; tro3.innerHTML="<input type='button' onclick='testinternet(2);' value='Проверить соединение с сервером еще раз'>";}
	else if(a=="4"){tro2.innerHTML="<font color='#b6eb8d'>Есть</font>";  tro3.innerHTML="<input type='button' onclick='document.getElementById(\"inernetotest\").style[\"display\"]=\"none\"; unsverresp(); xmlHttp = createXmlHttpRequestObject();' value='Продолжить работу'>";}
}

function copyToClipboard(text){
	document.getElementById("texttobufer").innerHTML="<br>Чтобы скопировать текст в буфер обмена, нажмите Ctrl+C<br><br><span>"+text+"</span><br><br><br>";
	
	var target = document.getElementById('texttobufer').getElementsByTagName('span')[0];
    var rng, sel;
    if (document.createRange) {
      rng = document.createRange();
      rng.selectNode(target)
      sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(rng);
    } else {
      var rng = document.body.createTextRange();
      rng.moveToElementText(target);
      rng.select();
    }
}

function us_mon(a){
	var moun=a.getMonth();
							switch (moun){case 0:moun="Января";break;case 1:moun="Февраля";break;case 2:moun="Марта";break;case 3:moun="Апреля";break;case 4:moun="Мая";break;
							case 5:moun="Июня";break;case 6:moun="Июля";break;case 7:moun="Августа";break;case 8:moun="Сентября";break;case 9:moun="Октября";break;
							case 10:moun="Ноября";break;case 11:moun="Декабря";break;}
	return [moun.substr(0,3),moun];
}

function us_wik(a){
	var week=a.getDay();
							switch (week){case 0:week="Вс";break;case 1:week="Пн";break;case 2:week="Вт";break;case 3:week="Ср";break;
							case 4:week="Чт";break;case 5:week="Пт";break;case 6:week="Сб";break;}
	return week;
}

function toadressinut(simbol,a){
	if (document.getElementById('tomyadress')) {
	var tt = document.getElementById('tomyadress');
	tt.style['display']="block";
	} 
else {
var tt = document.createElement('div');
tt.id="tomyadress";
document.body.appendChild(tt);
}
if(a==0) var text="<h1>Прописка</h1><br><label>Область</label> <input type='text' id='adr0' value='"+document.getElementById('aaa0').value+"'>"+
"<br><br><label>Населенный пункт</label> <input type='text' id='adr1' value='"+document.getElementById('aaa1').value+"'><br>"+
"<br><br><label>Район</label> <input type='text' id='adr2' value='"+document.getElementById('aaa2').value+"'><br>"+
"<br><br><label>Улица (переулок)</label> <input type='text' id='adr3' value='"+document.getElementById('aaa3').value+"'><br>"+
"<br><br><label>Дом</label> <input type='text' id='adr4' value='"+document.getElementById('aaa4').value+"'><br>"+
"<br><br><label>Корпус</label> <input type='text' id='adr5' value='"+document.getElementById('aaa5').value+"'><br>"+
"<br><br><label>№ квартиры</label> <input type='text' id='adr6' value='"+document.getElementById('aaa6').value+"'>";
else if(a==1 || a==11) {var text="<h1>Документ удостоверяющий личность</h1><br><label>Документ</label>"+
"<select name='documsss' id='documsss'><option value=''> </option>";
var dodod=document.getElementById('document').value;
var tem7=new Array('Паспорт гражданина РФ','Свидетельство о рождении','Загранпаспорт','Военный билет','Другое');
for(i=0;i<5;i++) { if(dodod==tem7[i] || (dodod=="" && i==0)) var tz4=" selected "; else tz4="";
text+="<option value='"+tem7[i]+"'"+tz4+">"+tem7[i]+"</option>";}
text+="</select><br><br><br><label>Серия, Номер</label><input type='text' name='serialsss' id='serialsss' value='"+
document.getElementById('serialdocument').value+"' ";
if(a==1) text+="onkeyup='waterline(this,0)'";
text+="><div id='water0'></div><br><br><br>"+
"<label>Кем и когда выдан</label><input type='text' name='issss' id='issss' value='"+document.getElementById('issuedby').value+"'>";
}
else if(a==2) var text="<h1>Работа</h1><br><label>Место службы</label>"+
"<input type='text' id='wwwss0' value='"+document.getElementById('www0').value+"'>"+
"<br><br><label>Профессия, должность</label> <input type='text' id='wwwss1' value='"+document.getElementById('www1').value+"'>";
							 
text+="<br><br><br><br><input type='button' id='button6' value='ОК' onclick='toadddres(\""+simbol+"\",\""+a+"\");' >";
tt.innerHTML=text;
}

function toadddres(simbol,a){
var t="";
if(a==0) {
for(i=0;i<7;i++){
t+=" "+document.getElementById('adr'+i).value;
document.getElementById('aaa'+i).value=document.getElementById('adr'+i).value;
}}
else if(a==1) {
document.getElementById('issuedby').value=document.getElementById('issss').value;
document.getElementById('serialdocument').value=document.getElementById('serialsss').value;
document.getElementById('document').value=document.getElementById('documsss').value;
t=document.getElementById('documsss').value+" "+document.getElementById('serialsss').value+" "+document.getElementById('issss').value;
}
else if(a==2) {
document.getElementById('www0').value=document.getElementById('wwwss0').value;
document.getElementById('www1').value=document.getElementById('wwwss1').value;
t=document.getElementById('wwwss0').value+" "+document.getElementById('wwwss1').value;
}
document.getElementById(simbol).value=t;
document.getElementById('tomyadress').style['display']="none";
}


