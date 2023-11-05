const eventBus = {
    on(event, callback) {
        document.addEventListener(event, (e) => callback(e.detail));
        console.log('eventBus triggered')
    },
    dispatch(event, data) {
        document.dispatchEvent(new CustomEvent(event, { detail: data }));
    },
    remove(event, callback) {
        document.removeEventListener(event, callback);
    },
  }

  export default eventBus