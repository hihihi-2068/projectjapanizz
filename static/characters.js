var state = true; 

// Đoạn mã HTML bạn muốn thêm vào thẻ "interface"
var hiraganadisplay = `<div id="あ" class="characters-div" style="left:12.25%;top: 0.0%;">
<a class="a" >あ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >a</a> 
</div>
<div id="い" class="characters-div" style="left:28.33%;top: 0.0%;">
<a class="a" >い</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >i</a> 
</div>
<div id="う" class="characters-div" style="left:44.41%;top: 0.0%;">
<a class="a" >う</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >u</a> 
</div>
<div id="え" class="characters-div" style="left:60.49%;top: 0.0%;">
<a class="a" >え</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >e</a> 
</div>
<div id="お" class="characters-div" style="left:76.57%;top: 0.0%;">
<a class="a" >お</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >o</a> 
</div>
<div id="か" class="characters-div" style="left:12.25%;top: 3.7469%;">
<a class="a" >か</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ka</a>
</div>
<div id="き" class="characters-div" style="left:28.33%;top: 3.7469%;">
<a class="a" >き</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ki</a>
</div>
<div id="く" class="characters-div" style="left:44.41%;top: 3.7469%;">
<a class="a" >く</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ku</a>
</div>
<div id="け" class="characters-div" style="left:60.49%;top: 3.7469%;">
<a class="a" >け</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ke</a>
</div>
<div id="こ" class="characters-div" style="left:76.57%;top: 3.7469%;">
<a class="a" >こ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ko</a>
</div>
<div id="が" class="characters-div" style="left:12.25%;top: 7.4938%;">
<a class="a" >が</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ga</a>
</div>
<div id="ぎ" class="characters-div" style="left:28.33%;top: 7.4938%;">
<a class="a" >ぎ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >gi</a>
</div>
<div id="ぐ" class="characters-div" style="left:44.41%;top: 7.4938%;">
<a class="a" >ぐ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >gu</a>
</div>
<div id="げ" class="characters-div" style="left:60.49%;top: 7.4938%;">
<a class="a" >げ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ge</a>
</div>
<div id="ご" class="characters-div" style="left:76.57%;top: 7.4938%;">
<a class="a" >ご</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >go</a>
</div>
<div id="さ" class="characters-div" style="left:12.25%;top: 11.2407%;">
<a class="a" >さ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >sa</a>
</div>
<div id="し" class="characters-div" style="left:28.33%;top: 11.2407%;">
<a class="a" >し</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >shi</a>
</div>
<div id="す" class="characters-div" style="left:44.41%;top: 11.2407%;">
<a class="a" >す</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >su</a>
</div>
<div id="せ" class="characters-div" style="left:60.49%;top: 11.2407%;">
<a class="a" >せ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >se</a>
</div>
<div id="そ" class="characters-div" style="left:76.57%;top: 11.2407%;">
<a class="a" >そ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >so</a>
</div>
<div id="ざ" class="characters-div" style="left:12.25%;top: 14.9876%;">
<a class="a" >ざ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >za</a>
</div>
<div id="じ" class="characters-div" style="left:28.33%;top: 14.9876%;">
<a class="a" >じ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ji</a>
</div>
<div id="ず" class="characters-div" style="left:44.41%;top: 14.9876%;">
<a class="a" >ず</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >zu</a>
</div>
<div id="ぜ" class="characters-div" style="left:60.49%;top: 14.9876%;">
<a class="a" >ぜ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ze</a>
</div>
<div id="ぞ" class="characters-div" style="left:76.57%;top: 14.9876%;">
<a class="a" >ぞ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >zo</a>
</div>
<div id="た" class="characters-div" style="left:12.25%;top: 18.7345%;">
<a class="a" >た</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ta</a>
</div>
<div id="ち" class="characters-div" style="left:28.33%;top: 18.7345%;">
<a class="a" >ち</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >chi</a>
</div>
<div id="つ" class="characters-div" style="left:44.41%;top: 18.7345%;">
<a class="a" >つ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >tsu</a>
</div>
<div id="て" class="characters-div" style="left:60.49%;top: 18.7345%;">
<a class="a" >て</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >te</a>
</div>
<div id="と" class="characters-div" style="left:76.57%;top: 18.7345%;">
<a class="a" >と</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >to</a>
</div>
<div id="だ" class="characters-div" style="left:12.25%;top: 22.4814%;">
<a class="a" >だ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >da</a>
</div>
<div id="ぢ" class="characters-div" style="left:28.33%;top: 22.4814%;">
<a class="a" >ぢ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ji</a>
</div>
<div id="づ" class="characters-div" style="left:44.41%;top: 22.4814%;">
<a class="a" >づ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >zu</a>
</div>
<div id="で" class="characters-div" style="left:60.49%;top: 22.4814%;">
<a class="a" >で</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >de</a>
</div>
<div id="ど" class="characters-div" style="left:76.57%;top: 22.4814%;">
<a class="a" >ど</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >do</a>
</div>
<div id="な" class="characters-div" style="left:12.25%;top: 26.228300000000004%;">
<a class="a" >な</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >na</a>
</div>
<div id="に" class="characters-div" style="left:28.33%;top: 26.228300000000004%;">
<a class="a" >に</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ni</a>
</div>
<div id="ぬ" class="characters-div" style="left:44.41%;top: 26.228300000000004%;">
<a class="a" >ぬ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >nu</a>
</div>
<div id="ね" class="characters-div" style="left:60.49%;top: 26.228300000000004%;">
<a class="a" >ね</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ne</a>
</div>
<div id="の" class="characters-div" style="left:76.57%;top: 26.228300000000004%;">
<a class="a" >の</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >no</a>
</div>
<div id="は" class="characters-div" style="left:12.25%;top: 29.9752%;">
<a class="a" >は</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ha</a>
</div>
<div id="ひ" class="characters-div" style="left:28.33%;top: 29.9752%;">
<a class="a" >ひ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >hi</a>
</div>
<div id="ふ" class="characters-div" style="left:44.41%;top: 29.9752%;">
<a class="a" >ふ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >fu</a>
</div>
<div id="へ" class="characters-div" style="left:60.49%;top: 29.9752%;">
<a class="a" >へ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >he</a>
</div>
<div id="ほ" class="characters-div" style="left:76.57%;top: 29.9752%;">
<a class="a" >ほ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ho</a>
</div>
<div id="ば" class="characters-div" style="left:12.25%;top: 33.7221%;">
<a class="a" >ば</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ba</a>
</div>
<div id="び" class="characters-div" style="left:28.33%;top: 33.7221%;">
<a class="a" >び</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >bi</a>
</div>
<div id="ぶ" class="characters-div" style="left:44.41%;top: 33.7221%;">
<a class="a" >ぶ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >bu</a>
</div>
<div id="べ" class="characters-div" style="left:60.49%;top: 33.7221%;">
<a class="a" >べ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >be</a>
</div>
<div id="ぼ" class="characters-div" style="left:76.57%;top: 33.7221%;">
<a class="a" >ぼ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >bo</a>
</div>
<div id="ぱ" class="characters-div" style="left:12.25%;top: 37.469%;">
<a class="a" >ぱ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >pa</a>
</div>
<div id="ぴ" class="characters-div" style="left:28.33%;top: 37.469%;">
<a class="a" >ぴ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >pi</a>
</div>
<div id="ぷ" class="characters-div" style="left:44.41%;top: 37.469%;">
<a class="a" >ぷ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >pu</a>
</div>
<div id="ぺ" class="characters-div" style="left:60.49%;top: 37.469%;">
<a class="a" >ぺ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >pe</a>
</div>
<div id="ぽ" class="characters-div" style="left:76.57%;top: 37.469%;">
<a class="a" >ぽ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >po</a>
</div>
<div id="ま" class="characters-div" style="left:12.25%;top: 41.215900000000005%;">
<a class="a" >ま</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ma</a>
</div>
<div id="み" class="characters-div" style="left:28.33%;top: 41.215900000000005%;">
<a class="a" >み</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >mi</a>
</div>
<div id="む" class="characters-div" style="left:44.41%;top: 41.215900000000005%;">
<a class="a" >む</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >mu</a>
</div>
<div id="め" class="characters-div" style="left:60.49%;top: 41.215900000000005%;">
<a class="a" >め</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >me</a>
</div>
<div id="も" class="characters-div" style="left:76.57%;top: 41.215900000000005%;">
<a class="a" >も</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >mo</a>
</div>
<div id="や" class="characters-div" style="left:12.25%;top: 44.9628%;">
<a class="a" >や</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ya</a>
</div>
<div id="ゆ" class="characters-div" style="left:44.41%;top: 44.9628%;">
<a class="a" >ゆ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >yu</a>
</div>
<div id="よ" class="characters-div" style="left:76.57%;top: 44.9628%;">
<a class="a" >よ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >yo</a>
</div>
<div id="ら" class="characters-div" style="left:12.25%;top: 48.7097%;">
<a class="a" >ら</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ra</a>
</div>
<div id="り" class="characters-div" style="left:28.33%;top: 48.7097%;">
<a class="a" >り</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ri</a>
</div>
<div id="る" class="characters-div" style="left:44.41%;top: 48.7097%;">
<a class="a" >る</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ru</a>
</div>
<div id="れ" class="characters-div" style="left:60.49%;top: 48.7097%;">
<a class="a" >れ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >re</a>
</div>
<div id="ろ" class="characters-div" style="left:76.57%;top: 48.7097%;">
<a class="a" >ろ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ro</a>
</div>
<div id="わ" class="characters-div" style="left:12.25%;top: 52.45660000000001%;">
<a class="a" >わ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >wa</a>
</div>
<div id="を" class="characters-div" style="left:44.41%;top: 52.45660000000001%;">
<a class="a" >を</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >wo</a>
</div>
<div id="ん" class="characters-div" style="left:76.57%;top: 52.45660000000001%;">
<a class="a" >ん</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >n</a>
</div>
<div id="きゃ" class="characters-div" style="left:12.25%;top: 56.203500000000005%;">
<a class="a" >きゃ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >kya</a>
</div>
<div id="きゅ" class="characters-div" style="left:44.41%;top: 56.203500000000005%;">
<a class="a" >きゅ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >kyu</a>
</div>
<div id="きょ" class="characters-div" style="left:76.57%;top: 56.203500000000005%;">
<a class="a" >きょ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >kyo</a>
</div>
<div id="しゃ" class="characters-div" style="left:12.25%;top: 59.9504%;">
<a class="a" >しゃ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >sha</a>
</div>
<div id="しゅ" class="characters-div" style="left:44.41%;top: 59.9504%;">
<a class="a" >しゅ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >shu</a>
</div>
<div id="しょ" class="characters-div" style="left:76.57%;top: 59.9504%;">
<a class="a" >しょ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >sho</a>
</div>
<div id="ちゃ" class="characters-div" style="left:12.25%;top: 63.6973%;">
<a class="a" >ちゃ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >cha</a>
</div>
<div id="ちゅ" class="characters-div" style="left:44.41%;top: 63.6973%;">
<a class="a" >ちゅ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >chu</a>
</div>
<div id="ちょ" class="characters-div" style="left:76.57%;top: 63.6973%;">
<a class="a" >ちょ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >cho</a>
</div>
<div id="にゃ" class="characters-div" style="left:12.25%;top: 67.4442%;">
<a class="a" >にゃ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >nya</a>
</div>
<div id="にゅ" class="characters-div" style="left:44.41%;top: 67.4442%;">
<a class="a" >にゅ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >nyu</a>
</div>
<div id="にょ" class="characters-div" style="left:76.57%;top: 67.4442%;">
<a class="a" >にょ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >nyo</a>
</div>
<div id="ひゃ" class="characters-div" style="left:12.25%;top: 71.1911%;">
<a class="a" >ひゃ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >hya</a>
</div>
<div id="ひゅ" class="characters-div" style="left:44.41%;top: 71.1911%;">
<a class="a" >ひゅ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >hyu</a>
</div>
<div id="ひょ" class="characters-div" style="left:76.57%;top: 71.1911%;">
<a class="a" >ひょ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >hyo</a>
</div>
<div id="みゃ" class="characters-div" style="left:12.25%;top: 74.938%;">
<a class="a" >みゃ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >mya</a>
</div>
<div id="みゅ" class="characters-div" style="left:44.41%;top: 74.938%;">
<a class="a" >みゅ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >myu</a>
</div>
<div id="みょ" class="characters-div" style="left:76.57%;top: 74.938%;">
<a class="a" >みょ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >myo</a>
</div>
<div id="りゃ" class="characters-div" style="left:12.25%;top: 78.6849%;">
<a class="a" >りゃ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >rya</a>
</div>
<div id="りゅ" class="characters-div" style="left:44.41%;top: 78.6849%;">
<a class="a" >りゅ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ryu</a>
</div>
<div id="りょ" class="characters-div" style="left:76.57%;top: 78.6849%;">
<a class="a" >りょ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ryo</a>
</div>
<div id="ぎゃ" class="characters-div" style="left:12.25%;top: 82.43180000000001%;">
<a class="a" >ぎゃ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >gya</a>
</div>
<div id="ぎゅ" class="characters-div" style="left:44.41%;top: 82.43180000000001%;">
<a class="a" >ぎゅ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >gyu</a>
</div>
<div id="ぎょ" class="characters-div" style="left:76.57%;top: 82.43180000000001%;">
<a class="a" >ぎょ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >gyo</a>
</div>
<div id="じゃ" class="characters-div" style="left:12.25%;top: 86.1787%;">
<a class="a" >じゃ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ja</a>
</div>
<div id="じゅ" class="characters-div" style="left:44.41%;top: 86.1787%;">
<a class="a" >じゅ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ju</a>
</div>
<div id="じょ" class="characters-div" style="left:76.57%;top: 86.1787%;">
<a class="a" >じょ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >jo</a>
</div>
<div id="びゃ" class="characters-div" style="left:12.25%;top: 89.9256%;">
<a class="a" >びゃ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >bya</a>
</div>
<div id="びゅ" class="characters-div" style="left:44.41%;top: 89.9256%;">
<a class="a" >びゅ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >byu</a>
</div>
<div id="びょ" class="characters-div" style="left:76.57%;top: 89.9256%;">
<a class="a" >びょ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >byo</a>
</div>
<div id="ぴゃ" class="characters-div" style="left:12.25%;top: 93.67250000000001%;">
<a class="a" >ぴゃ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >pya</a>
</div>
<div id="ぴゅ" class="characters-div" style="left:44.41%;top: 93.67250000000001%;">
<a class="a" >ぴゅ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >pyu</a>
</div>
<div id="ぴょ" class="characters-div" style="left:76.57%;top: 93.67250000000001%;">
<a class="a" >ぴょ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >pyo</a>
</div>
<div id="あー" class="characters-div" style="left:12.25%;top: 97.4194%;">
<a class="a" >あー</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >a-</a>
</div>
<div id="いー" class="characters-div" style="left:28.33%;top: 97.4194%;">
<a class="a" >いー</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >i-</a>
</div>
<div id="うー" class="characters-div" style="left:44.41%;top: 97.4194%;">
<a class="a" >うー</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >u-</a>
</div>
<div id="えー" class="characters-div" style="left:60.49%;top: 97.4194%;">
<a class="a" >えー</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >e-</a>
</div>
<div id="おー" class="characters-div" style="left:76.57%;top: 97.4194%;">
<a class="a" >おー</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >o-</a>
</div>`;

