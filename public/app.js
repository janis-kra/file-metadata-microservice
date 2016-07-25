var uploader = function uploader (id) {
  var input;
  var file;

  return {
    fileChanged: function () {
      if (input === undefined) {
        input = document.getElementById(id);
      }
      file = input.files[0];
      // For testing:
      console.log("name : " + file.name);
      console.log("size : " + file.size);
      console.log("type : " + file.type);
      console.log("date : " + file.lastModified);
    },

    upload: function () {
      console.log('upload called');
    }
  };
};

window.myUpload = uploader('upload');
