const d = document;
const n = navigator;

export default function webCam(id) {
  const $video = d.getElementById(id);

  //console.log(n.mediaDevices.getUserMedia);
  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        console.log(stream);
        $video.srcObject = stream;
        $video.play();
      })
      .catch((err) => {
        $video.insertAdjacentHTML(
          "beforebegin",
          `Sucedió el siguiente error!: <p><mark>${err}</mark></p>`
        );
        console.log(err);
      });
  }
}