var katakanadisplay = `<div id="ア" class="characters-div" style="left:12.25%;top: 0.0%;">
<a class="a" >ア</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >a</a> 
</div>
<div id="イ" class="characters-div" style="left:28.33%;top: 0.0%;">
<a class="a" >イ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >i</a> 
</div>
<div id="ウ" class="characters-div" style="left:44.41%;top: 0.0%;">
<a class="a" >ウ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >u</a> 
</div>
<div id="エ" class="characters-div" style="left:60.49%;top: 0.0%;">
<a class="a" >エ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >e</a> 
</div>
<div id="オ" class="characters-div" style="left:76.57%;top: 0.0%;">
<a class="a" >オ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >o</a> 
</div>
<div id="カ" class="characters-div" style="left:12.25%;top: 3.7469%;">
<a class="a" >カ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ka</a>
</div>
<div id="キ" class="characters-div" style="left:28.33%;top: 3.7469%;">
<a class="a" >キ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ki</a>
</div>
<div id="ク" class="characters-div" style="left:44.41%;top: 3.7469%;">
<a class="a" >ク</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ku</a>
</div>
<div id="ケ" class="characters-div" style="left:60.49%;top: 3.7469%;">
<a class="a" >ケ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ke</a>
</div>
<div id="コ" class="characters-div" style="left:76.57%;top: 3.7469%;">
<a class="a" >コ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ko</a>
</div>
<div id="ガ" class="characters-div" style="left:12.25%;top: 7.4938%;">
<a class="a" >ガ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ga</a>
</div>
<div id="ギ" class="characters-div" style="left:28.33%;top: 7.4938%;">
<a class="a" >ギ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >gi</a>
</div>
<div id="グ" class="characters-div" style="left:44.41%;top: 7.4938%;">
<a class="a" >グ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >gu</a>
</div>
<div id="ゲ" class="characters-div" style="left:60.49%;top: 7.4938%;">
<a class="a" >ゲ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ge</a>
</div>
<div id="ゴ" class="characters-div" style="left:76.57%;top: 7.4938%;">
<a class="a" >ゴ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >go</a>
</div>
<div id="サ" class="characters-div" style="left:12.25%;top: 11.2407%;">
<a class="a" >サ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >sa</a>
</div>
<div id="シ" class="characters-div" style="left:28.33%;top: 11.2407%;">
<a class="a" >シ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >shi</a>
</div>
<div id="ス" class="characters-div" style="left:44.41%;top: 11.2407%;">
<a class="a" >ス</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >su</a>
</div>
<div id="セ" class="characters-div" style="left:60.49%;top: 11.2407%;">
<a class="a" >セ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >se</a>
</div>
<div id="ソ" class="characters-div" style="left:76.57%;top: 11.2407%;">
<a class="a" >ソ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >so</a>
</div>
<div id="ザ" class="characters-div" style="left:12.25%;top: 14.9876%;">
<a class="a" >ザ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >za</a>
</div>
<div id="ジ" class="characters-div" style="left:28.33%;top: 14.9876%;">
<a class="a" >ジ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ji</a>
</div>
<div id="ズ" class="characters-div" style="left:44.41%;top: 14.9876%;">
<a class="a" >ズ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >zu</a>
</div>
<div id="ゼ" class="characters-div" style="left:60.49%;top: 14.9876%;">
<a class="a" >ゼ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ze</a>
</div>
<div id="ゾ" class="characters-div" style="left:76.57%;top: 14.9876%;">
<a class="a" >ゾ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >zo</a>
</div>
<div id="タ" class="characters-div" style="left:12.25%;top: 18.7345%;">
<a class="a" >タ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ta</a>
</div>
<div id="チ" class="characters-div" style="left:28.33%;top: 18.7345%;">
<a class="a" >チ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >chi</a>
</div>
<div id="ツ" class="characters-div" style="left:44.41%;top: 18.7345%;">
<a class="a" >ツ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >tsu</a>
</div>
<div id="テ" class="characters-div" style="left:60.49%;top: 18.7345%;">
<a class="a" >テ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >te</a>
</div>
<div id="ト" class="characters-div" style="left:76.57%;top: 18.7345%;">
<a class="a" >ト</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >to</a>
</div>
<div id="ダ" class="characters-div" style="left:12.25%;top: 22.4814%;">
<a class="a" >ダ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >da</a>
</div>
<div id="ヂ" class="characters-div" style="left:28.33%;top: 22.4814%;">
<a class="a" >ヂ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ji</a>
</div>
<div id="ヅ" class="characters-div" style="left:44.41%;top: 22.4814%;">
<a class="a" >ヅ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >zu</a>
</div>
<div id="デ" class="characters-div" style="left:60.49%;top: 22.4814%;">
<a class="a" >デ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >de</a>
</div>
<div id="ド" class="characters-div" style="left:76.57%;top: 22.4814%;">
<a class="a" >ド</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >do</a>
</div>
<div id="ナ" class="characters-div" style="left:12.25%;top: 26.228300000000004%;">
<a class="a" >ナ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >na</a>
</div>
<div id="ニ" class="characters-div" style="left:28.33%;top: 26.228300000000004%;">
<a class="a" >ニ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ni</a>
</div>
<div id="ヌ" class="characters-div" style="left:44.41%;top: 26.228300000000004%;">
<a class="a" >ヌ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >nu</a>
</div>
<div id="ネ" class="characters-div" style="left:60.49%;top: 26.228300000000004%;">
<a class="a" >ネ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ne</a>
</div>
<div id="ノ" class="characters-div" style="left:76.57%;top: 26.228300000000004%;">
<a class="a" >ノ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >no</a>
</div>
<div id="ハ" class="characters-div" style="left:12.25%;top: 29.9752%;">
<a class="a" >ハ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ha</a>
</div>
<div id="ヒ" class="characters-div" style="left:28.33%;top: 29.9752%;">
<a class="a" >ヒ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >hi</a>
</div>
<div id="フ" class="characters-div" style="left:44.41%;top: 29.9752%;">
<a class="a" >フ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >fu</a>
</div>
<div id="ヘ" class="characters-div" style="left:60.49%;top: 29.9752%;">
<a class="a" >ヘ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >he</a>
</div>
<div id="ホ" class="characters-div" style="left:76.57%;top: 29.9752%;">
<a class="a" >ホ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ho</a>
</div>
<div id="バ" class="characters-div" style="left:12.25%;top: 33.7221%;">
<a class="a" >バ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ba</a>
</div>
<div id="ビ" class="characters-div" style="left:28.33%;top: 33.7221%;">
<a class="a" >ビ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >bi</a>
</div>
<div id="ブ" class="characters-div" style="left:44.41%;top: 33.7221%;">
<a class="a" >ブ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >bu</a>
</div>
<div id="ベ" class="characters-div" style="left:60.49%;top: 33.7221%;">
<a class="a" >ベ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >be</a>
</div>
<div id="ボ" class="characters-div" style="left:76.57%;top: 33.7221%;">
<a class="a" >ボ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >bo</a>
</div>
<div id="パ" class="characters-div" style="left:12.25%;top: 37.469%;">
<a class="a" >パ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >pa</a>
</div>
<div id="ピ" class="characters-div" style="left:28.33%;top: 37.469%;">
<a class="a" >ピ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >pi</a>
</div>
<div id="プ" class="characters-div" style="left:44.41%;top: 37.469%;">
<a class="a" >プ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >pu</a>
</div>
<div id="ペ" class="characters-div" style="left:60.49%;top: 37.469%;">
<a class="a" >ペ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >pe</a>
</div>
<div id="ポ" class="characters-div" style="left:76.57%;top: 37.469%;">
<a class="a" >ポ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >po</a>
</div>
<div id="マ" class="characters-div" style="left:12.25%;top: 41.215900000000005%;">
<a class="a" >マ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ma</a>
</div>
<div id="ミ" class="characters-div" style="left:28.33%;top: 41.215900000000005%;">
<a class="a" >ミ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >mi</a>
</div>
<div id="ム" class="characters-div" style="left:44.41%;top: 41.215900000000005%;">
<a class="a" >ム</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >mu</a>
</div>
<div id="メ" class="characters-div" style="left:60.49%;top: 41.215900000000005%;">
<a class="a" >メ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >me</a>
</div>
<div id="モ" class="characters-div" style="left:76.57%;top: 41.215900000000005%;">
<a class="a" >モ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >mo</a>
</div>
<div id="ヤ" class="characters-div" style="left:12.25%;top: 44.9628%;">
<a class="a" >ヤ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ya</a>
</div>
<div id="ユ" class="characters-div" style="left:44.41%;top: 44.9628%;">
<a class="a" >ユ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >yu</a>
</div>
<div id="ヨ" class="characters-div" style="left:76.57%;top: 44.9628%;">
<a class="a" >ヨ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >yo</a>
</div>
<div id="ラ" class="characters-div" style="left:12.25%;top: 48.7097%;">
<a class="a" >ラ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ra</a>
</div>
<div id="リ" class="characters-div" style="left:28.33%;top: 48.7097%;">
<a class="a" >リ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ri</a>
</div>
<div id="ル" class="characters-div" style="left:44.41%;top: 48.7097%;">
<a class="a" >ル</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ru</a>
</div>
<div id="レ" class="characters-div" style="left:60.49%;top: 48.7097%;">
<a class="a" >レ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >re</a>
</div>
<div id="ロ" class="characters-div" style="left:76.57%;top: 48.7097%;">
<a class="a" >ロ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ro</a>
</div>
<div id="ワ" class="characters-div" style="left:12.25%;top: 52.45660000000001%;">
<a class="a" >ワ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >wa</a>
</div>
<div id="ヲ" class="characters-div" style="left:44.41%;top: 52.45660000000001%;">
<a class="a" >ヲ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >wo</a>
</div>
<div id="ン" class="characters-div" style="left:76.57%;top: 52.45660000000001%;">
<a class="a" >ン</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >n</a>
</div>
<div id="キャ" class="characters-div" style="left:12.25%;top: 56.203500000000005%;">
<a class="a" >キャ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >kya</a>
</div>
<div id="キュ" class="characters-div" style="left:44.41%;top: 56.203500000000005%;">
<a class="a" >キュ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >kyu</a>
</div>
<div id="キョ" class="characters-div" style="left:76.57%;top: 56.203500000000005%;">
<a class="a" >キョ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >kyo</a>
</div>
<div id="シャ" class="characters-div" style="left:12.25%;top: 59.9504%;">
<a class="a" >シャ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >sha</a>
</div>
<div id="シュ" class="characters-div" style="left:44.41%;top: 59.9504%;">
<a class="a" >シュ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >shu</a>
</div>
<div id="ショ" class="characters-div" style="left:76.57%;top: 59.9504%;">
<a class="a" >ショ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >sho</a>
</div>
<div id="チャ" class="characters-div" style="left:12.25%;top: 63.6973%;">
<a class="a" >チャ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >cha</a>
</div>
<div id="チュ" class="characters-div" style="left:44.41%;top: 63.6973%;">
<a class="a" >チュ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >chu</a>
</div>
<div id="チョ" class="characters-div" style="left:76.57%;top: 63.6973%;">
<a class="a" >チョ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >cho</a>
</div>
<div id="ニャ" class="characters-div" style="left:12.25%;top: 67.4442%;">
<a class="a" >ニャ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >nya</a>
</div>
<div id="ニュ" class="characters-div" style="left:44.41%;top: 67.4442%;">
<a class="a" >ニュ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >nyu</a>
</div>
<div id="ニョ" class="characters-div" style="left:76.57%;top: 67.4442%;">
<a class="a" >ニョ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >nyo</a>
</div>
<div id="ヒャ" class="characters-div" style="left:12.25%;top: 71.1911%;">
<a class="a" >ヒャ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >hya</a>
</div>
<div id="ヒュ" class="characters-div" style="left:44.41%;top: 71.1911%;">
<a class="a" >ヒュ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >hyu</a>
</div>
<div id="ヒョ" class="characters-div" style="left:76.57%;top: 71.1911%;">
<a class="a" >ヒョ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >hyo</a>
</div>
<div id="ミャ" class="characters-div" style="left:12.25%;top: 74.938%;">
<a class="a" >ミャ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >mya</a>
</div>
<div id="ミュ" class="characters-div" style="left:44.41%;top: 74.938%;">
<a class="a" >ミュ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >myu</a>
</div>
<div id="ミョ" class="characters-div" style="left:76.57%;top: 74.938%;">
<a class="a" >ミョ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >myo</a>
</div>
<div id="リャ" class="characters-div" style="left:12.25%;top: 78.6849%;">
<a class="a" >リャ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >rya</a>
</div>
<div id="リュ" class="characters-div" style="left:44.41%;top: 78.6849%;">
<a class="a" >リュ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ryu</a>
</div>
<div id="リョ" class="characters-div" style="left:76.57%;top: 78.6849%;">
<a class="a" >リョ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ryo</a>
</div>
<div id="ギャ" class="characters-div" style="left:12.25%;top: 82.43180000000001%;">
<a class="a" >ギャ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >gya</a>
</div>
<div id="ギュ" class="characters-div" style="left:44.41%;top: 82.43180000000001%;">
<a class="a" >ギュ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >gyu</a>
</div>
<div id="ギョ" class="characters-div" style="left:76.57%;top: 82.43180000000001%;">
<a class="a" >ギョ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >gyo</a>
</div>
<div id="ジャ" class="characters-div" style="left:12.25%;top: 86.1787%;">
<a class="a" >ジャ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ja</a>
</div>
<div id="ジュ" class="characters-div" style="left:44.41%;top: 86.1787%;">
<a class="a" >ジュ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >ju</a>
</div>
<div id="ジョ" class="characters-div" style="left:76.57%;top: 86.1787%;">
<a class="a" >ジョ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >jo</a>
</div>
<div id="ビャ" class="characters-div" style="left:12.25%;top: 89.9256%;">
<a class="a" >ビャ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >bya</a>
</div>
<div id="ビュ" class="characters-div" style="left:44.41%;top: 89.9256%;">
<a class="a" >ビュ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >byu</a>
</div>
<div id="ビョ" class="characters-div" style="left:76.57%;top: 89.9256%;">
<a class="a" >ビョ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >byo</a>
</div>
<div id="ピャ" class="characters-div" style="left:12.25%;top: 93.67250000000001%;">
<a class="a" >ピャ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >pya</a>
</div>
<div id="ピュ" class="characters-div" style="left:44.41%;top: 93.67250000000001%;">
<a class="a" >ピュ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >pyu</a>
</div>
<div id="ピョ" class="characters-div" style="left:76.57%;top: 93.67250000000001%;">
<a class="a" >ピョ</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >pyo</a>
</div>
<div id="アー" class="characters-div" style="left:12.25%;top: 97.4194%;">
<a class="a" >アー</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >a-</a>
</div>
<div id="イー" class="characters-div" style="left:28.33%;top: 97.4194%;">
<a class="a" >イー</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >i-</a>
</div>
<div id="ウー" class="characters-div" style="left:44.41%;top: 97.4194%;">
<a class="a" >ウー</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >u-</a>
</div>
<div id="エー" class="characters-div" style="left:60.49%;top: 97.4194%;">
<a class="a" >エー</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >e-</a>
</div>
<div id="オー" class="characters-div" style="left:76.57%;top: 97.4194%;">
<a class="a" >オー</a>
<a class="child" style="top:70%;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;color: #000000;" >o-</a>
</div>`; 
// data
var hiraganaarr = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'が', 'ぎ', 'ぐ', 'げ', 'ご', 'さ', 'し', 'す', 'せ', 'そ', 'ざ', 'じ', 'ず', 'ぜ', 'ぞ', 'た', 'ち', 'つ', 'て', 'と', 'だ', 'ぢ', 'づ', 'で', 'ど', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ', 'ば', 'び', 'ぶ', 'べ', 'ぼ', 'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ', 'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん', 'きゃ', 'きゅ', 'きょ', 'しゃ', 'しゅ', 'しょ', 'ちゃ', 'ちゅ', 'ちょ', 'にゃ', 'にゅ', 'にょ', 'ひゃ', 'ひゅ', 'ひょ', 'みゃ', 'みゅ', 'みょ', 'りゃ', 'りゅ', 'りょ', 'ぎゃ', 'ぎゅ', 'ぎょ', 'じゃ', 'じゅ', 'じょ', 'びゃ', 'びゅ', 'びょ', 'ぴゃ', 'ぴゅ', 'ぴょ', 'あー', 'いー', 'うー', 'えー', 'おー'];
var katakanaarr = ['ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'ガ', 'ギ', 'グ', 'ゲ', 'ゴ', 'サ', 'シ', 'ス', 'セ', 'ソ', 'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ', 'タ', 'チ', 'ツ', 'テ', 'ト', 'ダ', 'ヂ', 'ヅ', 'デ', 'ド', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ', 'バ', 'ビ', 'ブ', 'ベ', 'ボ', 'パ', 'ピ', 'プ', 'ペ', 'ポ', 'マ', 'ミ', 'ム', 'メ', 'モ', 'ヤ', 'ユ', 'ヨ', 'ラ', 'リ', 'ル', 'レ', 'ロ', 'ワ', 'ヲ', 'ン', 'キャ', 'キュ', 'キョ', 'シャ', 'シュ', 'ショ', 'チャ', 'チュ', 'チョ', 'ニャ', 'ニュ', 'ニョ', 'ヒャ', 'ヒュ', 'ヒョ', 'ミャ', 'ミュ', 'ミョ', 'リャ', 'リュ', 'リョ', 'ギャ', 'ギュ', 'ギョ', 'ジャ', 'ジュ', 'ジョ', 'ビャ', 'ビュ', 'ビョ', 'ピャ', 'ピュ', 'ピョ', 'アー', 'イー', 'ウー', 'エー', 'オー'];
var romanjiarr = ['a', 'i', 'u', 'e', 'o', 'ka', 'ki', 'ku', 'ke', 'ko', 'ga', 'gi', 'gu', 'ge', 'go', 'sa', 'shi', 'su', 'se', 'so', 'za', 'ji', 'zu', 'ze', 'zo', 'ta', 'chi', 'tsu', 'te', 'to', 'da', 'di', 'du', 'de', 'do', 'na', 'ni', 'nu', 'ne', 'no', 'ha', 'hi', 'fu', 'he', 'ho', 'ba', 'bi', 'bu', 'be', 'bo', 'pa', 'pi', 'pu', 'pe', 'po', 'ma', 'mi', 'mu', 'me', 'mo', 'ya', 'yu', 'yo', 'ra', 'ri', 'ru', 're', 'ro', 'wa', 'wo', 'n', 'kya', 'kyu', 'kyo', 'sha', 'shu', 'sho', 'cha', 'chu', 'cho', 'nya', 'nyu', 'nyo', 'hya', 'hyu', 'hyo', 'mya', 'myu', 'myo', 'rya', 'ryu', 'ryo', 'gya', 'gyu', 'gyo', 'ja', 'ju', 'jo', 'bya', 'byu', 'byo', 'pya', 'pyu', 'pyo', 'a-', 'i-', 'u-', 'e-', 'o-'];
// render original interface logic
function renderInterface() {
    var interface = document.getElementById('interface')
    interface.style.height = '620.5%'
    document.getElementById('filler').style.top = '655.5%'
    if (state) {
        interface.innerHTML = hiraganadisplay;
    } else {
        interface.innerHTML = katakanadisplay;
    }
    var characteronclick = document.getElementsByClassName('characters-div')
    getcharacter(characteronclick)
}
//  render interface on time
renderInterface();

