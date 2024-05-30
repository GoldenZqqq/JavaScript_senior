class ZQEventBus {
  constructor() {
    this.eventBus = {}
  }

  on (eventName, eventCallback, thisArg) {
    let handlers = this.eventBus[eventName]
    if (!handlers) {
      handlers = []
      this.eventBus[eventName] = handlers
    }
    handlers.push({
      eventCallback,
      thisArg
    })
  }

  off (eventName, eventCallback) {
    const handlers = this.eventBus[eventName]
    if (!handlers) return
    const newHandlers = [...handlers]
    for (let i = 0; i < newHandlers.length; i++) {
      const handler = newHandlers[i]
      if (handler.eventCallback === eventCallback) {
        const index = handlers.indexOf(handler)
        handlers.splice(index, 1)
      }
    }
  }

  emit (eventName, ...payload) {
    const handlers = this.eventBus[eventName]
    if (!handlers) return
    handlers.forEach(handler => {
      handler.eventCallback.apply(handler.thisArg, payload)
    })
  }
}

const eventBus = new ZQEventBus()

// main.js
eventBus.on("abc", function () {
  console.log("监听abc", this)
}, { name: "why" })

const handlerCallback = function () {
  console.log("监听abc", this)
}
eventBus.on("abc", handlerCallback, { name: "why" })

// utils.js
eventBus.emit("abc", 123)

// 移除监听
eventBus.off("abc", handlerCallback)
eventBus.emit("abc", 123)
