
class CallLimitier {

  constructor(fn, interval){
    this.fn = fn;
    this.interval = interval || 20;
  }

  register(fn, ctx) {
    this.fn = fn;
  }

  get tm() {
    return this._tm
  }

  set tm(value) {
    this._tm = value;
  }

  invoke() {
    let args = arguments;
    if(this.tm){
      clearTimeout(this.tm);
    }
    let currentTm = this.tm = setTimeout(() => {
      let canceled = {
        isCancaled: () => this.tm !== currentTm
      };
      this.fn.call(null, ...args, canceled);
    }, this.interval);
  }
}

export default CallLimitier;