var hiraganaonclick = document.getElementById('Hiraganabutton')
var katakanaonclick = document.getElementById('Katakanabutton')
var index = 0
// get character id onclicked  on original page
function getcharacter(characteronclick){for (var i = 0; i < characteronclick.length; i++) {
    characteronclick[i].addEventListener("click", function() {
        var character = this.id;
        characterins(character)
    });
    
}}
// render inside character information to interface div
function characterins(character) {
    var interface = document.getElementById('interface')
    interface.style.height = '65%'   
    document.getElementById('filler').style.top = '100%'
    interface.innerHTML = `
    <div style='position: absolute;left:50%;transform: translateX(-50%);width: 70%;height: 100%; background-color: #DAE3F3;border-radius: 20px;white-space: nowrap;'>
    <a id="jpchrttextbox" style="position: absolute;left:50%;top: 50%;transform: translate(-50%, -50%);font-size: 1500%;font-family: Yu Gothic;font-weight: bold ;"></a>
    <a id="romanjitextbox" style="position: absolute;left: 5%;top: 5% ;font-size: 300%;font-family: Yu Gothic;font-weight: bold;" ></a>
    <img alt='icon' onclick="getsound()" src="../static/pronounciationbutton.svg" style="position: absolute;top:90%;left:90%;width: 5%;height:5%;" >
    <img alt='icon' onclick="renderInterface()" src="../static/blueclosebutton.svg" style="position: absolute;top:5%;left:92%;width: 5%;height:5%;" >
    </div>
    <img alt='icon' onclick='nextcharacter()' src="../static/rightbutton.svg" style="position: absolute;top:40%;right:7.5%;height:20%;"> 
    <img alt='icon' onclick='previouscharacter()' src="../static/leftbutton.svg" style="position: absolute;top:40%;left:7.5%;height:20%;">
    <audio id="audio" src="" style="display: none;"></audio> 
    `;
    if (state) {
        index = hiraganaarr.indexOf(character)
    } else {
        index = katakanaarr.indexOf(character)
    }
    changecharacter()
}
// chage character in ins-chr-inf interface
function nextcharacter() {
    index += 1
    if (index == 109){
        index=0
    }
    changecharacter()
}
function previouscharacter() {
    index -= 1
    
    if (index == -1 ){
        index = 108
    }
    changecharacter()
}
function changecharacter(){
    var jpchr = document.getElementById('jpchrttextbox')
    var romanji = document.getElementById('romanjitextbox')
    if (state){
        jpchr.innerHTML = hiraganaarr[index]    
    } else{
        jpchr.innerHTML = katakanaarr[index]
    }
    romanji.innerHTML = romanjiarr[index]
}
// change state between hiragana and katakana
function hiraganaStatus() {
    state = true;
    renderInterface();

    hiraganaonclick.style.zIndex = '2';   
    hiraganaonclick.style.width = '25%';   
    hiraganaonclick.style.backgroundColor = '#09BFFF';

    katakanaonclick.style.width = '22.74%';
    katakanaonclick.style.zIndex = '1';
    katakanaonclick.style.backgroundColor = '#00B0F0'
}
function katakanaStatus() {
    state = false;
    renderInterface();

    katakanaonclick.style.zIndex = '2';   
    katakanaonclick.style.width = '25%';
    katakanaonclick.style.backgroundColor = '#09BFFF';

    hiraganaonclick.style.width = '22.74%';
    hiraganaonclick.style.zIndex = '1';
    hiraganaonclick.style.backgroundColor = '#00B0F0'
}
// play sound 
function getsound() {

    var audio = document.getElementById('audio')
    audio.src ='../static/mp3/'+ index.toString() + '.mp3'
    audio.load() 
    audio.play() 

}
// mutiplechoice logic

