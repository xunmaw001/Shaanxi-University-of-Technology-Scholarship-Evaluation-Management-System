const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"公告类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryGonggao"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"活动类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryHuodong"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"活动得奖管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryHuodongDejiang"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"奖学金申请类型",
                        "menuJump":"列表",
                        "tableName":"dictionaryJiangxuejinShenqing"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"政策类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryNews"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"学年管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryXuenian"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公告管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"老师管理",
                        "menuJump":"列表",
                        "tableName":"laoshi"
                    }
                ],
                "menu":"老师管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"政策信息管理",
                        "menuJump":"列表",
                        "tableName":"news"
                    }
                ],
                "menu":"政策信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "导入导出",
                            "修改",
                            "删除"
                        ],
                        "menu":"学生成绩管理",
                        "menuJump":"列表",
                        "tableName":"chengji"
                    }
                ],
                "menu":"学生成绩管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"活动管理",
                        "menuJump":"列表",
                        "tableName":"huodong"
                    }
                ],
                "menu":"活动管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"综合评测管理",
                        "menuJump":"列表",
                        "tableName":"zonghepingce"
                    }
                ],
                "menu":"综合评测管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "审核",
                            "修改",
                            "删除"
                        ],
                        "menu":"奖学金申请管理",
                        "menuJump":"列表",
                        "tableName":"jiangxuejinShenqing"
                    }
                ],
                "menu":"奖学金申请管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "导入导出",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"学生管理",
                        "menuJump":"列表",
                        "tableName":"xuesheng"
                    }
                ],
                "menu":"学生管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
	,
	{
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"学年管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryXuenian"
                    }
                ],
                "menu":"学年管理"
            }
            ,
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"公告管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"政策信息管理",
                        "menuJump":"列表",
                        "tableName":"news"
                    }
                ],
                "menu":"政策信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "导入导出",
                            "修改",
                            "删除"
                        ],
                        "menu":"学生成绩管理",
                        "menuJump":"列表",
                        "tableName":"chengji"
                    }
                ],
                "menu":"学生成绩管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"活动管理",
                        "menuJump":"列表",
                        "tableName":"huodong"
                    }
                ],
                "menu":"活动管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"综合评测管理",
                        "menuJump":"列表",
                        "tableName":"zonghepingce"
                    }
                ],
                "menu":"综合评测管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "审核"
                        ],
                        "menu":"奖学金申请管理",
                        "menuJump":"列表",
                        "tableName":"jiangxuejinShenqing"
                    }
                ],
                "menu":"奖学金申请管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"学生管理",
                        "menuJump":"列表",
                        "tableName":"xuesheng"
                    }
                ],
                "menu":"学生管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"老师",
        "tableName":"laoshi"
    }
	,
	{
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"公告管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"政策信息管理",
                        "menuJump":"列表",
                        "tableName":"news"
                    }
                ],
                "menu":"政策信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"学生成绩管理",
                        "menuJump":"列表",
                        "tableName":"chengji"
                    }
                ],
                "menu":"学生成绩管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"活动管理",
                        "menuJump":"列表",
                        "tableName":"huodong"
                    }
                ],
                "menu":"活动管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"综合评测管理",
                        "menuJump":"列表",
                        "tableName":"zonghepingce"
                    }
                ],
                "menu":"综合评测管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增"
                        ],
                        "menu":"奖学金申请管理",
                        "menuJump":"列表",
                        "tableName":"jiangxuejinShenqing"
                    }
                ],
                "menu":"奖学金申请管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"学生",
        "tableName":"xuesheng"
    }
]
    }
}
export default menu;