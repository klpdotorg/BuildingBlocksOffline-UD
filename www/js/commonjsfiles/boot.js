var Game={};

Game.boot=function(){
	
};

Game.boot.prototype={
	
	preload:function(){

		window.baseUrl = "./";
		_this = this;
		//_this.cache.destroy();		
		window.languageSelected == "Urdu";
		_this.load.json('translations','js/lang.json');
				
		_this.load.image('prgressbarOutLine',window.baseUrl+'assets/commonAssets/prgressbarOutLine.png');
		_this.load.image('preloadBar',window.baseUrl+'assets/commonAssets/prgressbar.png');

		

		_this.load.image('loadingBg1',window.baseUrl+'assets/commonAssets/loadingBg1.png');
		_this.load.image('loadingBg2',window.baseUrl+'assets/commonAssets/loadingBg2.png');
		_this.load.image('singleCarrotForLoading',window.baseUrl+'assets/commonAssets/singleCarrotForLoading.png');
		_this.load.atlas('loadingTankAnim',window.baseUrl+'assets/commonAssets/loadingTankAnim.png',window.baseUrl+'assets/commonAssets/loadingTankAnim.json');
		_this.load.atlas('loadingGlassAnim',window.baseUrl+'assets/commonAssets/loadingGlassAnim.png',window.baseUrl+'assets/commonAssets/loadingGlassAnim.json');
		_this.load.atlas('loadingBottleAnim',window.baseUrl+'assets/commonAssets/loadingBottleAnim.png',window.baseUrl+'assets/commonAssets/loadingBottleAnim.json');
		_this.load.atlas('loadingTimeAnim',window.baseUrl+'assets/commonAssets/loadingTimeAnim.png',window.baseUrl+'assets/commonAssets/loadingTimeAnim.json');
		_this.load.atlas('loadingFishAnim2',window.baseUrl+'assets/commonAssets/loadingFishAnim2.png',window.baseUrl+'assets/commonAssets/loadingFishAnim2.json');
		_this.load.atlas('rabitSittingAnim',window.baseUrl+'assets/commonAssets/rabitSittingAnim.png',window.baseUrl+'assets/commonAssets/rabitSittingAnim.json');
		_this.load.atlas('rabitEatingAnim',window.baseUrl+'assets/commonAssets/rabitEatingAnim.png',window.baseUrl+'assets/commonAssets/rabitEatingAnim.json');
		_this.load.atlas('rabitJumpAnim',window.baseUrl+'assets/commonAssets/rabitJumpAnim.png',window.baseUrl+'assets/commonAssets/rabitJumpAnim.json');


		_this.load.image('CommonBackground',window.baseUrl+'assets/commonAssets/commonBg.png');
		
		_this.load.atlas('CommonAssets',window.baseUrl+'assets/commonAssets/phaserTest.png',window.baseUrl+'assets/commonAssets/phaserTest.json');	
      	
	},

	create:function(game){
		_this.bg = _this.add.tileSprite(0,-80,_this.world.width,_this.world.height,'CommonAssets','commonBg');
		_this.bg.scale.setTo(1,1.5);
		
		game.input.maxPointers = 1;

		


		screen.orientation.lock('landscape');
		AndroidFullScreen.setSystemUiVisibility(AndroidFullScreen.SYSTEM_UI_FLAG_FULLSCREEN, null, null);
		//AndroidFullScreen.setSystemUiVisibility(AndroidFullScreen.SYSTEM_UI_FLAG_FULLSCREEN | AndroidFullScreen.SYSTEM_UI_FLAG_LOW_PROFILE, null, null);

		
		_this.game.scale.setGameSize(960, 540);
		
        _this.scale.forceOrientation(false, true);
		
		
		var translations = _this.cache.getJSON('translations');
		
		if(window.languageSelected == "Hindi")
		{
			window.selctedLang = translations.hn;
		}
		else if(window.languageSelected == "Kannada")
		{
			window.selctedLang = translations.kan;
		}
		else if(window.languageSelected == "Odiya")
		{
			window.selctedLang = translations.od;
		}
		else if(window.languageSelected == "Gujarati")
		{
			window.selctedLang = translations.gu;
		}
		else if(window.languageSelected == "Marathi")
		{
			window.selctedLang = translations.ma;
		}
		else if(window.languageSelected == "Telugu")
		{
			window.selctedLang = translations.te;
		}
		else if(window.languageSelected == "Tamil")
		{
			window.selctedLang = translations.tm;
		}
		else if(window.languageSelected == "Urdu")
		{
			window.selctedLang = translations.ur;
		}
		else
		{
			window.selctedLang = translations.en;
		}
		

		_this.state.start('preloader',true,false);

				
	},
	
	shutdown:function()
	{
		_this = null;
	}
	
}