function getmutiplechoice(){
    // render new interface
    var interface = document.getElementById('interface')
    interface.style.height = '65%'   
    document.getElementById('filler').style.top = '100%'
    interface.innerHTML = `
    <div style='position: absolute;left:50%;transform: translateX(-50%);width: 70%;height: 100%; background-color: #DAE3F3;border-radius: 20px;white-space: nowrap;'>
    <a id="questextbox" style="position: absolute;left:50%;top: 30%;transform: translate(-50%, -50%);font-size: 1100%;font-family: Yu Gothic;font-weight: bold ;"></a>
    <div id="11" onclick="changeclickedansdiv1()"  class="ansdiv" style="left:10%;"><a id="1" class="ansa"></a></div>
    <div id="22" onclick="changeclickedansdiv2()"   class="ansdiv" style="left:32.5%;"><a id="2" class="ansa"></a></div>
    <div id="33" onclick="changeclickedansdiv3()" class="ansdiv" style="left:55%;"><a id="3" class="ansa"></a></div>
    <div id="44" onclick="changeclickedansdiv4()"  class="ansdiv" style="left:77.5%;"><a id="4" class="ansa"></a></div>
    <div id="check" onclick="checkans()" style="display:block;position:absolute;bottom:5%;left:40%;height:10%;width:20%;border-radius:10px;background-color: #9BEBFB;"><a class="ansa">check</a></div>
    <div id="next" onclick="getmutiplechoice()" style="display:none;position:absolute;bottom:5%;left:40%;height:10%;width:20%;border-radius:10px;background-color: #9BEBFB;"><a class="ansa">next</a></div> 
    <img alt='icon' onclick="renderInterface()" src="../static/blueclosebutton.svg" style="position: absolute;top:5%;left:92%;width: 5%;height:5%;" >
    <div style="position:absolute;top:90%;left:75%;height:3%;width:15%;background-color: #FF0000;border-radius:3px;">
        <div id="truepc" style="position:absolute;top:0%;left:0%;height:100%;width:50%;border-radius:3px;background-color: #92D050;"></div>
        <a id="thenumoftrueqs" style="position:absolute;top:50%;left:0%;transform: translateY(-50%);font-size: 100%;">0</a>
        <a id="thenumofallqs" style="position:absolute;top:50%;right:0%;transform: translateY(-50%);font-size: 100%;">0</a>
    </div>
    </div>
    `;
    getpercent()
    rendermpt()
}
var lastelmarr = []
function rendermpt(){
    let b = []
    if (state){ b = hiraganaarr}else{ b =katakanaarr}
    // random a character to use in a question
    let i = Math.floor(Math.random() * 109);
    while (lastelmarr.includes(i)){
        i = Math.floor(Math.random() * 109);
    };
    lastelmarr.push(i)
    document.getElementById('questextbox').innerHTML= String(b[i])
    // create content to 4 answer button
    let c =[] //this is list of content of button
    
    let d =[1,2,3,4] // this is list of id of button
    for (let i = 1; i < 4; i++){
        let f = Math.floor(Math.random() * 109);
        while (c.includes(f)) {
            f = Math.floor(Math.random() * 109);
        }
        while (f==i) {
            f = Math.floor(Math.random() * 109);
        }
        c.push(f)
    }
    let e =  Math.floor(Math.random() * 4);
    d=d.filter(d => d !== (e+1));
    truebutton = String(e+1)+String(e+1)
    for (let i=0;i<3;i++){
        document.getElementById(String(d[i])).innerHTML = romanjiarr[c[i]]
    }
    document.getElementById(String(e+1)).innerHTML=romanjiarr[i]
    if (lastelmarr.length>1){

        document.getElementById("11","22","33","44").className="ansdiv"
        getpercent()
    }
    document.getElementById('next').style.display='none'
    
}
// These function is used to get and check the user's choice
var clickedansdiv = ''
var clickedstate = false
var numoftans = 0
var numofallans = 0
var truebutton = "0"
var jpchrbase = katakanaarr
function changeclickedansdiv1(){
    if (document.getElementById('next').style.display=='none'){
        clickedansdiv='1'; clickedansdivstyle();}
}
function changeclickedansdiv2(){
    if (document.getElementById('next').style.display=='none'){
        clickedansdiv='2'; clickedansdivstyle();}
}
function changeclickedansdiv3(){
    if (document.getElementById('next').style.display=='none'){
        clickedansdiv='3'; clickedansdivstyle();}
}
function changeclickedansdiv4(){
    if (document.getElementById('next').style.display=='none'){
        clickedansdiv='4'; clickedansdivstyle();}
}
function clickedansdivstyle(){
    document.getElementById('11').className='ansdiv'
    document.getElementById('22').className='ansdiv'
    document.getElementById('33').className='ansdiv'
    document.getElementById('44').className='ansdiv'
    document.getElementById(clickedansdiv+clickedansdiv).className='clickedansdiv'
    clickedstate=true
}
function checkans(){
    if (clickedstate){
    if (romanjiarr.indexOf(document.getElementById(String(clickedansdiv)).innerHTML)==lastelmarr[lastelmarr.length-1]){
        document.getElementById(String(clickedansdiv)+String(clickedansdiv)).className = 'greendiv'
        numoftans++
    }
    document.getElementById(String(clickedansdiv)+String(clickedansdiv)).className = 'reddiv'
    clickedstate=false}
    document.getElementById(truebutton).className = 'greendiv'
    numofallans++
    document.getElementById('next').style.display='block'
}


