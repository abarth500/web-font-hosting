$(document).ready(function(){
	var name="横山 りよ";
	var account="belbambino";
	var domain="hotmail";
	var tld="jp"
	if($("#smartphone-css")[0]){
		$("contact").html('<div class="belB-contact"><div style="text-align:center;">ベビーマッサージサークル <b>ベルバンビーノ</b><br><span style="font-size:200%;line-height:150%;">*＊<span style="font-family: xiomara;">Bel Bambino!</span>＊*</span><br><span style="font-size:150%">代表：<b>横山 りよ</b></span><br><a href="mailto:'+account+'@'+domain+'.'+tld+'">'+account+'@'+domain+'.'+tld+'</a></div><br clear="both"></div>');
		var width = $("header.global").width();
		var height = Math.round(7*width/15);
		$("header.global").height(height);
		$("header.global").prepend('<img style="position:absolute;top:0px;left:0px;" src="http://img01.hamazo.tv/usr/b/e/l/belbambino/blogtitle.png" width="'+width+'" heidht="'+height+'">');
	}else{
		$("contact").html('<div class="belB-contact"><div style="width:100px;float:left;"><img src="http://img01.hamazo.tv/usr/b/e/l/belbambino/qr-mail.png"></div><div style="text-align:center;width:300px;float:left;">ベビーマッサージサークル <b>ベルバンビーノ</b><br><span style="font-size:200%;line-height:150%;">*＊<span style="font-family: xiomara;">Bel Bambino!</span>＊*</span><br><span style="font-size:150%">代表：<b>横山 りよ</b></span><br><a href="mailto:'+account+'@'+domain+'.'+tld+'">'+account+'@'+domain+'.'+tld+'</a></div><br clear="both"></div>');
	}
});