Game.appLoginEditScreen=function(){

};

Game.appLoginEditScreen.prototype={
	
	init:function(user)
	{		
		_this = this;	
		_this.user = user;
		_this.user.language = "Urdu";	
		console.log(_this.user);
	},

	preload:function(game)
	{
		/*var bmd = game.add.bitmapData(800,600);                
    	bmd.ctx.beginPath();        
    	bmd.ctx.lineWidth = "4";        
    	bmd.ctx.strokeStyle = 'white';        
    	bmd.ctx.setLineDash([2,3]);        
    	bmd.ctx.moveTo(10, 10);        
    	bmd.ctx.lineTo(400 , 400);        
    	bmd.ctx.stroke();        
    	bmd.ctx.closePath();        
    	var sprite = game.add.sprite(200, 400, bmd);*/
	},

	create:function(game)
	{
		_this = this;

		_this.i = 0;

		_this.basePath = cordova.file.externalRootDirectory+"Android/data/com.example.DemoApp/Files/Download/.gameFilesBBV5_0_5/www/";

		_this.fullSize = 121195371;

	    _this.zipFiles = [["Assets1.zip",26430143],["Assets2.zip",39780906],["Assets3.zip",18453216],
	    					["Assets4.zip",14402031],["Assets5.zip",19891065],["Assets6.zip",19889389],
	    					["English.zip",23759971],["Kannada.zip",25787866],["Hindi.zip",25508626],
	    					["Odiya.zip",40129117],["Gujarati.zip",31882078],["questionSounds.zip",162758079]];

	    _this.counter = 0;
	    _this.counter1 = 0;

	    //alert(_this.user.language);

	    _this.splash = game.add.sprite(game.world.centerX,game.world.centerY,'registrationbg');
    	_this.splash.scale.setTo(1);
    	_this.splash.anchor.setTo(0.5);

    	var titleBar = game.add.graphics(0, 0);
    	titleBar.anchor.setTo(0.5);
    	titleBar.lineStyle(2, 0x000000, 0.8);
		titleBar.beginFill(0x4E342E, 1);
		titleBar.drawRect(0, 0, 540, 80);


		_this.regBackArrow = game.add.sprite(40,40,'regBackArrow');
	    _this.regBackArrow.scale.setTo(0.35);
	    _this.regBackArrow.anchor.setTo(0.5);

	    var regBackArrowGrph = game.add.graphics(0, 0);
	    regBackArrowGrph.beginFill(0x4E342E, 0.05);
		regBackArrowGrph.drawRect(-60, -60, 200, 200);
		_this.regBackArrow.addChild(regBackArrowGrph);

	    
		document.addEventListener('backbutton', function(e) {
		    	e.preventDefault();
		    }, false);


		var titleTxt = game.add.text(game.world.centerX-80,45,"Building Blocks");
		titleTxt.x = Math.round(titleTxt.x);
			titleTxt.anchor.setTo(0.5);
			titleTxt.align = 'center';
			titleTxt.font = 'regfont4';
			titleTxt.fontSize = '22pt';
			titleTxt.fontWeight = 500;
			titleTxt.fill = '#FFFFFF';
			titleTxt.wordWrap = true;
			titleTxt.wordWrapWidth = 500;

		var avatar = game.add.sprite(game.world.centerX,game.world.centerY,_this.user.name.toLowerCase());
    	avatar.scale.setTo(0.8);
    	avatar.anchor.setTo(0.5);

    	_this.regandstsrtBtn = _this.add.sprite(game.world.centerX,game.world.centerY+150,'regandstsrtBtn');
    	_this.regandstsrtBtn.scale.setTo(0.8,1);
    	_this.regandstsrtBtn.anchor.setTo(0.5);


    	var textLang = "";
		if(_this.user.language == "Hindi")
		{
			textLang = "शुरु";
		}else if(_this.user.language == "Kannada")
		{
			textLang = "ಪ್ರಾರಂಭಿಸಿ";
		}else if(_this.user.language == "Odiya")
		{
			textLang = "ଆରମ୍ଭ କରନ୍ତ";
		}else if(_this.user.language == "Gujarati")
		{
			textLang = "શરૂ કરો";
		}else if(_this.user.language == "Marathi")
		{
			textLang = "सुरू करा"
		}
		else if(_this.user.language == "Telugu")
		{
			textLang = "ప్రారంభించండి"
		}
		else if(_this.user.language == "Tamil")
		{
			textLang = "தொடக்கம்"
		}
		else if(_this.user.language == "Urdu")
		{
			textLang = "شروع کیجئے"
		}else{
			textLang = "START";
		}

    	_this.regandstsrtBtnTxt = _this.add.text(game.world.centerX,game.world.centerY+152,textLang);
		_this.regandstsrtBtnTxt.x = Math.round(_this.regandstsrtBtnTxt.x);
		_this.regandstsrtBtnTxt.anchor.setTo(0.5);
		_this.regandstsrtBtnTxt.align = 'center';
		_this.regandstsrtBtnTxt.font = 'regfont1';
		_this.regandstsrtBtnTxt.letterSpacing = 15;
		_this.regandstsrtBtnTxt.fontSize = '16pt';
		_this.regandstsrtBtnTxt.fontWeight = 500;
		_this.regandstsrtBtnTxt.fill = '#FFFFFF';
		_this.regandstsrtBtnTxt.wordWrap = true;
		_this.regandstsrtBtnTxt.wordWrapWidth = 500;


		_this.userEditBtn = _this.add.sprite(game.world.centerX-150,game.world.centerY,'userEditBtn');
    	_this.userEditBtn.scale.setTo(0.4);
    	_this.userEditBtn.anchor.setTo(0.5);
    	_this.userEditBtn.inputEnabled = true;
    	_this.userEditBtn.events.onInputDown.add(function(){
    		_this.state.start('editLangScreen',true,false,_this.user);
    	},_this);


    	_this.userProgressBtn = _this.add.sprite(game.world.centerX+150,game.world.centerY,'userProgressBtn');
    	_this.userProgressBtn.scale.setTo(0.4);
    	_this.userProgressBtn.anchor.setTo(0.5);
    	_this.userProgressBtn.inputEnabled = true;
    	_this.userProgressBtn.events.onInputDown.add(function(){
    		_this.state.start('index2',true,false,_this.user,"true");
    	},_this);


		 _this.checkIfAllAssetsPresent();	
		
		// _this.state.start('boot');
	},

	checkIfAllAssetsPresent:function()
	{
			_this.regBackArrow.inputEnabled = true;
		_this.regBackArrow.events.onInputDown.add(function(){
			_this.state.start('appLoginScreen',true,false);
		},_this);

		document.addEventListener('backbutton', _this.goback, false);

			_this.regandstsrtBtn.inputEnabled = true;
			_this.regandstsrtBtn.events.onInputDown.add(function(){
				FirebasePlugin.logEvent("Button_click_start", {Button_click_start: "", item_id: ""});
				_this.state.start('index2',true,false,_this.user,false);
		},_this);		     
	},

	goback:function(e) {
		document.removeEventListener('backbutton', _this.goback, false);
		    	_this.state.start('appLoginScreen',true,false);
		    },

	checkNetwork:function()
	{
		document.removeEventListener("online", _this.checkNetwork, false);
		_this.game.state.start('appLoginEditScreen',true,false,_this.user);
	},

	shutdown:function()
	{
		document.removeEventListener('backbutton', _this.goback, false);
	}

};