// get match logic
var counting = 0
var matchelementlst = []
var leftlst=[]
var rightlst=[5,6,7,8]
var clickedleft=0
var clickedright=9
function getmatch(){
    var interface = document.getElementById('interface')
    interface.style.height = '65%'   
    document.getElementById('filler').style.top = '100%'
    interface.innerHTML = `
    <div style='position: absolute;left:50%;transform: translateX(-50%);width: 70%;height: 100%; background-color: #DAE3F3;border-radius: 20px;white-space: nowrap;'>
    <div onclick='getleftclicked(1)' class='matchdiv' id='11' style='top:10%;left:20%'><a class='ansa' id='1'></a></div>
    <div onclick='getleftclicked(2)' class='matchdiv' id='22' style='top:27.5%;left:20%'><a class='ansa' id='2'></a></div>
    <div onclick='getleftclicked(3)' class='matchdiv' id='33' style='top:45%;left:20%'><a class='ansa' id='3'></a></div>
    <div onclick='getleftclicked(4)' class='matchdiv' id='44' style='top:62.5%;left:20%'><a class='ansa' id='4'></a></div>
    <div onclick='getrightclicked(5)' class='matchdiv' id='55' style='top:10%;right:20%'><a class='ansa' id='5'></a></div>
    <div onclick='getrightclicked(6)' class='matchdiv' id='66' style='top:27.5%;right:20%'><a class='ansa' id='6'></a></div>
    <div onclick='getrightclicked(7)' class='matchdiv' id='77' style='top:45%;right:20%'><a class='ansa' id='7'></a></div>
    <div onclick='getrightclicked(8)' class='matchdiv' id='88' style='top:62.5%;right:20%'><a class='ansa' id='8'></a></div>
    <div onclick='nextmatch()' id='next' style='position:absolute;left:35%;top:80%;width:30%;height:10%;background-color:#9BEBFB;border-radius: 10px;'><a class='ansa' id='next'>Next</a></div>
    <div style="position:absolute;top:85%;left:75%;height:3%;width:15%;background-color: #FF0000;border-radius:3px;">
    <div id="truepc" style="position:absolute;top:0%;left:0%;height:100%;width:50%;border-radius:3px;background-color: #92D050;"></div>
    <a id="thenumoftrueqs" style="position:absolute;top:50%;left:0%;transform: translateY(-50%);font-size: 100%;">0</a>
    <a id="thenumofallqs" style="position:absolute;top:50%;right:0%;transform: translateY(-50%);font-size: 100%;">0</a>
    </div>
    </div>
    `;
    rendermatch()
}
// create content to 8 button
function rendermatch(){
    if (state){
        jpchrbase=hiraganaarr
    }else{jpchrbase = katakanaarr}
    // reset the list of last question
    if (matchelementlst.length==108){
        matchelementlst=[]
    }
    for (let i=0;i<4;i++){ 
    let element = Math.floor(Math.random()*109)
    while (matchelementlst.includes(element)){element = Math.floor(Math.random()*109)}
    matchelementlst.push(element)
    let pos = Math.floor(Math.random()*4)+1
    while (leftlst.includes(pos)){pos=Math.floor(Math.random()*4)+1}
    leftlst.push(pos)
    document.getElementById(String(pos)).innerHTML= jpchrbase[element]
    document.getElementById(String(i+5)).innerHTML= romanjiarr[element]
}
    leftlst=[]
}

