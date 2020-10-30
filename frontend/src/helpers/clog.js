const ConsoleLogPluggin = {
    install(Vue) {
      Vue.prototype.cLog = (message, ...objs) => {
        if(process.env.NODE_ENV !=='production'){
           typeof message === "string" ? console.log(message,objs): console.log(message);
        } 
      }
    },
  }

  export default ConsoleLogPluggin;