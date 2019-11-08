console.log('你好typescript');

function getData() {

}
var str:string="你好tstype";
/*
webstorm配置自动编译
* 1.第一步tsc --init生成tsconfig.json  改"outDir":"./js"
* 2.第二步 - 运行任务  监视tsconfig.json  打开设置 选择typescript选中recomplie on change
* */

//布尔类型
/*
* es5的写法（正确写法）
        var flag = true;
        flag=456;
* */

/*
* typescript中为了使编写的代码更规范，更有利于维护，增加了类型效验
* 写ts代码必须制定类型
*
* */
/*
var flag:boolean=true;
flag=123;//错误
flag=false;
console.log(flag)
* */
//数字类型（number）
/*
var num:number=123;//正确
console.log(num);
num='str';//错误

* */
//字符串类型（string）
// var str:string = 'string';
// console.log(str);

//数组类型（array） ts中定义数组有两种方式
// var arr = ['1','2'];//es5定义数组
//    1.第一种定义数组的方式
/*
var arr:number[]=[11,22,33];
console.log(arr);
* */

//    1.第二种定义数组的方式
/*
*
var arr:Array<number>=[11,22,33];
console.log(arr);*/


//元组类型（tuple） 属于数组的一种

// var arr:Array<number>=[11,22,33];
// console.log(arr);

// let arr:[number,string]=[123,'this is ts'];
// console.log(arr);

/*枚举类型
1 success 0 error
pay_status 1 2 未支付 3取消
* */
   /*
    enum flag{success=1,error=2};
    let s:flag=flag.success;
    console.log(s);
   * */

   // enum Color{blue,red=3,'orange'};
   //
   // var c:Color=Color.orange;
   // console.log(c);//1  如果标识符没有赋值 它得值就是下标

// enum Err{'undefined'=-1,'null'=-2,'success'=1};
// var e:Err=Err.null;
// console.log(e);

//any 任意类型

// var num:any=123;
// num='str';
// num=true;
// console.log(num);


//任意类型的用处
// var oBox:any = document.getElementById('box');
// oBox.style.color='red';

//null和undefined 其他数据类型（never类型）的子类型
// var num:number;
// console.log(num) //输出：undefined  报错

// var num:undefined;
// console.log(num) //输出：undefined  正确

// var num:number|undefined;
// num=123;
// console.log(num);

//定义没有赋值就是undefined

// var num:null;
// num=null;

//一个元素可能是number类型 可能是null可能是undefined
// var num:number|null|undefined;
// num=1234;
// console.log(num);
//void类型：typescript中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值


//es5定义方法
// function run() {
//     console.log('run')
// }
// run();
//表示方法没有返回任何类型
/*
function run():void {
    console.log('run')
}
run();
 */
//错误写法
/*
function run():undefined {
    console.log('run')
}
run();
* */
//正确写法

// function run():number {
//     console.log('run')
//     return 1
// }
// run();





//never类型：是其他类型（包括null和undefined）的子类型，代表从不会出现的值，这意味着声明never的变量只能被never类型所赋值

/*var a:undefined;
a=undefined;

var b:null;
b=null;
* */
// var a:never;
// a=123;//错误的写法

// a=(()=>{
//     throw new Error('错误');
// })()


