Game.levelA=function(){};




Game.levelA.prototype={
    init:function(game)
	{
		_this = this;
         window.languageSelected = selctedLang.selectedlanguage;
		//telInitializer.gameIdInit("pinwheel1_1A",gradeSelected);
	},

create:function(game){
    _this.bg1=null;
    _this.qno=0;
    _this.starsGroup=0;
    _this.count1=0;
    _this.count=0;
    _this.qArrays=[];
    _this.flagmain11Anim=0;
    _this.animlev1=0;
    _this.a1=0;
 



    _this.speaker=0;
    _this.w1=0;_this.w2=0;
    _this.AnimOpt=0;_this.AnimOpt2=0;_this.AnimOpt3=0;
    _this.numGroup=0;
    _this.grpnum=new Array();
    _this.minutes=0;_this.seconds=0;_this.counterForTimer=0;
    _this.box=0;
    _this.check=0;
    _this.qflag=0;
    _this.questno=0;
    _this.Ans;
    _this.clickSound = _this.add.audio('ClickSound');
    _this.waudio = _this.add.audio('waudio');
    _this.celebr = _this.add.audio('celebr');
    _this.snapSound = _this.add.audio('snapSound');
    //baudio.play();
    //baudio.loopFull(0.6);
    _this.qArrays = new Array();
    _this.qArrays1 = new Array();
    _this.qArrays2 = new Array();
    _this.qArrays1 = [1,2,3,4,5,6];
    _this.qArrays2 = [7,8,9,10,11,12];
    
    // this.qArrays1 = this.shuffle(_this.qArrays1);
    // this.qArrays2 = this.shuffle(_this.qArrays2);
        
    for(var i=0;i<3;i++)
    {
        _this.qArrays.push(_this.qArrays1[i]);
    }
    for(var j=0;j<3;j++)
    {
        _this.qArrays.push(_this.qArrays2[j]);
    }

    console.log(_this.qArrays);

    // counterText=0;
    _this.shake = new Phaser.Plugin.Shake(game);
    game.plugins.add(_this.shake);

    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.setBoundsToWorld();

    _this.bg1 = _this.add.sprite(0,0, 'bgA');
    _this.TopBar=_this.add.sprite(0,0,'Topbar');
    // _this.footer = _this.add.sprite(0,480,'footer');

    _this.TopBar.scale.setTo(1,1.1);
    
    _this.backbtn = _this.add.sprite(10,7,'backbtn');
    _this.backbtn.inputEnabled = true;
    _this.backbtn.events.onInputDown.add(function(){
        console.log("back");
        _this.backbtn.events.onInputDown.removeAll();
        this.stopVoice();
        ClickSound.play();
    },this);

    _this.timebg=_this.add.sprite(305,6,'timer');
    _this.timebg.scale.setTo(1.2,1);

    _this.timeDisplay = _this.add.text(336,22,_this.minutes + ' : '+ _this.seconds);
    _this.timeDisplay.anchor.setTo(0.5);
    _this.timeDisplay.align = 'center';
    _this.timeDisplay.font = 'myfont';
    _this.timeDisplay.fontSize = 20;
    //text.fontWeight = 'bold';
    _this.timeDisplay.fill = '#ADFF2F';

    _this.speaker = this.add.button(620,9,'speaker',function(){
        this.clickSound = this.add.audio('ClickSound');
        _this.clickSound.play();
        _this.getVoice();
    },_this,1,0,2);//,function(){console.log("speaker on");/*this.speakeron();*/},this,0,1,2);

    _this.generateStarsForTheScene(6);
   //  _this.no1++;
    this.getQuestion();
},


updateTimer:function() {
    _this.counterForTimer++;
    //console.log("lololil"+counterForTimer);
    if(_this.counterForTimer>59)
    {
        _this.counterForTimer = 0;
        if(_this.minutes<10)
        {
            this.minutes =  this.minutes+1;
            _this.seconds = 00;
        }
        else
        {
            this.minutes =  this.minutes+1;
        }
    }
    else
    {
        if (_this.counterForTimer < 10)
            this.seconds = '0' + this.counterForTimer;
        else
            this.seconds = this.counterForTimer;
    }
    this.timeDisplay.setText(_this.minutes+':' + this.seconds);
    //timer.setText(minutes + ':'+ seconds );
},

generateStarsForTheScene:function(count){
    _this.starsGroup = _this.add.group();

    for (var i = 0; i < count; i++)
    {
        _this.starsGroup.create(_this.world.centerX-15, 10, 'starAnim');
        for(var j =0;j<i;j++)
        {
            if(_this.starsGroup.getChildAt(j))
            {
                _this.starsGroup.getChildAt(j).x-=15;
                _this.starsGroup.getChildAt(i).x+=15;
            }
        }
    }
},

shuffle: function(array) {
    _this.currentIndex = array.length, _this.temporaryValue, _this.randomIndex;

    // While there remain elements to shuffle...
    while (0 !== _this.currentIndex) 
    {

        // Pick a remaining element...
        _this.randomIndex = Math.floor(Math.random() * _this.currentIndex);
        _this.currentIndex -= 1;
        // And swap it with the current element.
        _this.temporaryValue = array[_this.currentIndex];
        array[_this.currentIndex] = array[_this.randomIndex];
        array[_this.randomIndex] = _this.temporaryValue;
    }

    return array;
},

    /***********************************getquestion************************/
getQuestion:function(target){
    _this.timer1 = this.time.create(false);
    _this.timer1.loop(1000, function(){
            this.updateTimer();
    }, this);
    _this.timer1.start();
    _this.grpnum=new Array();
    // _this.speaker.inputEnabled=false;
    // _this.speaker.input.useHandCursor = true;
    //this.stopAllVoice();
    //console.log("Quest:"+_this.qArrays[_this.qno]);

    switch(_this.qArrays[_this.qno])
      {
          case 1: this.question1();  break;
          case 2: this.question2();  break;
          case 3: this.question3();  break;
          case 4: this.question4();  break;
          case 5: this.question5();  break;
          case 6: this.question6();  break;
          case 7: this.question7();  break;
          case 8: this.question8();  break;
          case 9: this.question9();  break;
          case 10:this.question10(); break;
          case 11:this.question11(); break;
          case 12:this.question12(); break;
      }
},
    
    objDragStart:function()
    {
        //alert("here");
        _this.numb.input.enableDrag();
        _this.numb.input.allowHorizontalDrag = false;

        _this.numb.events.onDragStart.add(_this.dragStart,_this);
        _this.numb.events.onDragStop.add(_this.dragStop,_this);
        _this.numb.events.onDragUpdate.add(_this.dragUpdate,_this);
    },
    objDragStop:function()
    {
        
        //_this.numb.input.enableDrag();
        
        _this.numb.events.onDragStart.removeAll();
        _this.numb.events.onDragStop.removeAll();
        _this.numb.events.onDragUpdate.removeAll();
        _this.numb.inputEnabled = false;
    },
    dragStart:function()
    {
},
    dragStop:function()
    {
},
    
    checkOverlap:function(spriteA, spriteB) 
	{
		
	    var boundsA = spriteA.getBounds();
	    var boundsB = spriteB.getBounds();

	    return Phaser.Rectangle.intersects(boundsA, boundsB);
	},
    
    dragUpdate:function(target)
    {
        
        console.log(target.y);
        
        if(_this.temp)
            {
                if(target.y<_this.temp)
                    {
                        //console.log("hai");
                        _this.hitAreaGraphics.y+=((_this.temp-target.y)-0.15);
                    }
                else if(target.y>_this.temp)
                    {
                        //console.log("hai2");
                        _this.hitAreaGraphics.y-=((target.y-_this.temp)-0.15);
                    }
            }
        
        if(target.y>150)
            {
                target.y = -268;
                _this.hitAreaGraphics.y=410;
            }
        else if(target.y<-700)
            {
                target.y = -268;
                _this.hitAreaGraphics.y=410;
            }
       
           
        _this.temp = target.y;
    }, 
    
   
    
    update:function()
    {
        //_this.numb.updateCrop();
},

question1:function(){
    _this.Question = 1;
    _this.no1++;
    console.log("1");
    
    
    
    _this.locker = _this.add.sprite(70, 70, 'locker');
    _this.door = _this.add.sprite(84, 94, 'door');
    _this.lock1 = _this.add.sprite(496, 220, 'lock1');
    _this.lock2 = _this.add.sprite(568, 291, 'lock2');
    //_this.numbers = _this.add.sprite(202,93,'numbers');
    _this.qBox = _this.add.sprite(468,140,'questionBox');
    _this.aBox = _this.add.sprite(500,380,'answerBox');
    _this.sBox2 = _this.add.sprite(180,140,'sBox2');
    _this.sBox3 = _this.add.sprite(225,200,'sBox3');
    _this.sBox4 = _this.add.sprite(270,260,'sBox4');
    _this.sBox5 = _this.add.sprite(315,320,'sBox5');
    
    _this.numb = _this.add.sprite(197,-268,'numb');
    
    _this.numb.inputEnabled = true;
    _this.numb.input.priorityID = 1;
    _this.numb.input.pixelPerfectClick = true;
    _this.numb.input.useHandCursor = true;
    _this.numb.input.enableDrag();
    _this.numb.input.allowHorizontalDrag = false;
    
    
    
    
    
    _this.hitAreaGraphics = new Phaser.Rectangle(0, 0, 40, 80);
    
    //_this.numb.addChild(_this.c1);
    //_this.c1.y = _this.hitAreaGraphics+15;
    // console.log(_this.c1.getBounds());
   
    _this.numb.hitArea = _this.hitAreaGraphics;
    _this.hitAreaGraphics.y=410;
    _this.numb.events.onDragUpdate.add(_this.dragUpdate,_this);
       
    
    /*SCROLL BOXES GRAPHICS*/
    _this.sg41 = _this.add.graphics(90, 25);
    _this.sg41.lineStyle(2, 0x0000FF, 1);
    _this.sg41.beginFill(0xFF0000, 0);
    _this.sg41.drawRect(110, 135, 40, 50);        
    _this.sg41.endFill();
    //  _this.sg41.alpha=0;
    _this.sg41.inputEnabled=true;
    
    //_this.sg41.events.onInputOver.add(function(){console.log("hai");},_this);
    //_this.sg41.events.onInputUp.add(_this.objDragStop,_this);
    _this.numb.mask = _this.sg41;
     //_this.numb.crop(_this.sg41);
    
    //_this.cropRect = new Phaser.Rectangle(0, 370, 90, 50);
   // 
    //_this.cropRect.y-=50;
    //    _this.cropRect.height+=50;
    

    // Here we'll tween the crop rect, from a width of zero to full width, and back again
    //var tween = _this.add.tween(cropRect).to( { height: _this.numb.height }, 3000, Phaser.Easing.Bounce.Out, false, 0, 1000, true);

  //_this.numb.crop(_this.cropRect);

    //tween.start();
    // _this.sg41.events.onInputDown.add(function(target){},_this);
    
//     _this.sg42 = _this.add.graphics(90, 25);
//    _this.sg42.lineStyle(2, 0x0000FF, 1);
//    _this.sg42.beginFill(0xFF0000, 0.5);
//    _this.sg42.drawRect(156, 135, 40, 50);        
//    _this.sg42.endFill();
//    //  _this.sg42.alpha=0;
//    _this.sg42.inputEnabled=true;
//    // _this.sg42.events.onInputDown.add(function(target){},_this);
//    
//     _this.sg43 = _this.add.graphics(90, 25);
//    _this.sg43.lineStyle(2, 0x0000FF, 1);
//    _this.sg43.beginFill(0xFF0000, 0.5);
//    _this.sg43.drawRect(202, 135, 40, 50);        
//    _this.sg43.endFill();
//    //  _this.sg43.alpha=0;
//    _this.sg43.inputEnabled=true;
//    // _this.sg43.events.onInputDown.add(function(target){},_this);
//    
//     _this.sg44 = _this.add.graphics(90, 25);
//    _this.sg44.lineStyle(2, 0x0000FF, 1);
//    _this.sg44.beginFill(0xFF0000, 0.5);
//    _this.sg44.drawRect(248, 135, 40, 50);        
//    _this.sg44.endFill();
//    //  _this.sg44.alpha=0;
//    _this.sg44.inputEnabled=true;
//    // _this.sg44.events.onInputDown.add(function(target){},_this);
//    
//     _this.sg31 = _this.add.graphics(90, 25);
//    _this.sg31.lineStyle(2, 0x0000FF, 1);
//    _this.sg31.beginFill(0xFF0000, 0.5);
//    _this.sg31.drawRect(156, 195, 40, 50);        
//    _this.sg31.endFill();
//    //  _this.sg31.alpha=0;
//    _this.sg31.inputEnabled=true;
//    // _this.sg31.events.onInputDown.add(function(target){},_this);
//    
//     _this.sg32 = _this.add.graphics(90, 25);
//    _this.sg32.lineStyle(2, 0x0000FF, 1);
//    _this.sg32.beginFill(0xFF0000, 0.5);
//    _this.sg32.drawRect(202, 195, 40, 50);        
//    _this.sg32.endFill();
//    //  _this.sg32.alpha=0;
//    _this.sg32.inputEnabled=true;
//    // _this.sg32.events.onInputDown.add(function(target){},_this);
//    
//     _this.sg33 = _this.add.graphics(90, 25);
//    _this.sg33.lineStyle(2, 0x0000FF, 1);
//    _this.sg33.beginFill(0xFF0000, 0.5);
//    _this.sg33.drawRect(248, 195, 40, 50);        
//    _this.sg33.endFill();
//    //  _this.sg33.alpha=0;
//    _this.sg33.inputEnabled=true;
//    // _this.sg33.events.onInputDown.add(function(target){},_this);
//    
//     _this.sg21 = _this.add.graphics(90, 25);
//    _this.sg21.lineStyle(2, 0x0000FF, 1);
//    _this.sg21.beginFill(0xFF0000, 0.5);
//    _this.sg21.drawRect(202, 255, 40, 50);        
//    _this.sg21.endFill();
//    //  _this.sg21.alpha=0;
//    _this.sg21.inputEnabled=true;
//    // _this.sg21.events.onInputDown.add(function(target){},_this);
//    
//     _this.sg22 = _this.add.graphics(90, 25);
//    _this.sg22.lineStyle(2, 0x0000FF, 1);
//    _this.sg22.beginFill(0xFF0000, 0.5);
//    _this.sg22.drawRect(248, 255, 40, 50);        
//    _this.sg22.endFill();
//    //  _this.sg22.alpha=0;
//    _this.sg22.inputEnabled=true;
//    // _this.sg22.events.onInputDown.add(function(target){},_this);
//    
//     _this.sg11 = _this.add.graphics(90, 25);
//    _this.sg11.lineStyle(2, 0x0000FF, 1);
//    _this.sg11.beginFill(0xFF0000, 0.5);
//    _this.sg11.drawRect(245, 315, 40, 50);        
//    _this.sg11.endFill();
//    //  _this.sg11.alpha=0;
//    _this.sg11.inputEnabled=true;
//    // _this.sg11.events.onInputDown.add(function(target){},_this);
   
    
    
    _this.text = this.add.text(115, 45, "4 5 2 6");
    _this.text.font = "myfont";
    _this.text.fill = "#000000";
    _this.text.fontWeight = 'bold';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 45;
    _this.qBox.addChild(_this.text);
    
    
    },

     

   


toCheckAnswer :function (target){
    _this.clickSound.play();
    _this.noofAttempts++;

    //   target.events.onInputDown.removeAll();

    if(_this.Question == 1 || _this.Question == 2 || _this.Question == 3 || _this.Question == 4 ||  _this.Question == 5 ||  _this.Question == 6 || _this.Question == 7 ||  _this.Question == 8 || _this.Question == 9 || _this.Question == 10 || _this.Question == 11 || _this.Question == 12)
    {
	   				 
        if(_this.tap == _this.rightAns)
        {
            _this.correctAns();
        }
        else
        {
            _this.wrongAns(target);
        }
    }
},

 correctAns:function(target){    
     //_this.stopvoice();
     _this.wrong = false;
     // target.events.onInputDown.removeAll();
     // _this.rightmark.inputEnabled=false;
     _this.wrongAnswer = false;
     _this.noofAttempts++;
        
     if(_this.timer)
     {
         _this.timer.stop();
         _this.timer = null;
     }

     if(_this.timer1)
     {
         _this.timer1.stop();
         _this.timer1 = null;
     }

     _this.time.events.add(1000, function(){      
         _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
         _this.starAnim.smoothed = false;
         _this.anim4 = _this.starAnim.animations.add('star');
         _this.anim4.play();
         _this.count1++;
        
         _this.celebration = true;
         _this.celebr.play();
     });
     
     _this.time.events.add(2500, _this.removeCelebration, _this);
     
},
    
wrongAns:function(target){
    // _this.stopvoice();
    _this.noofAttempts++;    
    _this.shake.shake(10,target);  
    // _this.timer1.stop();
    _this.wrong = false;
    _this.time.events.add(500, function(){
       
    },_this)

    _this.wmusic = _this.add.audio('waudio');
    _this.wmusic.play();
    _this.time.events.add(500, function(){         
    },_this);

},

removeCelebration:function(){
    console.log("removeCeleb");
    _this.celebration = false;
    _this.correct=0;
    _this.count=0;
    _this.qno++;
    
    if(_this.qno<6)
    {
        
        _this.getQuestion();
    }
    else
    {
        // _this.stopvoice();
        _this.state.start('score');        
    }
},

    
 getVoice:function(){
     _this.stopvoice();
     _this.playQuestionSound = document.createElement('audio');
     _this.src = document.createElement('source');
     switch(_this.qArrays[_this.qno])
     {
         case 1:
         case 2:  
         case 3:
         case 4:
         case 5:
         case 6:
         case 7:
         case 8:
         case 9:
         case 10:
         case 11:
         case 12:
             if(selctedLang.selectedlanguage =="English")
             {
                 _this.src.setAttribute("src", "voice/English/nsd1.5E.mp3");
             }
             else if(selctedLang.selectedlanguage =="Hindi")
             {
                 _this.src.setAttribute("src", "voice/Hindi/nsd1.5H.mp3");
             }
             else if(selctedLang.selectedlanguage =="Kannada")
             {
                 _this.src.setAttribute("src", "voice/Kannada/nsd1.5K.mp3");
             }
             else if(selctedLang.selectedlanguage =="Gujarati")
             {
                 _this.src.setAttribute("src", "voice/Gujarati/nsd1.5G.mp3");
             }
             else
             {
                 _this.src.setAttribute("src", "voice/Odiya/nsd1.5O.mp3");
                 _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
             }
             break;         
     }
        
     _this.playQuestionSound.appendChild(_this.src);
     _this.playQuestionSound.play();
},
    
stopvoice:function(){      
    if(_this.playQuestionSound)
    {
        if(_this.playQuestionSound.contains(_this.src))
        {
            _this.playQuestionSound.removeChild(_this.src);
            _this.src = null;
        }
        if(!_this.playQuestionSound.paused)
        {
            console.log("here");
            _this.playQuestionSound.pause();
            _this.playQuestionSound.currentTime = 0.0;
        }
        _this.playQuestionSound = null;
        _this.src = null;
    }          
    if(_this.celebrationSound)
    {
        if(_this.celebrationSound.isPlaying)
        {
            _this.celebrationSound.stop();
            _this.celebrationSound = null;
        }
    }
},
    
amplifyMedia:function(mediaElem, multiplier) {
    var context = new (window.AudioContext || window.webkitAudioContext),
        result = {
            context: context,
            source: context.createMediaElementSource(mediaElem),
            gain: context.createGain(),
            media: mediaElem,
            amplify: function(multiplier) { result.gain.gain.value = multiplier; },
            getAmpLevel: function() { return result.gain.gain.value; }
        };
    result.source.connect(result.gain);
    result.gain.connect(context.destination);
    result.amplify(multiplier);

    return result;
},

shutdown:function(){
    this.stopvoice();
}, 
    
};
