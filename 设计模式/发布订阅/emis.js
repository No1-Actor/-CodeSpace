class EventEmitter {
    constructor() {
        this.event = {};
    }
    // 事件监听器
    on(type, cb) {
        if(!this.event[type]){
            this.event[type] = [cb];
        }else{
            this.event[type].push(cb);
        }
    }
    // 事件触发器
    emit(type, ...args) {
        if(!this.event[type]) {
            return;
        } else {
            this.event[type].forEach((cb) => {
                cb(...args);
            })
        }
    }
    // 一次性监听器
    once(event, listener) {

    }
    // 移除监听器
    off(event, listener) {
        
    }
}

let ev = new EventEmitter();
const fn = (str) => {
    console.log(str);
}

ev.on('run', fn) // 监听run事件
ev.emit('run', 123) // 触发run事件
