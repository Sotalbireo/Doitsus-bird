declare var _ :any;
'use strict';
class Tile {
	private _id :number
	public imgUrl :string
	constructor(num:number){
		this._id = num
		this.imgUrl = this.setImgUrl(this._id)
	}
	private setImgUrl(id:number):string{
		return `imgs/index2016/${id.toString(10)}.gif`
	}
	get id(){
		return this._id
	}
	get image(){
		return `<img src="${this.imgUrl}" class="tile" onClick="game.moveTile(${this.id})">`
	}
}

class Game {
	private positions :number[][] = new Array(4)
	private rightPos :number[][] = new Array(4)
	private time = 0
	private tiles :Tile[][]
	static board = 'GameBoard'
	constructor(){
		this.setPositions()
		this.setTiles()
		this.render()
		// this.start()
	}
	render(){
		// let d = this.gameBoard

	}
	private setPositions(){
		let arr :number[] = _.shuffle(_.range(1,15))
		let k = 1
		for (let i=0; i<4; i++) {
			this.positions.push(new Array(4))
			this.rightPos.push(new Array(4))
			for (let j=0; j<4; j++) {
				if (k===16) break
				this.positions[i].push(arr[k-1])
				this.rightPos[i].push(k)
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
		return document.getElementById(Game.board)
	}
	public timeCount(){
		this.time++
	}
	// public moveTile(id :number){

	// }
}





document.getElementById(Game.board)!.addEventListener('contextmenu', (e:Event)=>{
	e.preventDefault()
	return false
}, false)

let game = new Game()
