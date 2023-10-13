Game.selectgrade3MicroConceptScreen=function(){

};

Game.selectgrade3MicroConceptScreen.prototype={

	game:null,
	selected:false,

	init:function()
	{

		if(app.cordova)
		{
			if(navigator.connection.type!="none" && navigator.connection.type!="unknown" && navigator.connection.type!=null && navigator.connection.type!="undefined")
			{
				//absdsjsapi.syncTelemetryData();
			}
			document.addEventListener("online", this.syncTelFunc, false);
		}
	},
			
	syncTelFunc:function()
	{
		if(navigator.connection.type!="none" && navigator.connection.type!="unknown" && navigator.connection.type!=null && navigator.connection.type!="undefined")
		{
			//absdsjsapi.syncTelemetryData();
		}
	},

	create:function(game){		

		
		nativeApp.screenViewStringPass("Practice_topic_selection_screen","grade3MicroConceptScreen");

		this.game = game;

		selectgrade3MicroConcept = true;

		selectgrade1MicroConcept = false;
		selectgrade2MicroConcept = false;
		selectgrade4MicroConcept = false;
		selectgrade5MicroConcept = false;

		if(grade3NumberSenseSelected)
		{
			this.state.start('grade3NumberSense',true,false);
		}
		else if(grade3NumberOperationSelected)
		{
			this.state.start('grade3NumberOperation',true,false);
		}
		else if(grade3MeasurementSelected)
		{
			this.state.start('grade3Measurement',true,false);
		}
		else if(grade3ShapesSenseSelected)
		{
			this.state.start('grade3Shapes',true,false);
		}
		else
		{

			app.gradeScreen = true;

			game.input.enabled = true;

			this.gradeTree = [];

			this.gradeTreeTxt = [];

			this.gameArray = [];

			/*this.NumberSenseGrade1Array = [
			[app.languageSelected.numberTitle,'unity1_1','unity1_2','unity1_3','unity1_4','unity1_5','unity1_6','unity1_7'],
			[app.languageSelected.sequenceTitle,'unity2_1_1','unity2_2_1','unity2_3_1','unity2_4_1','unity2_5_1','unity2_6_1'],
			[app.languageSelected.ComparisionTitle,'unity4_1_1','unity4_2_1','unity4_3_1','unity4_4_1','unity4_5_1'],
			[app.languageSelected.fractionTitle,'akshara1_1A','akshara1_1B'],
			];

			this.MeasurementGrade1Array = [
			[app.languageSelected.additionTitle,'unity5_1','unity6_1','unity7_1_1','unity7_2_1'],
			[app.languageSelected.subtractionTitle,'unity8_1','unity10_1_1','unity10_2_1'],
			[app.languageSelected.multiplicationTitle,'unity11_1','unity11_2','unity12_3_1'],
			[app.languageSelected.divisionTitle,'unity16_1','unity16_2'],
			];

			this.NumberOperationsGrade1Array = [
			[app.languageSelected.lengthTitle,'akshara2_1A','akshara2_1B','akshara2_2','akshara2_3'],
			[app.languageSelected.weightTitle,'akshara3_1','akshara3_2A'],
			[app.languageSelected.timeTitle,'akshara5_1','akshara5_2','akshara5_4'],
			];

			/*this.NumberSenseGrade2Array = [
			[app.languageSelected.sequenceTitle,'unity2_1_2','unity2_2_2','unity2_3_2','unity2_4_2','unity2_5_2','unity2_6_2'],
			[app.languageSelected.ComparisionTitle,'unity4_3_2','unity4_4_2','unity4_5_2'],
			[app.languageSelected.placeValueTitle,'unity3_1_1','unity3_2_1'],
			[app.languageSelected.fractionTitle,'akshara1_1A','akshara1_1B'],
			];

			this.MeasurementGrade2Array = [
			[app.languageSelected.additionTitle,'unity7_1_1','unity7_2_1'],
			[app.languageSelected.subtractionTitle,'unity10_1_2','unity10_2_2'],
			[app.languageSelected.multiplicationTitle,'unity12_1','unity12_2','unity12_3_2','unity12_3_3'],
			[app.languageSelected.divisionTitle,'unity15_1','unity16_1','unity16_2','unity16_3','unity17_2','unity17_3'],
			];

			this.NumberOperationsGrade2Array = [
			[app.languageSelected.lengthTitle,'akshara2_1A','akshara2_1B','akshara2_2','akshara2_3'],
			[app.languageSelected.weightTitle,'akshara3_1','akshara3_2A'],
			[app.languageSelected.timeTitle,'akshara5_1','akshara5_2','akshara5_4','akshara6_1','akshara6_2'],
			];*/
			
			
			gradeScreen = true;
			this.background = game.add.tileSprite(0,0,game.world.width,game.world.height,'McBg');
			
			this.gradeBackBtn = game.add.sprite(-5,3,'gradeSceneBackBtn');
			this.gradeBackBtn.inputEnabled = true;
			this.gradeBackBtn.input.useHandCursor = true;
			this.gradeBackBtn.events.onInputDown.add(function(){

				this.clickSound = _this.add.audio('ClickSound');
	        	this.clickSound.play();
				selectgrade3MicroConcept = false;
				game.state.start('gradeSelectionScreen',true,false);

			},this);

			this.gameModeShareBtn = game.add.image(920,20,'shareIcon');
        		this.gameModeShareBtn.anchor.setTo(0.5);
        		this.gameModeShareBtn.scale.setTo(0.8);
        		this.gameModeShareBtn.inputEnabled = true;
        		this.gameModeShareBtn.input.useHandCursor = true;
        		this.gameModeShareBtn.events.onInputDown.add(function()
        		{
        			this.clickSound = this.add.audio('ClickSound');
                	this.clickSound.play();
        			//if(appConfig.cordova && !appConfig.browser)
        			//{
        				nativeApp.ShareApp();
        			//}

        		},this);


			/*this.microConceptTopics(game,150,250,app.languageSelected.McTopicText1,0);
			this.microConceptTopics(game,330,400,app.languageSelected.McTopicText2,1);
			this.microConceptTopics(game,480,250,app.languageSelected.McTopicText3,2);
			this.microConceptTopics(game,630,400,app.languageSelected.McTopicText4,3);
			this.microConceptTopics(game,810,300,app.languageSelected.McTopicText5,4);*/

			this.microConceptTopics(game,150,220,window.selctedLang.McTopicText1,"NUMBER SENSE","tree1",0);
			this.microConceptTopics(game,380,320,window.selctedLang.McTopicText2,"NUMBER OPERATIONS","tree2",1);
			this.microConceptTopics(game,600,220,window.selctedLang.McTopicText5,"MEASUREMENT","tree3",2);
			this.microConceptTopics(game,820,320,window.selctedLang.McTopicText3,"SHAPES","tree4",3);


			/*this.downloadbg = _this.add.graphics(0, 0);
			this.downloadbg.lineStyle(0, 0xFFFFFF, 0.8);
			this.downloadbg.beginFill(0xFFFFFF, 1);
			this.downloadbg.drawRect(0,0,960,540);
			this.downloadbg.alpha = 0.5;
			this.downloadbg.boundsPadding = 0;
			this.downloadbg.inputEnabled = true;
			this.downloadbg.events.onInputDown.add(function(){},this);

			this.downloadPopup = _this.add.graphics(230, 170);
			this.downloadPopup.lineStyle(0, 0xFFFFFF, 0.8);
			this.downloadPopup.beginFill(0xFFFFFF, 1);
			this.downloadPopup.drawRect(0,0,500,200);
			this.downloadPopup.boundsPadding = 0;

			this.downloadTxt = this.add.text(this.world.centerX, this.world.centerY, 'Downloading.... \n 0%');
			this.downloadTxt.anchor.setTo(0.5);
			this.downloadTxt.align = 'center';
			
					
			this.downloadTxt.font = 'gradefont';
			this.downloadTxt.fontSize = 32;
			this.downloadTxt.fontWeight = 'normal';
			this.downloadTxt.fill = 'black';

			this.downloadTxt.wordWrap = true;
			this.downloadTxt.wordWrapWidth = 500;

			this.downlodPopupGrp = this.add.group();
			this.downlodPopupGrp.add(this.downloadbg);
			this.downlodPopupGrp.add(this.downloadPopup);
			this.downlodPopupGrp.add(this.downloadTxt);
			this.downlodPopupGrp.visible = false;*/


		}
		
	},

	microConceptTopics:function(game,x,y,lang,name,key,arrIndex)
	{
		//this.gradeTree[arrIndex] = game.add.sprite(x,y,key);
		this.gradeTree[arrIndex] = game.add.sprite(x,y,'MicroConceptTree');

		this.gradeTree[arrIndex].anchor.setTo(0.5);
		this.gradeTree[arrIndex].scale.setTo(1.3);
		this.gradeTree[arrIndex].name = name;
		this.gradeTree[arrIndex].frame = arrIndex;
		this.gradeTree[arrIndex].inputEnabled = true;
		this.gradeTree[arrIndex].input.useHandCursor = true;
		this.gradeTree[arrIndex].events.onInputDown.add(this.topicSelected,this);


		this.gradeTreeTxt[arrIndex] = this.add.text(x, y-40, ' \n '+lang+' \n ');
		this.gradeTreeTxt[arrIndex].anchor.setTo(0.5);
		this.gradeTreeTxt[arrIndex].align = 'center';
		
				
		//this.gradeTreeTxt[arrIndex].font = 'Ariel';
		this.gradeTreeTxt[arrIndex].fontSize = 22;
		this.gradeTreeTxt[arrIndex].fontWeight = 'normal';
		this.gradeTreeTxt[arrIndex].fill = '#FFFFFF';

		this.gradeTreeTxt[arrIndex].wordWrap = true;
		this.gradeTreeTxt[arrIndex].wordWrapWidth = 500;

		/*if(name=="NUMBER SENSE")
		{
			
			this.checkDirExistsorNot(constant.checkNumberSense3Dir,this.gradeTree[arrIndex]);
			
		}
		else if(name=="MEASUREMENT")
		{
			this.checkDirExistsorNot(constant.checkMeasurement3Dir,this.gradeTree[arrIndex]);
			
		}
		else if(name=="NUMBER OPERATIONS")
		{
			this.checkDirExistsorNot(constant.checkNumberOperation3Dir,this.gradeTree[arrIndex]);
			
		}*/
		
	},
	
	onMouseOver:function(target)
	{
		
		
	},
	
	topicSelected:function(target)
	{
					
        this.clickSound = _this.add.audio('ClickSound');
        this.clickSound.play();

        
		if(target.name=="NUMBER SENSE")
		{
			this.state.start('grade3NumberSense',true,false);
		}
		else if(target.name=="MEASUREMENT")
		{
			this.state.start('grade3Measurement',true,false);
		}
		else if(target.name=="SHAPES")
		{
			this.state.start('grade3Shapes',true,false);
		}
		else
		{
			this.state.start('grade3NumberOperation',true,false);
		}


		//if(target.name=="NUMBER SENSE")
		//{
			
			/*if(numbersense1PrevDownld == false && this.numberSense1Downloaded)
			{
				this.confirmReload();
			}
			else if(this.downloading==true)
			{
				//this.confirmation(constant.downloadNumberSense1,target);
				//alert("please wait till the previous download is complete");
			}
			else if(this.checkDirExistsorNot(constant.checkNumberSense1Dir))
			{
				this.state.start('grade1NumberSense',true,false);
			}
			else
			{
				this.downloadTheFile(constant.downloadNumberSense1,target);
			}*/

		//	this.checkDownload(constant.checkNumberSense3Dir,"grade3NumberSense",constant.downloadNumberSense3,target,this);


		//}
		//else if(target.name=="MEASUREMENT")
		//{
			
			/*if(measurement1PrevDownld == false && this.measurement1Downloaded)
			{
				this.confirmReload();
			}
			else if(this.downloading==true)
			{
				//this.confirmation(constant.downloadMeasurement1,target);
				//alert("please wait till the previous download is complete");
			}
			else if(this.checkDirExistsorNot(constant.checkMeasurement1Dir))
			{
				
				this.state.start('grade1Measurement',true,false);
			}
			else
			{
				this.downloadTheFile(constant.downloadMeasurement1,target);
			}*/

		//	this.checkDownload(constant.checkMeasurement3Dir,"grade3Measurement",constant.downloadMeasurement3,target,this);
		//}
		//else if(target.name=="NUMBER OPERATIONS")
		//{
			
			/*if(numberOPeration1PrevDownld == false && this.numperoperation1Downloaded)
			{
				this.confirmReload();
				
			}
			else if(this.downloading==true)
			{
				//this.confirmation(constant.downloadNumberOperation1,target);
				//alert("please wait till the previous download is complete");
			}
			else if(this.checkDirExistsorNot(constant.checkNumberOperation1Dir))
			{
				this.state.start('grade1NumberOperation',true,false);
			}
			else
			{
				this.downloadTheFile(constant.downloadNumberOperation1,target);
			}*/

		//	this.checkDownload(constant.checkNumberOperation3Dir,"grade3NumberOperation",constant.downloadNumberOperation3,target,this);
		//}
	},

	checkDownload:function(dirPath,stateName,url,target,_this)
	{

		window.resolveLocalFileSystemURL(dirPath, 
			function(){
				//alert("scucess");
				_this.state.start(stateName,true,false);
				return true;
			}, 
			function(){
				//alert("failure");
				_this.downloadTheFile(url,target);
				return false;
			});
	},


	confirmation:function(url,target)
	{
		var retVal = confirm("Abort previous download and Download this files?");
               if( retVal == true ){

               		if(downloader && this.downloading)
               			downloader.abort();

               	 this.downloadTheFile(url,target);
                  return true;
               }
               else{
               	//console.log("denied");
               	//don nothing, continue.
                  //document.write ("User does not want to continue!");
                  return false;
              }
	},

	checkDirExistsorNot:function(dirPath,target)
	{
		////alert(dirPath);
		window.resolveLocalFileSystemURL(dirPath, 
			function(){
				//alert("scucess");
				target.frame = 0;
				return true;
			}, 
			function(){
				//alert("failure");
				target.frame = 1;
				return false;
			});
	},

	downloadTheFile:function(url,target)
	{

		var _this = this;
		////alert("here download");

		var initialized = function (event) {
	        downloader.get(url);
	        event.target.removeEventListener(event.name, initialized);
	    };

	    document.addEventListener('DOWNLOADER_initialized', initialized);

	    	downloader.init({
	        folder: 'www',
	        fileSystem: window.directoryPath,
	        unzip: true,
	        check: false,
	        noMedia: true,
	        wifiOnly: false,
	        delete: true
	    });


		//downloader.init({folder: "www", fileSystem:window.directoryPath, unzip: true, delete: true});
		//downloader.get(url);

		this.downlodPopupGrp.visible = true;
		//this.game.input.enabled = false;

		//_this.downloading = true;
		////alert(_this.downloading);

		document.addEventListener("DOWNLOADER_downloadProgress", function(event){
		  var data = event.data;
		  //console.log(data);
		 // _this.downloading = true;
		 	_this.downloadTxt.setText("Downloading.... \n "+data[0]+"%");
		});


		document.addEventListener("DOWNLOADER_downloadError", function(event){
		  var data = event.data;
		  //console.log(data);
		  _this.downlodPopupGrp.visible = false;
		  alert("Download Failed please try again");
		  //_this.game.input.enabled = true;
		});

		document.addEventListener("DOWNLOADER_downloadSuccess", function(event){
		  var data = event.data;
		  //console.log(data);
		  //location.reload(); 
		});

		document.addEventListener("DOWNLOADER_unzipProgress", function(event){
		  var data = event.data;
		  //console.log(data);
		  //_this.downloading = true;
		  _this.downloadTxt.setText("Unzipping.... \n "+data[0]+"%");
		});

		document.addEventListener("DOWNLOADER_unzipSuccess", function(event){
		  var data = event.data;
		  //console.log(data);
		  //target.frame = 0;
		  //_this.downloading = false;

		  _this.downlodPopupGrp.visible = false;

		  location.reload(); 
		  
		  //_this.setDownloadComplete(target);


		  /*//alert(_this.downloading);
		  if(target.name=="NUMBER SENSE")
		{
			_this.numberSense1Downloaded = true;
		}
		else if(target.name=="MEASUREMENT")
		{
			_this.measurement1Downloaded = true;
		}
		else if(target.name=="NUMBER OPERATIONS")
		{
			_this.numperoperation1Downloaded = true;
		}

		var retVal = confirm("Download complete do you want to reload the game?");
               if( retVal == true ){
               	  location.reload(); 
                  //return true;
               }
               else{
               	
                  //return false;
              }



		  //_this.confirmReload();*/
		});

		document.addEventListener("DOWNLOADER_unzipError", function(event){
		  var data = event.data;
		  //console.log(data);
		  //alert("Error while unZipping");
		  _this.downlodPopupGrp.visible = false;
		  //alert("Download Failed please try again");
		  //_this.game.input.enabled = true;
		});
	},

	setDownloadComplete:function(target)
	{
		if(target.name=="NUMBER SENSE")
		{
			this.numberSense1Downloaded = true;
		}
		else if(target.name=="MEASUREMENT")
		{
			this.measurement1Downloaded = true;
		}
		else if(target.name=="NUMBER OPERATIONS")
		{
			this.numperoperation1Downloaded = true;
		}
	},



	confirmReload:function()
	{
			var retVal = confirm("Download complete do you want to reload the game?");
               if( retVal == true ){
               	  location.reload(); 
                  //return true;
               }
               else{
               	
                  //return false;
              }
	},
	
	shutdown:function()
	{
		if(app.cordova)
			document.removeEventListener("online", _this.syncTelFunc, false);

		/*this.game = null;
		delete this.game;


		this.background.destroy();
		this.background = null;
		delete this.background;

		this.gradeBackBtn.events.onInputDown.removeAll();
		this.gradeBackBtn.destroy();
		this.gradeBackBtn = null;
		delete this.background;
		
		this.gradeTree[0].events.onInputDown.removeAll();
        this.gradeTree[1].events.onInputDown.removeAll();
        this.gradeTree[2].events.onInputDown.removeAll();
        //this.gradeTree[3].events.onInputDown.removeAll();
        //this.gradeTree[4].events.onInputDown.removeAll();

        this.gradeTree[0].destroy();
        this.gradeTree[1].destroy();
        this.gradeTree[2].destroy();
        //this.gradeTree[3].destroy();
        //this.gradeTree[4].destroy();

        this.gradeTreeTxt[0].destroy();
        this.gradeTreeTxt[1].destroy();
        this.gradeTreeTxt[2].destroy();
        //this.gradeTreeTxt[3].destroy();
        //this.gradeTreeTxt[4].destroy();

        this.gradeTree = [];
        this.gradeTree = null;

        this.gradeTreeTxt = [];
        this.gradeTreeTxt = null;

        delete this.gradeTree;
        delete this.gradeTreeTxt;*/

	}
	
};