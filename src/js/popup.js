var lolwa;var nxt_pg_link=[];var curr_page=1;var link_pgn=2;var aa;var img_array=[];var title_array=[];var links_array=[];function setDOMInfo(info){var c=info.links;setTable(c);nxt_pg_link.push(info.variable[0]);curr_page=info.variable[2];link_pgn=info.variable[1]}
function diff_months(dt2,dt1)
{var diff=(dt2.getTime()-dt1.getTime())/1000;diff/=(60*60*24*7*4);return Math.abs(Math.round(diff))}
function percentage(num,per)
{return(num/100)*per}
function calculate_est_sales(num_mnths,reviews){if(num_mnths==0){num_mnths=1}
if(reviews==0)
return 1;if(reviews.length>=4){reviews=((parseInt(reviews)+percentage(reviews,75))/num_mnths)*14;return reviews.toFixed(2)}
else if(reviews.length===3){reviews=((parseInt(reviews)+percentage(reviews,75))/num_mnths)*25;return reviews.toFixed(2)}
else if(reviews.length<=2){reviews=((parseInt(reviews)+percentage(reviews,75))/num_mnths)*44;return reviews.toFixed(2)}}
function setTable(c){var table=document.getElementById("rwd-table");links_array=[];links_array=c;var ind=table.rows.length;var num_results=parseInt(document.getElementById("hd_results").innerHTML);num_results+=c.length;document.getElementById("hd_results").innerHTML=num_results;var avg_reviews=parseFloat(document.getElementById("hd_sales_rank").innerHTML);var avg_price=parseFloat(document.getElementById("hd_price").innerHTML);var avg_rank=parseFloat(document.getElementById("hd_rvws").innerHTML);var c_length=c.length;var zampp=c;var index=-1;for(i=0;i<c.length;i++){$.get(c[i],null,function(text){index++;console.log(index);lolwa=text;var el=document.createElement('div');el.innerHTML=lolwa;el.id="dynamic_object";var ttl_sellers=0;var used=($(".olp-used.olp-link",el).children('.a-size-mini.a-link-normal').text());var new_book=($(".olp-new.olp-link",el).children('.a-size-mini.a-link-normal').text())
var mn_price;if(used){mn_price=(used.substring(used.indexOf("from")+4)).trim();used=used.substring(0,used.indexOf("Used"));ttl_sellers+=parseInt(used.replace(/,/g,'').trim())}
if(new_book){new_book=new_book.substring(0,new_book.indexOf("New"));ttl_sellers+=parseInt(new_book.replace(/,/g,'').trim())}
if(ttl_sellers==0)
ttl_sellers=1;var title=$('#productTitle',el).html();if(!title)
title=$("#ebooksProductTitle",el).html();title=title.replace(/\s+/g," ").trim();var brand;if($(".author.notFaded",el)){if($(".author.notFaded",el).children(".a-link-normal").text())
brand=$(".author.notFaded",el).children(".a-link-normal").text().trim();else brand=$(".a-link-normal.contributorNameID",el).text()}
else brand=$(".a-link-normal.contributorNameID",el).text();if(!brand)
brand=$('#bylineInfo',el).text();var price=$("#priceblock_saleprice",el).text();if(!price){price=$("#priceblock_dealprice",el).text()}
if(!price){price=$('#priceblock_ourprice',el).text();price=price.slice(0,price.length-3)}
if(!price){price=$(".a-size-base.a-color-price.a-color-price",el).text()
price=(price.slice(0,price.indexOf(".")).trim())}
if(!price)
price=0;var weight1;var min_price=$('.a-color-price',el);var customer_reviews=$('#acrCustomerReviewText',el).html();var rating=$('.a-icon-alt',el);var category=$('.nav-search-label',el).html();var offers1=$('.olp-padding-right',el).text();var weight=$('.size-weight .value',el);var seller_info=$('#merchant-info',el);seller_info=seller_info.find('a:first').attr('href');var sellername;var isAmazonFulfilled=0;var Data_First_Available=$('.date-first-available .value',el).text();var num_bullets=$('#feature-bullets',el).children("ul.a-unordered-list.a-vertical.a-spacing-none").children().length;var num_images=$(".a-unordered-list.a-nostyle.a-button-list.a-vertical.a-spacing-top-micro",el).children('li.a-spacing-small.item').length;var desc_length=($('#productDescription > p:eq(0)',el).text()).trim().length;var offers=offers1.substr(0,offers1.indexOf('offer'));var min_price=offers1.indexOf('from');var min_price2=offers1.indexOf('.');var min_price=offers1.slice(min_price+4,min_price2);var img_src=$("img[id='landingImage']",el).attr("src");img_array.push(img_src);title_array.push(title);if(seller_info)
if(seller_info.indexOf('isAmazonFulfilled=1')>=0){isAmazonFulfilled=1}
if(!Data_First_Available){var myStr=$("#SalesRank",el).text();myStr=myStr.replace(/[\r\n]+/g,' ');var subStr=myStr.match("Amazon Bestsellers Rank: (.*) in ");if(subStr){var rank=(subStr[1].substring(subStr[1].indexOf("#")+1,subStr[1].indexOf(" in")));rank=rank.replace(/,/g,'')}
else{rank="N/A"}}
else{var rank=$('.value',el);for(k=0;k<rank.length;k++){var rank1=rank.eq(k).text();if(rank1.indexOf('#')>=0){rank=rank1.substring(2,rank1.indexOf('i')-1).replace(/\s+/g," ").trim();rank=rank.substring(1).replace(/,/g,'');break}}}
var indx=1;for(j=1;j<rating.length;j++){var checking=rating.eq(j).html();if(checking==="Previous page"||checking==="Back"){indx=j-1;break}}
if(customer_reviews){customer_reviews=customer_reviews.substring(0,customer_reviews.indexOf(' '));customer_reviews=customer_reviews.trim().replace(/,/g,'')}
else{customer_reviews=0}
var row=table.insertRow(ind);if(ind%2==0){row.className="even"}
else{row.className="odd"}
ind+=1;var cell0=row.insertCell(0);var cell1=row.insertCell(1);cell1.className="dispimage";cell1.id=ind;var link=document.createElement("a");link.setAttribute("target","_blank");link.setAttribute("href",this.url);cell1.appendChild(link);var cell2=row.insertCell(2);var cell3=row.insertCell(3);var cell4=row.insertCell(4);var cell5=row.insertCell(5);var cell6=row.insertCell(6);var cell8=row.insertCell(7);var cell9=row.insertCell(8);var cell10=row.insertCell(9);var cell11=row.insertCell(10);var cell12=row.insertCell(11);var cell13=row.insertCell(12);var cell14=row.insertCell(13);var cell15=row.insertCell(14);var cell16=row.insertCell(15);if(price=="")
price=min_price;cell0.innerHTML=ind-1;link.innerHTML=title;if(brand)
cell2.innerHTML=brand.trim();cell3.innerHTML=price.trim().replace(/,/g,'');cell4.innerHTML=min_price.trim().replace(/,/g,'');if(cell4.innerHTML==""){cell4.innerHTML=mn_price;if(cell4.innerHTML=="undefined"){cell4.innerHTML="N/A"}}
cell5.innerHTML=customer_reviews;cell6.innerHTML=rating.eq(indx).html().substring(0,3).trim();if(cell6.innerHTML.search(/^[0-9]/i)<0){if($(".average_customer_reviews",el))
cell6.innerHTML=$(".average_customer_reviews",el).find('.a-icon-alt').html();if(cell6.innerHTML.search(/^[0-9]/i)<0){cell6.innerHTML="N/A"}
else{cell6.innerHTML=cell6.innerHTML.substring(0,3).trim()}}
cell8.innerHTML=offers.trim();if(cell8.innerHTML==""){cell8.innerHTML=ttl_sellers}
cell9.innerHTML=parseInt(rank);if(cell9.innerHTML.indexOf("object")>=0)
cell9.innerHTML="N/A";if(weight.html())
cell10.innerHTML=weight.html().replace(/,/g,'');else cell10.innerHTML="N/A";cell13.innerHTML=Data_First_Available;if(cell13.innerHTML==""){$(".content > ul > li",el).each(function(){var txt=$(this).text();if(txt.indexOf("Item Weight:")>=0){cell10.innerHTML=(txt.replace(/Item Weight:/,"").trim())}
else if(txt.indexOf("Date first available at Amazon.in:")>=0){cell13.innerHTML=(txt.replace(/Date first available at Amazon.in:/,"").trim())}
else if(txt.indexOf("Publisher:")>=0){cell13.innerHTML=(txt.substring(txt.indexOf("(")+1,txt.indexOf(")")))}})}
var dt1;if(cell13.innerHTML)
dt1=new Date(cell13.innerHTML);else{dt1=new Date();cell13.innerHTML="N/A"}
var dt2=new Date();var num_mnths=diff_months(dt1,dt2);var est_sales=calculate_est_sales(num_mnths,customer_reviews);cell14.innerHTML=est_sales;var est_revenue=parseFloat(cell14.innerHTML)*parseFloat(cell3.innerHTML);cell15.innerHTML=est_revenue;if(isAmazonFulfilled)
cell12.innerHTML='FBA';else{cell12.innerHTML='MCH'}
var count=0;if(cell1.innerHTML.length<200)
count++;if(cell2.innerHTML.length<100)
count++;if(num_bullets>4){count++}
if(parseFloat(cell5.innerHTML)>14)
count++;if(cell6.innerHTML!="N/A")
var rat=(parseFloat(cell6.innerHTML));if(rat>4.0)
count++;if(isAmazonFulfilled)
count++;if(desc_length>100)
count++;if(num_images>5)
count++;cell16.innerHTML=((count/8)*100).toFixed(1)+"%";$.get('https://www.amazon.in'+seller_info,null,function(text2){var el2=document.createElement('div');el2.innerHTML=text2;cell11.innerHTML=($('#sellerName',el2).html())});if(cell11.innerHTML==""){cell11.innerHTML="N/A"}
if(cell13.innerHTML.indexOf("N/A")<0){var df=new Date(cell13.innerHTML);cell13.innerHTML=df.getDate()+'/'+(parseInt(df.getMonth())+1)+'/'+df.getFullYear().toString().substr(-2)}
if(cell3.innerHTML.search(/^[0-9]/i)<0){cell3.innerHTML="N/A"}
if(cell9.innerHTML.search(/^[0-9]/i)<0){cell9.innerHTML="N/A"}
if(cell3.innerHTML.indexOf("N/A")<0)
avg_price+=parseFloat(cell3.innerHTML.replace(/,/g,''));if(cell9.innerHTML.indexOf("N/A")<0)
avg_rank+=parseFloat(cell9.innerHTML.replace(/,/g,''));avg_reviews+=parseFloat(cell5.innerHTML.replace(/,/g,''))
stopthecall(c_length,ind,avg_price,avg_rank,avg_reviews)})}}
$(window).scroll(function(){var height=$(window).scrollTop();if(height>100){$('#back2Top').fadeIn()}
else{$('#back2Top').fadeOut()}});$(document).ready(function(){$("#back2Top").click(function(event){event.preventDefault();$("html, body").animate({scrollTop:0},"slow");return!1});var close_btn=document.getElementById("close_popup");close_btn.onclick=function(){window.close()}
var logout_btn=document.getElementById("btn_logout");logout_btn.onclick=function(){$.ajax({type:"POST",url:"http://localhost/product_research_tool_live/chrm_db/php/logout.php",data:null,cache:!1,success:function(html){window.location.href="login.html"}})};var btn=document.getElementById("btn");btn.onclick=function(){curr_page++;var regex_=new RegExp('page='+link_pgn,'g')
var ln=nxt_pg_link[0].replace(regex_,'page='+curr_page);var z=new Array();$.get(ln,null,function(text3){var el3=document.createElement('div');el3.innerHTML=text3;var c=$(".a-link-normal.s-access-detail-page.s-color-twister-title-link.a-text-normal",el3);for(i=0;i<c.length;i++){var element1=c[i].innerHTML;var check="[Sponsored]";if(element1.indexOf(check)<0)
z.push(c[i].href)}
setTable(z)})}
$("#myInput").keyup(function myFunction(){var input,filter,found,table,tr,td,i,j;input=document.getElementById("myInput");filter=input.value.toUpperCase();table=document.getElementById("rwd-table");tr=table.getElementsByTagName("tr");for(i=1;i<tr.length;i++){td=tr[i].getElementsByTagName("td");for(j=0;j<td.length;j++){if(td[j].innerHTML.toUpperCase().indexOf(filter)>-1){found=!0}}
if(found){tr[i].style.display="";found=!1}else{tr[i].style.display="none"}}});const getCellValue=(tr,idx)=>tr.children[idx].innerText||tr.children[idx].textContent;const comparer=(idx,asc)=>(a,b)=>((v1,v2)=>v1!==''&&v2!==''&&!isNaN(v1)&&!isNaN(v2)?v1-v2:v1.toString().localeCompare(v2))(getCellValue(asc?a:b,idx),getCellValue(asc?b:a,idx));document.querySelectorAll('th').forEach(th=>th.addEventListener('click',(()=>{const table=th.closest('table');Array.from(table.querySelectorAll('tr:nth-child(n+2)')).sort(comparer(Array.from(th.parentNode.children).indexOf(th),this.asc=!this.asc)).forEach(tr=>table.appendChild(tr))})));function exportTableToCSV($table,filename){var $rows=$table.find('tr:has(td)'),tmpColDelim=String.fromCharCode(11),tmpRowDelim=String.fromCharCode(0),colDelim='","',rowDelim='"\r\n"',csv='"'+$rows.map(function(i,row){var $row=$(row),$cols=$row.find('td');return $cols.map(function(j,col){var $col=$(col),text=$col.text();return text.replace(/"/g,'""')}).get().join(tmpColDelim)}).get().join(tmpRowDelim).split(tmpRowDelim).join(rowDelim).split(tmpColDelim).join(colDelim)+'"';if(!1&&window.navigator.msSaveBlob){var blob=new Blob([decodeURIComponent(csv)],{type:'text/csv;charset=utf8'});window.navigator.msSaveBlob(blob,filename)}
else if(window.Blob&&window.URL){var blob=new Blob([csv],{type:'text/csv;charset=utf8'});var csvUrl=URL.createObjectURL(blob);$(this).attr({'download':filename,'href':csvUrl})}else{var csvData='data:application/csv;charset=utf-8,'+encodeURIComponent(csv);$(this).attr({'download':filename,'href':csvData,'target':'_blank'})}}
$(".export").on('click',function(event){var args=[$('#rwd-table'),'export.csv'];exportTableToCSV.apply(this,args)})});function hov(){aa=document.getElementsByClassName("dispimage");$(".dispimage").hover(function(){$("#image_block").css("display","block");var cntnt=this.id-2;$(this)[0].title=title_array[cntnt];$("#image").attr('src',img_array[cntnt])},function(){$("#image_block").css("display","none")})}
function stopthecall(c,ind,avg_price,avg_rank,avg_reviews){if((c.length!=0)&&(ind>c)){hov();$('#loading').hide();document.getElementById("hd_sales_rank").innerHTML=((avg_rank/c).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","));document.getElementById("hd_rvws").innerHTML=((avg_reviews/c).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","));document.getElementById("hd_price").innerHTML=((avg_price/c).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))}}
window.addEventListener('DOMContentLoaded',function(){chrome.tabs.query({active:!0,currentWindow:!0},function(tabs){chrome.tabs.sendMessage(tabs[0].id,{from:'popup',subject:'DOMInfo'},setDOMInfo)})})