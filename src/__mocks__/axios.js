module.exports = {
  post
};

function post(url, payload) {
  if (payload.password === "mellon") {
    return Promise.resolve({ success: true, statusCode: 200 });
  } else {
    return Promise.reject({ success: false, statusCode: 401 });
  }
}
