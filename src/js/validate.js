$(document).ready(function(){$.ajax({type:"POST",url:"http://localhost/product_research_tool_live/chrm_db/php/index.php",data:0,cache:!1,success:function(o){o.indexOf("login")>=0?window.location.href="login.html":o.indexOf("Success")>=0?window.location.href="popup.html":window.location.href="purchase_account.html"}})});