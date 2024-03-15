// 创建事件小仓库
import { defineStore } from "pinia";

let thingstore = defineStore('thingstore',{
    state:()=>{
        return {
            waringdata:[
                {
                    time: '2016-05-03',
                    style: '火灾',
                    status: '未处理',
                    place: "A楼-1层-001",
                    photo: ""
                },
                {
                    time: '2016-05-03',
                    style: '吸烟',
                    status: '未处理',
                    place: "A楼-1层-001",
                    photo: ""
                },
                {
                    time: '2016-05-04',
                    style: '火灾',
                    status: '未处理',
                    place: "A楼-1层-001",
                    photo: ""
                },
                {
                    time: '2016-05-03',
                    style: '火灾',
                    status: '未处理',
                    place: "A楼-1层-001",
                    photo: ""
                },
                {
                    time: '2016-05-03',
                    style: '火灾',
                    status: '未处理',
                    place: "A楼-1层-001",
                    photo: ""
                },
                {
                    time: '2016-05-03',
                    style: '火灾',
                    status: '未处理',
                    place: "A楼-2层-001",
                    photo: ""
                },
                {
                    time: '2016-05-03',
                    style: '火灾',
                    status: '未处理',
                    place: "A楼-2层-001",
                    photo: ""
                },
                {
                    time: '2016-05-03',
                    style: '火灾',
                    status: '未处理',
                    place: "A楼-2层-001",
                    photo: ""
                },
                {
                    time: '2016-05-03',
                    style: '火灾',
                    status: '未处理',
                    place: "A楼-2层-001",
                    photo: ""
                },
                {
                    time: '2016-05-03',
                    style: '火灾',
                    status: '未处理',
                    place: "A楼-2层-001",
                    photo: ""
                },
                {
                    time: '2016-05-03',
                    style: '火灾',
                    status: '未处理',
                    place: "A楼-2层-001",
                    photo: ""
                },
                {
                    time: '2016-05-03',
                    style: '火灾',
                    status: '未处理',
                    place: "A楼-2层-001",
                    photo: ""
                },
            
            ]
        }
    },
    
})


export default thingstore;