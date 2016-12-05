'use strict';
(()=>{
	class Tile {
		private _id :number
		public imgUrl :string
		constructor(num:number){
			this._id = num
			this.imgUrl = this.setImgUrl(this._id)
		}
		private setImgUrl(id:number):string{
			const urlPrefix = 'imgs/index2016/'
			const urlSuffix = '.gif'
			return urlPrefix + id.toString(10) + urlSuffix
		}
		get id(){
			return this._id
		}
	}



})
