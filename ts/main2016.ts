'use strict';
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
	get image(){
		return `<img src="${this.imgUrl}" class="tile">`
	}
}

class Game {
	private positions :number[][]
	private rightPos :number[][]
	private time :number
	private tiles :any[][]
	private board = 'GameBoard'
	constructor(){
		this.setPositions()
		this.setTiles()
		this.render()
		this.setEvents()
	}
	render(){
		let d = this.gameBoard

	}
	private setPositions(){
		let arr = [1,...,15]
		let k = 1
		for (let i=0; i<4; i++) {
			for (let j=0; j<4; j++) {
				let id = _.sample(arr)
				_.drop(arr,id)
				this.positions[i][j] = id
				this.rightPos[i][j] = k
				k++
			}
		}
	}
	private setTiles(){
		let k = 1
		for (let i=0; i<4; i++) {
			for (let j=0; j<4; j++) {
				if (k===16) break
				this.tiles[i][j] = new Tile(k)
				k++
			}
		}
	}
	get gameBoard(){
		return document.getElementById(this.board);
	}
}
