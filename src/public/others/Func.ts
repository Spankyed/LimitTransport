/**
 * Created by renjianfeng
 * 公共方法管理
 */

export class Func {
    private static instance: Func;

    public static get ins(): Func {
        if (!this.instance) {
            this.instance = new Func();
        }
        return this.instance;
    }

    /**
     * 替换字符串中元素
     * @param str
     * @param replaceList
     */

    public replace(str, replaceList){
        var len = replaceList.length;
        for (var i = 0; i < len; i++) {
            str = str.replace("{" + i + "}", replaceList[i]);
        }
        return str;
    }

    /**
     * 向下取整
     * @param n
     * @returns {*}
     */

    public toInt(n){
        return n >> 0;
    }

    /**
     * 判断操作系统
     * @returns {Array|{index: number, input: string}}
     */
    public isIOS () {
        return navigator.userAgent.match(/iphone|ipod|ipad/gi);
    }


    /**
     * 给数组随机排序
     * @param arr
     */
    public randomArr (arr) {
        var len = arr.length;
        for(var i = 0; i < len; i++) {
            var n = this.random(0, arr.length, true);
            var temp = arr[n];
            arr[n] = arr[i];
            arr[i] = temp;
        }
        return arr;
    };


    /**
     * 范围随机数
     * @param n1 范围起始
     * @param n2 范围结束
     * @param int 结果是否返回整数
     * @return {*}
     */
    public random (n1, n2, int) {
        var n;
        if((typeof n1) != 'undefined' && (typeof n2) != 'undefined') {
            n = Math.min(n1, n2) + Math.random() * Math.max(n1, n2);
        } else {
            n = Math.random();
        }
        if(int) {
            n = this.toInt(n);
        }
        return n;
    }





  //  private DataManager;

}

