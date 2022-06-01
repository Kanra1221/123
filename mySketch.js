var inputElement,ColorPicker,btnElement,sliderElementradioElement
var randomValue=0

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	inputElement =createInput("Hello") //產生文字輸入方塊
	inputElement.position(50,10)
	sliderElement= createSlider(10,50,20,0.01)//初始值，最大值，預設值，間距
	sliderElement.position(200,10)
	btnElement =createButton("瘋狂")
	btnElement.position(450,10)
	btnElement.mousePressed(goCrazy)
	colorPicker = createColorPicker('#ed225d');//括號內的值，為預設值
	colorPicker.position(550,10)
	radioElement=createRadio()
  radioElement.option("一般")
  radioElement.option("旋轉(rotate)")
  radioElement.option("大小(scale)")
	radioElement.position(650,10)
	radioElement.style("background-color",'white')//設定為CSS格式

}
function goCrazy(){
	if(randomValue>0){
	 randomValue=0
   }
	 else
	 {
		randomValue=10 //抖動的距離為-10~10
	}
}

function draw() {
	background(0)
	var txts = inputElement.value();
	if(txts=="ship"){
		txts="👥"
	}
	var textHeight=sliderElement.value();
	//textSize(50) //文字大小
	textSize(sliderElement.value())
	//fill(255) //充滿顏色
	 fill(colorPicker.value())
	
	var textLength=textWidth(txts)+100
	mode = radioElement.value()
	for(var y=0;y<height;y=y+textHeight+10){
		push()
	  {
	      if(int(y/(textHeight+10))%2==0){
		       fill(colorPicker.value())
		       translate(-50,0) //偶數行充滿顏色
	      }
		    else
		    {
			     fill(255)//奇數行充滿顏色
				}
				for(var x=0;x<width;x=x+textLength)
				{  push()
				     translate(x+random(-randomValue,randomValue),y+random(-randomValue,randomValue))
			       if(mode=="旋轉(rotate)"){
					     //rotate(PI/4)
							 rotate(sin(frameCount/20)+y/10)
						 }else if(mode=="大小(scale)"){
							 scale(sin(frameCount/20)+y/10)
							 
						 }
				     text(txts,0,0) //顯示文字
						pop()
		}
		 pop()	

}
	}
}