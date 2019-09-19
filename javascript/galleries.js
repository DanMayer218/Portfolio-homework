// This javascript file is exclusive to javascript functions and methods surrounding gallery pages
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, options);
  });

  var instance = M.Materialbox.getInstance(elem);

  instance.open();
  instance.close();
  