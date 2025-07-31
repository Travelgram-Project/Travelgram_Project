  const fileInput = document.getElementById("fileUpload");
  fileInput.addEventListener("change", function () {
    if (this.files.length > 0) {
    }
  });


//   const fileInput = document.getElementById('fileInput'); 
  const previewImage = document.getElementById('previewImage');

  fileInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        previewImage.src = e.target.result;
        document.getElementById('upload').style.display = 'none';
        document.getElementById('preview').style.display = 'flex';
      };
      reader.readAsDataURL(file);
    }
  });

document.getElementById('backBtn').addEventListener('click', function () {
  // preview 화면 숨기기
  document.getElementById('preview').style.display = 'none';

  // upload 화면 다시 보이게
  document.getElementById('upload').style.display = 'flex'; // 또는 'block'도 가능
});