// these two function is used to get id of the button that user clicked on (2023/02/06d)
function getleftclicked(id){
    if(clickedright>8){
    if (clickedleft>0){document.getElementById(String(clickedleft)+String(clickedleft)).className ='matchdiv'}
    clickedleft=id
    document.getElementById(String(id)+String(id)).className='matchdiv clickedmatchdiv'
    }else{clickedleft=id;checkmatch()} 
}
function getrightclicked(id){
    if(clickedleft<1){
    if (clickedright<9){document.getElementById(String(clickedright)+String(clickedright)).className='matchdiv'}
    clickedright=id
    document.getElementById(String(id)+String(id)).className='matchdiv clickedmatchdiv'
    }else{clickedright=id;checkmatch()}
}

function checkmatch(){
    a=document.getElementById(String(clickedleft)).innerHTML
    b=document.getElementById(String(clickedright)).innerHTML
    if(jpchrbase.indexOf(a)==romanjiarr.indexOf(b)){
        document.getElementById(String(clickedright)+String(clickedright)).className='greenmatchdiv'
        document.getElementById(String(clickedleft)+String(clickedleft)).className='greenmatchdiv'
        numoftans++
    }else{
        document.getElementById(String(clickedright)+String(clickedright)).className='redmatchdiv'
        document.getElementById(String(clickedleft)+String(clickedleft)).className='redmatchdiv'
    }
    clickedleft=0
    clickedright=9
    counting++
    numofallans++
    getpercent()
}
function nextmatch(){
    if(counting==4){
        counting=0
        getmatch()
    }
}
// this function is use to update the percent task
function getpercent(){
    document.getElementById('truepc').style.width = String((numoftans/numofallans)*100)+"%"
        document.getElementById('thenumoftrueqs').innerHTML = String(numoftans)
        document.getElementById('thenumofallqs').innerHTML = String(numofallans)
}
