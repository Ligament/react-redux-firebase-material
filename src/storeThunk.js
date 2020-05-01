function sendNotification(payload) {
  return {
    type: "NOTIFICATION",
    payload
  };
}

export function addTodo(newTodo) {
  return (dispatch, getState, getFirebase) => {
    return getFirebase()
      .ref("todos")
      .push(newTodo)
      .then(() => {
        dispatch(sendNotification("Todo Added"));
      });
  };
}
