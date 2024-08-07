import {
	post,
	get
} from '@/api/api.js'

// 查询所有奖项
export function prize(data) {
	return get('/app/prize/list', data)
}

// 点击抽奖
export function draw(data) {
	return get('/app/prize/draw', data)
}
//当前用户抽奖记录
export function prizeRecord(data) {
	return get('/app/prizeRecord/page', data)
}
//星星数量够不够兑换茅台
export function exchangeMaoTaiCheck(data) {
	return get('/app/exchange/exchangeMaoTaiCheck', data)
}
//所有用户抽奖记录
export function allPrizeRecord(data) {
	return get('/app/prizeRecord/allPage', data)
}
//领奖
export function receive(data) {
	return post('/app/prizeRecord/receive', data)
}
//星星兑换茅台
export function exchangeMaoTai(data) {
	return post('/app/exchange/exchangeMaoTai', data)
}